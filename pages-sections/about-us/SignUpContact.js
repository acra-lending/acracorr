import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = event => {
    setSpecialitySelect(event.target.value);
  };
  const classes = useStyles();

  const WEBSITE_URL = 'https://acralending.com';
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
      <GridContainer>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem md={12} sm={12}>
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
              </GridItem>
              <GridItem md={12} sm={12}>
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
              </GridItem>
              <GridItem md={12} sm={12}>
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
              </GridItem>
              {/* <GridItem md={4} sm={4}>
                <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={specialitySelect}
                    onChange={handleSpeciality}
                    inputProps={{
                      name: "specialitySelect",
                      id: "speciality-select"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      Speciality
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="1"
                    >
                      I{"'"}m a Designer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      I{"'"}m a Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      I{"'"}m a Hero
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem> */}
            </GridContainer>
            <GridContainer>
              <GridItem
                md={12}
                sm={12}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
              <Button 
                color="blue"
                type="submit"
                disabled={isSubmitting}
                >
                  Get Started
              </Button>
                {messageSent && setIsSuccessMessage && (
                  <div className={classNames(classes.description, classes.textCenter)}>
                    <p>Message sent successfully!</p>
                  </div>
                )}
                {messageSent && !setIsSuccessMessage && (
                  <div className={classNames(classes.description, classes.textCenter)}>
                    <p>Something went wrong. Please try again.</p>
                  </div>
                )}
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
