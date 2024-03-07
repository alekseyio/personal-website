import Link from 'next/link';

import { ExternalLink } from '~/common/components/icons';

export function Intro() {
  return (
    <section>
      <h1>
        Aleksei Kuznetsov
        <br />
        Full-stack Engineer & Mentor
      </h1>
      <p>
        Hey, my name is Aleksei. I&apos;m a full-stack engineer from Helsinki, Finland.
        <br />
        I&apos;m passionate about all aspects of application development, but my
        expertise primarily lies in frontend and backend development for web
        applications.
      </p>
      <p>
        I frequently assist other engineers seeking expertise in areas where I&apos;ve
        contributed. This makes mentoring a regular part of my daily work.
      </p>
      <div className="mt-5 space-x-4">
        <Link className="action action--primary" href="/contact">
          Get in touch
        </Link>
        <Link className="action action--secondary" href="/">
          Resume
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
