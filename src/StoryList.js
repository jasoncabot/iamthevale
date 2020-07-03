
import React, { useState } from 'react';

import './StoryList.css';

const Card = ({ title, body }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4>I am&nbsp;<strong>{title}</strong></h4>
                <p className="card-text">{body}</p>
                <p className="card-text"><small className="text-muted">Submitted 12 hours ago from UK</small></p>
            </div>
        </div>
    );
};

const StoryList = ({ kind }) => {

    const [stories] = useState([
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
        {
            title: 'a person',
            story: 'letting you know how I describe myself'
        },
    ]);

    return (
        <div>
            <h2>Latest stories</h2>
        <div className="card-columns mt-5">
            {stories.map((card, index) => {
                return (
                    <Card key={index} title={card.title} body={card.story} />
                );
            })}
        </div>
        </div>
    );


}

export default StoryList;