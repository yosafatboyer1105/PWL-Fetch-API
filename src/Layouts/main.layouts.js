import Navigation from "./navigation.layouts"
import React from "react"


const MainLayouts = ({children}) => {
    return (
        <React.Fragment>
            <Navigation/>
            {children}
        </React.Fragment>
    )
}

export default MainLayouts