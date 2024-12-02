/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Image from "../../assets/images/Image.png";
import Blue from "../../assets/icons/blueellipse.svg";
import Star from "../../assets/icons/Shape.svg";
import { useEffect, useRef, useState } from "react";

export const Card = ({ text, name, role }) => (
  <div>
    <img src={Blue} alt="" className="relative top-[20px] left-[19px]" />
    <div className="border px-[30px] py-[25px] w-[383px]">
      <img src={Star} alt="" className="py-[15px]" />
      <p className="text-[#797979] py-[20px]">{text}</p>
      <div className="flex gap-[12px]">
        <img src={Image} alt="" />
        <div>
          <p className="text-[14px] text-black font-[600]">{name}</p>
          <p className="text-[12px] text-[#797979]">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const tabRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (tabRef.current) {
              tabRef.current.scrollLeft = 50;
              setHasScrolled(true);
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (tabRef.current) {
      observer.observe(tabRef.current);
    }

    return () => {
      if (tabRef.current) {
        observer.unobserve(tabRef.current);
      }
    };
  }, [hasScrolled, tabRef]);
  return (
    <div>
      <div className="text-center m-[60px]">
        <p className="text-[18px] text-primary">TESTIMONIAL</p>
        <h6 className="text-[50px] w-[417px] m-auto font-[600] leading-[50px] tracking-[-1px] mt-[25px]">
          What Our Happy User Says
        </h6>
      </div>
      <div
        ref={tabRef}
        className="pl-[140px] flex overflow-scroll scroll-smooth scrollbar-hide gap-[24px]"
      >
        <Card
          text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and."
          name="Serhiy Hipskyy"
          role="CEO WebWorld"
        />
        <Card
          text="Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
          name="Justus Menke"
          role="CEO GetNextDesign"
        />
        <Card
          text="Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
          name="Britain Eriksen"
          role="CEO Eureka"
        />
        <Card
          text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and."
          name="Serhiy Hipskyy"
          role="CEO WebWorld"
        />
      </div>
    </div>
  );
};

export default Testimonial;
