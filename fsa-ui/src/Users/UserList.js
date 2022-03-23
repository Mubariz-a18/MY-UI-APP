import {Component} from "react";
import React from 'react';
import axios from "axios";
import UserDez from "./Userdez";


class UserList extends Component {
    state = {
        users: []
    }
    constructor() {
        super();
        axios.get('https://api.github.com/users').then(res => {
            const data = res.data;
            this.setState({users: data})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>users</h1>
                <> {this.state.users.map(user => <UserDez key = {user.login}user={user}/>)
                } </>
            </div>
        );
    }
}

export default UserList;
