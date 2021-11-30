import React from "react";
import { UserProvider } from './provider/UserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <UserProvider>
      <Router/> 
    </UserProvider>
  );
}

export default App;
