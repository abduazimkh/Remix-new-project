import type { MetaFunction } from "@remix-run/node";
import "./Utils.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Container({children} : any) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
