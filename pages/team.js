/*eslint-disable*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
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
import Spinner from 'components/Spinner/Spinner';
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

  const WEBSITE_URL = 'https://bt.citadelservicing.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corrteam`
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
        changeColorOnScroll={{
          height: 200,
          color: "darkGray"
        }}
      />
      <Parallax image={require("assets/img/bg-our-team.jpg")} filter="sky" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            {isLoading ? (
              <Spinner />
            ) : (
              <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title} style={{ color: "#fff", marginTop: "-12px", paddingTop: "12px" }}>{corrs.length > 0 ? parse(corrs[0].title.rendered) : isLoading}</h1>
              <h4>
                {corrs.length > 0 ? parse(corrs[0].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
              </h4>
            </GridItem>
            )}

          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} style={{ margin: "-110px 30px 0px"}}>
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
