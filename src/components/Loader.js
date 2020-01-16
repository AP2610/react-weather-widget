import React from "react";
import Loader from "react-loader-spinner";

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