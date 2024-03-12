import Link from 'next/link';

import { ExternalLink } from '~/common/components/icons';

export function Intro() {
  return (
    <section>
      <h1>
        Aleksei Kuznetsov
        <br />
        Full-stack Developer
      </h1>
      <p>
        Hey, my name is Aleksei. I&apos;m a full-stack developer from Helsinki, Finland.
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
        <a className="action action--primary" href="/resume.pdf" target="_blank">
          Resume
          <ExternalLink className="h-5 w-5" />
        </a>
        <Link className="action action--secondary" href="/contact">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
