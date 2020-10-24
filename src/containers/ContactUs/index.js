import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import RecentPosts from '../Home/RecentPosts';
import blogData from '../Data/blog.json';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px` }}>
            <img src={props.src} alt="Post Image" className="galleryImage" />
        </div>
    );
}

const ImageGallery = props => (<div className="galleryPost" style={props.galleryStyle}>
    <section style={{ width:props.largeWidth }}>
        <div className='mainImageWrapper'>
            <img src={require('../../components/assets/' + props.imagesArray[4])} alt="Post Image" className="galleryImage" />
            <p>
                Contact info
            </p>
        </div>
    </section>
        
    <section className={'sideImageWrapper'} style={{ width:props.smallWidth }}>
        {
            props.imagesArray.map(image => 
                <SideImage 
                    height={props.sideImageHeight} 
                    src={require('../../components/assets/' + image)}
                    alt="picA" />
            )
        }
    </section>
</div>
);

const Home = props => {
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
                <ImageGallery 
                    largeWidth='70%' 
                    smallWidth='30%'
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle} 
                    imagesArray={imgAr}
                />
            </Card>

        </div>
    );
}

export default Home;