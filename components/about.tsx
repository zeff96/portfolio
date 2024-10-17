'use client'

import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having dedicated extensive time to immersive remote development, I've successfully crafted a diverse range of projects, spanning from impactful landing pages to intricate API integrations. My proficiency in JavaScript, Ruby, and Ruby on Rails is underscored by a track record of accomplishments. I've spent the last several months working remotely and asynchronously with people across three different time zones (UTC-6, UTC+1, UTC+5), which sets me apart.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, reading books, and conversing with my beloved ones. I also enjoy&nbsp;
        <span className="font-medium">learning new things</span>. I am currently
        learning about&nbsp;
        <span className="font-medium">learning how to play the guitar.</span>
      </p>
    </motion.section>
  )
}