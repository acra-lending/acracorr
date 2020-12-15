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
import Footer from "components/Footer/Footer.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function FooterItems() {

  const classes = useStyles();

  return (
    <div>
      <Footer
        content={
          <div>
            <div className={classes.center}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#"
                    className={classes.block}
                  >
                    Company Information
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#"
                    className={classes.block}
                  >
                    Terms of Use
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#"
                    className={classes.block}
                  >
                    Privacy Policy
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#"
                    className={classes.block}
                  >
                    CCPA
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#"
                    className={classes.block}
                  >
                    State Licensing Information
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.center}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                <img 
                    src={require("assets/img/equal-lenders-logo.png")}
                    className="footer-logo"
                  />
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <p>&copy; {1900 + new Date().getYear()} Acra Lending.{" "}
                    All rights reserved. NMLS ID # 144549
                    <a 
                    href="https://nmlsconsumeraccess.org/"
                  >
                  <img 
                    src={require("assets/img/nmls-logo.png")}
                    className="footer-logo"
                  />
                  </a>
                  </p>

                </ListItem>
              </List>
            </div>
          </div>
        }
      />
    </div>
  );
}
