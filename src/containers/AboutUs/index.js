import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import blogData from '../Data/blog.json';


const ImageGallery = props => (<div className="galleryPost" style={props.galleryStyle}>
    <section style={{ width:props.largeWidth }}>
        <div className='mainImageWrapper'>
            <img src={require('../../components/assets/' + props.imagesArray[4])} alt="Post Image" className="galleryImage" />
        </div>
    </section>
</div>
);

const AboutUs = props => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }

    const sideImageHeight = galleryHeight / 3;
    
    const imgAr = blogData.data.map(post => post.blogImage);

    return (
        <div>   
            <Card>
                <p>Working to make life a better place</p>
                <img src={require('../../components/assets/pic1.png')} alt="" className="aboutUsImage"/>
                <p>
                    The story is vhgcghcfhgcfgcfggfcfchgchgc
                </p>
            </Card>

        </div>
    );
}

export default AboutUs;