import type { MetaFunction } from "@remix-run/node";
// import { Link } from "@remix-run/react";
import "./Nav.css";
import { Container, LinkBtn } from "~/utils/Utils";
import AnnouncementBar from "../anouncement-bar/AnnouncementBar";
import logo from "../../assets/images/staay-logo.png";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Nav() {
  return (
    <>
      <AnnouncementBar />
      <Container>
        <nav style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
          <img src={logo} alt="logo" />

          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">products</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>

          <div>
            <Link to="/">Cart(0)</Link>
            {/* <Link to="/">Start Free Trial</Link> */}
            <LinkBtn
              link="/"
              text="Shop now"
            />
          </div>
        </nav>
      </Container>
    </>
  );
}
