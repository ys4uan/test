
for(var i = 100;i < 1000;i++){
	var geWei = i % 10;
	var shiWei = parseInt(i / 10 )% 10 ;
	var baiWei = parseInt(i / 100) % 10;

	if(geWei*geWei*geWei + shiWei*shiWei*shiWei + baiWei*baiWei*baiWei == i){
		console.log(i);
	}
}











