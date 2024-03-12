import { MetadataRoute } from 'next';

import { config } from './config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      disallow: '/contact/*',
      userAgent: '*',
    },
    sitemap: `${config.common.baseUrl}/sitemap.xml`,
  };
}
