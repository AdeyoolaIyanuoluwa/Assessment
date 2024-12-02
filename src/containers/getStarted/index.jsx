import Button from "../../components/button";
import Image from "../../assets/icons/46.svg";

const GetStarted = () => {
  return (
    <div className="mt-[100px] mx-[140px] mb-[120px]">
      <img src={Image} alt="" className="relative top-[60px] left-[40px]" />
      <div className=" bg-purple py-[69px] px-[240px] text-center">
        <h6 className="text-[40px] text-black font-[600] mb-[16px]">
          Get Started With AR Shakir
        </h6>
        <p className="w-[670px] text-[#757095] mb-[27px]">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not.
        </p>
        <div className="w-[162px] m-auto">
          <Button theme="primary" size="sm" radius="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
