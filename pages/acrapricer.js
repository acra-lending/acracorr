/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FooterItems from "components/Footer/FooterItems.js";
import Parallax from "components/Parallax/Parallax.js";
import LoanNEX from 'components/Iframe/LoanNEX.js';


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
          <div className={classes.containerFluid}>
            {/* <h2 className={classes.title} style={{ textAlign: "center" }}>File Upload or Loan Scenario</h2> */}
            <GridContainer>
              <GridItem md={12} sm={12}>
                {/* <p style={{ color: "#3C4858" }}>
                  Some additional text here
                </p> */}
                <LoanNEX />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <FooterItems />
    </div>
  );
}
