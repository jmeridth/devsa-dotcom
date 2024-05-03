import { Container } from '~/components/Container';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';
import { Button } from '~/components/Button';
import { CalendarSection } from '~/components/CTA/Calendar';

export default function Index() {
   return (
      <>
         <PageIntro title="Connect with the Software Development Community!">
            <p>
               The DEVSA community thrives on fostering learning, collaboration,
               and growth for developers of all experience levels. Dive into our
               exciting lineup of events and unlock valuable opportunities
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
               <p>
                  <strong>Don't miss out!</strong> Stay up-to-date on all
                  upcoming DEVSA events and subscribe to our calendar with a
                  single click!
               </p>
            </div>
            <Button className="mt-8" href="https://lu.ma/devSA" invert={false}>
               Subscribe to DEVSA Events Calendar
            </Button>
         </PageIntro>
         <article>
            <FadeIn>
               <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                  <Container className="">
                     {events.map((event) => (
                        <div key={event.index} className="mx-auto max-w-5xl">
                           <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                 <dt className="font-semibold">Organization</dt>
                                 <dd>{event.org}</dd>
                              </div>
                              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                 <dt className="font-semibold">Topic</dt>
                                 <dd>{event.topic}</dd>
                              </div>
                              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                 <dt className="font-semibold">Year</dt>
                                 <dd>
                                    <time>{new Date().getFullYear()}</time>
                                 </dd>
                              </div>
                           </dl>
                           <div className="border-y border-neutral-200 bg-neutral-100">
                              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                                 <GrayscaleTransitionImage
                                    src={event.image}
                                    alt="devSA collaboration event"
                                    quality={90}
                                    className="w-full"
                                    sizes="(min-width: 1216px) 76rem, 100vw"
                                 />
                              </div>
                           </div>
                        </div>
                     ))}
                  </Container>
               </div>
            </FadeIn>
         </article>

         <CalendarSection />
      </>
   );
}

const events = [
   {
      index: 4,
      org: 'PyTexas - Alamo Python',
      topic: "Safeguarding LLM's with Guardrails",
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1714537942/devsa-alamopython-2_3_qh0org.png',
   },
   {
      index: 3,
      org: 'DEVSA Discord Community Space',
      topic: 'Social Lounge: Unwind & Connect',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1714599180/social-lounge-2_1_o91vyl.png',
   },
   {
      index: 2,
      org: 'DEVSA',
      topic: 'Coffee & Collaboration',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1714538684/devsa-coffee-wednesdays-1_qzfqm1.png',
   },
   {
      index: 1,
      org: 'Google Developer Group',
      topic: 'Build with Google AI - Gemini',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1714538137/devsa-gdgsa-meetup-3_tcvlin.png',
   },
];
