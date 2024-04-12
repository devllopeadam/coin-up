import { Illustration_15 } from "@/assets";
import { investments } from "@/constant";
import { Anim, Banner } from ".";
import { Button } from "../ui/button";

const Bulletproofing = () => {
  return (
    <div className="container">
      <div className="xl:grid xl:grid-cols-[1fr_10fr_1fr] gap-6">
        <div></div>
        <div className="flex flex-col items-start gap-8 md:gap-20">
          <h2 className="lg:text-[52px] md:text-5xl text-3xl">
            Bulletproofing Your <br /> Crypto Investments
          </h2>
          <div className="w-full flex flex-col gap-10">
            <div className="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr] grid-rows-[auto] gap-10 w-full">
              {investments.map((card) => {
                return (
                  <Anim
                    key={card.title}
                    classProp={`p-8 border border-grey5 bg-grey3 rounded-[20px] flex flex-col justify-between items-start gap-6 `}>
                    <h3 className="text-[1.75rem] leading-[112%] font-medium max-w-[250px] text-black tracking-tighter">
                      {card.title}
                    </h3>
                    <p className="text-grey75 leading-6 font-normal text-[17px] max-w-[320px]">
                      {card.subtitle}
                    </p>
                    <div className="flex justify-center w-full">
                      <img
                        loading="lazy"
                        className="w-[84%] lg:max-w-[320px] lg:w-[16.1vw]"
                        src={card.imgSrc}
                      />
                    </div>
                  </Anim>
                );
              })}
            </div>
            <Banner
              title={`Streamline Your Crypto Experience`}
              text={`Experience seamless cryptocurrency management with our user-friendly
                    app. Effortlessly track, trade, and secure your digital assets, all
                    in one place.`}
              imgStyle={`md:min-w-[320px] md:min-h-[320px] min-w-[280px]  relative z-10`}
              bg_color={"bg-orange"}
              animType={"opacity"}
              srcImg={Illustration_15}>
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

export default Bulletproofing;
