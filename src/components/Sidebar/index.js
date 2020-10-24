import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../containers/Data/blog.json';
import {NavLink} from 'react-router-dom';


const Sidebar = (props) => {
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="sidebarContainer" style={{ width: props.width }}>
            <Card style={{ marginBottom: '20px', padding: '5px',boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../assets/pic5.png')} alt="Post Image" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">Working for a better life...</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px',padding: '5px',boxSizing:'border-box' }}>
                <div className="cardHeader">
                    <a href="https://www.facebook.com">
                        <img src={require('../assets/fb.png')} alt="fb" className="facebookIcon" />
                    </a>
                    <a href="https://www.twitter.com">
                        <img src={require('../assets/twitterButton.png')} alt="fb" className="facebookIcon" />
                    </a>
                    <a href="https://www.youtube.com">
                        <img src={require('../assets/youtube.png')} alt="fb" className="facebookIcon" />
                    </a>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '5px',boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h5>{post.blogTitle}</h5>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    );
}

export default Sidebar;