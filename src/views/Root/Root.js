import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Root.css";

import Header from "../../components/Header/Header";
import StartView from "../StartView/StartView";
import AboutView from "../AboutView/AboutView";
import MusicView from "../MusicView/MusicView";
import PhotoVideoView from "../PhotoVideoView/PhotoVideoView";
import DecorationView from "../DecorationView/DecorationView";
import ServicesView from "../ServicesView/ServicesView";
import RealizationsView from "../RealizationsView/RealizationsView";
import ContactView from "../ContactView/ContactView";
import Footer from "../../components/Footer/Footer";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
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
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Root;
