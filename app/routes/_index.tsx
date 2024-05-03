import type { MetaFunction } from '@remix-run/node';
import { MissionSection } from '~/components/CTA/TheMission';
import { BeyondHeadlines } from '~/components/CTA/BeyondHeadlines';
import { SponsorMask } from '~/components/CTA/SponsorMask';
import { ShopSection } from '~/components/CTA/Shop';
import { CalendarSection } from '~/components/CTA/Calendar';
import { WavyBackgroundHero } from '~/components/CTA/WavyHero';
import { DiscordCommunity } from '~/components/CTA/DiscordCommunity';
import { StarMarquee } from '~/components/CTA/StarMarquee';
import { ExpandingNetwork } from '~/components/CTA/ExpandingNetwork';
import { Slides } from "~/components/CTA/slides"

export const meta: MetaFunction = () => {
   return [
      {
         title: 'DEVSA is a educational non-profit organization for the software development and engineer community',
      },
      {
         name: 'DEVSA - Leveraging the power of our tech community in San Antonio',
         content:
            'DEVSA is a educational non-profit organization for the software development and engineer community',
      },
   ];
};

export default function Index() {
   return (
      <>
         <WavyBackgroundHero />
         <Slides />
         <DiscordCommunity />
         <BeyondHeadlines />
         <MissionSection />
         <StarMarquee />
         <CalendarSection />
         <ShopSection />
         <ExpandingNetwork />
         <SponsorMask />
      </>
   );
}
