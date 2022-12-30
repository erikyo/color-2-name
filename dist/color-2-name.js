!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("color2name",[],r):"object"==typeof exports?exports.color2name=r():e.color2name=r()}(this,(()=>(()=>{"use strict";var e={d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{closest:()=>S,closestRGB:()=>P,colorSet:()=>t,distance:()=>q,isDark:()=>E,isLight:()=>M,isLightOrDark:()=>I,rgbToHex:()=>A});const t=[[255,255,255,"white"],[0,0,0,"black"],[255,0,0,"red"],[0,128,0,"green"],[0,0,255,"blue"],[255,165,0,"orange"],[128,128,128,"grey"],[255,255,0,"yellow"],[255,0,255,"magenta"],[154,205,50,"yellowgreen"],[192,192,192,"silver"],[0,255,0,"lime"],[128,0,128,"purple"],[255,99,71,"tomato"],[64,224,208,"turquoise"],[255,127,80,"coral"],[0,255,255,"cyan"],[255,250,240,"floralwhite"],[255,192,203,"pink"],[34,139,34,"forestgreen"],[245,245,220,"beige"],[255,0,255,"fuchsia"],[220,220,220,"gainsboro"],[248,248,255,"ghostwhite"],[255,215,0,"gold"],[218,165,32,"goldenrod"],[173,255,47,"greenyellow"],[238,130,238,"violet"],[245,222,179,"wheat"],[245,245,245,"whitesmoke"],[139,0,0,"darkred"],[240,248,255,"aliceblue"],[205,92,92,"indianred"],[75,0,130,"indigo"],[250,235,215,"antiquewhite"],[0,255,255,"aqua"],[127,255,212,"aquamarine"],[240,255,255,"azure"],[255,228,196,"bisque"],[255,235,205,"blanchedalmond"],[138,43,226,"blueviolet"],[165,42,42,"brown"],[222,184,135,"burlywood"],[95,158,160,"cadetblue"],[127,255,0,"chartreuse"],[210,105,30,"chocolate"],[100,149,237,"cornflowerblue"],[255,248,220,"cornsilk"],[220,20,60,"crimson"],[0,0,139,"darkblue"],[0,139,139,"darkcyan"],[184,134,11,"darkgoldenrod"],[169,169,169,"darkgrey"],[0,100,0,"darkgreen"],[189,183,107,"darkkhaki"],[139,0,139,"darkmagenta"],[85,107,47,"darkolivegreen"],[255,140,0,"darkorange"],[153,50,204,"darkorchid"],[233,150,122,"darksalmon"],[143,188,143,"darkseagreen"],[72,61,139,"darkslateblue"],[47,79,79,"darkslategrey"],[0,206,209,"darkturquoise"],[148,0,211,"darkviolet"],[255,20,147,"deeppink"],[0,191,255,"deepskyblue"],[105,105,105,"dimgrey"],[30,144,255,"dodgerblue"],[178,34,34,"firebrick"],[240,255,240,"honeydew"],[255,105,180,"hotpink"],[255,255,240,"ivory"],[240,230,140,"khaki"],[230,230,250,"lavender"],[255,240,245,"lavenderblush"],[124,252,0,"lawngreen"],[255,250,205,"lemonchiffon"],[173,216,230,"lightblue"],[240,128,128,"lightcoral"],[224,255,255,"lightcyan"],[250,250,210,"lightgoldenrodyellow"],[144,238,144,"lightgreen"],[211,211,211,"lightgrey"],[255,182,193,"lightpink"],[255,160,122,"lightsalmon"],[32,178,170,"lightseagreen"],[135,206,250,"lightskyblue"],[119,136,153,"lightslategrey"],[176,196,222,"lightsteelblue"],[255,255,224,"lightyellow"],[50,205,50,"limegreen"],[250,240,230,"linen"],[128,0,0,"maroon"],[102,205,170,"mediumaquamarine"],[0,0,205,"mediumblue"],[186,85,211,"mediumorchid"],[147,112,219,"mediumpurple"],[60,179,113,"mediumseagreen"],[123,104,238,"mediumslateblue"],[0,250,154,"mediumspringgreen"],[72,209,204,"mediumturquoise"],[199,21,133,"mediumvioletred"],[25,25,112,"midnightblue"],[245,255,250,"mintcream"],[255,228,225,"mistyrose"],[255,228,181,"moccasin"],[255,222,173,"navajowhite"],[0,0,128,"navy"],[253,245,230,"oldlace"],[128,128,0,"olive"],[107,142,35,"olivedrab"],[255,69,0,"orangered"],[218,112,214,"orchid"],[238,232,170,"palegoldenrod"],[152,251,152,"palegreen"],[175,238,238,"paleturquoise"],[219,112,147,"palevioletred"],[255,239,213,"papayawhip"],[255,218,185,"peachpuff"],[205,133,63,"peru"],[221,160,221,"plum"],[176,224,230,"powderblue"],[102,51,153,"rebeccapurple"],[188,143,143,"rosybrown"],[65,105,225,"royalblue"],[139,69,19,"saddlebrown"],[250,128,114,"salmon"],[244,164,96,"sandybrown"],[46,139,87,"seagreen"],[255,245,238,"seashell"],[160,82,45,"sienna"],[135,206,235,"skyblue"],[106,90,205,"slateblue"],[112,128,144,"slategrey"],[255,250,250,"snow"],[0,255,127,"springgreen"],[70,130,180,"steelblue"],[210,180,140,"tan"],[0,128,128,"teal"],[216,191,216,"thistle"]];function n(e){var r="#"===Array.from(e)[0]?e.substring(1):e;if(r.length>2){if(r.length<6)return function(e){return Array.from(e).map((function(e){return(e+e).toUpperCase()}))}(r);var t=r.match(/../g);return null!=t?[t[0].toUpperCase(),t[1].toUpperCase(),t[2].toUpperCase()]:[]}return[]}function o(e){return e.toString(16).padStart(2,"0")}function a(e){return"number"==typeof(null==e?void 0:e.r)&&"number"==typeof(null==e?void 0:e.g)&&"number"==typeof(null==e?void 0:e.b)?"#".concat(o(null==e?void 0:e.r)).concat(o(null==e?void 0:e.g)).concat(o(null==e?void 0:e.b)):"#errorr"}function i(e){var r=e.match(f);if(null!=r){var t=b(r[1]);if(t.length>=2)return[t[0],t[1],t[2]]}throw new Error("Can't parse rgb color: ".concat(e))}function l(e){if(e.length>=2)return{r:p(e[0]),g:p(e[1]),b:p(e[2])};throw new Error("Invalid rgb color: ".concat(e.join(", ")))}function u(e){if(null===e||e.length<2)throw new Error("Invalid hsl color: ".concat(e.join(", ")));var r=function(e){if(e.length>=2)return{h:p(e[0]),s:p(e[1],100),l:p(e[2],100)};throw new Error("Invalid hsl color: ".concat(e.join(", ")))}(e),t=r.h,n=r.s,o=r.l;n/=100,o/=100;var a=(1-Math.abs(2*o-1))*n,i=a*(1-Math.abs(t/60%2-1)),l=o-a/2,u=0,c=0,f=0;return t>=0&&t<60?(u=a,c=i,f=0):t>=60&&t<120?(u=i,c=a,f=0):t>=120&&t<180?(u=0,c=a,f=i):t>=180&&t<240?(u=0,c=i,f=a):t>=240&&t<300?(u=i,c=0,f=a):t>=300&&t<360&&(u=a,c=0,f=i),{r:u=Math.round(255*(u+l)),g:c=Math.round(255*(c+l)),b:f=Math.round(255*(f+l))}}var c=/^#([\da-f]{6,}|[\da-f]{3,})/i,f=/^rgba?\(([^)]+)\)/i,s=/^hsla?\(([^)]+)\)/i,d=/^[0-9]*$/,g=[[255,255,255,"white"],[1,1,1,"black"]],h=[[255,0,0,"red"],[0,255,0,"green"],[0,0,255,"blue"]];function b(e){return e.includes(",")?e.split(/[,\\/]/).map((function(e){return e.trim()})):e.split(/[ \\/]/).map((function(e){return e.trim()})).filter(Boolean)}function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;if(e=e.trim(),d.test(e))return parseInt(e,10);if(e.endsWith("%"))return parseFloat(e)/100*r;if(e.endsWith("deg")){for(var t=parseFloat(e);t<0;)t+=360;for(;t>360;)t-=360;return t/360*r}throw new Error("Invalid value: ".concat(e))}function m(e){if(c.test(e)){var r=n(e);if(r.length>0)return function(e){if(e.length>=2)return{r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};throw new Error("Invalid Hex color: ".concat(e.join(", ")))}(r)}else if(f.test(e)){var t=i(e);if(t.length>0)return l(t)}else if(s.test(e)){var o=function(e){var r=e.match(s);if(null!=r){var t=b(r[1]);if(t.length>=2)return[t[0],t[1],t[2]]}throw new Error("Can't parse hsl color: ".concat(e))}(e);if(o.length>0)return u(o)}throw new Error("Invalid color: ".concat(e))}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==y(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===y(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function S(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=Number.MAX_SAFE_INTEGER,o={name:"error",color:"#F00"};if(r.length<1)return o;var i=Object.values(m(e));if(i.length>2){var l,u=j(r);try{for(u.s();!(l=u.n()).done;){var c=l.value,f=q(i,c,!0);if(f<n&&(n=f,o.name=c[3],o.color="rgb(".concat(c[0],",").concat(c[1],",").concat(c[2],")")),0===f)break}}catch(e){u.e(e)}finally{u.f()}}for(var s=arguments.length,d=new Array(s>2?s-2:0),g=2;g<s;g++)d[g-2]=arguments[g];if((null==d?void 0:d.length)>0&&null!==(null==d?void 0:d.info)){var h=m(o.color),b=a(h);return w(w({},o),{},{hex:b,gap:Math.sqrt(n)})}return o}function M(e){return"white"===S(e,g).name}function E(e){return"black"===S(e,g).name}function I(e){return M(e)?"light":"dark"}function P(e){return S(e,h).name}function q(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t?Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2):Math.sqrt(Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2))}function A(e){if(f.test(e)){var r=i(e);if(r.length>0)return a(l(r))}throw new Error("Invalid color: ".concat(e))}return r})()));
//# sourceMappingURL=color-2-name.js.map