import React from "react";
import Main from "./Screens/Authentication/Main";
import Autstack from "./Autstack";
import LR from "./LR";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <Autstack />
    </NavigationContainer>
  );
};
export default App;
