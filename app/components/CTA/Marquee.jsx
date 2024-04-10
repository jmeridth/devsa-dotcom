import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function MarqueeSection() {
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
         <Container className="mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40">
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
                           alt="midjourney collection"
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
                           alt="midjourney collection"
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
      name: 'huggingface',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708041429/huggingface_hufljq.png',
   },
   {
      name: 'cloud',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1712694700/terminal-google-cloud_q5nfdm.png',
   },
   {
      name: 'github',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1707781399/midjourney/github_hlswbo.png',
   },
   {
      name: 'azure',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1712694891/terminal-azure_v9xpf3.png',
   },
   {
      name: 'deno',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708122484/deno_xxhibx.png',
   },
   {
      name: 'python',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1712694280/terminal-python_zx2ijr.png',
   },
   {
      name: 'react',
      href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708241255/react_zh7tzb.png',
   },
];
