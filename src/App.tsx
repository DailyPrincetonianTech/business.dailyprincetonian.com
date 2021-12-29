import React from "react";
// import { Provider } from "react-redux";

// import { store } from "./state/store";

import "./App.css";
import localAdvertiser from "./data/local";
import campusAdvertiser from "./data/campus";
import { useState, useRef } from "react";
import { AdGroup } from "./types/adGroup";
import Modal from "./modal"
import Advertiser from "./advertiser"
import nationalAdvertiser from "./data/national";

function App(): JSX.Element {
  const [type, setType] = useState("default");
  const [timeoutLen, setTimeoutLen] = useState(0);
  const [modalIsVisible, setVisibility] = useState(false);
  const [modalTitle, setTitle] = useState("");
  const [modalDesc, setDesc] = useState("");

  const campusContainer = useRef(null);
  const localContainer = useRef(null);
  const nationalContainer = useRef(null);
  const recruiterContainer = useRef(null);
  const recruiterText = useRef(null);

  const setModal = (title: string, desc: string) => {
    setVisibility(true);
    setTitle(title);
    setDesc(desc);
  }

  const hideModal = () => {
    setVisibility(false);
  }

  function toggleVisibility(offs: React.RefObject<HTMLElement>[], on: React.RefObject<HTMLElement>) {
    for (const off of offs) {
      for (const elem of off.current.querySelectorAll(".rates--card--container")) {
        elem.classList.remove('animations--visible');
      };
      recruiterText.current.classList.remove('animations--visible');
    }
    setTimeout(() => {
      on.current.style.display = "";
    }, timeoutLen==0 ? 0 : 800);
    
    setTimeout(() => {
      for (const off of offs) {
        off.current.style.display = "none";
      };
      for (const elem of on.current.querySelectorAll(".rates--card--container")) {
        elem.classList.add('animations--visible');
      };
      recruiterText.current.classList.add('animations--visible');
    }, timeoutLen);
    setTimeoutLen(1000);
  }

  return (
    <>
      <Modal hideModal={hideModal} isVisible={modalIsVisible} title={modalTitle} description={modalDesc}/>
      <div className={`rates--select--container ${type=="default" ? "none--selected" : ""}`}>
        <div className="rates--text">
          Please contact <a href="mailto:business@dailyprincetonian.com"
            >business@dailyprincetonian.com</a> for more information on pricing and custom packages.
          <br /><br />
          All digital advertisements can link to your website. Additionally, all
          digital advertisement purchases come with a complementary analytics
          report with key statistics, including impressions (views) and clicks.
        </div>
        <div>I am a</div>
        <select defaultValue="default" className="rates--select" onChange={(e)=>{
          let val = e.target.value;
          if(val=="campus") toggleVisibility([nationalContainer,localContainer,recruiterContainer], campusContainer);
          else if(val=="local") toggleVisibility([nationalContainer,campusContainer,recruiterContainer], localContainer);
          else if(val=="national") toggleVisibility([campusContainer,localContainer,recruiterContainer], nationalContainer);
          else if(val=="recruiter") toggleVisibility([campusContainer,localContainer,nationalContainer], recruiterContainer);
          setType(e.target.value);
        }}>
          <option hidden disabled value="default" className="rates--select--option">
            -- select an option --
          </option>
          <option value="campus" className="rates--select--option">
            Princeton Student or Organization
          </option>
          <option value="local" className="rates--select--option">
            Local Advertiser (Mercer County)
          </option>
          <option value="national" className="rates--select--option">
            National Advertiser
          </option>
          <option value="recruiter" className="rates--select--option">
            Recruiter
          </option>
        </select>
      </div>
      <div ref={recruiterContainer} id="recruiter" style={{display: "none"}} className="rates--container">
        <div ref={recruiterText} className="rates--recruiter--text" id="rates--recruiter--text">
          <h3>Fall Recruiting Calendar</h3>
          <table style={{width: "100%"}}>
            <tr>
              <td style={{textAlign: "right", verticalAlign: "top", width: "135px"}}>
                <b>Aug. 17</b>
              </td>
              <td>
                Fall recruiting begins; full-time and internship positions for
                campus recruiting posted in Handshake will become visible to all
                students.
              </td>
            </tr>
            <tr>
              <td style={{textAlign: "right", verticalAlign: "top", width: "135px"}}>
                <b>Sep. 2</b>
              </td>
              <td>
                Information sessions for full-time and internship positions
                begin.
              </td>
            </tr>
            <tr>
              <td style={{textAlign: "right", verticalAlign: "top", width: "135px"}}>
                <b>Sep. 11</b>
              </td>
              <td>
                Fall HireTigers Career Fair (no other recruiting event to be
                scheduled).
              </td>
            </tr>
            <tr>
              <td style={{textAlign: "right", verticalAlign: "top", width: "135px"}}>
                <b>Sep. 14-17</b>
              </td>
              <td>
                Coffee Chat Week (employers can register through Handshake).
              </td>
            </tr>
            <tr>
              <td style={{textAlign: "right", verticalAlign: "top", width: "135px"}}>
                <b>Sep. 21</b>
              </td>
              <td>
                Campus interviews for full-time and internship positions begin.
              </td>
            </tr>
          </table>
          <h3>Recent Recruitment Advertising</h3>
          We recently held a 1-day advertising campaign for a fall term
          internship on our social media and email platforms: Facebook,
          Instagram, and the newsletter. Our ads yielded 29% of their applicant
          pool.
          <div className="rates--recruiter--row">
            <ul>
              <h4>Facebook</h4>
              <li>1920 people reached</li>
              <li>204 post clicks, including 45 clicks on the link</li>
            </ul>
            <ul>
              <h4>Newsletter</h4>
              <li>Opened by 2,024 users</li>
              <li>Puentes ad generated 10 clicks</li>
            </ul>
            <ul>
              <h4>Instagram</h4>
              <li>Reached 1,440 unique accounts</li>
              <li>Generated 38 profile visits to the Puentes page</li>
              <li>Bookmarked by 24</li>
              <li>Shared by 19</li>
            </ul>
          </div>
          <h3>Packages</h3>
          <div className="rates--recruiter--packages">
            <h4>
              <b>Direct to Student 2 Week Campaign</b>&nbsp;&nbsp;&nbsp;$1999
            </h4>
            <b>20% off</b> 2 weeks of social media &amp; newsletter <br /><br />
            <h4>
              <b>All-Inclusive 1 Week Digital Blast</b>&nbsp;&nbsp;&nbsp;$2339
            </h4>
            <b>25% off</b> Email Newsletter, Website, Social Medias
          </div>
        </div>
      </div>
      <div ref={nationalContainer} id="national" style={{display: "none"}} className="rates--container">
        {nationalAdvertiser.map((adGroup: AdGroup) => (
          <Advertiser setModal={setModal} title={adGroup.title} rates={adGroup.rates}/>
        ))}
      </div>
      <div ref={localContainer} id="local" style={{display: "none"}} className="rates--container">
        {localAdvertiser.map((adGroup: AdGroup) => (
          <Advertiser setModal={setModal} title={adGroup.title} rates={adGroup.rates}/>
        ))}
      </div>
      <div ref={campusContainer} id="campus" style={{display: "none"}} className="rates--container">
        {campusAdvertiser.map((adGroup: AdGroup) => (
          <Advertiser setModal={setModal} title={adGroup.title} rates={adGroup.rates}/>
        ))}
      </div>
    </>
  );
}

export default App;