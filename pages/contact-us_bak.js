/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
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
import Parallax from "components/Parallax/Parallax.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

// const CustomSkinMap = withScriptjs(
//   withGoogleMap(() => (
//     <GoogleMap
//       defaultZoom={14}
//       defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
//       defaultOptions={{
//         scrollwheel: false,
//         zoomControl: true,
//         styles: [
//           {
//             featureType: "water",
//             stylers: [
//               { saturation: 43 },
//               { lightness: -11 },
//               { hue: "#0088ff" }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.fill",
//             stylers: [
//               { hue: "#ff0000" },
//               { saturation: -100 },
//               { lightness: 99 }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#808080" }, { lightness: 54 }]
//           },
//           {
//             featureType: "landscape.man_made",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ece2d9" }]
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ccdca1" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#767676" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.stroke",
//             stylers: [{ color: "#ffffff" }]
//           },
//           { featureType: "poi", stylers: [{ visibility: "off" }] },
//           {
//             featureType: "landscape.natural",
//             elementType: "geometry.fill",
//             stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
//           },
//           { featureType: "poi.park", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.sports_complex",
//             stylers: [{ visibility: "on" }]
//           },
//           { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.business",
//             stylers: [{ visibility: "simplified" }]
//           }
//         ]
//       }}
//     >
//       <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
//     </GoogleMap>
//   ))
// );

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const WEBSITE_URL = 'https://citadelservicing.com';
  const FORM_ID = '3587'; // Contact Form ID

  const [token, setToken] = useState('') 
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // Manage success message state
  const [messageSent, setMessageSent] = useState(false) // Manage sent message state 

  // useEffect function to authenticate subscriber user to get a token
  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: 'brokertest', // provide a user credential with subscriber role
        password: 'brokertest1'
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      setToken(response.data.token)
    }).catch(error => console.error( 'Error', error))
  }, []);

  // use useFormik hook using object destructuring assignment to extract helpful methods
  const {
    handleChange,
    isSubmitting,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullname: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: ({
      fullname,
      company,
      email,
      phone,
      message
    }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      //create a FormData field for each form field
      const bodyFormData = new FormData();
      bodyFormData.set('your-name', fullname);
      bodyFormData.set('your-company', company);
      bodyFormData.set('your-email', email);
      bodyFormData.set('your-tel', phone);
      bodyFormData.set('your-message', message);

      // Send it
      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(response => {
        // actions taken when submission goes OK
        console.log(response)
        resetForm()
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(true)
      }).catch(error => {
        // actions taken when submission goes wrong
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(false)
        console.log(error)
      })
    },
  })

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000);
    // this will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])

  return (
    <div>
      <Header
        brand="Acra Lending"
        links={<HeaderLinks dropdownHoverColor="blue" />}
        fixed
        color="white"
      />
      {/* <div className={classes.bigMap}>
        <CustomSkinMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `100%`,
                borderRadius: "6px",
                overflow: "hidden"
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div> */}
      <Parallax image={require("assets/img/contact-bg1.jpg")} filter="sky" small>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaisedContact)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Contact Us</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p style={{ color: "#3C4858" }}>
                  We{"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form onSubmit={handleSubmit}>
                  <CustomInput
                    labelText="Your Name"
                    name="fullname"
                    id="fullname"
                    type="text"
                    onChange={handleChange}
                    value={values.fullname}
                    required
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your Company"
                    name="company"
                    id="company"
                    type="text"
                    onChange={handleChange}
                    value={values.company}
                    required
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    name="email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    name="phone"
                    id="phone"
                    type=""
                    onChange={handleChange}
                    value={values.phone}
                    required
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    name="message"
                    id="message"
                    type=""
                    onChange={handleChange}
                    value={values.message}
                    required
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button 
                      color="blue"
                      type="submit"
                      disabled={isSubmitting}
                      >
                        Contact Us
                    </Button>
                  </div>
                  {messageSent && setIsSuccessMessage && (
                        <div><p>Message sent successfully!</p></div>
                      )}
                      {messageSent && !setIsSuccessMessage && (
                        <div><p>Something went wrong. Please try again.</p></div>
                      )}
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Our Location"
                  description={
                    <p>
                      <a 
                        href="https://goo.gl/maps/mYZ6ESkqEPoR8bLSA" 
                        target="_blank" 
                        style={{ color: "inherit" }}
                      >
                        25531 Commercecentre Drive <br /> Suite 160
                        <br /> Lake Forest, CA 92630
                      </a>
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="blue"
                />
                <InfoArea
                  className={classes.info}
                  title="Email"
                  description={
                    <p>
                      <a 
                        href="mailto:corr@acralending.com"
                        style={{ color: "inherit" }}
                      >
                        corr@acralending.com
                      </a>
                    </p>
                  }
                  icon={Email}
                  iconColor="blue"
                />
                <InfoArea
                  className={classes.info}
                  title="Call Us"
                  description={
                    <p>
                      <a 
                        href="tel:888-800-7661"
                        style={{ color: "inherit" }}
                      >
                        Toll Free: (888) 800-7661
                      </a>
                      <a 
                        href="tel:949-900-6630"
                        style={{ color: "inherit" }}
                      >
                        <br/>Direct: (949) 900-6630
                      </a>
                    </p>
                  }
                  icon={Phone}
                  iconColor="blue"
                />
                <InfoArea
                  className={classes.info}
                  title="Work Hours"
                  description={
                    <p>
                      Mon - Fri: 8:00am - 5:00pm
                      <br/>Sat - Sun: Closed
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor="blue"
                />
              </GridItem>
            </GridContainer>
          </div>
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
