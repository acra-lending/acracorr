import React, { Fragment } from 'react'
import spinner from './spinner.gif';
import Loader from "react-loader-spinner";

export const Spinner = () =>
        <Fragment>
            <Loader
                style={{position: "absolute", left: "47%", top: "35%"}}
                type="Grid"
                color="#0033A1"
                height={100}
                width={100}
                timeout={2200}
            />
        </Fragment>

export default Spinner