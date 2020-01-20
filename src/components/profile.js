import React, { Component } from 'react'
import Post from './post'
import axios from "axios";
export default class profile extends Component {
    state={
        posts: []
    }
    componentDidMount = () => {
        this.getPosts();
      };
    getPosts = () => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.id)
        .then(res => this.setState({ posts: res.data }));
      };
    render() {
        return (
            <div className="profilePost">
                {this.state.posts.map(el => (
                  <Post  post={el} />
                ))}
            </div>
        )
    }
}
