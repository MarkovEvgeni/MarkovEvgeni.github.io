"use strict";document.addEventListener("DOMContentLoaded",function(){function e(){var e=document.querySelectorAll(".carousels__item--slides"),t=0-e[0].offsetWidth/3,n=2*t;e[1].style.left=t+"px",e[2].style.left=n+"px"}function t(e){var t=e.parentNode,n=(t.offsetWidth,t.querySelector(".carousels__item--slides"));n.offsetWidth,parseInt(getComputedStyle(n).left);e.addEventListener("mouseover",o),e.addEventListener("mouseout",r),e.addEventListener("click",i)}function n(e){var t=e.parentNode,n=(t.offsetWidth,t.querySelector(".carousels__item--slides"));n.offsetWidth,parseInt(getComputedStyle(n).left);e.addEventListener("mouseover",o),e.addEventListener("mouseout",r),e.addEventListener("click",s)}function o(){this.style.opacity=1,this.style.cursor="pointer"}function r(){this.style.opacity=.5,this.style.cursor="default"}function i(){var e=this.parentNode,t=e.offsetWidth,n=e.querySelector(".carousels__item--slides"),o=n.offsetWidth,r=parseInt(getComputedStyle(n).left);o+r-t==0&&(r=t),r-=t,n.style.left=r+"px"}function s(){var e=this.parentNode,t=e.offsetWidth,n=e.querySelector(".carousels__item--slides"),o=n.offsetWidth,r=parseInt(getComputedStyle(n).left);0==r&&(r=-o),r+=t,n.style.left=r+"px"}window.onresize=e,e();for(var a=document.querySelectorAll(".next"),l=document.querySelectorAll(".prev"),c=0;c<a.length;++c)t(a[c]);for(var c=0;c<l.length;++c)n(l[c])}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n,o;if(null==this)throw new TypeError(" this is null or not defined");var r=Object(this),i=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(n=t),o=0;o<i;){var s;o in r&&(s=r[o],e.call(n,s,o,r)),o++}}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),document.addEventListener("DOMContentLoaded",function(){function e(e,t,n){t=400,n=24;var o=n,r=t,i=r/o;e.preventDefault();var s=a.offsetHeight,d=c.offsetHeight;if(0==s){a.style.height=s+"px",a.classList.remove("non-visible");var u=setInterval(function(){if(i>0){var e=d/(r/o);s+=e,a.style.height=s+"px",i-=1}else clearInterval(u),l.innerHTML="Hide partners"},r/o)}else var u=setInterval(function(){if(i>0){var e=d/(r/o);s-=e,a.style.height=s+"px",i-=1}else clearInterval(u),a.classList.add("non-visible"),l.innerHTML="See other partners"},r/o)}function t(){var e=document.querySelectorAll(".masonry__item");if(e.length>6){var t=document.querySelector(".masonry__item");t.remove()}}function n(){var e=document.querySelector(".mosaic"),t=document.createElement("div");u=t,t.className="text__container masonry__item",e.appendChild(t);var n=document.createElement("div");n.className="inner__text",n.innerHTML=d,t.appendChild(n),r()}function o(){var e=document.querySelector(".mosaic");new Masonry(e,{itemSelector:".masonry__item",columnWidth:5,isAnimated:!0,animationOptions:{queue:!1,duration:500}})}function r(){var e="https://www.googleapis.com/customsearch/v1?q="+d+"&cx=016732624816471061428:3gt2rcxo7lk&imgSize=medium&fileType=jpg&num=1&searchType=image&imgDominantColor=pink&key=AIzaSyBncOk0OKD0p7SEqpnCnj68lZAl0zqxxvo",t=new XMLHttpRequest;t.open("GET",e,!0),t.send(),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status)console.log("Изображение по данному запросу не получено "+t.status+": "+t.statusText);else{var e=JSON.parse(t.responseText),n=e.items[0].link,r=e.items[0].image.width,i=e.items[0].image.height,s=r/i;if(s>2)var a=440;else var a=310*s;u.style.backgroundImage="url("+n+")",u.style.width=a+"px",u.style.backgroundSize="auto 310px",o()}}}function i(){function e(e,t){var n="jsonp_callback_"+Math.round(1e5*Math.random());window[n]=function(e){delete window[n],document.body.removeChild(o),t(e)};var o=document.createElement("script");o.src=e+(e.indexOf("?")>=0?"&":"?")+"callback="+n,document.body.appendChild(o)}e("http://randomword.setgetgo.com/get.php",function(e){d=e.Word,t(),n(),o()})}function s(e){e.preventDefault(),d=document.querySelector(".search__input").value,0==d?i():(t(),n(),o())}var a=document.querySelector(".hidden-list"),l=document.querySelector(".partners__link"),c=document.querySelector(".etalon");l.addEventListener("click",e);var d,u,m=0,f=setTimeout(function e(){i(),m++,m<5?f=setTimeout(e,2e3):clearTimeout},2e3),p=document.querySelector(".search__btn");p.addEventListener("click",s)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2hpZnQiLCJzbGlkZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlclNoaWZ0Iiwib2Zmc2V0V2lkdGgiLCJzbGlkZXJTaGlmdERvdWJsZSIsImNhbGN1bGF0ZU5leHQiLCJpdGVtIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInRhcGUiLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwibGVmdCIsImhvdmVyIiwibm9Ib3ZlciIsInNsaWRlUmlnaHQiLCJ2aXNpYmxlUGFydCIsIndob2xlVGFwZSIsInNsaWRlTGVmdCIsInRoaXMiLCJzdHlsZSIsIm9wYWNpdHkiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsIm5leHRBcnIiLCJwcmV2QXJyIiwiaSIsImxlbmd0aCIsImNhbGN1bGF0ZVByZXYiLCJjYWxsYmFjayIsInRoaXNBcmciLCJUIiwiayIsIlR5cGVFcnJvciIsIk8iLCJPYmplY3QiLCJsZW4iLCJhcmd1bWVudHMiLCJrVmFsdWUiLCJjYWxsIiwiRWxlbWVudCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiaGVpZ2h0IiwiaGlkZGVuRnJpZW5kcyIsIm9mZnNldEhlaWdodCIsInQiLCJldGFsb25IZWlnaHQiLCJmIiwic3RlcHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZWwiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImNsZWFySW50ZXJ2YWwiLCJzaG93QnV0dG9uIiwic3RlcCIsInRpbWUiLCJmcHMiLCJpbm5lckhUTUwiLCJhZGQiLCJhZGRCbG9jayIsIm1vc2FpYyIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjdXJyZW50RGl2IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJpbWFnZSIsIm1hc29ucnkiLCJlbGVtIiwiZGl2VGV4dCIsIm1zbnJ5IiwiTWFzb25yeSIsInRleHRWYWx1ZSIsIml0ZW1TZWxlY3RvciIsImNvbHVtbldpZHRoIiwiZHVyYXRpb24iLCJpc0FuaW1hdGVkIiwidXJsUXVlcnkiLCJxdWV1ZSIsInhtbFJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJkYXRhIiwiSlNPTiIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJpdGVtcyIsImltYWdlV2lkdGgiLCJyYXRpbyIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiaW1hZ2VMaW5rIiwiUmFuZG9tV29yZCIsImpzb25wIiwidXJsIiwiV29yZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInJlbW92ZUJMb2NrIiwic2NyaXB0Iiwic3JjIiwiaW5kZXhPZiIsImNhbGxiYWNrTmFtZSIsImJvZHkiLCJhZGRFbGVtZW50IiwiZXZlbnQiLCJ2YWx1ZSIsImV0YWxvbiIsInNob3dIaWRlQmxvY2siLCJ0aW1lcklkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRpY2siLCJibG9ja3MiLCJidXR0b24iXSwibWFwcGluZ3MiOiJZQUFBQSxVQUFTQyxpQkFBaUIsbUJBQW9CLFdBRTFDLFFBQUFDLEtBR0ksR0FBSUMsR0FBVUgsU0FBU0ksaUJBQWlCLDRCQUQ1Q0MsRUFBa0IsRUFBQUYsRUFBQSxHQUFBRyxZQUFBLEVBQ1ZILEVBQW1CQyxFQUFBQSxDQUN2QkQsR0FBSUUsR0FBQUEsTUFBQUEsS0FBa0JGLEVBQVdHLEtBQ2pDSCxFQUFJSSxHQUFBQSxNQUFBQSxLQUFvQkYsRUFBeEIsS0F3QkosUUFBU0csR0FBZUMsR0FDcEIsR0FBSUMsR0FBU0QsRUFBS0UsV0FFZEMsR0FEY0YsRUFBT0osWUFDZEksRUFBT0csY0FBYyw0QkFDaEJELEdBQUtOLFlBQ1ZRLFNBQVNDLGlCQUFpQkgsR0FBTUksS0FJdkNQLEdBQUtSLGlCQUFp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M0QsU0FBSnJELGNBQUEsVUFFQWtELEdBQUlQLGlCQUFKLFFBQUFzRSxFQTJERixJQUFBNUMsR0FDRTZDLEVBRUVDLEVBQUFBLEVBRUhELEVBUkhFLFdBQUEsUUFBQUMsS0FDRXJCLElBVUY1RSxJQUNBQSxFQUFTbUYsRUFDTFcsRUFBSUksV0FBU25JLEVBQVNJLEtBRWxCNEgsY0FFSCxLQW9JQUksRUFBQXBJLFNBQUFhLGNBQUEsZUFFSnVILEdBQUFuSSxpQkFBQSxRQUFBeUgiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2hpZnQgKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2Vsc19faXRlbS0tc2xpZGVzJyk7XHJcbiAgICAgICAgdmFyIHNsaWRlclNoaWZ0ID0gMCAtIHNsaWRlcnNbMF0ub2Zmc2V0V2lkdGgvMztcclxuICAgICAgICB2YXIgc2xpZGVyU2hpZnREb3VibGUgPSBzbGlkZXJTaGlmdCAqIDI7XHJcbiAgICAgICAgc2xpZGVyc1sxXS5zdHlsZS5sZWZ0ID0gc2xpZGVyU2hpZnQrJ3B4JztcclxuICAgICAgICBzbGlkZXJzWzJdLnN0eWxlLmxlZnQgPSBzbGlkZXJTaGlmdERvdWJsZSsncHgnOyAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHNoaWZ0O1xyXG4gICAgc2hpZnQoKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB2YXIgbmV4dEFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXh0Jyk7XHJcbiAgICB2YXIgcHJldkFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmV2Jyk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dEFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNhbGN1bGF0ZU5leHQobmV4dEFycltpXSk7XHJcbiAgICB9OyAgIFxyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXZBcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBjYWxjdWxhdGVQcmV2KHByZXZBcnJbaV0pO1xyXG4gICAgfTsgICBcclxuICAgIFxyXG4vLyAgICBuZXh0QXJyLmZvckVhY2goY2FsY3VsYXRlTmV4dCk7IGZvckVhY2gg0L3QtSDRgNCw0LHQvtCw0LXRgiDRgSDQvtCx0YrQtdC60YLQsNC80LggTm9kZUxpc3Qg0LIgSUU4XHJcbi8vICAgIHByZXZBcnIuZm9yRWFjaChjYWxjdWxhdGVQcmV2KTsgZm9yRWFjaCDQvdC1INGA0LDQsdC+0LDQtdGCINGBINC+0LHRitC10LrRgtCw0LzQuCBOb2RlTGlzdCDQsiBJRThcclxuICAgICAgICBcclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU5leHQgKGl0ZW0pIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gaXRlbS5wYXJlbnROb2RlO1xyXG4gICAgICAgIHZhciB2aXNpYmxlUGFydCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB2YXIgdGFwZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxzX19pdGVtLS1zbGlkZXMnKTtcclxuICAgICAgICB2YXIgd2hvbGVUYXBlID0gdGFwZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB2YXIgbGVmdCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGFwZSkubGVmdCk7XHJcbi8vICAgICAgICBpZiAod2hvbGVUYXBlK2xlZnQtdmlzaWJsZVBhcnQgPT0wKSB7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhvdmVyKTtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbm9Ib3Zlcik7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNsaWRlUmlnaHQpO1xyXG4vLyAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUHJldiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudE5vZGU7XHJcbiAgICAgICAgdmFyIHZpc2libGVQYXJ0ID0gcGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciB0YXBlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbHNfX2l0ZW0tLXNsaWRlcycpO1xyXG4gICAgICAgIHZhciB3aG9sZVRhcGUgPSB0YXBlLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0YXBlKS5sZWZ0KTtcclxuLy8gICAgICAgIGlmIChsZWZ0ID09IDApIHtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXIpO1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBub0hvdmVyKTtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xpZGVMZWZ0KTtcclxuLy8gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaG92ZXIgKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBub0hvdmVyICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzbGlkZVJpZ2h0ICgpIHtcclxuLy8gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBob3Zlcik7XHJcbi8vICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbGlkZVJpZ2h0KTtcclxuLy8gICAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXIpO1xyXG4vLyAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG5vSG92ZXIpO1xyXG4vLyAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNsaWRlTGVmdCk7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICB2YXIgdmlzaWJsZVBhcnQgPSBwYXJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdmFyIHRhcGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2Vsc19faXRlbS0tc2xpZGVzJyk7XHJcbiAgICAgICAgdmFyIHdob2xlVGFwZSA9IHRhcGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRhcGUpLmxlZnQpO1xyXG4gICAgICAgIGlmICh3aG9sZVRhcGUrbGVmdC12aXNpYmxlUGFydCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSB2aXNpYmxlUGFydDtcclxuLy8gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbi8vICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXIpO1xyXG4vLyAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG5vSG92ZXIpO1xyXG4vLyAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNsaWRlUmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZWZ0ID0gbGVmdCAtIHZpc2libGVQYXJ0O1xyXG4gICAgICAgIHRhcGUuc3R5bGUubGVmdCA9IGxlZnQrJ3B4JztcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNsaWRlTGVmdCAoKSB7XHJcbi8vICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXIpO1xyXG4vLyAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xpZGVMZWZ0KTtcclxuLy8gICAgICAgIHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhvdmVyKTtcclxuLy8gICAgICAgIHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbm9Ib3Zlcik7XHJcbi8vICAgICAgICB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNsaWRlUmlnaHQpO1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgdmFyIHZpc2libGVQYXJ0ID0gcGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciB0YXBlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbHNfX2l0ZW0tLXNsaWRlcycpO1xyXG4gICAgICAgIHZhciB3aG9sZVRhcGUgPSB0YXBlLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0YXBlKS5sZWZ0KTtcclxuICAgICAgICBpZiAobGVmdCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAtIHdob2xlVGFwZTtcclxuLy8gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbi8vICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXIpO1xyXG4vLyAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG5vSG92ZXIpO1xyXG4vLyAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNsaWRlTGVmdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxlZnQgPSBsZWZ0ICsgdmlzaWJsZVBhcnQ7XHJcbiAgICAgICAgdGFwZS5zdHlsZS5sZWZ0ID0gbGVmdCsncHgnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbn0pO1xyXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcblxyXG4gICAgdmFyIFQsIGs7XHJcblxyXG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcgdGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMS4g0J/QvtC70L7QttC40LwgTyDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwIFRvT2JqZWN0IHBhc3NpbmcgdGhlIHx0aGlzfCB2YWx1ZSBhcyB0aGUgYXJndW1lbnQuXHJcbiAgICB2YXIgTyA9IE9iamVjdCh0aGlzKTtcclxuXHJcbiAgICAvLyAyLiDQn9C+0LvQvtC20LjQvCBsZW5WYWx1ZSDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwINCy0L3Rg9GC0YDQtdC90L3QtdCz0L4g0LzQtdGC0L7QtNCwIEdldCDQvtCx0YrQtdC60YLQsCBPINGBINCw0YDQs9GD0LzQtdC90YLQvtC8IFwibGVuZ3RoXCIuXHJcbiAgICAvLyAzLiDQn9C+0LvQvtC20LjQvCBsZW4g0YDQsNCy0L3Ri9C8IFRvVWludDMyKGxlblZhbHVlKS5cclxuICAgIHZhciBsZW4gPSBPLmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAvLyA0LiDQldGB0LvQuCBJc0NhbGxhYmxlKGNhbGxiYWNrKSDRgNCw0LLQtdC9IGZhbHNlLCDQstGL0LrQuNC90LXQvCDQuNGB0LrQu9GO0YfQtdC90LjQtSBUeXBlRXJyb3IuXHJcbiAgICAvLyDQodC80L7RgtGA0LjRgtC1OiBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3g5LjExXHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA1LiDQldGB0LvQuCB0aGlzQXJnINC/0YDQuNGB0YPRgtGB0YLQstGD0LXRgiwg0L/QvtC70L7QttC40LwgVCDRgNCw0LLQvdGL0LwgdGhpc0FyZzsg0LjQvdCw0YfQtSDQv9C+0LvQvtC20LjQvCBUINGA0LDQstC90YvQvCB1bmRlZmluZWQuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgVCA9IHRoaXNBcmc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNi4g0J/QvtC70L7QttC40LwgayDRgNCw0LLQvdGL0LwgMFxyXG4gICAgayA9IDA7XHJcblxyXG4gICAgLy8gNy4g0J/QvtC60LAgayA8IGxlbiwg0LHRg9C00LXQvCDQv9C+0LLRgtC+0YDRj9GC0YxcclxuICAgIHdoaWxlIChrIDwgbGVuKSB7XHJcblxyXG4gICAgICB2YXIga1ZhbHVlO1xyXG5cclxuICAgICAgLy8gYS4g0J/QvtC70L7QttC40LwgUGsg0YDQsNCy0L3Ri9C8IFRvU3RyaW5nKGspLlxyXG4gICAgICAvLyAgINCt0YLQviDQvdC10Y/QstC90L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC00LvRjyDQu9C10LLQvtGB0YLQvtGA0L7QvdC90LXQs9C+INC+0L/QtdGA0LDQvdC00LAg0LIg0L7Qv9C10YDQsNGC0L7RgNC1IGluXHJcbiAgICAgIC8vIGIuINCf0L7Qu9C+0LbQuNC8IGtQcmVzZW50INGA0LDQstC90YvQvCDRgNC10LfRg9C70YzRgtCw0YLRgyDQstGL0LfQvtCy0LAg0LLQvdGD0YLRgNC10L3QvdC10LPQviDQvNC10YLQvtC00LAgSGFzUHJvcGVydHkg0L7QsdGK0LXQutGC0LAgTyDRgSDQsNGA0LPRg9C80LXQvdGC0L7QvCBQay5cclxuICAgICAgLy8gICDQrdGC0L7RgiDRiNCw0LMg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtCx0YrQtdC00LjQvdGR0L0g0YEg0YjQsNCz0L7QvCBjXHJcbiAgICAgIC8vIGMuINCV0YHQu9C4IGtQcmVzZW50INGA0LDQstC10L0gdHJ1ZSwg0YLQvlxyXG4gICAgICBpZiAoayBpbiBPKSB7XHJcblxyXG4gICAgICAgIC8vIGkuINCf0L7Qu9C+0LbQuNC8IGtWYWx1ZSDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwINCy0L3Rg9GC0YDQtdC90L3QtdCz0L4g0LzQtdGC0L7QtNCwIEdldCDQvtCx0YrQtdC60YLQsCBPINGBINCw0YDQs9GD0LzQtdC90YLQvtC8IFBrLlxyXG4gICAgICAgIGtWYWx1ZSA9IE9ba107XHJcblxyXG4gICAgICAgIC8vIGlpLiDQktGL0LfQvtCy0LXQvCDQstC90YPRgtGA0LXQvdC90LjQuSDQvNC10YLQvtC0IENhbGwg0YTRg9C90LrRhtC40LggY2FsbGJhY2sg0YEg0L7QsdGK0LXQutGC0L7QvCBUINCyINC60LDRh9C10YHRgtCy0LUg0LfQvdCw0YfQtdC90LjRjyB0aGlzINC4XHJcbiAgICAgICAgLy8g0YHQv9C40YHQutC+0Lwg0LDRgNCz0YPQvNC10L3RgtC+0LIsINGB0L7QtNC10YDQttCw0YnQuNC8IGtWYWx1ZSwgayDQuCBPLlxyXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoVCwga1ZhbHVlLCBrLCBPKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBkLiDQo9Cy0LXQu9C40YfQuNC8IGsg0L3QsCAxLlxyXG4gICAgICBrKys7XHJcbiAgICB9XHJcbiAgICAvLyA4LiDQktC10YDQvdGR0LwgdW5kZWZpbmVkLlxyXG4gIH07XHJcbn07XHJcblxyXG5pZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcclxuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgdmFyIGhpZGRlbkZyaWVuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuLWxpc3QnKTtcclxuICAgIHZhciBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzX19saW5rJyk7XHJcbiAgICB2YXIgZXRhbG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV0YWxvbicpO1xyXG4gICAgXHJcbiAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SGlkZUJsb2NrKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2hvd0hpZGVCbG9jayAoZWwsIHQsIGYpIHtcclxuICAgICAgICB0ID0gNDAwO1xyXG4gICAgICAgIGYgPSAyNDtcclxuICAgICAgICB2YXIgZnBzID0gZjtcclxuICAgICAgICB2YXIgdGltZSA9IHQ7XHJcbiAgICAgICAgdmFyIHN0ZXBzID0gdGltZSAvIGZwcztcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBoaWRkZW5GcmllbmRzLm9mZnNldEhlaWdodDtcclxuICAgICAgICB2YXIgZXRhbG9uSGVpZ2h0ID0gZXRhbG9uLm9mZnNldEhlaWdodDtcclxuICAgICAgICBpZiAoaGVpZ2h0ID09IDApIHtcclxuICAgICAgICAgICAgaGlkZGVuRnJpZW5kcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGhpZGRlbkZyaWVuZHMuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXZpc2libGUnKTtcclxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBzPjApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IGV0YWxvbkhlaWdodCAvICh0aW1lL2Zwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRnJpZW5kcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgLT0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0J1dHRvbi5pbm5lckhUTUwgPSAnSGlkZSBwYXJ0bmVycyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWUvZnBzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwcz4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBldGFsb25IZWlnaHQgLyAodGltZS9mcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAtPSBzdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkZyaWVuZHMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzIC09IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkZyaWVuZHMuY2xhc3NMaXN0LmFkZCgnbm9uLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QnV0dG9uLmlubmVySFRNTCA9ICdTZWUgb3RoZXIgcGFydG5lcnMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lL2ZwcylcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuLy8g0KDQtdCw0LvQuNC30LDRhtC40Y8g0YEg0L/QvtC80L7RidGM0Y4galF1ZXJ5ICAgIFxyXG4vLyAgICB2YXIgaGlkZGVuRnJpZW5kcyA9ICQoJy5oaWRkZW4tbGlzdCcpWzBdO1xyXG4vLyAgICB2YXIgc2hvd0J1dHRvbiA9ICQoJy5wYXJ0bmVyc19fbGluaycpWzBdO1xyXG4vLyAgICAkKHNob3dCdXR0b24pLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgIGlmICgkKGhpZGRlbkZyaWVuZHMpLmhhc0NsYXNzKFwib3BlblwiKSkge1xyXG4vLyAgICAgICAgICAgICQoaGlkZGVuRnJpZW5kcykucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4vLyAgICAgICAgICAgICQoaGlkZGVuRnJpZW5kcykuc2xpZGVVcCgzMDApO1xyXG4vLyAgICAgICAgICAgICQodGhpcykuaHRtbCgnU2VlIG90aGVyIHBhcnRuZXJzJyk7XHJcbi8vICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICQoaGlkZGVuRnJpZW5kcykuYWRkQ2xhc3MoXCJvcGVuXCIpO1xyXG4vLyAgICAgICAgICAgICQoaGlkZGVuRnJpZW5kcykuc2xpZGVEb3duKDMwMCk7XHJcbi8vICAgICAgICAgICAgJCh0aGlzKS5odG1sKCdIaWRlIHBhcnRuZXJzJyk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4gICAgXHJcbiAgICB2YXIgdGV4dFZhbHVlOyAvL9Ce0LHRitGP0LLQu9C10Lwg0LPQu9C+0LHQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiDRgNCw0LzQutCw0YUgZG9jdW1lbnQuUmVhZHlcclxuICAgIHZhciBjdXJyZW50RGl2O1xyXG4gICAgXHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBcclxuICAgIHZhciB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiB0aWNrKCkge1xyXG4gICAgICBSYW5kb21Xb3JkKCk7XHJcbiAgICAgIGkrKztcclxuICAgICAgaWYgKGkgPCA1KSB7XHJcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGljaywgMjAwMCk7ICAgIFxyXG4gICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dDtcclxuICAgICAgfVxyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0YPQtNCw0LvRj9C10YIg0L/RgNC10LTRi9C00YPRidC40Lkg0LHQu9C+0Log0YEg0LfQsNC/0YDQvtGB0L7QvFxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQkxvY2sgKCkge1xyXG4gICAgICAgIHZhciBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFzb25yeV9faXRlbScpO1xyXG4gICAgICAgIGlmIChibG9ja3MubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICB2YXIgZGVsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5X19pdGVtJyk7XHJcbiAgICAgICAgICAgIGRlbEVsZW0ucmVtb3ZlKCk7ICAgICBcclxuICAgICAgICB9IGVsc2Uge31cclxuICAgIH07XHJcbiAgIFxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8sINC60L7RgtC+0YDQsNGPINC00L7QsdCw0LLQu9GP0LXRgiDQsdC70L7QuiDRgSDQvdC+0LLRi9C8INC30LDQv9GA0L7RgdC+0LxcclxuICAgIGZ1bmN0aW9uIGFkZEJsb2NrICgpIHtcclxuICAgICAgICB2YXIgbW9zYWljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vc2FpYycpO1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjdXJyZW50RGl2ID0gZGl2O1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcInRleHRfX2NvbnRhaW5lciBtYXNvbnJ5X19pdGVtXCI7XHJcbiAgICAgICAgbW9zYWljLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgdmFyIGRpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZUZXh0LmNsYXNzTmFtZSA9IFwiaW5uZXJfX3RleHRcIjtcclxuICAgICAgICBkaXZUZXh0LmlubmVySFRNTCA9IHRleHRWYWx1ZTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XHJcbiAgICAgICAgaW1hZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8sINC60L7RgtC+0YDQsNGPINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10YIgTWFzb25yeVxyXG4gICAgZnVuY3Rpb24gbWFzb25yeSAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9zYWljJyk7XHJcbiAgICAgICAgdmFyIG1zbnJ5ID0gbmV3IE1hc29ucnkoIGVsZW0sIHtcclxuICAgICAgICAgICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcubWFzb25yeV9faXRlbScsXHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiA1LFxyXG4gICAgICAgICAgICBpc0FuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25PcHRpb25zOiB7IFxyXG4gICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGltYWdlICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdXJsUXVlcnkgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2N1c3RvbXNlYXJjaC92MT9xPVwiICsgdGV4dFZhbHVlICsgXCImY3g9MDE2NzMyNjI0ODE2NDcxMDYxNDI4OjNndDJyY3hvN2xrJmltZ1NpemU9bWVkaXVtJmZpbGVUeXBlPWpwZyZudW09MSZzZWFyY2hUeXBlPWltYWdlJmltZ0RvbWluYW50Q29sb3I9cGluayZrZXk9QUl6YVN5Qm5jT2swT0tEMHA3U0VxcG5Dbmo2OGxaQWwwenF4eHZvXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHhtbFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWxSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybFF1ZXJ5LCB0cnVlKTtcclxuICAgICAgICB4bWxSZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICBcclxuICAgICAgICB4bWxSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKHhtbFJlcXVlc3QucmVhZHlTdGF0ZSAhPSA0KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgaWYgKHhtbFJlcXVlc3Quc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0L/QviDQtNCw0L3QvdC+0LzRgyDQt9Cw0L/RgNC+0YHRgyDQvdC1INC/0L7Qu9GD0YfQtdC90L4gXCIgKyB4bWxSZXF1ZXN0LnN0YXR1cyArICc6ICcgKyB4bWxSZXF1ZXN0LnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoeG1sUmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIHZhciBpbWFnZUxpbmsgPSBkYXRhLml0ZW1zWzBdLmxpbms7XHJcbiAgICAgICAgICAgICAgdmFyIGltYWdlV2lkdGggPSBkYXRhLml0ZW1zWzBdLmltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICAgIHZhciBpbWFnZWhlaWdodCA9IGRhdGEuaXRlbXNbMF0uaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgIHZhciByYXRpbyA9IGltYWdlV2lkdGggLyBpbWFnZWhlaWdodDtcclxuICAgICAgICAgICAgICBpZiAocmF0aW8gPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IDQ0MDtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gcmF0aW8gKiAzMTA7ICBcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGN1cnJlbnREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1hZ2VMaW5rICsgJyknO1xyXG4gICAgICAgICAgICAgIGN1cnJlbnREaXYuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgY3VycmVudERpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdhdXRvIDMxMHB4JztcclxuICAgICAgICAgICAgICBtYXNvbnJ5KCk7ICAgIFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40LzQtdC90Y/QtdGC0YHRjyDQtNC70Y8g0L/QvtC40YHQutCwINGB0LvRg9GH0LDQudC90YvRhSDQutCw0YDRgtC40L3QvtC6XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIFJhbmRvbVdvcmQoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGpzb25wKHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrTmFtZSA9ICdqc29ucF9jYWxsYmFja18nICsgTWF0aC5yb3VuZCgxMDAwMDAgKiBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgd2luZG93W2NhbGxiYWNrTmFtZV07XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IHVybCArICh1cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgJ2NhbGxiYWNrPScgKyBjYWxsYmFja05hbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpzb25wKCdodHRwOi8vcmFuZG9td29yZC5zZXRnZXRnby5jb20vZ2V0LnBocCcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICB0ZXh0VmFsdWUgPSBkYXRhLldvcmQ7XHJcbiAgICAgICAgICAgIHJlbW92ZUJMb2NrKCk7XHJcbiAgICAgICAgICAgIGFkZEJsb2NrKCk7XHJcbiAgICAgICAgICAgIG1hc29ucnkoKTtcclxuICAgICAgICB9KTsgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4vLyAgICBmdW5jdGlvbiBSYW5kb21Xb3JkKCkge1xyXG4vLyAgICAgICAgXHJcbi8vICAgICAgICB2YXIgcmVxdWVzdFN0ciA9IFwiaHR0cDovL3JhbmRvbXdvcmQuc2V0Z2V0Z28uY29tL2dldC5waHBcIjtcclxuLy8gICAgICAgIFxyXG4vLyAgICAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4vLyAgICAgICAgICAgIHVybDogcmVxdWVzdFN0cixcclxuLy8gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxyXG4vLyAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICAgICB0ZXh0VmFsdWUgPSByZXNwb25zZS5Xb3JkO1xyXG4vLyAgICAgICAgICAgICAgICByZW1vdmVCTG9jaygpO1xyXG4vLyAgICAgICAgICAgICAgICBhZGRCbG9jaygpO1xyXG4vLyAgICAgICAgICAgICAgICBtYXNvbnJ5KCk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2J0bicpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRWxlbWVudClcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkRWxlbWVudCAoZXZlbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQstGL0L/QvtC70L3QtdC90LjQtSDRgdC+0LHRi9GC0LjRjyBcItCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXCJcclxuICAgICAgICBcclxuICAgICAgICAvL9Cf0L7Qu9GD0YfQsNC10Lwg0YDQuNGB0YPQvdC+0Log0YHQvtCz0LvQsNGB0L3QviDQt9Cw0L/RgNC+0YHRg1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JykudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRleHRWYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIFJhbmRvbVdvcmQoKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVtb3ZlQkxvY2soKTtcclxuICAgICAgICAgICAgYWRkQmxvY2soKTsgICBcclxuICAgICAgICAgICAgbWFzb25yeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
