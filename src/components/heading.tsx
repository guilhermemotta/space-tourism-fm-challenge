export type HeadingProps = {
  level: "1" | "2" | "3" | "4" | "5";
  children: React.ReactNode;
  className?: string;
};

function Heading(props: HeadingProps) {
  if (props.level === "5") {
    return (
      <h5
        className={`${props.className} font-condensed text-[16px] uppercase tracking-[2.7px] text-gray md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.75px]`}
      >
        {props.children}
      </h5>
    );
  }

  if (props.level === "2") {
    return (
      <h2
        className={`${props.className} text-center font-serif text-[56px] uppercase leading-none tracking-[0px] text-white md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.75px]`}
      >
        {props.children}
      </h2>
    );
  }

  return (
    <h1
      className={`${props.className} font-serif text-[80px] uppercase leading-[100px] text-white md:text-[150px] md:leading-[150px]`}
    >
      {props.children}
    </h1>
  );
}

export default Heading;
