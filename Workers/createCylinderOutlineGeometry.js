define(["./arrayFill-69e0407a","./buildModuleUrl-0b6ed7f4","./Ellipsoid-a181f4f7","./Cartesian3-9e1fac2b","./Check-1ab97039","./ComponentDatatype-00a8741a","./CylinderGeometryLibrary-59629873","./defaultValue-a9572088","./GeometryAttribute-96eb6e6a","./GeometryAttributes-ba165842","./GeometryOffsetAttribute-b4d599f5","./IndexDatatype-42a29532","./PrimitiveType-56cd8f05","./Cartographic-832093e6","./Math-42d8c121","./FeatureDetection-b832308f","./defer-027bcf35","./Rectangle-15196776","./Event-086a9f30","./RuntimeError-7a3815c0","./WebGLConstants-ade65f0f","./Cartesian4-c70aabd2"],(function(t,e,i,o,r,a,n,s,u,f,b,d,p,c,m,l,y,_,h,v,O,A){"use strict";var R=new i.o;function g(t){var e=(t=s.u(t,s.u.EMPTY_OBJECT)).length,i=t.topRadius,o=t.bottomRadius,a=s.u(t.slices,128),n=Math.max(s.u(t.numberOfVerticalLines,16),0);if(r.o.typeOf.number("options.positions",e),r.o.typeOf.number("options.topRadius",i),r.o.typeOf.number("options.bottomRadius",o),r.o.typeOf.number.greaterThanOrEquals("options.slices",a,3),s.e(t.offsetAttribute)&&t.offsetAttribute===b.z.TOP)throw new r.t("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=e,this._topRadius=i,this._bottomRadius=o,this._slices=a,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}g.packedLength=6,g.pack=function(t,e,i){return r.o.typeOf.object("value",t),r.o.defined("array",e),i=s.u(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=s.u(t._offsetAttribute,-1),e};var E={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return g.unpack=function(t,e,i){r.o.defined("array",t),e=s.u(e,0);var o=t[e++],a=t[e++],n=t[e++],u=t[e++],f=t[e++],b=t[e];return s.e(i)?(i._length=o,i._topRadius=a,i._bottomRadius=n,i._slices=u,i._numberOfVerticalLines=f,i._offsetAttribute=-1===b?void 0:b,i):(E.length=o,E.topRadius=a,E.bottomRadius=n,E.slices=u,E.numberOfVerticalLines=f,E.offsetAttribute=-1===b?void 0:b,new g(E))},g.createGeometry=function(r){var c=r._length,m=r._topRadius,l=r._bottomRadius,y=r._slices,_=r._numberOfVerticalLines;if(!(c<=0||m<0||l<0||0===m&&0===l)){var h,v=2*y,O=n.I.computePositions(c,m,l,y,!1),A=2*y;if(_>0){var g=Math.min(_,y);h=Math.round(y/g),A+=g}var E,L=d.IndexDatatype.createTypedArray(v,2*A),w=0;for(E=0;E<y-1;E++)L[w++]=E,L[w++]=E+1,L[w++]=E+y,L[w++]=E+1+y;if(L[w++]=y-1,L[w++]=0,L[w++]=y+y-1,L[w++]=y,_>0)for(E=0;E<y;E+=h)L[w++]=E,L[w++]=E+y;var C=new f.a;C.position=new u.o({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:O}),R.x=.5*c,R.y=Math.max(l,m);var D=new e.i(o.o.ZERO,i.o.magnitude(R));if(s.e(r._offsetAttribute)){c=O.length;var G=new Uint8Array(c/3),T=r._offsetAttribute===b.z.NONE?0:1;t.d(G,T),C.applyOffset=new u.o({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:G})}return new u.I({attributes:C,indices:L,primitiveType:p._0x4e53a2.LINES,boundingSphere:D,offsetAttribute:r._offsetAttribute})}},function(t,e){return s.e(e)&&(t=g.unpack(t,e)),g.createGeometry(t)}}));
