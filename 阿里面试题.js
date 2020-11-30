 
//* 变量提升：
//! 因为var和function声明的变量一样，后者会把前者替换
/*function Foo
function getName ：console5======》console4===》console1*/

function Foo(){
    //getName在foo里不是私有的,相当于把全局的getName值进行了更改
    getName=function(){
      console.log(1);
    };
    //*this=window
    return this;
}
//?Foo作为对象,添加一个属性 getName---console2
Foo.getName=function(){
    console.log(2);
}
//?作为类 往原型上添加公有的方法getName,因为getName后面是一个函数,所以是一个方法-----console3
Foo.prototype.getName=function(){
    console.log(3);
}
//? 代码自上而下赋值的时候，相当于把全局的getName值更改了
var getName=function(){
    console.log(4);
}
//? 普通函数
function getName(){
    console.log(5);
}
Foo.getName(); // 2 对象，
getName(); // 4 普通函数的执行,输出的是全局的getName，但是全局的值已经被更改，所以是4
Foo().getName();// 因为foo()输出的结果是this,所以可以看做是:window.getName();全局的getName===> console1
getName();//同上 ==>console1
new Foo.getName(); // 先执行foo.getName(),后执行new。==>2
new Foo().getName();// 把new Foo() 当成构造函数,函数里面的this就是这个实例(f1),f1.getName();先找自己私有的getName,私有无,去原型上找，找到getName ==>console3 
new new Foo().getName();//先算后面的new Foo(),然后.getName(),最后再执行new,相当于new(3),==>console3
