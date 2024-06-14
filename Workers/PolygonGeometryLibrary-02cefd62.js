define(["exports","./ArcType-31298545","./arrayRemoveDuplicates-d492b4a7","./Ellipsoid-a181f4f7","./Cartesian3-9e1fac2b","./Cartographic-832093e6","./ComponentDatatype-00a8741a","./defaultValue-a9572088","./EllipsoidRhumbLine-07313960","./GeometryAttribute-96eb6e6a","./GeometryAttributes-ba165842","./GeometryPipeline-c44b3978","./IndexDatatype-42a29532","./Math-42d8c121","./FeatureDetection-b832308f","./PolygonPipeline-2e7b86a0","./PrimitiveType-56cd8f05"],(function(e,t,r,o,n,i,a,s,u,h,l,c,f,p,v,y,g){"use strict";function d(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(d.prototype,{length:{get:function(){return this._length}}}),d.prototype.enqueue=function(e){this._array.push(e),this._length++},d.prototype.dequeue=function(){if(0!==this._length){var e=this._array,t=this._offset,r=e[t];return e[t]=void 0,++t>10&&2*t>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,r}},d.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},d.prototype.contains=function(e){return-1!==this._array.indexOf(e)},d.prototype.clear=function(){this._array.length=this._offset=this._length=0},d.prototype.sort=function(e){this._offset>0&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};var m={computeHierarchyPackedLength:function(e){for(var t=0,r=[e];r.length>0;){var o=r.pop();if(s.e(o)){t+=2;var i=o.positions,a=o.holes;if(s.e(i)&&(t+=i.length*n.o.packedLength),s.e(a))for(var u=a.length,h=0;h<u;++h)r.push(a[h])}}return t},packPolygonHierarchy:function(e,t,r){for(var o=[e];o.length>0;){var i=o.pop();if(s.e(i)){var a=i.positions,u=i.holes;if(t[r++]=s.e(a)?a.length:0,t[r++]=s.e(u)?u.length:0,s.e(a))for(var h=a.length,l=0;l<h;++l,r+=3)n.o.pack(a[l],t,r);if(s.e(u))for(var c=u.length,f=0;f<c;++f)o.push(u[f])}}return r},unpackPolygonHierarchy:function(e,t){for(var r=e[t++],o=e[t++],i=new Array(r),a=o>0?new Array(o):void 0,s=0;s<r;++s,t+=n.o.packedLength)i[s]=n.o.unpack(e,t);for(var u=0;u<o;++u)a[u]=m.unpackPolygonHierarchy(e,t),t=a[u].startingIndex,delete a[u].startingIndex;return{positions:i,holes:a,startingIndex:t}}},b=new n.o;function I(e,t,r,o){return n.o.subtract(t,e,b),n.o.multiplyByScalar(b,r/o,b),n.o.add(e,b,b),[b.x,b.y,b.z]}m.subdivideLineCount=function(e,t,r){var o=n.o.distance(e,t)/r,i=Math.max(0,Math.ceil(p.e.log2(o)));return Math.pow(2,i)};var w=new i.a,_=new i.a,L=new i.a,E=new n.o;m.subdivideRhumbLineCount=function(e,t,r,o){var n=e.cartesianToCartographic(t,w),i=e.cartesianToCartographic(r,_),a=new u.P(n,i,e).surfaceDistance/o,s=Math.max(0,Math.ceil(p.e.log2(a)));return Math.pow(2,s)},m.subdivideLine=function(e,t,r,o){var i=m.subdivideLineCount(e,t,r),a=n.o.distance(e,t),u=a/i;s.e(o)||(o=[]);var h=o;h.length=3*i;for(var l=0,c=0;c<i;c++){var f=I(e,t,c*u,a);h[l++]=f[0],h[l++]=f[1],h[l++]=f[2]}return h},m.subdivideRhumbLine=function(e,t,r,o,n){var i=e.cartesianToCartographic(t,w),a=e.cartesianToCartographic(r,_),h=new u.P(i,a,e),l=h.surfaceDistance/o,c=Math.max(0,Math.ceil(p.e.log2(l))),f=Math.pow(2,c),v=h.surfaceDistance/f;s.e(n)||(n=[]);var y=n;y.length=3*f;for(var g=0,d=0;d<f;d++){var m=h.interpolateUsingSurfaceDistance(d*v,L),b=e.cartographicToCartesian(m,E);y[g++]=b.x,y[g++]=b.y,y[g++]=b.z}return y};var x=new n.o,D=new n.o,S=new n.o,T=new n.o;m.scaleToGeodeticHeightExtruded=function(e,t,r,i,a){i=s.u(i,o.t.WGS84);var u=x,h=D,l=S,c=T;if(s.e(e)&&s.e(e.attributes)&&s.e(e.attributes.position))for(var f=e.attributes.position.values,p=f.length/2,v=0;v<p;v+=3)n.o.fromArray(f,v,l),i.geodeticSurfaceNormal(l,u),c=i.scaleToGeodeticSurface(l,c),h=n.o.multiplyByScalar(u,r,h),h=n.o.add(c,h,h),f[v+p]=h.x,f[v+1+p]=h.y,f[v+2+p]=h.z,a&&(c=n.o.clone(l,c)),h=n.o.multiplyByScalar(u,t,h),h=n.o.add(c,h,h),f[v]=h.x,f[v+1]=h.y,f[v+2]=h.z;return e},m.polygonOutlinesFromHierarchy=function(e,t,o){var i,a,u,h=[],l=new d;for(l.enqueue(e);0!==l.length;){var c=l.dequeue(),f=c.positions;if(t)for(u=f.length,i=0;i<u;i++)o.scaleToGeodeticSurface(f[i],f[i]);if(!((f=r.D(f,n.o.equalsEpsilon,!0)).length<3)){var p=c.holes?c.holes.length:0;for(i=0;i<p;i++){var v=c.holes[i],y=v.positions;if(t)for(u=y.length,a=0;a<u;++a)o.scaleToGeodeticSurface(y[a],y[a]);if(!((y=r.D(y,n.o.equalsEpsilon,!0)).length<3)){h.push(y);var g=0;for(s.e(v.holes)&&(g=v.holes.length),a=0;a<g;a++)l.enqueue(v.holes[a])}}h.push(f)}}return h};var A=new n.o(6378137,6378137,6378137);m.polygonsFromHierarchy=function(e,t,o,i){var a=[],u=[],h=new d;for(h.enqueue(e);0!==h.length;){var l,c,f,v=h.dequeue(),g=v.positions,m=v.holes,b=g.slice();if(o)for(c=g.length,l=0;l<c;l++)i.scaleToGeodeticSurface(g[l],b[l]);if(s.e(i)&&!n.o.equals(i._radii,A)&&(f=p.e.EPSILON7),!((g=r.D(b,n.o.equalsEpsilon,!0,f)).length<3)){var I=t(g);if(s.e(I)){var w=[],_=y.A.computeWindingOrder2D(I);_===y.W.CLOCKWISE&&(I.reverse(),g=g.slice().reverse());var L,E=g.slice(),x=s.e(m)?m.length:0,D=[];for(l=0;l<x;l++){var S=m[l],T=S.positions;if(o)for(c=T.length,L=0;L<c;++L)i.scaleToGeodeticSurface(T[L],T[L]);if(!((T=r.D(T,n.o.equalsEpsilon,!0,p.e.EPSILON7)).length<3)){var C=t(T);if(s.e(C)){(_=y.A.computeWindingOrder2D(C))===y.W.CLOCKWISE&&(C.reverse(),T=T.slice().reverse()),D.push(T),w.push(E.length),E=E.concat(T),I=I.concat(C);var N=0;for(s.e(S.holes)&&(N=S.holes.length),L=0;L<N;L++)h.enqueue(S.holes[L])}}}a.push({outerRing:g,holes:D}),u.push({positions:E,positions2D:I,holes:w})}}}return{hierarchy:a,polygons:u}};var C=new o.o,N=new n.o,P=new h.n,G=new v.p;m.computeBoundingRectangle=function(e,t,r,o,i){for(var a=h.n.fromAxisAngle(e,o,P),u=v.p.fromQuaternion(a,G),l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY,y=r.length,g=0;g<y;++g){var d=n.o.clone(r[g],N);v.p.multiplyByVector(u,d,d);var m=t(d,C);s.e(m)&&(l=Math.min(l,m.x),c=Math.max(c,m.x),f=Math.min(f,m.y),p=Math.max(p,m.y))}return i.x=l,i.y=f,i.width=c-l,i.height=p-f,i},m.createGeometryFromPositions=function(e,r,o,n,i,s){var u=y.A.triangulate(r.positions2D,r.holes);u.length<3&&(u=[0,1,2]);var l=r.positions;if(n){for(var f=l.length,p=new Array(3*f),v=0,d=0;d<f;d++){var m=l[d];p[v++]=m.x,p[v++]=m.y,p[v++]=m.z}var b=new h.I({attributes:{position:new h.o({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})},indices:u,primitiveType:g._0x4e53a2.TRIANGLES});return i.normal?c.k.computeNormal(b):b}return s===t.L.GEODESIC?y.A.computeSubdivision(e,l,u,o):s===t.L.RHUMB?y.A.computeRhumbLineSubdivision(e,l,u,o):void 0};var O=[],M=new n.o,R=new n.o;m.computeWallGeometry=function(e,r,o,i,s){var u,c,v,y,d,b=e.length,I=0;if(i)for(c=3*b*2,u=new Array(2*c),v=0;v<b;v++)y=e[v],d=e[(v+1)%b],u[I]=u[I+c]=y.x,u[++I]=u[I+c]=y.y,u[++I]=u[I+c]=y.z,u[++I]=u[I+c]=d.x,u[++I]=u[I+c]=d.y,u[++I]=u[I+c]=d.z,++I;else{var w=p.e.chordLength(o,r.maximumRadius),_=0;if(s===t.L.GEODESIC)for(v=0;v<b;v++)_+=m.subdivideLineCount(e[v],e[(v+1)%b],w);else if(s===t.L.RHUMB)for(v=0;v<b;v++)_+=m.subdivideRhumbLineCount(r,e[v],e[(v+1)%b],w);for(c=3*(_+b),u=new Array(2*c),v=0;v<b;v++){var L;y=e[v],d=e[(v+1)%b],s===t.L.GEODESIC?L=m.subdivideLine(y,d,w,O):s===t.L.RHUMB&&(L=m.subdivideRhumbLine(r,y,d,w,O));for(var E=L.length,x=0;x<E;++x,++I)u[I]=L[x],u[I+c]=L[x];u[I]=d.x,u[I+c]=d.x,u[++I]=d.y,u[I+c]=d.y,u[++I]=d.z,u[I+c]=d.z,++I}}b=u.length;var D=f.IndexDatatype.createTypedArray(b/3,b-6*e.length),S=0;for(b/=6,v=0;v<b;v++){var T=v,A=T+1,C=T+b,N=C+1;y=n.o.fromArray(u,3*T,M),d=n.o.fromArray(u,3*A,R),!n.o.equalsEpsilon(y,d,p.e.EPSILON10,p.e.EPSILON10)&&(D[S++]=T,D[S++]=C,D[S++]=A,D[S++]=A,D[S++]=C,D[S++]=N)}return new h.I({attributes:new l.a({position:new h.o({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})}),indices:D,primitiveType:g._0x4e53a2.TRIANGLES})},e.y=m}));
