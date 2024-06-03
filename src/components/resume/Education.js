import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.TECH in Computer Science and Engineering"
            subTitle="KIET group of Institutions, Ghaziabad(2021 - 2025)"
            result="8.44/10.0"
           
          />
          <ResumeCard
            title="Intermediate School(PCM)"
            subTitle="Gurukul Academy, Palia Kalan (2019 - 2020) (ISC)"
            result="89%"
            
          />
          <ResumeCard
            title="High School Education"
            subTitle="Gurukul Academy, Palia Kalan (2017 - 2018) (ICSC)"
            result="87%"
           
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education;