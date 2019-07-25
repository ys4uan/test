num = 1200;
var str = num + ' = ';

for(var i = 2;i < num - 1;i++){
	if(num % i == 0){
		num /= i;
		str += i + '*';
		i = 1;
	}
}
console.log(str + num);










