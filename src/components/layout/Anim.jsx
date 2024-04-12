/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const Anim = ({ children, classProp = null }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      className={classProp}
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.2, delay: 0.25 }}
      initial="hidden"
      animate={controls}>
      {children}
    </motion.div>
  );
};

export default Anim;
