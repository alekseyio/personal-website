import { MetadataRoute } from 'next';

import { config } from './config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.common.baseUrl,
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
