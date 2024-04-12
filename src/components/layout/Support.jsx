import { Ellipses, Illustration_17, Illustration_23 } from "@/assets";
import { supports } from "@/constant";
import { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { Anim } from ".";

const Support = () => {
  const imageControls = useAnimation();
  const ref = useRef(null);
  const imageInView = useInView(ref, { once: true });
  useEffect(() => {
    imageInView && imageControls.start("visible");
  }, [imageInView]);
  return (
    <div className="container">
      <div className="md:grid grid-cols-[1fr_10fr_1fr] gap-6">
        <div></div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center justify-center items-center w-full mx-auto px-6">
            <img
              className="md:w-[56px] w-[40px] h-[40px] md:h-[56px]"
              src={Illustration_17}
            />
            <h2 className="lg:text-[52px] max-w-[560px] md:text-5xl text-3xl">
              Get Help and Assistance
            </h2>
            <p className="font-normal text-grey75 leading-6 text-[16px] max-w-[580px]">
              {`Access our support team for assistance with any questions or issues. We're here to help you navigate the world of cryptocurrency with confidence.`}
            </p>
          </div>
          <div className="grid lg:grid-cols-[4fr_6fr] gap-6">
            <div className="flex flex-col gap-6">
              {supports.map((support) => {
                return (
                  <Anim key={support.title}>
                    <a
                      target="_blank"
                      href={support.href}
                      className="p-8 rounded-[1rem] bg-grey3 border border-grey5 hover:border-grey10 transition-none flex flex-col gap-4">
                      <div className="flex justify-center items-center bg-white border border-grey5 rounded-full w-[48px] h-[48px] p-3">
                        <img src={support.img} />
                      </div>
                      <h3 className="font-medium text-xl text-black tracking-tighter">
                        {support.title}
                      </h3>
                      <p className="font-normal text-grey75 leading-6 text-[16px]">
                        {support.content}
                      </p>
                    </a>
                  </Anim>
                );
              })}
            </div>
            <div
              ref={ref}
              className="flex justify-center items-center rounded-[25px] bg-pink p-8 overflow-hidden">
              <motion.img
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={imageControls}
                transition={{ duration: 0.3, delay: 0.25 }}
                loading="lazy"
                className="md:w-[480px] w-[280px] h-[280px] md:h-[480px] relative z-20"
                src={Illustration_23}
              />
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src={Ellipses}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Support;
