// app.js

var btn1 = document.getElementById("btn1");
var content1 = document.getElementById("content1");
var btn2 = document.getElementById("btn2");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");

//音声認識APIの使用
var speech1 = new webkitSpeechRecognition();
speech1.lang = "ja";
var speech2 = new webkitSpeechRecognition();
speech2.lang = "ja";

btn1.addEventListener("click", function() {
	//音声認識をスタート
	speech1.start();
	//クリア
	content1.textContent = "-----";
	content2.textContent = "-----";
	content3.textContent = "-----";
} );
speech1.addEventListener("result", function(e) {
	//認識された「言葉(text)」を、表示用のdivタグに代入する
	var text = e.results[0][0].transcript;
	content1.textContent = text;
} );

btn2.addEventListener("click", function() {
	//音声認識をスタート
	speech2.start();
	//クリア
	content2.textContent = "-----";
	content3.textContent = "-----";
} );
speech2.addEventListener("result", function(e) {
	//認識された「言葉(text)」を、表示用のdivタグに代入する
	var text = e.results[0][0].transcript;
	content2.textContent = text;
	//計算
	var text1 = content1.textContent;
	var text2 = content2.textContent;
	var int1 = parseInt(text1, 10);
	var int2 = parseInt(text2, 10);
	var int3 = int2 - int1;
	content3.textContent = String(int3) + "円";
} );
