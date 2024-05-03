import { SlideShow } from '~/components/CTA/SlideShow';
import { BeyondHeadlines } from '~/components/CTA/BeyondHeadlines';
import { MissionSection } from '~/components/CTA/TheMission';
import { PageIntro } from '~/components/PageIntro';

export default function Index() {
   return (
      <>
         <PageIntro title="From Frustration to Community">
            <p>
               <strong>The DEVSA Story:</strong> San Antonio's tech scene is
               booming with potential, but a nagging feeling persisted - the
               unsung heroes, our developers, faced hurdles hidden beneath the
               flashy headlines
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
               <p>
                  Layoffs left many feeling unsupported, bootcamp graduates
                  struggled to bridge the gap between theory and practice, and
                  industry news seemed to miss the mark entirely
               </p>
               <p>
                  We were determined to go beyond the headlines and empower the
                  developers who are the true backbone of San Antonio's tech
                  sector
               </p>
               <p>
                  <strong>
                     Together, with a community built on collaboration and
                     connection, we'll unlock the full potential of San
                     Antonio's tech landscape
                  </strong>
               </p>
            </div>
         </PageIntro>

         <SlideShow />
         <BeyondHeadlines />
         <MissionSection />
      </>
   );
}
