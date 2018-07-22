
import React from 'react';
import { Link } from 'react-router-dom';
import {observable} from "mobx"
import {observer, inject} from 'mobx-react';
import autobind from 'autobind-decorator'
import GitProfile from "./gitProfile";

@inject("gitStore")
@observer
export default class GitSearch extends React.Component {


    constructor(props) {
        super();
    }


    componentDidMount() {

    }

    componentWillUnmount(){
    }

    @autobind
    getUserInformation(){
      let userText = this.props.gitStore.searchText;
      this.props.gitStore.getUserDetails(userText);
    }
    handleKeyPress(event){
        if(event.key == 'Enter'){
          this.getUserInformation();
        }
    }

    render() {
        const {t} = this.props;
        return (
            <div className="GitSearch">
              <input type="text" value={this.props.gitStore.searchText}
                     onKeyPress={this.handleKeyPress.bind(this)}
                     onChange={(e)=>this.props.gitStore.searchText = e.target.value}/>
              <button onClick={this.getUserInformation}>Search!</button>
              {this.props.gitStore.user && !this.props.gitStore.loadingUser?
                <GitProfile user={this.props.gitStore.user}/> :""
              }
              {this.props.gitStore.user && !this.props.gitStore.loadingUser?
                            <Link to="/gitRepos">Show User git Repositories</Link>:""}
            </div>
        );
    }
}

