import react,{createContext, useState} from "react";
import { ActivityIndicator, View } from "react-native";
import { Children } from "react/cjs/react.production.min";
export const AuthContext=createContext();
export const AuthProvider=({Children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [userToken,SetUserToken]=useState(true);
    
  const login=()=>{
        SetUserToken(false);
        setIsLoading(false)
    }
    const logout=()=>{
        SetUserToken(null)
        setIsLoading(false);
    }
    return(
        <AuthContext.Provider value={{login,logout,isLoading,userToken}}>
            {Children}
        </AuthContext.Provider>
    )
}
export default AuthContext