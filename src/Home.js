
import React, { useEffect, useState, useRef } from 'react';

import LeaveCommentForm from './LeaveCommentForm';
import { Link } from 'react-router-dom';

const Home = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [textItems] = useState(['the vale', 'a person']);

    const animatedText = useRef(null);

    useEffect(() => {
        const element = animatedText.current;
        const transitionToNextItem = () => {
            if (textIndex === textItems.length - 1) {
                setTextIndex(0);
            } else {
                setTextIndex(textIndex + 1);
            }
        };
        element.addEventListener("animationiteration", transitionToNextItem, false);
        return () => { element.removeEventListener("animationiteration", transitionToNextItem); }
    }, [animatedText, textIndex, textItems.length]);

    return (
        <main role="main" className="inner content mt-auto">
            <h1>I am&nbsp;<span className="iam" ref={animatedText}>{textItems[textIndex]}</span></h1>
            <div className="mt-5">
                <p className="text-muted">Create your own and share your story</p>

                <button type="button" className="btn btn-lg btn-primary mr-2" data-toggle="modal" data-target="#captureStory">Share</button>
                <Link to="/about" className="btn btn-lg btn-secondary">Learn more</Link>

                <div className="modal fade" id="captureStory" tabIndex="-1" role="dialog" aria-labelledby="story capture form"
                    aria-hidden="true">
                    <LeaveCommentForm />
                </div>
            </div>
        </main>
    );
};

export default Home;