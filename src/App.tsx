// import { Fragment } from 'react';
import { Viewport } from "@/components/Viewport";
import "./App.css";
import { RegistrationPage } from "@/features/registration/components/RegistrationPage";
import { useState } from "react";
import { Button } from "@/ui";
import { Counter } from "@/components/Counter";
import { ProductsList } from "./features/products/components/ProductsList";
import { MagicButtonWrapper } from "shared/ui/MagicButton/MagicButtonWrapper";
import { LevelContext } from "@/components/LevelContext";
import { LevelComponent } from "@/components/LevelComponent";
import { AuthInfo } from "./features/auth/components/AuthInfo";
import { AuthProvider } from "./features/auth/components/AuthContext";
import { AuthCredentials } from "./features/auth/components/AuthCredentials";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Stepper } from "@/components/Stepper";
import { ProductsDetails } from "./features/products/components/ProductsDetails";
// import { RegistrationFormRefs } from "./components/RegistrationFormRefs";
// import { RegistrationFormRHF } from "./components/RegistrationFormRHF";
// import { ValueKeeper } from "./components/ValueKeeper";
// import { MagicButtonWrapper } from "./ui/MagicButton/MagicButtonWrapper";
// import { Generator } from "./components/Generator";
// import { RegistrationFormState } from "./components/RegistrationFormState";
// import Kaczka from "./ui/Text/Text";
// import { Text } from "./ui/Text/Text";
// import { Text } from "./ui/Text";
// import { Button, Text } from "./ui";
// import { Text } from './ui' -> '@/ui' -> '@bos/ui`

function App() {
  return (
    <>
      <ErrorBoundary>
        {/* <Stepper /> */}
        {/* <AuthProvider>
          <AuthInfo />
        </AuthProvider> */}

        {/* <ErrorBoundary fallback={<p>Auth error</p>}> */}
        {/* <ErrorBoundary>
          <AuthInfo />
        </ErrorBoundary> */}

        {/* <AuthCredentials /> */}

        {/* <Button onClick={() => setIsLoggedIn((value) => !value)}>Toggle</Button> */}
        <ProductsDetails id="recEaQjwWiME7MCYv" />
        <ProductsList />
        {/* <Counter /> */}
        {/* {showViewport && <Viewport />} */}
        {/* <Button onClick={() => setShowViewport(!showViewport)}>Toggle</Button> */}
        {/* <RegistrationPage /> */}
        {/* <MagicButtonWrapper /> */}
        {/* <LevelContext.Provider value={{ value: 5 }}>
          <MagicButtonWrapper />
        </LevelContext.Provider>

        <LevelComponent /> */}
        {/* <RegistrationFormState /> */}
        {/* <Text>Hello {123}</Text> */}
        {/* <RegistrationFormRefs /> */}
        {/* <ValueKeeper /> */}
        {/* <RegistrationFormRHF /> */}
        {/* <Generator /> */}
        {/* <Text>test</Text>
        <Button>Click me</Button>
        <Button color="clouds" bgColor="carrot">
          Click me
        </Button> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
