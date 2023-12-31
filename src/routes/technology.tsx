import React from "react";
import Heading from "../components/heading";
import Layout from "../components/layout";

import pageData from "../data.json";
import Text from "../components/text";

const { technology: techData } = pageData;

function Technology() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const imagesUrl = [
    new URL(techData[currentTabIndex].images.landscape, import.meta.url).href,
    new URL(techData[currentTabIndex].images.portrait, import.meta.url).href,
  ];

  return (
    <Layout>
      <header className="text-center md:text-start lg:ms-32">
        <Heading level="5">
          <span className="me-2 font-bold text-white text-opacity-[25%]">
            03
          </span>
          space launch 101
        </Heading>
      </header>

      <article className="flex flex-col items-center gap-8 py-8 md:gap-14 md:py-14 lg:ms-32 lg:flex-row">
        <div className="flex-auto lg:order-last">
          <img
            src={imagesUrl[0]}
            srcSet={`${imagesUrl[0]} 768w, ${imagesUrl[1]} 515w`}
            sizes="(min-width: 768px) 768px, (min-width: 1024px) 515px"
            className="w-screen md:h-[310px]"
          />
        </div>

        <div className="flex flex-row gap-4 lg:order-first lg:flex-col">
          {techData.map((_, index) => (
            <button
              key={index}
              className={`${
                currentTabIndex === index
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              } h-[40px] w-[40px] cursor-pointer rounded-full border border-white border-opacity-25 font-serif text-[18px] md:h-[60px] md:w-[60px] md:text-[24px]`}
              onClick={() => setCurrentTabIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <section className="mx-6 max-w-md text-center lg:text-start">
          <div className="font-condensed text-[14px] uppercase tracking-[2.36px] text-gray md:text-[16px] md:tracking-[2.7px]">
            the terminology...
          </div>
          <div className="mb-4 font-serif text-[24px] uppercase text-white md:text-[40px]">
            {techData[currentTabIndex].name}
          </div>

          <Text>{techData[currentTabIndex].description}</Text>
        </section>
      </article>
    </Layout>
  );
}

export default Technology;
