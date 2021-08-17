import React, {useContext} from "react";
import { Redirect, Route } from "react-router-dom";

import { AppContext } from "../providers/AppProvider";

const AppRoute = ({ component: Component, path, isPrivate, ...rest }) => {

    const {sessionUser} = useContext(AppContext);
    return (
        <Route
            path={path}
            render={props =>
                isPrivate && !Boolean(sessionUser) ? (
                    <Redirect
                        to={{ pathname: "/404" }}
                    />
                ) : (
                        <Component {...props} />
                    )
            }
            {...rest}
        />
    )
}

export default AppRoute;