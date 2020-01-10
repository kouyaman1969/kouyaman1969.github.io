// app.js var btn = document.getElementById("btn");
var content = document.getElementById("content");
var speak = document.getElementById("speak");
var cancel = document.getElementById("cancel");
//音声認識APIの使用
var speech = new webkitSpeechRecognition();
speech.lang = "ja";
var ssu = null;
btn.addEventListener("click", function() {
	//音声認識をスタート
	speech.start();
} );
speech.addEventListener("result", function(e) {
	//認識された「言葉(text)」を、表示用のdivタグに代入する
	var text = e.results[0][0].transcript;
	content.textContent = text;
} );
speak.addEventListener("click", function() {
	var rate = document.getElementById("rate");
	var pitch = document.getElementById("pitch");
	if (content.textContent != "") {
		//音声合成
		ssu = new SpeechSynthesisUtterance();
		ssu.text = content.textContent;
		ssu.lang = 'ja-JP';
		// 速度 min 0 ~ max 10
		ssu.rate = rate.value;
		// 音程 min 0 ~ max 2
		ssu.pitch = pitch.value;
		alert(ssu);
		speechSynthesis.speak(ssu);
	}
} );
cancel.addEventListener("click", function() {
	alert(ssu);
	speechSynthesis.cancel(ssu);
} );
