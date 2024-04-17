import React from "react";

import Heading from "../components/heading";
import Layout from "../components/layout";
import Text from "../components/text";

import pageData from "../data.json";

const { crew: crewData } = pageData;

function Crew() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const webpURL = new URL(
    crewData[currentTabIndex].images.webp,
    import.meta.url
  ).href;
  const pngURL = new URL(crewData[currentTabIndex].images.png, import.meta.url)
    .href;

  // return (
  //   <Layout>
  //     <Heading level="5">
  //       <span className="me-2 font-bold text-white text-opacity-[25%]">02</span>
  //       meet your crew
  //     </Heading>

  //     <section className="mx-auto flex flex-col items-center gap-8 px-6 py-8 md:max-w-xl md:gap-10 md:py-16 md:pb-0 lg:flex-row xl:mx-0 xl:max-w-max xl:gap-0 xl:p-0">
  //       <div className="h-[223px] w-full md:bottom-0 md:order-last md:h-auto md:w-[456px] xl:flex-auto xl:self-end">
  //         <picture>
  //           <source srcSet={webpURL} type="image/webp" />
  //         </picture>
  //         <img
  //           className="mx-auto h-[223px] md:h-auto md:w-[456px]"
  //           src={pngURL}
  //           alt={`${crewData[currentTabIndex].name}'s picture`}
  //         />

  //         <hr className="my-0 w-full border-t-[1px] border-[#383B4B] md:hidden" />
  //       </div>

  //       <div className="z-10 flex flex-row gap-4 xl:fixed xl:bottom-24 xl:gap-6">
  //         {crewData.map((_, index) => (
  //           <span
  //             key={index}
  //             className={`${
  //               currentTabIndex === index ? "opacity-100" : "opacity-[17.44%]"
  //             } h-[10px] w-[10px] cursor-pointer rounded-full bg-white transition-opacity hover:opacity-50 xl:h-[15px] xl:w-[15px]`}
  //             onClick={() => setCurrentTabIndex(index)}
  //           ></span>
  //         ))}
  //       </div>

  //       <section className="text-center md:order-first xl:text-start">
  //         <div className="font-serif text-[16px] uppercase text-gray opacity-50 md:text-[24px] xl:text-[32px]">
  //           {crewData[currentTabIndex].role}
  //         </div>

  //         <div className="mb-4 font-serif text-[24px] uppercase text-white md:text-[40px] xl:text-[56px]">
  //           {crewData[currentTabIndex].name}
  //         </div>

  //         <Text>{crewData[currentTabIndex].bio}</Text>
  //       </section>
  //     </section>
  //   </Layout>
  // );
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
          <source srcSet={webpURL} type="image/webp" />
          <img
            src={pngURL}
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
