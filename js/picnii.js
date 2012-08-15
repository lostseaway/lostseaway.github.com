window.varList =[];
window.BUTTON = "button";
var INPUT_NONE=0,INPUT_CLASSIC=1,INPUT_BUTTON=2;
var _inputState = INPUT_NONE ;
var _inputButtonCount=0 ;
(function($){
	var BEGIN_STATE=0,REDO_STATE=1,TUTORIAL_STATE=2;
	
	var A_STATE =0,B_STATE=1;
	var _state = BEGIN_STATE;
	var _tutorial_step =0;
	var _stuck =0;

	var _itemCount = 0;

	var _timeInterval;	
	var _timeIndex =0;
	var _command = [];	
	var def_window=[];
	
	gotoDocument = function()
	{
			$('#document').show('slow');
			$('#main-content').hide('slow');
			$('#create-app').hide('slow');
			$('#create-li').attr('class','');
			$('#interactive-li').attr('class','');
			$('#document-li').attr('class','active');
			_addCommand('gotoDucument');
			if(_state == TUTORIAL_STATE)
			_tutorial(_tutorial_step,'_gotoDocument');
	}
	
	gotoMain = function()
	{
			$('#document').hide('slow');
			$('#main-content').show('slow');
			$('#create-app').hide('slow');
			$('#create-li').attr('class','');
			$('#interactive-li').attr('class','active');
			$('#document-li').attr('class','');
			_addCommand('gotoMain');
			if(_state == TUTORIAL_STATE)
			_tutorial(_tutorial_step,'_gotoMain');
	}
	
	gotoCreateApp = function()
	{
			$('#document').hide('slow');
			$('#main-content').hide('slow');
			$('#create-app').show('slow');
			$('#create-li').attr('class','active');
			$('#interactive-li').attr('class','');
			$('#document-li').attr('class','');
			_addCommand('gotoCreateApp');
			
			if(typeof onSubmit != 'undefined')
			{
				$('#create-app #classic-input').val(
					"onSubmit = "+onSubmit.toString()				
				);	
				
			}
			
			
			var var_diff = _varCheck();
			if(var_diff.length >0)
			{
				var value="";
				for(var i = 0;i<var_diff.length;i++)
				{
						value+=var_diff[i]+";";
				}
				$('#create-app #example-var').val(value);
			}
						
			
			if(_state == TUTORIAL_STATE)
			_tutorial(_tutorial_step,'_gotoCreateApp');
		
	}
		
	changeColor = function(target,color)
	{
		$('#'+target).css('color',color);	
	}	
	
	changeBackground = function(background)
	{
		$('#output').css('background',background);
		_addCommand('changeBackground',background);
	}	
	
	addSound =function(url)
	{
		 var html ='<div id="item'+_itemCount+'" >';
		 html += '<audio id="sound_item'+_itemCount+'" controls autobuffer>';
		 html += '<source src="'+url+'" type="audio/mpeg" />';
		 html +='</audio>';
		 html +='</div>';
		 console.log('try: '+'http://playground.html5rocks.com/samples/html5_misc/rushus-modal_blues.mp3');
		 $('#output').append(html);
		_addCommand('addSound',url);
		return _addItem();  	 
	}	
	
	
	playSound = function(target)
	{
		if(target!=null)
		{
		
			var playCount = $('#'+target).attr('playSound');
			if(playCount == null)
				playCount = 0;
			else
				playCount = Number(playCount);
			$('#'+target).attr('playSound', playCount+1);
		
			$('#'+target+' audio')[0].play();//return $('#'+target)[0];//$('#'+target).play();
			
			
			
			_addCommand('playSound',target);
		}else
		{
			var songs =$('audio'); 
			for(var i =0;i<songs.length;i++)
			{
				songs[i].play();
			}
			
			var playCount = songs.parent().attr('playSound');
			if(playCount == null)
				playCount = 0;
			else
				playCount = Number(playCount);
			songs.parent().attr('playSound', playCount+1);
				
			_addCommand('playSound');
		}
		
		
	}
	
	stopSound = function(target)
	{
		if(target!=null)
		{
				var stopCount = $('#'+target).attr('stopSound');
			if(stopCount == null)
				stopCount = 0;
			else
				stopCount = Number(stopCount);
			$('#'+target).attr('stopSound', stopCount+1);
			
		
			$('#'+target+' audio')[0].pause(); ;//return $('#'+target)[0];//$('#'+target).pause(); 
			
		
			_addCommand('stopSound',target);
		}else
		{
			var songs =$('audio'); 
			for(var i =0;i<songs.length;i++)
			{
				songs[i].pause();				
			}
							
			var stopCount = songs.parent().attr('stopSound');
			if(stopCount == null)
				stopCount = 0;
			else
				stopCount = Number(stopCount);
			songs.parent().attr('stopSound', stopCount+1);
				
			_addCommand('stopSound');
		}
		
		
	}
	
	addText = function(text)
	{
		var html='<span id="item'+_itemCount+'" style="font-size:10px">'+text+'</span>';
		$('#output').append(html);
		_addCommand('addText',text);
		return _addItem();
	}
	
	changeTextSize = function(item,size)
	{
		$('#'+item).attr('style','font-size:'+size+'px');
	}	
	
	changeText = function(item,text)
	{
		$('#'+item).html(text);	
	}	
	
	addPicture = function(url)
	{
		var html='<div id="item'+_itemCount+'" class="" display="1"><img id="ref_item'+_itemCount+'" src="'+url+'" ></img></div>';
		$('#output').append(html);
		_addCommand('addPicture',url);
		return _addItem();
	}	
	
	getPictureUrl = function(target)
	{
		var img = $('#ref_'+target);
		return img.attr('src');
		_addCommand('getPictureUrl',target);
	}
	
	changePicture = function(target,url)
	{
		if(url!=null)
		{
			var img = $('#ref_'+target);
			img.attr('src',url);
			_addCommand('changePicture',target,url);
		}else
		{
			var img = $('#output img');
			img.attr('src',target);
			_addCommand('changePicture',target);
		}
	}
	
	addHtml = function(html)
	{
		var html = 	'<div id="item'+_itemCount+'" class="">'+html+'</div>';
		$('#output').append(html);
		_addCommand('addHtml',html);
		return _addItem();
	}	
	
	changeHtml = function(target,html)
	{
		$('#'+target).html(html);
		_addCommand('changeHtml',target,html);
	}
	
	addProgressbar = function()
	{
			var html ='<div id="item'+_itemCount+'" class="progress"><div id="bar_item'+_itemCount+'" class="bar" style="width:20%;"></div></div>';
			$('#output').append(html);
			
			_addCommand('addProgressBar');
			return _addItem();	
	}
	
	setProgressbar = function(percent)
	{
		$('#output .progress .bar').attr('style','width:'+percent+'%');
		_addCommand('setProgressbar',percent);	
	}	
	
	addBox = function()
	{
		var html ='<div id="item'+_itemCount+'" class="item-box"></div>';
		$('#output').append(html);
		
		_addCommand('addBox');
		return _addItem();
	}
	
	setBox = function(target,w,h)
	{
		if(h!=null){
			$('#'+target).css('width',w);
			$('#'+target).css('height',h);
			_addCommand('setBox',target,w,h);
		}else
		{
			$('.item-box').css('width',target);
			$('.item-box').css('height',w);
			_addCommand('setBox',w,h);	
		}
	}	
	
	hide = function(item)
	{
		$('#'+item).hide('slow');
		$('#'+item).attr('display', '0')
		_addCommand('hide',item);
	}	
	
	show = function(item)
	{
		$('#'+item).show('slow');
		$('#'+item).attr('display', '1')
		_addCommand('show',item);
	}
	
	remove = function(item)
	{
		$('#'+item).remove();
		_addCommand('remove',item);
	}	
	
	echo = function(message)
	{	
		var html ='<h2 id="item'+_itemCount+'">'+message+'</h2>';
		$('#output').append(html);
		$('#item'+_itemCount).fadeOut().fadeIn();
		
		_addCommand('echo',message);
		
		if(_state == TUTORIAL_STATE)
			_tutorial(_tutorial_step,message);
		return _addItem();
	}
	
	clearInput = function()
	{
		$('#input-b').html('<button id="buttonA" class="btn" onclick="onSubmitA()">A</button>');
	}
	
	clearItems = function()
	{	
		_itemCount=0;
	}
	
	clearScreen = clearAll = function()
	{
		clearItems(); 
		$('#output').fadeOut('slow',function(){
				console.log('clear');
				$('#output').css('background','white');
				$('#output').html('');
				$('#output').fadeIn('fast');
			})
		_addCommand('clearAll');
		for(var i=0;i<window.varList.length;i++)
		{
			eval("delete "+ window.varList[i]);
		}
		window.varList=[];
		if(_state == TUTORIAL_STATE)
			_tutorial(_tutorial_step,'_clearAll');
	}	
	
	fadeIn = function(target)
	{
		$("#"+target).fadeIn('slow');
		_addCommand('fadeIn',target);
	
	}
	fadeOut = function(target)
	{
		$("#"+target).fadeOut('slow');
		_addCommand('fadeOut',target);
	
	}

	shake = function(target)
	{
	for(var i=0;i<15;i++)
		$("#"+target).animate({"margin-left": "+=10px"}, 10).animate({"margin-left": "-=10px"}, 10);
		
		var shakeCount = $("#"+target).attr('shake');
		if(shakeCount == null)
			shakeCount = 0;
		else
			shakeCount = Number(shakeCount);
		$("#"+target).attr('shake', shakeCount+1);

		_addCommand('shake',target);
	}
	
	grow = function(target,percent)
	{
		var itemSize = ($("#"+target).width());
		var newSize = (itemSize*(percent/100));
		
		$("#"+target).animate({
		width: newSize+"px",
		}, 1500 );	
		_addCommand('grow',target,percent);
	}
			
	_addItem= function()
	{
		console.log('Add Item "'+'item'+_itemCount+'", now we have '+(_itemCount+1)+' items');
		eval('window.item'+_itemCount+'='+'"item'+_itemCount+'"');
		var index =window.varList.length; 
		eval("window.varList["+index+"] ="+ 'window.item'+_itemCount);
		_itemCount++;
		return 'item'+(_itemCount-1);
	}	

	help = function()
	{
		console.log("Command List");
		console.log("gotoDocument()");
		console.log("gotoMain()");
		console.log("echo('???????')");
		console.log("clearAll()");
		console.log("show(item)");
		console.log("hide(item)");
		console.log("remove(item)");
		console.log("changeColor(item,'color')");
		console.log("changeBackground('color')");
		console.log("--------Media---------------------");
		console.log("addSound('url')");
		console.log("playSound(item) ???? playSound()");
		console.log("stopSound(item) ???? stopSound()");
		console.log("addPicture(item,url)");
		console.log("changePicture(item,url) ???? changePicture(url)");
		console.log("addHtml('html')");
		console.log("changeHtml(item,'html')");
		console.log("addProgressbar()");
		console.log("setProgressbar(item,percent) ???? setProgressbar(percent)");
		console.log("addBox()");
		console.log("setBox(item,width,height) ???? setBox(width,height)");
		console.log("----Animation-----");
		console.log("fadeIn");
		console.log("fadeOut");
		console.log("shake");
		console.log("grow");
		console.log("-----Input--------");
		console.log("showInput()");
		console.log("hideInput()");
		console.log("getInput()");
		console.log("----Override Function----");
		console.log("onSubmit ??????");
		console.log("onSubmit = function()");
		console.log("{");
		console.log("//??????????????????????????? input");
		console.log("}	");
	}
	
	_addCommand = function(cmd,arg,arg2,arg3)
	{
		if(_state!= REDO_STATE)
		{
			if(arg==null)
				_command[_command.length]=cmd+'()';
			else if(arg2==null)
				_command[_command.length]=cmd+'("'+arg+'")';
			else if(arg3==null)
				_command[_command.length]=cmd+'("'+arg+','+arg2+'")';
			else
				command[_command.length]=cmd+'("'+arg+','+arg2+','+arg3+'")';
		}
		
	}	
	
	_setupUi = function()
	{
		
		$('#interactive-li a').click(gotoMain);
		$('#document-li a').click(gotoDocument);
		$('#create-li a').click(gotoCreateApp);
		console.log('finish setup ui');
	}		
	
	showInput =function(type,arg)
	{
		$('#input').show('slow');
		if(type==null)
		{
			$('#input-a').show();
			_addCommand('showInput');
			_inputState = INPUT_CLASSIC;
			_inputButtonCount = 0;
		}else	if(type=='button')
		{
			$('#input-a').hide();
			$('#input-b').show();
			_inputState = INPUT_BUTTON;
			window.buttonA = 'buttonA';
			if(arg==null)
			{			
				_inputButtonCount = 0;
				_addCommand('showInput','button');
			}else
			{
				var html='';
				_inputButtonCount = arg;
				for(var i=0;i<arg-1;i++){
					var char_index = 66+i;
					window['button'+String.fromCharCode(char_index)] = 'button'+String.fromCharCode(char_index);
					html+='<button id="button'+String.fromCharCode(char_index)+ '" class="btn" onclick="onSubmit'+String.fromCharCode(char_index)+'()">'+String.fromCharCode(char_index)+'</button>';
				}
				$('#input-b').append(html);
				_addCommand('showInput','button',arg);
			}
		}
			
	}	
	
	changeButtonText = function(button,text)
	{
		$('#'+button).html(text);
	}	
	
	hideInput = function()
	{
		$('#input').hide('slow');
		_inputState = INPUT_NONE;
		_addCommand('hideInput');
	}
	
	getLog = function()
	{
		console.log(_command);	
	}	
	
	getInput = function(target)
	{
		if(target==null)
			return $('#input-text').val();
		else
			return $('#'+target).val();
	}
	
	deleteLastCharacter = function(str)
	{
	   return str.substr(0,str.length-1);
	}
	
	deleteFirstCharacter = function(str)
	{
	  return str.substr(1,str.length);
	}
	
	reDoAll = function()
	{
		var cmdList = _command;
		_state =REDO_STATE;
		clearAll();
		
		//for(var i=0;i<cmdList.length;i++)
		//{
		_timeIndex = 0;
		_timeInterval = setInterval(_timer,1000,cmdList)
		//}
	}
	
	_timer = function(list)
	{
		if(_timeIndex<list.length)
		{
			eval(list[_timeIndex++]);
		}else
		{
			_state=BEGIN_STATE;
			console.log('this should be clear');
			clearInterval(_timeInterval);
		}
	}		
	
	space = function(target,distance)
	{
		$('#'+target).css('margin-left',distance);
		_addCommand('space',distance);
	}
	
	tutorial = function()
	{
		_state = TUTORIAL_STATE;
		_tutorial_step =0;
		$('#instruction img').hide('slow');
		_tutorial(_tutorial_step);
	}
	
	_tutorial = function(step,arg)
	{
		console.log('step:'+step);
		var shouldPass=true;
		if(step==0)
		{
			setTimeout("echo('?????????? ????????????????????????????????????????????????????')",1000);
		}else if(step==1)
			setTimeout('echo("?????????????????????????????????????? ???? ??????????????????? echo(\'Hi\')??????")',3000);
		else if(step==2)
		{
			if(arg=='Hi')
				echo('??????????? ??????????????????????????????????????????????????? echo(5+5) ???? echo(6*6) ???????????');
			else
				shouldPass=false;
				
			if(_stuck>=2)
				console.log('tutorial error: you type it wrong it must be--> echo("Hi");');
		}else if(step==3)
		{
			if(!_stuck==2)
				shouldPass=false;		
		}else if(step == 4)
		{
			setTimeout("echo('????????????????????????????????????????????????????? \"\" ???????? echo(why) ????????')",1000);
		}else if(step==5)
		{
			setTimeout("echo('?????????????????????????????????????????? error ????????????????? clearAll() ????????')",5000);
				
		}else if(step==6){
			if(arg!='_clearAll')
				shouldPass=false;	
			else
				setTimeout("echo('????????????????? echo ??????????????????????????????????? ????????????? gotoDocument() ????')",1000);			
		}else if(step==7)
		{
			if(arg!='_gotoDocument')
				shouldPass=false;
			else
				setTimeout("gotoMain()",1500);	
		}else if(step==8)
		{
			setTimeout("echo('??????????????????????????????? ???????????????(??????????????????????)')",1000);
		}else if(step==9)
		{
			setTimeout("echo('??????????????????????????????????? Document ??????????')",1000);
		}else if(step==10)
		{
				
		}else if(step==11){
		
		}
		
		if(!shouldPass)
			_stuck++;
		if(_tutorial_step==10)
		{
			_state=BEGIN_STATE;
			console.log('End of tutorial');
		}else if(shouldPass)
		{
			_stuck=0;
			_tutorial_step++;
		}
			
	}	
	
	var proxied = window.alert;
  	window.alert = function() {
    // do something here
    _addCommand('alert',arguments[0]);
    return proxied.apply(this, arguments);
  };	
	
	var proxied1 = window.confirm;
  	window.confirm = function() {
    // do something here
    _addCommand('confirm',arguments[0]);
    return proxied1.apply(this, arguments);
  };	
	
	
	saveVariable = function(variableName,value)
	{
		window.localStorage.setItem(variableName, value);
	}

	loadVariable = function(variableName)
	{
		window.localStorage.getItem(variableName);
	}

	testPicnii = function()
	{
		console.log('hi type-> tutorial()   to start tutorial');
		console.log('type-> help()   to See commmand list');
	}
	
	_varCheck = function()
	{
		var cmdList =[];
		var i=0;
		for(var key in window)
		{
			if(typeof def_window[key] =='undefined' && typeof window[key] != 'function' && typeof window[key] !='undefined' && key!='FB' && key!='mode')
			{
					if(typeof window[key] =='string')
					{
						cmdList[i] ="var "+key+" = "+"'"+window[key]+"'";
					}else{
						cmdList[i] ="var "+key+" = "+window[key];
					}
					i++;
			}
		}
		return cmdList;
	}
	
			$('#example-input-b-form').on('hidden', function () {
			_hideInputCount++;
			_checkHideInputMode();
		});
		
		$('#example-input-a-form').on('hidden', function () {
			_hideInputCount++;
			_checkHideInputMode();
		});
		
		$('#example-input-b-form').on('show', function () {
			_hideInputCount--;
			_chooseInputMode = INPUT_BUTTON;
		});
		
		$('#example-input-b-form').on('show', function () {
			_hideInputCount--;
			_chooseInputMode = INPUT_BUTTON;
		});
	
	$(window.document).ready(function(){
		testPicnii();
		_setupUi();
		for(var key in window)
		{
			def_window[key] = window[key];
			
		}
	});
	
})(window.jQuery)
