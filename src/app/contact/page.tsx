import { Metadata } from 'next';

import { GetInTouch } from '~/components/get-in-touch';

export const metadata: Metadata = {
  title: 'Get in Touch',
};

export default function Contact() {
  return <GetInTouch />;
}
