import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import clsx from "clsx";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { SectionIntro } from "../SectionIntro";

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
            className="font-display mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-800 sm:text-7xl mx-auto lg:text-center"
          >
            We are a city rich in culture, history, and creativity{" "}
            <span className="block lg:text-center mt-6">
              <FadeIn>
              <Highlight className="text-neutral-950">
                  So is our tech stack!
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
        "relative flex items-center justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
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

      <div className={clsx("relative z-20", className)}>{children}</div>
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
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={clsx(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 `,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
