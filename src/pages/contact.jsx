import React from "react";
import Layout from "../components/Layout";

export default ({ location }) => (
  <Layout location={location}>
    <h1>Contact</h1>
    <h2>other ways to connect</h2>
    <ul className="contact">
      <li>
        <a href="mailto:nop@iamnop.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <path
              id="email-icon"
              d="M170.544,239.052L50,146.454v213.142L170.544,239.052z M460.928,103.407H51.416l204.593,157.162   L460.928,103.407z M313.355,260.696l-57.364,43.994l-57.454-44.135L50.5,408.593h410.751L313.355,260.696z M341.367,239.212   L462,359.845V146.693L341.367,239.212z"
            />
          </svg>
          nop@iamnop.com
        </a>
      </li>
      <li>
        <a href="http://twitter.com/nopjia">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <path
              id="twitter-icon"
              d="M462,128.223c-15.158,6.724-31.449,11.269-48.547,13.31c17.449-10.461,30.854-27.025,37.164-46.764   c-16.333,9.687-34.422,16.721-53.676,20.511c-15.418-16.428-37.386-26.691-61.698-26.691c-54.56,0-94.668,50.916-82.337,103.787   c-70.25-3.524-132.534-37.177-174.223-88.314c-22.142,37.983-11.485,87.691,26.158,112.85c-13.854-0.438-26.891-4.241-38.285-10.574   c-0.917,39.162,27.146,75.781,67.795,83.949c-11.896,3.237-24.926,3.978-38.17,1.447c10.754,33.58,41.972,58.018,78.96,58.699   C139.604,378.282,94.846,390.721,50,385.436c37.406,23.982,81.837,37.977,129.571,37.977c156.932,0,245.595-132.551,240.251-251.435   C436.339,160.061,450.668,145.174,462,128.223z"
            />
          </svg>
          twitter.com/nopjia
        </a>
      </li>
      <li>
        <a href="http://nopjia.blogspot.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="blogger-square-rounded-icon"
              d="M319.613,302.639c0,8.539-6.922,15.461-15.459,15.461h-94.379   c-8.539,0-15.459-6.922-15.459-15.461c0-8.535,6.92-15.457,15.459-15.457h94.379C312.691,287.182,319.613,294.104,319.613,302.639z    M209.775,223.751h47.17c8.537,0,15.459-6.921,15.459-15.458c0-8.538-6.922-15.459-15.459-15.459h-47.17   c-8.539,0-15.459,6.921-15.459,15.459C194.316,216.83,201.236,223.751,209.775,223.751z M461.945,100v312c0,27.614-22.386,50-50,50   h-312c-27.614,0-50-22.386-50-50V100c0-27.614,22.386-50,50-50h312C439.56,50,461.945,72.386,461.945,100z M386.471,236.81   c0-7.065-5.727-12.793-12.791-12.793h-21.055c-7.064,0-12.791-5.728-12.791-12.793v-5.597c0-43.569-35.32-78.888-78.891-78.888   h-54.635c-43.57,0-78.889,35.319-78.889,78.888v100.744c0,43.568,35.318,78.89,78.889,78.89h101.273   c43.572,0,78.889-35.321,78.889-78.89V236.81z"
            />
          </svg>
          nopjia.blogspot.com
        </a>
      </li>
      <li>
        <a href="http://github.com/nopjia/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <path
              id="github-icon"
              d="M256,55.083c-113.764,0-206,92.237-206,206  c0,91.013,59.025,168.246,140.887,195.472c10.293,1.911,13.613-4.459,13.613-9.908v-38.356C147.199,420.764,135.262,384,135.262,384  c-9.354-23.822-22.865-30.159-22.865-30.159c-18.693-12.774,1.408-12.523,1.408-12.523c20.688,1.459,31.584,21.24,31.584,21.24  c18.373,31.483,48.18,22.381,59.949,17.117c1.844-13.312,7.174-22.397,13.076-27.544c-45.768-5.197-93.848-22.867-93.848-101.81  c0-22.498,8.047-40.872,21.225-55.289c-2.146-5.197-9.188-26.152,1.979-54.518c0,0,17.301-5.532,56.662,21.123  c16.445-4.56,34.066-6.856,51.568-6.94c17.502,0.084,35.154,2.381,51.6,6.94c39.33-26.655,56.596-21.123,56.596-21.123  c11.217,28.365,4.158,49.32,2.029,54.518c13.211,14.417,21.207,32.791,21.207,55.289c0,79.127-48.197,96.545-94.064,101.642  c7.375,6.388,14.133,18.943,14.133,38.155c0,27.561,0,49.757,0,56.529c0,5.482,3.301,11.903,13.746,9.892  C403.057,429.264,462,352.08,462,261.084C462,147.321,369.762,55.083,256,55.083z"
            />
          </svg>
          github.com/nopjia
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/nopjia">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="linkedin-square-rounded-icon"
              d="M411.945,50h-312c-27.614,0-50,22.386-50,50v312c0,27.614,22.386,50,50,50h312   c27.614,0,50-22.386,50-50V100C461.945,72.386,439.56,50,411.945,50z M180.996,392.99h-56.537V210.336h56.537V392.99z    M152.457,186.417c-18.465,0-33.432-15.09-33.432-33.703c0-18.614,14.967-33.704,33.432-33.704c18.463,0,33.432,15.09,33.432,33.704   C185.889,171.327,170.92,186.417,152.457,186.417z M392.865,392.99h-56.262c0,0,0-69.582,0-95.881   c0-26.296-9.988-40.974-30.781-40.974c-22.629,0-34.453,15.289-34.453,40.974c0,28.133,0,95.881,0,95.881h-54.223V210.336h54.223   v24.599c0,0,16.309-30.171,55.041-30.171s66.455,23.648,66.455,72.572C392.865,326.262,392.865,392.99,392.865,392.99z"
            />
          </svg>
          linkedin.com/in/nopjia
        </a>
      </li>
      <li>
        <a href="jiarathanakul.pdf">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="text-file-icon"
              d="M287.818,185.781V50H88.317v412h335.365V185.781H287.818z M256,391.312h-97.495v-30H256V391.312z    M353.495,335.896h-194.99v-30h194.99V335.896z M353.495,280.562h-194.99v-30h194.99V280.562z M423.298,150.795H322.805V50.302   L423.298,150.795z"
            />
          </svg>
          download resume
        </a>
      </li>
    </ul>
  </Layout>
);
