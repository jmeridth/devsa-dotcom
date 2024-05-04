import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { GridList, GridListItem } from '~/components/GridList';

export function VisionGrid() {
   return (
      <>
         <div className="mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               <FadeIn>
                  <img
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1714609101/devsa-art_ritpzt.svg"
                     alt="DEVSA playing with art logo"
                     className="h-auto w-full"
                  />
               </FadeIn>
               <Container className="mt-16">
                  <GridList>
                     <GridListItem title="Our Dual Focus Approach">
                        DEVSA leverages a unique Dual Focus Approach to achieve
                        our vision. This approach combines the expertise of our
                        Board in two key areas: Developer Experience and
                        Strategic Expertise
                     </GridListItem>
                     <GridListItem title="Cultivating a Collaborative Community">
                        We prioritize building strong connections within the San
                        Antonio developer community. Through events, online
                        platforms, and partnerships, we encourage knowledge
                        sharing, mentorship, and collaboration
                     </GridListItem>
                     <GridListItem title="Unlocking Developer Potential">
                        We provide valuable resources like workshops, tutorials,
                        and tech talks delivered by industry experts. These
                        resources empower developers to hone their skills and become key
                        contributors to the city's tech landscape
                     </GridListItem>
                     <GridListItem title="Building Success Through Partnerships">
                        We actively seek collaborations with tech
                        organizations to create high-quality content. This
                        ensures our resources are relevant to the community's
                        needs and address emerging trends within the tech
                        industry
                     </GridListItem>
                     <GridListItem title="Shaping San Antonio's Tech Narrative">
                        We recognize the potential of San Antonio's tech scene
                        and strive to write the next chapter of the city's
                        tech story by highlighting its strengths, fostering
                        talent, and promoting its potential as a vibrant tech
                        hub
                     </GridListItem>
                     <GridListItem title="Join us!">
                        Be a part of shaping the future of San Antonio's tech
                        landscape. Together, we can create a thriving community
                        where developers can collaborate, learn, and grow
                     </GridListItem>
                  </GridList>
               </Container>
            </div>
         </div>
      </>
   );
}
