(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_atlas_1", frames: [[0,497,524,77],[0,576,142,80],[0,413,815,82],[526,497,110,108],[0,0,856,411]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap4 = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.button_background = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gear_0000_ametalballwithmetalook = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.settingpopupbg = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.VolumeSliderGraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2+BVQgdAAAAgyIAAhFQAAgyAdAAMAt9AAAQAdAAAAAyIAABFQAAAygdAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VolumeSliderGraphic, new cjs.Rectangle(-149.9,-8.5,299.9,17), null);


(lib.VolumeHandleGraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("Ah0DTQgwghAAgwIAAkDQAAgvAwgjQAxghBDAAQBEAAAwAhQAxAjAAAvIAAEDQAAAwgxAhQgwAihEAAQhDAAgxgig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VolumeHandleGraphic, new cjs.Rectangle(-16.5,-24.5,33,49), null);


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gear_0000_ametalballwithmetalook();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-52,110,108);


(lib.SkipBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.SkipBtnLabel = new cjs.Text("Skip", "30px 'Arial'", "#FFFF00");
	this.SkipBtnLabel.name = "SkipBtnLabel";
	this.SkipBtnLabel.lineHeight = 36;
	this.SkipBtnLabel.lineWidth = 59;
	this.SkipBtnLabel.parent = this;
	this.SkipBtnLabel.setTransform(-63.45,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.SkipBtnLabel).wait(1));

	// Layer_1
	this.instance = new lib.button_background();
	this.instance.setTransform(-128,-27,0.2308,0.8039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipBtn, new cjs.Rectangle(-128,-27,188.1,65.9), null);


(lib.RadioBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Down:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(7,1,1).p("ADmAAQAABghDBDQhDBDhgAAQhfAAhDhDQhDhDAAhgQAAhfBDhDQBDhDBfAAQBgAABDBDQBDBDAABfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiiCjQhDhDAAhgQAAheBDhEQBEhDBeAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AiiCjQhDhDAAhgQAAheBDhEQBEhDBeAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53,53);


(lib.OverlayClickBlocker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OverlayClickBlocker, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.OptionButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.label = new cjs.Text("ButtonLabel", "44px 'Times New Roman'", "#0099FF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 51;
	this.label.lineWidth = 749;
	this.label.parent = this;
	this.label.setTransform(95.5,-82.7);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Layer_1
	this.instance = new lib.button_background();
	this.instance.setTransform(-312,-123,1,1.561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OptionButton, new cjs.Rectangle(-312,-123,815,128), null);


(lib.CloseBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("X", "50px 'Ravie'", "#FFFF00");
	this.text.lineHeight = 69;
	this.text.lineWidth = 72;
	this.text.parent = this;
	this.text.setTransform(-18,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({color:"#FFFF00"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-32.5,76.3,79.6);


(lib.VolumeSlider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.VolumeSliderGraphicInstance = new lib.VolumeSliderGraphic();
	this.VolumeSliderGraphicInstance.name = "VolumeSliderGraphicInstance";

	this.timeline.addTween(cjs.Tween.get(this.VolumeSliderGraphicInstance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VolumeSlider, new cjs.Rectangle(-149.9,-8.5,299.9,17), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.OverlayClickBlockerInstance = new lib.OverlayClickBlocker();
	this.OverlayClickBlockerInstance.name = "OverlayClickBlockerInstance";

	this.timeline.addTween(cjs.Tween.get(this.OverlayClickBlockerInstance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CloseBtn();
	this.instance.setTransform(238,-38);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218,-70.5,76.30000000000001,79.6);


(lib.SliderHandler = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah0DTQgwghAAgwIAAkDQAAgvAwgjQAxghBDAAQBEAAAwAhQAxAjAAAvIAAEDQAAAwgxAhQgwAihEAAQhDAAgxgig");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Ah0DTQgwghAAgwIAAkDQAAgvAwgjQAxghBDAAQBEAAAwAhQAxAjAAAvIAAEDQAAAwgxAhQgwAihEAAQhDAAgxgig");

	this.VolumeHandleGraphicInstance = new lib.VolumeHandleGraphic();
	this.VolumeHandleGraphicInstance.name = "VolumeHandleGraphicInstance";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.VolumeHandleGraphicInstance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-24.5,33,49);


(lib.SettingPopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.ChineseRadioBtn = new lib.RadioBtn();
	this.ChineseRadioBtn.name = "ChineseRadioBtn";
	this.ChineseRadioBtn.setTransform(187.25,-59.8);

	this.EnglishRadioBtn = new lib.RadioBtn();
	this.EnglishRadioBtn.name = "EnglishRadioBtn";
	this.EnglishRadioBtn.setTransform(-86.65,-59.8);

	this.CloseSettingBtn = new lib.Symbol1();
	this.CloseSettingBtn.name = "CloseSettingBtn";
	this.CloseSettingBtn.setTransform(107.2,-106.7,1,1,0,0,0,-1.8,1.7);
	new cjs.ButtonHelper(this.CloseSettingBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.CloseSettingBtn},{t:this.EnglishRadioBtn},{t:this.ChineseRadioBtn}]}).wait(1));

	// Layer_3
	this.text = new cjs.Text("Volume", "44px 'Jokerman'", "#FFFF00");
	this.text.lineHeight = 69;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(-353,2);

	this.VolumeHandle = new lib.SliderHandler();
	this.VolumeHandle.name = "VolumeHandle";
	this.VolumeHandle.setTransform(189.5,38.05);
	new cjs.ButtonHelper(this.VolumeHandle, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.VolumeHandle},{t:this.text}]}).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(227,-93);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-355,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_7
	this.VolumeSlider = new lib.VolumeSlider();
	this.VolumeSlider.name = "VolumeSlider";
	this.VolumeSlider.setTransform(51.3,39.55);

	this.timeline.addTween(cjs.Tween.get(this.VolumeSlider).wait(1));

	// Layer_6
	this.VolumeNumber = new cjs.Text("100", "44px 'Arial'", "#FFFF00");
	this.VolumeNumber.name = "VolumeNumber";
	this.VolumeNumber.lineHeight = 51;
	this.VolumeNumber.parent = this;
	this.VolumeNumber.setTransform(233,23.05);

	this.instance_2 = new lib.settingpopupbg();
	this.instance_2.setTransform(-428,-198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.VolumeNumber}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingPopup, new cjs.Rectangle(-428,-198,856,411), null);


(lib.gearSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// Layer_1
	this.instance = new lib.Tween1();
	this.instance.setTransform(-0.15,-0.1,1,1.0185);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:715.9587},88).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-57,117.4,117.5);


(lib.gear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// Layer_1
	this.gearInstance = new lib.gearSymbol("synched",0);
	this.gearInstance.name = "gearInstance";

	this.timeline.addTween(cjs.Tween.get(this.gearInstance).to({rotation:360},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-60.6,124.3,124.4);


// stage content:
(lib.main = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {VideoStage:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		
		let showButtonTimeout = null;
		
		
		// setup the background image
		let body = document.body;
		body.style.backgroundImage = "url('images/background.png')";
		body.style.backgroundPosition = "center top";
		body.style.backgroundRepeat = "no-repeat";
		body.style.backgroundColor = "#000000";
		stage.canvas.style.backgroundColor = "transparent";
		
		// setup container
		let container = document.getElementById("animation_container");
		if (container) {
			container.style.position = "absolute";
			container.style.left = "50%";
			container.style.top = "52px";
			container.style.transform = "translateX(-50%)";
		}
		
		// functions
		const pointerOnOver = (btn) => {
			btn.on("mouseover", () => {
				document.body.style.cursor = "pointer";
			});
			btn.on("mouseout", () => {
				document.body.style.cursor = "default";
			});
		}
		
		// setup the setting page
		this.SettingPopupInstance.visible = false;
		this.Overlay.visible = false;
		this.SettingBtn.on("click", () => {
			this.SettingPopupInstance.visible = true;
			this.Overlay.visible = true;
		});
		this.SettingPopupInstance.CloseSettingBtn.on("click", () => {
			this.SettingPopupInstance.visible = false;
			this.Overlay.visible = false;
		});
		
		this.SettingBtn.on("mouseover", () => {
				this.SettingBtn.play();
				document.body.style.cursor = "pointer";
		});
		this.SettingBtn.on("mouseout", ()=>{
				this.SettingBtn.gotoAndStop(0);
				document.body.style.cursor = "default";
		});
		
		// setup language
		let enBtn = this.SettingPopupInstance.EnglishRadioBtn;
		let zhBtn = this.SettingPopupInstance.ChineseRadioBtn;
		let initialLanguage = localStorage.getItem("language");
		if (!initialLanguage) {
			initialLanguage = "en";
			localStorage.setItem("language", initialLanguage);
		}
		switch(initialLanguage) {
			case "en":
				enBtn.gotoAndStop("Down");
				break;
			case "zh":
				zhBtn.gotoAndStop("Down");
				break;
		}
		enBtn.on("click", () => {
			zhBtn.gotoAndStop("Up");
			enBtn.gotoAndStop("Down");
			localStorage.setItem("language", "en");
			window.location.reload();
		});
		zhBtn.on("click", () => {
			enBtn.gotoAndStop("Up");
			zhBtn.gotoAndStop("Down");
			localStorage.setItem("language", "zh");
			window.location.reload();
		});
		pointerOnOver(enBtn);
		pointerOnOver(zhBtn);
		pointerOnOver(this.SkipBtnInstance);
		
		// setup volume x and y are the coordinates of the center point of the component
		let volumeHandle = this.SettingPopupInstance.VolumeHandle;
		let volumeSlider = this.SettingPopupInstance.VolumeSlider;
		let volume = localStorage.getItem("volume") ?? 1;
		let volumeSliderWidth = volumeSlider.nominalBounds.width;
		let minX = volumeSlider.x - volumeSliderWidth / 2;
		let maxX = minX + volumeSliderWidth;
		console.log("volumeHandle: " + volumeHandle.x + " " + volumeHandle.y);
		console.log("volumeSlider: " + volumeSlider.x + " " + volumeSlider.y + " " + volumeSliderWidth);
		console.log("minx: "+ minX + " maxx: " + maxX);
		volumeHandle.x = minX + volume * volumeSliderWidth + volumeHandle.nominalBounds.width / 2;
		volumeHandle.on("pressmove", (event) => {//console.log("volume:"+$("#myvid")[0].volume);
			let localMousePoint = this.SettingPopupInstance.globalToLocal(this.stage.mouseX, this.stage.mouseY);	
			console.log("mouseX: "+ localMousePoint.x);
			volumeHandle.x = Math.min(maxX, Math.max(minX, localMousePoint.x));
			console.log("volumeHandleX:"+volumeHandle.x);
			let volumeLevel = (volumeHandle.x - minX) / volumeSliderWidth;
			$("#myvid")[0].volume = volumeLevel;
			this.SettingPopupInstance.VolumeNumber.text = Math.floor(volumeLevel * 100);
			localStorage.setItem("volume", volumeLevel);
		});
		
		// block click events
		this.Overlay.OverlayClickBlockerInstance.on("click", ()=>{});
		
		// translation
		const translate = (text) => {
			let language = localStorage.getItem("language");
			const translation = {
					"Skip": {
						"en": "Skip",
						"zh": "跳过"
					},
					"Start": {
						"en": "Start",
						"zh":"开始"
					},
					"Urgent manuvour": {
						"en": "Urgent manuvour",
						"zh": "紧急规避"
					},
					"Fire laser cannon": {
						"en": "Fire laser cannon",
						"zh": "发射激光炮"
					},
					"Explore the unknown planet": {
						"en": "Explore the unknown planet",
						"zh": "探索未知星球"
					},
					"Avoid exploring the unknown planet": {
						"en": "Avoid exploring the unknown planet",
						"zh": "避免探索未知星球"
					},
					"Restart": {
						"en": "Restart",
						"zh": "重新开始"
					},
					"Explore alien ship": {
						"en": "Explore alien ship",
						"zh": "探索外星飞船"
					},
					"Avoid exploring the alien ship": {
						"en": "Avoid exploring the alien ship",
						"zh": "避免探索外星飞船"			
					},
					"Continue journey": {
						"en":"Continue journey",
						"zh":"继续旅程"
					}
			};
			if (translation[text] && translation[text][language]) {
				return translation[text][language];
			} else {
				return text;
			}
		};
		
		
		this.screenConfig = {
					"0": {
							option1Text: translate("Continue journey"),
							option2Text: null,
							option1ScreenNumber: "1",
							option2ScreenNumber: null,
							showButtonTime: {
								"en": 195000 - 10000,
								"zh": 168000 - 10000
							},
							skipButtonHideAt: 5000					
					},
					"1": {
							option1Text: translate("Urgent manuvour"),
							option2Text: translate("Fire laser cannon"),
							option1ScreenNumber: "2.1",
							option2ScreenNumber: "2.2",
							showButtonTime: {
								"en": 47000 - 10000,
								"zh": 45000 - 10000
							}
					},
					"2.1": {
							option1Text: translate("Explore the unknown planet"),
							option2Text: translate("Avoid exploring the unknown planet"),
							option1ScreenNumber:"3.1",
							option2ScreenNumber:"3.2",
							showButtonTime:{
								"en": 121000 - 10000,
								"zh": 102000 - 10000
							}
					},
					"2.2": {
							option1Text: translate("Restart"),
							option2Text:null,
							option1ScreenNumber:"1",
							option2ScreenNumber:null,
							showButtonTime: {
								"en": 50000 - 10000,
								"zh": 49000 - 10000
							}
					},
					"3.1": {
							option1Text: translate("Restart"),
							option2Text:null,
							option1ScreenNumber:"1",
							option2ScreenNumber:null,
							showButtonTime: {
								"en": 62000 - 10000,
								"zh": 45000 - 10000
							}
					},
					"3.2": {
							option1Text: translate("Explore alien ship"),
							option2Text: translate("Avoid exploring the alien ship"),
							option1ScreenNumber:"4.1",
							option2ScreenNumber:"4.2",
							showButtonTime: {
								"en": 95000 - 10000,
								"zh": 58000 - 10000
							}
					},
					"4.1": {
							option1Text: translate("Restart"),
							option2Text:null,
							option1ScreenNumber:"1",
							option2ScreenNumber:null,
							showButtonTime: {
								"en": 110000 - 10000,
								"zh": 120000 - 10000
							}
					},
					"4.2": {
							option1Text: translate("Continue journey"),
							option2Text: null,
							option1ScreenNumber: "5",
							option2ScreenNumber: null,
							showButtonTime: {
								"en": 62000 - 10000,
								"zh": 45000 - 10000
							}
					},
					"5": {
							option1Text: translate("Restart"),
							option2Text: null,
							option1ScreenNumber: "1",
							option2ScreenNumber:null,
							showButtonTime: {
								"en": 106000 - 10000,
								"zh": 68000 - 10000
							}
					}
		};
		
		this.StartButton.label.text = translate("Start");
		
		
		this.currentScreenNumber = null;
		this.option1ScreenNumber = null;
		this.option2ScreenNumber = null;
		
		this.option1.on("click", ()=>{
			$("#myvid")[0].pause();
			this.switchScreen(this.option1ScreenNumber);	
		});
		this.option2.on("click",()=>{
			$("#myvid")[0].pause();
			this.switchScreen(this.option2ScreenNumber);
		});
		this.SkipBtnInstance.on("click", () => {
			$("#myvid")[0].pause();
			this.SkipBtnInstance.visible = false;
			if (showButtonTimeout) {
				clearTimeout(showButtonTimeout);
			}
			this.switchScreen(this.option1ScreenNumber);
		});
		
		this.SkipBtnInstance.visible = false;
		this.SkipBtnInstance.SkipBtnLabel.text = translate("Skip");
		this.switchScreen = (screenNumber) => {
			if (this.currentScreenNumber == screenNumber) {
					return;
			}
			console.log("switch from " + this.currentScreenNumber + " to " + screenNumber);
			this.currentScreenNumber = screenNumber;
		
			let config = this.screenConfig[this.currentScreenNumber];	
		
			this.option1.visible = false;
			this.option2.visible = false;
			this.option1.label.text = config.option1Text;
			this.option2.label.text = config.option2Text;
			this.option1ScreenNumber = config.option1ScreenNumber;
			this.option2ScreenNumber = config.option2ScreenNumber;	
			let checkExist = setInterval(() => {
				let video = $("#myvid");
				if (video.length > 0) {
					canvas.style.zIndex = "2";
					document.getElementById("myvid").style.zIndex="1";
					clearInterval(checkExist);
					console.log("Video element found!");
					$("#myvid")[0].pause();
					$("#myvid")[0].src = "videos/" + (localStorage.getItem("language") == "en" ? "e" + this.currentScreenNumber + ".mp4" : "c" + this.currentScreenNumber + ".mp4");
					$("#myvid")[0].play();
				}
			}, 100); // checks every 100ms to make sure the video is ready
			showButtonTimeout = setTimeout(() => {
					if (config.option1ScreenNumber !== null) {
						this.option1.visible = true;
					}
					if (config.option2ScreenNumber !== null) {
						this.option2.visible = true;
					}
				},
				config.showButtonTime[localStorage.getItem("language")] ?? 3000		
			);
			if (config.skipButtonHideAt) {
				this.SkipBtnInstance.visible = true;
				setTimeout(() => {
					this.SkipBtnInstance.visible = false;
				}, config.skipButtonHideAt);
			}
		};
		
		this.StartButton.on("click", () => {
			this.gotoAndStop("VideoStage");
			this.switchScreen("0");
		}, null, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Skip_Button
	this.SkipBtnInstance = new lib.SkipBtn();
	this.SkipBtnInstance.name = "SkipBtnInstance";
	this.SkipBtnInstance.setTransform(1188.05,655.45);
	this.SkipBtnInstance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.SkipBtnInstance).wait(10));

	// SettingPage
	this.SettingPopupInstance = new lib.SettingPopup();
	this.SettingPopupInstance.name = "SettingPopupInstance";
	this.SettingPopupInstance.setTransform(622,360);

	this.timeline.addTween(cjs.Tween.get(this.SettingPopupInstance).wait(10));

	// Overlay
	this.Overlay = new lib.Symbol2();
	this.Overlay.name = "Overlay";
	this.Overlay.setTransform(640,360);
	this.Overlay.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.Overlay).wait(10));

	// gear
	this.SettingBtn = new lib.gear();
	this.SettingBtn.name = "SettingBtn";
	this.SettingBtn.setTransform(1199,82);

	this.timeline.addTween(cjs.Tween.get(this.SettingBtn).wait(10));

	// buttons
	this.StartButton = new lib.OptionButton();
	this.StartButton.name = "StartButton";
	this.StartButton.setTransform(663.65,466.65,0.6967,0.7368,0,0,0,115.4,87.5);
	new cjs.ButtonHelper(this.StartButton, 0, 1, 1);

	this.option2 = new lib.OptionButton();
	this.option2.name = "option2";
	this.option2.setTransform(558.5,531.6);
	new cjs.ButtonHelper(this.option2, 0, 1, 1);

	this.option1 = new lib.OptionButton();
	this.option1.name = "option1";
	this.option1.setTransform(558.5,270.25);
	new cjs.ButtonHelper(this.option1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StartButton}]}).to({state:[{t:this.option1},{t:this.option2}]},5).wait(5));

	// video
	this.myvid = new lib.an_Video({'id': 'myvid', 'src':'videos/placeholder.mp4', 'autoplay':false, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.myvid.name = "myvid";
	this.myvid.setTransform(640,360,3.2,2.4,0,0,0,200,150);
	this.myvid._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myvid).wait(5).to({_off:false},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(638.4,358.8,643.1999999999999,362.40000000000003);
// library properties:
lib.properties = {
	id: '4F7700E69A85684E8B56F273BCBAD6BE',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"images/main_atlas_1.png?1750723876103", id:"main_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1750723876126", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1750723876126", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1750723876126", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4F7700E69A85684E8B56F273BCBAD6BE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;