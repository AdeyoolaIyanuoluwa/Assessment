import { Icon } from "@iconify/react/dist/iconify.js";
import Linkedin from "../../assets/icons/linkedin.svg";
import Messenger from "../../assets/icons/messenger.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Twoo from "../../assets/icons/twoo.svg";
import { Company, ContactUs, Product, Resources } from "../../mocks/footer";
const Footer = () => {
  return (
    <div className="pl-[135px] pr-[100px] flex gap-[99px]">
      <div>
        <div className="mb-[31px]">
          <h6 className="text-[#1B1C31] text-[21px] font-[700] mb-5">AR</h6>
          <p className="text-[#757095] text-base w-[50%]">
            Finance helps companies manage payments easily.
          </p>
        </div>
        <div className="flex gap-[15px]">
          <img src={Linkedin} alt="" />
          <img src={Messenger} alt="" />
          <img src={Twitter} alt="" />
          <img src={Twoo} alt="" />
        </div>
      </div>

      <div>
        <p className="text-[21px] font-[600] text-black mb-[24px]">Company</p>
        {Company?.map((item) => (
          <>
            <p className="text-[16px] text-black mb-[18px]">{item?.title}</p>
          </>
        ))}
      </div>
      <div>
        <p className="text-[21px] font-[600] text-black mb-[24px]">Product</p>
        {Product?.map((item) => (
          <>
            <p className="text-[16px] text-black mb-[18px]">{item?.title}</p>
          </>
        ))}
      </div>
      <div>
        <p className="text-[21px] font-[600] text-black mb-[24px]">Resources</p>
        {Resources?.map((item) => (
          <>
            <p className="text-[16px] text-black mb-[18px]">{item?.title}</p>
          </>
        ))}
      </div>
      <div>
        <p className="text-[21px] font-[600] text-black mb-[24px]">Contact Us</p>
        {ContactUs?.map((item) => (
          <>
            <p className="text-[16px] text-black mb-[18px] flex items-center gap-[11.5px]"><Icon icon={item?.icon}/>{item?.title}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
