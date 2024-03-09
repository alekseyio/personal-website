import { redis } from './client';
import { getKey } from './helpers';

interface RateLimitResult {
  currentCount: number;
  remaining: number;
  success: boolean;
}

export async function rateLimit(
  ctx: string,
  id: string,
  maxAttempts: number,
  seconds: number,
): Promise<RateLimitResult> {
  const key = getKey('rate-limit', ctx, id);

  try {
    const value = await redis.get(key);
    const currentCount = value ? parseInt(value, 10) : 0;

    if (currentCount >= maxAttempts) {
      return {
        currentCount,
        remaining: 0,
        success: false,
      };
    }

    /**
     * `incr` will set value to 0 if no value exists for this key
     * so, no need to save the new key first!
     */
    await redis.incr(key);
    await redis.expire(key, seconds);

    return {
      currentCount: currentCount + 1,
      remaining: maxAttempts - (currentCount + 1),
      success: true,
    };
  } catch (err) {
    console.log(`Rate limit with "${ctx}" context and "${id}" failed`, err);

    return {
      currentCount: -1,
      remaining: -1,
      success: false,
    };
  }
}
