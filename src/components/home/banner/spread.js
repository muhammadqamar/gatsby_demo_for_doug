import React from "react"
import elementlinered from "../../../assets/images/element_line-red.svg"
import elementlinewhite from "../../../assets/images/element_line-white.svg"
import elementsquarered from "../../../assets/images/element_square-red.svg"
import elementcrosswhite from "../../../assets/images/element_cross-white.svg"
import elementcirclered from "../../../assets/images/element_circle-red.svg"
import elementsquarewhite from "../../../assets/images/element_square-white.svg"
import elementtrianglewhite from "../../../assets/images/element_triangle-white.svg"
import element_3lines from "../../../assets/images/element_3lines.svg"
import redtriangle from "../../../assets/images/redtriangle.svg"
export default function Spread() {
  return (
    <>
      <img src={elementlinered} alt="" className="spred1" />
      <img src={elementsquarered} alt="" className="spred2" />
      <img src={elementcrosswhite} alt="" className="spred3" />

      <img src={elementlinewhite} alt="" className="spred4" />
      <img src={elementcirclered} alt="" className="spred5" />
      <img src={elementsquarewhite} alt="" className="spred6" />

      <img src={elementtrianglewhite} alt="" className="spred7" />
      <img src={redtriangle} alt="" className="spred8" />

      <img src={element_3lines} alt="" className="spred9" />
    </>
  )
}
