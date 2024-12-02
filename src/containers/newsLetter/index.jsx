import Button from "../../components/button";

const NewsLetter = () => {
  return (
    <div className="px-[120px] mt-[84px]">
      <div className="rounded-lg bg-purple py-[75px] px-[71px] flex justify-between">
        <div className="w-[500px]">
          <p className="text-primary  text-lg mb-[20px]">OUR NEWSLETTER</p>
          <h6 className="text-[50px] leading-[50px] text-[600]">
            Stay updated with our weekly newsletter
          </h6>
          <p className="text-lg text-[#757095]">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
        </div>

        <div className="">
          <h6 className="text-primary text-[24px] font-medium">
            Signup For Newsletter
          </h6>
          <input
            type="text"
            className="p-[20px] w-[356px] my-[22px]"
            placeholder="Email"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Password"
            className="p-[20px] mb-[22px] w-[356px]"
          />
          <Button theme="secondary" size="lg">
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
