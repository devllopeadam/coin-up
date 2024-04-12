/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Ellipses } from "@/assets";

const Banner = ({
  title,
  text,
  imgStyle,
  animType,
  bg_color,
  srcImg,
  children,
}) => {
  const bannerControls = useAnimation();
  const banner = useRef(null);
  const bannerInView = useInView(banner, { once: true });
  useEffect(() => {
    bannerInView && bannerControls.start("visible");
  }, [bannerInView]);

  return (
    <div
      className={`p-8 md:p-10 md:pr-[4rem] ${bg_color} rounded-[20px] flex flex-col md:flex-row justify-between items-center overflow-hidden max-md:gap-16`}>
      <div className="flex flex-col justify-between md:gap-[96px] w-full">
        <h2 className="text-[30px] max-md:mb-3 md:text-[40px] font-medium leading-[112%] tracking-[-0.5px] text-black md:max-w-[350px]">
          {title}
        </h2>
        <div>
          <p className="text-black text-[16px] leading-[1.7] font-normal max-w-[400px]">
            {text}
          </p>
          <div className="flex gap-4">{children}</div>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-[454px] h-[320px] md:h-auto">
        <motion.img
          variants={
            animType === "opacity"
              ? {
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }
              : {
                  hidden: { y: 200 },
                  visible: { y: 0 },
                }
          }
          initial="hidden"
          animate={bannerControls}
          transition={{ duration: 0.3 }}
          className={imgStyle}
          src={srcImg}
          ref={banner}
        />
        <img
          className="absolute max-sm:w-[400px] w-[680px] h-[680px] max-w-[680px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={Ellipses}
        />
      </div>
    </div>
  );
};

export default Banner;
