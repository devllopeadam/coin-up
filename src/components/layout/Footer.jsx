import {
  Arrow_Up,
  CaretDown,
  FrontendMentor,
  GitHub,
  Linkedin,
} from "@/assets";
import { motion } from "framer-motion";
import { footerLinks } from "@/constant";
import { useState } from "react";

const Footer = () => {
  const [toShow, setToShow] = useState(null);
  const handleHover = (value) => setToShow(value);

  return (
    <div className="container">
      <div className="bg-grey90 pt-16 rounded-[20px] max-md:p-8">
        <div className="md:grid grid-cols-[1fr_10fr_1fr] gap-6">
          <div></div>
          <div className="flex flex-col gap-12">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:gap-6 gap-12">
              {footerLinks.map((footerLink) => {
                return (
                  <div
                    key={footerLink.title}
                    className="flex flex-col gap-4">
                    <p className="text-white text-[12px] font-medium">
                      {footerLink.title}
                    </p>
                    <div className="flex flex-col gap-2">
                      {footerLink.links.map((link) => {
                        return (
                          <a
                            href={link.href}
                            key={link.label}
                            className="text-grey20 hover:text-white transition-colors flex items-center gap-1">
                            {link.label}
                            {footerLink.type === "icon" && (
                              <img
                                loading="lazy"
                                className="w-[10px] h-[10px]"
                                src={Arrow_Up}
                              />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center w-full border-t border-white7 pt-[20px] pb-8 md:flex-row flex-col gap-8">
              <h2 className="text-white text-[20px] font-normal">
                Maked With Jeniah Adam 🚀
              </h2>
              <div className="flex gap-4 relative">
                <a
                  href="https://github.com/devllopeadam"
                  target="_blank"
                  className="w-7 h-7 rounded-full relative"
                  onMouseEnter={() => handleHover("github")}
                  onMouseLeave={() => handleHover(null)}>
                  <img
                    className="w-7 h-7"
                    src={GitHub}
                  />
                  {toShow === "github" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0, y: 30 }}
                      className="absolute text-[14px] px-2 py-[5px] -left-[36px] flex justify-center items-center rounded-sm bg-white w-[100px] -top-[50px] text-nowrap">
                      <img
                        src={CaretDown}
                        className="absolute -bottom-[12px] w-6 h-6"
                      />
                      Github Profile
                    </motion.div>
                  )}
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-jeniah/"
                  target="_blank"
                  className="w-7 h-7 p-[4px] rounded-[3px] bg-white"
                  onMouseEnter={() => handleHover("linkedin")}
                  onMouseLeave={() => handleHover(null)}>
                  <img
                    className="w-full h-full"
                    src={Linkedin}
                  />
                  {toShow === "linkedin" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0, y: 30 }}
                      className="absolute text-[14px] px-2 py-[5px] -left-[41px] flex justify-center items-center rounded-sm bg-white w-[110px] -top-[50px] text-nowrap">
                      <img
                        src={CaretDown}
                        className="absolute -bottom-[12px] w-6 h-6"
                      />
                      Linkedin Profile
                    </motion.div>
                  )}
                </a>
                <a
                  href="https://www.frontendmentor.io/profile/devllopeadam"
                  target="_blank"
                  className="w-7 h-7 p-[3px] rounded-[3px] bg-white"
                  onMouseEnter={() => handleHover("frontend")}
                  onMouseLeave={() => handleHover(null)}>
                  <img
                    className="w-full h-full"
                    src={FrontendMentor}
                  />

                  {toShow === "frontend" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0, y: 30 }}
                      className="absolute text-[14px] px-2 py-[5px] -left-[68.5px] flex justify-center items-center rounded-sm bg-white w-[165px] -top-[50px] text-nowrap">
                      <img
                        src={CaretDown}
                        className="absolute -bottom-[12px] w-6 h-6"
                      />
                      Frontend Mentor Profile
                    </motion.div>
                  )}
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
