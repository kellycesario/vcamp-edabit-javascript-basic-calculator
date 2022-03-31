function calculator(num1, operator, num2) {
if (num1 != '0' && num2 != '0') { 	
	if (operator == '+') { 
		 result = num1 + num2;
	} 
	if (operator == '-') { 
		result = num1 - num2;
	} 
	if (operator == '/') {
		result = num1 / num2;
	}
	if (operator == '*') { 
		result = num1 * num2;
	}
} 
	if (num2 =='0'){
		result = "Can't divide by 0!";
	} 
		return result;
}
