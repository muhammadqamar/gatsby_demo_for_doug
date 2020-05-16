import React, { useState, useEffect } from "react"
import logo from "../../../assets/images/topia-logo.svg"
import elements_dots from "../../../assets/images/elements_dots.svg"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import Sliders from "./slider"
import "slick-carousel/slick/slick-theme.css"
import Spread from "./spread.js"
export default function Banner() {
  const [sliderData, setSlider] = useState([])
  //slider settings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  }

  //slider-data

  const slider = [
    "We help non-profits and social businesses to measure & manage their impact by providing them with tools build & designed around their needs.",
    //   "We help non-profits and social businesses to measure & manage their impact by providing them with tools build & designed around their needs.",
    //  "We help impact-driven organizations to measure & manage their social impact by providing them with tools build & designed for their needs.",
  ]

  //set slider data in state
  useEffect(() => {
    setSlider(slider)
  }, [])

  //jsx
  return (
    <div className="Banner">
      <img src={elements_dots} alt="" className="dots" />
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="content">
        <h3>
          <Slider {...settings}>
            {sliderData.map(slide => {
              return <Sliders slide={slide} />
            })}
          </Slider>
        </h3>
        <Spread />
      </div>
    </div>
  )
}
