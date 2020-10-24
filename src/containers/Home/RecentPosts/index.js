import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

const RecentPosts = (props) => {
    return (
        <div style={props.style}>
            <Card style={{marginBottom: '20px'}}>
                <div className="postImageWrapper">
                    <img src={require('../../../components/assets/pic1.png')} alt="Post Image" className="galleryImage" />
                </div>

                <div style={{textAlign: 'center'}} className="heading">
                    <span>Featured</span>
                    <h2>Live A Fit Life</h2>
                    <span>posted on Oct.22, 2020 by JK Williams</span>
                    <p>
                        The secret of life is the little things...
                    </p>
                    <button className="readMoreButton">
                    Read More</button>
                </div>
            </Card>
        </div>
    );
}

export default RecentPosts;