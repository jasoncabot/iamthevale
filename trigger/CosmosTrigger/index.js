module.exports = async function (context, newStories) {
    context.bindings.signalRStories = newStories.map(story => ({
        target: 'newStory',
        arguments: [story]
    }));
};

