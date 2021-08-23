function BMI()
{
var height=document.getElementById('height').value;
var weight=document.getElementById('weight').value;
var bmi=weight/(height/100*height/100);
var bmivalue=(bmi.toFixed(2));
document.getElementById("result").innerHTML="Your BMI is "  +   bmivalue;
}
