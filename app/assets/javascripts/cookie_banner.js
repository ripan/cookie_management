var el_div; // cookie banner
	
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}

function setCookie(c_name,value,exdays)
{
	var cookie_string = c_name + "=" + escape(value);
	
	if (exdays)
	{
		var exdate = new Date;
		exdate.setDate(exdate.getDate() + exdays);
		cookie_string += "; expires=" + exdate.toUTCString();
	}

	document.cookie = cookie_string;
}

function unsetCookie(c_name)
{
	var c_value=escape('') +  "; expires="+ (new Date('1970')).toUTCString();
	document.cookie=c_name + "=" + c_value;	
}

function checkCookie()
{
	var name = window.location.hostname;
	var exp_days =10;
	var el_banner = $('.cookie-banner');
	var el_chk_cookie = document.getElementById('chkAcceptCookie')
	var cookie=getCookie(name);
	
	if (cookie!=null && cookie!="")
	{
		ck_bnr.style.display='none';	
	}
	else 
	{
		if(el_chk_cookie.checked){
			setCookie(name,window.location,exp_days);
			ck_bnr.style.display='none';
		}else{
			ck_bnr.style.display='block';
		}
	}
}

function show_cookie_banner(options){
	
	ck_bnr =  document.createElement("div");
	ck_bnr.className="cookie-banner";
	
	ck_bnr_head =  document.createElement("div");
	ck_bnr_head.className="cookie-banner-head";
	
	ck_bnr_head_cnt =  document.createElement("div");
	ck_bnr_head_cnt.className="cookie-banner-head-content";
	
	ck_bnr_head_logo =  document.createElement("div");
	ck_bnr_head_logo.className="cookie-banner-head-logo";
	
	ck_bnr_head_link =  document.createElement("div");
	ck_bnr_head_link.className="cookie-banner-head-link";
	
	
	ck_bnr_head_cnt_1 =  document.createElement("span");
	ck_bnr_head_cnt_1.textContent = options.banner_head_text;
	
	el_more_link =  document.createElement("a");
	el_more_link.textContent = 'More';
	el_more_link.href="#"
	el_more_link.className="hide"
	
	

	
	ck_bnr_head_cnt_2 =  document.createElement("span");
	el_input = document.createElement('input');
	el_input.id="chkAcceptCookie";
	el_input.type="checkbox";
	el_input.name="chkAcceptCookie";
	
	el_span = document.createElement("span");
	el_span.textContent = options.banner_message;
	
	el_button = document.createElement('button');
	el_button.type="button";
	el_button.className="btn-green";
	el_button.textContent="Continue";
	
	ck_bnr_head_cnt_2.appendChild(el_input);
	ck_bnr_head_cnt_2.appendChild(el_span);
	ck_bnr_head_cnt_2.appendChild(el_button);

	ck_bnr_head_cnt.appendChild(ck_bnr_head_cnt_1);
	ck_bnr_head_cnt.appendChild(document.createElement('br'));
	ck_bnr_head_cnt.appendChild(ck_bnr_head_cnt_2);

	
	el_img = document.createElement("img");
	el_img.src=options.logo;
	el_img.height="40";
	el_img.className = 'cookie_logo';
	ck_bnr_head_logo.appendChild(el_img);
	
	ck_bnr_body = document.createElement("div");
	ck_bnr_body.className="cookie-banner-body";
	ck_bnr_body.id="cookie-banner-body";
	ck_bnr_body.style.display="none";
	
	ck_bnr_body_message =  document.createElement("div");
	ck_bnr_body_message.className="cookie-banner-body-message";
	ck_bnr_body_message.textContent=options.banner_body_text;
	
	ck_bnr_body_left =  document.createElement("div");
	ck_bnr_body_left.className="cookie-banner-body-left";
	
	ck_bnr_body_right = document.createElement("div");
	ck_bnr_body_right.className="cookie-banner-body-right";

	
	ck_title_parent = document.createElement("div");
	ck_title_parent.id="cookie-title";
	
	
	el_more_link.addEventListener('click',function (e) {

		if(this.className == 'hide'){
			this.className = 'show'
			document.getElementById('cookie-banner-body').style.display='block';
		}else{
			this.className = 'hide'
			document.getElementById('cookie-banner-body').style.display='none';
		}
	
	},false);
	
	
	
	
		
	for(i=0; i < options.info.length; i++){
		ck_title_child =  document.createElement("div");
		ck_title_child.textContent=options.info[i].title
		ck_title_child.id=i
		ck_title_child.className='cookie-menu';
		ck_title_child.addEventListener('click',function (e) {
			children = document.getElementById('cookie-info').children
			for(j=0;j<children.length;j++){
				children[j].style.display='none';
			}
			document.getElementById('cookie-info-'+this.id).style.display='block';
		},false);
		ck_title_parent.appendChild(ck_title_child);
		ck_title_child.appendChild(document.createElement('br'));
	}

	ck_bnr_body_left.appendChild(ck_title_parent);
	
	
	ck_info_parent =  document.createElement("div");
	ck_info_parent.id="cookie-info";
	for(i=0; i < options.info.length; i++){
		ck_info_child =  document.createElement("div");
		ck_info_child.textContent=options.info[i].description
		ck_info_child.id='cookie-info-'+i
		if(i==0)
		ck_info_child.style.display="block"
		else
		ck_info_child.style.display="none"
		ck_info_parent.appendChild(ck_info_child);
		ck_info_child.appendChild(document.createElement('br'));
		cookies = options.info[i].cookies;
		
		for (var k in cookies) {
			ck_info_child.appendChild(document.createElement('br'));
			el =  document.createElement("span");
			el.textContent = cookies[k].join(', ');
			el_bold =  document.createElement("b");
			el_bold.textContent=k + ':  ';
			ck_info_child.appendChild(el_bold);
			ck_info_child.appendChild(el);
		}
		
	}
	ck_bnr_body_right.appendChild(ck_info_parent);

	ck_bnr_head_link.appendChild(el_more_link);
	
	
	ck_bnr_head.appendChild(ck_bnr_head_cnt);
	ck_bnr_head.appendChild(ck_bnr_head_logo);
	ck_bnr_head.appendChild(ck_bnr_head_link);
	
	
	
		
	ck_bnr_body.appendChild(ck_bnr_body_message);
	ck_bnr_body.appendChild(ck_bnr_body_left);
	ck_bnr_body.appendChild(ck_bnr_body_right);
		
	
	
	ck_bnr.appendChild(ck_bnr_head);
	ck_bnr.appendChild(ck_bnr_body);
	
	
	
	if(!document.body){
		alert('Please include the script at the end of <body> tag ');
	}else{
		document.body.appendChild(ck_bnr);
		el_button.addEventListener('click',function (e) {
			checkCookie();
		},false);
		checkCookie();	
	}
	
	
	
	
	// 
	// 
	// 
	// 
	// el_div = document.createElement("div");
	// el_div.className="cookie-banner";
	// el_div.textContent = "This website works best using cookies which are currently blocked. Allow cookies?";
	// 
	// el_sp = document.createElement("p");
	// el_div.appendChild(el_sp)
	// 
	// el_img_div = document.createElement("div");
	// el_img_div.className="cookie-banner-logo";
	// el_img = document.createElement("img");
	// el_img.src=options.logo;
	// el_img.height="40";
	// el_img_div.appendChild(el_img);
	// el_div.appendChild(el_img_div);
	// 
	// var el_input = document.createElement('input');
	// el_input.id="chkAcceptCookie";
	// el_input.type="checkbox";
	// el_input.name="chkAcceptCookie";
	// 
	// var el_button = document.createElement('button');
	// el_button.type="button";
	// el_button.className="btn-green";
	// el_button.textContent="Continue";
	// 	
	// var el_p = document.createElement("span");
	// el_p.appendChild(el_input);
	// 
	// var el_span = document.createElement("span");
	// el_span.textContent = 'I accept cookies from this site.';
	// el_p.appendChild(el_span);
	// el_p.appendChild(el_button);
	// 
	// el_div.appendChild(el_p);
	// 
	// if(!document.body){
		// 	alert('Please include the script at the end of <body> tag ');
		// }else{
			// 	document.body.appendChild(el_div);
			// 	el_button.addEventListener('click',function (e) {
				// 		checkCookie();
				// 	},false);
				// 
				// 	checkCookie();	
				// }
			}
