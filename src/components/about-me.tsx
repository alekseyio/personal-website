import { ExternalLink } from '~/common/components/icons';

export function AboutMe() {
  return (
    <section>
      <h2>About me</h2>
      <p>
        Originally from Saint Petersburg, Russia, I&apos;ve been living in Helsinki,
        Finland, since the beginning of 2023. Before moving to Finland, I spent a year
        living and working in sunny and warm Armenia.
      </p>
      <p>
        In addition to my passion for working as a Software Engineer, I find joy in a
        variety of hobbies and interests. Cooking, traveling, and video games are among
        my favorites.
      </p>
      <p>
        Right now I work as a full-stack developer at&nbsp;
        <a
          className="inline-flex items-center font-medium text-black hover:underline dark:text-zinc-50"
          href="https://upcloud.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          UpCloud&nbsp;
          <ExternalLink className="h-5 w-5" />
        </a>
        .
      </p>
    </section>
  );
}
