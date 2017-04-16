import React, { Component } from 'react';
import { Link } from 'react-router';

class User extends Component {
    
    constructor(){
        super();

        this.state = {
            users: null
        }

        this.fetch = function(){
            fetch('/api/allusers')
                .then((response) => response.json())
                .then((responseJson) => {                    
                    this.setState({
                        users: responseJson
                    })
                })
                .catch((error) => {
                    console.error(error);
                });    
        }

        this.renderLoadingView = function() {
            return (
            <p>
                Loading users...
            </p>
            );
        }

        this.renderUsers = function(users) {
            console.log("Render", users)
            // Map through users and return linked users
            const userNode = users.map((user) => {
                return (
                    <li key={user.id}>
                        <span>{user.first_name} {user.last_name} - {user.email}</span>
                        
                    </li>
                )
            });
            return (
                <div>
                    <h1>Users</h1>
                    <div className="list-group">
                        <ul>
                            {userNode}
                        </ul>
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
      this.fetch();      
    }    

    render(){
        if (!this.state.users) {
            return this.renderLoadingView();
        }
        
        var users = this.state.users;
        return this.renderUsers(users);        
    }
}

export default User
