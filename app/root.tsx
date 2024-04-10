import type { LinksFunction } from '@remix-run/node';
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { RootLayout } from './RootLayout';

export const links: LinksFunction = () => [
   { rel: 'stylesheet', href: stylesheet },
   { rel: 'icon', href: '/favicon.ico' },
];

export default function App() {
   return (
      <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <title>
               DEVSA is a educational non-profit organization for the software
               development and engineer community
            </title>
            <Meta />
            <Links />
         </head>
         <body className="flex min-h-full flex-col">
            <RootLayout>
               <Outlet />
               <ScrollRestoration />
               <Scripts />
               <LiveReload />
            </RootLayout>
         </body>
      </html>
   );
}
