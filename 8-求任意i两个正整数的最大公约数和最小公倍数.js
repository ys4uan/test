var num1 = 20;
var num2 = 40;

var gcd;
var lcm;
if(num1 < num2){
	console.log(getGCD(num2, num1));
	console.log(getLCM(num2, num1));
}else{
	console.log(getGCD(num1, num2));
	console.log(getLCM(num1, num2));
}

function getGCD(m ,n){
// 默认 m > n
GC:for(var i = n;n >= 1;i--){
		if(m % i == 0 && n % i == 0){
			return i;
			break GC;
		}
	}	
}

function getLCM(m, n){
// 默认 m > n
	for(var i = m;i <= m*n;i++){
		if(i % m == 0 && i % n == 0){
			return i;
			break;
		}
	}
}







