// 型の付け方
let hasValue: boolean = true;
// JS,TS は number は 浮動小数点数
let count: number = 10;
let single: string = 'hello';

// マウスを変数の上に置くと型を確認できる
// VScode の中に TSのコンパイラが内臓されている

// 型推論
let Value: boolean;

// オブジェクトの型推論
const person = { 
    name: 'Jack',
    age: 21
}
// オブジェクトの型注釈
const animal: {
    name: string; // ここはセミコロン
    age: number;
} = {
    name: 'okoge',
    age: 3, 
}

// この配列には string しか入れられなくなる
const fruits: string[] = ['Apple', 'Banana', 'Orange'];
// ユニオン型。 string と number 両方入れられる
const animals = ['dog', 2]