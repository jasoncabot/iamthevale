import React, { useEffect, useState, useRef } from 'react';

import LeaveCommentForm from './LeaveCommentForm';

import './App.css';

const App = () => {

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
    <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-sm">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/about">About</a>
          </nav>
        </div>
      </header>

      <main role="main" className="inner content mt-auto">
        <h1 className="">I am&nbsp;<span className="iam" ref={animatedText}>{textItems[textIndex]}</span></h1>
        <div className="mt-5">
          <p className="text-muted">Create your own and share your story</p>

          <button type="button" className="btn btn-lg btn-primary mr-2" data-toggle="modal" data-target="#captureStory">I am ...</button>
          <a href="/about" className="btn btn-lg btn-secondary">Learn more</a>

          <div className="modal fade" id="captureStory" tabIndex="-1" role="dialog" aria-labelledby="story capture form"
            aria-hidden="true">
              <LeaveCommentForm />
          </div>
        </div>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>A digital inclusion project made with <span role="img" aria-label="love">❤️</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
