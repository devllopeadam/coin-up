/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useInView, motion } from "framer-motion";

const Card = ({ card }) => {
  if (card.type === "normal") {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={card.order === "first" ? { order: -1 } : {}}
        className={`p-8 border border-[#f3f3f3] bg-[#fafafa] rounded-[20px] flex flex-col justify-between items-start gap-6 `}>
        <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[250px] text-black tracking-tighter">
          {card.title}
        </h3>
        <div className="flex justify-center w-full">
          <img
            className="w-[84%] lg:max-w-[320px] lg:w-[16.1vw]"
            src={card.imgSrc}
          />
        </div>
        <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[320px]">
          {card.subtitle}
        </p>
      </motion.div>
    );
  } else if (card.type === "big") {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="p-8 md:pb-0 overflow-hidden border border-[#f3f3f3] bg-[#fafafa] rounded-[20px] md:col-span-2 -order-1 lg:order-none relative">
        <div className="bg-pink uppercase flex justify-center items-center py-[6px] px-[12px] rounded-full text-[13px] leading-[150%] font-medium w-min mb-5">
          new
        </div>
        <div className="flex flex-col justify-between items-start gap-6">
          <div>
            <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[320px] text-black tracking-tighter">
              {card.title}
            </h3>
            <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[420px]">
              {card.subtitle}
            </p>
          </div>
          <div className="relative  md:-bottom-[40px] w-full flex justify-center items-center ">
            <img
              className="max-w-[300px] md:max-w-[500px] lg:max-w-[600px] lg:w-[41.7vw] lg:h-[23.4vw]"
              src={card.imgSrc}
            />
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={"visible"}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={card.order === "first" ? { order: -1 } : {}}
        className={`p-8 border border-[#f3f3f3] bg-[#fafafa] rounded-[20px]`}>
        <div className="bg-pink uppercase flex justify-center items-center py-[6px] px-[12px] rounded-full text-[13px] leading-[150%] font-medium w-min mb-5">
          new
        </div>
        <div className="flex flex-col justify-between items-start gap-6">
          <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[250px] text-black tracking-tighter">
            {card.title}
          </h3>
          <div className="flex justify-center w-full">
            <img
              className="w-[84%] lg:max-w-[320px] lg:w-[16.1vw]"
              src={card.imgSrc}
            />
          </div>
          <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[320px]">
            {card.subtitle}
          </p>
        </div>
      </motion.div>
    );
  }
};

export default Card;
