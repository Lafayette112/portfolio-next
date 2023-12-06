"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref} 
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
        <SectionHeading>About Me</SectionHeading>
        
        <p className='mb-3 '>
            After exploring the world of cooking, hotel management and hardware industry, I decided to switch careers and dive into the world of{" "}
            <span className="font-medium">Web Development</span>. <br /> Fascinating world {`isn't`} it. Structuring, designing, problem-solving, those aspects resonate with me. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a front-end developer.
        </p>

        <p>
            <span className="italic">When {`I'm`} not coding</span>, I enjoy playing sport (Decathlon-Crossfit), watching movies (specially asian), and building PCs. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning{" "}
            <span className="font-medium">cuban salsa</span>, new <span className="font-medium">pastry recipes</span> and relearning <span className="font-medium">Portuguese</span>.{" "} <span>I was fluent back in the day and I need to preserve this beautiful language.</span>
        </p>
    </motion.section>
  )
}
