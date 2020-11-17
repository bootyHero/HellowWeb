var ary=[1,2,3,2,4];
/*
需求：去重；

*/ 
function unique(ary){
    //?第一个for循环，因为是要求前一项要和后几项挨个比较，所以最后一项就没必要在进行比较了，因此是ary.length-1;
    for(var i=0;i<ary.length-1;i++){
        //?第二个for循环，这个是把上一项后面的剩余项都调用出来和他挨个比较，所以就是j=i+1，并且因为是剩余全部，所以是ary.length;
        for(var j=i+1;j<ary.length;j++){
            //*这个就是前一项和他之后的剩余全部项挨个比较
            if(ary[i]==ary[j]){
                //*有相同的就给他删除
                ary.splice(j,1);
                //?如果要是相同的数字成双出现，然后一删除，就会跳过后面那个数字，所以就需要给他j--；让他恢复到上一项，然后再重新比较。
                j--;
            }
        }
    }
    return ary;
}
var ary=[1,2,3,2,2,4,5,4,4,3];
var res=unique(ary);
console.log(res);
