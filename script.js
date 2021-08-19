// This project is a Random Activity Generator 

// The final activity will comprise 4 strings randomly chosen from the below object

const randomiser = {
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    activity: ['go for a hike', 'take a weekend trip to a new city', 'plan a trip abroad', 'see a new movie at the cinema', 
                'go on a camping trip', 'attend a music festival'],
    soloOrNot: ['by yourself', 'with your friends', 'with your family', 'with someone you recently met'],
    memories: ['take lots of pictures', 'write your experience in a journal', 'stream it live on Instagram', 'live in the moment']
}

const randIndex = (num) => {
    return Math.floor(Math.random() * num)
}

// Store the activity in an array 
let resolution = [];

// Iterate over the object
for (property in randomiser) {
    let propertyIndex = randIndex(randomiser[property].length);

    switch (property) {
        case 'dayOfWeek':
            resolution.push(`Your next resolution is due this coming ${randomiser[property][propertyIndex]}.`);
            break
        case 'activity':
            resolution.push(`You've wanted to ${randomiser[property][propertyIndex]} for some time now. Let's get to it!`);
            break
        case 'soloOrNot':
            resolution.push(`This time, you should do this ${randomiser[property][propertyIndex]}.`);
            break    
        case 'memories':
            resolution.push(`Memories are very important, be sure to ${randomiser[property][propertyIndex]}.`);
            break   
    }
}

// Format the output of resolution
const formatResolution = resolution => {console.log(resolution.join('\n'))};

formatResolution(resolution);