Function.prototype.myCall=function(obj,...str){
    obj=obj||window;
    var res=null;
    obj.$fn=this;   //第一步：相当于给obj里面创建了一个属性，名为$fn，值为fn
    res=obj.$fn(...str);   //第二步：让函数执行，这已经让函数执行中的this变为了obj，返回结果用res承接。
    delete obj.$fn;  //因为你是自己在obj中添加了一个属性，所以你需要运算结束之后，把添加的那个属性再删掉。删除对象中的属性用delete。
    return res;
}
function fn(x,y){
    console.log(this);
    return x+y;
}
var obj={name:"JavaScript",fn:fn};
var res=fn.myCall(obj,1,2);
console.log(res);
