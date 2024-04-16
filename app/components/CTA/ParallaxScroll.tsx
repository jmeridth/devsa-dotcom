import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import clsx from 'clsx';
import { GrayscaleTransitionImage } from '../GrayscaleTransitionImage';

export const ParallaxScrollSecond = ({
   images,
   className,
}: {
   images: string[];
   className?: string;
}) => {
   const gridRef = useRef<any>(null);
   const { scrollYProgress } = useScroll({
      container: gridRef,
      offset: ['start start', 'end start'],
   });

   const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
   const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
   const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

   const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
   const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
   const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

   const third = Math.ceil(images.length / 3);

   const firstPart = images.slice(0, third);
   const secondPart = images.slice(third, 2 * third);
   const thirdPart = images.slice(2 * third);

   return (
      <div
         className={clsx(
            'h-[40rem] w-full items-start overflow-y-auto',
            className
         )}
         ref={gridRef}
      >
         <div
            className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-10 py-40 md:grid-cols-2 lg:grid-cols-3"
            ref={gridRef}
         >
            <div className="grid gap-10">
               {firstPart.map((el, idx) => (
                  <motion.div
                     style={{
                        y: translateYFirst,
                        x: translateXFirst,
                        rotateZ: rotateXFirst,
                     }} // Apply the translateY motion value here
                     key={'grid-1' + idx}
                  >
                     <GrayscaleTransitionImage
                        src={el}
                        className="!m-0 h-80 w-full gap-10 rounded-lg bg-neutral-700 object-cover !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
            <div className="grid gap-10">
               {secondPart.map((el, idx) => (
                  <motion.div key={'grid-2' + idx}>
                     <GrayscaleTransitionImage
                        src={el}
                        className="!m-0 h-80 w-full gap-10 rounded-lg object-cover !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
            <div className="hidden md:grid md:gap-10">
               {thirdPart.map((el, idx) => (
                  <motion.div
                     style={{
                        y: translateYThird,
                        x: translateXThird,
                        rotateZ: rotateXThird,
                     }}
                     key={'grid-3' + idx}
                  >
                     <GrayscaleTransitionImage
                        src={el}
                        className="!m-0 h-80 w-full gap-10 rounded-lg object-cover !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
};

export function ParallaxScroll() {
   return <ParallaxScrollSecond images={images} />;
}

const images = [
   'https://res.cloudinary.com/jessebubble/image/upload/v1712712737/IMG_2580_pc0u0i.jpg',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712715611/IMG_2388_dpmnw0.jpg',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712956964/IMG_2980_ltnlpg.jpg',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712716534/techbloc_nqjgux.gif',
   'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_4_Front_do9uon.jpg',

   'https://res.cloudinary.com/jessebubble/image/upload/v1712712736/devsa-gdgsa-meetup-2_rhtvtl.png',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712712927/656bda24731b4af4887ea7c89d1555a4_2_dpby2o.gif',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712717116/portsa_jp76y2.png',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712957265/launchsa_1_p7k92r.png',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712715836/panda_zj7qwy.gif',

   'https://res.cloudinary.com/jessebubble/image/upload/v1712715609/unnamed_ztetko.jpg',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712715609/IMG_2369_o5jia2.jpg',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712715609/FullSizeRender_wvveqh.jpg',
   'https://res.cloudinary.com/jessebubble/image/upload/v1712717465/projectquest_1_wirpcl.gif',
   'https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg',
];
