import { Checkmark, Dismiss, Link_1, Link_2 } from "@/assets";
import { rows } from "@/constant";
import { motion } from "framer-motion";

const SupportedChains = () => {
  return (
    <div className="container-chains">
      <div className="bg-grey90 pt-16 pb-16 md:pb-[120px] md:pt-20 rounded-[20px]">
        <div className="md:grid grid-cols-[1fr_10fr_1fr] gap-6">
          <div></div>
          <div className="flex flex-col gap-14 max-md:px-6">
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              <div className="flex gap-2">
                <motion.div
                  className="flex justify-center items-center w-14 h-14 p-[14px] bg-white3 rounded-xl border border-white7"
                  animate={{ scale: [1, 0.8, 1], y: [0, -1, 0] }}
                  transition={{
                    ease: "easeOut",
                    repeat: Infinity,
                    duration: 1.5,
                  }}>
                  <img src={Link_2} />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center w-14 h-14 p-[14px] bg-white7 rounded-xl border border-white7"
                  animate={{ scale: [1, 0.8, 1], y: [0, -1, 0] }}
                  transition={{
                    ease: "easeOut",
                    repeat: Infinity,
                    duration: 1.5,
                    delay: 0.75,
                  }}>
                  <img src={Link_1} />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center w-14 h-14 p-[14px] bg-white3 rounded-xl border border-white7"
                  animate={{ scale: [1, 0.8, 1], y: [0, -1, 0] }}
                  transition={{
                    ease: "easeOut",
                    repeat: Infinity,
                    duration: 1.5,
                  }}>
                  <img src={Link_2} />
                </motion.div>
              </div>
              <h2 className="lg:text-[52px] md:text-5xl text-3xl text-white text-center max-w-[560px]">
                Wide Range of <br /> Supported Chains
              </h2>
              <p className="max-w-[560px] text-grey20 font-normal text-center">
                Our app supports a diverse selection of blockchain networks,
                empowering you to manage various cryptocurrencies with ease and
                flexibility.
              </p>
            </div>
            <div className="grid border border-white7 rounded-[20px] overflow-auto">
              <div className="header border-b-[1px] border-b-white7 grid grid-cols-[240px_minmax(48px,_1fr)_minmax(48px,_1fr)_minmax(48px,_1fr)_minmax(48px,_1fr)] md:grid-cols-[318px_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-4 md:pt-8 md:px-8 p-6 pb-6 odd:bg-white3">
                <p className="text-grey50 font-normal">Chaine</p>
                <p className="text-grey50 font-normal text-right">Buy</p>
                <p className="text-grey50 font-normal text-right">Sell</p>
                <p className="text-grey50 font-normal text-right">Swap</p>
                <p className="text-grey50 font-normal text-right">Earn</p>
              </div>
              {rows.map((row, index) => {
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-[240px_minmax(48px,_1fr)_minmax(48px,_1fr)_minmax(48px,_1fr)_minmax(48px,_1fr)] md:grid-cols-[318px_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-4 md:px-8 px-6 py-[18px] items-center ${
                      index % 2 === 0 ? "bg-[#353535]" : "bg-white3"
                    }`}>
                    <div className="flex items-center gap-3 text-white">
                      <img
                        className="rounded-full w-11 h-11"
                        src={row.srcImg}
                      />
                      <p className=" font-normal">{row.label}</p>
                    </div>

                    {row.results.map((result, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-end items-center">
                          <div
                            className={`${
                              result ? "bg-greeno15 " : "bg-whiteo7 "
                            } w-6 h-6 flex items-center justify-center rounded-full p-[5px]`}>
                            <img
                              className="w-3 h-3"
                              src={result ? Checkmark : Dismiss}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SupportedChains;
