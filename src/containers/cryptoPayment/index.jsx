import Networth from "../../assets/icons/networth.svg";
import Harvested from "../../assets/icons/harvested.svg";
import Earnings from "../../assets/icons/earnings.svg";
import Goals from "../../assets/icons/goals.svg";
import Ellipse from "../../assets/icons/ellipse.svg";

const CryptoPayment = () => {
  return (
    <div className="text-center">
      <p className="text-primary text-[18px]">WHY AR SHAKIR</p>
      <p className="text-black text-[40px] font-[600]">
        Specially Designed For Crypto Payments
      </p>
      <div className="px-[120px] flex justify-between">
        <div>
          <div className="w-[366px] bg-purple py-[31px] px-[24px] mt-[20px]">
            <img
              src={Ellipse}
              alt=""
              className="absolute bottom-[-390px] left-[130px] z-[99]"
            />
            <div className="w-[318px] bg-white grid grid-cols-2 justify-between py-[37px] px-[23px] relative">
              <div className="flex gap-[14px] items-start">
                <img src={Networth} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">Total net worth</p>
                  <p className="text-[15px] text-black">$5,250.90</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <img src={Harvested} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
              <div className="flex gap-[14px]items-start">
                <img src={Earnings} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <img src={Goals} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-start">
            <h6 className="text-[26px] my-[20px]">Quick Summaries</h6>
            <p className="text-[18px] text-[#757095] w-[367px]">
              Warmly little before cousin sussex entire men set. Blessing it
              ladyship on sensible judgment settling outweigh.
            </p>
          </div>
        </div>
        <div>
          <div className="w-[366px] bg-purple py-[31px] px-[24px] mt-[20px]">
        
            <div className="w-[318px] bg-white grid grid-cols-2 justify-between py-[37px] px-[23px] relative">
              <div className="flex gap-[14px] items-start">
                <img src={Networth} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">Total net worth</p>
                  <p className="text-[15px] text-black">$5,250.90</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <img src={Harvested} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
              <div className="flex gap-[14px]items-start">
                <img src={Earnings} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <img src={Goals} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-start">
            <h6 className="text-[26px] my-[20px]">Manage your wallets</h6>
            <p className="text-[18px] text-[#757095] w-[367px]">
              Worse linen an of civil jokes leave offer. Parties all clothes
              removal cheered calling prudent her. Latter person am secure.
            </p>
          </div>
        </div>
        <div>
          <div className="w-[366px] bg-purple py-[31px] px-[24px] mt-[20px]">
            <div className="w-[318px] bg-white grid grid-cols-2 justify-between py-[37px] px-[23px] relative">
              <div className="flex gap-[14px] items-start">
                <img src={Networth} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">Total net worth</p>
                  <p className="text-[15px] text-black">$5,250.90</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <img src={Harvested} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
              <div className="flex gap-[14px]items-start">
                <img src={Earnings} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <img src={Goals} alt="" />
                <div>
                  <p className="text-[9px] text-[#6F767E]">harvested losses</p>
                  <p className="text-[15px] text-black">$0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-start">
            <h6 className="text-[26px] my-[20px]">Request Payments</h6>
            <p className="text-[18px] text-[#757095] w-[367px]">
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPayment;
