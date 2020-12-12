"use strict";
// tsc compiler.ts --watch で watch モードになり、保存するたびに JS にコンパイルしてくれる
var isActive = true;
var likeCount = 10;
var hello = 'hello';
// hello(string) が toUpperCase を使えることを TS はどのように知っている？
// → メソッドを Ctrl + クリックしたとき、 lib が開かれる。
// TS をインストールしたときに同時に作られる「型の定義書」。
console.log(hello.toUpperCase());
//# sourceMappingURL=compiler.js.map