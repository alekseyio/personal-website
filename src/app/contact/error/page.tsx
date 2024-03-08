import { Metadata } from 'next';

import { ContactError } from '~/components/contact-error';

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
};

export default function Error() {
  return <ContactError />;
}
