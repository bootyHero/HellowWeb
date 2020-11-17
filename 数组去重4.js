var ary=[1,3,1,2,3,2,4];
function unique(ary){
     // 首先创建一个新数组
          var newAry=[];
          // for循环
          for(var i=0;i<ary.length;i++){
               // if判断，判断新数组中有没有这个项，没有就是-1，没有就给他添加到新数组中。
          if(newAry.indexOf(ary[i])==-1){
               // push：给数组的末尾添加项
               newAry.push(ary[i]);
          }
     }
     return newAry;
     }
var res=unique(ary);
console.log(res);