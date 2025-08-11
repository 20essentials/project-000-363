import React, { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { css, globalCss } from "@pandacss/react"

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    WebkitTapHighlightColor: "transparent",
  },
  "*, *::after, *::before": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  html: {
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
  },
  body: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    backgroundImage: "linear-gradient(to bottom, var(--clr), var(--clr2))",
    overflow: "hidden",
    viewTransitionName: "circle",
    "--clr": "#192f5f",
    "--clr2": "#010207",
  },
  "@keyframes circleFromCorner": {
    "0%": {
      clipPath: "circle(0% at 0% 0%)",
    },
    "100%": {
      clipPath: "circle(150% at 0% 0%)",
    },
  },
  "::view-transition-old(circle)": {
    animation: "circleFromCorner 0.5s ease reverse forwards",
  },
  "::view-transition-new(circle)": {
    animation: "circleFromCorner 0.5s ease forwards",
  },
  "@view-transition": {
    navigation: "auto",
  },
})

const sectionStyle = css({
  bgImage: "var(--bg)",
  bgSize: "cover",
  bgPosition: "center",
  pos: "fixed",
  w: "100%",
  h: "100%",
  inset: 0,
  display: "flex",
  _before: {
    content: "''",
    display: "block",
    w: "5vmax",
    h: "5vmax",
    pos: "absolute",
    top: "50%",
    transform: "translateY(-50%) rotate(-90deg)",
    pointerEvents: "none",
    bgImage: "url('assets/arrow.png')",
    bgSize: "cover",
    bgPosition: "center",
    bgBlendMode: "multiply",
    filter: "invert(1)",
    left: "2vmax",
    transformOrigin: "left center",
    transform: "translateY(-50%) rotate(90deg) scaleX(-1)",
  },
  _after: {
    content: "''",
    display: "block",
    w: "5vmax",
    h: "5vmax",
    pos: "absolute",
    top: "50%",
    transform: "translateY(-50%) rotate(-90deg)",
    pointerEvents: "none",
    bgImage: "url('assets/arrow.png')",
    bgSize: "cover",
    bgPosition: "center",
    bgBlendMode: "multiply",
    filter: "invert(1)",
    right: "2vmax",
  },
  a: {
    w: "50%",
    h: "100%",
    display: "block",
    bgColor: "transparent",
  },
})

function App() {
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <section className={sectionStyle} style={{ "--bg": "url(assets/img-1.avif)" }}>
      <a href="index7.html" />
      <a href="index2.html" />
    </section>
  )
}

const rootDiv = document.createElement("div")
document.body.appendChild(rootDiv)

createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>
)
