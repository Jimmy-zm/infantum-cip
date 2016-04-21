function getStyle(obj, name) //获取非行间样式
	{
		if (obj.currentStyle) 
		{
			return obj.currentStyle[name];
		} 
		else 
		{
			return getComputedStyle(obj, null)[name];
		}
	}
function startMove(obj, json, fn) 
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function() 
	{
		for (var attr in json) {
			var cur = 0;
			if (attr == 'opacity') 
			{
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100); //math.round 四舍五入取整
			} 
			else 
			{
				cur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (cur == json[attr]) 
			{
				clearInterval(obj.timer);
				if (fn) fn(); //执行完关闭定时器执行函数（实现链式运动关键）
			} 
			else 
			{
				if (attr == 'opacity') 
				{
					obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
					obj.style.opacity = (cur + speed) / 100;

					//							document.getElementById('txt1').value=obj.style.opacity;
				} 
				else 
				{
					obj.style[attr] = cur + speed + 'px';
				}
			};
		};
	}, 30);
}



function tas() {
	var write = document.getElementById('write');
	var writeValue = write.innerHTML;

	if (writeValue == '编辑') 
	{
		$("input[name=putd]").removeAttr("readonly");
		$("#write").text('取消编辑');
	} 
	else 
	{
		$("input[name=putd]").attr("readonly", "readonly");
		$("#write").text('编辑');
	}

}

function save() 
{
	var write = document.getElementById('write');
	var writeValue = write.innerHTML;
	$("input[name=putd]").attr("readonly", "readonly");
	$("#write").text('编辑');
}


function changePwd0() 
{
	var hiddenPwd = document.getElementById('hiddenPwd');
	var changePwd = document.getElementById('changePwd');

	if (changePwd.value == '修改密码') 
	{
		
$(hiddenPwd).slideDown(500);
		changePwd.value = '收起';
		$("#changePwd").text('收起');
	} 
	else 
	{
		
$(hiddenPwd).slideUp(500);
		changePwd.value = '修改密码';
		$("#changePwd").text('修改密码');
	}
}


//修改奖励人数
function numRed()
{
	var numRed=document.getElementById('reward-num-red');
	var rewardNum=document.getElementById('reward-num');
	
	if(rewardNum.innerHTML>0)
	{
		rewardNum.innerHTML=parseInt(rewardNum.innerHTML)-1;
	}
}
function numAdd()
{
	var numAdd=document.getElementById('reward-num-add');
	var rewardNum=document.getElementById('reward-num');
	
	if(rewardNum.innerHTML>=0)
	{
		rewardNum.innerHTML=parseInt(rewardNum.innerHTML)+1;
	}
}

//翻页
function pageDown()
{
	var pageDown=document.getElementById('pageDown');
	var pageNum=document.getElementById('pageNum');
	
	if(pageNum.innerHTML>1)
	{
		pageNum.innerHTML=parseInt(pageNum.innerHTML)-1;
	}
}
function pageUp()
{
	var pageUp=document.getElementById('pageUp');
	var pageNum=document.getElementById('pageNum');
	
	if(pageNum.innerHTML>0)
	{
		pageNum.innerHTML=parseInt(pageNum.innerHTML)+1;
	}
}




