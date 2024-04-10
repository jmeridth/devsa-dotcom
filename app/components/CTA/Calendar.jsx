import { Container } from '../Container';
import { FadeIn } from '../FadeIn';
import { SectionIntro } from '../SectionIntro';

export function CalendarSection() {
   return (
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <SectionIntro
            eyebrow="Network and Collaborate"
            title="Connect with developers and build your network"
         >
            <p>
               Whether you are a seasoned developer or just starting your
               journey, don't miss these opportunities to learn and connect with
               the <strong>DEVSA</strong> community!
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <FadeIn>
               <div className="">
                  <iframe
                     src="https://lu.ma/embed/calendar/cal-Jg0KUhNjt4lLR55/events?compact=true"
                     frameborder="0"
                     style={{
                        border: '1px solid #bfcbda88',
                        borderRadius: '24px',
                        width: '100%',
                        height: '600px',
                     }}
                     allowfullscreen=""
                     aria-hidden="false"
                     tabindex="0"
                  ></iframe>
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}
