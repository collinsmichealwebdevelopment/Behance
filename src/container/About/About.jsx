import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";
import workData from "../../index";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    setAbouts(workData);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Wrap <span>your brand around,</span> Success!!
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            {about.type === "image" ? (
              <img src={about.imgUrl} alt={about.title} />
            ) : (
              <video controls>
                <source src={about.imgUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
