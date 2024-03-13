import { Link } from "@remix-run/react";
import "./AnnouncementBAr.css";

const AnnouncementBar = () => {
  return (
    <div className='announcement-bar' >
      <small>FDA NMN Ban : Update on Blog</small>

      <Link to="/" >15% Off Orders Over $100 — 20% Off $200 — 25% off $300 - No Code Needed</Link>
      <small>Always Free Shipping Over $80</small>

    </div>
  )
}

export default AnnouncementBar