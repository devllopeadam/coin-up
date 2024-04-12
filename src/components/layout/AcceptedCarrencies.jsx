import { Ellipses, Illustration_13 } from "@/assets";
import { cryptocurrencies } from "@/constant";
import {
  motion,
  useScroll,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";

const AcceptedCarrencies = () => {
  const { scrollY } = useScroll();
  const targetRef = useRef(null);
  const inView = useInView(targetRef, { once: true });
  const [active, setActive] = useState(false);
  const [valueChange, setValueChange] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (inView && latest > 5536) {
      setValueChange(latest);
      setPreviousValue(previous);
      setActive(true);
    } else {
      setActive(false);
    }
  });

  useEffect(() => {
    valueChange && previousValue < valueChange
      ? setScrollValue((prev) => prev + 1.5)
      : setScrollValue((prev) => prev - 1.5);
  }, [valueChange]);

  return (
    <div className="container">
      <div className="border border-grey5 bg-grey3 rounded-[20px] pt-10 lg:pt-20 pb-16 lg:pb-[120px] overflow-hidden">
        <div className="flex flex-col gap-20">
          <div
            ref={targetRef}
            className="flex flex-col gap-6 max-w-[560px] text-center justify-center w-full mx-auto px-6">
            <h2 className="lg:text-[52px] md:text-5xl text-3xl">
              Accepted Cryptocurrencies
            </h2>
            <p className="font-normal text-grey75 leading-6 text-[16px]">
              Array of cryptocurrencies integrated into the CoinUp platform.
              Explore accepted digital assets for storing and transacting with
              ease
            </p>
          </div>
          <div className="gradient">
            <div className="relative">
              <div className="overflow-hidden flex flex-col gap-3 md:gap-6 items-center justify-center">
                {cryptocurrencies.map((crypto, index) => {
                  return (
                    <motion.div
                      key={crypto[crypto.length - 1]}
                      variants={{
                        stable: { x: crypto[crypto.length - 1] },
                        scrolled: {
                          x: index % 2 === 0 ? -scrollValue : scrollValue,
                        },
                      }}
                      animate={active ? "scrolled" : "stable"}
                      initial="stable"
                      className="flex gap-3 md:gap-6 items-center max-sm:overflow-auto">
                      {crypto.map((box) => {
                        return (
                          <div
                            className="bg-white border border-grey5 p-6 flex items-center gap-3 min-w-[204px] rounded-[16px]"
                            key={box.id}>
                            <div className="w-11 h-11 overflow-hidden flex justify-center items-center border border-grey5 rounded-full ">
                              <img
                                loading="lazy"
                                className="w-11 h-11"
                                src={box.srcImg}
                              />
                            </div>
                            <div className="flex flex-col">
                              <p className="text-black font-normal">
                                {box.title}
                              </p>
                              <p className="text-grey50 font-normal">
                                {box.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex z-0 mt-16 flex-col gap-5 items-center justify-center text-center max-w-[450px] mx-auto relative">
            <img
              className="w-14 h-14"
              loading="lazy"
              src={Illustration_13}
            />
            <h2 className="text-[30px] md:text-[50px] font-medium leading-[112%] tracking-[-0.5px] text-black">
              And a Treasure Trove of Thousands More!
            </h2>
            <img
              className="absolute -z-[1] md:w-[450px] md:h-[500px] md:min-h-[500px] md:min-w-[450px]"
              loading="lazy"
              src={Ellipses}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedCarrencies;
