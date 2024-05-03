import { FadeIn } from '~/components/FadeIn';
import { Container } from '~/components/Container';

export function Sponsors() {
   return (
      <div className="bg-white py-24 sm:py-32 lg:py-40">
         <Container className="mt-16">
            <FadeIn>
               <div className="">
                  <h2 className="font-display block text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                     A Heartfelt Thank You to our Partners & Sponsors
                  </h2>
                  <p className="mt-6 text-xl text-neutral-500">
                     Together, we will write the next chapter of San Antonio's
                     tech story!
                  </p>
                  <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 lg:mx-0 lg:grid-cols-5">
                     <img
                        className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        src="https://res.cloudinary.com/jessebubble/image/upload/e_gen_restore/v1714771175/TB_Full_Logo_lpeeau.png"
                        alt="Tech Bloc"
                        width={158}
                        height={48}
                     />
                     <img
                        className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1714770880/launchsa_geekdom_gey0fz.webp"
                        alt="Launch SA"
                        width={158}
                        height={48}
                     />
                     <img
                        className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1712714217/portsa_logoscolor-RGB_zpflwc.png"
                        alt="Port San Antonio"
                        width={158}
                        height={48}
                     />

                     <img
                        className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1714770882/Project_QUEST_Logos_Full_Color_Full_Logo_elefs9.svg"
                        alt="Project Quest"
                        width={158}
                        height={48}
                     />
                     <img
                        className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1714770881/Logostyle-3-2vect_1594750425_qyrqql.webp"
                        alt="What's Brewing SA"
                        width={158}
                        height={48}
                     />
                  </div>
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}
