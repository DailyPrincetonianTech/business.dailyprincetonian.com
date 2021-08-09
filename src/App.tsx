import React from "react";
// import { Provider } from "react-redux";

// import { store } from "./state/store";

import "./App.css";

enum ColorPremium {
  Small,
  Medium,
  Large,
}

enum Design {
  Graphic,
  Media,
}

type Unit = {
  title: string;
  price: string;
};

type Rate = {
  title: string;
  units: Unit[];
  description: string;
  image_url: string;
  note: string[];
  cpm?: string;
  color_premium?: ColorPremium;
  design?: Design;
};

type Rates = Array<Rate>;

function App(): JSX.Element {
  // return <Provider store={store}>Hello world!</Provider>;
  return <>Hello world!</>;
}

export default App;
