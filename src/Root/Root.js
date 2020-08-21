import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Root.scss";

import Header from "../components/Header/Header";
import StartView from "../views/StartView/StartView";
import AboutView from "../views/AboutView/AboutView";
import MusicView from "../views/MusicView/MusicView";
import PhotoVideoView from "../views/PhotoVideoView/PhotoVideoView";
import DecorationView from "../views/DecorationView/DecorationView";
import ServicesView from "../views/ServicesView/ServicesView";
import RealizationsView from "../views/RealizationsView/RealizationsView";
import ContactView from "../views/ContactView/ContactView";
import Footer from "../components/Footer/Footer";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={StartView} />"
            <Route path="/about" component={AboutView} />"
            <Route path="/music" component={MusicView} />"
            <Route path="/photovideo" component={PhotoVideoView} />"
            <Route path="/decorations" component={DecorationView} />"
            <Route path="/services" component={ServicesView} />"
            <Route path="/realizations" component={RealizationsView} />"
            <Route path="/contact" component={ContactView} />"
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Root;
