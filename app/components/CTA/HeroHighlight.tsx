import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import clsx from 'clsx';
import { Container } from '../Container';
import { FadeIn } from '../FadeIn';

export function HeroHighlight() {
   return (
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <Container className="">
            <FadeIn>
               <HeroHighlighter>
                  <motion.h1
                     initial={{
                        opacity: 0,
                        y: 20,
                     }}
                     animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                     }}
                     transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                     }}
                     className="font-display mx-auto mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-800 sm:text-7xl lg:text-center"
                  >
                     Fostering a vibrant developer{' '}
                     <span className="mt-6 block lg:text-center">
                        <FadeIn>
                           <Highlight className="text-neutral-950">
                              Community!
                           </Highlight>
                        </FadeIn>
                     </span>
                  </motion.h1>
               </HeroHighlighter>
            </FadeIn>
         </Container>
      </div>
   );
}

export const HeroHighlighter = ({
   children,
   className,
   containerClassName,
}: {
   children: React.ReactNode;
   className?: string;
   containerClassName?: string;
}) => {
   let mouseX = useMotionValue(0);
   let mouseY = useMotionValue(0);

   function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
   }: React.MouseEvent<HTMLDivElement>) {
      if (!currentTarget) return;
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
   }
   return (
      <div
         className={clsx(
            'group relative flex w-full items-center justify-center',
            containerClassName
         )}
         onMouseMove={handleMouseMove}
      >
         <div className="bg-dot-thick-neutral-300 pointer-events-none absolute inset-0" />
         <motion.div
            className="bg-dot-thick-indigo-500 pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
               WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
               maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
            }}
         />

         <div className={clsx('relative z-20', className)}>{children}</div>
      </div>
   );
};

export const Highlight = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <motion.span
         initial={{
            backgroundSize: '0% 100%',
         }}
         animate={{
            backgroundSize: '100% 100%',
         }}
         transition={{
            duration: 2,
            ease: 'linear',
            delay: 0.5,
         }}
         style={{
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            display: 'inline',
         }}
         className={clsx(
            `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 `,
            className
         )}
      >
         {children}
      </motion.span>
   );
};
