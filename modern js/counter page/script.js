const countValue = document.querySelector('#counter'); //counter ki value nikal li

const increment = () => {
    // get the value
    let value = parseInt(countValue.innerText); 
    //parseInt for converting string value into int as we get string value from innertext

    // update the value
    value = value+1;
    // set the value onto UI
    countValue.innerText = value;

};


const decrement = () => {
 // get the value
 let value = parseInt(countValue.innerText); 
 //parseInt for converting string value into int as we get string value from innertext

 // update the value
 value = value-1;
 // set the value onto UI
 countValue.innerText = value;


};