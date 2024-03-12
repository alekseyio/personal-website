import { Metadata } from 'next';

import { ContactSuccess } from '~/components/contact-success';

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
  title: 'Thank you!',
};

export default function Success() {
  return <ContactSuccess />;
}
