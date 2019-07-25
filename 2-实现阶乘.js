console.log('------ 使用 while 求10的阶乘');
var times = 10;
var whileResult = 1;
while(0 < times){
	whileResult *= times; 
	times--;
};
console.log(whileResult);

console.log('------ 使用do-while 求10的阶乘');
var times = 10;
var doResult = 1;
do{
	doResult *= times;
	times--;
}while(times > 0);
console.log(doResult);

console.log('------ 使用 for 求10的阶乘');
var forResult = 1;
for(var i = 10;i > 0;i--){
	forResult *= i;
};
console.log(forResult);










