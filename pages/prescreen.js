/*eslint-disable*/
import React, { useEffect, useState } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FooterItems from "components/Footer/FooterItems.js";
import Parallax from "components/Parallax/Parallax.js";
import MultiStepForm from "components/MultiStepForm/MultiStepForm.js";
import Spinner from 'components/Spinner/Spinner';
import QualifyingCriteria from "components/MultiStepForm/QualifyingCriteria.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corrprescreennote`
        )
      setCorrs(result.data); // set State
      setIsLoading(false);

    } catch (err) {
      console.error(err.message);
    }
}

useEffect(() => {

    getData();
    
}, []);

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
          <div className={classes.containerLarge}>
          <div className={classes.title}>
            <h2 style={{ textAlign: "center", marginTop: "0", fontWeight: "700" }}>Pre-Screen Request</h2>
          </div>
          <div className={classes.container}>
          <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
              <MultiStepForm />
                <br />
                <br />
                <p style={{ color: "#3C4858", fontSize: "14px" }}>{corrs.length > 0 ? parse(corrs[0].acf.note) : isLoading}</p>
                <p style={{ color: "#3C4858", fontSize: "12px" }}>{corrs.length > 0 ? parse(corrs[0].acf.disclaimer) : isLoading}</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <QualifyingCriteria />
            </GridItem>
          </GridContainer>

          </div>
          </div>
        </div>
      </div>
      <FooterItems />
    </div>
  );
}
