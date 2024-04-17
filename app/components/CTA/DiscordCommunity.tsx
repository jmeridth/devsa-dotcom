import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Link } from '@remix-run/react';
import { GrayscaleTransitionImage } from '../GrayscaleTransitionImage';

export function DiscordCommunity() {
   return (
      <div className="mt-24 pt-6 sm:mt-32 md:pt-0 lg:mt-40">
         <Container className="mt-16">
            <FadeIn>
               <h2 className="hdr font-display mx-auto mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl lg:text-center">
                  Join our thriving community spaces on{' '}
                  <strong className="gradient-text">Discord</strong>{' '}
                  <strong className="gradient-text arrow">→</strong>
               </h2>
               <div className="mt-16">
                  <div className="mx-auto max-w-7xl">
                     <Link
                        to="https://discord.gg/cvHHzThrEw"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <GrayscaleTransitionImage
                           src="https://res.cloudinary.com/jessebubble/image/upload/v1713324231/discord-community-grid_r1zt0s.svg"
                           alt="DEVSA Discord Grid of community groups"
                        />
                     </Link>
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
