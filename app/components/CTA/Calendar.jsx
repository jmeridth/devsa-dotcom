import { Container } from '../Container';
import { FadeIn } from '../FadeIn';
import { SectionIntro } from '../SectionIntro';

export function CalendarSection() {
   return (
      <div className="mt-24 pt-16 sm:mt-32 md:pt-0 lg:mt-40">
         <SectionIntro title="Fostering a Thriving Dev Community in San Antonio!">
            <p>
               <strong>Network and Collaborate:</strong> Whether you are a
               seasoned developer or just starting your journey, don't miss
               these opportunities to learn and connect with the{' '}
               <strong>DEVSA</strong> community!
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <FadeIn>
               <div className="rounded-2xl bg-[#212325] py-2 pr-2">
                  <iframe
                     src="https://lu.ma/embed/calendar/cal-Jg0KUhNjt4lLR55/events?compact=true"
                     title="DevSA Upcoming Event Calendar"
                     style={{
                        borderRadius: '12px',
                        width: '100%',
                        height: '600px',
                     }}
                     className=""
                     allowFullScreen={true}
                     aria-hidden="false"
                     tabIndex="0"
                  ></iframe>
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}
