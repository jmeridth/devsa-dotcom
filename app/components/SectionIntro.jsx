import clsx from 'clsx';

import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function SectionIntro({
   title,
   children,
   smaller = false,
   invert = false,
   ...props
}) {
   return (
      <Container {...props}>
         <FadeIn className="max-w-2xl">
            <h2>
               <span
                  className={clsx(
                     'font-display block tracking-tight [text-wrap:balance]',
                     smaller
                        ? 'text-2xl font-semibold'
                        : 'text-4xl font-medium sm:text-5xl',
                     invert ? 'text-white' : 'text-neutral-950'
                  )}
               >
                  {title}
               </span>
            </h2>
            {children && (
               <div
                  className={clsx(
                     'mt-6 text-xl',
                     invert ? 'text-neutral-300' : 'text-neutral-500'
                  )}
               >
                  {children}
               </div>
            )}
         </FadeIn>
      </Container>
   );
}
