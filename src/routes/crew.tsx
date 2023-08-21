import React from "react";

import Heading from "../components/heading";
import Layout from "../components/layout";
import Text from "../components/text";

import pageData from "../data.json";

const { crew: crewData } = pageData;

function Crew() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const imageUrl = new URL(
    crewData[currentTabIndex].images.webp,
    import.meta.url
  ).href;

  return (
    <Layout>
      <main className="flex flex-col items-center gap-8 px-6 py-8 lg:flex-row">
        <Heading level="5">
          <span className="me-2 font-bold text-white text-opacity-[25%]">
            02
          </span>
          meet your crew
        </Heading>

        <div className="h-[223px] w-full">
          <img className="mx-auto h-[223px]" src={imageUrl} alt="" />
          <hr className="my-0 w-full border-t-[1px] border-[#383B4B]" />
        </div>

        <div className="z-10 flex flex-row gap-4">
          {crewData.map((_, index) => (
            <span
              key={index}
              className={`${
                currentTabIndex === index ? "opacity-100" : "opacity-[17.44%]"
              } h-[10px] w-[10px] cursor-pointer rounded-full bg-white`}
              onClick={() => setCurrentTabIndex(index)}
            ></span>
          ))}
        </div>

        <section className="text-center">
          <div className="font-serif text-[16px] uppercase text-gray">
            {crewData[currentTabIndex].role}
          </div>
          <div className="mb-4 font-serif text-[24px] uppercase text-white">
            {crewData[currentTabIndex].name}
          </div>

          <Text>{crewData[currentTabIndex].bio}</Text>
        </section>
      </main>
    </Layout>
  );
}

export default Crew;
