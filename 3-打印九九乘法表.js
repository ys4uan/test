console.log('------ 第一种方式 for');

var str = '';
for(var i = 1;i <= 9;i++){
	for(var j = 1;j <= i;j++){
		str += j + '*' + i + '=' + i*j + '\t';
	};
	str += '\n';
};
console.log(str);

console.log('------ 第二种方式 while');

var str = '';
var handleRow = 1;
while(handleRow < 10){
	var handleColunm = 1;
	while(handleColunm <= handleRow){
		str += handleColunm + '*' + handleRow + '=' + handleRow*handleColunm + '\t';
		handleColunm += 1;
	};
	handleRow += 1;
	str += '\n';
};

console.log(str);

console.log('------ 第三种方式 do-while');

var str = '';
var handleRow = 1;
do{
	var handleColunm = 1;
	do{
		str += handleColunm + '*' + handleRow + '=' + handleRow*handleColunm + '\t';
		handleColunm += 1;
	}while(handleColunm <= handleRow);
	handleRow += 1;
	str += '\n';
}while(handleRow < 10);

console.log(str);

console.log('------ 第四种方式 ');




















