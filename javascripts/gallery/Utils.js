var Utils=new function(){this.clone=function(t){if(null==t||!Is.object(t))return t;var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=Utils.clone(t[r]));return n},this.defaultValue=function(t,n){return n=Is.defined(n)?n:!1,Is.defined(t)?t:n},this.toJSONString=function(t){var n=typeof t;if("object"!=n||null===t)return"string"==n&&(t='"'+t+'"'),String(t);var r,i,e=[],o=t&&t.constructor==Array;for(r in t)i=t[r],n=typeof i,"string"==n?i='"'+i+'"':"object"==n&&null!==i&&(i=this.toJSONString(i)),e.push((o?"":'"'+r+'":')+String(i));return(o?"[":"{")+String(e)+(o?"]":"}")},this.trim=function(t,n){var r=function(t,n){return t=t.toString(),n=n||"\\s",t.replace(new RegExp("^["+n+"]+","g"),"")},i=function(t,n){return t=t.toString(),n=n||"\\s",t.replace(new RegExp("["+n+"]+$","g"),"")};return t?r(i(t.toString(),n),n):t},this.roundNumber=function(t,n){var r=Math.round(t*Math.pow(10,n))/Math.pow(10,n);return r},this.calcNewImageSize=function(t,n,r,i,e){if(finalHeight=i,finalWidth=r,!Is.defined(e)){var e=!1;e=t>n?"W":"H","auto"==r&&(e="H"),"auto"==i&&(e="W")}return"H"==e?(r=Utils.roundNumber(i*(t/n),0),i=finalHeight):"W"==e&&(i=Utils.roundNumber(r*(n/t),0),r=finalWidth),{ratio:e,h:i,w:r}}};