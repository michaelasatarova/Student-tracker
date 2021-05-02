// withAuth HOC

// import { useHistory } from "react-router";
// import { useSelector } from "react-redux";

// export const withAuth = (WrappedComponent) => {
//   return () => {
//     const token = useSelector((state) => state.token);
//     const { push } = useHistory();

//     if (token) {
//       return <WrappedComponent />;
//     } else {
//       push("/");
//       return null;
//     }
//   };
// };

import React, {useEffect} from "react";
import {connect} from "react-redux";

export default function withAuth(WrappedComponent) 
{
    function AuthComponent(props)
    {
        useEffect(() => {
            redirectUser()
        }, [props.token])
    
        const redirectUser = () => {
            if(!props.token && !localStorage.token)
            {
                props.history.push("/");
            } 
        }
    
        return <WrappedComponent {...props} />
    }

    function mapStateToProps(state) {
        return {
            token: state.token
        }
    }
 
    return connect(mapStateToProps)(AuthComponent) };