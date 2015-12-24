var COLOR = [0,0,0];
var SYMBOL = 0;
var BORDER = 150;

var GUILDNAME = "";
	
var HUMANIMG;
var NAMEKIMG;
var MAJINIMG;

var BINIMG;

var SELECTEDRACE = 0; //0: human, 1: namek, 2:majin

var background_list = new Array();

var COLORLIST = [[158,11,15],[237,28,36],[255,70,70],[255,102,0],[255,186,0],[255,245,118],[159,220,71],[89,255,152],[75,134,9],[0,108,33],[60,186,146],[0,115,106],[1,255,255],[0,174,239],[0,84,165],[0,0,190],[133,95,168],[145,39,143],[143,35,244],[237,0,140],[158,0,92],[48,0,74],[149,149,149],[85,85,85],[140,98,58],[90,56,17],[172,66,0],[255,146,187],[128,89,113],[58,66,52],[255,255,255],[0,0,0]]
var KANJI = [ [0, "&#20096; - kame<br><i>turtle</i><br><b>Master Roshi</b>"], [1, "&#31070; - kami<br><i>god</i><br><b>Kami</b>"],  [2, "&#24735; - go<br><i>enlightenment</i><br><b>Goku</b>"],  [3, "&#40372; - tsuru<br><i>crane</i><br><b>Master Shen</b>"],  [4, "&#39764; - ma<br><i>demon</i><br><b>King Piccolo</b>"],  [5, "&#27578; - satsu<br><i>kill/murder</i><br><b>Mercenary Tao</b>"],  [6, "&#27138; - raku<br><i>happy/music</i><br><b>Yamcha</b>"],  [7, "&#22825; - ten<br><i>heavens</i><br><b>Tien</b>"],  [8, "&#20814; - to<br><i>rabbit</i><br><b>Monster Carrot</b>"],  [9, "&#21892; - zen<br><i>good</i>"],  [10, "&#24746; - aku<br><i>evil</i>"],  [11, "&#32854; - hijiri<br><i>holy/saint/master</i>"],  [12, "&#40845; - ryuu<br><i>dragon/imperial</i>"],  [13, "&#25126; - sen<br><i>war/battle</i>"],  [14, "&#38450; - bou<br><i>defend/protect</i>"],  [15, "&#36229; - chou<br><i>transcend/super-</i>"],  [16, "&#24535; - kokorozashi<br><i>plans/hopes</i>"],  [17, "&#26032; - shin<br><i>new</i>"],  [18, "&#20553; - i<br><i>admirable/greatness"],  [19, "&#27683; - ki<br><i>spirit/energy</i>"],  [20, "&#23551; - kotobuki<br><i>longevity/life</i>"],  [21, "&#29275; - gyuu<br><i>ox</i><br><b>Ox King</b>"],  [22, "&#39135; - shoku<br><i>to eat</i><br><b>Yajirobe</b>"],  [23, "&#38646; - rei<br><i>nothing/zero</i>"],  [24, "&#22769; - ichi<br><i>I/one</i>"],  [25, "&#24336; - ni<br><i>two</i>"],  [26, "&#21442; - san<br><i>three</i>"],  [27, "&#30334; - hyaku<br><i>one hundred</i>"],  [28, "&#21315; - sen<br><i>one thousand</i>"], [29, "&#19975; - man<br><i>ten thousand</i>"], [30, "&#20740; - oku<br><i>hundred million</i>"], [31, "&#27494; - mu/bu<br><i>martial arts</i><br><b>Mutaito</b>"], [32, "&#30333; - shiro<br><i>white</i>"], [33, "&#40658; - kuro<br><i>black</i>"], [34, "&#33980; - ao<br><i>blue</i>"], [35, "&#32005; - hong<br><i>crimson/deep red</i>"], [36, "&#40644; - ki<br><i>yellow</i>"], [37, "&#32209; - midori<br><i>green</i>"], [38, "&#32043; - murasaki<br><i>purple</i>"], [39, "&#37504; - gin<br><i>silver</i>"], [40, "&#37329; - kin<br><i>gold</i>"], [41, "&#20803; - moto/yuan<br><i>beginning/origin</i>"], [42, "&#29577; - tama/yu<br><i>jewel</i>"], [50, "&#30495; - shin<br><i>reality/truth</i>"], [51, "&#22855; - ki<br><i>strange</i>"], [52, "&#29467; - mou<br><i>fierce/wild</i>"], [53, "&#40599; - rei<br><i>lovely</i>"], [54, "&#27005; - raku<br><i>happy/music</i>"], [55, "&#28961; - mu<br><i>nothingness</i>"], [140, "&#24859; - ai<br><i>love</i>"], [141, "&#24107; - shi<br><i>expert/master</i>"], [142, "&#37034; - ja<br><i>wicked/unjust</i>"], [143, "&#34382; - tora/ko<br><i>drunkard/tiger</i>"], [144, "&#22818; - yume<br><i>dream/illusion</i>"], [145, "&#33775; - hana<br><i>flower</i>"], [146, "&#25731; - geki<br><i>attack/defeat</i>"], [147, "&#24525; - nin<br><i>endure</i>"], [148, "&#35199;&#39277; - nishimeshi<br><i>western rice</i><br><b>Paella</b>"], [149, "&#30028;&#29579; - kaiou<br><i>king of worlds</i><br><b>King Kai</b>"],];
init();


