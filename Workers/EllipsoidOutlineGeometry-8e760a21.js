define(["exports","./arrayFill-69e0407a","./buildModuleUrl-0b6ed7f4","./Cartesian3-9e1fac2b","./ComponentDatatype-00a8741a","./defaultValue-a9572088","./Check-1ab97039","./Ellipsoid-a181f4f7","./GeometryAttribute-96eb6e6a","./GeometryAttributes-ba165842","./GeometryOffsetAttribute-b4d599f5","./IndexDatatype-42a29532","./Math-42d8c121","./PrimitiveType-56cd8f05"],(function(i,t,e,o,n,r,a,s,m,u,f,c,d,l){"use strict";var _=new o.o(1,1,1),h=Math.cos,p=Math.sin;function b(i){i=r.u(i,r.u.EMPTY_OBJECT);var t=r.u(i.radii,_),e=r.u(i.innerRadii,t),n=r.u(i.minimumClock,0),s=r.u(i.maximumClock,d.e.TWO_PI),m=r.u(i.minimumCone,0),u=r.u(i.maximumCone,d.e.PI),c=Math.round(r.u(i.stackPartitions,10)),l=Math.round(r.u(i.slicePartitions,8)),h=Math.round(r.u(i.subdivisions,128));if(c<1)throw new a.t("options.stackPartitions cannot be less than 1");if(l<0)throw new a.t("options.slicePartitions cannot be less than 0");if(h<0)throw new a.t("options.subdivisions must be greater than or equal to zero.");if(r.e(i.offsetAttribute)&&i.offsetAttribute===f.z.TOP)throw new a.t("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=o.o.clone(t),this._innerRadii=o.o.clone(e),this._minimumClock=n,this._maximumClock=s,this._minimumCone=m,this._maximumCone=u,this._stackPartitions=c,this._slicePartitions=l,this._subdivisions=h,this._offsetAttribute=i.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}b.packedLength=2*o.o.packedLength+8,b.pack=function(i,t,e){if(!r.e(i))throw new a.t("value is required");if(!r.e(t))throw new a.t("array is required");return e=r.u(e,0),o.o.pack(i._radii,t,e),e+=o.o.packedLength,o.o.pack(i._innerRadii,t,e),e+=o.o.packedLength,t[e++]=i._minimumClock,t[e++]=i._maximumClock,t[e++]=i._minimumCone,t[e++]=i._maximumCone,t[e++]=i._stackPartitions,t[e++]=i._slicePartitions,t[e++]=i._subdivisions,t[e]=r.u(i._offsetAttribute,-1),t};var v=new o.o,k=new o.o,y={radii:v,innerRadii:k,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};b.unpack=function(i,t,e){if(!r.e(i))throw new a.t("array is required");t=r.u(t,0);var n=o.o.unpack(i,t,v);t+=o.o.packedLength;var s=o.o.unpack(i,t,k);t+=o.o.packedLength;var m=i[t++],u=i[t++],f=i[t++],c=i[t++],d=i[t++],l=i[t++],_=i[t++],h=i[t];return r.e(e)?(e._radii=o.o.clone(n,e._radii),e._innerRadii=o.o.clone(s,e._innerRadii),e._minimumClock=m,e._maximumClock=u,e._minimumCone=f,e._maximumCone=c,e._stackPartitions=d,e._slicePartitions=l,e._subdivisions=_,e._offsetAttribute=-1===h?void 0:h,e):(y.minimumClock=m,y.maximumClock=u,y.minimumCone=f,y.maximumCone=c,y.stackPartitions=d,y.slicePartitions=l,y.subdivisions=_,y.offsetAttribute=-1===h?void 0:h,new b(y))},b.createGeometry=function(i){var o=i._radii;if(!(o.x<=0||o.y<=0||o.z<=0)){var a=i._innerRadii;if(!(a.x<=0||a.y<=0||a.z<=0)){var _=i._minimumClock,b=i._maximumClock,v=i._minimumCone,k=i._maximumCone,y=i._subdivisions,C=s.t.fromCartesian3(o),w=i._slicePartitions+1,x=i._stackPartitions+1;(w=Math.round(w*Math.abs(b-_)/d.e.TWO_PI))<2&&(w=2),(x=Math.round(x*Math.abs(k-v)/d.e.PI))<2&&(x=2);var P=0,A=1,g=a.x!==o.x||a.y!==o.y||a.z!==o.z,M=!1,z=!1;g&&(A=2,v>0&&(M=!0,P+=w),k<Math.PI&&(z=!0,P+=w));var O,E,I,T,D=y*A*(x+w),L=new Float64Array(3*D),G=2*(D+P-(w+x)*A),R=c.IndexDatatype.createTypedArray(D,G),N=0,q=new Array(x),U=new Array(x);for(O=0;O<x;O++)T=v+O*(k-v)/(x-1),q[O]=p(T),U[O]=h(T);var B=new Array(y),S=new Array(y);for(O=0;O<y;O++)I=_+O*(b-_)/(y-1),B[O]=p(I),S[O]=h(I);for(O=0;O<x;O++)for(E=0;E<y;E++)L[N++]=o.x*q[O]*S[E],L[N++]=o.y*q[O]*B[E],L[N++]=o.z*U[O];if(g)for(O=0;O<x;O++)for(E=0;E<y;E++)L[N++]=a.x*q[O]*S[E],L[N++]=a.y*q[O]*B[E],L[N++]=a.z*U[O];for(q.length=y,U.length=y,O=0;O<y;O++)T=v+O*(k-v)/(y-1),q[O]=p(T),U[O]=h(T);for(B.length=w,S.length=w,O=0;O<w;O++)I=_+O*(b-_)/(w-1),B[O]=p(I),S[O]=h(I);for(O=0;O<y;O++)for(E=0;E<w;E++)L[N++]=o.x*q[O]*S[E],L[N++]=o.y*q[O]*B[E],L[N++]=o.z*U[O];if(g)for(O=0;O<y;O++)for(E=0;E<w;E++)L[N++]=a.x*q[O]*S[E],L[N++]=a.y*q[O]*B[E],L[N++]=a.z*U[O];for(N=0,O=0;O<x*A;O++){var F=O*y;for(E=0;E<y-1;E++)R[N++]=F+E,R[N++]=F+E+1}var W=x*y*A;for(O=0;O<w;O++)for(E=0;E<y-1;E++)R[N++]=W+O+E*w,R[N++]=W+O+(E+1)*w;if(g)for(W=x*y*A+w*y,O=0;O<w;O++)for(E=0;E<y-1;E++)R[N++]=W+O+E*w,R[N++]=W+O+(E+1)*w;if(g){var Y=x*y*A,J=Y+y*w;if(M)for(O=0;O<w;O++)R[N++]=Y+O,R[N++]=J+O;if(z)for(Y+=y*w-w,J+=y*w-w,O=0;O<w;O++)R[N++]=Y+O,R[N++]=J+O}var V=new u.a({position:new m.o({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:L})});if(r.e(i._offsetAttribute)){var j=L.length,H=new Uint8Array(j/3),K=i._offsetAttribute===f.z.NONE?0:1;t.d(H,K),V.applyOffset=new m.o({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:H})}return new m.I({attributes:V,indices:R,primitiveType:l._0x4e53a2.LINES,boundingSphere:e.i.fromEllipsoid(C),offsetAttribute:i._offsetAttribute})}}},i.x=b}));
