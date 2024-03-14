import "./Mission.css";
import BigCard from "~/utils/Utils";
import img from "../../assets/images/goodfriend_hero.webp";

const Mission = () => {
  return (
    <div className="mission-wrapper">
      <BigCard
        title={"Our Mission is to give you more time for the important things"}
        link="/"
        btntext={"READ MORE ABOUT CHRISTI'S STORY"}
        img={img}
        text={"That means belly scratches, long walks, playing fetch, and so much more. It’s a big goal, but one our founder Christi is passionate about."}
      />
    </div>
  )
}

export default Mission;