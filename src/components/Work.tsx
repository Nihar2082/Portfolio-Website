import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Metal Forming Simulation</h4>
                  <p>Simulation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>LS-DYNA, Adaptive Meshing, Deep-Drawing, Springback Analysis</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Metal Forming Simulation" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Planar Robot Kinematics</h4>
                  <p>Robotics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>ROS, Python, Forward Kinematics, 3-DOF Planar Robot</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Planar Robot Kinematics" link="https://github.com/Nihar2082" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>NAO Robot Object Recognition</h4>
                  <p>AI & Robotics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>YOLO, Neural Networks, QiChat, NAO Robot, Python</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="NAO Robot Object Recognition" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Automated 3D Model Comparison</h4>
                  <p>3D Modelling</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Meshroom, CloudCompare, Blender, Photogrammetry, FFmpeg</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="3D Model Comparison" link="https://github.com/Nihar2082" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Fluid Dynamics Simulation</h4>
                  <p>CFD</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>OpenFOAM, ParaView, cfMesh, Pipe Flow Analysis</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Fluid Dynamics Simulation" link="https://github.com/Nihar2082" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
