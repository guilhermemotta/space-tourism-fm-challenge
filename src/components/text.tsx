type TextProps = {
  children: React.ReactNode;
};

function Text(props: TextProps) {
  return (
    <p className="text-center font-sans text-[15px] leading-[25px] text-gray md:text-[16px] md:leading-[28px] lg:text-[28px]">
      {props.children}
    </p>
  );
}

export default Text;
