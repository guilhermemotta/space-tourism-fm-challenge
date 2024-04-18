import React from "react";

import { Heading, Layout, Text } from "../components";

import pageData from "../data.json";

const { technology: techData } = pageData;

function Technology() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const images = [
    techData[currentTabIndex].images.landscape,
    techData[currentTabIndex].images.portrait,
  ];

  return (
    <Layout>
      <article className="grid-container grid-container--technology gap-4">
        <header className="title text-center md:text-start">
          <Heading level="5">
            <span className="me-2 font-bold text-white text-opacity-[25%]">
              03
            </span>
            space launch 101
          </Heading>
        </header>

        <picture>
          <source media="(max-width: 768px)" srcSet={images[0]} />
          <source media="(min-width: 1024px)" srcSet={images[1]} />
          <img src={images[1]} />
        </picture>

        <div className="tabs flex flex-row gap-4 lg:order-first lg:flex-col xl:gap-8">
          {techData.map((_, index) => (
            <button
              key={index}
              className={`${
                currentTabIndex === index
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              } h-[40px] w-[40px] cursor-pointer rounded-full border border-white border-opacity-25 font-serif text-[18px] transition hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-[24px] xl:h-[80px] xl:w-[80px]`}
              onClick={() => setCurrentTabIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <section className="tech-details mx-6 max-w-md text-center lg:text-start xl:mx-0">
          <div className="mb-[9px] font-condensed text-[14px] uppercase tracking-[2.36px] text-gray md:mb-[16px] md:text-[16px] md:tracking-[2.7px] xl:mb-[11px]">
            the terminology...
          </div>

          <div className="mb-4 font-serif text-[24px] uppercase text-white md:text-[40px] xl:text-[56px]">
            {techData[currentTabIndex].name}
          </div>

          <Text>{techData[currentTabIndex].description}</Text>
        </section>
      </article>
    </Layout>
  );
}

export default Technology;
