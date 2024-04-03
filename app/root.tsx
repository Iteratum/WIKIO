import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavigationRoute from "./components/navigation";
import styles from "./tailwind.css"
import { RecoilRoot } from "recoil";

export const meta: MetaFunction = () => {
  return [
    { title: "Wikio" },
    { name: "description", content: "A wiki site" },
  ];
}
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <NavigationRoute />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </RecoilRoot>
  );
}
