import type { MetaFunction } from "@remix-run/node";
import "./Utils.css";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function Container({ children }: any) {
  return (
    <div className="container">
      {children}
    </div>
  );
}


export function LinkBtn({ link, type, click, icon, text }: any) {
  return (
    <Link to={link} className="link-btn" >{icon} {text}</Link>
  )
}

export function Card({ title, img, text, desc, btntext }: any) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {/* <img src={img} alt="image" /> */}
      <div>
        {img}
      </div>
      <p>{text}:</p>
      <strong>{desc}</strong>
      <LinkBtn
        text={btntext}
      />
    </div>
  )
}


export default function BigCard({ img, title, text, btntext, link}: any){
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>{title}</h1>
        <p>{text}</p>
        <LinkBtn
          link={link}
          text={btntext}
        />
      </div>
      <div className="hero-img">
        <img src={img} alt="image data" />
      </div>
    </div>
  )
}