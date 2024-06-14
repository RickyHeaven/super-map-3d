define(["exports","./Cartesian3-9e1fac2b","./Check-1ab97039","./defaultValue-a9572088","./Math-42d8c121","./defer-027bcf35"],(function(e,t,n,r,o,u){"use strict";function i(e,t,n,o,u,i,s,a,l){this[0]=r.u(e,0),this[1]=r.u(o,0),this[2]=r.u(s,0),this[3]=r.u(t,0),this[4]=r.u(u,0),this[5]=r.u(a,0),this[6]=r.u(n,0),this[7]=r.u(i,0),this[8]=r.u(l,0),this.isMatrix3=!0}i.packedLength=9,i.pack=function(e,t,o){return n.o.typeOf.object("value",e),n.o.defined("array",t),o=r.u(o,0),t[o++]=e[0],t[o++]=e[1],t[o++]=e[2],t[o++]=e[3],t[o++]=e[4],t[o++]=e[5],t[o++]=e[6],t[o++]=e[7],t[o++]=e[8],t},i.unpack=function(e,t,o){return n.o.defined("array",e),t=r.u(t,0),r.e(o)||(o=new i),o[0]=e[t++],o[1]=e[t++],o[2]=e[t++],o[3]=e[t++],o[4]=e[t++],o[5]=e[t++],o[6]=e[t++],o[7]=e[t++],o[8]=e[t++],o},i.clone=function(e,t){if(r.e(e))return r.e(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t):new i(e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8])},i.fromArray=function(e,t,o){return n.o.defined("array",e),t=r.u(t,0),r.e(o)||(o=new i),o[0]=e[t],o[1]=e[t+1],o[2]=e[t+2],o[3]=e[t+3],o[4]=e[t+4],o[5]=e[t+5],o[6]=e[t+6],o[7]=e[t+7],o[8]=e[t+8],o},i.fromColumnMajorArray=function(e,t){return n.o.defined("values",e),i.clone(e,t)},i.fromRowMajorArray=function(e,t){return n.o.defined("values",e),r.e(t)?(t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],t):new i(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])},i.fromQuaternion=function(e,t){n.o.typeOf.object("quaternion",e);var o=e.x*e.x,u=e.x*e.y,s=e.x*e.z,a=e.x*e.w,l=e.y*e.y,c=e.y*e.z,f=e.y*e.w,p=e.z*e.z,y=e.z*e.w,m=e.w*e.w,d=o-l-p+m,b=2*(u-y),h=2*(s+f),O=2*(u+y),g=-o+l-p+m,v=2*(c-a),x=2*(s-f),E=2*(c+a),w=-o-l+p+m;return r.e(t)?(t[0]=d,t[1]=O,t[2]=x,t[3]=b,t[4]=g,t[5]=E,t[6]=h,t[7]=v,t[8]=w,t):new i(d,b,h,O,g,v,x,E,w)},i.fromHeadingPitchRoll=function(e,t){n.o.typeOf.object("headingPitchRoll",e);var o=Math.cos(-e.pitch),u=Math.cos(-e.heading),s=Math.cos(e.roll),a=Math.sin(-e.pitch),l=Math.sin(-e.heading),c=Math.sin(e.roll),f=o*u,p=-s*l+c*a*u,y=c*l+s*a*u,m=o*l,d=s*u+c*a*l,b=-c*u+s*a*l,h=-a,O=c*o,g=s*o;return r.e(t)?(t[0]=f,t[1]=m,t[2]=h,t[3]=p,t[4]=d,t[5]=O,t[6]=y,t[7]=b,t[8]=g,t):new i(f,p,y,m,d,b,h,O,g)},i.fromScale=function(e,t){return n.o.typeOf.object("scale",e),r.e(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=0,t[4]=e.y,t[5]=0,t[6]=0,t[7]=0,t[8]=e.z,t):new i(e.x,0,0,0,e.y,0,0,0,e.z)},i.fromUniformScale=function(e,t){return n.o.typeOf.number("scale",e),r.e(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=e,t):new i(e,0,0,0,e,0,0,0,e)},i.fromCrossProduct=function(e,t){return n.o.typeOf.object("vector",e),r.e(t)?(t[0]=0,t[1]=e.z,t[2]=-e.y,t[3]=-e.z,t[4]=0,t[5]=e.x,t[6]=e.y,t[7]=-e.x,t[8]=0,t):new i(0,-e.z,e.y,e.z,0,-e.x,-e.y,e.x,0)},i.fromRotationX=function(e,t){n.o.typeOf.number("angle",e);var o=Math.cos(e),u=Math.sin(e);return r.e(t)?(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=o,t[5]=u,t[6]=0,t[7]=-u,t[8]=o,t):new i(1,0,0,0,o,-u,0,u,o)},i.fromRotationY=function(e,t){n.o.typeOf.number("angle",e);var o=Math.cos(e),u=Math.sin(e);return r.e(t)?(t[0]=o,t[1]=0,t[2]=-u,t[3]=0,t[4]=1,t[5]=0,t[6]=u,t[7]=0,t[8]=o,t):new i(o,0,u,0,1,0,-u,0,o)},i.fromRotationZ=function(e,t){n.o.typeOf.number("angle",e);var o=Math.cos(e),u=Math.sin(e);return r.e(t)?(t[0]=o,t[1]=u,t[2]=0,t[3]=-u,t[4]=o,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t):new i(o,-u,0,u,o,0,0,0,1)},i.toArray=function(e,t){return n.o.typeOf.object("matrix",e),r.e(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t):[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},i.getElementIndex=function(e,t){return n.o.typeOf.number.greaterThanOrEquals("row",t,0),n.o.typeOf.number.lessThanOrEquals("row",t,2),n.o.typeOf.number.greaterThanOrEquals("column",e,0),n.o.typeOf.number.lessThanOrEquals("column",e,2),3*e+t},i.getColumn=function(e,t,r){n.o.typeOf.object("matrix",e),n.o.typeOf.number.greaterThanOrEquals("index",t,0),n.o.typeOf.number.lessThanOrEquals("index",t,2),n.o.typeOf.object("result",r);var o=3*t,u=e[o],i=e[o+1],s=e[o+2];return r.x=u,r.y=i,r.z=s,r},i.setColumn=function(e,t,r,o){n.o.typeOf.object("matrix",e),n.o.typeOf.number.greaterThanOrEquals("index",t,0),n.o.typeOf.number.lessThanOrEquals("index",t,2),n.o.typeOf.object("cartesian",r),n.o.typeOf.object("result",o);var u=3*t;return(o=i.clone(e,o))[u]=r.x,o[u+1]=r.y,o[u+2]=r.z,o},i.getRow=function(e,t,r){n.o.typeOf.object("matrix",e),n.o.typeOf.number.greaterThanOrEquals("index",t,0),n.o.typeOf.number.lessThanOrEquals("index",t,2),n.o.typeOf.object("result",r);var o=e[t],u=e[t+3],i=e[t+6];return r.x=o,r.y=u,r.z=i,r},i.setRow=function(e,t,r,o){return n.o.typeOf.object("matrix",e),n.o.typeOf.number.greaterThanOrEquals("index",t,0),n.o.typeOf.number.lessThanOrEquals("index",t,2),n.o.typeOf.object("cartesian",r),n.o.typeOf.object("result",o),(o=i.clone(e,o))[t]=r.x,o[t+3]=r.y,o[t+6]=r.z,o};var s=new t.o;i.getScale=function(e,r){return n.o.typeOf.object("matrix",e),n.o.typeOf.object("result",r),r.x=t.o.magnitude(t.o.fromElements(e[0],e[1],e[2],s)),r.y=t.o.magnitude(t.o.fromElements(e[3],e[4],e[5],s)),r.z=t.o.magnitude(t.o.fromElements(e[6],e[7],e[8],s)),r};var a=new t.o;i.getMaximumScale=function(e){return i.getScale(e,a),t.o.maximumComponent(a)},i.multiply=function(e,t,r){n.o.typeOf.object("left",e),n.o.typeOf.object("right",t),n.o.typeOf.object("result",r);var o=e[0]*t[0]+e[3]*t[1]+e[6]*t[2],u=e[1]*t[0]+e[4]*t[1]+e[7]*t[2],i=e[2]*t[0]+e[5]*t[1]+e[8]*t[2],s=e[0]*t[3]+e[3]*t[4]+e[6]*t[5],a=e[1]*t[3]+e[4]*t[4]+e[7]*t[5],l=e[2]*t[3]+e[5]*t[4]+e[8]*t[5],c=e[0]*t[6]+e[3]*t[7]+e[6]*t[8],f=e[1]*t[6]+e[4]*t[7]+e[7]*t[8],p=e[2]*t[6]+e[5]*t[7]+e[8]*t[8];return r[0]=o,r[1]=u,r[2]=i,r[3]=s,r[4]=a,r[5]=l,r[6]=c,r[7]=f,r[8]=p,r},i.add=function(e,t,r){return n.o.typeOf.object("left",e),n.o.typeOf.object("right",t),n.o.typeOf.object("result",r),r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r[3]=e[3]+t[3],r[4]=e[4]+t[4],r[5]=e[5]+t[5],r[6]=e[6]+t[6],r[7]=e[7]+t[7],r[8]=e[8]+t[8],r},i.subtract=function(e,t,r){return n.o.typeOf.object("left",e),n.o.typeOf.object("right",t),n.o.typeOf.object("result",r),r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r[3]=e[3]-t[3],r[4]=e[4]-t[4],r[5]=e[5]-t[5],r[6]=e[6]-t[6],r[7]=e[7]-t[7],r[8]=e[8]-t[8],r},i.multiplyByVector=function(e,t,r){n.o.typeOf.object("matrix",e),n.o.typeOf.object("cartesian",t),n.o.typeOf.object("result",r);var o=t.x,u=t.y,i=t.z,s=e[0]*o+e[3]*u+e[6]*i,a=e[1]*o+e[4]*u+e[7]*i,l=e[2]*o+e[5]*u+e[8]*i;return r.x=s,r.y=a,r.z=l,r},i.multiplyByScalar=function(e,t,r){return n.o.typeOf.object("matrix",e),n.o.typeOf.number("scalar",t),n.o.typeOf.object("result",r),r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r[4]=e[4]*t,r[5]=e[5]*t,r[6]=e[6]*t,r[7]=e[7]*t,r[8]=e[8]*t,r},i.multiplyByScale=function(e,t,r){return n.o.typeOf.object("matrix",e),n.o.typeOf.object("scale",t),n.o.typeOf.object("result",r),r[0]=e[0]*t.x,r[1]=e[1]*t.x,r[2]=e[2]*t.x,r[3]=e[3]*t.y,r[4]=e[4]*t.y,r[5]=e[5]*t.y,r[6]=e[6]*t.z,r[7]=e[7]*t.z,r[8]=e[8]*t.z,r},i.negate=function(e,t){return n.o.typeOf.object("matrix",e),n.o.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t},i.transpose=function(e,t){n.o.typeOf.object("matrix",e),n.o.typeOf.object("result",t);var r=e[0],o=e[3],u=e[6],i=e[1],s=e[4],a=e[7],l=e[2],c=e[5],f=e[8];return t[0]=r,t[1]=o,t[2]=u,t[3]=i,t[4]=s,t[5]=a,t[6]=l,t[7]=c,t[8]=f,t};var l=new t.o(1,1,1);i.getRotation=function(e,r){n.o.typeOf.object("matrix",e),n.o.typeOf.object("result",r);var o=t.o.divideComponents(l,i.getScale(e,a),a);return r=i.multiplyByScale(e,o,r)};var c=[1,0,0],f=[2,2,1];function p(e){for(var t=0,n=0;n<3;++n){var r=e[i.getElementIndex(f[n],c[n])];t+=2*r*r}return Math.sqrt(t)}function y(e,t){for(var n=o.e.EPSILON15,r=0,u=1,s=0;s<3;++s){var a=Math.abs(e[i.getElementIndex(f[s],c[s])]);a>r&&(u=s,r=a)}var l=1,p=0,y=c[u],m=f[u];if(Math.abs(e[i.getElementIndex(m,y)])>n){var d,b=(e[i.getElementIndex(m,m)]-e[i.getElementIndex(y,y)])/2/e[i.getElementIndex(m,y)];p=(d=b<0?-1/(-b+Math.sqrt(1+b*b)):1/(b+Math.sqrt(1+b*b)))*(l=1/Math.sqrt(1+d*d))}return(t=i.clone(i.IDENTITY,t))[i.getElementIndex(y,y)]=t[i.getElementIndex(m,m)]=l,t[i.getElementIndex(m,y)]=p,t[i.getElementIndex(y,m)]=-p,t}var m=new i,d=new i;i.computeEigenDecomposition=function(e,t){n.o.typeOf.object("matrix",e);var u=o.e.EPSILON20,s=0,a=0;r.e(t)||(t={});for(var l=t.unitary=i.clone(i.IDENTITY,t.unitary),c=t.diagonal=i.clone(e,t.diagonal),f=u*function(e){for(var t=0,n=0;n<9;++n){var r=e[n];t+=r*r}return Math.sqrt(t)}(c);a<10&&p(c)>f;)y(c,m),i.transpose(m,d),i.multiply(c,m,c),i.multiply(d,c,c),i.multiply(l,m,l),++s>2&&(++a,s=0);return t},i.abs=function(e,t){return n.o.typeOf.object("matrix",e),n.o.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t[4]=Math.abs(e[4]),t[5]=Math.abs(e[5]),t[6]=Math.abs(e[6]),t[7]=Math.abs(e[7]),t[8]=Math.abs(e[8]),t},i.determinant=function(e){n.o.typeOf.object("matrix",e);var t=e[0],r=e[3],o=e[6],u=e[1],i=e[4],s=e[7],a=e[2],l=e[5],c=e[8];return t*(i*c-l*s)+u*(l*o-r*c)+a*(r*s-i*o)},i.inverse=function(e,t){n.o.typeOf.object("matrix",e),n.o.typeOf.object("result",t);var r=e[0],u=e[1],s=e[2],a=e[3],l=e[4],c=e[5],f=e[6],p=e[7],y=e[8],m=i.determinant(e);if(Math.abs(m)<=o.e.EPSILON15)throw new n.t("matrix is not invertible");t[0]=l*y-p*c,t[1]=p*s-u*y,t[2]=u*c-l*s,t[3]=f*c-a*y,t[4]=r*y-f*s,t[5]=a*s-r*c,t[6]=a*p-f*l,t[7]=f*u-r*p,t[8]=r*l-a*u;var d=1/m;return i.multiplyByScalar(t,d,t)},i.equals=function(e,t){return e===t||r.e(e)&&r.e(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]},i.equalsEpsilon=function(e,t,o){return n.o.typeOf.number("epsilon",o),e===t||r.e(e)&&r.e(t)&&Math.abs(e[0]-t[0])<=o&&Math.abs(e[1]-t[1])<=o&&Math.abs(e[2]-t[2])<=o&&Math.abs(e[3]-t[3])<=o&&Math.abs(e[4]-t[4])<=o&&Math.abs(e[5]-t[5])<=o&&Math.abs(e[6]-t[6])<=o&&Math.abs(e[7]-t[7])<=o&&Math.abs(e[8]-t[8])<=o},i.IDENTITY=Object.freeze(new i(1,0,0,0,1,0,0,0,1)),i.ZERO=Object.freeze(new i(0,0,0,0,0,0,0,0,0)),i.COLUMN0ROW0=0,i.COLUMN0ROW1=1,i.COLUMN0ROW2=2,i.COLUMN1ROW0=3,i.COLUMN1ROW1=4,i.COLUMN1ROW2=5,i.COLUMN2ROW0=6,i.COLUMN2ROW1=7,i.COLUMN2ROW2=8,Object.defineProperties(i.prototype,{length:{get:function(){return i.packedLength}}}),i.prototype.clone=function(e){return i.clone(this,e)},i.prototype.equals=function(e){return i.equals(this,e)},i.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]&&e[4]===t[n+4]&&e[5]===t[n+5]&&e[6]===t[n+6]&&e[7]===t[n+7]&&e[8]===t[n+8]},i.prototype.equalsEpsilon=function(e,t){return i.equalsEpsilon(this,e,t)},i.prototype.toString=function(){return"("+this[0]+", "+this[3]+", "+this[6]+")\n("+this[1]+", "+this[4]+", "+this[7]+")\n("+this[2]+", "+this[5]+", "+this[8]+")"},i.prototype.toArray=function(e,t){i.pack(this,e,t)};var b,h,O,g,v,x,E,w,j,A,M,F,q,C,I,z,R,S,N,W={requestFullscreen:void 0,exitFullscreen:void 0,fullscreenEnabled:void 0,fullscreenElement:void 0,fullscreenchange:void 0,fullscreenerror:void 0},T={};function P(e){for(var t=e.split("."),n=0,r=t.length;n<r;++n)t[n]=parseInt(t[n],10);return t}function U(){if(!r.e(O)&&(O=!1,!V())){var e=/ Chrome\/([\.0-9]+)/.exec(h.userAgent);null!==e&&(O=!0,g=P(e[1]))}return O}function L(){if(!r.e(v)&&(v=!1,!U()&&!V()&&/ Safari\/[\.0-9]+/.test(h.userAgent))){var e=/ Version\/([\.0-9]+)/.exec(h.userAgent);null!==e&&(v=!0,x=P(e[1]))}return v}function _(){if(!r.e(E)){E=!1;var e=/ AppleWebKit\/([\.0-9]+)(\+?)/.exec(h.userAgent);null!==e&&(E=!0,(w=P(e[1])).isNightly=!!e[2])}return E}function k(){var e;r.e(j)||(j=!1,"Microsoft Internet Explorer"===h.appName?null!==(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(h.userAgent))&&(j=!0,A=P(e[1])):"Netscape"===h.appName&&(null!==(e=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(h.userAgent))&&(j=!0,A=P(e[1]))));return j}function V(){if(!r.e(M)){M=!1;var e=/ Edge\/([\.0-9]+)/.exec(h.userAgent);null!==e&&(M=!0,F=P(e[1]))}return M}function B(){if(!r.e(q)){q=!1;var e=/Firefox\/([\.0-9]+)/.exec(h.userAgent);null!==e&&(q=!0,C=P(e[1]))}return q}function D(){if(!r.e(N)){var e=document.createElement("canvas");e.setAttribute("style","image-rendering: -moz-crisp-edges;image-rendering: pixelated;");var t=e.style.imageRendering;(N=r.e(t)&&""!==t)&&(S=t)}return N}function Y(){if(!Y.initialized)throw new DeveloperError("You must call FeatureDetection.supportsWebP.initialize and wait for the promise to resolve before calling FeatureDetection.supportsWebP");return Y._result}Object.defineProperties(T,{element:{get:function(){if(T.supportsFullscreen())return document[W.fullscreenElement]}},changeEventName:{get:function(){if(T.supportsFullscreen())return W.fullscreenchange}},errorEventName:{get:function(){if(T.supportsFullscreen())return W.fullscreenerror}},enabled:{get:function(){if(T.supportsFullscreen())return document[W.fullscreenEnabled]}},fullscreen:{get:function(){if(T.supportsFullscreen())return null!==T.element}}}),T.supportsFullscreen=function(){if(r.e(b))return b;b=!1;var e=document.body;if("function"==typeof e.requestFullscreen)return W.requestFullscreen="requestFullscreen",W.exitFullscreen="exitFullscreen",W.fullscreenEnabled="fullscreenEnabled",W.fullscreenElement="fullscreenElement",W.fullscreenchange="fullscreenchange",W.fullscreenerror="fullscreenerror",b=!0;for(var t,n=["webkit","moz","o","ms","khtml"],o=0,u=n.length;o<u;++o){var i=n[o];"function"==typeof e[t=i+"RequestFullscreen"]?(W.requestFullscreen=t,b=!0):"function"==typeof e[t=i+"RequestFullScreen"]&&(W.requestFullscreen=t,b=!0),t=i+"ExitFullscreen","function"==typeof document[t]?W.exitFullscreen=t:(t=i+"CancelFullScreen","function"==typeof document[t]&&(W.exitFullscreen=t)),t=i+"FullscreenEnabled",void 0!==document[t]?W.fullscreenEnabled=t:(t=i+"FullScreenEnabled",void 0!==document[t]&&(W.fullscreenEnabled=t)),t=i+"FullscreenElement",void 0!==document[t]?W.fullscreenElement=t:(t=i+"FullScreenElement",void 0!==document[t]&&(W.fullscreenElement=t)),t=i+"fullscreenchange",void 0!==document["on"+t]&&("ms"===i&&(t="MSFullscreenChange"),W.fullscreenchange=t),t=i+"fullscreenerror",void 0!==document["on"+t]&&("ms"===i&&(t="MSFullscreenError"),W.fullscreenerror=t)}return b},T.requestFullscreen=function(e,t){!T.supportsFullscreen()||e[W.requestFullscreen]({vrDisplay:t})},T.exitFullscreen=function(){!T.supportsFullscreen()||document[W.exitFullscreen]()},T._names=W,h=typeof navigator<"u"?navigator:{},Y._promise=void 0,Y._result=void 0,Y.initialize=function(){if(r.e(Y._promise))return Y._promise;const e=u.s();if(Y._promise=e.promise,V())return Y._result=!1,e.resolve(Y._result),e.promise;const t=new Image;return t.onload=function(){Y._result=t.width>0&&t.height>0,e.resolve(Y._result)},t.onerror=function(){Y._result=!1,e.resolve(Y._result)},t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.promise},Object.defineProperties(Y,{initialized:{get:function(){return r.e(Y._result)}}});var Q=[];typeof ArrayBuffer<"u"&&(Q.push(Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array),typeof Uint8ClampedArray<"u"&&Q.push(Uint8ClampedArray),typeof CanvasPixelArray<"u"&&Q.push(CanvasPixelArray));var J={isChrome:U,chromeVersion:function(){return U()&&g},isSafari:L,safariVersion:function(){return L()&&x},isWebkit:_,webkitVersion:function(){return _()&&w},isInternetExplorer:k,internetExplorerVersion:function(){return k()&&A},isEdge:V,edgeVersion:function(){return V()&&F},isFirefox:B,firefoxVersion:function(){return B()&&C},isWindows:function(){return r.e(I)||(I=/Windows/i.test(h.appVersion)),I},isNodeJs:function(){return r.e(z)||(z="object"==typeof process&&"[object process]"===Object.prototype.toString.call(process)),z},hardwareConcurrency:r.u(h.hardwareConcurrency,3),supportsPointerEvents:function(){return r.e(R)||(R=!B()&&typeof PointerEvent<"u"&&(!r.e(h.pointerEnabled)||h.pointerEnabled)),R},supportsImageRenderingPixelated:D,supportsWebP:Y,supportsWebPSync:function(){return r.e(undefined)||Y.initialize(),Y._result},imageRenderingValue:function(){return D()?S:void 0},typedArrayTypes:Q,isPCBroswer:function(){var e=window.navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),n="iphone os"==e.match(/iphone os/i),r="midp"==e.match(/midp/i),o="ucweb"==e.match(/ucweb/i),u="android"==e.match(/android/i),i="windows ce"==e.match(/windows ce/i),s="windows mobile"==e.match(/windows mobile/i);return!(t||n||r||o||u||i||s)}};J.supportsFullscreen=function(){return T.supportsFullscreen()},J.supportsTypedArrays=function(){return typeof ArrayBuffer<"u"},J.supportsWebWorkers=function(){return typeof Worker<"u"},J.supportsWebAssembly=function(){return typeof WebAssembly<"u"&&!J.isEdge()},J.supportsOffscreenCanvas=function(){return typeof OffscreenCanvas<"u"&&!J.isEdge()},e.p=i,e.s=J}));
