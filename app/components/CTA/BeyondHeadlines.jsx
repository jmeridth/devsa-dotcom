import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { List, ListItem } from '~/components/List';
import { FadeIn } from '~/components/FadeIn';
import { StylizedImage } from '~/components/StylizedImage';

export function BeyondHeadlines() {
   return (
      <div className="relative mt-24 rounded-3xl bg-neutral-950 px-6 py-4 pb-16 pt-16 sm:mt-32 sm:pt-32 lg:mt-40">
         <SectionIntro
            eyebrow="Beyond the headlines"
            title="The tech sector is buzzing with excitement"
            invert={true}
         >
            <p>
               The thriving cybersecurity space is a major pillar for the city,
               and the growing relationship with the South Texas Triangle holds
               immense promise
            </p>
            <p className="hdr mt-6">
               But amidst this growth, a crucial segment of the tech ecosystem
               seems overlooked:{' '}
               <strong className="gradient-text lg:uppercase">
                  our developers
               </strong>
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <div className="lg:flex lg:items-center lg:justify-end">
               <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                  <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                     <StylizedImage
                        sizes="(min-width: 1024px) 41rem, 31rem"
                        className="justify-center lg:justify-end"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1713300333/410e4fb33ef44f83b1774203cbe4f263_3_lmgy4g.gif"
                     />
                  </FadeIn>
               </div>
               <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                  <ListItem title="The Unsung Hereos">
                     Layoffs have impacted developers, leaving many feeling
                     uncertain and unsupported. Bootcamp graduates, enthusiastic
                     but underprepared, often struggle to bridge the gap between
                     theoretical knowledge and practical application. This lack
                     of focus on developer needs hinders the tech sector's true
                     potential
                  </ListItem>
                  <ListItem title="Beyond the Headlines">
                     The flashy headlines about cybersecurity and startups
                     rarely delve deeper. The real power behind this growth lies
                     in the tools, languages, and frameworks developers wield to
                     build the technology driving progress
                  </ListItem>
                  <ListItem title="Call for Action">
                     San Antonio's tech scene has the potential to be truly
                     inclusive. Let's champion the developers who form the
                     backbone of innovation. We need to provide them with
                     resources, training, and support to thrive in this
                     ever-evolving landscape
                  </ListItem>
               </List>
            </div>
         </Container>

         <style>
            {`
        .hdr .gradient-text {
          background: linear-gradient(to right in oklch, color(display-p3 1 0 .5), color(display-p3 0 1 1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          }
        }
    `}
         </style>
      </div>
   );
}
