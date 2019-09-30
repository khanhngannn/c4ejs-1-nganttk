let weight = Number(prompt('Your weight in kg?'));
let height = Number(prompt('Your height in cm?'));
let heiConvert = height/100;
let bmi =  (weight/(heiConvert*heiConvert)).toFixed(1);
if(bmi < 16){
    alert(`Your BMI is ${bmi}`);
    alert('You are severely underweight');
}else if(bmi <= 18.5){
    alert(`Your BMI is ${bmi}`);
    alert('You are underweight');
}else if(bmi <= 25){
    alert(`Your BMI is ${bmi}`);
    alert('You are normal');
}else if(bmi <= 30){
    alert(`Your BMI is ${bmi}`);
    alert('You are overweight');
}else{
    alert(`Your BMI is ${bmi}`);
    alert('You are obese');
}