!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){if(null===g){for(var t=e.length,n=0,i=document.getElementById(s),a="<ul>";t>n;)a+="<li>"+e[n]+"</li>",n++;a+="</ul>",i.innerHTML=a}else g(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function n(e){for(var t=e.getElementsByTagName("a"),n=t.length-1;n>=0;n--)t[n].setAttribute("target","_blank")}function i(e,t){for(var n=[],i=new RegExp("(^| )"+t+"( |$)"),a=e.getElementsByTagName("*"),s=0,l=a.length;l>s;s++)i.test(a[s].className)&&n.push(a[s]);return n}function a(e){if(void 0!==e){var t=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(t).split('"')[1]}}var s="",l=20,r=!0,o=[],d=!1,c=!0,p=!0,m=null,u=!0,h=!0,g=null,w=!0,f=!1,v=!0,b="en",y=!0,T=!1,k=null,x=!1,C={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),void 0===e.dataOnly&&(e.dataOnly=!1),d)o.push(e);else{d=!0,s=e.domId,l=e.maxTweets,r=e.enableLinks,p=e.showUser,c=e.showTime,h=e.showRetweet,m=e.dateFunction,g=e.customCallback,w=e.showInteraction,f=e.showImages,v=e.linksInNewWindow,y=e.showPermalinks,T=e.dataOnly;var t=document.getElementsByTagName("head")[0];null!==k&&t.removeChild(k),k=document.createElement("script"),k.type="text/javascript",k.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||b)+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(k)}},callback:function(s){function g(e){var t=e.getElementsByTagName("img")[0];return t.src=t.getAttribute("data-src-2x"),e}var b=document.createElement("div");b.innerHTML=s.body,"undefined"==typeof b.getElementsByClassName&&(u=!1);var k=[],x=[],E=[],N=[],_=[],B=[],I=[],A=0;if(u)for(var L=b.getElementsByClassName("tweet");A<L.length;)L[A].getElementsByClassName("retweet-credit").length>0?_.push(!0):_.push(!1),(!_[A]||_[A]&&h)&&(k.push(L[A].getElementsByClassName("e-entry-title")[0]),B.push(L[A].getAttribute("data-tweet-id")),x.push(g(L[A].getElementsByClassName("p-author")[0])),E.push(L[A].getElementsByClassName("dt-updated")[0]),I.push(L[A].getElementsByClassName("permalink")[0]),void 0!==L[A].getElementsByClassName("inline-media")[0]?N.push(L[A].getElementsByClassName("inline-media")[0]):N.push(void 0)),A++;else for(var L=i(b,"tweet");A<L.length;)k.push(i(L[A],"e-entry-title")[0]),B.push(L[A].getAttribute("data-tweet-id")),x.push(g(i(L[A],"p-author")[0])),E.push(i(L[A],"dt-updated")[0]),I.push(i(L[A],"permalink")[0]),void 0!==i(L[A],"inline-media")[0]?N.push(i(L[A],"inline-media")[0]):N.push(void 0),i(L[A],"retweet-credit").length>0?_.push(!0):_.push(!1),A++;k.length>l&&(k.splice(l,k.length-l),x.splice(l,x.length-l),E.splice(l,E.length-l),_.splice(l,_.length-l),N.splice(l,N.length-l),I.splice(l,I.length-l));var M=[],A=k.length,R=0;if(T)for(;A>R;)M.push({tweet:k[R].innerHTML,author:x[R].innerHTML,time:E[R].innerText,image:a(N[R]),rt:_[R],tid:B[R],permalinkURL:I[R].href}),R++;else for(;A>R;){if("string"!=typeof m){var H=E[R].getAttribute("datetime"),P=new Date(E[R].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),F=m(P,H);if(E[R].setAttribute("aria-label",F),k[R].innerText)if(u)E[R].innerText=F;else{var U=document.createElement("p"),O=document.createTextNode(F);U.appendChild(O),U.setAttribute("aria-label",F),E[R]=U}else E[R].textContent=F}var W="";r?(v&&(n(k[R]),p&&n(x[R])),p&&(W+='<div class="user">'+t(x[R].innerHTML)+"</div>"),W+='<p class="tweet">'+t(k[R].innerHTML)+"</p>",c&&(W+=y?'<p class="timePosted"><a href="'+I[R]+'">'+E[R].getAttribute("aria-label")+"</a></p>":'<p class="timePosted">'+E[R].getAttribute("aria-label")+"</p>")):k[R].innerText?(p&&(W+='<p class="user">'+x[R].innerText+"</p>"),W+='<p class="tweet">'+k[R].innerText+"</p>",c&&(W+='<p class="timePosted">'+E[R].innerText+"</p>")):(p&&(W+='<p class="user">'+x[R].textContent+"</p>"),W+='<p class="tweet">'+k[R].textContent+"</p>",c&&(W+='<p class="timePosted">'+E[R].textContent+"</p>")),w&&(W+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+B[R]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+B[R]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+B[R]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>"),f&&void 0!==N[R]&&(W+='<div class="media"><img src="'+a(N[R])+'" alt="Image from tweet" /></div>'),M.push(W),R++}e(M),d=!1,o.length>0&&(C.fetch(o[0]),o.splice(0,1))}};return window.twitterFetcher=C,C});