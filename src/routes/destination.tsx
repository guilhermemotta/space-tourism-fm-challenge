import React from "react";

import { Heading, Layout, Text } from "../components";

import pageData from "../data.json";

const { destinations: destinationsData } = pageData;

function Destination() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  return (
    <Layout>
      <article className="flex flex-col xl:max-w-6xl xl:pb-12">
        <Heading level="5">
          <span className="me-2 font-bold text-white text-opacity-[25%]">
            01
          </span>{" "}
          pick your destination
        </Heading>

        <section className="flex flex-col items-center overflow-hidden px-6 py-8 md:mx-auto md:max-w-xl md:justify-around md:gap-5 md:px-0 md:py-14 xl:mx-0 xl:max-w-6xl xl:flex-row xl:gap-24 xl:py-0">
          <picture className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-fit xl:max-h-[445px] xl:w-fit xl:max-w-[445px] xl:p-16">
            <source
              srcSet={destinationsData[currentTabIndex].images.webp}
              type="image/webp"
            />
            <img src={destinationsData[currentTabIndex].images.png} />
          </picture>

          <div className="max-w-md flex-col">
            <div className="mx-auto my-5 flex flex-row justify-center gap-4 md:my-8 xl:justify-start">
              {destinationsData.map((dest, index) => (
                <div
                  key={index}
                  className={`${
                    currentTabIndex === index
                      ? "border-opacity-100 text-white"
                      : "border-opacity-0 text-gray hover:border-opacity-50"
                  } cursor-pointer border-b-2 border-white py-2 font-condensed text-[14px] uppercase tracking-[2.36px] transition md:text-[16px] md:tracking-[2.7px]`}
                  onClick={() => setCurrentTabIndex(index)}
                >
                  {dest.name}
                </div>
              ))}
            </div>

            <div className="text-center xl:text-start">
              <span className="font-serif text-[56px] uppercase text-white md:text-[80px] xl:justify-start xl:text-[100px]">
                {destinationsData[currentTabIndex].name}
              </span>
              <Text>{destinationsData[currentTabIndex].description}</Text>
            </div>

            <hr className="mb-8 mt-8 w-full border-t-[1px] border-[#383B4B] md:mb-6 md:mt-12" />

            <section className="flex w-full flex-col justify-around gap-8 md:flex-row xl:justify-start xl:gap-20">
              <div className="flex flex-col gap-3">
                <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray xl:text-start">
                  AVG. DISTANCE
                </div>
                <div className="text-center font-serif text-[28px] uppercase text-white xl:text-start">
                  {destinationsData[currentTabIndex].distance}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray xl:text-start">
                  EST. TRAVEL TIME
                </div>
                <div className="text-center font-serif text-[28px] uppercase text-white xl:text-start">
                  {destinationsData[currentTabIndex].travel}
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default Destination;
