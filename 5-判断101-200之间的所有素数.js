var str = '';
var result = 0;

// console.log(169);
for(var i = 101;i <= 200;i++){
	if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0 && i % 13 != 0){
		console.log(i);
		result++;
	}
}
console.log('总数：', result);








