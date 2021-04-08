/*eslint-disable*/
import React, { useEffect, useState } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import FooterItems from "components/Footer/FooterItems.js";
import Parallax from "components/Parallax/Parallax.js";
import ContactForm from "components/ContactForm/ContactForm.js";
import Spinner from 'components/Spinner/Spinner';

import LoanScenario from 'components/Iframe/LoanScenario.js';


import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Acra Lending"
        links={<HeaderLinks dropdownHoverColor="blue" />}
        fixed
        color="white"
      />
      <Parallax image={require("assets/img/contact-bg1.jpg")} filter="sky" small>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaisedContact)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title} style={{ textAlign: "center" }}>File Upload or Loan Scenario</h2>
            <GridContainer>
              <GridItem md={12} sm={12}>
                {/* <p style={{ color: "#3C4858" }}>
                  Some additional text here
                </p> */}
                <LoanScenario />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <FooterItems />
    </div>
  );
}
