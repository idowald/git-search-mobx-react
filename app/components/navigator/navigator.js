import './navigator.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


@observer
export default class Navigator extends React.Component {
  render() {
    return (
      <div className="navigator">
        <h1 className="logo">
          <Link to="/">React-Git-Search</Link>
        </h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/gitSearch">
                Git Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
