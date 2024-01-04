import type { MetaFunction } from "@remix-run/node";
import HandleCarousel from "~/components/carousel";
import NavButton from "~/components/navButton";
import HandleSearchColumn from "~/components/search";

export const meta: MetaFunction = () => {
  return [
    { title: "Wikio" },
    { name: "description", content: "A wiki site" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: "100vw", overflow: "clip", color: "white", }}>
      <HandleCarousel />
      <HandleSearchColumn />
      <NavButton />
    </div>
  );
}
