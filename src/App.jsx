/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { Header, Hero, Marque } from "./components/layout";

// function App() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     setShow(true);
//   }, []);

//   return (
//     <div className="container">
//       <Button className="px-5 py-4 cursor-pointer">Button</Button>
//       <motion.div
//         animate={{ y: show ? -56 : 0 }}
//         transition={{ duration: 0.3 }}>
//         <h2 className="hover:text-gray-500 transition-colors text-center text-xl translate-y-14">
//           Jeniah adam
//         </h2>
//       </motion.div>
//       <motion.div
//         className="container"
//         animate={{ scale: 1, y: -112 }}
//         transition={{ duration: 0.5 }}>
//         <div className="w-20 h-20 rounded-full bg-slate-900 translate-y-28"></div>
//       </motion.div>

//       <div className="p-10 border border-dark-gray rounded-[20px] bg-gray"></div>
//     </div>
//   );
// }

const App = () => {
  return (
    <main>
      <Header />
      <section className="home pt-[92px] h-screen min-h-[900px] -z-[1] relative">
        <Hero />
        <Marque />
      </section>
    </main>
  );
};

export default App;
