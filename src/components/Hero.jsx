import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
       className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center xl:mt-20 sm:mt-16 md:mt-20 lg:mt-20">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-82 h-40 violet-gradient" />
        </div>
        <div className="sm:mt-16 md:mt-20 lg:mt-20 xl:mt-20">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">ABhishek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          As a frontend engineer, I thrive <br className="sm:block hidden"/>in tackling complex logical challenges.
          </p>
        </div>
      </div>
        
        <div className='absolute xs:bottom-10 bottom-32   w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary  lg:mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
