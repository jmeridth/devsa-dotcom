import type { MetaFunction } from '@remix-run/node';
import { MissionSection } from '~/components/CTA/TheMission';
import { MarqueeSection } from '~/components/CTA/Marquee';
import { SponsorMask } from '~/components/CTA/SponsorMask';
import { ShopSection } from '~/components/CTA/Shop';
import { CalendarSection } from '~/components/CTA/Calendar';
import { WavyBackgroundHero } from '~/components/CTA/WavyBackgroundHero';
import { BeyondHeadlines } from '~/components/CTA/BeyondHeadlines';
import { ParallaxScroll } from '~/components/CTA/ParallaxScroll';
import { HeroHighlight } from '~/components/CTA/HeroHighlight';
import { DiscordCommunity } from '~/components/CTA/DiscordCommunity';

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
         <MarqueeSection />
         <BeyondHeadlines />
         <MissionSection />
         <SponsorMask />
         <DiscordCommunity />
         <CalendarSection />
         <HeroHighlight />
         <ParallaxScroll />
         <ShopSection />
      </>
   );
}
