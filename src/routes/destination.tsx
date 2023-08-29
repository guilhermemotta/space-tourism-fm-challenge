import React from "react";

import Heading from "../components/heading";
import Layout from "../components/layout";
import Text from "../components/text";

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

      <main className="mx-auto flex flex-col items-center gap-8 overflow-hidden px-6 py-8 md:max-w-xl md:gap-14 md:py-14 lg:flex-row">
        <div className="h-[170px] w-[170px] md:h-[300px] md:w-[300px]">
          <img src={imageUrl} />
        </div>

        <div className="flex flex-row gap-4">
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
          <span className="font-serif uppercase text-white md:text-[80px]">
            {destinationsData[currentTabIndex].name}
          </span>
          <Text>{destinationsData[currentTabIndex].description}</Text>
        </div>

        <hr className="my-0 w-full border-t-[1px] border-[#383B4B]" />

        <section className="flex w-full flex-col justify-around gap-8 md:flex-row">
          <div>
            <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray">
              AVG. DISTANCE
            </div>
            <div className="text-center font-serif text-[28px] uppercase text-white">
              {destinationsData[currentTabIndex].distance}
            </div>
          </div>

          <div>
            <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray">
              EST. TRAVEL TIME
            </div>
            <div className="text-center font-serif text-[28px] uppercase text-white">
              {destinationsData[currentTabIndex].travel}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Destination;
