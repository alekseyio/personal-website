import { ExternalLink } from '~/common/components/icons';

export function Footer() {
  return (
    <footer className="mt-14 text-sm">
      Crafted by me in 2024.
      <br />
      Source code can be found on&nbsp;
      <a
        className="inline-flex items-center font-medium text-black hover:underline"
        href="/"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub <ExternalLink className="h-4 w-4" />
      </a>
      .
    </footer>
  );
}
