import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHanlder = ({setIsAuthenticated}) => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      if(localStorage.getItem("tokenJWT")){
        setIsAuthenticated(true)
        if(location.pathname==="/" ||
            location.pathname==="/login" ||
            location.pathname==="/signup"
        ){
            navigate("/home", {replace:false});
        }
      }
    }, [setIsAuthenticated, navigate])
    
  return (
    null
  )
}

export default RefreshHanlder
