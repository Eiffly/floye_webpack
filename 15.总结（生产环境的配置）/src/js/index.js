// 1.2.css less文件
import '../css/a.css'
import '../css/b.less'

//3.处理兼容性文件
const add = (x, y) => {
    return x + y;
};
console.log(add(2, 5));
const promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('定时器执行完了~');
        resolve();
    }, 1000);
});
console.log(promise);
