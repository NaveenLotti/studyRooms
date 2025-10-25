import DarkVeil from '../ReactBits/DarkVeil.jsx';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
    
      <div className="darkveil-bg">
              <DarkVeil>
              </DarkVeil>
            </div>

      <section className="about-hero">
        <div className="hero-content">
          <h1>About <span>StudySphere</span></h1>
          <p>
            StudySphere is a collaborative online study platform that allows you to create or join virtual study rooms, stay productive, and learn together in real-time.
          </p>
        </div>

        <div className="hero-image">
          <img src="/Studyroom.jpg" alt="Study Together" />
        </div>
      </section>

        <div className="float-card mission">
          <h2>Our Mission</h2>
          <p>
            To empower students to learn together, stay focused, and achieve academic success in a collaborative and engaging environment.
          </p>
        </div>

        <div className="float-card vision">
          <h2>Our Vision</h2>
          <p>
            To create a world where learning is accessible, interactive, and community-driven, breaking distance barriers for students globally.
          </p>
        </div>
    </div>
  );
}

export default AboutUs;
