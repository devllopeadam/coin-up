// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useId } from "react";

const marques = [
  { type: "name", label: "decentralized" },
  { type: "empty", label: "" },
  { type: "name", label: "Secure" },
  { type: "empty", label: "" },
  { type: "name", label: "Fast" },
  { type: "empty", label: "" },
  { type: "name", label: "Open-Source" },
  { type: "empty", label: "" },
  { type: "name", label: "Transparent" },
  { type: "empty", label: "" },
  { type: "name", label: "Unique" },
  { type: "empty", label: "" },
  { type: "name", label: "Friendly" },
  { type: "empty", label: "" },
  { type: "name", label: "trustworthy" },
  { type: "empty", label: "" },
  { type: "name", label: "decentralized" },
  { type: "empty", label: "" },
  { type: "name", label: "Secure" },
  { type: "empty", label: "" },
  { type: "name", label: "Fast" },
  { type: "empty", label: "" },
  { type: "name", label: "Open-Source" },
  { type: "empty", label: "" },
  { type: "name", label: "Transparent" },
  { type: "empty", label: "" },
  { type: "name", label: "Unique" },
  { type: "empty", label: "" },
  { type: "name", label: "Friendly" },
  { type: "empty", label: "" },
  { type: "name", label: "trustworthy" },
  { type: "empty", label: "" },
];

const Marque = () => {
  let id = 0;
  return (
    <div className="container">
      <div className="overflow-hidden bg-grey85 py-5 border border-[#f3f3f3] border-t-0 -mt-[1px] rounded-b-[20px] text-white font-normal text-[0.75rem] uppercase">
        <div className="marque flex items-center justify-start gap-5">
          <div className="flex gap-5 items-center">
            {marques.map((marque) => {
              if (marque.type === "name") {
                return (
                  <div
                    className="text-nowrap"
                    key={id++}>
                    {marque.label}
                  </div>
                );
              } else {
                return (
                  <div
                    className="w-5 h-1 bg-grey75 rounded-full"
                    key={id++}></div>
                );
              }
            })}
          </div>
          <div className="flex gap-5 items-center">
            {marques.map((marque) => {
              if (marque.type === "name") {
                return (
                  <div
                    className="text-nowrap"
                    key={marque.label}>
                    {marque.label}
                  </div>
                );
              } else {
                return (
                  <div
                    className="w-5 h-1 bg-grey75 rounded-full"
                    key={marque.label}></div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marque;
