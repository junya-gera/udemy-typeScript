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

// tuple型 決まった内容の配列を作る方法
// 型推論ではなく、配列で型注釈をする。この配列は[string, number,boolean]の順しか入れられない
// 4つめの要素は入れられないが、 push などでは入ってしまうので注意
const book: [string, number, boolean] = ['business', 1500, false];

// enum型は基本的にパスカルケース、要素は全て大文字
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI',
}

// ここの size は CoffeeSize という enum 型の要素しか持てないようになる
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
}

let unionType: number | string = 10;
// unionType は number か string を取りえるが、今は 10 なので toUpperCase() は使えない
// unionType.toUpperCase();
unionType = 'hello';
// こっちでは string が入っているので使えるようになる
unionType.toUpperCase();

// literal 型。 特定の値のみが入れられる。 この apple には 'apple' しか入らない
// const で宣言した変数は literal 型になる
const apple = 'apple';

// type エイリアス。変数宣言のように型に名前をつけることができる
type ClothSize = 'small' | 'medium' | 'large';

// literal と union のミックス。 clothSize は この 3つのどれかしか取れない
let clothSize: ClothSize = 'large';


// 関数に型をつける。() の後ろは戻り値の型
// 戻り値は最悪型推論でもいいが、引数は型が書いてなければ any になってしまうので必ず書く
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(1, 2);

// void 型は何も返さない = undefined を返す型
function sayHello(): void {
    console.log('Hello!');
}

console.log(sayHello()); // undefined