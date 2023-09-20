import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

import ThemeContextProvider from "./components/context/ThemeContext";
import Box from "./components/context/Box";

import USerContextProvider from "./components/context/UserContext";
import User from "./components/context/User";

import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

import { List } from "./components/generics/List";

import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliteral/Toast";
import { CustomButton } from "./components/html/Button";

import { Text } from "./components/polymorphic/Text";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name="Tracy" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>Oscar goes to bla bla</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <USerContextProvider>
        <User />
      </USerContextProvider>

      {/* <List items={["a", "b", "c"]} onClick={(item) => console.log(item)} />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      <List
        items={[
          {
            id: 1,
            first: "Tracy",
            last: "Pham",
          },
          {
            id: 2,
            first: "Dom",
            last: "Le",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <Private isLoggedIn={true} component={Profile} />

      <RandomNumber value={10} isPositive/>

      <Toast position="left-center"/>

      <CustomButton variant="primary">Primary Button</CustomButton>
        
      <Text size='lg' as='h1'> 
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;
