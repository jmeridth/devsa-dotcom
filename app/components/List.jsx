import clsx from 'clsx';

import { Border } from '~/components/Border';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';

export function List({ className, children }) {
   return (
      <FadeInStagger>
         <ul className={clsx('text-base text-neutral-300', className)}>
            {children}
         </ul>
      </FadeInStagger>
   );
}

export function ListItem({ title, children }) {
   return (
      <li className="group mt-10 first:mt-0">
         <FadeIn>
            <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
               {title && (
                  <strong className="font-semibold text-white">{`${title}. `}</strong>
               )}
               {children}
            </Border>
         </FadeIn>
      </li>
   );
}