function setcolor(clazz, colorlistindex){
	switch(clazz){
		case "symbol":
			COLOR[0] = colorlistindex;
		break;
		case "border":
			COLOR[1] = colorlistindex;
		break;
		case "background":
			COLOR[2] = colorlistindex;
		break;
		default: break;
	}
	render();
}

function getUint32(bytearray, offset){
	var tmpI = (bytearray[offset + 3] << 24) + (bytearray[offset +  2] << 16) + (bytearray[offset + 1] << 8) + bytearray[offset];
	return tmpI;
}

function abToB64( buffer ) {
    var binary = '';
    var len = buffer.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( buffer[ i ] );
    }
    return btoa( binary );
}

function abToStr(buffer){
    var binary = '';
    var len = buffer.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( buffer[ i ] + 30/*<-- IE, Edge bug */);
    }
    return binary;	
}

function color(data, colorindex){
	for(var i = 0; i < data.length; i += 4){
		if(data[i + 3] != 0){
			var colorer = COLORLIST[COLOR[colorindex]];
			data[i] = colorer[0];
			data[i + 1] = colorer[1];
			data[i + 2] = colorer[2];
		}
	}
}

function render(){
	var canvas = document.getElementById("preview");
	var charcanvas = document.getElementById("char_preview");
	var ctx = canvas.getContext("2d");
	var charctx = charcanvas.getContext("2d");
	
	var offscreenc = document.createElement("canvas");
	var offcnv = offscreenc.getContext("2d");
	//document.body.appendChild(offscreenc);
	
	var brd = document.getElementById(BORDER);
	var bkg = background_list[BORDER - 150];
	var smb = document.getElementById(SYMBOL);
	
	ctx.putImageData(ctx.createImageData(128,128),0,0);
	
	var data;
	var imgData;
	offcnv.drawImage(bkg, 0, 0, 128, 128);
	imgData = offcnv.getImageData(0,0,128,128);
	data = imgData.data;
	color(data, 2);
	ctx.putImageData(imgData,0,0);
	
	offcnv.putImageData(offcnv.createImageData(128,128),0,0);
	offcnv.drawImage(brd, 0, 0, 128, 128);
	imgData = offcnv.getImageData(0,0,128,128);
	data = imgData.data;
	color(data, 1);
	offcnv.putImageData(imgData,0,0);
	ctx.drawImage(offscreenc,0,0);
	
	offcnv.putImageData(offcnv.createImageData(128,128),0,0);
	offcnv.drawImage(smb, 0, 0, 128, 128);
	imgData = offcnv.getImageData(0,0,128,128);
	data = imgData.data;
	color(data, 0);
	offcnv.putImageData(imgData,0,0);
	ctx.drawImage(offscreenc,0,0);
	
	charctx.putImageData(charctx.createImageData(300,200),0,0);
	switch(SELECTEDRACE){
		case 0:
			charctx.drawImage(HUMANIMG, 60, 80, 105, 120);
			break;
		case 1:
			charctx.drawImage(NAMEKIMG, 60, 80, 105, 120);
			break;
		case 2:
			charctx.drawImage(MAJINIMG, 60, 80, 105, 120);
			break;
	}
	
	charctx.font = "20px bold Arial";
	charctx.fillStyle = "yellow";	
	var strGuild = "<" + ((GUILDNAME == "") ? "YourGuildName" : GUILDNAME) + ">";
	var offsetDraw = 90; // 160 - ((strGuild.length)*10);
	charctx.fillText(strGuild, offsetDraw, 40);
	
	charctx.fillStyle = "orange";	
	charctx.fillText("Username", offsetDraw, 70);
		
	charctx.drawImage(canvas, -70+offsetDraw, 20, 60, 60);
	
	charctx.font = "20px bold Arial";
	//charctx.strokeStyle = "#ABABAB";	
	charctx.fillStyle = "#ABABAB";	
	charctx.lineWidth = 0.4;	
	//charctx.strokeText("►", 280, 110);
	charctx.fillText("►", 280, 110);
	charctx.fillText("◄", 0, 110);
	
	
}

