import { AboutMe } from '~/components/about-me';
import { Expertise } from '~/components/expertise';
import { Intro } from '~/components/intro';

export default function Index() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Expertise />
    </>
  );
}
