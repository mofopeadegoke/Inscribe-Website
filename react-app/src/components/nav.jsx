import Logo from "../images/logoNoBgNPad.png";
import "../styles/nav.css";
import "../styles/responsive.css";
import Button from "./button";
import bars from "../images/bars.svg";
import { useEffect } from "react";
export default function Navbar(props) {
  useEffect(() => {
    const desktopEls = document.querySelectorAll(".onDesktop");
    const mobileEls = document.querySelectorAll(".onMobile");
    const barEl = document.querySelector(".bar");
    const mobileNavEl = document.querySelector("div.links");
    let isMobNav = false;
    if (window.innerWidth <= 1000) {
      desktopEls.forEach((el) => {
        el.style.display = "none";
      });
      mobileEls.forEach((el) => {
        el.style.display = "block";
      });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1000) {
        desktopEls.forEach((el) => {
          el.style.display = "none";
        });
        mobileEls.forEach((el) => {
          el.style.display = "block";
        });
      } else {
        desktopEls.forEach((el) => {
          el.style.display = "block";
        });
        mobileEls.forEach((el) => {
          el.style.display = "none";
        });
      }
    });
    barEl.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      mobileNavEl.classList.toggle("show");
    });
  }, []);
  return (
    <>
      <nav className="navbar">
        <ul className="left-side">
          <li className="imgLi">
            <img
              src={Logo}
              alt="The color-inverted form of the Inscribe Logo"
            />{" "}
            <span>Inscribe</span>
          </li>
          <li className="onDesktop">
            <a href="#home">Home</a>
          </li>
          <li className="onDesktop">
            <a href="#plans">Plans</a>
          </li>
          <li className="onDesktop">
            <a href="#features">Features</a>
          </li>
        </ul>
        <ul className="right-side">
          <li className="onDesktop">
            <a href="#help">Help</a>
          </li>
          <li className="onDesktop">
            <Button
              className="sc-btn inv-sc-btn"
              value="Get Started"
              url={props.url}
            />
          </li>
          <img
            src={bars}
            alt="Three black horizontal bars"
            className="onMobile bar"
          />
        </ul>
      </nav>
      <div className="links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#plans">Plans</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
          <li>
            <a href={props.url}>Get Started</a>
          </li>
        </ul>
      </div>
    </>
  );
}
