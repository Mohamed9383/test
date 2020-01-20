import React, { Component } from 'react'
import Commentaire from './commentaire'

import axios from "axios";
export default class comments extends Component {
    state={
        comm: []
    }
    componentDidMount = () => {
        this.getComments();
      };
      getComments = () => {
        axios
        .get('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.id)
        .then(res => this.setState({ comm: res.data }));
      };
    render() {
        return (
            <div className="profilePost">
                {this.state.comm.map(el => (
                  <Commentaire  monta={el} />
                ))}
            </div>
        )
    }
}
