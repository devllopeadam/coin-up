import { close, CoinUp, menu } from "@/assets";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { links, linksSmall } from "@/constant";

const Header = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    previous < latest && latest > 150 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.header
      className={`sticky py-7 h-[92px] w-full z-[100] top-0 backdrop-blur transition-all ${
        show ? "bg-white" : "bg-white/[.80]"
      }`}
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}>
      <div className="container">
        <nav className="flex justify-between items-center lg:relative">
          <div className="nav-image w-[120px] static lg:absolute left-1/2 lg:-translate-x-1/2 cursor-pointer z-30">
            <a href="/">
              <img src={CoinUp} />
            </a>
          </div>
          <div className="flex justify-between items-center lg:w-full">
            <div
              className="menu cursor-pointer border-grey5 border w-[38px] h-10 hidden max-lg:flex justify-center items-center rounded-md"
              onClick={() => setShow(!show)}>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}>
                <img
                  className="w-[18px] h-[18px]"
                  src={!show ? menu : close}
                />
              </motion.div>
            </div>
            <ul className="lg:flex justify-between items-center gap-5 hidden">
              {links.map((link) => {
                return (
                  <li key={link.label}>
                    <a
                      className="text-black hover:text-grey50 transition-colors"
                      href={link.href}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="buttons hidden lg:flex gap-4">
              <Button
                className="py-[11px] px-[14px] max-h-[55px] h-auto"
                variant="outline">
                <a href="#support">Support</a>
              </Button>
              <Button className="py-[11px] px-[15px] max-h-[55px] h-auto">
                <a href="#downoald">Downoald</a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
      {show && (
        <motion.div
          animate={{ y: -150 }}
          className="w-full left-0 top-0 h-full absolute">
          <div className="h-screen lg:hidden block absolute bg-white top-full w-full left-0 translate-y-[150px] px-6 py-10">
            <ul className="flex flex-col h-full overflow-auto">
              {linksSmall.map((link) => {
                return (
                  <li
                    key={link.label}
                    className="pb-5 max-lg:mb-5 border-b last:border-[#fff]">
                    <a
                      className="text-grey75 hover:text-gray-500 transition-colors text-2xl"
                      href={link.href}
                      onClick={() => setShow(false)}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
