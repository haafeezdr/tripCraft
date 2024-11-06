import React from 'react';
import { Stack } from "expo-router";
import "../global.css";


const App = () => {
  return (
      <Stack>
        <Stack.Screen name="index"  options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
  );
};

export default App;
