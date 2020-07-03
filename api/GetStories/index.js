module.exports = async function (context, req) {
    context.res = {
        body: [
            {
                title: 'a person',
                story: 'letting you know how I describe myself'
            }
        ]
    };
}