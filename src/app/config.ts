import { assert } from '~/common/util';

assert(
  typeof process.env.NEXT_PUBLIC_API_BASE_URL === 'string',
  '"NEXT_PUBLIC_API_BASE_URL" environment variable is not defined',
);
assert(
  typeof process.env.NEXT_PUBLIC_BASE_URL === 'string',
  '"NEXT_PUBLIC_BASE_URL" environment variable is not defined',
);
assert(
  typeof process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY === 'string',
  '"NEXT_PUBLIC_TURNSTILE_SITE_KEY" environment variable is not defined',
);

export const config = {
  common: {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  },
};
