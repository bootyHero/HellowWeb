// !先创建一个空对象，去遍历数组中的每一项，把数组中的每项都变成属性名和属性值。给此对象添加的过程中，如果此对象已经有了此项，说明重复，就可以删除。
function unique(ary){
    // 创建一个空对象
    var obj={};
    for(var i=0;i<ary.length;i++){
        // item等于ary数组中i所对应的值
        var item=ary[i];
        // 让item和你保存的obj对象中对应的属性值作比较
        if(obj[item]==item){
            // 清除ary数组中的那一项
            ary.splice(i,1);
            i--;
            // 结束本轮，重新循环，下面那个属性名就不用再添加了
            continue;
        }
        // 在obj对象中添加键值对
        obj[item]=item;
    }
    return ary;
}
var ary=[1,3,4,6,3,1,5,6];
var res=unique(ary);
console.log(res);