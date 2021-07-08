import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastucture/theme";
import { Navigation } from "./src/infrastucture/navigation";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDa_Nb6QbX0qF35LpOB6hNvi_aUlVrq8qg",
  authDomain: "opentable-bab6b.firebaseapp.com",
  projectId: "opentable-bab6b",
  storageBucket: "opentable-bab6b.appspot.com",
  messagingSenderId: "976517178064",
  appId: "1:976517178064:web:1500e16f50fbd8e00134d5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
