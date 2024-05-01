import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function StarMarquee() {
   let rotations = [
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      '-rotate-2',
   ];

   return (
      <>
         <Container className="mt-24 sm:mt-32">
            <FadeIn>
               <div className="marquee -my-4 flex justify-center gap-5 py-4 sm:gap-8">
                  {imageArray.map((image, index) => (
                     <div
                        key={index}
                        className="marquee-item relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                     >
                        <div className="absolute inset-0 rounded-xl" />
                        <img
                           src={image.href}
                           alt="devsa discord community spaces"
                           className={`relative h-full w-full object-contain ${rotations[index]}`}
                        />
                     </div>
                  ))}
                  {imageArray.map((image, index) => (
                     <div
                        key={index}
                        className="marquee-item relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                     >
                        <div className="absolute inset-0 rounded-xl" />
                        <img
                           src={image.href}
                           alt="devsa discord community spaces"
                           className={`relative h-full w-full object-contain ${rotations[index]}`}
                        />
                     </div>
                  ))}
               </div>
            </FadeIn>

            <style>
               {`
                    .marquee {
                        animation: marquee 30s linear infinite;
                    }
                    @media (max-width: 640px) {
                     .marquee {
                         animation: marquee 5s linear infinite;
                     }
                 }
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}
            </style>
         </Container>
      </>
   );
}

const imageArray = [
   {
      name: 'unity',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1713310025/star-unity_umfbn2.svg',
   },
   {
      name: 'gemini',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1713310023/star-gemini_qoqcwb.svg',
   },
   {
      name: 'python',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1713310020/devsa-star-python_sp7osc.svg',
   },
   {
      name: 'go',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1713310018/devsa-star-go_x2ii8m.svg',
   },
   {
      name: 'markdown',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1714540949/devsa-star-markdown_klibed.svg',
   },
   {
      name: 'csharp',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1714540735/devsa-star-csharp_fyxok6.svg',
   },
   {
      name: 'astro',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1714541341/devsa-star-astro_buepet.svg',
   },
];
