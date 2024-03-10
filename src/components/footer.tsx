import { ExternalLink } from '~/common/components/icons';

export function Footer() {
  return (
    <footer className="mt-14 text-sm max-sm:mt-8">
      Crafted by me in 2024.
      <br />
      Sources can be found on&nbsp;
      <a
        className="inline-flex items-center font-medium text-black hover:underline dark:text-zinc-50"
        href="https://github.com/alekseyio/personal-website"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub <ExternalLink className="h-4 w-4" />
      </a>
      .
    </footer>
  );
}
