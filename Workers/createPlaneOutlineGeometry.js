define(["./defaultValue-a9572088","./buildModuleUrl-0b6ed7f4","./Cartesian3-9e1fac2b","./Check-1ab97039","./ComponentDatatype-00a8741a","./GeometryAttribute-96eb6e6a","./GeometryAttributes-ba165842","./PrimitiveType-56cd8f05","./Cartographic-832093e6","./Math-42d8c121","./Ellipsoid-a181f4f7","./FeatureDetection-b832308f","./defer-027bcf35","./Rectangle-15196776","./Event-086a9f30","./RuntimeError-7a3815c0","./WebGLConstants-ade65f0f","./Cartesian4-c70aabd2"],(function(e,t,n,a,r,i,o,u,c,f,d,p,y,b,s,l,m,w){"use strict";function h(){this._workerName="createPlaneOutlineGeometry"}h.packedLength=0,h.pack=function(e,t){return a.o.defined("value",e),a.o.defined("array",t),t},h.unpack=function(t,n,r){return a.o.defined("array",t),e.e(r)?r:new h};var v=new n.o(-.5,-.5,0),C=new n.o(.5,.5,0);return h.createGeometry=function(){var e=new o.a,a=new Uint16Array(8),c=new Float64Array(12);return c[0]=v.x,c[1]=v.y,c[2]=v.z,c[3]=C.x,c[4]=v.y,c[5]=v.z,c[6]=C.x,c[7]=C.y,c[8]=v.z,c[9]=v.x,c[10]=C.y,c[11]=v.z,e.position=new i.o({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),a[0]=0,a[1]=1,a[2]=1,a[3]=2,a[4]=2,a[5]=3,a[6]=3,a[7]=0,new i.I({attributes:e,indices:a,primitiveType:u._0x4e53a2.LINES,boundingSphere:new t.i(n.o.ZERO,Math.sqrt(2))})},function(t,n){return e.e(n)&&(t=h.unpack(t,n)),h.createGeometry(t)}}));
