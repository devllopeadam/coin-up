/* eslint-disable react/prop-types */
import { Add, Dismiss } from "@/assets";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, response }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className="flex flex-col border-b border-b-grey10 rounded-3xl p-4 md:p-6 pt-0 overflow-hidden cursor-pointer">
      <div className="flex justify-between cursor-pointer">
        <h3 className="text-xl">{question}</h3>
        <div className="flex items-center justify-center bg-black rounded-md h-8 w-8 p-2">
          <img
            className="transition-all"
            src={!show ? Add : Dismiss}
          />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
            <p className="font-normal text-grey75 leading-6 text-[16px] max-w-[560px] mt-2">
              {response}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
