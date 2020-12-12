"use strict";
// 型の付け方
var hasValue = true;
// JS,TS は number は 浮動小数点数
var count = 10;
var single = 'hello';
// マウスを変数の上に置くと型を確認できる
// VScode の中に TSのコンパイラが内臓されている
// 型推論
var Value;
// オブジェクトの型推論
var person = {
    name: 'Jack',
    age: 21
};
// オブジェクトの型注釈
var animal = {
    name: 'okoge',
    age: 3,
};
// この配列には string しか入れられなくなる
var fruits = ['Apple', 'Banana', 'Orange'];
// ユニオン型。 string と number 両方入れられる
var animals = ['dog', 2];
// tuple型 決まった内容の配列を作る方法
// 型推論ではなく、配列で型注釈をする。この配列は[string, number,boolean]の順しか入れられない
// 4つめの要素は入れられないが、 push などでは入ってしまうので注意
var book = ['business', 1500, false];
// enum型は基本的にパスカルケース、要素は全て大文字
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
// ここの size は CoffeeSize という enum 型の要素しか持てないようになる
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
var unionType = 10;
// unionType は number か string を取りえるが、今は 10 なので toUpperCase() は使えない
// unionType.toUpperCase();
unionType = 'hello';
// こっちでは string が入っているので使えるようになる
unionType.toUpperCase();
// literal 型。 特定の値のみが入れられる。 この apple には 'apple' しか入らない
// const で宣言した変数は literal 型になる
var apple = 'apple';
// literal と union のミックス。 clothSize は この 3つのどれかしか取れない
var clothSize = 'large';
// 関数に型をつける。() の後ろは戻り値の型
// 戻り値は最悪型推論でもいいが、引数は型が書いてなければ any になってしまうので必ず書く
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
// void 型は何も返さない = undefined を返す型
function sayHello() {
    console.log('Hello!');
}
console.log(sayHello()); // undefined
// 関数が入った変数に型をつける。普通のアロー関数はこれ↓
//const number = () => { };
// 型をつけるのは左辺でも右辺でもいい。これは左辺。左辺の場合は戻り値の型の前は => になる
var doubleNumber = function (num) { return num * 2; };
// これは右辺
var tripleNumber = function (num) { return num * 3; };
// コールバック関数に型をつける。num, cb という引数を取るとする。cb は number の引数と戻り値を取る関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
// 引数は 2つ取るので、21, doubleNum という関数を入れる。 doubleNum は cb を行う。
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown 型について
var unknownInput;
var text;
// なんでも入れられる
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// 使うときは typeof で調べてからでないと使えない。 any より厳しい
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never 型について。決して何も返さない
// この関数では何も返さずエラーになるが、 never 型ならエラーにならずに済む
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=index.js.map