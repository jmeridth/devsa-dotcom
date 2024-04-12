import { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';
import clsx from 'clsx';
import { Container } from '../Container';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';

export function WavyBackgroundHero() {
   return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
         <FadeIn>
            <WavyBackground className="mx-auto">
               <h1 className="mx-auto lg:text-center">
                  <span className="font-display block text-base font-semibold text-neutral-950">
                     Shaping the identity of tech in San Antonio
                  </span>
                  <span className="font-display mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-800 sm:text-7xl">
                     The Software Developer Hub for San Antonio
                  </span>
               </h1>
               <p className="mx-auto mt-6 max-w-3xl text-balance text-xl text-neutral-600 lg:text-center">
                  <strong>DEVSA</strong> is a educational non-profit
                  organization for the software development and engineer
                  community
               </p>
               <div className="item-center flex lg:justify-center">
                  <Button
                     className="mt-8"
                     href="https://donate.stripe.com/00g3cq2yM2XsbGU144"
                     invert={false}
                  >
                     Donations powered by Stripe
                  </Button>
               </div>
            </WavyBackground>
         </FadeIn>
      </Container>
   );
}

export const WavyBackground = ({
   children,
   className,
   containerClassName,
   colors,
   waveWidth,
   backgroundFill,
   blur = 10,
   speed = 'fast',
   waveOpacity = 0.5,
   ...props
}: {
   children?: any;
   className?: string;
   containerClassName?: string;
   colors?: string[];
   waveWidth?: number;
   backgroundFill?: string;
   blur?: number;
   speed?: 'slow' | 'fast';
   waveOpacity?: number;
   [key: string]: any;
}) => {
   const noise = createNoise3D();
   let w: number,
      h: number,
      nt: number,
      i: number,
      x: number,
      ctx: any,
      canvas: any;
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const getSpeed = () => {
      switch (speed) {
         case 'slow':
            return 0.001;
         case 'fast':
            return 0.002;
         default:
            return 0.001;
      }
   };

   const init = () => {
      canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      nt = 0;
      window.onresize = function () {
         w = ctx.canvas.width = window.innerWidth;
         h = ctx.canvas.height = window.innerHeight;
         ctx.filter = `blur(${blur}px)`;
      };
      render();
   };

   const waveColors = colors ?? [
      '#6610f2',
      '#1DB7BA',
      '#0dcaf0',
      '#ACDB6B',
      '#FACB11',
   ];
   const drawWave = (n: number) => {
      nt += getSpeed();
      for (i = 0; i < n; i++) {
         ctx.beginPath();
         ctx.lineWidth = waveWidth || 50;
         ctx.strokeStyle = waveColors[i % waveColors.length];
         for (x = 0; x < w; x += 5) {
            var y = noise(x / 800, 0.3 * i, nt) * 100;
            ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
         }
         ctx.stroke();
         ctx.closePath();
      }
   };

   let animationId: number;
   const render = () => {
      ctx.fillStyle = backgroundFill || 'white';
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
   };

   useEffect(() => {
      init();
      return () => {
         cancelAnimationFrame(animationId);
      };
   }, []);

   const [isSafari, setIsSafari] = useState(false);
   useEffect(() => {
      // safari support
      setIsSafari(
         typeof window !== 'undefined' &&
            navigator.userAgent.includes('Safari') &&
            !navigator.userAgent.includes('Chrome')
      );
   }, []);

   return (
      <div
         className={clsx(
            'flex flex-col items-center justify-center',
            containerClassName
         )}
      >
         <canvas
            className="absolute inset-0 z-0"
            ref={canvasRef}
            id="canvas"
            style={{
               ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
            }}
         ></canvas>
         <div className={clsx('relative z-10', className)} {...props}>
            {children}
         </div>
      </div>
   );
};
