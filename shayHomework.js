// function to convert height if needed
function convertHeight(height, isMetric) {
    const checkType = typeof height == 'number';
    if (checkType && !isMetric) {
        return isMetric ? height : Math.floor((height * 2.54) * 100) / 100;
    } else {
        console.log(`Number entered was the wrong type! Type passed: ${typeof height}`);
    }
};

// height must be entered in inches or centimeters
// isMetric is a boolean, if your height is in centimeters, pass true. If in inches pass false
const howTall = (height, isMetric) => {
    const heights = ['tall', 'really tall'];
    if (isMetric) {
        console.log(`You are ${height <= 172 ? heights[0] : heights[1]}!`);
    } else {
        const convertedHeight = convertHeight(height, isMetric);
        console.log('our converted height: ', convertedHeight)
        console.log(`You are ${convertedHeight <= 172 ? heights[0] : heights[1]}!`)
    }
};

// get my favorite food
function myFavoriteFood() {
    const myTopThreeFoods = ['pizza', 'chicken', 'burger'];
    const ourCurrentFavorite = myTopThreeFoods[Math.floor(Math.random() * 3)];
    console.log(`My favorite food is: ${ourCurrentFavorite}`)
}

// what vehicle will I take to work.
// 3 acceptable params to pass: 'clear', 'rain', 'snow' 
const whatToDrive = (weatherCondition) => {
    switch (weatherCondition) {
        case 'clear':
            console.log('I will take the car to work today!')
            break;
        case 'rain':
            console.log('I will take the truck to work today!')
            break;
        case 'snow':
            console.log('Im not going to work today! :P')
            break;
        default:
            console.log(`check the weather condition you passed. make sure its either: 'clear', 'rain', or 'snow'`)
    }
};

// what is my favorite activity depending on the current time
function myFavoriteActivity() {
    const now = new Date();
    const hoursNow = now.getHours();
    if (hoursNow <= 9) {
        console.log('My favorite activity is getting a nice coffee.');
    } else if (hoursNow > 9 && hoursNow <= 16) {
        console.log('My favorite activity is going for a walk.');
    } else {
        console.log('My favorite activity is going out for a nice meal. :)');
    }
};

function runProgram() {
    
  console.log(howTall(72, false));
  console.log(myFavoriteFood());
  console.log(myFavoriteActivity());
  console.log(whatToDrive('clear'))
  
  return 'Program was ran. Check the console.';  
};

runProgram();