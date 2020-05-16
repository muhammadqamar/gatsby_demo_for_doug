import React from "react"
import footerlogo from "../../assets/images/topia.svg"
import linkedin from "../../assets/images/social-linked.svg"
import twiiter from "../../assets/images/social-twitter.svg"
import instagram from "../../assets/images/social-insta.svg"
import { Link } from "gatsby"
export default function Footer({ children }) {
  return (
    <div className="footer">
      <div className="content">
        <div className="flex-footer">
          <div className="logos">
            <img src={footerlogo} alt="" />
            <p>C 2020</p>
          </div>
          <div className="links">
            <Link to="">Imprint </Link>
            <Link to="">Privacy </Link>
            <Link to="">Legal Notice </Link>
          </div>
          <div className="social">
            <img src={linkedin} alt="" />
            <img src={twiiter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
