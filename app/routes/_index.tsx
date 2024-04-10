import type { MetaFunction } from '@remix-run/node';
import { MissionSection } from '~/components/CTA/TheMission';
import { GitHubSection } from '~/components/CTA/GitHub';
import { DiscordSection } from '~/components/CTA/Discord';
import { MarqueeSection } from '~/components/CTA/Marquee';
import { SponsorMask } from '~/components/CTA/SponsorMask';
import { ShopSection } from '~/components/CTA/Shop';
import { CalendarSection } from '~/components/CTA/Calendar';
import { WavyBackgroundHero } from '~/components/CTA/WavyBackgroundHero';
import { CTASection } from '~/components/CTA/CTASection';
import { ParallaxScroll } from '~/components/CTA/ParallaxScroll';
import { HeroHighlight } from '~/components/CTA/HeroHighlight';

export const meta: MetaFunction = () => {
   return [
      {
         title: 'DEVSA is a educational non-profit organization for the software development and engineer community',
      },
      {
         name: 'DEVSA - Leveraging the power of our tech community in San Antonio',
         content:
            "DEVSA is a educational non-profit organization for the software development and engineer community",
      },
   ];
};

export default function Index() {
   return (
      <>
         <WavyBackgroundHero />
         <MarqueeSection />
         <CTASection />
         <MissionSection />
         <HeroHighlight />
         <ParallaxScroll />
         <CalendarSection />
         <ShopSection />
         <DiscordSection />
         <GitHubSection />
         <SponsorMask />
      </>
   );
}
