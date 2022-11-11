// ------------------------------------------------------------
// マウス画像設定＆イベント追加
// ------------------------------------------------------------
var wmouse;
function MouseImage(おろ.gif){
	// イメージオブジェクトを作成
	wmouse = new Image(おろ.gif);
	// イメージオブジェクトのスタイルを設定
	var style = wmouse.style;
	// fixed（画面左上を基点、スクロール無視）を設定
	style.position = "fixed";
	// 画像をセット
	wmouse.src = "../../../image/tmCmanjpIco.gif";

	document.body.appendChild(wmouse);

	// イベント追加
	if(document.addEventListener){
		document.addEventListener("mousemove" , MouseMove);
	}else if(document.attachEvent){
		document.attachEvent("onmousemove" , MouseMove);
	}
}
// ------------------------------------------------------------
// マウスの位置取得＆設定
// ------------------------------------------------------------
function MouseMove(e){
	wmouse.style.left = (e.clientX + 15) + "px";
	wmouse.style.top  = (e.clientY + 15) + "px";
}
// ------------------------------------------------------------
// イベント削除＆画像削除
// ------------------------------------------------------------
function MouseRelease(){
	if(!wmouse)	return;
	if(document.removeEventListener){
		document.removeEventListener("mousemove" , MouseMove);
	}else if(document.detachEvent){
		document.detachEvent("onmousemove" , MouseMove);
	}
	if(wmouse.parentNode){
		wmouse.parentNode.removeChild(wmouse);
	}
	wmouse = null;
}

