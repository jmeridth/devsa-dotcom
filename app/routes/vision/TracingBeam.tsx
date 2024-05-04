import React, { useEffect, useRef, useState } from 'react';
import {
   motion,
   useTransform,
   useScroll,
   useVelocity,
   useSpring,
} from 'framer-motion';
import clsx from 'clsx';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function TracingBeam() {
   return (
      <>
         <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
               <Beam className="px-10 py-0.5 lg:px-6">
                  <div className="max-w-7xl">
                     {visionContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                           <div className="space-y-6 text-balance text-base text-neutral-600">
                              {item?.image && (
                                 <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="mb-10 rounded-3xl object-cover"
                                 />
                              )}
                              {item.description}
                           </div>
                        </div>
                     ))}
                  </div>
               </Beam>
            </FadeIn>
         </Container>
      </>
   );
}

const Beam = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end start'],
   });

   const contentRef = useRef<HTMLDivElement>(null);
   const [svgHeight, setSvgHeight] = useState(0);

   useEffect(() => {
      if (contentRef.current) {
         setSvgHeight(contentRef.current.offsetHeight);
      }
   }, []);

   const y1 = useSpring(
      useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
      {
         stiffness: 500,
         damping: 90,
      }
   );
   const y2 = useSpring(
      useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
      {
         stiffness: 500,
         damping: 90,
      }
   );

   return (
      <motion.div
         ref={ref}
         className={clsx('relative mx-auto w-full max-w-5xl', className)}
      >
         <div className="absolute -left-4 top-3 md:-left-20">
            <motion.div
               transition={{
                  duration: 0.2,
                  delay: 0.5,
               }}
               animate={{
                  boxShadow:
                     scrollYProgress.get() > 0
                        ? 'none'
                        : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
               }}
               className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
            >
               <motion.div
                  transition={{
                     duration: 0.2,
                     delay: 0.5,
                  }}
                  animate={{
                     backgroundColor:
                        scrollYProgress.get() > 0
                           ? 'white'
                           : 'var(--emerald-500)',
                     borderColor:
                        scrollYProgress.get() > 0
                           ? 'white'
                           : 'var(--emerald-600)',
                  }}
                  className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
               />
            </motion.div>
            <svg
               viewBox={`0 0 20 ${svgHeight}`}
               width="20"
               height="fit" // Set the SVG height
               className=" ml-4 block"
               aria-hidden="true"
            >
               <motion.path
                  d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                  fill="none"
                  stroke="#9091A0"
                  strokeOpacity="0.16"
                  transition={{
                     duration: 10,
                  }}
               ></motion.path>
               <motion.path
                  d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1.25"
                  className="motion-reduce:hidden"
                  transition={{
                     duration: 10,
                  }}
               ></motion.path>
               <defs>
                  <motion.linearGradient
                     id="gradient"
                     gradientUnits="userSpaceOnUse"
                     x1="0"
                     x2="0"
                     y1={y1} // set y1 for gradient
                     y2={y2} // set y2 for gradient
                  >
                     <stop stopColor="#333333" stopOpacity="0"></stop>
                     <stop stopColor="#18CCFC"></stop>
                     <stop offset="0.325" stopColor="#6344F5"></stop>
                     <stop
                        offset="1"
                        stopColor="#AE48FF"
                        stopOpacity="0"
                     ></stop>
                  </motion.linearGradient>
               </defs>
            </svg>
         </div>
         <div ref={contentRef}>{children}</div>
      </motion.div>
   );
};

const visionContent = [
   {
      description: (
         <>
            <p>
               <strong>Our Dual Focus Approach:</strong> DEVSA leverages a
               unique Dual Focus Approach to achieve our vision. This approach
               combines the expertise of our Board in two key areas: Developer
               Experience and Strategic Expertise
            </p>
            <p>
               <strong>Cultivating a Collaborative Community:</strong> We
               prioritize building strong connections within the San Antonio
               developer community. Through events, online platforms, and
               partnerships, we encourage knowledge sharing, mentorship, and
               collaboration
            </p>
            <p>
               <strong>Unlocking Developer Potential:</strong> We provide
               valuable resources like workshops, tutorials, and tech talks
               delivered by industry experts. These resources, accessible on
               YouTube/Twitch and GitHub, empower developers to hone their
               skills and become key contributors to the city's tech landscape
            </p>
            <p>
               <strong>Building Success Through Partnerships:</strong> We
               actively seek collaborations with individuals and organizations
               to create high-quality content. This ensures our resources are
               relevant to the community's needs and address emerging trends
               within the tech industry
            </p>
            <p>
               <strong>Shaping San Antonio's Tech Narrative:</strong> We
               recognize the potential of San Antonio's tech scene and refuse to
               let external negativity define its future. DEVSA strives to write
               the next chapter of the city's tech story by highlighting its
               strengths, fostering talent, and promoting its potential as a
               vibrant tech hub
            </p>
            <p>
               <strong>Join us!</strong> Be a part of shaping the future of San
               Antonio's tech landscape. Together, we can create a thriving
               community where developers can collaborate, learn, and grow
            </p>
         </>
      ),
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1714609101/devsa-art_ritpzt.svg',
   },
];
