/* 2. Add JS code to display your full name inside h1 element and add the following style (align
center and color gray or #A9A9A9) (20 points) */


var h1 = document.createElement('h1');
h1.innerText = "Laurainda Fan";
h1.setAttribute("align", "center");
h1.style.color = "#A9A9A9";
document.body.appendChild(h1);



/* 3. Add JS code to append two input elements and one buton, when click the buton, the sum of
these two numbers will show on the page. (30 points) */

var sum_div = document.createElement("div");
var num1 = document.createElement("input");
num1.setAttribute("type", "text");
num1.setAttribute("id", "num1");
num1.setAttribute("placeholder", "Num 1");


var num2 = document.createElement("input");
num2.setAttribute("type", "text");
num2.setAttribute("id", "num2");
num2.setAttribute("placeholder", "Num 2");

var sum_button = document.createElement("button");
sum_button.setAttribute("type", "button");
sum_button.innerHTML = "Add Num1 & Num2";

var sum = document.createElement("div");
sum.id = "sum";

var not_num = document.createElement("div"); // for part 4
not_num.id = "not_num"; // for part 4

sum_div.appendChild(not_num);
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(num1);
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(num2);
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(sum_button);
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(document.createElement("br"));
sum_div.appendChild(sum);
sum_div.appendChild(document.createElement("br"));


sum_button.addEventListener("click", function(){
	
	not_num.innerText = "";
	sum.innerText = "";
	num1.style.borderColor = "black";
	num2.style.borderColor = "black";
	
	if (num_check(num1,num2) ) {
		sum.innerText = "Sum is " + (parseFloat(num1.value) + parseFloat(num2.value) );
	}
});

document.body.appendChild(sum_div);


/* 4. Add JS code to create an arrow function to validate the value of two input boxes (use try
catch). Only the number is validated. If input is not number, show the error message on the
page (DO NOT USE ALERT) and set the input box with red border. (30 points) */

var num_check = (input1, input2) => {
	var result = true;
	try {
		if ( isNaN(input1.value) || input1.value === "" ) throw input1.id;
	}
	catch (err) {
			not_num.innerHTML += err + " is not a number. <br>"
			input1.style.border = "solid";
			input1.style.borderColor = "red";
			result = false;
	}
	try {
		if ( isNaN(input2.value)  || input2.value === ""  ) throw input2.id;
	}
	catch (err) {
			not_num.innerHTML += err + " is not a number. <br>"
			input2.style.border = "solid";
			input2.style.borderColor = "red";
			result = false;
	}
	return result;
}
	


/* 5. Add JS code to style your page. */

document.style.backgroundColor = "#2E8BC0";