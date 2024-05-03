import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Logo } from '~/components/images/Logo';
import { SocialMedia } from '~/components/SocialMedia';

export function Footer() {
   return (
      <Container as="footer" className="mt-24 w-full">
         <FadeIn>
            <div className="mb-20 flex flex-col-reverse items-center justify-between gap-16 border-t border-neutral-950/10 pt-12 md:flex-row md:gap-0">
               <Link to="/" aria-label="Home">
                  <Logo className="h-10 w-auto" />
               </Link>
               <SocialMedia />
            </div>
         </FadeIn>
      </Container>
   );
}
