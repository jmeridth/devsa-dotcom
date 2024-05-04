import { PageIntro } from '~/components/PageIntro';
import { TracingBeam } from './TracingBeam';
import { Sponsors } from '~/components/CTA/Sponsors';

export default function Index() {
   return (
      <>
         <PageIntro title="Shaping the Future of SA's Tech Landscape">
            <p>
               DEVSA is a community-driven initiative with a clear vision to{' '}
               <strong>
                  collaborate and elevate the San Antonio tech space.
               </strong>{' '}
               We believe in the immense potential of our city's tech scene and
               are committed to fostering a thriving ecosystem for developers
            </p>
         </PageIntro>

         <TracingBeam />
         <Sponsors />
      </>
   );
}
