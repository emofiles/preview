!function(a){"use strict";a.cColorSwitcher=function(b){b=a.extend({position:"left",switcherTitle:"No Colors",switcherColors:[],switcherTarget:""},b);var c=a('<div id="cColorSwitcher" class="clearfix"></div>'),d=a("body");c.css({position:"fixed",top:"50%",left:"-250px",transform:"translateY(-50%)","z-index":"9999"}),a('<div class="ccs--body"><h6 style="margin: 0; font-size: 16px; line-height: 24px;">'+b.switcherTitle+'</h6><ul style="margin: 0; padding: 0; list-style: none; overflow: hidden"></ul></div>').css({width:"250px",border:"1px solid #e9e9e9",padding:"15px","float":"left","background-color":"#fff","box-shadow":"rgba(0, 0, 0, 0.137255) 0px 9px 46px 0px, rgba(0, 0, 0, 0.117647) 0px 11px 15px 0px, rgba(0, 0, 0, 0.2) 0px 24px 38px 0px"}).appendTo(c).children("ul").append(function(){var c,a="";for(c=0;c<b.switcherColors.length;c++)"undefined"==typeof b.switcherColors[c].fgColor&&(b.switcherColors[c].fgColor="transparent"),a=a+'<li data-file-path="'+b.switcherColors[c].filepath+'"><span style="position: absolute; width: 100%; height: 100%; background-color: '+b.switcherColors[c].bgColor+';"></span><span style="position: absolute;  top: 0; right: -2px; width: 20px; height: 45px; transform: rotate(45deg); background-color: '+b.switcherColors[c].fgColor+';"></span></li>';return a}).children("li").css({position:"relative","float":"left",width:"30px",height:"30px","margin-top":"10px","margin-right":"10px",border:"1px solid #e9e9e9",overflow:"hidden",cursor:"pointer"}).on("click",function(){var c=a(this);b.switcherTarget.length&&b.switcherTarget.attr("href",c.data("file-path")),c.hasClass("active")||c.addClass("active").siblings().removeClass("active"),e.css("background-color",c.children("span").eq(0).css("background-color"))}).children("span").css({position:"absolute"});var e=a('<div class="ccs--toggle-btn"><i class="fa fa-paint-brush"></i></div>').css({"float":"right",width:"50px",padding:"12px 0",color:"#fff","background-color":b.switcherColors[0].bgColor,"box-shadow":"rgba(0, 0, 0, 0.137255) 10px 5px 46px 8px, rgba(0, 0, 0, 0.2) 10px 0px 26px -6px","font-family":'"Arial", sans-serif',"font-size":"18px","font-weight":"100","line-height":"22px","text-align":"center",cursor:"pointer"}).on("click",function(){c.hasClass("opened")?(c.removeClass("opened"),"right"===b.position?c.animate({right:"-250px"},500):c.animate({left:"-250px"},500)):(c.addClass("opened"),"right"===b.position?c.animate({right:"0"},500):c.animate({left:"0"},500))}).appendTo(c);return"right"===b.position&&(c.css({left:"auto",right:"-250px"}),c.find(".ccs--body").css("float","right")),c.appendTo(d),c}}(jQuery);