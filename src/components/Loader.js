import React from "react";
import Loader from "react-loader-spinner";

// A loader to display while external calls are made
const LoadingSpinner = () => {
    return (
        <Loader 
            type="Puff" 
            color="#fff" 
            height={80} 
            width={80} 
        />
    )
};

export {LoadingSpinner};