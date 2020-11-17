var ary=[8,2,1,5];
function mySort(ary){
    //! ary.length-1代表你总共要比的轮数
    for(var i=0;i<ary.length-1;i++){
        //! ary.length-1-i;表示你总共要比的次数
        for(var j=0;j<ary.length-1-i;j++){
            if(ary[j]>ary[j+1]){
                //* 想让前一项和后一项换位置，需要先将前一项的值存放在一个盒子内，然后将存放的值再放在后一项里。
                //? 和隔行变色原理一样
                var temp=ary[j];
                ary[j]=ary[j+1];
                ary[j+1]=temp;
            }
        }
    }
    return ary;
}
var res=mySort(ary);
console.log(res);