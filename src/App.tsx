// import { Fragment } from 'react';
import { Viewport } from "@/components/Viewport";
import "./App.css";
import { RegistrationPage } from "@/features/registration/components/RegistrationPage";
import { useState } from "react";
import { Button } from "@/ui";
import { Counter } from "@/components/Counter";
import { ProductsList } from "./features/products/components/ProductsList";
// import { RegistrationFormRefs } from "./components/RegistrationFormRefs";
// import { RegistrationFormRHF } from "./components/RegistrationFormRHF";
// import { ValueKeeper } from "./components/ValueKeeper";
// import { MagicMouseWrapper } from "./ui/MagicButton/MagicMouseWrapper";
// import { Generator } from "./components/Generator";
// import { RegistrationFormState } from "./components/RegistrationFormState";
// import Kaczka from "./ui/Text/Text";
// import { Text } from "./ui/Text/Text";
// import { Text } from "./ui/Text";
// import { Button, Text } from "./ui";
// import { Text } from './ui' -> '@/ui' -> '@bos/ui`

function App() {
  const [showViewport, setShowViewport] = useState(true);

  return (
    <>
      <div>
        <ProductsList />
        {/* <Counter /> */}
        {/* {showViewport && <Viewport />} */}
        {/* <Button onClick={() => setShowViewport(!showViewport)}>Toggle</Button> */}
        {/* <RegistrationPage /> */}
        {/* <MagicMouseWrapper /> */}
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
      </div>
    </>
  );
}

export default App;
