/**
 * Actual response includes other fields that are not relevant atm
 */
interface TurnstileVerificationResponse {
  success: boolean;
}

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * @returns whether token is valid
 */
export async function validateTurnstileToken(
  secretKey: string,
  token: string,
  ip?: string,
): Promise<boolean> {
  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);

  if (typeof ip === 'string') {
    formData.append('remoteip', ip);
  }

  const response = await fetch(VERIFY_URL, { body: formData, method: 'POST' });
  const data: TurnstileVerificationResponse = await response.json();

  return data.success;
}
