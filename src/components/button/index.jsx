/* eslint-disable react/prop-types */

const buttonVariants = {
  primary: " bg-primary text-white border-none ",
  secondary: " bg-secondary text-white  border-none",
};

const sizeVariants = {
  sm: "w-full py-[17px] px-[33px]",
  lg: "text-sm font-medium py-4 px-6 w-full ",
};
const buttonRadius = {
  lg: "rounded-lg",
  xl: "rounded-full",
};
const Button = ({
  children,
  type,
  size = "small",
  theme = "",
  radius,
  disabled,
  onClick,
}) => {
  return (
    <div>
      <button
        type={type}
        className={`text-center flex justify-center font-medium cursor-pointer whitespace-nowrap text-sm ${buttonVariants[theme]} ${sizeVariants[size]} ${buttonRadius[radius]}`}
        disabled={disabled}
        onClick={onClick}
      >
        <span>
          <p>{children}</p>
        </span>
      </button>
    </div>
  );
};

export default Button;
