window.varList =[];
window.BUTTON = "button";
var INPUT_NONE=0,INPUT_CLASSIC=1,INPUT_BUTTON=2;
var _inputState = INPUT_NONE ;
var _inputButtonCount=0 ;
(function($){
	var _itemCount = 0;

		
	changeColor = function(target,color)
	{
		$('#'+target).css('color',color);	
	}	
	
	changeBackground = function(background)
	{
		$('body').css('background',background);
	}	
	
	addSound =function(target,url)
	{
		 var html ='<div id="item'+_itemCount+'" >';
		 html += '<audio id="sound_item'+_itemCount+'" controls autobuffer>';
		 html += '<source src="'+url+'" type="audio/mpeg" />';
		 html +='</audio>';
		 html +='</div>';
		if(url==null)
			 $('#output').append(html);
		else
			 $('#'+target).append(html);
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
		
			$('#'+target+' audio')[0].play();
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
				
		}
		
		
	}
	
	addText = function(target,text)
	{
		var html='<span id="item'+_itemCount+'" style="font-size:10px">'+text+'</span>';
		$('#'+target).append(html);
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
	
	addPicture = function(target,url)
	{
		var html='<div id="item'+_itemCount+'" class="" display="1"><img id="ref_item'+_itemCount+'" src="'+url+'" ></img></div>';
		$('#'+target).append(html);
		return _addItem();
	}	
	
	getPictureUrl = function(target)
	{
		var img = $('#ref_'+target);
		return img.attr('src');
	}
	
	changePicture = function(target,url)
	{
		if(url!=null)
		{
			var img = $('#ref_'+target);
			img.attr('src',url);
		}else
		{
			var img = $('#output img');
			img.attr('src',target);
		}
	}
	
	addHtml = function(target,html)
	{
		var html = 	'<div id="item'+_itemCount+'" class="">'+html+'</div>';
		if(html==null)
			$('#output').append(html);
		else
			$('#'+target).append(html);
		return _addItem();
	}	
	
	changeHtml = function(target,html)
	{
		$('#'+target).html(html);
	}
	
	hide = function(item)
	{
		$('#'+item).hide('slow');
		$('#'+item).attr('display', '0')
		
	}	
	
	show = function(item)
	{
		$('#'+item).show('slow');
		$('#'+item).attr('display', '1')
		
	}
	
	remove = function(item)
	{
		$('#'+item).remove();
		
	}	
	
	echo = function(target,message)
	{	
		var html ='<h2 id="item'+_itemCount+'">'+message+'</h2>';
		if(message==null)
			$('#output').append(html);
		else
			$('#'+target).append(html);
		$('#item'+_itemCount).fadeOut().fadeIn();
		
		return _addItem();
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
		
	
	}
	fadeOut = function(target)
	{
		$("#"+target).fadeOut('slow');
		
	
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

		
	}
	
	grow = function(target,percent)
	{
		var itemSize = ($("#"+target).width());
		var newSize = (itemSize*(percent/100));
		
		$("#"+target).animate({
		width: newSize+"px",
		}, 1500 );	
		
	}
			
	_addItem= function()
	{
		
		eval('window.item'+_itemCount+'='+'"item'+_itemCount+'"');
		var index =window.varList.length; 
		eval("window.varList["+index+"] ="+ 'window.item'+_itemCount);
		_itemCount++;
		return 'item'+(_itemCount-1);
	}	
	
	
	_setupUi = function()
	{
		
	}		
	
	changeButtonText = function(button,text)
	{
		$('#'+button).html(text);
	}	
	
	getInput = function(target)
	{
		if(target==null)
			return $('#input-text').val();
		else
		{
			if($('#'+target).val()==''){
				return $('input[name='+target+']:checked').val();  
			}else
				return $('#'+target).val();
		}
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

	saveVariable = function(variableName,value)
	{
		window.localStorage.setItem(variableName, value);
	}

	loadVariable =function(variableName)
	{
		return window.localStorage.getItem(variableName);
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
		
	}
		
	
	var proxied = window.alert;
  	window.alert = function() {
    // do something here
    
    return proxied.apply(this, arguments);
  };	
	
	var proxied1 = window.confirm;
  	window.confirm = function() {
    // do something here
   
    return proxied1.apply(this, arguments);
  };	
	
	
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
		if(typeof(onStart) !='undefined' && onStart !=null)
			onStart();
		
	});
	
})(window.jQuery)
