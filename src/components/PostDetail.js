import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    const { id } = useParams();
    const post = useSelector((state) =>
        state.posts.find((post) => post.id.toString() === id)
    );

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="post-detail-container">
            <h1>Social Media App</h1>
            <h2>Details Page For Post With ID {id}</h2>
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="post" />
            <h3>User ID: {post.userId}</h3>
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetail;
