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
      {/* <main className="flex h-[calc(100vh-4.5rem)] flex-col items-center gap-6 overflow-hidden px-6 py-8 lg:flex-row"> */}
      <main className="flex flex-col items-center gap-6 overflow-hidden px-6 py-8 lg:flex-row">
        <Heading level="5">
          <span className="me-2 font-bold text-white text-opacity-[25%]">
            01
          </span>{" "}
          pick your destination
        </Heading>

        <div className="h-[170px] w-[170px]">
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
              } cursor-pointer py-2 font-condensed text-[14px] uppercase tracking-[2.36px]`}
              onClick={() => setCurrentTabIndex(index)}
            >
              {dest.name}
            </div>
          ))}
        </div>

        <div className="mb-[32px]">
          <Heading level="2">{destinationsData[currentTabIndex].name}</Heading>
          <Text>{destinationsData[currentTabIndex].description}</Text>
        </div>

        <hr className="my-0 w-full border-t-[1px] border-[#383B4B]" />

        <section>
          <div className="mt-[32px]">
            <div className="text-center font-condensed text-[14px] uppercase tracking-[2.36px] text-gray">
              AVG. DISTANCE
            </div>
            <div className="text-center font-serif text-[28px] uppercase text-white">
              {destinationsData[currentTabIndex].distance}
            </div>
          </div>

          <div className="mt-[32px]">
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
