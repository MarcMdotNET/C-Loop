//get the values from the page
//start or controller function
function getValues() {

    //get values from the page
    let _startValue = document.getElementById("startValue").value;
    let _endValue = document.getElementById("endValue").value;

    //we need to validate our input
    //parse into Integers
    _startValue = parseInt(_startValue);
    _endValue = parseInt(_endValue);
    
    if(Number.isInteger(_startValue) && Number.isInteger(_endValue)) {

        //we call generateNumbers
        let _numbersArray = generateNumbers(_startValue, _endValue);

        //we call displayNumbers
        displayNumbers(_numbersArray);

    } else {

        alert("You must enter integer numbers!");

    }

}

//generate numbers from the start value to the end value
//logic function(s)
function generateNumbers(startValue, endValue) {

    let _numbersArray = [];

    //we want to get all numbers from start to end
    for (let _index = startValue; _index <= endValue; _index++) {

        //this will execute in a loop until index = eValue
        _numbersArray.push(_index);

    }

    return _numbersArray;

}

//display the numbers and mark the even numbers bold
//display or view function
function displayNumbers(numbersArray) {
    
    let _appPageRows = "";

    for (let _index = 0; _index < numbersArray.length; _index++) {

        let _cssClass = "oddNumber";
        let _number = numbersArray[_index];

        if (_number % 2 == 0) {

            _cssClass = "evenNumber";

        } else {

            _cssClass = "oddNumber";

        }

        _appPageRows += `<tr><td class="${_cssClass}">${_number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = _appPageRows;

}
