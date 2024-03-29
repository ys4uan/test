function myAjax(method,url,param,handle,handle2){
    // 后台服务器的地址和端口号
    var basePath = 'http://134.175.154.93:8099/'
    // handle当内部的异步执行成功的回调函数，在这个回调函数里，咱们需要将后台返回的数据交给handle
    var http = new XMLHttpRequest();
    // 在这里处理get有参的情况
    if(method === 'GET' && param){
        url += '?'+encodeFormData(param);
    }
    http.open(method, basePath+url);
    console.log(basePath+url);
    http.onreadystatechange = function(){
        if(http.status === 200 && http.readyState === 4){
            console.log('访问成功');
            handle(JSON.parse(http.responseText));
        }else if(http.status !== 200){
            // console.log(http.readyState);
            handle2('错误');
        }
    }
    
    if(method === 'POST' && param){
        http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
        http.send(encodeFormData(param));
    }else{
        http.send();
    }
}

// 将js的对象转换为表单格式数据
function encodeFormData(data){
    if(!data){
        return "";
    }
    var pairs = [];
    for(var name in data){
        if(!data.hasOwnProperty(name)){
            continue;
        }
        if(typeof data[name] == "function"){
            continue;
        }
        var value = data[name].toString();
        name = encodeURIComponent(name.replace("%20","+"));//编码名字
        value = encodeURIComponent(value.replace("%20","+"));//编码值
        pairs.push(name+"="+value);
    }
    return pairs.join('&');
    }