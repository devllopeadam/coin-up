import { logos } from "@/constant";

const Partners = () => {
  return (
    <div className="container">
      <div className="xl:grid xl:grid-cols-[1fr_10fr_1fr]">
        <div></div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-6 text-center justify-center items-center w-full mx-auto px-6">
            <h2 className="lg:text-[52px] max-w-[560px] md:text-5xl text-3xl">
              Our Trusted Partners
            </h2>
            <p className="font-normal text-grey75 leading-6 text-[16px] max-w-[580px]">
              {`Discover partners powering CoinUp's success. Through strategic
              alliances, we ensure reliability, security, and innovation for
              your crypto journey.`}
            </p>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 grid-rows-[auto] gap-y-5 w-full">
            {logos.map((logo) => {
              return (
                <div
                  key={logo.id}
                  className="flex items-center justify-center p-5">
                  <img
                    className="w-[128px] cursor-pointer opacity-50 transition-opacity hover:opacity-100"
                    loading="lazy"
                    src={logo.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Partners;
