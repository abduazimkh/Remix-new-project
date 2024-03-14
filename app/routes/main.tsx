import type { MetaFunction } from "@remix-run/node";
import Ingredients from "~/componentys/ingredients/Ingredients";
import Mission from "~/componentys/mission/Mission";
import Pets from "~/componentys/pets/Pets";
import Footer from "~/layouts/footer/Footer";
import { Container } from "~/utils/Utils";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Main() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="shop">
        <marquee>More time with your friend</marquee>
      </div>
      <Container>
        <Pets />
      </Container>
      <Ingredients />
      <Container>
        <Mission />
      </Container>
      <div className="shop shop2">
        <marquee> More time with your friend</marquee>
      </div>
      <Footer />
    </div>
  );
}
