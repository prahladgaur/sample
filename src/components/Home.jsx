import Navbar from "./Navbar"
import aboutus from "../assets/aboutus.jpg";
import hero from "../assets/hero.jpg";
import work from "../assets/work.jpg";

function Home() {
  return (
   <>
        <Navbar/>
        <section id="hero" className="hero">
            <div className="container">
                <h2>Welcome to Our Website</h2>
                <p>This is the hero section</p>
                <img src={hero}></img>
            </div>
        </section>

        <section id="about" className="about">
            <div className="container">
                <h2>About Us</h2>
                <p>This is the about us section</p>
                <img src={aboutus}></img>
            </div>
        </section>

        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <p>This is the projects section</p>
            </div>
        </section>

        <section id="work" className="work">
            <div className="container">
                <h2>Our Work</h2>
                <p>This is our work section</p>
                <img src={work}></img>
            </div>
        </section>

        <footer id="contact" className="footer">
            <div className="container">
                <h2>Contact Us</h2>
                <p>This is the contact section</p>
            </div>
        </footer>

    </>
  )
}

export default Home
