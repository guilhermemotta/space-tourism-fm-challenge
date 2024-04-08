import React from "react";

// import Heading from "../components/heading";
// import Layout from "../components/layout";
// import Text from "../components/text";

import { Heading, Layout, Text } from "../components";

import pageData from "../data.json";

const { destinations: destinationsData } = pageData;

function Destination() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const imageUrl = new URL(
    destinationsData[currentTabIndex].images.webp,
    import.meta.url
  ).href;

  return (
    <Layout>
      <Heading level="5">
        <span className="me-2 font-bold text-white text-opacity-[25%]">01</span>{" "}
        pick your destination
      </Heading>

      <main className="flex flex-col items-center overflow-hidden px-6 py-8 md:max-w-xl md:justify-between md:py-14 lg:flex-row">
        <div className="h-[170px] w-[170px] md:h-[300px] md:w-[300px]">
          <img src={imageUrl} />
        </div>

        <div className="max-w-md flex-col">
          <div className="mx-auto my-5 flex flex-row justify-center gap-4">
            {destinationsData.map((dest, index) => (
              <div
                key={index}
                className={`${
                  currentTabIndex === index
                    ? "border-b-2 border-white text-white"
                    : "text-gray"
                } cursor-pointer py-2 font-condensed text-[14px] uppercase tracking-[2.36px] md:text-[16px] md:tracking-[2.7px]`}
                onClick={() => setCurrentTabIndex(index)}
              >
                {dest.name}
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="font-serif text-[56px] uppercase text-white md:text-[80px]">
              {destinationsData[currentTabIndex].name}
            </span>
            <Text>{destinationsData[currentTabIndex].description}</Text>
          </div>

          <hr className="mb-8 mt-8 w-full border-t-[1px] border-[#383B4B] md:mb-6 md:mt-12" />

          <section className="flex w-full flex-col gap-8 md:flex-row lg:justify-start">
            <div className="flex flex-col gap-3">
              <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray">
                AVG. DISTANCE
              </div>
              <div className="text-center font-serif text-[28px] uppercase text-white">
                {destinationsData[currentTabIndex].distance}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray">
                EST. TRAVEL TIME
              </div>
              <div className="text-center font-serif text-[28px] uppercase text-white">
                {destinationsData[currentTabIndex].travel}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Destination;
