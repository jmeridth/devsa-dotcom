import { PageIntro } from '~/components/PageIntro';
import { Board } from './board';
import { DualFocus } from './dual-focus';
import { StarMarquee } from '~/components/CTA/StarMarquee';

export default function Index() {
   return (
      <>
         <PageIntro title="The Power of Our Dual-Focus Board">
            <p>
               At DEVSA, our mission is to empower San Antonio's developer
               community through education, connection, and opportunity. To
               achieve this ambitious goal, we rely on a{' '}
               <strong>unique dual-focus Board of Directors</strong>
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
               <p>
                  <strong>Developer Champions</strong> Led by seasoned San
                  Antonio developers who understand the local developer
                  landscape, this group champions initiatives that directly
                  benefit the community's growth and fosters a vibrant space for
                  learning and collaboration
               </p>
               <p>
                  <strong>Group-Focused Advisors</strong> Complementing our
                  developer champions, growth advisors offer strategic planning,
                  fundraising, and partnership expertise. Their guidance fuels
                  DEVSA's expansion and unlocks new opportunities for San
                  Antonio's developers
               </p>
            </div>
         </PageIntro>

         <DualFocus />
         <Board />
      </>
   );
}
