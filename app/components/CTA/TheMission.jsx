import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { GrayscaleTransitionImage } from '../GrayscaleTransitionImage';

export function MissionSection() {
   return (
      <div className="mt-24 pb-24 pt-24">
         <SectionIntro title="Our Mission Takes Flight!" invert={false}>
            <p>
               As the city solidifies its position as a cybersecurity hub and
               fosters partnerships with Monterrey, Mexico and the South Texas
               triangle, we're committed to ensuring our developers have the
               tools and knowledge to thrive in this dynamic environment
            </p>
         </SectionIntro>
         <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32">
            <Tech />
            <Community />
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

function Tech() {
   return (
      <Section
         title="The city lacked a central platform for collaboration"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1714600496/devsa-bw-logo_cmhpef.png',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               <strong>Building a Thriving Hub!</strong> San Antonio has a
               growing ecosystem of community organizations hosting in-person
               and virtual events
            </p>
            <p>
               <strong>Collaboration is at the Heart of DEVSA:</strong> By
               working hand-in-hand with existing organizations in the city,
               we've fostered a network of knowledge sharing and support. Our
               non-profit status allows us to secure affordable venues, ensuring
               inclusivity and accessibility for everyone
            </p>
            <p>
               <strong>Building a Strong Foundation Together:</strong> From the
               start, we knew DEVSA's in-person meetups wouldn't be about
               favoring a single language or tech stack. Instead, we envisioned
               a platform that embraced the diversity of San Antonio's developer
               community
            </p>
         </div>
      </Section>
   );
}

function Community() {
   return (
      <Section
         title="Community is the Result, not the Product!"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1714599154/devsa_u7xs6b.jpg',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               <strong>Built by Developers, For Developers:</strong> We
               understand your needs because we share them. We're a community of
               passionate software developers and engineers who believe a strong
               community thrives on{' '}
               <strong>providing real value to its members</strong>
            </p>
            <p>
               <strong>Focus on Value, Build Community:</strong> We believe in
               empowering developers through meaningful connections, learning
               opportunities, and collaborative projects. Find a safe,
               inclusive, and welcoming environment where you can connect,
               learn, and grow alongside talented engineers at all skill levels
            </p>
            <p>
               <strong>Community thrives naturally</strong> when developers have
               access to valuable resources and the chance to collaborate with
               like-minded individuals. That's why we offer a variety of
               resources, events, and opportunities designed to empower you to
               learn, collaborate, and advance your skills
            </p>
         </div>
      </Section>
   );
}
