import "./profileStyle.scss";
import React from 'react';

import {observer} from 'mobx-react';

@observer
export default class GitProfile extends React.Component {

    render() {
        return (
            <div className="GitProfile">
              <label>Name</label>
              <div> {this.props.user.login} </div>
              <label>Company</label>
              <div> {this.props.user.company}</div>
              <label>Email</label>
              <div> {this.props.user.email}</div>
              <label>followers</label>
              <div> {this.props.user.followers}</div>
              <label>updated at</label>
              <div> {this.props.user.updated_at}</div>
              <label>avatar</label>
              <div> <img src={ this.props.user.avatar_url } />
</div>


            </div>
        );
    }
}

