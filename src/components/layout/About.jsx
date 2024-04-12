import { Mockup_Swap_right } from "@/assets";
import { abouts } from "@/constant";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="container">
      <div className="xl:grid grid-cols-[1fr_10fr_1fr]">
        <div></div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_5fr] grid-rows-[auto] gap-[80px] lg:gap-[138px] items-center">
            <div
              ref={ref}
              className="rounded-[20px] bg-orange bg-coin bg-[0_0] bg-[length:40px_40px] overflow-hidden h-[465px] relative">
              <motion.img
                loading="lazy"
                variants={{
                  hidden: { top: "100%" },
                  visible: { top: "80px" },
                }}
                transition={{ delay: 0.25, duration: 0.5 }}
                initial="hidden"
                animate={controls}
                className="lg:w-[329px] w-[280px] top-[80px] left-1/2 -translate-x-1/2 absolute"
                src={Mockup_Swap_right}
              />
            </div>
            <div className="flex flex-col gap-6 max-w-[560px] max-lg:-order-1">
              <div className="flex items-start border border-black uppercase w-fit px-3 py-[5px] text-[13px] font-medium rounded-full">
                about app
              </div>
              <h2 className="lg:text-[52px] md:text-5xl text-3xl max-w-[560px]">
                Discover CoinUp <br /> Cryptowallet Solution
              </h2>
              <p className="text-grey75 leading-6 font-normal text-[16px]">
                {`Experience the pinnacle of security and convenience with CoinUp's
              Cryptowallet Solution. Our state-of-the-art wallet offers
              unparalleled protection for your digital assets, coupled with
              intuitive features designed to streamline your crypto experience.`}
              </p>
              <p className="text-grey75 leading-6 font-normal text-[16px]">
                With CoinUp, you can securely store, manage, and transact with
                ease, empowering you to navigate the world of cryptocurrency
                with confidence and peace of mind.
              </p>
            </div>
          </div>
          <div className="mt-24 bg-grey3 border border-grey5 p-10 rounded-[20px] grid grid-cols-1 lg:grid-cols-3 grid-rows-[auto] gap-12">
            {abouts.map((about, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-3 items-start">
                  <img
                    loading="lazy"
                    className="w-8 h-8 mb-3"
                    src={about.srcImg}
                  />
                  <p className="text-[20px]">{about.title}</p>
                  <p className="text-grey75 leading-6 font-normal w-full">
                    {about.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
