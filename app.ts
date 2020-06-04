function add(n1: number, n2:number): string{
    return (n1 + n2).toString();
}

function printResult(res: string):void {
    console.log(res);
}

function printResult2(res: string):undefined {
    console.log(res);
    return;
}


let a: (a:number, b:number) => string;
a = add;

// unknown 和 any 很像，但是在赋值的时候，unknown不可以赋值给特定的变量，除非做判断。

// let a: string = 'hahaah';
// let b: any;
// b = 4;
// a =b;

// 这个是可以的，不会出错。但是会有runtime错误。

// let a: string = 'hahaah';
// let b: unknown;
// b = 4;
// a =b;

// 这个就会报错。

// let a: string = 'hahaah';
// let b: unknown;
// b = 4;

// if(typeof b ==='string') {
//     a =b;
// }


// never type 用作永远都不会执行下一行代码的function， 比如throw error
function generateErrorHandling(message: string, code: number): never {
    throw ({message, code});
}

generateErrorHandling('This is a bug', 404);
