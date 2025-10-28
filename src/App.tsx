// import { Fragment } from 'react';
import "./App.css";
// import { RegistrationFormRefs } from "./components/RegistrationFormRefs";
import { RegistrationFormRHF } from "./components/RegistrationFormRHF";
import { ValueKeeper } from "./components/ValueKeeper";
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
      <div>
        {/* <RegistrationFormState /> */}
        {/* <Text>Hello {123}</Text> */}
        {/* <RegistrationFormRefs /> */}
        <ValueKeeper />
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
