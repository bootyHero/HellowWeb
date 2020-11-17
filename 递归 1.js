// 打印1到10
function fn(num){
    if(num>10){
        return;
    }
    console.log(num);
    fn(num+1);
}
fn(1);

    var text=0;
    for(var i=1;i<=100;i++){
        text=text+i;
    }


// 一到一百的和
function total(num){
    if(num>100){
        return 0;
    }
    return num+total(num+1);
}
total(1);


// 求一百中同时能被2和3整除的数之和
function total(num){
    if(num>100){
        return 0;
    }
    if(num%2==0 && num%3==0){
       return num+fn(num+1);
    }
    return total(num+1)
}
total(1)


var text=0;
for(var i=1;i<=100;i++){
    if(i%2==0 && i%3==0){
        text=text+i;
    }
}
console.log(text);



var ary=[2,4,5,3,2,4,4,7,8,5];
function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        for(var j=i+1;j<ary.length;j++){
            if(ary[i]==ary[j]){
                ary.splice(j,1);
                 j--;
            }
        }
    }
    return ary;
}
var res=unique(ary);
console.log(res);

var ary=[2,4,5,3,2,4,4,7,8,5];
function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        item=ary[i];
        if(obj[item]==item){
           ary.splice(i,1);
           i--;
        }
        obj[item]=item;
    }
    return ary;
}
var res=unique(ary);
console.log(res);

