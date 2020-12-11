/*eslint-disable*/ import React, { useState, useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
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
import Spinner from 'components/Spinner/Spinner';



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

  const WEBSITE_URL = 'https://bt.citadelservicing.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios (
        `${WEBSITE_URL}/${API}/corr`
      );
      
      setCorrs(result.data);
      setIsLoading(false);
    };
    fetchData(); 
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Header
        color="white"
        brand="Acra Lending"
        links={<HeaderLinks dropdownHoverColor="blue" />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "darkGray"
        }}
        {...rest}
      />

      <Parallax 
        image={require("assets/img/bg1-color.jpg")} 
        filter="sky"
      >
                      {isLoading ? (
                <Spinner />
              ) : ( 
        <div className={classes.container} style={{ marginTop: "0" }}>
          {/* Start Loading Area */}
          <GridContainer>
            <GridItem xs={12} sm={6} md={12}>
              <br />
              <h1 
                className={classes.title}
                style={{ padding: "64px 0 0 0", marginBottom: "0" }}
              >
                {corrs.length > 0 ? parse(corrs[3].content.rendered.replace(/<[^>]+>/g, '')) : null}
                </h1>

                {/* <h1 
                className={classes.title}
                style={{ padding: "64px 0 0 0", marginBottom: "0" }}
              >
                BECOME AN APPROVED ACRA LENDING CORRESPONDENT PARTNER</h1> */}
                <h4>Acra Correspondent is committed to providing simplicity, consistency and an optimal customer experience.</h4>
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
      )} {/* End Loading Area */}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div {...rest}>

          {/* Feature 5 START */}
          <div
            className={classes.features5}
            style={{padding: "60px 0"}}
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
                <h4 className={classes.title} style={{ paddingTop: "0", marginTop: "0"}}>Acra lending, formerly Citadel Servicing Corporation, is an experienced non-Agency mortgage banking company recently acquired by a well-established private equity firm. Under new ownership and leadership, we are committed to completing in house eligibility reviews with no reliance on third party reviews for due diligence or third-party appraisal reviews, reducing the time it takes to complete a loan.</h4>
                <hr style={{ borderColor: "#0033A1" }}/>
                <h3 className={classes.title}>What You'll Get Access To</h3>
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
