import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  hero_18,
  hero_19,
  hero_20,
  hero_21,
  Mockup_Earn,
  Mockup_Earn_Left,
  Mockup_Swap_right,
} from "@/assets";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero md:pt-20 px-6 md:px-12 pt-16 bg-[#fafafa] border border-[#f3f3f3] rounded-[20px] relative">
        <div className="flex flex-col gap-20 items-center">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-[720px] text-center flex flex-col justify-center items-center gap-6 relative">
            <div className="flex items-center justify-center flex-col">
              <h1 className=" lg:text-[72px] text-[36px] sm:text-[60px] leading-[112%]">
                Safeguard Your Digital Wealth with CoinUp
              </h1>
              <p className="text-bb max-w-[560px] mt-4 font-normal">
                Manage your cryptocurrencies securely and effortlessly with our
                intuitive cryptowallet app. Take control of your digital assets
                wherever you go.
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="py-[14px] px-[20px] max-h-[50px] text-[17px] rounded-[8px] h-auto">
                <a href="#">Get Walket</a>
              </Button>
              <Button
                variant="secondary"
                className="py-[14px] px-[20px] max-h-[50px] text-[17px] rounded-[8px] h-auto bg-white border hover:bg-transparent">
                <a href="#">Key Features</a>
              </Button>
            </div>
            <img
              className="w-12 h-12 absolute left-6 bottom-3 max-md:hidden"
              src={hero_18}
              loading="lazy"
            />
            <img
              className="w-10 h-10 absolute left-28 -bottom-7 max-md:hidden"
              src={hero_21}
              loading="lazy"
            />
            <img
              className="w-10 h-10 absolute right-6 bottom-3 max-md:hidden"
              src={hero_19}
              loading="lazy"
            />
            <img
              className="w-10 h-10 absolute right-28 -bottom-7 max-md:hidden"
              src={hero_20}
              loading="lazy"
            />
          </motion.div>
          <div className="flex gap-14 h-[25.375rem] lg:h-[22.5rem] overflow-hidden justify-center z-10 relative">
            <motion.img
              initial={{ y: 160 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-[256px] h-[590px] mt-[69px] lg:block hidden "
              src={Mockup_Swap_right}
            />
            <motion.img
              initial={{ y: 160 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              src={Mockup_Earn}
              className="w-[360px] h-[715px] object-contain max-sm:-mt-[1.6875rem]"
            />
            <motion.img
              initial={{ y: 160 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-[256px] h-[590px] mt-[69px] lg:block hidden "
              src={Mockup_Earn_Left}
            />
          </div>
        </div>
        <div className="bg-coin p-5 h-[9rem] w-full -z-[1] absolute bg-orange bg-[length:44px] bg-[50%] bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
};

export default Hero;
