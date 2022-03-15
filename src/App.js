import React from "react";
import Content from "./Components/Content/Content";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider, {ContextLang} from "./context/langContext";

function App() {
  return (
    <ContextProvider>
      <Content />
      <ToggleLangs />
    </ContextProvider>
  );
}

export default App;
