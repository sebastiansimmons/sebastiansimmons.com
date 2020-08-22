import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import BlogIndex from './pages/blog/BlogIndex';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/blog' component={BlogIndex}></Route>
    </Switch>
  );
}

export default Main;