function showKanji(e){
	var kanjiinfo = document.getElementById("kanjiinfo");
	
	for(var i = 0; i < KANJI.length; i++){
		if(KANJI[i][0] == Number(this.id)){
			kanjiinfo.innerHTML = KANJI[i][1];
		}
	}
	
	kanjiinfo.style.visibility = "visible";
	kanjiinfo.style.left = ((e.pageX + 10) - kanjiinfo.offsetParent.offsetLeft) + "px";
	kanjiinfo.style.top = ((e.pageY + 10) - kanjiinfo.offsetParent.offsetTop) + "px";
}

function moveKanji(e){
	var kanjiinfo = document.getElementById("kanjiinfo");
	
	kanjiinfo.style.left = ((e.pageX + 10) - kanjiinfo.offsetParent.offsetLeft) + "px";
	kanjiinfo.style.top = ((e.pageY + 10) - kanjiinfo.offsetParent.offsetTop) + "px";
}

function hideKanji(e){
	var kanjiinfo = document.getElementById("kanjiinfo");
	kanjiinfo.style.visibility = "hidden";
}

function addKanji(img, file_count){
	for(var i = 0; i < KANJI.length; i++){
		if(KANJI[i][0] == file_count){
			document.getElementById(file_count).addEventListener("mouseover", showKanji);
			document.getElementById(file_count).addEventListener("mousemove", moveKanji);
			document.getElementById(file_count).addEventListener("mouseout", hideKanji);
		}
	}
}

function imageInit(byteArray){
	var symbols = document.getElementById("symbols");
	var backgrounds = document.getElementById("backgrounds");		
	var offset = 0;
	var file_size;
	var file_count = 0;
	for (var i = 0; i < byteArray.byteLength;) {
		//Symbol Image loads
		if(file_count < 150){
			file_size = getUint32(byteArray, offset);
			var img = new Image(128,128);
			
			img.id = file_count;
			img.addEventListener("click", function(){SYMBOL = this.id; render();});
			img.src = "data:image/png;base64," + abToB64(byteArray.subarray(offset + 4, offset + file_size + 4));
			offset += file_size + 4;
			
			symbols.appendChild(img);
			
			addKanji(img, file_count);
		//Background and Border Image load
		} else if(file_count < 250){
			file_size = getUint32(byteArray, offset);
			var img = new Image(128,128);
			
			img.id = file_count;
			img.addEventListener("click", function(){BORDER = this.id; render();});
			img.src = "data:image/png;base64," + abToB64(byteArray.subarray(offset + 4, offset + file_size + 4));
			offset += file_size + 4;
			
			backgrounds.appendChild(img);
		} else {
			file_size = getUint32(byteArray, offset);
			var img = new Image(128,128);
			
			img.style.width = "128px";
			img.style.height = "128px";
			img.src = "data:image/png;base64," + abToB64(byteArray.subarray(offset + 4, offset + file_size + 4));
			offset += file_size + 4;
			
			background_list[file_count - 250] = img;
		}
		file_count++;
		i = offset;
	}
}

function inlineParse(string){
	
	var buffer = new Uint8Array(string.length);	
	
	for(var i = 0; i < string.length; ++i){
		buffer[i] = string.charCodeAt(i) - 30 /*<-- IE, Edge bug */;
	}
	return buffer;
}

