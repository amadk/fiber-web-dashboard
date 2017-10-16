import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './Authentication/SignUp.jsx';


class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" component={()=>(<SignUp/>)} />
      </Switch>
    )
  }
}

export default App;