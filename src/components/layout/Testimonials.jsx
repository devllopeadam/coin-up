import { Chat_1, Chat_2, Twitter } from "@/assets";
import { testimonials } from "@/constant";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="container-chains">
      <div className="bg-grey90 pt-16 pb-16 md:pb-[120px] md:pt-20 rounded-[20px]">
        <div className="md:grid grid-cols-[1fr_10fr_1fr]">
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
                  <img
                    className="w-[25px]"
                    src={Chat_2}
                  />
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
                  <img
                    className="w-[25px]"
                    src={Chat_1}
                  />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center w-14 h-14 p-[14px] bg-white3 rounded-xl border border-white7"
                  animate={{ scale: [1, 0.8, 1], y: [0, -1, 0] }}
                  transition={{
                    ease: "easeOut",
                    repeat: Infinity,
                    duration: 1.5,
                  }}>
                  <img
                    className="w-[25px]"
                    src={Chat_2}
                  />
                </motion.div>
              </div>
              <h2 className="lg:text-[52px] md:text-5xl text-3xl text-white text-center max-w-[560px]">
                Hear from Our Valued <br /> Community Members
              </h2>
              <p className="max-w-[560px] text-grey20 font-normal text-center">
                Discover what our valued community members have to say about
                their experiences with CoinUp. Read firsthand testimonials that
                highlight the benefits and satisfaction our platform brings to
                users.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 grid-rows-[auto]">
              {testimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.name}
                    className="p-8 flex flex-col gap-4 bg-white3 rounded-[20px] border border-white7">
                    <div className="flex gap-3">
                      <img
                        className="w-11 h-11 rounded-full"
                        src={testimonial.img}
                      />
                      <div className="flex flex-between items-start max-h-[44px] flex-1 justify-between">
                        <div className="flex flex-col">
                          <p className="text-grey20 font-normal">
                            {testimonial.name}
                          </p>
                          <p className="text-grey50">{testimonial.account}</p>
                        </div>
                        <img
                          className="cursor-pointer w-5 h-5 opacity-50 hover:opacity-100 transition-opacity"
                          src={Twitter}
                        />
                      </div>
                    </div>
                    <p className="text-white font-normal max-w-[480px] min-h-[168px]">
                      {testimonial.content}
                    </p>
                    <p className="text-grey50 font-normal text-[15px]">
                      {testimonial.date}
                    </p>
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

export default Testimonials;
