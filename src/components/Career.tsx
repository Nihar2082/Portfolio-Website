import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Simulation Engineer</h4>
                <h5>LS-DYNA / Metal Forming</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Utilized LS-DYNA to optimize metal forming techniques for
              automotive components through detailed simulations including
              deep-drawing and springback analysis, enhancing forming accuracy
              and reducing waste.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Robotics Engineer</h4>
                <h5>ROS / NAO Robot</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed robotics solutions using ROS for planar robot kinematics
              and integrated advanced object recognition with YOLO neural
              networks on the NAO humanoid robot for educational and service
              applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Engineer</h4>
                <h5>3D Modelling & CFD</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on automated 3D model comparison for construction site
              monitoring using photogrammetry and conducting fluid dynamics
              simulations using OpenFOAM and ParaView for industrial
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
