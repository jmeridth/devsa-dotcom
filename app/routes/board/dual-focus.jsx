import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';

export function DualFocus() {
   return (
      <div className="mt-24 pb-24 pt-24">
         <SectionIntro title="Dual Focus Approach" invert={false}>
            <p>
               By combining developer experience with strategic expertise, our Board ensures DEVSA stays true to its mission while propelling the San Antonio developer community forward
            </p>
         </SectionIntro>
         <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32">
            <Developers />
            <Advisors />
         </div>
      </div>
   );
}

function Section({ title, image, children }) {
   return (
      <Container className="group/section [counter-increment:section]">
         <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
            <div className="flex justify-center">
               <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                  <GrayscaleTransitionImage
                     {...image}
                     sizes="(min-width: 1024px) 41rem, 31rem"
                     className="justify-center rounded-3xl lg:justify-end lg:group-even/section:justify-start"
                  />
               </FadeIn>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
               <FadeIn>
                  <div
                     className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                     aria-hidden="true"
                  />
                  <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                     {title}
                  </h2>
                  <div className="mt-6">{children}</div>
               </FadeIn>
            </div>
         </div>
      </Container>
   );
}

function Developers() {
   return (
      <Section
         title="Grounded in the Community"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/c_fill,w_2048,h_1365,g_auto/v1714749458/gemini_mpkgdz.jpg',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               One pillar of our Board is comprised of <strong>experienced San Antonio developers.</strong>
               They bring a deep understanding of the local developer landscape, having faced the same challenges and needs themselves.  
               This intimate connection ensures that DEVSA stays focused on delivering value that directly impacts the community's growth
            </p>
            <p>
               Their passion for <strong>developer success</strong> fuels our efforts to create a <strong>thriving environment</strong> where developers can learn, collaborate, and solve problems together
            </p>

         </div>
      </Section>
   );
}

function Advisors() {
   return (
      <Section
         title="Expanding Opportunities"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/c_fill,w_2048,h_1365,g_auto/v1712715609/unnamed_ztetko.jpg',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               The other pillar of our Board is a team of <strong>growth-focused advisors.</strong>
               These experienced professionals offer invaluable guidance in strategic planning, fundraising, and relationship building. 
               With their expertise, DEVSA can <strong>scale its operations</strong> and secure resources to <strong>further empower developers</strong>
            </p>
            <p>
               Their <strong>extensive connections</strong> with larger organizations help us forge <strong>impactful partnerships</strong> that open doors for San Antonio's developer talent, unlocking new opportunities for their growth and success
            </p>
            <p>
               <strong>
                  Together, this dual-focused Board provides the leadership and vision required to create a thriving developer ecosystem in San Antonio
               </strong>
            </p>
         </div>
      </Section>
   );
}
