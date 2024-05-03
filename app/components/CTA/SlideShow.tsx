import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export function SlideShow() {
   const images = [
      'https://res.cloudinary.com/jessebubble/image/upload/v1714599163/prodigy_spdkya.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714763416/gdg2_uemsdw.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714763419/gdg5_n8aeo4.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714763415/gdg1_qv8fw3.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714763417/gdg3_xv51fs.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714763417/gdg4_gtguto.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714752461/coder-study-group_iwri1f.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714752461/jose_iverog.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714752581/amc-sa_wevspf.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714752632/hands_eur00y.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714763419/gdg6_q42v0n.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714599150/datascience_rk8kdm.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714749458/gemini_mpkgdz.jpg',
      'https://res.cloudinary.com/jessebubble/image/upload/v1714752461/rosbel_ujiwrr.jpg',
   ];

   return (
      <>
         <div className="relative mt-24 sm:mt-32 lg:mt-40 w-full h-screen">
            <ImagesSlider images={images}>
               <motion.div
                  initial={{
                     opacity: 0,
                     y: -80,
                  }}
                  animate={{
                     opacity: 1,
                     y: 0,
                  }}
                  transition={{
                     duration: 0.6,
                  }}
                  className="z-50 mx-auto max-w-7xl text-center sm:mt-32 lg:mt-40"
               >
                  <motion.h1
                     initial={{
                        opacity: 0,
                     }}
                     animate={{
                        opacity: 1,
                        transition: {
                           delay: 0.2,
                        },
                     }}
                  >
                     <span className="font-display mx-auto lg:mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-white sm:text-6xl">
                        <span className="">Built for Empowerment</span>
                     </span>
                  </motion.h1>
                  <motion.p
                     initial={{
                        opacity: 0,
                     }}
                     animate={{
                        opacity: 1,
                        transition: {
                           delay: 0.3,
                        },
                     }}
                     className="mx-auto mt-6 max-w-3xl text-balance text-center text-xl text-neutral-300"
                  >
                     Our mission is to empower developers with the tools,
                     knowledge, and connections they need to thrive. Together,
                     we'll write the next chapter of San Antonio's tech story
                  </motion.p>
               </motion.div>
            </ImagesSlider>
         </div>
      </>
   );
}

const ImagesSlider = ({
   images,
   children,
   overlay = true,
   overlayClassName,
   className,
   autoplay = true,
   direction = 'up',
}: {
   images: string[];
   children: React.ReactNode;
   overlay?: React.ReactNode;
   overlayClassName?: string;
   className?: string;
   autoplay?: boolean;
   direction?: 'up' | 'down';
}) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [loading, setLoading] = useState(false);
   const [loadedImages, setLoadedImages] = useState<string[]>([]);

   const handleNext = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
   };

   const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
   };

   useEffect(() => {
      loadImages();
   }, []);

   const loadImages = () => {
      setLoading(true);
      const loadPromises = images.map((image) => {
         return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
            img.onerror = reject;
         });
      });

      Promise.all(loadPromises)
         .then((loadedImages) => {
            setLoadedImages(loadedImages as string[]);
            setLoading(false);
         })
         .catch((error) => console.error('Failed to load images', error));
   };
   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === 'ArrowRight') {
            handleNext();
         } else if (event.key === 'ArrowLeft') {
            handlePrevious();
         }
      };

      window.addEventListener('keydown', handleKeyDown);

      // autoplay
      let interval: any;
      if (autoplay) {
         interval = setInterval(() => {
            handleNext();
         }, 5000);
      }

      return () => {
         window.removeEventListener('keydown', handleKeyDown);
         clearInterval(interval);
      };
   }, []);

   useEffect(() => {}, []);

   const slideVariants = {
      initial: {
         scale: 0,
         opacity: 0,
         rotateX: 45,
      },
      visible: {
         scale: 1,
         rotateX: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1.0],
         },
      },
      upExit: {
         opacity: 1,
         y: '-150%',
         transition: {
            duration: 1,
         },
      },
      downExit: {
         opacity: 1,
         y: '150%',
         transition: {
            duration: 1,
         },
      },
   };

   const areImagesLoaded = loadedImages.length > 0;

   return (
      <div
         className={clsx(
            'relative flex h-full w-full items-center justify-center overflow-hidden',
            className
         )}
         style={{
            backgroundColor: '#fff',
         }}
      >
         {areImagesLoaded && children}
         {areImagesLoaded && overlay && (
            <div
               className={clsx(
                  'absolute inset-0 z-40',
                  overlayClassName
               )}
            />
         )}

         {areImagesLoaded && (
            <AnimatePresence>
               <motion.img
                  key={currentIndex}
                  src={loadedImages[currentIndex]}
                  initial="initial"
                  animate="visible"
                  exit={direction === 'up' ? 'upExit' : 'downExit'}
                  variants={slideVariants}
                  className="image absolute inset-0 h-full w-full object-cover object-center"
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  alt="collection of community events and meetups in San Antonio"
               />
            </AnimatePresence>
         )}
      </div>
   );
};
