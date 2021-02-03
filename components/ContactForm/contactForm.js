/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactForm() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
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
    </div>
  );
}
