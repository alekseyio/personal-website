export function getClientIp(headers: Headers): string | undefined {
  if (process.env.NODE_ENV === 'development') {
    return '0.0.0.0';
  }

  const forwardedFor = headers.get('x-forwarded-for');
  const realIp = headers.get('x-real-ip');

  if (forwardedFor) {
    return forwardedFor.split(',').at(0)?.trim();
  }

  return realIp?.trim();
}
