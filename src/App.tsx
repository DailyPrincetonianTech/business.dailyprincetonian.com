import React from "react";
// import { Provider } from "react-redux";

// import { store } from "./state/store";

import "./App.css";
import campusAdvertiser from "./data/campus";
import localAdvertiser from "./data/local";
import nationalAdvertiser from "./data/national";
import recruiterAdvertiser from "./data/recruiter";
import { AdGroup } from "./types/adGroup";
import { Advertiser } from "./types/advertiser";
import { Rate } from "./types/rate";
import { Unit } from "./types/unit";

export default function App() {

  // return <Provider store={store}>Hello world!</Provider>;
  return (
    <div>
      {campusAdvertiser.map((adGroup: AdGroup, i) => (
        <div>
          {adGroup.title} {adGroup.rates.map((rate: Rate, i) => (
            <div>
              {rate.title} {rate.units.map((unit: Unit, i) => (
                <div>{unit.title} {unit.price}</div>
              ))}
            </div>
          ))}
          <br></br>
        </div>
      ))}
      <br></br>
      <div>
      {localAdvertiser.map((adGroup: AdGroup, i) => (
        <div>
          {adGroup.title} {adGroup.rates.map((rate: Rate, i) => (
            <div>
              {rate.title} {rate.units.map((unit: Unit, i) => (
                <div>{unit.title} {unit.price}</div>
              ))}
            </div>
          ))}
          <br></br>
        </div>
      ))}
      </div>
      <br></br>
      <div>
      {nationalAdvertiser.map((adGroup: AdGroup, i) => (
        <div>
          {adGroup.title} {adGroup.rates.map((rate: Rate, i) => (
            <div>
              {rate.title} {rate.units.map((unit: Unit, i) => (
                <div>{unit.title} {unit.price}</div>
              ))}
            </div>
          ))}
          <br></br>
        </div>
      ))}
      </div>
      <br></br>
      <div>
      {recruiterAdvertiser.map((adGroup: AdGroup, i) => (
        <div>
          {adGroup.title} {adGroup.rates.map((rate: Rate, i) => (
            <div>
              {rate.title} {rate.units.map((unit: Unit, i) => (
                <div>{unit.title} {unit.price}</div>
              ))}
            </div>
          ))}
          <br></br>
        </div>
      ))}
      </div>
    </div>
  );
}
