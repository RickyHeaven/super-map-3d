define(["./defaultValue-a9572088","./Ellipsoid-a181f4f7","./arrayRemoveDuplicates-d492b4a7","./BoundingRectangle-ef352e18","./buildModuleUrl-0b6ed7f4","./Cartesian3-9e1fac2b","./ComponentDatatype-00a8741a","./PolylineVolumeGeometryLibrary-5bbf5820","./Check-1ab97039","./GeometryAttribute-96eb6e6a","./GeometryAttributes-ba165842","./GeometryPipeline-c44b3978","./IndexDatatype-42a29532","./Math-42d8c121","./oneTimeWarning-330f9a5b","./PolygonPipeline-2e7b86a0","./PrimitiveType-56cd8f05","./VertexFormat-54ae028d","./Cartographic-832093e6","./Rectangle-15196776","./FeatureDetection-b832308f","./defer-027bcf35","./Event-086a9f30","./RuntimeError-7a3815c0","./WebGLConstants-ade65f0f","./Cartesian4-c70aabd2","./EllipsoidTangentPlane-c14b1868","./IntersectionTests-b7b35aa4","./Plane-5520c09d","./PolylinePipeline-6c04f0e5","./EllipsoidGeodesic-acb826bd","./EllipsoidRhumbLine-07313960","./AttributeCompression-7ac8aa9b","./EncodedCartesian3-5686f234"],(function(e,t,n,o,a,i,r,s,p,l,c,u,d,y,g,h,m,f,v,b,k,_,P,L,w,E,C,A,D,T,F,R,G,x){"use strict";function O(n){var o=(n=e.u(n,e.u.EMPTY_OBJECT)).polylinePositions,a=n.shapePositions;if(!e.e(o))throw new p.t("options.polylinePositions is required.");if(!e.e(a))throw new p.t("options.shapePositions is required.");this._positions=o,this._shape=a,this._ellipsoid=t.t.clone(e.u(n.ellipsoid,t.t.WGS84)),this._cornerType=e.u(n.cornerType,s.S.ROUNDED),this._vertexFormat=f.n.clone(e.u(n.vertexFormat,f.n.DEFAULT)),this._granularity=e.u(n.granularity,y.e.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",this.enuCenter=e.u(n.enuCenter,i.o.ZERO);var r=1+o.length*i.o.packedLength;r+=1+a.length*t.o.packedLength+i.o.packedLength,this.packedLength=r+t.t.packedLength+f.n.packedLength+2}O.pack=function(n,o,a){if(!e.e(n))throw new p.t("value is required");if(!e.e(o))throw new p.t("array is required");a=e.u(a,0);var r,s=n._positions,l=s.length;for(o[a++]=l,r=0;r<l;++r,a+=i.o.packedLength)i.o.pack(s[r],o,a);var c=n._shape;for(l=c.length,o[a++]=l,r=0;r<l;++r,a+=t.o.packedLength)t.o.pack(c[r],o,a);return t.t.pack(n._ellipsoid,o,a),a+=t.t.packedLength,f.n.pack(n._vertexFormat,o,a),a+=f.n.packedLength,o[a++]=n._cornerType,o[a++]=n._granularity,i.o.pack(n.enuCenter,o,a),o};var I=t.t.clone(t.t.UNIT_SPHERE),S=new f.n,q={polylinePositions:void 0,shapePositions:void 0,ellipsoid:I,vertexFormat:S,cornerType:void 0,granularity:void 0,enuCenter:void 0};O.unpack=function(n,o,a){if(!e.e(n))throw new p.t("array is required");o=e.u(o,0);var r,s=n[o++],l=new Array(s);for(r=0;r<s;++r,o+=i.o.packedLength)l[r]=i.o.unpack(n,o);s=n[o++];var c=new Array(s);for(r=0;r<s;++r,o+=t.o.packedLength)c[r]=t.o.unpack(n,o);var u=t.t.unpack(n,o,I);o+=t.t.packedLength;var d=f.n.unpack(n,o,S);o+=f.n.packedLength;var y,g=n[o++],h=n[o++];return y=i.o.unpack(n,o),e.e(a)?(a._positions=l,a._shape=c,a._ellipsoid=t.t.clone(u,a._ellipsoid),a._vertexFormat=f.n.clone(d,a._vertexFormat),a._cornerType=g,a._granularity=h,a.enuCenter=y,a):(q.polylinePositions=l,q.shapePositions=c,q.cornerType=g,q.granularity=h,q.enuCenter=y,new O(q))};var N=new o.f;return O.createGeometry=function(t){for(var p=t._positions,y=n.D(p,i.o.equalsEpsilon),f=y.length,v=new Array(f),b=0;b<f;b++)v[b]=i.o.clone(y[b]);var k=t._shape;if(k=s.J.removeDuplicatesFromShape(k),!(y.length<2||k.length<3)){h.A.computeWindingOrder2D(k)===h.W.CLOCKWISE&&k.reverse();var _=o.f.fromPoints(k,N),P={};if(P.combinedPositions=s.J.computePositions(v,k,_,t,!0),!i.o.equals(t.enuCenter,i.o.ZERO)){var L=new Array(f);for(b=0;b<f;b++)L[b]=i.o.clone(y[b]);P.combinedLocalPositions=s.J.computeLocalPositions(L,k,_,t,!0,t.enuCenter)}return function(t,n,o,i){var s=t.combinedPositions,p=t.combinedLocalPositions,y=new c.a;i.position&&(y.position=new l.o({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:s}));var f,v,b,k,_,P,L=n.length,w=s.length/3,E=(w-2*L)/(2*L),C=h.A.triangulate(n),A=(E-1)*L*6+2*C.length,D=d.IndexDatatype.createTypedArray(w,A),T=2*L,F=0;for(f=0;f<E-1;f++){for(v=0;v<L-1;v++)P=(b=2*v+f*L*2)+T,_=(k=b+1)+T,D[F++]=k,D[F++]=b,D[F++]=_,D[F++]=_,D[F++]=b,D[F++]=P;_=(k=1+(b=2*L-2+f*L*2))+T,P=b+T,D[F++]=k,D[F++]=b,D[F++]=_,D[F++]=_,D[F++]=b,D[F++]=P}if(i.st||i.tangent||i.bitangent){var R,G,x=new Float32Array(2*w),O=1/(E-1),I=1/o.height,S=o.height/2,q=0;for(f=0;f<E;f++){for(R=f*O,G=I*(n[0].y+S),x[q++]=R,x[q++]=G,v=1;v<L;v++)G=I*(n[v].y+S),x[q++]=R,x[q++]=G,x[q++]=R,x[q++]=G;G=I*(n[0].y+S),x[q++]=R,x[q++]=G}for(v=0;v<L;v++)R=0,G=I*(n[v].y+S),x[q++]=R,x[q++]=G;for(v=0;v<L;v++)R=(E-1)*O,G=I*(n[v].y+S),x[q++]=R,x[q++]=G;y.st=new l.o({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(x)})}var N=w-2*L;for(f=0;f<C.length;f+=3){var U=C[f]+N,W=C[f+1]+N,V=C[f+2]+N;D[F++]=U,D[F++]=W,D[F++]=V,D[F++]=V+L,D[F++]=W+L,D[F++]=U+L}var B=new l.I({attributes:y,indices:D,boundingSphere:a.i.fromVertices(s),primitiveType:m._0x4e53a2.TRIANGLES});if(i.normal&&(B=u.k.computeNormal(B)),i.tangent||i.bitangent){try{B=u.k.computeTangentAndBitangent(B)}catch{g.e("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}i.tangent||(B.attributes.tangent=void 0),i.bitangent||(B.attributes.bitangent=void 0),i.st||(B.attributes.st=void 0)}return e.e(p)&&(B.attributes.position.values=p,B.attributes.position.componentDatatype=r.ComponentDatatype.FLOAT),B}(P,k,_,t._vertexFormat)}},function(n,o){return e.e(o)&&(n=O.unpack(n,o)),n._ellipsoid=t.t.clone(n._ellipsoid),O.createGeometry(n)}}));
