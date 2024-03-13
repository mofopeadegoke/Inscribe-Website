import Navbar from "../components/nav"
import "../styles/home.css";
import Button from "../components/button";
import stickyNote from "../images/note-sticky.svg";
import pencil from "../images/pencil.svg";
import download from "../images/download.svg";
import infinity from "../images/infinity.svg";
import check from "../images/check.svg"
import stepUp from "../images/stepUp.svg";

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
                        <p className="feahead" role="heading" aria-roledescription="heading">Save notes locally</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus nobis repellendus quasi rem, vero excepturi illum ea voluptate quam.</p>
                    </article>
                </article>
            </article>
            <article className="plans">
                <h2>Inscribe Plans</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi illo fugiat qui nisi aliquam sit dolor nihil laborum exercitationem distinctio?</p>
                <article className="plan-details">
                    <article className="freePlan">
                        <article className="priceSection">
                            <p role="heading" aria-roledescription="heading">Inscribe Free</p>
                            <p><span className="lg">Free</span></p>
                            <p><span className="highlight">10</span> Local Saves/mo</p>
                            <p className="row"><img src={infinity} alt="The infinity symbol" /> Online Notes</p>
                            <Button className="inv-sc-btn sc-btn" value="Select"/>
                        </article>
                        <article className="whatsIncluded">
                            <p role="heading" aria-roledescription="heading">WHAT'S INCLUDED: </p>
                            <ul>
                                <li> <img src={check} alt="A green check symbol" />Sticky Notes on any Website</li>
                                <li> <img src={check} alt="A green check symbol" />Speech to Text Features</li>
                                <li> <img src={check} alt="A green check symbol" />Rich Text Features</li>
                            </ul>
                        </article>
                    </article>
                    <article className="premiumPlan">
                        <article className="priceSection">
                            <p role="heading" aria-roledescription="heading">Inscribe Premium</p>
                            <p><span className="lg">$2.99</span>/mo</p>
                            <p className="row"><img src={infinity} alt="The infinity symbol" /> Local Saves</p>
                            <p className="row"><img src={infinity} alt="The infinity symbol" /> Online Notes</p>
                            <Button className="inv-sc-btn sc-btn" value="Select"/>
                        </article>
                        <article className="whatsIncluded">
                            <p role="heading" aria-roledescription="heading">ALL FREE PLUS: </p>
                            <ul>
                                <li> <img src={check} alt="A green check symbol" />Drawing Features</li>
                                <li> <img src={check} alt="A green check symbol" />Save Drawings Locally</li>
                            </ul>
                        </article>
                    </article>
                </article>
            </article>
            <article className="trustedSection">
                <article className="container">
                    <p>Trusted by 1500+ users across Chrome and Edge with 4000+ installs.</p>
                </article>
            </article>
            <article className="howItWorks">
                <img src={stepUp} alt="An illustraions of a person chechong boxes" />
                <article className="content">
                    <h2>How it works</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti voluptatum unde! Debitis, voluptatum sed quod sequi recusandae rerum quia explicabo dolore nulla obcaecati reprehenderit non velit, suscipit doloremque incidunt.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, beatae dicta repellendus suscipit non quo sunt delectus iste quam voluptatem!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, beatae dicta repellendus suscipit non quo sunt delectus iste quam voluptatem!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, beatae dicta repellendus suscipit non quo sunt delectus iste quam voluptatem!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, beatae dicta repellendus suscipit non quo sunt delectus iste quam voluptatem!</li>
                    </ul>
                    <p>For more information <a href="#">Check out our Instagram page</a></p>
                </article>
            </article>
        </>
    )
}