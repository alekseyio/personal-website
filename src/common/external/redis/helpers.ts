const KEY_DELIMITER = ':';

export function getKey(scope: string, ctx: string, id: string) {
  return [scope, ctx, id].join(KEY_DELIMITER);
}
