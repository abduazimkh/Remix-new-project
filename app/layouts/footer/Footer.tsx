import { Container, LinkBtn } from "~/utils/Utils";
import "./Footer.css";
import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer">
          <div>
            <h3>Staay in the loop</h3>
            <p>Be the first to get longevity tips, exclusive sales announcements, and product news…</p>

            <form>
              <input type="text" placeholder="Email address" />

              <LinkBtn
                text="sign in"
              />
            </form>
          </div>
          <ul>
            <span>About</span>
            <li><Link to="/">Our Story</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
          <ul>
            <span>Products</span>
            <li><Link to="/">Longevity</Link></li>
            <li><Link to="/">Mobility</Link></li>
            <li><Link to="/">Cognition</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;