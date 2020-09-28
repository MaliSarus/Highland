/*!
 * VERSION: 0.2.1
 * DATE: 2017-01-12
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(S){function r(e){var t=this.lookup[e*this.l|0]||this.lookup[this.l-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy}function n(e,t,o){if(this._calcEnd=!0,this.id=e,!h)return window.location.href="http://"+a+s+"?plugin="+i+"&source=codepen",!1;e&&(S.map[e]=this),this.getRatio=r,this.setData(t,o)}var l=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,x=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,y=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,p=/[cLlsS]/g,w="CustomEase only accepts Cubic Bezier data.",i="CustomEase",a=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),s=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),h=function(e){for(var t=-1!==(window?window.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==e.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),o=[a,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,111,100,101,112,101,110,46,97,112,112),String.fromCharCode(112,101,110,115,46,99,108,111,117,100),String.fromCharCode(112,101,110,115,46,105,111),String.fromCharCode(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(119,101,98,112,97,99,107,98,105,110,46,99,111,109),String.fromCharCode(97,114,99,104,105,118,101,46,111,114,103),String.fromCharCode(99,111,100,101,115,97,110,100,98,111,120,46,105,111),String.fromCharCode(115,116,97,99,107,98,108,105,116,122,46,99,111,109),String.fromCharCode(99,111,100,105,101,114,46,105,111),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],r=o.length;-1<--r;)if(-1!==e.indexOf(o[r]))return!0;return t&&window&&window.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+i+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),t}(window?window.location.host:""),D=function(e,t,o,r,n,i,a,s,h,f,g){var d,u=(e+o)/2,c=(t+r)/2,C=(o+n)/2,l=(r+i)/2,p=(n+a)/2,m=(i+s)/2,S=(u+C)/2,x=(c+l)/2,y=(C+p)/2,w=(l+m)/2,_=(S+y)/2,v=(x+w)/2,M=a-e,b=s-t,k=Math.abs((o-a)*b-(r-s)*M),z=Math.abs((n-a)*b-(i-s)*M);return f||(f=[{x:e,y:t},{x:a,y:s}],g=1),f.splice(g||f.length-1,0,{x:_,y:v}),h*(M*M+b*b)<(k+z)*(k+z)&&(d=f.length,D(e,t,u,c,S,x,_,v,h,f,g),D(_,v,y,w,p,m,a,s,h,f,g+1+(f.length-d))),f},e=n.prototype=new S;return e.constructor=n,e.setData=function(e,t){var o,r,n,i,a,s,h,f,g,d=(e=e||"0,0,1,1").match(l),u=1,c=[],C=(t=t||{}).precision||1;if(this.data=e,this.lookup=[],this.points=c,this.fast=C<=1,(p.test(e)||-1!==e.indexOf("M")&&-1===e.indexOf("C"))&&(d=function(e){for(var t,o,r,n,i,a,s,h,f,g,d=(e+"").replace(y,function(e){var t=+e;return t<1e-4&&-1e-4<t?0:t}).match(x)||[],u=[],c=0,C=0,l=d.length,p=2,m=0;m<l;m++)if(h=r,isNaN(d[m])?n=(r=d[m].toUpperCase())!==d[m]:m--,t=+d[m+1],o=+d[m+2],n&&(t+=c,o+=C),m||(a=t,s=o),"M"===r)i&&i.length<8&&(--u.length,p=0),i=[c=a=t,C=s=o],p=2,u.push(i),m+=2,r="L";else if("C"===r)(i=i||[0,0])[p++]=t,i[p++]=o,n||(c=C=0),i[p++]=c+ +d[m+3],i[p++]=C+ +d[m+4],i[p++]=c+=+d[m+5],i[p++]=C+=+d[m+6],m+=6;else if("S"===r)"C"===h||"S"===h?(f=c-i[p-4],g=C-i[p-3],i[p++]=c+f,i[p++]=C+g):(i[p++]=c,i[p++]=C),i[p++]=t,i[p++]=o,n||(c=C=0),i[p++]=c+=+d[m+3],i[p++]=C+=+d[m+4],m+=4;else{if("L"!==r&&"Z"!==r)throw w;"Z"===r&&(t=a,o=s,i.closed=!0),("L"===r||.5<Math.abs(c-t)||.5<Math.abs(C-o))&&(i[p++]=c+(t-c)/3,i[p++]=C+(o-C)/3,i[p++]=c+2*(t-c)/3,i[p++]=C+2*(o-C)/3,i[p++]=t,i[p++]=o,"L"===r&&(m+=2)),c=t,C=o}return u[0]}(e)),4===(o=d.length))d.unshift(0,0),d.push(1,1),o=8;else if((o-2)%6)throw w;for(0==+d[0]&&1==+d[o-2]||function(e,t,o){o||0===o||(o=Math.max(+e[e.length-1],+e[1]));for(var r=-1*e[0],n=-o,i=e.length,a=1/(+e[i-2]+r),s=(s=-t||(Math.abs(e[i-1]-e[1])<.01*(e[i-2]-e[0])?function(e){for(var t=e.length,o=999999999999,r=1;r<t;r+=6)+e[r]<o&&(o=+e[r]);return o}(e)+n:+e[i-1]+n))?1/s:-a,h=0;h<i;h+=2)e[h]=(+e[h]+r)*a,e[h+1]=(+e[h+1]+n)*s}(d,t.height,t.originY),this.rawBezier=d,i=2;i<o;i+=6)r={x:+d[i-2],y:+d[i-1]},n={x:+d[i+4],y:+d[i+5]},c.push(r,n),D(r.x,r.y,+d[i],+d[i+1],+d[i+2],+d[i+3],n.x,n.y,1/(2e5*C),c,c.length-1);for(o=c.length,i=0;i<o;i++)h=c[i],f=c[i-1]||h,h.x>f.x||f.y!==h.y&&f.x===h.x||h===f?(f.cx=h.x-f.x,f.cy=h.y-f.y,f.n=h,f.nx=h.x,this.fast&&1<i&&2<Math.abs(f.cy/f.cx-c[i-2].cy/c[i-2].cx)&&(this.fast=!1),f.cx<u&&(f.cx?u=f.cx:(f.cx=.001,i===o-1&&(f.x-=.001,u=Math.min(u,.001),this.fast=!1)))):(c.splice(i--,1),o--);if(o=1/u+1|0,a=1/(this.l=o),h=c[s=0],this.fast){for(i=0;i<o;i++)g=i*a,h.nx<g&&(h=c[++s]),r=h.y+(g-h.x)/h.cx*h.cy,this.lookup[i]={x:g,cx:a,y:r,cy:0,nx:9},i&&(this.lookup[i-1].cy=r-this.lookup[i-1].y);this.lookup[o-1].cy=c[c.length-1].y-r}else{for(i=0;i<o;i++)h.nx<i*a&&(h=c[++s]),this.lookup[i]=h;s<c.length-1&&(this.lookup[i-1]=c[c.length-2])}return this._calcEnd=1!==c[c.length-1].y||0!==c[0].y,this},e.getRatio=r,e.getSVGData=function(e){return n.getSVGData(this,e)},n.create=function(e,t,o){return new n(e,t,o)},n.version="0.2.1",n.bezierToPoints=D,n.get=function(e){return S.map[e]},n.getSVGData=function(e,t){var o,r,n,i,a,s,h,f,g,d,u=1e3,c=(t=t||{}).width||100,C=t.height||100,l=t.x||0,p=(t.y||0)+C,m=t.path;if(t.invert&&(C=-C,p=0),(e=e.getRatio?e:S.map[e]||console.log("No ease found: ",e)).rawBezier){for(o=[],h=e.rawBezier.length,n=0;n<h;n+=2)o.push(((l+e.rawBezier[n]*c)*u|0)/u+","+((p+e.rawBezier[n+1]*-C)*u|0)/u);o[0]="M"+o[0],o[1]="C"+o[1]}else for(o=["M"+l+","+p],i=1/(h=Math.max(5,200*(t.precision||1))),f=5/(h+=2),g=((l+i*c)*u|0)/u,r=((d=((p+e.getRatio(i)*-C)*u|0)/u)-p)/(g-l),n=2;n<h;n++)a=((l+n*i*c)*u|0)/u,s=((p+e.getRatio(n*i)*-C)*u|0)/u,(Math.abs((s-d)/(a-g)-r)>f||n===h-1)&&(o.push(g+","+d),r=(s-d)/(a-g)),g=a,d=s;return m&&("string"==typeof m?document.querySelector(m):m).setAttribute("d",o.join(" ")),o.join(" ")},n},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";function e(){return(_gsScope.GreenSockGlobals||_gsScope).CustomEase}"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}();