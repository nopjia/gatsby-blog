import React from "react";
import {
  FaEnvelope,
  FaFileAlt,
  FaTwitter,
  FaBlogger,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Layout from "../components/Layout";

export default ({ location }) => (
  <Layout location={location}>
    <h1>Contact</h1>
    <div className="layout23">
      <div>
        <h2>other ways to connect</h2>
        <ul className="contact">
          <li>
            <a href="mailto:nop@iamnop.com">
              <FaEnvelope />
              nop@iamnop.com
            </a>
          </li>
          <li>
            <a href="http://twitter.com/nopjia">
              <FaTwitter />
              twitter.com/nopjia
            </a>
          </li>
          <li>
            <a href="http://github.com/nopjia/">
              <FaGithub />
              github.com/nopjia
            </a>
          </li>
          <li>
            <a href="http://nopjia.blogspot.com/">
              <FaBlogger />
              nopjia.blogspot.com
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/nopjia">
              <FaLinkedin />
              linkedin.com/in/nopjia
            </a>
          </li>
          <li>
            <a href="/jiarathanakul.pdf">
              <FaFileAlt />
              download resume
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>see also</h2>
        <p>
          <a href="http://old.iamnop.com/">old website</a>
        </p>
      </div>
    </div>
  </Layout>
);