function init(){
	//add click event for char preview canvas
	var charcanvas = document.getElementById("char_preview");
	charcanvas.addEventListener("click", function(e){ 
		if(e.offsetX < 20 /*&& e.offsetY < 120 && e.offsetY > 80*/){
			SELECTEDRACE--;
			if(SELECTEDRACE == -1) SELECTEDRACE = 2;
		} else if(e.offsetX > 280 /*&& e.offsetY < 120 && e.offsetY > 80*/){
			SELECTEDRACE++;
			if(SELECTEDRACE == 3) SELECTEDRACE = 0;
		}
		render();
	});
	
	//disallow characters in guildname input
	var g = document.getElementById("guildname");
	g.onkeypress = function(e){ return e.which != 32; };
	
	var symbol = document.getElementById("symbol");
	
	for(i = 0; i < 16 * 2; ++i){
		var div = document.createElement("a");
		div.className = "colorselect";
		div.style.backgroundColor = "rgb(" + COLORLIST[i][0] + ", " + COLORLIST[i][1] + ", " + COLORLIST[i][2] + ")";
		div.href = "javascript:setcolor('symbol', " + i + ");";
		symbol.appendChild(div);
	}
	
	var border = document.getElementById("border");
	for(i = 0; i < 16 * 2; ++i){
		var div = document.createElement("a");
		div.className = "colorselect";
		div.style.backgroundColor = "rgb(" + COLORLIST[i][0] + ", " + COLORLIST[i][1] + ", " + COLORLIST[i][2] + ")";
		div.href = "javascript:setcolor('border', " + i + ");";
		border.appendChild(div);
	}
	
	var background = document.getElementById("background");
	for(i = 0; i < 16 * 2; ++i){
		var div = document.createElement("a");
		div.className = "colorselect";
		div.style.backgroundColor = "rgb(" + COLORLIST[i][0] + ", " + COLORLIST[i][1] + ", " + COLORLIST[i][2] + ")";
		div.href = "javascript:setcolor('background', " + i + ");";
		background.appendChild(div);
	}
	
	var imageBuffer = localStorage.getItem("binV0.1");
	if(imageBuffer == undefined){
		var imagePakReq = new XMLHttpRequest();
		imagePakReq.open("GET", "./images/img.pak", true);
		imagePakReq.responseType = "arraybuffer";

		imagePakReq.onload = function (e) {
			var arrayBuffer = imagePakReq.response;
			if (arrayBuffer) {
			  
			var byteArray = new Uint8Array(arrayBuffer);
			imageInit(byteArray);

			//cache the binary
			try{
				localStorage.setItem("binV0.1", abToStr(byteArray));
			} catch(e) {}

			//All important stuff loaded,ready to render
			BINIMG = new Image;
			BINIMG.onload = function() { 
				charLoad();
			}
			BINIMG.src = "./images/bin.png";	
			}
		};
		imagePakReq.send(null);
	} else {
		var ImgBuff = inlineParse(imageBuffer);
		
		imageInit(ImgBuff);
		BINIMG = new Image;
		BINIMG.onload = function() { 
			charLoad();
		}
		BINIMG.src = "./images/bin.png";	
	}

}

function parseEmblem(keyName,embStr){
	var emblem = embStr.split(":");
	if(emblem.length < 5) return;
	SYMBOL = (isNaN(Number(emblem[0]))) ? 0: Number(emblem[0]);
	BORDER = (isNaN(Number(emblem[1]))) ? 0: Number(emblem[1]);
	COLOR[0] = (isNaN(Number(emblem[2]))) ? 0: Number(emblem[2]);
	COLOR[1] = (isNaN(Number(emblem[3]))) ? 0: Number(emblem[3]);
	COLOR[2] = (isNaN(Number(emblem[4]))) ? 0: Number(emblem[4]);
	
	GUILDNAME = (keyName.split(":"))[1];
	document.getElementById("guildname").value = GUILDNAME;
}

function parseURL(){
	var url = unescape(document.URL);
	url = (url.split("?p=1&"))[1];
	if(url != undefined){
		var split = url.split("&");
		if(split.length < 6) return false;
		
		SYMBOL = (isNaN(Number(split[0]))) ? 0: Number(split[0]);
		BORDER = (isNaN(Number(split[1]))) ? 0: Number(split[1]);
		COLOR[0] = (isNaN(Number(split[2]))) ? 0: Number(split[2]);
		COLOR[1] = (isNaN(Number(split[3]))) ? 0: Number(split[3]);
		COLOR[2] = (isNaN(Number(split[4]))) ? 0: Number(split[4]);
		
		GUILDNAME = split[5];
		document.getElementById("guildname").value = GUILDNAME;
		
		render();
		return true;
	}
	return false;
}

