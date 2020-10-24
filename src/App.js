import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import ContactUS from './containers/ContactUs';
import Post from './containers/Post';
import aboutUs from './containers/AboutUs';

// Rizwan17/reactjs-blog   Rizwan Khan
// blog.json file link: https://www.youtube.com/redirect?q=https%3A%2F%2Fgithub.com%2FRizwan17%2Freactjs-blog%2Fblob%2Fmaster%2Fsrc%2Fdata%2Fblog.json&v=JE8w1gvn0Y4&redir_token=QUFFLUhqa2dvLVZkd2MzeDZENmdRbUozY2tvQTJ4aDhNUXxBQ3Jtc0tsdHBZSTc0amJMQTdJYkp0dE9KUGhySENSSWRCRHUzYW81WDEwOVlPVEN5RXlldFRXamhWdmRaWThrbXNLZXZUTmtQOVhjbkVuYk90Rng4S3BZWXAxWVVobmNETkVKaEcyUnZ0Ym1fUVktWS1yQmRwMA%3D%3D&event=video_description
// https://www.youtube.com/redirect?q=https%3A%2F%2Fgithub.com%2FRizwan17%2Freactjs-blog.git&v=JE8w1gvn0Y4&redir_token=QUFFLUhqbEFGQXpnWnUtMHR6Z0pqYTNidGFRYk9nelB6QXxBQ3Jtc0ttTldrMmJZbUxlWGVTRkZkUDJhNUp1bjd6VUtYZGtWNklpbnl3c1VaRUtfbWV2aUVIeVpyRjBfNmJ5dXQ1ZS1iTml6WV9KYUpFMUktWWpNcHBHaVYzRGxGenYwdlUwMm1UMUxDMGFxVVJfQlFodGhRZw%3D%3D&event=video_description
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Hero />
                <Route path="/" exact component={Home} />
                <Route path="/contact-us" component={ContactUS} />
                <Route path="/post/:slug" component={Post} />
                <Route path="/about-us" component={aboutUs} />
            </div>
        </Router>
    );
}

export default App;
