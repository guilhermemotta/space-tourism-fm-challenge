import React from "react";

import { Heading, Layout, Text } from "../components";

import pageData from "../data.json";

const { crew: crewData } = pageData;

function Crew() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  return (
    <Layout>
      <section className="grid-container grid-container--crew xl:px-0">
        <Heading className="title" level="5">
          <span className="me-2 font-bold text-white text-opacity-[25%]">
            02
          </span>
          meet your crew
        </Heading>

        <picture>
          <source
            srcSet={crewData[currentTabIndex].images.webp}
            type="image/webp"
          />
          <img
            src={crewData[currentTabIndex].images.png}
            alt={`${crewData[currentTabIndex].name}'s picture`}
          />
        </picture>

        <hr className="my-0 w-full border-t-[1px] border-[#383B4B] md:hidden" />

        <div className="dot-indicators flex flex-row gap-4 xl:gap-6">
          {crewData.map((_, index) => (
            <span
              key={index}
              className={`${
                currentTabIndex === index ? "opacity-100" : "opacity-[17.44%]"
              } h-[10px] w-[10px] cursor-pointer rounded-full bg-white transition-opacity hover:opacity-50 xl:h-[15px] xl:w-[15px]`}
              onClick={() => setCurrentTabIndex(index)}
            ></span>
          ))}
        </div>

        <section className="crew-details text-center xl:text-start">
          <div className="font-serif text-[16px] uppercase text-gray opacity-50 md:text-[24px] xl:text-[32px]">
            {crewData[currentTabIndex].role}
          </div>

          <div className="mb-4 font-serif text-[24px] uppercase text-white md:text-[40px] xl:text-[56px]">
            {crewData[currentTabIndex].name}
          </div>

          <Text>{crewData[currentTabIndex].bio}</Text>
        </section>
      </section>
    </Layout>
  );
}

export default Crew;
