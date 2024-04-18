import { Link } from "react-router-dom";

import { Heading, Layout, Text } from "../components";

function Root() {
  return (
    <Layout>
      <article className="flex min-h-[calc(100vh-4.5rem)] flex-col items-center overflow-hidden px-6 py-8 md:gap-8 xl:min-h-min xl:max-w-6xl xl:flex-row xl:items-end xl:justify-between xl:gap-60 xl:px-[4.5rem] xl:pb-[4.5rem]">
        <section className="mb-8 flex flex-col justify-center gap-4 text-center align-middle md:max-w-md md:py-[106px] xl:mb-0 xl:py-0 xl:text-left">
          <Heading level="5">So you want to travel to</Heading>

          <Heading level="1">space</Heading>

          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </section>

        <Link
          to="destination"
          className="absolute bottom-12 z-[20] h-[150px] w-[150px] rounded-full bg-white text-center after:rounded-full md:relative md:h-[242px] md:w-[242px] xl:bottom-0 xl:m-0 xl:h-[274px] xl:w-[274px] xl:self-end xl:after:absolute xl:after:inset-0 xl:after:z-[10] xl:after:bg-white xl:after:bg-opacity-10 xl:after:transition-transform xl:hover:after:scale-150"
        >
          <span className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 font-serif text-[20px] tracking-[1.25px] text-black md:text-[32px] md:tracking-[2px]">
            EXPLORE
          </span>
        </Link>
        {/* </span> */}
      </article>
    </Layout>
  );
}

export default Root;
