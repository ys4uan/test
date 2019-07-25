
var result = 0;
for(var i = 1;i < 5;i++)
	for(var j = 1;j < 5;j++)
		for(var z = 1;z < 5;z++){
			if(i == j || i == z || j == z){
				continue;
			}
			result++;
		}

console.log(result);









