import Navbar from "../components/nav"
import "../styles/home.css";
import Button from "../components/button";
import stickyNote from "../images/note-sticky.svg";
import pencil from "../images/pencil.svg";
import download from "../images/download.svg";

export default function Home() {
    return (
        <>
            <Navbar />
            <article className="introSection">
                <article className="content">
                    <h1>The form solution for any developer</h1>
                    <p>Use your own frontend code. Submit to our API. We'll handle the rest.</p>
                    <Button className="sc-btn inv-sc-btn" value="Get Started"/>
                    <article className="psSection">
                        <b>Formspree forms can perfectly match your website</b>
                        <p>by inheriting your website's CSS</p>
                    </article>
                </article>
            </article>
            <article className="features">
                <h2>Features</h2>
                <article className="featuresContainer">
                    <article className="feature">
                        <img src={stickyNote} alt="A sticky note icon" />
                        <p className="feahead">Sticky Notes</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus nobis repellendus quasi rem, vero excepturi illum ea voluptate quam.</p>
                    </article>
                    <article className="feature">
                        <img src={pencil} alt="A pencil icon" />
                        <p className="feahead">Drawing fetures</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus nobis repellendus quasi rem, vero excepturi illum ea voluptate quam.</p>
                    </article>
                    <article className="feature">
                        <img src={download} alt="A download icon" />
                        <p className="feahead">Save notes locally</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus nobis repellendus quasi rem, vero excepturi illum ea voluptate quam.</p>
                    </article>
                </article>
            </article>
        </>
    )
}