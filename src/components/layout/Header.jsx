import { close, CoinUp, menu } from "@/assets";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#coin", label: "Coins" },
  { href: "#security", label: "Security" },
];

const linksSmall = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#coin", label: "Coins" },
  { href: "#security", label: "Security" },
  { href: "#support", label: "Support" },
  { href: "#downoald", label: "Downoald" },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // if (latest > previous && latest > 150) {
    //   setHidden(true);
    //   // console.log(hidden);
    // } else {
    //   setHidden(false);
    //   // console.log(hidden);
    // }
    latest > previous && latest > 150 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.header
      className={` bg-white py-7 h-[92px] fixed w-full top-0`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={`${hidden ? "hidden" : "visible"}`}
      transition={{ duration: 0.2, ease: "easeInOut" }}>
      <div className="container">
        <nav className="flex justify-between items-center lg:relative">
          <div className="nav-image w-[120px] static lg:absolute left-1/2 lg:-translate-x-1/2 cursor-pointer z-30">
            <a href="/">
              <img src={CoinUp} />
            </a>
          </div>
          <div className="flex justify-between items-center lg:w-full">
            <div
              className="menu cursor-pointer border-[#f3f3f3] border w-[38px] h-10 hidden max-lg:flex justify-center items-center rounded-md"
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
                      className="text-black hover:text-gray-500 transition-colors text-base"
                      href={link.href}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="buttons hidden lg:flex gap-4">
              <Button
                className="py-[10px] px-[14px] max-h-[50px] h-auto "
                variant="outline">
                <a href="#support">Support</a>
              </Button>
              <Button className="py-[10px] px-[14px] max-h-[50px] h-auto  ">
                <a href="#downoald">Downoald</a>
              </Button>
            </div>
          </div>

          {show && (
            <motion.div
              animate={{ y: -150 }}
              className="w-full left-0 top-0 h-full absolute">
              <div className="height-links lg:hidden block absolute bg-white top-full w-full left-0 translate-y-[150px] px-7 py-10">
                <ul className="flex flex-col h-full overflow-auto">
                  {linksSmall.map((link) => {
                    return (
                      <li
                        key={link.label}
                        className="pb-5 max-lg:mb-5 border-b last:border-[#fff]">
                        <a
                          className="text-grey75 hover:text-gray-500 transition-colors text-2xl"
                          href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
