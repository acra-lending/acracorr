/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Apps from "@material-ui/icons/Apps";
import Assessment from "@material-ui/icons/Assessment";
import Group from "@material-ui/icons/Group";
import Computer from "@material-ui/icons/Computer";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import TouchApp from "@material-ui/icons/TouchApp";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";


import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import featuresStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";

import bg9 from "assets/img/bg9.jpg";

// Sections for this page
import SectionProduct from "pages-sections/landing-page/SectionProduct.js";
import SectionTeam from "pages-sections/landing-page/SectionTeam.js";
import SectionWork from "pages-sections/landing-page/SectionWork.js";
import SectionSignUp from "pages-sections/home/SignUp.js";
import ApplyNow from "pages-sections/home/ApplyNow.js";

const useStyles = makeStyles(landingPageStyle, featuresStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Acra Lending"
        links={<HeaderLinks dropdownHoverColor="blue" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "darkGray"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg1.jpeg")} filter="sky">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={12}>
              <h1 className={classes.title}>BECOME AN APPROVED ACRA LENDING CORRESPONDENT PARTNER</h1>
              <h4>
                Acra lending, formerly Citadel Servicing Corporation, is an experienced non -Agency mortgage banking company recently acquired by a well-established private equity firm.  Under new ownership and leadership Acra Correspondent is committed to providing simplicity, consistency and an optimal customer experience.  Part of this commitment includes completing in house eligibility reviews with no reliance on third party reviews for due diligence or third party appraisal reviews, reducing the time it takes to complete a loan.  
              </h4>
              <br />
              <SectionSignUp />
              {/* <Button
                color="blue"
                size="lg"
                href="#"
                style={{ marginRight: "20px"}}
              >
                Get Approved 
              </Button>
              <Button
                color="blue"
                size="lg"
                href="#"
                style={{ marginRight: "20px"}}
              >
                Sellers Guide
              </Button>
              <Button
                color="blue"
                size="lg"
                href="#"
              >
                Loan Qualification Engine
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className="cd-section" {...rest}>

          {/* Feature 5 START */}
          <div
            className={classes.features5}

          >
            <GridContainer className={classes.margin0}>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h2 className={classes.title}>What You'll Get Access To</h2>
              </GridItem>
              <div className={classes.container}>
                <GridContainer
                  className={classes.gridContainer}
                  style={{ margin: "0!important" }}
                >
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Apps}
                      title="Industry Leading Non-QM Programs"
                      description={
                        <p>
                          Extensive range of products to meet lending portfolios
                        </p>
                      }
                      iconColor="info"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Assessment}
                      title="Daily Rate Sheets/Pricing"
                      description={
                        <p>
                          Competitive Rates
                        </p>
                      }
                      iconColor="danger"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Group}
                      title="A Dedicated Correspondent Executive"
                      description={
                        <p>
                          Highly trained executives with a deep understanding of the Non-QM industry
                        </p>
                      }
                      iconColor="primary"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer
                  className={classes.gridContainer}
                  style={{ margin: "0!important" }}
                >
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Computer}
                      title="Training Videos, Tutorials and Webinars"
                      description={
                        <p>
                          Not only are our AE’s highly trained, we believe in sharing the knowledge
                        </p>
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={PhotoSizeSelectActualIcon}
                      title="Marketing Collateral"
                      description={
                        <p>
                          Professionally designed marketing collateral ready to incorporate your brand identity
                        </p>
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={TouchApp}
                      title=""
                      description={
                        <ApplyNow />
                      }
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </GridContainer>
          </div>
          {/* Feature 5 END */}
        </div>
      </div>
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
                {/* <ListItem className={classes.inlineBlock}>
                  <a 
                    href="https://nmlsconsumeraccess.org/"
                    className={classes.block}
                  >
                  <img 
                    src={require("assets/img/nmls-logo.png")}
                    className="footer-logo"
                  />
                  {" "}NMLS: #144549
                  </a>
                </ListItem> */}
              </List>
            </div>
            {/* <div className={classes.center}>
              &copy; {1900 + new Date().getYear()} Acra Lending{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com/?ref=njsmkp-landing"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div> */}
          </div>
        }
      />
    </div>
  );
}
