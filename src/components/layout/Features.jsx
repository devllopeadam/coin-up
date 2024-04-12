/* eslint-disable no-unused-vars */
import { cards } from "@/constant";
import { Illustration_5 } from "@/assets";
import { Anim, Banner } from ".";
import { Button } from "../ui/button";

const Features = () => {
  return (
    <div className="container">
      <div className="xl:grid xl:grid-cols-[1fr_10fr_1fr] gap-6">
        <div></div>
        <div className="flex flex-col items-start gap-8 md:gap-20">
          <h2 className="lg:text-[52px] md:text-5xl text-3xl">
            Powerful Features for <br /> Managing Your Crypto
          </h2>
          <div className="w-full flex flex-col gap-10">
            <div className="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr] grid-rows-[auto] gap-10 w-full">
              {cards.map((card, index) => {
                if (card.type === "normal") {
                  return (
                    <Anim
                      key={index}
                      style={card.order === "first" ? { order: -1 } : {}}
                      classProp={`p-8 border border-grey5 bg-grey3 rounded-[20px] flex flex-col justify-between items-start gap-6`}>
                      <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[250px] text-black tracking-tighter">
                        {card.title}
                      </h3>
                      <div className="flex justify-center w-full">
                        <img
                          loading="lazy"
                          className="w-[84%] lg:max-w-[320px] lg:w-[16.1vw]"
                          src={card.imgSrc}
                        />
                      </div>
                      <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[320px]">
                        {card.subtitle}
                      </p>
                    </Anim>
                  );
                } else if (card.type === "big") {
                  return (
                    <Anim
                      key={index}
                      classProp="p-8 md:pb-0 overflow-hidden border border-grey5 bg-grey3 rounded-[20px] relative md:col-span-2 -order-1 lg:order-none">
                      <div className="bg-pink uppercase flex justify-center items-center py-[6px] px-[12px] rounded-full text-[13px] leading-[150%] font-medium w-min mb-5">
                        new
                      </div>
                      <div className="flex flex-col justify-between items-start max-md:gap-4">
                        <div>
                          <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[320px] text-black tracking-tighter">
                            {card.title}
                          </h3>
                          <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[420px]">
                            {card.subtitle}
                          </p>
                        </div>
                        <div className="relative  md:-bottom-[40px] w-full flex justify-center items-center ">
                          <img
                            className="max-w-[300px] md:max-w-[500px] lg:max-w-[600px] lg:w-[41.7vw] lg:h-[23.4vw]"
                            src={card.imgSrc}
                          />
                        </div>
                      </div>
                    </Anim>
                  );
                } else {
                  return (
                    <Anim
                      style={card.order === "first" ? { order: -1 } : {}}
                      key={index}
                      classProp={`p-8 border border-[#f3f3f3] bg-[#fafafa] rounded-[20px]`}>
                      <div className="bg-pink uppercase flex justify-center items-center py-[6px] px-[12px] rounded-full text-[13px] leading-[150%] font-medium w-min mb-5">
                        new
                      </div>
                      <div className="flex flex-col justify-between items-start gap-6">
                        <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[250px] text-black tracking-tighter">
                          {card.title}
                        </h3>
                        <div className="flex justify-center w-full">
                          <img
                            className="w-[84%] lg:max-w-[320px] lg:w-[16.1vw]"
                            src={card.imgSrc}
                          />
                        </div>
                        <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[320px]">
                          {card.subtitle}
                        </p>
                      </div>
                    </Anim>
                  );
                }
              })}
            </div>
            <Banner
              title={`Streamline Your Crypto Experience`}
              text={`Experience seamless cryptocurrency management with our user-friendly
                  app. Effortlessly track, trade, and secure your digital assets, all
                  in one place.`}
              imgStyle={`md:min-w-[320px] md:min-h-[320px] min-w-[280px] relative z-10`}
              bg_color={"bg-pink"}
              animType={"opacity"}
              srcImg={Illustration_5}>
              <Button className="py-[13px] px-[20px] max-h-[50px] rounded-[8px] h-auto mt-6 text-[16.4px]">
                <a href="#">Supported Chains</a>
              </Button>
            </Banner>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Features;
