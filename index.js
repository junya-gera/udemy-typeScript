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
    age: 3
};
// この配列には string しか入れられなくなる
var fruits = ['Apple', 'Banana', 'Orange'];
// ユニオン型。 string と number 両方入れられる
var animals = ['dog', 2];
// tuple型 決まった内容の配列を作る方法
// 型推論ではなく、配列で型注釈をする。この配列は[string, number,boolean]の順しか入れられない
// 4つめの要素は入れられないが、 push などでは入ってしまうので注意
var book = ['business', 1500, false];
