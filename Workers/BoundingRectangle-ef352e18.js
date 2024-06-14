define(["exports","./Ellipsoid-a181f4f7","./Cartographic-832093e6","./Check-1ab97039","./defaultValue-a9572088","./buildModuleUrl-0b6ed7f4","./Rectangle-15196776"],(function(t,e,h,i,n,r,o){"use strict";function u(t,e,h,i){this.x=n.u(t,0),this.y=n.u(e,0),this.width=n.u(h,0),this.height=n.u(i,0)}u.packedLength=4,u.pack=function(t,e,h){return i.o.typeOf.object("value",t),i.o.defined("array",e),h=n.u(h,0),e[h++]=t.x,e[h++]=t.y,e[h++]=t.width,e[h]=t.height,e},u.unpack=function(t,e,h){return i.o.defined("array",t),e=n.u(e,0),n.e(h)||(h=new u),h.x=t[e++],h.y=t[e++],h.width=t[e++],h.height=t[e],h},u.fromPoints=function(t,e){if(n.e(e)||(e=new u),!n.e(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;for(var h=t.length,i=t[0].x,r=t[0].y,o=t[0].x,a=t[0].y,c=1;c<h;c++){var y=t[c],f=y.x,x=y.y;i=Math.min(f,i),o=Math.max(f,o),r=Math.min(x,r),a=Math.max(x,a)}return e.x=i,e.y=r,e.width=o-i,e.height=a-r,e};var a=new r.n,c=new h.a,y=new h.a;u.fromRectangle=function(t,h,i){if(n.e(i)||(i=new u),!n.e(t))return i.x=0,i.y=0,i.width=0,i.height=0,i;var r=(h=n.u(h,a)).project(o.h.southwest(t,c)),f=h.project(o.h.northeast(t,y));return e.o.subtract(f,r,f),i.x=r.x,i.y=r.y,i.width=f.x,i.height=f.y,i},u.clone=function(t,e){if(n.e(t))return n.e(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new u(t.x,t.y,t.width,t.height)},u.union=function(t,e,h){i.o.typeOf.object("left",t),i.o.typeOf.object("right",e),n.e(h)||(h=new u);var r=Math.min(t.x,e.x),o=Math.min(t.y,e.y),a=Math.max(t.x+t.width,e.x+e.width),c=Math.max(t.y+t.height,e.y+e.height);return h.x=r,h.y=o,h.width=a-r,h.height=c-o,h},u.expand=function(t,e,h){i.o.typeOf.object("rectangle",t),i.o.typeOf.object("point",e),h=u.clone(t,h);var n=e.x-h.x,r=e.y-h.y;return n>h.width?h.width=n:n<0&&(h.width-=n,h.x=e.x),r>h.height?h.height=r:r<0&&(h.height-=r,h.y=e.y),h},u.intersect=function(t,e){i.o.typeOf.object("left",t),i.o.typeOf.object("right",e);var h=t.x,n=t.y,o=e.x,u=e.y;return h>o+e.width||h+t.width<o||n+t.height<u||n>u+e.height?r.S.OUTSIDE:r.S.INTERSECTING},u.equals=function(t,e){return t===e||n.e(t)&&n.e(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},u.prototype.clone=function(t){return u.clone(this,t)},u.prototype.intersect=function(t){return u.intersect(this,t)},u.prototype.equals=function(t){return u.equals(this,t)},t.f=u}));
