
import React, { useState, useEffect } from 'react';

import './StoryList.css';

const Card = ({ title, date }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4>I am&nbsp;<strong>{title}</strong></h4>
                <p className="card-text"><small className="text-muted">Submitted {new Date(date).toLocaleDateString()}</small></p>
            </div>
        </div>
    );
};

const StoryList = ({ connection, kind }) => {

    const [stories, setStories] = useState([]);
    const [loadingState, setLoadingState] = useState('');

    useEffect(() => {
        const makeRequest = async () => {
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            fetch(`${process.env.REACT_APP_API}/stories?kind=${kind}`, options)
                .then(response => response.json())
                .then(response => {
                    setLoadingState('loaded');
                    setStories(response);
                })
                .catch(err => {
                    setLoadingState('failed');
                });
        };
        if (loadingState !== '') return;
        makeRequest();
    }, [loadingState, kind]);

    useEffect(() => {
        if (!connection) return;
        connection.on('newStory', data => {
            setStories([data].concat(stories));
        })
        return () => connection.off('newStory');
    }, [connection, stories])

    return (
        <div>
            <h2>Latest stories</h2>
            <div className="card-columns mt-5">
                {stories.map((card, index) => {
                    return (
                        <Card key={index} title={card.title} date={card.createdAt} />
                    );
                })}
            </div>
        </div>
    );
}

export default StoryList;