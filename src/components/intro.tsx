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
        I&apos;m passionate about all sorts of software engineering, but my expertise
        primarily lies in frontend and backend development of web applications.
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
