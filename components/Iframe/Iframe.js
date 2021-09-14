import React, { Component }from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

const Iframe = () => {
    const classes = useStyles();
    const randomNumber = new Date();
    const iFrameUrl = "https://acralending.com/correspondent-portal";

    return (
        // basic bootstrap classes. you can change with yours.
        <div>
            <iframe src={`${iFrameUrl}?var=${randomNumber}`} frameborder="0" scrolling="yes" width="100%" height="700px"></iframe>
        </div>
    );
};

export default Iframe;
