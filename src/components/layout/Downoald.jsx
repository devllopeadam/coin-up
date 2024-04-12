import { downoalds } from "@/constant";
import { Banner } from ".";
import { AppStore, GooglePlay, Mockup_Earn } from "@/assets";
import Anim from "./Anim";

const Downoald = () => {
  return (
    <div className="container-chains">
      <div className="borderborder-grey5 bg-grey3 rounded-t-[20px] md:pt-[80px] md:pb-[120px] py-[64px] max-md:px-6">
        <div className="md:grid grid-cols-[1fr_10fr_1fr]">
          <div></div>
          <div className="flex flex-col gap-10">
            <h2 className="lg:text-[52px] md:text-5xl text-3xl">
              Get the CoinUp App and <br /> Dive Into Crypto
            </h2>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {downoalds.map((downoald) => {
                  return (
                    <Anim key={downoald.title}>
                      <div
                        key={downoald.title}
                        className="flex flex-col gap-3 bg-white border border-grey5 hover:border-grey10 rounded-[1rem] p-8 transition-all">
                        <img
                          loading="lazy"
                          className="w-[48px] h-[48px]"
                          src={downoald.img}
                        />
                        <h3 className="font-medium text-xl text-black tracking-tighter">
                          {downoald.title}
                        </h3>
                        <p className="font-normal text-grey75 leading-6 text-[16px]">
                          {downoald.content}
                        </p>
                      </div>
                    </Anim>
                  );
                })}
              </div>
              <Banner
                bg_color={"bg-light-green"}
                title={"Take Your Crypto Assets Anywhere!"}
                text={
                  "Unlock the power of crypto on the go with the CoinUp app. Seamlessly manage, trade, and track your digital assets from the palm of your hand, wherever you are. Download now and take control of your crypto."
                }
                srcImg={Mockup_Earn}
                imgStyle={
                  "absolute w-[300px] max-md:!top-0 max-w-[90%] max-md:min-h-full md:top-[-145px] min-w-[280px] md:min-w-[320px] z-10"
                }>
                <a
                  className="mt-6"
                  href="https://play.google.com/store/games?hl=en&gl=US">
                  <img src={GooglePlay} />
                </a>
                <a
                  className="mt-6"
                  href="https://www.apple.com/app-store/">
                  <img src={AppStore} />
                </a>
              </Banner>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Downoald;
