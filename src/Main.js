import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import FirstPost from './pages/blog/FirstPost';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/first-post' component={FirstPost}></Route>
    </Switch>
  );
}

export default Main;
