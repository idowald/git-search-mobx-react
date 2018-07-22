import './root.scss';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navigator from '../navigator/navigator';

import GitSearch from "../git/gitSearch";
import GitRepos from "../git/gitRepos";


export default function Root() {
  return (
    <div className="root flex full-height">
      <Navigator />

      <main>
        <Switch>
          <Redirect exact from="/" to="/gitSearch" />

          <Route exact path="/gitSearch" component={GitSearch} />
          <Route exact path="/gitRepos" component={GitRepos} />

          {/* Redirect invalid pages back to root */}
          <Redirect from="" to="/gitSearch" />
        </Switch>
      </main>
    </div>
  );
}
