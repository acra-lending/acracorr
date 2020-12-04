import React, { Component }from 'react';
import ReactDOM from 'react-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

const Iframe = () => {
    const classes = useStyles();

    return (
        // basic bootstrap classes. you can change with yours.
        <div>
            <iframe src="https://bt.citadelservicing.com/correspondent-portal" frameborder="0" scrolling="no" width="100%" height="700px" ></iframe>
        </div>
    );
};

export default Iframe;
