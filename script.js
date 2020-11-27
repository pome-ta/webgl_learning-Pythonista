/*
  コンテキストの初期化
  https://wgld.org/d/webgl/w007.html
*/

'use strict';
onload = function(){
  // canvasエレメントを取得
  const c = document.getElementById('canvas');
  c.width = 500;
  c.height = 300;
  
  // webglコンテキストを取得
  const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
  
  // canvasを黒でクリア(初期化)する
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
};


