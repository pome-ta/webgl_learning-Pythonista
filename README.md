# webgl_learning-Pythonista

> 2020/11/27

iOS アプリの[Pythonista3](http://omz-software.com/pythonista/) を使い


[wgld](https://wgld.org/) をメインに、GLSL を勉強するリポジトリ




## 実行方法

1) このリポジトリをPythonista にダウンロード
1) Pythonista で`run.py` を実行


Pythonista でないなら`html` から~~ローカルで動くはず~~ localServer 立ち上げるです😇


## ブランチの切り方

`main` を現在の最新の項として、項毎にブランチを切ってる<br>使い方正しいかわらんけど


(tag とかで普通管理するのかしら？)




## JavaScript のコーデング

なるべくES2015(ES6) で書くようにしてる


`var` -> `let` or `const` とか


Pythonista の`wkwebview` での動作確認しかしてないので、他ブラウザの挙動は不明


### `minMatrixES.js`

[行列演算とライブラリ](https://wgld.org/d/webgl/w010.html) の項のライブラリを一部 ES2015(6) に書き換え


`minMatrix.js` -> `minMatrixES6.js` としている


- `export default`
- `var` -> `const` or `let`

程度の書き換え


> wgld.org オリジナル行列演算ライブラリ
> [minMatrix.js](https://wgld.org/j/minMatrix.js)



## `wkwebview`

Pythonista の`ui` モジュールにある`ui.WebView` が、`UIWebView`


`objc-util` より、`WKWebView` を呼び出せる[pythonista-webview](https://github.com/mikaelho/pythonista-webview) を使用


## Eruda

スマートデバイス用Webブラウザー向け開発コンソール(クッソ便利)

- [Eruda](https://eruda.liriliri.io/)


- [Eruda Github](https://github.com/liriliri/eruda)


cdn.jsdelivr から呼び出し



