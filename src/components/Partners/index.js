import React, { useState } from "react"
import clsx from "clsx"

import seCss from "../../css/section.module.css"

import paCss from "./partners.module.css"
import { logos } from "./logos"

const Slideshow = ({ nbElements }) => {
  const nbPanels = Math.ceil(logos.length / nbElements)
  const panels = Array.from({ length: nbPanels }, (_, index) => index + 1)

  const [index, setIndex] = useState(1)

  const handleClickControl = (index) => {
    setIndex(index)
  }

  return (
    <section className={clsx(seCss["section--slim"])}>
      <div className={paCss.logo__desktop}>
        {logos.map((logo) => (
          <div key={logo.alt} className={paCss.logo__item}>
            <img
              alt={logo.alt}
              height={logo.height || 56}
              src={logo.src}
              width={logo.width || 140}
              style={{ top: logo.offset ?? 0 }}
            />
          </div>
        ))}
      </div>
      <div className={paCss.logo__mobile}>
        {panels.map((i) => {
          const panelLogos = logos.slice((i - 1) * nbElements, i * nbElements)
          const active = i === index ? paCss.logo__mobile_panel_active : ""
          return (
            <div key={i} className={`${paCss.logo__mobile_panel} ${active}`}>
              {panelLogos.map((panelLogo) => (
                <div key={panelLogo.alt} className={paCss.logo__item}>
                  <img
                    alt={panelLogo.alt}
                    height={panelLogo.height}
                    src={panelLogo.src}
                    width={panelLogo.width}
                    style={{ top: panelLogo.offset ?? 0 }}
                  />
                </div>
              ))}
            </div>
          )
        })}
        <div className={paCss.logo__mobile_nav}>
          {panels.map((i) => {
            const active =
              i === index ? paCss.logo__mobile_nav__control_active : ""
            return (
              <div
                key={i}
                className={`${paCss.logo__mobile_nav__control} ${active}`}
                onClick={() => handleClickControl(i)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Slideshow
