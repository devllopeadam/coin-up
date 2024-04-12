import { motion } from "framer-motion";
import { marques } from "@/constant";

const Marque = () => {
  return (
    <div className="container">
      <div className="overflow-hidden bg-grey85 py-5 border border-[#f3f3f3] border-t-0 -mt-[1px] rounded-b-[20px] text-white font-normal text-[0.75rem] uppercase">
        <motion.div
          className="marque flex items-center justify-start gap-5"
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}>
          <div className="flex gap-5 items-center">
            {[...marques, ...marques].map((marque, index) => {
              if (marque.type === "name") {
                return (
                  <div
                    className="text-nowrap"
                    key={index}>
                    {marque.label}
                  </div>
                );
              } else {
                return (
                  <div
                    className="w-5 h-1 bg-grey75 rounded-full"
                    key={index}></div>
                );
              }
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marque;
