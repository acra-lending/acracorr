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
import FooterItems from "components/Footer/FooterItems.js";
import Parallax from "components/Parallax/Parallax.js";
import ContactForm from "components/ContactForm/ContactForm.js";
import TridNonTridPrograms from "components/TridNonTrid/TridNonTridPrograms.js";
import Spinner from 'components/Spinner/Spinner';


import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  // const WEBSITE_URL = 'https://acralending.com';
  // const API = 'wp-json/wp/v2';

  // const [corrs, setCorrs] = useState([]) 
  // const [isLoading, setIsLoading] = useState(false);

  // const getData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const result = await
  //     axios.get(
  //       `${WEBSITE_URL}/${API}/corrcontacts`
  //       )
  //     setCorrs(result.data); // set State
  //     setIsLoading(false);

  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // } 

  // useEffect(() => {

  //   getData();
    
  // }, []);

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
            <h2 className={classes.title + " " + classes.textCenter}>TRID and Non-TRID Programs</h2>
                <TridNonTridPrograms />
          </div>
        </div>
      </div>
      <FooterItems />
    </div>
  );
}
