import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Link } from '@remix-run/react';
import qrCode from '~/components/images/qr-code.svg';

function QrCodeBorder(props) {
   return (
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
         <path
            d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
            strokeWidth="2"
            strokeLinecap="round"
         />
      </svg>
   );
}

export function SponsorMask() {
   return (
      <div className="mt-24 bg-neutral-950 sm:mt-32">
         <Container className="pb-16 pt-16">
            <FadeIn>
               <div className="mx-auto flex flex-col items-center justify-center md:flex-row">
                  <div className="text-center md:text-left">
                     {GradientMask()}
                  </div>
                  <div className="mx-auto mt-8 flex flex-col items-center justify-center">
                     <div className="relative flex h-40 w-40 flex-none items-center justify-center">
                        <Link
                           to="https://donate.stripe.com/00g3cq2yM2XsbGU144"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <QrCodeBorder className="absolute inset-0 h-full w-full stroke-neutral-300" />
                           <img
                              src={qrCode}
                              alt="Stripe QR code"
                              className="h-36 w-36 rounded-2xl bg-neutral-100 p-2"
                           />
                        </Link>
                     </div>
                     <div>
                        <p className="mt-6 text-center text-sm font-semibold text-neutral-50">
                           Click QR Code to Donate
                        </p>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </div>
   );
}

function GradientMask() {
   return (
      <Container className="">
         <FadeIn>
            <div className="noise grid grid-cols-1 place-items-center">
               <h3 className="text-7xl font-black sm:text-9xl">
                  A Heartfelt
                  <span className="block">Thank You!</span>
               </h3>
            </div>

            <style>
               {`
                        /* this is def a hack */
                        @layer demo {
                            .noise {
                                --lines: 0.0003px;
                            
                                /*
                                repeating sub pixel radial hard stop lines
                                creates thousands, so small they distort
                                use this distortion as a mask
                                the hard stops are basically on/off lines
                                */

                                mask: repeating-radial-gradient(
                                    circle at center,
                                    #000,
                                    var(--lines),
                                    #000,
                                    0, /* transition hints make code easier to manage */
                                    #0000,
                                    calc(var(--lines) * 2),
                                    #0000 0 /* trailing 0 is part of the hard stop logic */
                                );
                            }
                        }

                        @layer demo.support {
                            .noise {
                                --space:;
                                @supports (background: linear-gradient(in oklch, #000, #000)) {
                                --space: in oklch;
                                }
                                
                                display: grid;
                                gap: 5vmin;
                            
                                /* shared gradient across headlines "fixed" */
                                background: linear-gradient(to bottom right var(--space), deeppink, blue) fixed;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            
                                @media (prefers-color-scheme: light) {
                                    background: linear-gradient(
                                        to bottom var(--space), 
                                        black, neutral
                                    ) fixed;
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                }
                            }
                        }
                    `}
            </style>
         </FadeIn>
      </Container>
   );
}
