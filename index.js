(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[519,782,188,147],[534,593,91,147],[284,868,169,93],[455,931,161,81],[0,0,500,500],[0,502,604,89],[0,692,528,88],[0,782,517,84],[0,868,140,131],[142,868,140,131],[0,593,532,97]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Gemini_Generated_Image_c9paczc9paczc9paremovebgpreview = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_135448removebgpreviewpngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_135643removebgpreviewpngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_135706removebgpreviewpngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_143850removebgpreview = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_143850removebgpreviewpngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_145938removebgpreview = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
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


(lib.startBtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,93);


(lib.she = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.she, new cjs.Rectangle(0,0,94,73.5), null);


(lib.rightBtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Screenshot_20251016_143850removebgpreview();
	this.instance.setTransform(9,-14,0.5714,0.6107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-14,80,80);


(lib.leftBtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Screenshot_20251016_143850removebgpreviewpngcopy();
	this.instance.setTransform(-26,-5,0.5714,0.6107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-5,80,80);


(lib.it = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.it, new cjs.Rectangle(0,0,45.5,73.5), null);


(lib.imgHolder = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(244,244,244,0.098)").ss(1,1,1).p("AzD0nMAmHAAAMAAAApPMgmHAAAg");
	this.shape.setTransform(152.025,169.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AzDUoMAAAgpPMAmHAAAMAAAApPg");
	this.shape_1.setTransform(152.025,169.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imgHolder, new cjs.Rectangle(29.1,36.1,245.9,266), null);


(lib.box = function(mode,startPosition,loop,reversed) {
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
	this.answer1 = new cjs.Text("ans1", "50px 'Times New Roman'", "#4F757B");
	this.answer1.name = "answer1";
	this.answer1.textAlign = "center";
	this.answer1.lineHeight = 57;
	this.answer1.lineWidth = 100;
	this.answer1.parent = this;
	this.answer1.setTransform(-65,16.85);

	this.instance = new lib.Screenshot_20251016_135448removebgpreviewpngcopy();
	this.instance.setTransform(-347,0,0.9332,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.answer1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-347,0,563.7,89), null);


(lib.answerBtn4 = function(mode,startPosition,loop,reversed) {
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
	this.answer4 = new cjs.Text("ans4", "50px 'Times New Roman'", "#4F757B");
	this.answer4.name = "answer4";
	this.answer4.textAlign = "center";
	this.answer4.lineHeight = 57;
	this.answer4.lineWidth = 100;
	this.answer4.parent = this;
	this.answer4.setTransform(250,12.35);

	this.instance = new lib.Screenshot_20251016_145938removebgpreview();
	this.instance.setTransform(0,0,0.9398,0.8247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.answer4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,80);


(lib.answerBtn3 = function(mode,startPosition,loop,reversed) {
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
	this.answer3 = new cjs.Text("ans3", "50px 'Times New Roman'", "#4F757B");
	this.answer3.name = "answer3";
	this.answer3.textAlign = "center";
	this.answer3.lineHeight = 57;
	this.answer3.lineWidth = 100;
	this.answer3.parent = this;
	this.answer3.setTransform(24.65,31.95);

	this.instance = new lib.Screenshot_20251016_135706removebgpreviewpngcopy();
	this.instance.setTransform(-216,18,0.9477,0.9524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.answer3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerBtn3, new cjs.Rectangle(-216,18,490,80), null);


(lib.answerBtn2 = function(mode,startPosition,loop,reversed) {
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
	this.answer2 = new cjs.Text("ans2", "50px 'Times New Roman'", "#4F757B");
	this.answer2.name = "answer2";
	this.answer2.textAlign = "center";
	this.answer2.lineHeight = 57;
	this.answer2.lineWidth = 100;
	this.answer2.parent = this;
	this.answer2.setTransform(19,30.35);

	this.instance = new lib.Screenshot_20251016_135643removebgpreviewpngcopy();
	this.instance.setTransform(-226,18,0.928,0.9091);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.answer2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerBtn2, new cjs.Rectangle(-226,18,490,80), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
	}
	this.frame_1 = function() {
		this.stop();
		var gameStage = this;
		var imagesPath = "graphics/";
		var questions = [];
		var currentIndex = 0;
		var total = 0;
		
		// المراجع من الستيج (تأكد أن عندك answerBtn1 إلى answerBtn4)
		var imgHolder = gameStage.imgHolder;
		var dataText = gameStage.dataText;
		var numText = gameStage.num;
		var answerBtns = [
		  gameStage.answerBtn1,
		  gameStage.answerBtn2,
		  gameStage.answerBtn3,
		  gameStage.answerBtn4
		];
		var leftBtn = gameStage.leftBtn;
		var rightBtn = gameStage.rightBtn;
		
		// تحميل JSON
		fetch("data.json")
		  .then(res => res.json())
		  .then(data => {
		    // 🔹 خلط الأسئلة عشوائيًا
		    questions = shuffleArray(data);
		    total = questions.length;
		    preloadImages();
		  })
		  .catch(err => console.error("❌ خطأ في تحميل JSON:", err));
		
		// ====== دالة خلط المصفوفة ======
		function shuffleArray(array) {
		  var arr = array.slice();
		  for (let i = arr.length - 1; i > 0; i--) {
		    let j = Math.floor(Math.random() * (i + 1));
		    [arr[i], arr[j]] = [arr[j], arr[i]];
		  }
		  return arr;
		}
		
		// ====== تحميل الصور مسبقاً ======
		var queue = new createjs.LoadQueue(false);
		queue.on("complete", onPreloadComplete, this);
		
		function preloadImages() {
		  var manifest = [];
		  for (var i = 0; i < questions.length; i++) {
		    manifest.push({ id: "img" + i, src: questions[i].imgSrc });
		  }
		  queue.loadManifest(manifest);
		}
		
		function onPreloadComplete() {
		  showQuestion(currentIndex);
		  updateNavButtons();
		  enableOptions();
		}
		
		// ====== عرض السؤال ======
		function showQuestion(index) {
		  if (index >= questions.length) {
		    dataText.text = "Great job! You finished all questions!";
		    imgHolder.removeAllChildren();
		    numText.text = "";
		    return;
		  }
		
		  var q = questions[index];
		  numText.text = (index + 1) + " of " + total;
		  dataText.text = q.question;
		
		  // 🔹 خلط الإجابات
		  var shuffledAnswers = shuffleArray(q.answers);
		
		  // عرض الصورة
		  showImageByIndex(index);
		
		  // عرض الإجابات حسب عددها
		  for (var i = 0; i < answerBtns.length; i++) {
		    var btn = answerBtns[i];
		    if (shuffledAnswers[i]) {
		      btn.visible = true;
		      btn.mouseEnabled = true;
		      if (btn["answer" + (i + 1)]) {
		        btn["answer" + (i + 1)].text = shuffledAnswers[i];
		      } else if (btn.answerText) {
		        btn.answerText.text = shuffledAnswers[i];
		      }
		      btn.gotoAndStop && btn.gotoAndStop("up");
		    } else {
		      btn.visible = false;
		      btn.mouseEnabled = false;
		    }
		  }
		
		  // حفظ الإجابة الصحيحة لتتحقق منها لاحقًا
		  q._shuffledAnswers = shuffledAnswers;
		}
		
		// ====== عرض الصورة ======
		function showImageByIndex(i) {
		  if (!imgHolder) return;
		  imgHolder.removeAllChildren();
		
		  var imgId = "img" + i;
		  var result = queue.getResult(imgId);
		  if (result) {
		    var bmp = new createjs.Bitmap(result);
		    var holderW = 270, holderH = 320;
		    var iw = result.width || bmp.image.width;
		    var ih = result.height || bmp.image.height;
		    var scale = Math.min(holderW / iw, holderH / ih);
		    bmp.scaleX = bmp.scaleY = scale;
		    bmp.x = (holderW - iw * scale) / 2;
		    bmp.y = (holderH - ih * scale) / 2;
		    imgHolder.addChild(bmp);
		  }
		}
		
		// ====== فحص الإجابة ======
		function checkAnswer(selectedText, btn) {
		  var q = questions[currentIndex];
		  var correct = q.correctAnswer;
		  var isCorrect = (selectedText === correct);
		
		  var resultText = new createjs.Text("", "28px Arial", "#000");
		  resultText.textAlign = "center";
		  resultText.x = gameStage.stage.canvas.width / 2;
		  resultText.y = 50;
		  gameStage.addChild(resultText);
		
		  if (isCorrect) {
		    resultText.text = "✅ صح";
		    resultText.color = "#0a0";
		    btn.gotoAndStop && btn.gotoAndStop("correct");
		    setTimeout(() => {
		      currentIndex++;
		      showQuestion(currentIndex);
		      updateNavButtons();
		    }, 800);
		  } else {
		    resultText.text = "❌ خطأ";
		    resultText.color = "#a00";
		    createjs.Tween.get(btn)
		      .to({ x: btn.x - 10 }, 50)
		      .to({ x: btn.x + 10 }, 50)
		      .to({ x: btn.x - 6 }, 50)
		      .to({ x: btn.x + 6 }, 50)
		      .to({ x: btn.x }, 50);
		
		    // إبراز الإجابة الصحيحة بعد الخلط
		    for (var i = 0; i < answerBtns.length; i++) {
		      var aBtn = answerBtns[i];
		      var aText = aBtn["answer" + (i + 1)]?.text || aBtn.answerText?.text;
		      if (aText === correct) {
		        aBtn.gotoAndStop && aBtn.gotoAndStop("correct");
		      }
		    }
		  }
		
		  setTimeout(() => gameStage.removeChild(resultText), 1000);
		  disableOptions();
		  setTimeout(enableOptions, 800);
		}
		
		// ====== التحكم في الأزرار ======
		function enableOptions() {
		  answerBtns.forEach(btn => (btn.mouseEnabled = true));
		}
		function disableOptions() {
		  answerBtns.forEach(btn => (btn.mouseEnabled = false));
		}
		
		// ====== أحداث النقر ======
		answerBtns.forEach((btn, i) => {
		  btn.addEventListener("click", function () {
		    var text = btn["answer" + (i + 1)]?.text || btn.answerText?.text;
		    checkAnswer(text, btn);
		  });
		});
		
		// ====== التنقل ======
		leftBtn.addEventListener("click", function () {
		  if (currentIndex > 0) {
		    currentIndex--;
		    showQuestion(currentIndex);
		    updateNavButtons();
		  }
		});
		rightBtn.addEventListener("click", function () {
		  if (currentIndex < total - 1) {
		    currentIndex++;
		    showQuestion(currentIndex);
		    updateNavButtons();
		  }
		});
		
		function updateNavButtons() {
		  if (leftBtn) leftBtn.visible = currentIndex > 0;
		  if (rightBtn) rightBtn.visible = currentIndex < total - 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.Gemini_Generated_Image_c9paczc9paczc9paremovebgpreview();
	this.instance.setTransform(306,0,0.8,0.8);

	this.startBtn = new lib.startBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(502.5,453.5,1,1,0,0,0,84.5,46.5);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.answerBtn4 = new lib.answerBtn4();
	this.answerBtn4.name = "answerBtn4";
	this.answerBtn4.setTransform(305.6,437,1,1,0,0,0,266,40);
	new cjs.ButtonHelper(this.answerBtn4, 0, 1, 1);

	this.leftBtn = new lib.leftBtn();
	this.leftBtn.name = "leftBtn";
	this.leftBtn.setTransform(448.05,541,1,1,0,0,0,27.5,40);
	new cjs.ButtonHelper(this.leftBtn, 0, 1, 1);

	this.rightBtn = new lib.rightBtn();
	this.rightBtn.name = "rightBtn";
	this.rightBtn.setTransform(589,531.5,1,1,0,0,0,27,33.5);
	new cjs.ButtonHelper(this.rightBtn, 0, 1, 1);

	this.num = new cjs.Text("", "30px 'Noto Sans Arabic SemiBold'");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 67;
	this.num.lineWidth = 109;
	this.num.parent = this;
	this.num.setTransform(523.6,526.15);

	this.imgHolder = new lib.imgHolder();
	this.imgHolder.name = "imgHolder";
	this.imgHolder.setTransform(811.75,258.35,1.1068,1.2121,0,0,0,135.1,160.1);

	this.answerBtn2 = new lib.answerBtn2();
	this.answerBtn2.name = "answerBtn2";
	this.answerBtn2.setTransform(365.6,275.8,1,1,0,0,0,100,50);
	new cjs.ButtonHelper(this.answerBtn2, 0, 1, 1);

	this.answerBtn3 = new lib.answerBtn3();
	this.answerBtn3.name = "answerBtn3";
	this.answerBtn3.setTransform(356.85,356.35,1,0.9524,0,0,0,100,50.1);
	new cjs.ButtonHelper(this.answerBtn3, 0, 1, 1);

	this.dataText = new cjs.Text("", "bold 40px 'Noto Sans'");
	this.dataText.name = "dataText";
	this.dataText.lineHeight = 63;
	this.dataText.lineWidth = 600;
	this.dataText.parent = this;
	this.dataText.setTransform(49.5,63.85);

	this.answerBtn1 = new lib.box();
	this.answerBtn1.name = "answerBtn1";
	this.answerBtn1.setTransform(447.2,208.85,1,0.8989,0,0,0,100.2,50.1);
	new cjs.ButtonHelper(this.answerBtn1, 0, 1, 1);

	this.instance_1 = new lib.it();
	this.instance_1.setTransform(638.05,350.55,1,1,0,0,0,22.7,36.8);

	this.instance_2 = new lib.she();
	this.instance_2.setTransform(777.05,206,1,1,0,0,0,47.1,36.8);

	this.instance_3 = new lib.box();
	this.instance_3.setTransform(638,350.5,1,1,0,0,0,100,50);

	this.instance_4 = new lib.box();
	this.instance_4.setTransform(469.1,205.95,1,1,0,0,0,100,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBtn},{t:this.instance}]}).to({state:[{t:this.answerBtn1,p:{regX:100.2,regY:50.1,scaleY:0.8989,x:447.2,y:208.85}},{t:this.dataText},{t:this.answerBtn3},{t:this.answerBtn2},{t:this.imgHolder},{t:this.num},{t:this.rightBtn},{t:this.leftBtn},{t:this.answerBtn4}]},1).to({state:[{t:this.answerBtn1,p:{regX:100,regY:50,scaleY:1,x:777,y:205.95}},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_5 = new lib.Image_1();
	this.instance_5.setTransform(844,484);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,288,493,305.29999999999995);
// library properties:
lib.properties = {
	id: '4E34B3481A5ADC4C85D9016987E04AF9',
	width: 1024,
	height: 576,
	fps: 30,
	color: "#F9F6EA",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1760618352297", id:"index_atlas_1"}
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
an.compositions['4E34B3481A5ADC4C85D9016987E04AF9'] = {
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