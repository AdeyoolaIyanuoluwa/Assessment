import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../components/button";
import Image from "../../assets/images/hero.png";
import Revenue from "../../assets/images/revenue.svg";
import Total from "../../assets/images/totall.svg";
import Openzep from "../../assets/images/openzep.svg";
import Oracle from "../../assets/images/oracle.svg";
import Morpheus from "../../assets/images/morpheus.svg";
import Samsung from "../../assets/images/samsung.svg";
import Monday from "../../assets/images/monday.svg";
import Segment from "../../assets/images/segment.svg";
import Protonet from "../../assets/images/protonet.svg";

const Hero = () => {
  return (
    <div>
      <div className="flex bg-[#E2E2FB] overflow-x-hidden pb-[90px]">
        <div className="pl-[135px] w-[50%] pt-[50px]">
          <h6 className="text-black text-[60px] mb-[24px] leading-[75px]">
            Managing business payments has never been easier
          </h6>
          <p className="text-[#757095] w-[450px]">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <div className="flex items-center gap-[31px] mt-[46px] mb-[55px]">
            <Button theme="primary" size="sm" radius="lg">
              Get started
            </Button>
            <p className="text-primary">See How It Works</p>
          </div>
          <div className="flex items-center gap-[17px]">
            <p className="flex items-center gap-[6px] text-[#757095] text-[17px]">
              <Icon icon="ph:check-circle-fill" className="text-primary" />
              Free Register
            </p>
            <p className="flex items-center gap-[6px] text-[#757095] text-[17px]">
              <Icon icon="ph:check-circle-fill" className="text-primary" />
              Great Service
            </p>
          </div>
        </div>

        <div>
          <img
            src={Image}
            alt=""
            className="right-0 left-[650px] w-[60%] absolute"
          />
          <img
            src={Revenue}
            alt=""
            className="relative top-[220px] right-[150px] "
          />
          <img
            src={Total}
            alt=""
            className="relative top-[140px] right-[130px]"
          />
        </div>
      </div>
      <div className="text-center m-[50px]">
        <p>Companies we have helped grow</p>
        <div className="flex justify-between items-center pt-[50px] pb-[70px]">
          <img src={Openzep} alt="" />
          <img src={Oracle} alt="" />
          <img src={Morpheus} alt="" />
          <img src={Samsung} alt="" />
          <img src={Monday} alt="" />
          <img src={Segment} alt="" />
          <img src={Protonet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
