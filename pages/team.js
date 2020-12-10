/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionDescription from "pages-sections/about-us/SectionDescription.js";
import SectionTeam from "pages-sections/about-us/SectionTeam.js";
import SectionServices from "pages-sections/about-us/SectionServices.js";
import SectionOffice from "pages-sections/about-us/SectionOffice.js";
import SectionContact from "pages-sections/about-us/SectionContact.js";

import aboutUsStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
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
        changeColorOnScroll={{
          height: 200,
          color: "darkGray"
        }}
      />
      <Parallax image={require("assets/img/bg-our-team.jpg")} filter="sky" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title} style={{ color: "#fff", marginTop: "-32px" }}>Our Team</h1>
              <h4>
                The leadership team at Acra Lending is a group of highly-experienced and dedicated senior managers with an average of 25 years’ experience in Non-QM mortgage origination, underwriting and servicing.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} style={{ margin: "-160px 30px 0px"}}>
        <div className={classes.container}>
          <SectionTeam />
          <SectionContact />
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
