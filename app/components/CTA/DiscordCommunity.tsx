import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Link } from '@remix-run/react';
import { MarqueeSection } from '~/components/CTA/CommunityMarquee';

export function DiscordCommunity() {
   return (
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <Container className="pt-20 lg:pt-16">
            <FadeIn>
               <h2 className="hdr font-display mx-auto mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl lg:text-center">
                  Find your Community Space on our{' '}
                  <Link
                     to="https://discord.gg/cvHHzThrEw"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <strong className="gradient-text">Discord</strong>{' '}
                     <strong className="gradient-text arrow">→</strong>
                  </Link>
               </h2>
               <div className="">
                  <div className="mx-auto max-w-7xl">
                     <MarqueeSection />
                  </div>
               </div>
            </FadeIn>
            <style>
               {`
                .hdr .gradient-text {
                    background: linear-gradient(to right in oklch, color(display-p3 1 0 .5), color(display-p3 0 1 1));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    }
                }
                .arrow {
                    transform: rotate(-45deg);
                    display: inline-block;
                }
                `}
            </style>
         </Container>
      </div>
   );
}
