import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import Main from "./ui/Main";
import Theme from "./Theme";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
