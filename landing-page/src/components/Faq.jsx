import "./faq.css"
import girl from "../Images/girl.png"
function Faq() {
  return (
    <section className="faq">
      <div className="faqIntro">
        <div className="faqCenter">
          <h1>FAQ Center</h1>
          <p>
            Your questions, our answers. Browse through our <br /> frequently
            answered questions to get more insights into our <br /> services.
          </p>
        </div>
        <div className="faqImg">
          <img src={girl} alt="sitting girl" />
        </div>
      </div>

      <div className="question">
        <h4>What is GeoTracker?</h4>
        <p>+</p>
      </div>
      <div className="question">
        <h4>What is GeoTracker?</h4>
        <p>+</p>
      </div>
      <div className="question">
        <h4>What is GeoTracker?</h4>
        <p>+</p>
      </div>
      <div className="question">
        <h4>What is GeoTracker?</h4>
        <p>+</p>
      </div>
    </section>
  );
}
export default Faq