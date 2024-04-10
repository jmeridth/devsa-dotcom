import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { TagList, TagListItem } from '~/components/TagList';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';
import { SectionIntro } from '~/components/SectionIntro';

export function MissionSection() {
   return (
      <div className="mt-24 pb-24 pt-24">
         <SectionIntro
            eyebrow="Our Mission Takes Flight"
            title="Empowering the software development community"
            invert={false}
         >
            <p>
               We're passionate about shaping the identity of tech in San
               Antonio, and we're committed to providing the resources and
               support needed for our developers to thrive
            </p>
         </SectionIntro>
         <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32">
            <Tech />
            <Community />
            <Future />
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
         title="Building a Thriving Hub!"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708041444/images_modern_Huggies_Doodle_Huggy_cqsv7a.gif',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               <strong>Tired of feeling isolated? We were too.</strong> When
               developers new to San Antonio kept expressing the lack of a
               dedicated developer space, we knew something had to change
            </p>
            <p>
               We proudly embrace the role of becoming the official software
               development hub for San Antonio. We noticed a fantastic ecosystem
               of organizations hosting in-person and virtual events, but they
               lacked a central platform for collaboration. To bridge this gap,
               we created a comprehensive calendar of all developer events
               happening in the city
            </p>
            <p>
               This initiative fostered strong relationships with existing
               organizations. By sharing our vision of a centralized hub, we've
               made it easier than ever for San Antonio's developers to find the
               events, workshops, and meetups that align with their interests
               and career goals
            </p>
         </div>

         <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
            Community Spotlight:
         </h3>
         <TagList className="mt-4">
            <TagListItem>SA Data Science</TagListItem>
            <TagListItem>Coder Study Group</TagListItem>
            <TagListItem>LeetCode Club</TagListItem>
            <TagListItem>freeCodeCamp SA</TagListItem>
            <TagListItem>Greater Gaming Society</TagListItem>
            <TagListItem>Alamo Python</TagListItem>
         </TagList>
      </Section>
   );
}

function Community() {
   return (
      <Section
         title="Leveraging the Power of Our Community!"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708111969/Vibing_Huggy_pstjli.gif',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               <strong>Building a Strong Foundation Together:</strong> From the
               start, we knew DEVSA's in-person meetups wouldn't be about
               favoring a single language or tech stack. Instead, we envisioned
               a platform that embraced the diversity of San Antonio's developer
               community
            </p>
            <p>
               <strong>Collaboration is at the Heart of DEVSA:</strong> By
               working hand-in-hand with existing organizations in the city,
               we've fostered a network of knowledge sharing and support. Our
               non-profit status allows us to secure affordable venues, ensuring
               inclusivity and accessibility for all developers
            </p>
            <p>
               <strong>A Heartfelt Thank You:</strong> We are immensely grateful
               to everyone who has joined us on this journey! Your participation
               and enthusiasm are the driving force behind DEVSA's success. We
               look forward to an exciting future, empowering San Antonio's
               developer community together
            </p>
         </div>
      </Section>
   );
}

function Future() {
   return (
      <Section
         title="Preparing Developers for Success!"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1712694280/devsa-hub_pc1v1k.png',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               <strong>San Antonio's Tech Landscape is Evolving:</strong> As the
               city solidifies its position as a cybersecurity hub and fosters
               partnerships with Monterrey, Mexico and the South Texas triangle,
               we're committed to ensuring our developers have the tools and
               knowledge to thrive in this dynamic environment
            </p>
            <p>
               <strong>Certification Assistance Programs:</strong> We're
               investigating initiatives to help developers cover the costs of
               certifications from industry leaders like AWS, Azure, HashiCorp,
               and CompTIA
            </p>
            <p>
               <strong>Building Industry Partnerships:</strong> We're actively
               forging connections with cybersecurity companies moving to San
               Antonio. This collaboration will enable us to design workshops
               with mock codebases that mirror real-world industry work
            </p>
            <p>
               <strong>Expanding Our Network:</strong> We're reaching out to
               established companies like USAA, HEB Digital, Accenture, and Booz
               | Allen | Hamilton to co-create learning opportunities relevant
               to their technical needs
            </p>
         </div>
      </Section>
   );
}
