import Navbar from "../components/navbar";

function Root() {
  return (
    <div className="h-screen bg-home-mobile bg-cover  md:bg-home-tablet lg:bg-home-desktop">
      <Navbar />

      <main className="flex h-[calc(100vh-4.5rem)] flex-col justify-between px-6 py-8 lg:flex-row">
        <section className="flex flex-col justify-center gap-4 text-center align-middle">
          <h5 className="font-condensed text-[16px] uppercase tracking-[2.7px] text-gray md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.75px]">
            So you want to travel to
          </h5>
          <h1 className="font-serif text-[80px] uppercase leading-[100px] text-white md:text-[150px] md:leading-[150px]">
            SPACE
          </h1>
          <p className="font-sans text-[15px] leading-[25px] text-gray md:text-[16px] md:leading-[28px] lg:text-[28px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        {/* TODO: criar estados do botão exclusivos para utilização com mouse */}
        {/* <span className="bg-white opacity-0 hover:opacity-[10.36%] hover:w-[450px] hover:h-[450px]"> */}
        <button className="group mx-auto h-[150px] w-[150px] rounded-full bg-white md:h-[242px] md:w-[242px]">
          <span className="font-serif text-[20px] tracking-[1.25px] text-black md:text-[32px] md:tracking-[2px]">
            EXPLORE
          </span>
        </button>
        {/* </span> */}
      </main>
    </div>
  );
}

export default Root;
