import Navbar from "../components/nav";
import "../styles/home.css";
import "../styles/responsive.css";
import { useEffect, useState } from "react";
import Button from "../components/button";
import stickyNote from "../images/note-sticky.svg";
import pencil from "../images/pencil.svg";
import download from "../images/download.svg";
import infinity from "../images/infinity.svg";
import check from "../images/check.svg";
import completed from "../images/prjcom.svg";
import Logo from "../images/logoNoBgNPad.png";
import logoWhite from "../images/InscribeLogoNoBg.png";
import facebook from "../images/facebookGray.svg";
import instagram from "../images/instagramGray.svg";
import xTwitter from "../images/xGray.svg";
// Importing Animate on Scroll
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [browserLink, setBrowserLink] = useState("unknown");

  useEffect(() => {
    let link,
      userAgent = navigator.userAgent;
    if (
      userAgent.indexOf("Edge") !== -1 ||
      userAgent.indexOf("MSIE") !== -1 ||
      userAgent.indexOf("Trident/") !== -1 ||
      userAgent.indexOf("Edg") !== -1
    ) {
      link =
        "https://microsoftedge.microsoft.com/addons/detail/inscribe/gcobiohplbeljjficipnjpdbpkldkiih";
    } else {
      link =
        "https://chromewebstore.google.com/detail/inscribe/panlmlmoepjbhjdbhpdpgagehojejoio";
    }
    setBrowserLink(link);
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar url={browserLink} />
      <section className="mb">
        <article className="introSection" id="home">
          <article className="content">
            <h1 data-aos="fade-down" className="main-txt text_invert">
              The browser extension for anyone
            </h1>
            <p data-aos="fade-up">
              Unleash your creativity with Inscribe, the note-taking extension.{" "}
              <br />
              <span>Take your productivity to the next level.</span>
            </p>
            <article data-aos="fade-left">
              <Button
                className="sc-btn inv-sc-btn"
                value="Get Started"
                url={browserLink}
              />
            </article>
            <article className="psSection" data-aos="fade-up">
              <b>
                Effortlessly jot down ideas, scribble and draw with accessible
                sticker notes
              </b>
              <p>that pop up on your screen.</p>
            </article>
          </article>
        </article>
        <article className="features" id="features">
          <h2>Features</h2>
          <article className="featuresContainer">
            <article
              className="feature"
              data-aos={window.innerWidth <= 1000 ? "fade-right" : "fade-up"}
            >
              <img src={stickyNote} alt="A sticky note icon" />
              <span className="feahead">Sticky Notes</span>
              <p>
                Effortless capture thoughts on this versatile digital sticky
                note- pops up on your laptop, customizable colours and
                conveniently rests on either side.
              </p>
            </article>
            <article
              className="feature"
              data-aos={window.innerWidth <= 1000 ? "fade-left" : "fade-up"}
            >
              <img src={pencil} alt="A pencil icon" />
              <p className="feahead">Drawing features</p>
              <p>
                Our drawing feature allows you to scribble and sketch your ideas
                while browsing. Customize your strokes with adjustable fonts and
                fun colours that make working fun!
              </p>
            </article>
            <article
              className="feature"
              data-aos={window.innerWidth <= 1000 ? "fade-right" : "fade-up"}
            >
              <img src={download} alt="A download icon" />
              <p
                className="feahead"
                role="heading"
                aria-roledescription="heading"
              >
                Save notes locally
              </p>
              <p>
                This feature offers excellent accessibility by enabling you to
                keep your notes and other vital data locally on your computer.
              </p>
            </article>
          </article>
        </article>
      </section>
      <article className="plans" data-aos="fade-up" id="plans">
        <h2>Inscribe Plans</h2>
        <p>Choose a plan that best suits your needs! </p>
        <article className="plan-details">
          <article
            className="freePlan"
            data-aos={window.innerWidth <= 1000 ? "fade-up" : "fade-right"}
          >
            <article className="priceSection">
              <p role="heading" aria-roledescription="heading">
                Inscribe Free
              </p>
              <p>
                <span className="lg">Free</span>
              </p>
              <p>
                <span className="highlight">10</span> Local Saves/mo
              </p>
              <p className="row">
                <img src={infinity} alt="The infinity symbol" /> Online Notes
              </p>
            </article>
            <article className="whatsIncluded">
              <p role="heading" aria-roledescription="heading">
                WHAT'S INCLUDED:{" "}
              </p>
              <ul>
                <li>
                  {" "}
                  <img src={check} alt="A green check symbol" />
                  Sticky Notes on any Website
                </li>
                <li>
                  {" "}
                  <img src={check} alt="A green check symbol" />
                  Speech to Text Features
                </li>
                <li>
                  {" "}
                  <img src={check} alt="A green check symbol" />
                  Rich Text Features
                </li>
              </ul>
            </article>
          </article>
          <article
            className="premiumPlan"
            data-aos={window.innerWidth <= 1000 ? "fade-up" : "fade-left"}
          >
            <article className="priceSection">
              <p role="heading" aria-roledescription="heading">
                Inscribe Premium
              </p>
              <p>
                <span className="lg">$2.99</span>/mo
              </p>
              <p className="row">
                <img src={infinity} alt="The infinity symbol" /> Local Saves
              </p>
              <p className="row">
                <img src={infinity} alt="The infinity symbol" /> Online Notes
              </p>
            </article>
            <article className="whatsIncluded">
              <p role="heading" aria-roledescription="heading">
                ALL FREE PLUS:{" "}
              </p>
              <ul>
                <li>
                  {" "}
                  <img src={check} alt="A green check symbol" />
                  Drawing Features
                </li>
                <li>
                  {" "}
                  <img src={check} alt="A green check symbol" />
                  Save Drawings Locally
                </li>
              </ul>
            </article>
          </article>
        </article>
      </article>
      <article className="trustedSection" data-aos="flip-left">
        <article className="container">
          <p>
            Trusted by 1500+ users across Chrome and Edge with 4000+ installs.
          </p>
        </article>
      </article>
      <section className="mb">
        <article className="howItWorks" id="how">
          <img
            src={completed}
            alt="An illustraions of a person chechong boxes"
            data-aos="fade-right"
          />
          <article className="content" data-aos="fade-left">
            <h2>How it works</h2>
            <ul>
              <li>Open your browser (Microsoft Edge or Chrome).</li>
              <li>Search for the Inscribe extension </li>
              <li>
                Download the extension and add to your extension shortcut.
              </li>
              <li> To use it, click on the extension icon and enjoy!</li>
              <li>
                Also add sticky notes to any website, rightclick and click the
                "Add an Inscribe Sticky Note here" option.
              </li>
              <li>
                The sticky note now pops up at the upper right side of your
                computer (it can move around to your desired position).
              </li>
              <li>
                The sticky note can also be expanded to accommodate your needs,
                it is done by clicking the clicking and holding on the bottom
                right corner.
              </li>
            </ul>
            <p>
              You can now browse and take note effortlessly and save your
              document locally. To activate the drawing or scribble feature, you
              can subscribe to our premium plan which is only $2.99 a month!
              <br />
              <br />
              For more information{" "}
              <a href="https://www.instagram.com/inscribe.ext/" target="_blank">
                Check out our Instagram page
              </a>
            </p>
          </article>
        </article>
        <article className="helpSection" data-aos="fade-up" id="help">
          <article className="socialLinks">
            <img src={Logo} alt="Inscribe Logo" />
            <h2>
              Unleash your creativity with Inscribe. Take your productivity to
              the next level.
            </h2>
            <article className="row">
              <a
                href="https://www.facebook.com/profile.php?id=61556646921708"
                target="_blank"
              >
                <img
                  src={facebook}
                  alt="The gray version of the facebook icon"
                />
              </a>
              <a href="https://twitter.com/inscribeExt" target="_blank">
                <img
                  src={xTwitter}
                  alt="The gray version of the X(Twitter) icon"
                />
              </a>
              <a href="https://www.instagram.com/inscribe.ext/" target="_blank">
                <img
                  src={instagram}
                  alt="The gray version of the instagram icon"
                />
              </a>
            </article>
          </article>
          <article className="webLinks">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#plans">Plans</a>
              </li>
            </ul>
          </article>
          <article className="contactUs">
            <h3>Contact Us</h3>
            <p>
              For further inquiries reach out to us on our socials or email us
              at inscribeext@gmail{" "}
            </p>
          </article>
        </article>
      </section>
      <footer className="ft">
        <p>&copy; 2024 Inscribe inc.</p>
        <div className="left">
          <a href="https://shorturl.at/kpwx7" target="_blank">
            Privacy Policy
          </a>
          <Button
            className="sc-btn nrm-sc-btn"
            value="Get Started"
            url={browserLink}
          />
        </div>
      </footer>
    </>
  );
}
