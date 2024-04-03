import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { useRecoilState } from "recoil";
import HandleCarousel from "~/components/carousel";
import NavButton from "~/components/navButton";
import HandleSearchColumn from "~/components/search";
import HandleSearchDisplay from "~/components/searchDisplay";
import { inputState } from "~/components/store";

export const meta: MetaFunction = () => {
  return [
    { title: "Wikio" },
    { name: "description", content: "A wiki site" },
  ];
};

export default function Index() {
  const [inputstatus] = useRecoilState(inputState)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: "100vw", overflow: "clip", color: "white", }}>
      <HandleCarousel />
      <HandleSearchColumn />
      <NavButton />
      {inputstatus == true ? <HandleSearchDisplay /> : null}
    </div>
  );
}
