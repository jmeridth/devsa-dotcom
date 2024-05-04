import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { GrayscaleTransitionImage } from '../GrayscaleTransitionImage';
import { Link } from '@remix-run/react';
import { useRef } from 'react';

export function ShopSection() {
   const scrollContainerRef = useRef(null);

   const handleImageLoad = () => {
      if (scrollContainerRef.current) {
         const scrollContainer = scrollContainerRef.current;
         scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      }
   };

   return (
      <div className="cta mt-24 rounded-3xl px-6 py-4 pb-16 pt-16 sm:mt-32 lg:mt-40">
         <SectionIntro title="Gear Up & Give Back!" invert>
            <p>
               Shop exclusive DEVSA swag and support the local developer
               community
            </p>
            <Link
               to="https://devsanantonio.printify.me/products"
               target="_blank"
               rel="noopener noreferrer"
            >
               <button className="mt-8 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100">
                  Shop Now
               </button>
            </Link>
         </SectionIntro>
         <Container className="mt-16">
            <FadeIn>
               <div
                  ref={scrollContainerRef}
                  className="grid max-h-[60dvh] grid-cols-1 gap-6 overflow-y-auto sm:grid-cols-2 sm:gap-8 md:max-h-full md:grid-cols-3 md:gap-10"
               >
                  {mockups.map((mockup, index) => (
                     <div
                        key={index}
                        className="relative mx-6 flex-none sm:mx-0"
                     >
                        <div className="absolute inset-0 rounded-xl" />
                        <Link
                           to={mockup.href}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <GrayscaleTransitionImage
                              src={mockup.src}
                              alt={mockup.alt}
                              className={`slideZoom relative h-full w-full rounded-xl object-contain`}
                              onLoad={handleImageLoad}
                           />
                        </Link>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </Container>

         <style>
            {`
               @keyframes slideZoom {
                  0% {
                     transform: translateX(100%) scale(0.8);
                     opacity: 0;
                  }
                  100% {
                     transform: translateX(0) scale(1);
                     opacity: 1;
                  }
               }

               .slideZoom {
                  animation: slideZoom 0.6s ease-out;
               }

               .cta {
                  /* Other styles */
                  background-size: 200% 200%;
                  animation: gradient 10s ease infinite;
                  background-image: linear-gradient(45deg, #000000 0%, #333333 55%, #eeeeee 100%);
                }
                
                @keyframes gradient {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
               }
            `}
         </style>
      </div>
   );
}

const mockups = [
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg',
      alt: 'devSA Terminal React Face Tee',
      href: 'https://devsanantonio.printify.me/product/5902956/unisex-garment-dyed-t-shirt',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_4_Front_1_avyzok.jpg',
      alt: 'devSA Terminal Logo Tee',
      href: 'https://devsanantonio.printify.me/product/5924654/unisex-garment-dyed-t-shirt',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Context_g7z6bl.jpg',
      alt: 'devSA Terminal Logo Tee',
      href: 'https://devsanantonio.printify.me/product/5924654/unisex-garment-dyed-t-shirt',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_1_szs1sg.png',
      alt: 'devSA Terminal Vite Tee',
      href: 'https://devsanantonio.printify.me/product/5919627/unisex-garment-dyed-t-shirt',
   },
   {
      src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Front_p196aj.jpg',
      alt: 'devSA Terminal Huggin Face Tee',
      href: 'https://devsanantonio.printify.me/product/5919629/unisex-garment-dyed-t-shirt',
   },
];
