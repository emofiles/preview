(function($){"use strict";$(document).ready(function(){$("#homepage-slider1").owlCarousel({nav:true,slideSpeed:300,dots:false,paginationSpeed:400,singleItem:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],items:1});$(".about-slider").owlCarousel({nav:false,slideSpeed:300,dots:false,paginationSpeed:400,singleItem:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],items:2});$("#homepage-slider2").owlCarousel({nav:false,slideSpeed:300,dots:true,paginationSpeed:400,singleItem:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],items:1});$("#hv2-course-list").owlCarousel({nav:true,slideSpeed:300,dots:false,paginationSpeed:400,margin:30,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],items:4,responsive:{0:{items:1},480:{items:2},768:{items:3},980:{items:3},1024:{items:4},}});$(".professors").owlCarousel({nav:true,slideSpeed:300,dots:false,paginationSpeed:400,margin:30,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],items:2,responsive:{0:{items:1},480:{items:2},768:{items:3},980:{items:3},1024:{items:2},}});$("#student-testimonial").owlCarousel({nav:false,slideSpeed:300,dots:true,paginationSpeed:400,margin:30,items:2,responsive:{0:{items:1},480:{items:1},768:{items:2},980:{items:2}}});jQuery('.nav-mobile-menu').meanmenu({meanMenuContainer:'.menu-icon-bar',meanScreenWidth:"992"});if($('.mean-nav > .navbar-nav li').hasClass('submenu')){$(".mean-nav ul li.submenu").removeClass('submenu');$("ul.dropdown-menu").removeClass('dropdown-menu');}
$('#mc-form').ajaxChimp({url:'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'});jQuery('.signle-fid h4').counterUp({delay:15,time:1000});var eventData=[{"date":"2016-11-12","badge":false,"title":"New Collage Date","url":"http://google.com"},{"date":"2016-11-16","badge":false,"title":"New School Date","location":"narayanganj","url":"http://twist.com"}];$("#my-calendar").zabuto_calendar({cell_border:true,today:true,show_days:true,weekstartson:0,data:eventData,action:function(){return myDateFunction(this.id,false);},});function myDateFunction(id){var hasEvent=$("#"+ id).data("hasEvent");if(hasEvent){var eventTitle=$("#"+ id).attr('title');var eventUrl=$("#"+ id).attr('url');$(".title").text(eventTitle);$("a.box").attr("href",eventUrl);}
return true;}
$('#counter').countdown({date:'01/12/2017 23:59:59',offset:-8,day:'Day',days:'Days'},function(){$('#counter').remove();});$('.collapse').on('shown.bs.collapse',function(){$(this).parent().find("span").addClass("accodion-down");}).on('hidden.bs.collapse',function(){$(this).parent().find("span").removeClass("accodion-down");});$("#cf .alert").hide();$("#cf").validate({submitHandler:function(form){var submitButton=$(this.submitButton);submitButton.button("Sending..");$.ajax({type:"POST",url:"/assets/sendmail.php",data:{"name":$("#cf-name").val(),"email":$("#cf-email").val(),"subject":$("#cf-subject").val(),"message":$("#cf-message").val()},dataType:"json",complete:function(){submitButton.button("reset");$("#cf .form-control").val("");setTimeout(function(){$("button.submit,#cf .form-control").hide();$(".alert").fadeIn();},1000);}});}});});})(jQuery);