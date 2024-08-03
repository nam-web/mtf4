import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, posts, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="home-container">
            <h1>Social Media App</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt="post" />
                        <h3>User ID: {post.userId}</h3>
                        <h4>Title: {post.title.slice(0, 15)}...</h4>
                        <p>Body: {post.body.slice(0, 30)}... <Link to={`/item/${post.id}`}>Read More...</Link></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
