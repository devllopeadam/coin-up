import { Illustration_16 } from "@/assets";
import { questions } from "@/constant";
import { Accordion } from ".";

const Questions = () => {
  return (
    <div className="container">
      <div className="xl:grid xl:grid-cols-[1fr_10fr_1fr] gap-6">
        <div></div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-10 max-w-[650px] mx-auto">
            <div className="flex flex-col gap-4 text-center justify-center items-center w-full mx-auto px-6">
              <img
                className="md:w-[56px] w-[40px] h-[40px] md:h-[56px]"
                src={Illustration_16}
              />
              <h2 className="lg:text-[52px] max-w-[560px] md:text-5xl text-3xl">
                Your Burning Crypto Questions Answered
              </h2>
              <p className="font-normal text-grey75 leading-6 text-[16px] max-w-[580px]">
                {`Explore our comprehensive FAQ section to find answers to all your burning questions about cryptocurrency and the CoinUp platform.`}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {questions.map((question) => {
                return (
                  <Accordion
                    key={question.id}
                    question={question.question}
                    response={question.response}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Questions;
