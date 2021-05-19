import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminContainer from "./containers/AdminContainer/AdminContainer";
import SignInContainer from "./containers/AuthContainer/SignInContainer";
import SignUpContainer from "./containers/AuthContainer/SignUpContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import MobileListContainer from "./containers/MobileListContainer/MobileListContainer";
import NavBarContainer from "./containers/NavBarContainer/NavBarContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/admin" component={AdminContainer} />
        <Route exact path="/listing" component={MobileListContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/signin" component={SignInContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
