import type { MetaFunction } from "@remix-run/node";
import "../index.css";
import Header from "~/componentys/header/Header";
import Main from "./main";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <Main />
    </div>
  );
}
