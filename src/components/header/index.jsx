import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../button";

const Header = () => {
  return (
    <div className="py-10 pl-[135px] pr-[100px] bg-[#E2E2FB] flex gap-[300px] items-center">
      <div>
        <h6 className="text-black text-xl font-gil font-bold">AR SHAKIR</h6>
      </div>

      <div className="flex gap-[30px] items-center text-sm font-normal">
        <p className="flex">
          Product <Icon icon="ph:caret-down" />
        </p>
        <p className="flex">
          Template <Icon icon="ph:caret-down" />
        </p>
        <p>Blog</p>
        <p>Pricing</p>
      </div>

      <div className="flex gap-[30px] items-center">
        <p>Sign In</p>
        <Button theme="primary" size="sm">
          Start Free
        </Button>
      </div>
    </div>
  );
};

export default Header;
