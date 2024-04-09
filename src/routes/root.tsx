import { Link } from "react-router-dom";
import { Heading, Layout, Text } from "../components";

function Root() {
  return (
    <Layout>
      <article className="flex min-h-[calc(100vh-4.5rem)] flex-col items-center overflow-hidden px-6 py-8 md:gap-8 xl:mx-auto xl:min-h-min xl:max-w-5xl xl:flex-row xl:items-end xl:justify-between xl:overflow-auto">
        <section className="mb-8 flex flex-col justify-center gap-4 text-center align-middle md:max-w-md md:py-[106px] xl:mb-0 xl:py-0">
          <Heading level="5">So you want to travel to</Heading>

          <Heading level="1">space</Heading>

          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </section>

        {/* TODO: criar estados do botão exclusivos para utilização com mouse */}
        {/* <span className="bg-white opacity-0 hover:opacity-[10.36%] hover:w-[450px] hover:h-[450px]"> */}
        <Link
          to="destination"
          className="absolute bottom-12 h-[150px] w-[150px] rounded-full bg-white text-center md:relative md:h-[242px] md:w-[242px] xl:bottom-0 xl:m-0 xl:self-end"
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20px] tracking-[1.25px] text-black md:text-[32px] md:tracking-[2px]">
            EXPLORE
          </span>
        </Link>
        {/* </span> */}
      </article>
    </Layout>
  );
}

export default Root;
