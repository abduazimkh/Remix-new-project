import type { MetaFunction } from "@remix-run/node";
import Nav from "~/layouts/nav/Nav";
import "./Header.css";
import BigCard, { Container, LinkBtn } from "~/utils/Utils";
import heroImage from "../../assets/images/hero.jpg"


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Header() {
  return (
    <div className="header__wrapper">
      <Nav />

      <Container>
        <BigCard
          title={"More Time with Your Best Friend."}
          link="/"
          btntext={"shop now"}
          img={heroImage}
          text={"Help your pack stay longer with pet supplements designed to improve their life and longevity."}
        />
      </Container>
    </div>
  );
}