function charLoad(){	
	HUMANIMG = new Image;
	HUMANIMG.onload = function() { 
		NAMEKIMG = new Image;
		NAMEKIMG.onload = function() { 
			MAJINIMG = new Image;
			MAJINIMG.onload = function() { 
				if(!parseURL()){
					var found = false;
					for(var i = 0; i < localStorage.length; ++i){
						if(localStorage.key(i).substring(0,4) == "emb:"){
							parseEmblem(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
							found = true;
						}
					}
					if(!found) randomize();
					else render();
				}
			}
			MAJINIMG.src = "./images/m.png";			
		}
		NAMEKIMG.src = "./images/n.png";
	}
	HUMANIMG.src = "./images/h.png";
}

function randomize(){
	COLOR = [Math.floor(Math.random()*32),Math.floor(Math.random()*32),Math.floor(Math.random()*32)];
	SYMBOL = Math.floor(Math.random()*150);
	BORDER = Math.floor(Math.random()*100 + 150);
	render();
}

function regGuildName(name){
	GUILDNAME = name;
	render();
}

function dataEdit(arrowDiv){
	var edit = document.getElementById("dataEdit");
	var savebtn = document.getElementById("dataEditBtn");
	edit.style.visibility = "visible";
	edit.style.left = savebtn.offsetLeft;
	edit.style.top = savebtn.offsetTop + savebtn.offsetHeight;
	
	arrowDiv.className += " active";
	
	window.onmouseup = function() { 
		edit.style.visibility = "hidden"; 
		arrowDiv.className = " button saveas r";
		window.onmouseup = null;
	}
}

function infoboxWrite(text, displayTime){
	var emblemMain = document.getElementById("emblemmain");
	var infobox = document.getElementById("infobox");
	infobox.style.left = emblemMain.offsetLeft;
	infobox.style.top = emblemMain.offsetTop;
	infobox.style.height = emblemMain.offsetHeight;
	infobox.style.width = emblemMain.offsetWidth;
	infobox.style.visibility = "visible";
	infobox.innerHTML = text;
	
	if(displayTime != -1){
		setTimeout(function(){ 	
			var infobox = document.getElementById("infobox");
			infobox.style.visibility = "hidden"; 
			}, displayTime);
	}
}


function loadKey(keyIndex){
	parseEmblem(localStorage.key(keyIndex), localStorage.getItem(localStorage.key(keyIndex)));
	render();
}

function deleteKey(keyIndex){
	localStorage.removeItem(localStorage.key(keyIndex));
}

function load(){
	var loadStr = "<div style='margin: 0 auto 0; overflow:auto; width:300px; height: 100%;'>";
	
	var loaded = false;
	for(i = 0; i < localStorage.length; ++i){
		if(localStorage.key(i).substring(0,4) == "emb:"){
			loadStr += "<div class='btn_style' style='width: 200px;' onclick='loadKey("+i+"); infoboxWrite(\"\", 0)'>"+localStorage.key(i).substring(4)+"</div>";
			loadStr += "<div class='btn_style' id='tmp"+i+"' onclick='deleteKey("+i+"); load();'></div>";
			loaded = true;
		}
	}
	if(!loaded) infoboxWrite("Nothing to load.", 1200);
	else{
		loadStr += "<div class='btn_style' style=' margin-top:10px; width: 290px' onclick='infoboxWrite(\"\", 0)'>Cancel</div>";
		loadStr += "</div>";
		infoboxWrite(loadStr, -1);
		
		for(i = 0; i < localStorage.length; ++i){
			if(localStorage.key(i).substring(0,4) == "emb:"){
				document.getElementById("tmp" + i).appendChild(BINIMG.cloneNode(true));
			}
		}
	}
}

function save(){
	var saveStr = "unnamed";
	if(GUILDNAME != "") saveStr = GUILDNAME;
	
	localStorage.setItem("emb:"+saveStr, SYMBOL+":"+BORDER+":"+COLOR[0]+":"+COLOR[1]+":"+COLOR[2]);
	
	if(GUILDNAME != "") {
		infoboxWrite("Saved as "+GUILDNAME, 1200);
	} else {
		infoboxWrite("Warning: Guildname was empty: saved as unnamed.", 1800);		
	}
}

function getURL(){
	var exportURL = document.URL;
	exportURL = (exportURL.split("?p=1&"))[0];
	exportURL += "?p=1&";
	exportURL += SYMBOL+"&"+BORDER+"&"+COLOR[0]+"&"+COLOR[1]+"&"+COLOR[2]+"&"+GUILDNAME;
	
	/*var outPut = "<textarea name='clipboard'>"+exportURL+"</textarea>";
	outPut += "<input type='button' value='Copy&Close' onclick='infoboxWrite(\"\", 0);' />";
	infoboxWrite(outPut, -1);*/
	window.prompt("Copy to clipboard:", exportURL);
}

function clearCache(){
	var deleteStr = "<div style='margin: 0 auto 0; overflow:auto; width:300px; height: 100%;'>";
	deleteStr += "Warning: This will delete all saved Emblems.";
	deleteStr += "<div class='btn_style' style='width:140px;' onclick='localStorage.clear(); infoboxWrite(\"\", 0);'>Ok</div>";
	deleteStr += "<div class='btn_style' style='width:140px;' onclick='infoboxWrite(\"\", 0)'>Cancel</div>";
	deleteStr += "</div>";
	infoboxWrite(deleteStr, -1);
}