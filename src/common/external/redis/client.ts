import Redis from 'ioredis';

import { config } from '~/app/config';

export const redis = new Redis({
  host: config.redis.host,
  port: config.redis.port,
  username: config.redis.username,
  password: config.redis.password,
  tls: {},
});
