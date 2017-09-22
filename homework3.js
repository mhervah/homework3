const func1 = function(num1,num2,num3){
	return num1+num2*num3;
};
const func2 = function(){
	return "inchvor mi ban";
};
const func3 = function(num1,num2){
	console.log(num1/num2);
};
const fullName = function(firstName,lastName){
	return firstName+' '+lastName;
};
const longest = function(str1,str2,str3){
	if(str3.length>=str2.length&&str3.length>=str1.length)
		return str3;
	else if(str2.length>=str3.length&&str2.length>=str1.length)
		return str2;
	else
		return str1;
};
const func4 = function(num1,num2){
	if(num1===num2)
		return 0;
	else if(num1>num2)
		return 1;
	else 
		return -1;
};
const firstTruethy = function(val1,val2,val3){
	return val1||val2||val3;
};
