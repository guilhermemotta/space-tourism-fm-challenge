import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";

function Root() {
  return (
    <div className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop  bg-cover h-screen">
      <header className="p-4 flex flex-row justify-between">
        <div>
          <img className="h-[40px] w-[40px]" src={logo} />
        </div>

        <nav>
          <button className="h-[40px] w-[40px]">
            <img className="mx-auto" src={iconHamburger} />
          </button>
        </nav>
      </header>

      <main className="h-[calc(100vh-4.5rem)] flex flex-col lg:flex-row px-6 py-8 justify-between">
        <section className="flex flex-col gap-4 align-middle justify-center text-center">
          <h5 className="text-[16px] md:text-[20px] lg:text-[28px] uppercase text-gray font-condensed tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.75px]">
            So you want to travel to
          </h5>
          <h1 className="text-[80px] md:text-[150px] uppercase text-white font-serif leading-[100px] md:leading-[150px]">
            SPACE
          </h1>
          <p className="text-[15px] md:text-[16px] lg:text-[28px] text-gray font-sans leading-[25px] md:leading-[28px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        {/* TODO: criar estados do botão exclusivos para utilização com mouse */}
        {/* <span className="bg-white opacity-0 hover:opacity-[10.36%] hover:w-[450px] hover:h-[450px]"> */}
        <button className="group rounded-full mx-auto bg-white w-[150px] h-[150px] md:w-[242px] md:h-[242px]">
          <span className="font-serif text-[20px] md:text-[32px] text-black tracking-[1.25px] md:tracking-[2px]">
            EXPLORE
          </span>
        </button>
        {/* </span> */}
      </main>
    </div>
  );
}

export default Root;
