import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>My Career</h2>

        {/* Experience Section */}
        <h3>Experience</h3>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphics Designer & Web Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building clean user experiences and modern digital solutions. Specializing in web development, graphic design, and digital communication with a focus on responsive design and user‑centered approach.
            </p>
          </div>
        </div>

        {/* Volunteer Section */}
        <h3>Volunteer</h3>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BNCC Training</h4>
                <h5>Volunteer Experience</h5>
              </div>
              <h3>COMPLETED</h3>
            </div>
            <p>
              Developed a high degree of discipline, time management, and consistency. Enhanced interpersonal skills through teamwork on various events, functions, and activities. Built confidence in professional communication and public speaking skills under direct supervision.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <h3>Education</h3>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Honours in Finance & Banking</h4>
                <h5>Tejgao College</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              Pursued higher education with a strong focus on analytical and financial concepts, developing problem‑solving skills and attention to detail essential for professional success.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <h5>Uttara Government College</h5>
              </div>
              <h3>2019–21</h3>
            </div>
            <p>
              Completed secondary education with a CGPA of 4.58, establishing a strong academic foundation and cultivating discipline and consistency in learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
