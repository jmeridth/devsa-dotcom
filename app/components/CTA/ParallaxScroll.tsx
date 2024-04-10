import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import { GrayscaleTransitionImage } from "../GrayscaleTransitionImage";

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
    offset: ["start start", "end start"], 
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
      className={clsx("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
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
              key={"grid-1" + idx}
            >
              <GrayscaleTransitionImage
                src={el}
                className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <GrayscaleTransitionImage
                src={el}
                className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <GrayscaleTransitionImage
                src={el}
                className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
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
  "https://res.cloudinary.com/jessebubble/image/upload/v1712712737/IMG_2580_pc0u0i.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712715611/IMG_2388_dpmnw0.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712718166/devsa-duotone_1_nbnmb7.png",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712716534/techbloc_nqjgux.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_4_Front_do9uon.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1708041444/images_modern_Huggies_Doodle_Huggy_cqsv7a.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712712736/devsa-gdgsa-meetup-2_rhtvtl.png",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712717993/devsahub_ajd71u.gif",

  "https://res.cloudinary.com/jessebubble/image/upload/v1712712736/devsa-gdgsa-meetup-2_rhtvtl.png",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712712927/656bda24731b4af4887ea7c89d1555a4_2_dpby2o.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712715609/unnamed_ztetko.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712715836/panda_zj7qwy.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712717116/portsa_jp76y2.png",
  "https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Context_g7z6bl.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712717115/capital-factory_vhsdxp.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712715854/RPReplay_Final1711840240_1_x2wuc8.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712715609/IMG_2369_o5jia2.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712715609/FullSizeRender_wvveqh.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712718167/python-duotone_1_crefml.png",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712717465/projectquest_1_wirpcl.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg",
  "https://res.cloudinary.com/jessebubble/image/upload/v1708111969/Vibing_Huggy_pstjli.gif",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712712736/devsa-gdgsa-meetup-2_rhtvtl.png",
  "https://res.cloudinary.com/jessebubble/image/upload/v1712717993/devsahub_ajd71u.gif",
];
