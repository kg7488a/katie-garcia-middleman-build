var JsCss=new function(){this.init=function(){if(document.styleSheets&&document.styleSheets.length<=0){var e=document.createElement("style");e.type="text/css",e.rel="stylesheet",e.media="screen",e.title="dynamicSheet",document.getElementsByTagName("head")[0].appendChild(e)}},this.getRuleSelectors=function(e){e=e.trim().toLowerCase(),"."!=e.charAt(0)&&"#"!=e.charAt(0)||(e=e.substr(1));for(var t=e.split(","),s=new Array,l=0;l<t.length;l++){var r=t[l].trim();"."!=r.charAt(0)&&"#"!=r.charAt(0)||(r=r.substr(1)),s.push(r.replace(/(#|\.| )+/g,"[SPACE]").split(/\[SPACE\]/))}for(var l=0;l<s.length;l++)s[l]=s[l].sort();return s},this.getCSSRule=function(e,t){e=e.toLowerCase();var s=this.getRuleSelectors(e);if(document.styleSheets)for(var l=0;l<document.styleSheets.length;l++){var r=document.styleSheets[l],u=0,n=!1;do{try{n=r.cssRules.item?r.cssRules.item(u):r.cssRules?r.cssRules[u]:r.rules[u]}catch(i){}if(n){var c=!1;if("undefined"!=typeof n.selectorText){var o=this.getRuleSelectors(n.selectorText);o.compare(s)&&(c=!0)}if("undefined"!=typeof n.selectorText&&(n.selectorText.toLowerCase()==e||c))return"delete"==t?(r.cssRules?r.deleteRule(u):r.removeRule(u),!0):n}u++}while(n)}return!1},this.killCSSRule=function(e){return this.getCSSRule(e,"delete")},this.addRule=function(e){return document.styleSheets&&(this.getCSSRule(e)||(document.styleSheets[0].addRule?document.styleSheets[0].addRule(e,null,0):document.styleSheets[0].insertRule(e+" { }",0))),this.getCSSRule(e)},this.addRuleStyle=function(e,t){var s=this.addRule(e);for(i in t)s.style[i]=t[i]}};