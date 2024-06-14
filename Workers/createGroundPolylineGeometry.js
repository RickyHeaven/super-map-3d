define(["./buildModuleUrl-0b6ed7f4","./Ellipsoid-a181f4f7","./Cartesian3-9e1fac2b","./Cartographic-832093e6","./Check-1ab97039","./defaultValue-a9572088","./GeographicTilingScheme-57db2937","./Rectangle-15196776","./ArcType-31298545","./arrayRemoveDuplicates-d492b4a7","./ComponentDatatype-00a8741a","./EllipsoidGeodesic-acb826bd","./EllipsoidRhumbLine-07313960","./EncodedCartesian3-5686f234","./GeometryAttribute-96eb6e6a","./IntersectionTests-b7b35aa4","./Math-42d8c121","./FeatureDetection-b832308f","./Plane-5520c09d","./WebMercatorProjection-6eaad0a0","./PrimitiveType-56cd8f05","./Cartesian4-c70aabd2","./RuntimeError-7a3815c0","./WebGLConstants-ade65f0f","./defer-027bcf35","./Event-086a9f30"],(function(e,o,a,n,t,r,i,l,s,c,u,p,d,h,f,g,w,m,v,y,E,T,_,I,O,k){"use strict";var P=new a.o,b=new a.o,S=new n.a,L=new a.o,x=new a.o,A=new e.i,C=new i.g,N=[new n.a,new n.a,new n.a,new n.a],D=new o.o,H={};function M(e){n.a.fromRadians(e.east,e.north,0,N[0]),n.a.fromRadians(e.west,e.north,0,N[1]),n.a.fromRadians(e.east,e.south,0,N[2]),n.a.fromRadians(e.west,e.south,0,N[3]);var o,a=0,t=0,r=0,i=0,l=H._terrainHeightsMaxLevel;for(o=0;o<=l;++o){for(var s=!1,c=0;c<4;++c){var u=N[c];if(C.positionToTileXY(u,o,D),0===c)r=D.x,i=D.y;else if(r!==D.x||i!==D.y){s=!0;break}}if(s)break;a=r,t=i}if(0!==o)return{x:a,y:t,level:o>l?l:o-1}}H.initialize=function(){var o=H._initPromise;return r.e(o)||(o=e.t.fetchJson(e.n$1("Assets/approximateTerrainHeights.json")).then((function(e){H._terrainHeights=e})),H._initPromise=o),o},H.getMinimumMaximumHeights=function(e,n){if(t.o.defined("rectangle",e),!r.e(H._terrainHeights))throw new t.t("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");n=r.u(n,o.t.WGS84);var i=M(e),s=H._defaultMinTerrainHeight,c=H._defaultMaxTerrainHeight;if(r.e(i)){var u=i.level+"-"+i.x+"-"+i.y,p=H._terrainHeights[u];r.e(p)&&(s=p[0],c=p[1]),n.cartographicToCartesian(l.h.northeast(e,S),P),n.cartographicToCartesian(l.h.southwest(e,S),b),a.o.midpoint(b,P,L);var d=n.scaleToGeodeticSurface(L,x);if(r.e(d)){var h=a.o.distance(L,d);s=Math.min(s,-h)}else s=H._defaultMinTerrainHeight}return{minimumTerrainHeight:s=Math.max(H._defaultMinTerrainHeight,s),maximumTerrainHeight:c}},H.getBoundingSphere=function(a,n){if(t.o.defined("rectangle",a),!r.e(H._terrainHeights))throw new t.t("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");n=r.u(n,o.t.WGS84);var i=M(a),l=H._defaultMaxTerrainHeight;if(r.e(i)){var s=i.level+"-"+i.x+"-"+i.y,c=H._terrainHeights[s];r.e(c)&&(l=c[1])}var u=e.i.fromRectangle3D(a,n,0);return e.i.fromRectangle3D(a,n,l,A),e.i.union(u,A,u)},H._terrainHeightsMaxLevel=6,H._defaultMaxTerrainHeight=9e3,H._defaultMinTerrainHeight=-1e5,H._terrainHeights=void 0,H._initPromise=void 0,Object.defineProperties(H,{initialized:{get:function(){return r.e(H._terrainHeights)}}});var z=[e.n,y.t],R=z.length,j=Math.cos(w.e.toRadians(30)),F=Math.cos(w.e.toRadians(150));function G(e){var a=(e=r.u(e,r.u.EMPTY_OBJECT)).positions;if(!r.e(a)||a.length<2)throw new t.t("At least two positions are required.");if(r.e(e.arcType)&&e.arcType!==s.L.GEODESIC&&e.arcType!==s.L.RHUMB)throw new t.t("Valid options for arcType are ArcType.GEODESIC and ArcType.RHUMB.");this.width=r.u(e.width,1),this._positions=a,this.granularity=r.u(e.granularity,9999),this.loop=r.u(e.loop,!1),this.arcType=r.u(e.arcType,s.L.GEODESIC),this._ellipsoid=r.u(e.ellipsoid,o.t.WGS84),this._projectionIndex=0,this._workerName="createGroundPolylineGeometry",this._scene3DOnly=!1}Object.defineProperties(G.prototype,{packedLength:{get:function(){return 1+3*this._positions.length+1+1+1+o.t.packedLength+1+1}}}),G.setProjectionAndEllipsoid=function(e,o){for(var a=0,n=0;n<R;n++)if(o instanceof z[n]){a=n;break}e._projectionIndex=a,e._ellipsoid=o.ellipsoid};var B=new a.o,q=new a.o,U=new a.o;function V(e,o,n,t,r){var i=$(t,e,0,B),l=$(t,e,n,q),s=$(t,o,0,U),c=K(l,i,q),u=K(s,i,U);return a.o.cross(u,c,r),a.o.normalize(r,r)}var W=new n.a,Y=new a.o,Z=new a.o,X=new a.o;function J(e,o,n,t,r,i,l,c,u,h,f){if(0!==r){var g;i===s.L.GEODESIC?g=new p.E(e,o,l):i===s.L.RHUMB&&(g=new d.P(e,o,l));var w=g.surfaceDistance;if(!(w<r))for(var m=V(e,o,t,l,X),v=Math.ceil(w/r),y=w/v,E=y,T=v-1,_=c.length,I=0;I<T;I++){var O=g.interpolateUsingSurfaceDistance(E,W),k=$(l,O,n,Y),P=$(l,O,t,Z);a.o.pack(m,c,_),a.o.pack(k,u,_),a.o.pack(P,h,_),f.push(O.latitude),f.push(O.longitude),_+=3,E+=y}}}var Q=new n.a;function $(e,o,a,t){return n.a.clone(o,Q),Q.height=a,n.a.toCartesian(Q,e,t)}function K(e,o,n){return a.o.subtract(e,o,n),a.o.normalize(n,n),n}function ee(e,o,n,t){return t=K(e,o,t),t=a.o.cross(t,n,t),t=a.o.normalize(t,t),t=a.o.cross(n,t,t)}G.pack=function(e,n,i){t.o.typeOf.object("value",e),t.o.defined("array",n);var l=r.u(i,0),s=e._positions,c=s.length;n[l++]=c;for(var u=0;u<c;++u){var p=s[u];a.o.pack(p,n,l),l+=3}return n[l++]=e.granularity,n[l++]=e.loop?1:0,n[l++]=e.arcType,o.t.pack(e._ellipsoid,n,l),l+=o.t.packedLength,n[l++]=e._projectionIndex,n[l++]=e._scene3DOnly?1:0,n},G.unpack=function(e,n,i){t.o.defined("array",e);for(var l=r.u(n,0),s=e[l++],c=new Array(s),u=0;u<s;u++)c[u]=a.o.unpack(e,l),l+=3;var p=e[l++],d=1===e[l++],h=e[l++],f=o.t.unpack(e,l);l+=o.t.packedLength;var g=e[l++],w=1===e[l++];if(!r.e(i)){var m=new G({positions:c,granularity:p,loop:d,arcType:h,ellipsoid:f});return m._projectionIndex=g,m._scene3DOnly=w,m}return i._positions=c,i.granularity=p,i.loop=d,i.arcType=h,i._ellipsoid=f,i._projectionIndex=g,i._scene3DOnly=w,i};var oe=new a.o,ae=new a.o,ne=new a.o,te=new a.o;function re(e,o,n,t,r){var i=K(n,o,te),l=ee(e,o,i,oe),s=ee(t,o,i,ae);if(w.e.equalsEpsilon(a.o.dot(l,s),-1,w.e.EPSILON5))return r=a.o.cross(i,l,r),r=a.o.normalize(r,r);r=a.o.add(s,l,r),r=a.o.normalize(r,r);var c=a.o.cross(i,r,ne);return a.o.dot(s,c)<0&&(r=a.o.negate(r,r)),r}var ie=v.o.fromPointNormal(a.o.ZERO,a.o.UNIT_Y),le=new a.o,se=new a.o,ce=new a.o,ue=new a.o,pe=new a.o,de=new a.o,he=new n.a,fe=new n.a,ge=new n.a;G.createGeometry=function(e){var o,t,i=!e._scene3DOnly,l=e.loop,u=e._ellipsoid,p=e.granularity,h=e.arcType,f=new z[e._projectionIndex](u),m=1e3,v=e._positions,y=v.length;2===y&&(l=!1);var E,T,_,I,O,k,P,b=new d.P(void 0,void 0,u),S=[v[0]];for(t=0;t<y-1;t++)E=v[t],T=v[t+1],O=g.g.lineSegmentPlane(E,T,ie,de),r.e(O)&&!a.o.equalsEpsilon(O,E,w.e.EPSILON7)&&!a.o.equalsEpsilon(O,T,w.e.EPSILON7)&&(e.arcType===s.L.GEODESIC?S.push(a.o.clone(O)):e.arcType===s.L.RHUMB&&(P=u.cartesianToCartographic(O,he).longitude,_=u.cartesianToCartographic(E,he),I=u.cartesianToCartographic(T,fe),b.setEndPoints(_,I),k=b.findIntersectionWithLongitude(P,ge),O=u.cartographicToCartesian(k,de),r.e(O)&&!a.o.equalsEpsilon(O,E,w.e.EPSILON7)&&!a.o.equalsEpsilon(O,T,w.e.EPSILON7)&&S.push(a.o.clone(O)))),S.push(T);l&&(E=v[y-1],T=v[0],O=g.g.lineSegmentPlane(E,T,ie,de),r.e(O)&&!a.o.equalsEpsilon(O,E,w.e.EPSILON7)&&!a.o.equalsEpsilon(O,T,w.e.EPSILON7)&&(e.arcType===s.L.GEODESIC?S.push(a.o.clone(O)):e.arcType===s.L.RHUMB&&(P=u.cartesianToCartographic(O,he).longitude,_=u.cartesianToCartographic(E,he),I=u.cartesianToCartographic(T,fe),b.setEndPoints(_,I),k=b.findIntersectionWithLongitude(P,ge),O=u.cartographicToCartesian(k,de),r.e(O)&&!a.o.equalsEpsilon(O,E,w.e.EPSILON7)&&!a.o.equalsEpsilon(O,T,w.e.EPSILON7)&&S.push(a.o.clone(O)))));var L=S.length,x=new Array(L);for(t=0;t<L;t++){var A=n.a.fromCartesian(S[t],u);A.height=0,x[t]=A}if(!((L=(x=c.D(x,n.a.equalsEpsilon)).length)<2)){var C=[],N=[],D=[],H=[],M=le,R=se,j=ce,F=ue,G=pe,B=x[0],q=x[1];for(M=$(u,x[L-1],0,M),F=$(u,q,0,F),R=$(u,B,0,R),j=$(u,B,m,j),G=l?re(M,R,j,F,G):V(B,q,m,u,G),a.o.pack(G,N,0),a.o.pack(R,D,0),a.o.pack(j,H,0),C.push(B.latitude),C.push(B.longitude),J(B,q,0,m,p,h,u,N,D,H,C),t=1;t<L-1;++t){M=a.o.clone(R,M),R=a.o.clone(F,R);var U=x[t];$(u,U,m,j),$(u,x[t+1],0,F),re(M,R,j,F,G),o=N.length,a.o.pack(G,N,o),a.o.pack(R,D,o),a.o.pack(j,H,o),C.push(U.latitude),C.push(U.longitude),J(x[t],x[t+1],0,m,p,h,u,N,D,H,C)}var W=x[L-1],Y=x[L-2];if(R=$(u,W,0,R),j=$(u,W,m,j),l){var Z=x[0];G=re(M=$(u,Y,0,M),R,j,F=$(u,Z,0,F),G)}else G=V(Y,W,m,u,G);if(o=N.length,a.o.pack(G,N,o),a.o.pack(R,D,o),a.o.pack(j,H,o),C.push(W.latitude),C.push(W.longitude),l){for(J(W,B,0,m,p,h,u,N,D,H,C),o=N.length,t=0;t<3;++t)N[o+t]=N[t],D[o+t]=D[t],H[o+t]=H[t];C.push(B.latitude),C.push(B.longitude)}return so(l,f,D,H,N,C,i)}};var we=new a.o,me=new m.p,ve=new f.n;function ye(e,o,n,t){var r=K(n,o,we),i=a.o.dot(r,e);if(i>j||i<F){var l=K(t,n,te),s=i<F?w.e.PI_OVER_TWO:-w.e.PI_OVER_TWO,c=f.n.fromAxisAngle(l,s,ve),u=m.p.fromQuaternion(c,me);return m.p.multiplyByVector(u,e,e),!0}return!1}var Ee=new n.a,Te=new a.o,_e=new a.o;function Ie(e,o,t,r,i){var l=n.a.toCartesian(o,e._ellipsoid,Te),s=a.o.add(l,t,_e),c=!1,u=e._ellipsoid,p=u.cartesianToCartographic(s,Ee);Math.abs(o.longitude-p.longitude)>w.e.PI_OVER_TWO&&(c=!0,s=a.o.subtract(l,t,_e),p=u.cartesianToCartographic(s,Ee)),p.height=0;var d=e.project(p,i);return(i=a.o.subtract(d,r,i)).z=0,i=a.o.normalize(i,i),c&&a.o.negate(i,i),i}var Oe=new a.o,ke=new a.o;function Pe(e,o,n,t,r,i){var l=a.o.subtract(o,e,Oe);a.o.normalize(l,l);var s=n-0,c=a.o.multiplyByScalar(l,s,ke);a.o.add(e,c,r);var u=t-1e3;c=a.o.multiplyByScalar(l,u,ke),a.o.add(o,c,i)}var be=new a.o;function Se(e,o){var n=v.o.getPointDistance(ie,e),t=v.o.getPointDistance(ie,o),r=be;w.e.equalsEpsilon(n,0,w.e.EPSILON2)?(r=K(o,e,r),a.o.multiplyByScalar(r,w.e.EPSILON2,r),a.o.add(e,r,e)):w.e.equalsEpsilon(t,0,w.e.EPSILON2)&&(r=K(e,o,r),a.o.multiplyByScalar(r,w.e.EPSILON2,r),a.o.add(o,r,o))}function Le(e,o){var a=Math.abs(e.longitude),n=Math.abs(o.longitude);if(w.e.equalsEpsilon(a,w.e.PI,w.e.EPSILON11)){var t=w.e.sign(o.longitude);return e.longitude=t*(a-w.e.EPSILON11),1}if(w.e.equalsEpsilon(n,w.e.PI,w.e.EPSILON11)){var r=w.e.sign(e.longitude);return o.longitude=r*(n-w.e.EPSILON11),2}return 0}var xe=new n.a,Ae=new n.a,Ce=new a.o,Ne=new a.o,De=new a.o,He=new a.o,Me=new a.o,ze=new a.o,Re=[xe,Ae],je=new l.h,Fe=new a.o,Ge=new a.o,Be=new a.o,qe=new a.o,Ue=new a.o,Ve=new a.o,We=new a.o,Ye=new a.o,Ze=new a.o,Xe=new a.o,Je=new a.o,Qe=new a.o,$e=new a.o,Ke=new a.o,eo=new h.i,oo=new h.i,ao=new a.o,no=new a.o,to=new a.o,ro=[new e.i,new e.i],io=[0,2,1,0,3,2,0,7,3,0,4,7,0,5,4,0,1,5,5,7,4,5,6,7,5,2,6,5,1,2,3,6,2,3,7,6],lo=io.length;function so(o,n,t,r,i,s,c){var p,d,g,m,v,y,E=n._ellipsoid,T=t.length/3-1,_=8*T,I=4*_,O=36*T,k=_>65535?new Uint32Array(O):new Uint16Array(O),P=new Float64Array(3*_),b=new Float32Array(I),S=new Float32Array(I),L=new Float32Array(I),x=new Float32Array(I),A=new Float32Array(I);c&&(g=new Float32Array(I),m=new Float32Array(I),v=new Float32Array(I),y=new Float32Array(2*_));var C=s.length/2,N=0,D=xe;D.height=0;var M=Ae;M.height=0;var z=Ce,R=Ne;if(c)for(d=0,p=1;p<C;p++)D.latitude=s[d],D.longitude=s[d+1],M.latitude=s[d+2],M.longitude=s[d+3],z=n.project(D,z),R=n.project(M,R),N+=a.o.distance(z,R),d+=2;var F=r.length/3;R=a.o.unpack(r,0,R);var G,B=0;for(d=3,p=1;p<F;p++)z=a.o.clone(R,z),R=a.o.unpack(r,d,R),B+=a.o.distance(z,R),d+=3;d=3;var q=0,U=0,V=0,W=0,Y=!1,Z=a.o.unpack(t,0,He),X=a.o.unpack(r,0,Ne),J=a.o.unpack(i,0,ze);o&&(ye(J,a.o.unpack(t,t.length-6,De),Z,X)&&(J=a.o.negate(J,J)));var Q=0,$=0,ee=0;for(p=0;p<T;p++){var oe,ae,ne,te,re=a.o.clone(Z,De),ie=a.o.clone(X,Ce),le=a.o.clone(J,Me);if(Y&&(le=a.o.negate(le,le)),Z=a.o.unpack(t,d,He),X=a.o.unpack(r,d,Ne),Y=ye(J=a.o.unpack(i,d,ze),re,Z,X),D.latitude=s[q],D.longitude=s[q+1],M.latitude=s[q+2],M.longitude=s[q+3],c){var se=Le(D,M);oe=n.project(D,Ue);var ce=K(ae=n.project(M,Ve),oe,ao);ce.y=Math.abs(ce.y),ne=We,te=Ye,0===se||a.o.dot(ce,a.o.UNIT_Y)>j?(ne=Ie(n,D,le,oe,We),te=Ie(n,M,J,ae,Ye)):1===se?(te=Ie(n,M,J,ae,Ye),ne.x=0,ne.y=w.e.sign(D.longitude-Math.abs(M.longitude)),ne.z=0):(ne=Ie(n,D,le,oe,We),te.x=0,te.y=w.e.sign(D.longitude-M.longitude),te.z=0)}var ue=a.o.distance(ie,X),pe=h.i.fromCartesian(re,eo),de=a.o.subtract(Z,re,Ze),he=a.o.normalize(de,Qe),fe=a.o.subtract(ie,re,Xe);fe=a.o.normalize(fe,fe);var ge=a.o.cross(he,fe,Qe);ge=a.o.normalize(ge,ge);var we=a.o.cross(fe,le,$e);we=a.o.normalize(we,we);var me=a.o.subtract(X,Z,Je);me=a.o.normalize(me,me);var ve=a.o.cross(J,me,Ke);ve=a.o.normalize(ve,ve);var Ee,Te,_e,Oe=ue/B,ke=Q/B,be=0,so=0,uo=0;if(c){be=a.o.distance(oe,ae),Ee=h.i.fromCartesian(oe,oo),Te=a.o.subtract(ae,oe,ao);var po=(_e=a.o.normalize(Te,no)).x;_e.x=_e.y,_e.y=-po,so=be/N,uo=$/N}for(G=0;G<8;G++){var ho=W+4*G,fo=U+2*G,go=ho+3,wo=G<4?1:-1,mo=2===G||3===G||6===G||7===G?1:-1;a.o.pack(pe.high,b,ho),b[go]=de.x,a.o.pack(pe.low,S,ho),S[go]=de.y,a.o.pack(we,L,ho),L[go]=de.z,a.o.pack(ve,x,ho),x[go]=Oe*wo,a.o.pack(ge,A,ho);var vo=ke*mo;0===vo&&mo<0&&(vo=Number.POSITIVE_INFINITY),A[go]=vo,c&&(g[ho]=Ee.high.x,g[ho+1]=Ee.high.y,g[ho+2]=Ee.low.x,g[ho+3]=Ee.low.y,v[ho]=-ne.y,v[ho+1]=ne.x,v[ho+2]=te.y,v[ho+3]=-te.x,m[ho]=Te.x,m[ho+1]=Te.y,m[ho+2]=_e.x,m[ho+3]=_e.y,y[fo]=so*wo,0===(vo=uo*mo)&&mo<0&&(vo=Number.POSITIVE_INFINITY),y[fo+1]=vo)}var yo=Be,Eo=qe,To=Fe,_o=Ge,Io=l.h.fromCartographicArray(Re,je),Oo=H.getMinimumMaximumHeights(Io,E),ko=Oo.minimumTerrainHeight,Po=Oo.maximumTerrainHeight;ee+=ko,ee+=Po,Pe(re,ie,ko,Po,yo,To),Pe(Z,X,ko,Po,Eo,_o);var bo=a.o.multiplyByScalar(ge,w.e.EPSILON5,to);a.o.add(yo,bo,yo),a.o.add(Eo,bo,Eo),a.o.add(To,bo,To),a.o.add(_o,bo,_o),Se(yo,Eo),Se(To,_o),a.o.pack(yo,P,V),a.o.pack(Eo,P,V+3),a.o.pack(_o,P,V+6),a.o.pack(To,P,V+9),bo=a.o.multiplyByScalar(ge,-2*w.e.EPSILON5,to),a.o.add(yo,bo,yo),a.o.add(Eo,bo,Eo),a.o.add(To,bo,To),a.o.add(_o,bo,_o),Se(yo,Eo),Se(To,_o),a.o.pack(yo,P,V+12),a.o.pack(Eo,P,V+15),a.o.pack(_o,P,V+18),a.o.pack(To,P,V+21),q+=2,d+=3,U+=16,V+=24,W+=32,Q+=ue,$+=be}d=0;var So=0;for(p=0;p<T;p++){for(G=0;G<lo;G++)k[d+G]=io[G]+So;So+=8,d+=lo}var Lo=ro;e.i.fromVertices(t,a.o.ZERO,3,Lo[0]),e.i.fromVertices(r,a.o.ZERO,3,Lo[1]);var xo=e.i.fromBoundingSpheres(Lo);xo.radius+=ee/(2*T);var Ao={position:new f.o({componentDatatype:u.ComponentDatatype.DOUBLE,componentsPerAttribute:3,normalize:!1,values:P}),startHiAndForwardOffsetX:co(b),startLoAndForwardOffsetY:co(S),startNormalAndForwardOffsetZ:co(L),endNormalAndTextureCoordinateNormalizationX:co(x),rightNormalAndTextureCoordinateNormalizationY:co(A)};return c&&(Ao.startHiLo2D=co(g),Ao.offsetAndRight2D=co(m),Ao.startEndNormals2D=co(v),Ao.texcoordNormalization2D=new f.o({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:2,normalize:!1,values:y})),new f.I({attributes:Ao,indices:k,boundingSphere:xo})}function co(e){return new f.o({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:4,normalize:!1,values:e})}return G._projectNormal=Ie,function(e,o){return H.initialize().then((function(){return r.e(o)&&(e=G.unpack(e,o)),G.createGeometry(e)}))}}));
