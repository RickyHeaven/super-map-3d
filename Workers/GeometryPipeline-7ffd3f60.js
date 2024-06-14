define(["exports","./AttributeCompression-b5a80a71","./Cartesian2-b72655a5","./Cartesian3-3a8bdb0b","./Check-52a7d806","./when-92c6cf3c","./Math-ecf82623","./buildModuleUrl-9eef8841","./Cartesian4-72b88c9e","./Cartographic-a2c313d7","./ComponentDatatype-98414d16","./EncodedCartesian3-4f120b1b","./GeometryAttribute-f47bd1cb","./IndexDatatype-86677ec4","./IntersectionTests-6e80d61c","./FeatureDetection-cec0163f","./Plane-33393da8"],(function(e,t,r,i,o,n,a,s,u,p,l,v,c,y,m,f,h){"use strict";var d=new i.o,b=new i.o,w=new i.o;function g(e,t,s,u,p){var l,v,c,y,m,f,h,g;if(o.o.defined("point",e),o.o.defined("p0",t),o.o.defined("p1",s),o.o.defined("p2",u),n.e(p)||(p=new i.o),n.e(t.z)){if(i.o.equalsEpsilon(e,t,a.e.EPSILON14))return i.o.clone(i.o.UNIT_X,p);if(i.o.equalsEpsilon(e,s,a.e.EPSILON14))return i.o.clone(i.o.UNIT_Y,p);if(i.o.equalsEpsilon(e,u,a.e.EPSILON14))return i.o.clone(i.o.UNIT_Z,p);l=i.o.subtract(s,t,d),v=i.o.subtract(u,t,b),c=i.o.subtract(e,t,w),y=i.o.dot(l,l),m=i.o.dot(l,v),f=i.o.dot(l,c),h=i.o.dot(v,v),g=i.o.dot(v,c)}else{if(r.o.equalsEpsilon(e,t,a.e.EPSILON14))return i.o.clone(i.o.UNIT_X,p);if(r.o.equalsEpsilon(e,s,a.e.EPSILON14))return i.o.clone(i.o.UNIT_Y,p);if(r.o.equalsEpsilon(e,u,a.e.EPSILON14))return i.o.clone(i.o.UNIT_Z,p);l=r.o.subtract(s,t,d),v=r.o.subtract(u,t,b),c=r.o.subtract(e,t,w),y=r.o.dot(l,l),m=r.o.dot(l,v),f=r.o.dot(l,c),h=r.o.dot(v,v),g=r.o.dot(v,c)}p.y=h*f-m*g,p.z=y*g-m*f;var x=y*h-m*m;return 0!==p.y&&(p.y/=x),0!==p.z&&(p.z/=x),p.x=1-p.y-p.z,p}var x={calculateACMR:function(e){var t=(e=n.u(e,n.u.EMPTY_OBJECT)).indices,r=e.maximumIndex,i=n.u(e.cacheSize,24);if(!n.e(t))throw new o.t("indices is required.");var a=t.length;if(a<3||a%3!=0)throw new o.t("indices length must be a multiple of three.");if(r<=0)throw new o.t("maximumIndex must be greater than zero.");if(i<3)throw new o.t("cacheSize must be greater than two.");if(!n.e(r)){r=0;for(var s=0,u=t[s];s<a;)u>r&&(r=u),u=t[++s]}for(var p=[],l=0;l<r+1;l++)p[l]=0;for(var v=i+1,c=0;c<a;++c)v-p[t[c]]>i&&(p[t[c]]=v,++v);return(v-i+1)/(a/3)}};x.tipsify=function(e){var t,r=(e=n.u(e,n.u.EMPTY_OBJECT)).indices,i=e.maximumIndex,a=n.u(e.cacheSize,24);function s(e,r,i,o,n,a,s){for(var u,p=-1,l=-1,v=0;v<i.length;){var c=i[v];o[c].numLiveTriangles&&(u=0,n-o[c].timeStamp+2*o[c].numLiveTriangles<=r&&(u=n-o[c].timeStamp),(u>l||-1===l)&&(l=u,p=c)),++v}return-1===p?function(e,r,i,o){for(;r.length>=1;){var n=r[r.length-1];if(r.splice(r.length-1,1),e[n].numLiveTriangles>0)return n}for(;t<o;){if(e[t].numLiveTriangles>0)return++t-1;++t}return-1}(o,a,0,s):p}if(!n.e(r))throw new o.t("indices is required.");var u=r.length;if(u<3||u%3!=0)throw new o.t("indices length must be a multiple of three.");if(i<=0)throw new o.t("maximumIndex must be greater than zero.");if(a<3)throw new o.t("cacheSize must be greater than two.");var p=0,l=0,v=r[l],c=u;if(n.e(i))p=i+1;else{for(;l<c;)v>p&&(p=v),v=r[++l];if(-1===p)return 0;++p}var y,m=[];for(y=0;y<p;y++)m[y]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};l=0;for(var f=0;l<c;)m[r[l]].vertexTriangles.push(f),++m[r[l]].numLiveTriangles,m[r[l+1]].vertexTriangles.push(f),++m[r[l+1]].numLiveTriangles,m[r[l+2]].vertexTriangles.push(f),++m[r[l+2]].numLiveTriangles,++f,l+=3;var h=0,d=a+1;t=1;var b,w,g,x,T=[],A=[],I=0,S=[],N=u/3,P=[];for(y=0;y<N;y++)P[y]=!1;for(;-1!==h;){T=[],x=(w=m[h]).vertexTriangles.length;for(var E=0;E<x;++E)if(!P[f=w.vertexTriangles[E]]){P[f]=!0,l=f+f+f;for(var O=0;O<3;++O)g=r[l],T.push(g),A.push(g),S[I]=g,++I,--(b=m[g]).numLiveTriangles,d-b.timeStamp>a&&(b.timeStamp=d,++d),++l}h=s(0,a,T,m,d,A,p)}return S};var T={};function A(e,t,r,i,o){e[t++]=r,e[t++]=i,e[t++]=i,e[t++]=o,e[t++]=o,e[t]=r}function I(e){var t={};for(var r in e)if(e.hasOwnProperty(r)&&n.e(e[r])&&n.e(e[r].values)){var i=e[r];t[r]=new c.o({componentDatatype:i.componentDatatype,componentsPerAttribute:i.componentsPerAttribute,normalize:i.normalize,values:[]})}return t}function S(e,t,r){for(var i in t)if(t.hasOwnProperty(i)&&n.e(t[i])&&n.e(t[i].values))for(var o=t[i],a=0;a<o.componentsPerAttribute;++a)e[i].values.push(o.values[r*o.componentsPerAttribute+a])}T.toWireframe=function(e){if(!n.e(e))throw new o.t("geometry is required.");var t=e.indices;if(n.e(t)){switch(e.primitiveType){case f._0x4b6a27.TRIANGLES:e.indices=function(e){for(var t=e.length,r=t/3*6,i=y.IndexDatatype.createTypedArray(t,r),o=0,n=0;n<t;n+=3,o+=6)A(i,o,e[n],e[n+1],e[n+2]);return i}(t);break;case f._0x4b6a27.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(t>=3){var r=6*(t-2),i=y.IndexDatatype.createTypedArray(t,r);A(i,0,e[0],e[1],e[2]);for(var o=6,n=3;n<t;++n,o+=6)A(i,o,e[n-1],e[n],e[n-2]);return i}return new Uint16Array}(t);break;case f._0x4b6a27.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){for(var t=e.length-1,r=6*(t-1),i=y.IndexDatatype.createTypedArray(t,r),o=e[0],n=0,a=1;a<t;++a,n+=6)A(i,n,o,e[a],e[a+1]);return i}return new Uint16Array}(t);break;default:throw new o.t("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=f._0x4b6a27.LINES}return e},T.createLineSegmentsForVectors=function(e,t,r){if(t=n.u(t,"normal"),!n.e(e))throw new o.t("geometry is required.");if(!n.e(e.attributes.position))throw new o.t("geometry.attributes.position is required.");if(!n.e(e.attributes[t]))throw new o.t("geometry.attributes must have an attribute with the same name as the attributeName parameter, "+t+".");r=n.u(r,1e4);for(var i=e.attributes.position.values,a=e.attributes[t].values,u=i.length,p=new Float64Array(2*u),v=0,y=0;y<u;y+=3)p[v++]=i[y],p[v++]=i[y+1],p[v++]=i[y+2],p[v++]=i[y]+a[y]*r,p[v++]=i[y+1]+a[y+1]*r,p[v++]=i[y+2]+a[y+2]*r;var m,h=e.boundingSphere;return n.e(h)&&(m=new s.i(h.center,h.radius+r)),new c.I({attributes:{position:new c.o({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})},primitiveType:f._0x4b6a27.LINES,boundingSphere:m})},T.createAttributeLocations=function(e){if(!n.e(e))throw new o.t("geometry is required.");var t,r=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],i=e.attributes,a={},s=0,u=r.length;for(t=0;t<u;++t){var p=r[t];n.e(i[p])&&(a[p]=s++)}for(var l in i)i.hasOwnProperty(l)&&!n.e(a[l])&&(a[l]=s++);return a},T.reorderForPreVertexCache=function(e){if(!n.e(e))throw new o.t("geometry is required.");var t=c.I.computeNumberOfVertices(e),r=e.indices;if(n.e(r)){for(var i=new Int32Array(t),a=0;a<t;a++)i[a]=-1;for(var s,u=r,p=u.length,v=y.IndexDatatype.createTypedArray(t,p),m=0,f=0,h=0;m<p;)-1!==(s=i[u[m]])?v[f]=s:(i[s=u[m]]=h,v[f]=h,++h),++m,++f;e.indices=v;var d=e.attributes;for(var b in d)if(d.hasOwnProperty(b)&&n.e(d[b])&&n.e(d[b].values)){for(var w=d[b],g=w.values,x=0,T=w.componentsPerAttribute,A=l.ComponentDatatype.createTypedArray(w.componentDatatype,h*T);x<t;){var I=i[x];if(-1!==I)for(var S=0;S<T;S++)A[T*I+S]=g[T*x+S];++x}w.values=A}}return e},T.reorderForPostVertexCache=function(e,t){if(!n.e(e))throw new o.t("geometry is required.");var r=e.indices;if(e.primitiveType===f._0x4b6a27.TRIANGLES&&n.e(r)){for(var i=r.length,a=0,s=0;s<i;s++)r[s]>a&&(a=r[s]);e.indices=x.tipsify({indices:r,maximumIndex:a,cacheSize:t})}return e},T.fitToUnsignedShortIndices=function(e){if(!n.e(e))throw new o.t("geometry is required.");if(n.e(e.indices)&&e.primitiveType!==f._0x4b6a27.TRIANGLES&&e.primitiveType!==f._0x4b6a27.LINES&&e.primitiveType!==f._0x4b6a27.POINTS)throw new o.t("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");var t=[],r=c.I.computeNumberOfVertices(e);if(n.e(e.indices)&&r>=a.e.SIXTY_FOUR_KILOBYTES){var i,s=[],u=[],p=0,l=I(e.attributes),v=e.indices,y=v.length;e.primitiveType===f._0x4b6a27.TRIANGLES?i=3:e.primitiveType===f._0x4b6a27.LINES?i=2:e.primitiveType===f._0x4b6a27.POINTS&&(i=1);for(var m=0;m<y;m+=i){for(var h=0;h<i;++h){var d=v[m+h],b=s[d];n.e(b)||(b=p++,s[d]=b,S(l,e.attributes,d)),u.push(b)}p+i>=a.e.SIXTY_FOUR_KILOBYTES&&(t.push(new c.I({attributes:l,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),s=[],u=[],p=0,l=I(e.attributes))}0!==u.length&&t.push(new c.I({attributes:l,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};var N=new i.o,P=new p.a;T.projectTo2D=function(e,t,r,a,u){if(!n.e(e))throw new o.t("geometry is required.");if(!n.e(t))throw new o.t("attributeName is required.");if(!n.e(r))throw new o.t("attributeName3D is required.");if(!n.e(a))throw new o.t("attributeName2D is required.");if(!n.e(e.attributes[t]))throw new o.t("geometry must have attribute matching the attributeName argument: "+t+".");if(e.attributes[t].componentDatatype!==l.ComponentDatatype.DOUBLE)throw new o.t("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");for(var p=e.attributes[t],v=(u=n.e(u)?u:new s.n).ellipsoid,y=p.values,m=new Float64Array(y.length),f=0,h=0;h<y.length;h+=3){var d=i.o.fromArray(y,h,N),b=v.cartesianToCartographic(d,P);if(!n.e(b))throw new o.t("Could not project point ("+d.x+", "+d.y+", "+d.z+") to 2D.");var w=u.project(b,N);m[f++]=w.x,m[f++]=w.y,m[f++]=w.z}return e.attributes[r]=p,e.attributes[a]=new c.o({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m}),delete e.attributes[t],e};var E={high:0,low:0};T.encodeAttribute=function(e,t,r,i){if(!n.e(e))throw new o.t("geometry is required.");if(!n.e(t))throw new o.t("attributeName is required.");if(!n.e(r))throw new o.t("attributeHighName is required.");if(!n.e(i))throw new o.t("attributeLowName is required.");if(!n.e(e.attributes[t]))throw new o.t("geometry must have attribute matching the attributeName argument: "+t+".");if(e.attributes[t].componentDatatype!==l.ComponentDatatype.DOUBLE)throw new o.t("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");for(var a=e.attributes[t],s=a.values,u=s.length,p=new Float32Array(u),y=new Float32Array(u),m=0;m<u;++m)v.i.encode(s[m],E),p[m]=E.high,y[m]=E.low;var f=a.componentsPerAttribute;return e.attributes[r]=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:f,values:p}),e.attributes[i]=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:f,values:y}),delete e.attributes[t],e};var O=new i.o;function L(e,t){if(n.e(t))for(var r=t.values,o=r.length,a=0;a<o;a+=3)i.o.unpack(r,a,O),f.p.multiplyByPoint(e,O,O),i.o.pack(O,r,a)}function D(e,t){if(n.e(t))for(var r=t.values,o=r.length,a=0;a<o;a+=3)i.o.unpack(r,a,O),f.p$1.multiplyByVector(e,O,O),O=i.o.normalize(O,O),i.o.pack(O,r,a)}var z=new f.p,_=new f.p$1;T.transformToWorldCoordinates=function(e){if(!n.e(e))throw new o.t("instance is required.");var t=e.modelMatrix;if(f.p.equals(t,f.p.IDENTITY))return e;var r=e.geometry.attributes;L(t,r.position),L(t,r.prevPosition),L(t,r.nextPosition),(n.e(r.normal)||n.e(r.tangent)||n.e(r.bitangent))&&(f.p.inverse(t,z),f.p.transpose(z,z),f.p.getRotation(z,_),D(_,r.normal),D(_,r.tangent),D(_,r.bitangent));var i=e.geometry.boundingSphere;return n.e(i)&&(e.geometry.boundingSphere=s.i.transform(i,t,i)),e.modelMatrix=f.p.clone(f.p.IDENTITY),e};var q=new i.o;function C(e,t){var r,a,u,p,v=e.length,m=e[0].modelMatrix,h=n.e(e[0][t].indices),d=e[0][t].primitiveType;for(a=1;a<v;++a){if(!f.p.equals(e[a].modelMatrix,m))throw new o.t("All instances must have the same modelMatrix.");if(n.e(e[a][t].indices)!==h)throw new o.t("All instance geometries must have an indices or not have one.");if(e[a][t].primitiveType!==d)throw new o.t("All instance geometries must have the same primitiveType.")}var b,w,g,x,T=function(e,t){var r,i=e.length,o={},a=e[0][t].attributes;for(r in a)if(a.hasOwnProperty(r)&&n.e(a[r])&&n.e(a[r].values)){for(var s=a[r],u=s.values.length,p=!0,v=1;v<i;++v){var y=e[v][t].attributes[r];if(!n.e(y)||s.componentDatatype!==y.componentDatatype||s.componentsPerAttribute!==y.componentsPerAttribute||s.normalize!==y.normalize){p=!1;break}u+=y.values.length}p&&(o[r]=new c.o({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:l.ComponentDatatype.createTypedArray(s.componentDatatype,u)}),s.isInstanceAttribute&&(o[r].isInstanceAttribute=!0))}return o}(e,t);for(r in T)if(T.hasOwnProperty(r))for(b=T[r].values,p=0,a=0;a<v;++a)for(g=(w=e[a][t].attributes[r].values).length,u=0;u<g;++u)b[p++]=w[u];if(h){var A=0;for(a=0;a<v;++a)A+=e[a][t].indices.length;var I=c.I.computeNumberOfVertices(new c.I({attributes:T,primitiveType:f._0x4b6a27.POINTS})),S=y.IndexDatatype.createTypedArray(I,A),N=0,P=0;for(a=0;a<v;++a){var E=e[a][t].indices,O=E.length;for(p=0;p<O;++p)S[N++]=P+E[p];P+=c.I.computeNumberOfVertices(e[a][t])}x=S}var L,D=new i.o,z=0;for(a=0;a<v;++a){if(L=e[a][t].boundingSphere,!n.e(L)){D=void 0;break}i.o.add(L.center,D,D)}if(n.e(D))for(i.o.divideByScalar(D,v,D),a=0;a<v;++a){L=e[a][t].boundingSphere;var _=i.o.magnitude(i.o.subtract(L.center,D,q))+L.radius;_>z&&(z=_)}return new c.I({attributes:T,indices:x,primitiveType:d,boundingSphere:n.e(D)?new s.i(D,z):void 0})}T.combineInstances=function(e){if(!n.e(e)||e.length<1)throw new o.t("instances is required and must have length greater than zero.");for(var t=[],r=[],i=e.length,a=0;a<i;++a){var s=e[a];n.e(s.geometry)?t.push(s):n.e(s.westHemisphereGeometry)&&n.e(s.eastHemisphereGeometry)&&r.push(s)}var u=[];return t.length>0&&u.push(C(t,"geometry")),r.length>0&&(u.push(C(r,"westHemisphereGeometry")),u.push(C(r,"eastHemisphereGeometry"))),u};var R=new i.o,G=new i.o,F=new i.o,k=new i.o;T.computeNormal=function(e){if(!n.e(e))throw new o.t("geometry is required.");if(!n.e(e.attributes.position)||!n.e(e.attributes.position.values))throw new o.t("geometry.attributes.position.values is required.");if(!n.e(e.indices))throw new o.t("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!=0)throw new o.t("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==f._0x4b6a27.TRIANGLES)throw new o.t("geometry.primitiveType must be PrimitiveType.TRIANGLES.");var t,r=e.indices,s=e.attributes,u=s.position.values,p=s.position.values.length/3,v=r.length,y=new Array(p),m=new Array(v/3),h=new Array(v);for(t=0;t<p;t++)y[t]={indexOffset:0,count:0,currentCount:0};var d=0;for(t=0;t<v;t+=3){var b=r[t],w=r[t+1],g=r[t+2],x=3*b,T=3*w,A=3*g;G.x=u[x],G.y=u[x+1],G.z=u[x+2],F.x=u[T],F.y=u[T+1],F.z=u[T+2],k.x=u[A],k.y=u[A+1],k.z=u[A+2],y[b].count++,y[w].count++,y[g].count++,i.o.subtract(F,G,F),i.o.subtract(k,G,k),m[d]=i.o.cross(F,k,new i.o),d++}var I,S=0;for(t=0;t<p;t++)y[t].indexOffset+=S,S+=y[t].count;for(d=0,t=0;t<v;t+=3){var N=(I=y[r[t]]).indexOffset+I.currentCount;h[N]=d,I.currentCount++,h[N=(I=y[r[t+1]]).indexOffset+I.currentCount]=d,I.currentCount++,h[N=(I=y[r[t+2]]).indexOffset+I.currentCount]=d,I.currentCount++,d++}var P=new Float32Array(3*p);for(t=0;t<p;t++){var E=3*t;if(I=y[t],i.o.clone(i.o.ZERO,R),I.count>0){for(d=0;d<I.count;d++)i.o.add(R,m[h[I.indexOffset+d]],R);i.o.equalsEpsilon(i.o.ZERO,R,a.e.EPSILON10)&&i.o.clone(m[h[I.indexOffset]],R)}i.o.equalsEpsilon(i.o.ZERO,R,a.e.EPSILON10)&&(R.z=1),i.o.normalize(R,R),P[E]=R.x,P[E+1]=R.y,P[E+2]=R.z}return e.attributes.normal=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:P}),e};var B=new i.o,M=new i.o,U=new i.o;T.computeTangentAndBitangent=function(e){if(!n.e(e))throw new o.t("geometry is required.");var t=e.attributes,r=e.indices;if(!n.e(t.position)||!n.e(t.position.values))throw new o.t("geometry.attributes.position.values is required.");if(!n.e(t.normal)||!n.e(t.normal.values))throw new o.t("geometry.attributes.normal.values is required.");if(!n.e(t.st)||!n.e(t.st.values))throw new o.t("geometry.attributes.st.values is required.");if(!n.e(r))throw new o.t("geometry.indices is required.");if(r.length<2||r.length%3!=0)throw new o.t("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==f._0x4b6a27.TRIANGLES)throw new o.t("geometry.primitiveType must be PrimitiveType.TRIANGLES.");var a,s,u,p,v=e.attributes.position.values,y=e.attributes.normal.values,m=e.attributes.st.values,h=e.attributes.position.values.length/3,d=r.length,b=new Array(3*h);for(a=0;a<b.length;a++)b[a]=0;for(a=0;a<d;a+=3){var w=r[a],g=r[a+1],x=r[a+2];u=3*g,p=3*x;var T=2*w,A=2*g,I=2*x,S=v[s=3*w],N=v[s+1],P=v[s+2],E=m[T],O=m[T+1],L=m[A+1]-O,D=m[I+1]-O,z=1/((m[A]-E)*D-(m[I]-E)*L),_=(D*(v[u]-S)-L*(v[p]-S))*z,q=(D*(v[u+1]-N)-L*(v[p+1]-N))*z,C=(D*(v[u+2]-P)-L*(v[p+2]-P))*z;b[s]+=_,b[s+1]+=q,b[s+2]+=C,b[u]+=_,b[u+1]+=q,b[u+2]+=C,b[p]+=_,b[p+1]+=q,b[p+2]+=C}var R=new Float32Array(3*h),G=new Float32Array(3*h);for(a=0;a<h;a++){u=(s=3*a)+1,p=s+2;var F=i.o.fromArray(y,s,B),k=i.o.fromArray(b,s,U),V=i.o.dot(F,k);i.o.multiplyByScalar(F,V,M),i.o.normalize(i.o.subtract(k,M,k),k),R[s]=k.x,R[u]=k.y,R[p]=k.z,i.o.normalize(i.o.cross(F,k,k),k),G[s]=k.x,G[u]=k.y,G[p]=k.z}return e.attributes.tangent=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R}),e.attributes.bitangent=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G}),e};var V=new r.o,Y=new i.o,Z=new i.o,H=new i.o,W=new r.o;function X(e){switch(e.primitiveType){case f._0x4b6a27.TRIANGLE_FAN:return function(e){var t=c.I.computeNumberOfVertices(e);if(t<3)throw new o.t("The number of vertices must be at least three.");var r=y.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=1,r[1]=0,r[2]=2;for(var i=3,n=3;n<t;++n)r[i++]=n-1,r[i++]=0,r[i++]=n;return e.indices=r,e.primitiveType=f._0x4b6a27.TRIANGLES,e}(e);case f._0x4b6a27.TRIANGLE_STRIP:return function(e){var t=c.I.computeNumberOfVertices(e);if(t<3)throw new o.t("The number of vertices must be at least 3.");var r=y.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=0,r[1]=1,r[2]=2,t>3&&(r[3]=0,r[4]=2,r[5]=3);for(var i=6,n=3;n<t-1;n+=2)r[i++]=n,r[i++]=n-1,r[i++]=n+1,n+2<t&&(r[i++]=n,r[i++]=n+1,r[i++]=n+2);return e.indices=r,e.primitiveType=f._0x4b6a27.TRIANGLES,e}(e);case f._0x4b6a27.TRIANGLES:return function(e){if(n.e(e.indices))return e;var t=c.I.computeNumberOfVertices(e);if(t<3)throw new o.t("The number of vertices must be at least three.");if(t%3!=0)throw new o.t("The number of vertices must be a multiple of three.");for(var r=y.IndexDatatype.createTypedArray(t,t),i=0;i<t;++i)r[i]=i;return e.indices=r,e}(e);case f._0x4b6a27.LINE_STRIP:return function(e){var t=c.I.computeNumberOfVertices(e);if(t<2)throw new o.t("The number of vertices must be at least two.");var r=y.IndexDatatype.createTypedArray(t,2*(t-1));r[0]=0,r[1]=1;for(var i=2,n=2;n<t;++n)r[i++]=n-1,r[i++]=n;return e.indices=r,e.primitiveType=f._0x4b6a27.LINES,e}(e);case f._0x4b6a27.LINE_LOOP:return function(e){var t=c.I.computeNumberOfVertices(e);if(t<2)throw new o.t("The number of vertices must be at least two.");var r=y.IndexDatatype.createTypedArray(t,2*t);r[0]=0,r[1]=1;for(var i=2,n=2;n<t;++n)r[i++]=n-1,r[i++]=n;return r[i++]=t-1,r[i]=0,e.indices=r,e.primitiveType=f._0x4b6a27.LINES,e}(e);case f._0x4b6a27.LINES:return function(e){if(n.e(e.indices))return e;var t=c.I.computeNumberOfVertices(e);if(t<2)throw new o.t("The number of vertices must be at least two.");if(t%2!=0)throw new o.t("The number of vertices must be a multiple of 2.");for(var r=y.IndexDatatype.createTypedArray(t,t),i=0;i<t;++i)r[i]=i;return e.indices=r,e}(e)}return e}function j(e,t){Math.abs(e.y)<a.e.EPSILON6&&(e.y=t?-a.e.EPSILON6:a.e.EPSILON6)}T.compressVertices=function(e){if(!n.e(e))throw new o.t("geometry is required.");var a,s,u=e.attributes.extrudeDirection;if(n.e(u)){var p=u.values;s=p.length/3;var v=new Float32Array(2*s),y=0;for(a=0;a<s;++a)i.o.fromArray(p,3*a,Y),i.o.equals(Y,i.o.ZERO)?y+=2:(W=t.t.octEncodeInRange(Y,65535,W),v[y++]=W.x,v[y++]=W.y);return e.attributes.compressedAttributes=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v}),delete e.attributes.extrudeDirection,e}var m=e.attributes.normal,f=e.attributes.st,h=n.e(m),d=n.e(f);if(!h&&!d)return e;var b,w,g,x,T=e.attributes.tangent,A=e.attributes.bitangent,I=n.e(T),S=n.e(A);h&&(b=m.values),d&&(w=f.values),I&&(g=T.values),S&&(x=A.values);var N=s=(h?b.length:w.length)/(h?3:2),P=d&&h?2:1;P+=I||S?1:0;var E=new Float32Array(N*=P),O=0;for(a=0;a<s;++a){d&&(r.o.fromArray(w,2*a,V),E[O++]=t.t.compressTextureCoordinates(V));var L=3*a;h&&n.e(g)&&n.e(x)?(i.o.fromArray(b,L,Y),i.o.fromArray(g,L,Z),i.o.fromArray(x,L,H),t.t.octPack(Y,Z,H,V),E[O++]=V.x,E[O++]=V.y):(h&&(i.o.fromArray(b,L,Y),E[O++]=t.t.octEncodeFloat(Y)),I&&(i.o.fromArray(g,L,Y),E[O++]=t.t.octEncodeFloat(Y)),S&&(i.o.fromArray(x,L,Y),E[O++]=t.t.octEncodeFloat(Y)))}return e.attributes.compressedAttributes=new c.o({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:P,values:E}),h&&delete e.attributes.normal,d&&delete e.attributes.st,S&&delete e.attributes.bitangent,I&&delete e.attributes.tangent,e};var J=new i.o;function K(e,t,r,o){i.o.add(e,i.o.multiplyByScalar(i.o.subtract(t,e,J),e.y/(e.y-t.y),J),r),i.o.clone(r,o),j(r,!0),j(o,!1)}var $=new i.o,Q=new i.o,ee=new i.o,te=new i.o,re={positions:new Array(7),indices:new Array(9)};function ie(e,t,r){if(!(e.x>=0||t.x>=0||r.x>=0)){!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return j(e,e.y<0),j(t,t.y<0),void j(r,r.y<0);var i=Math.abs(e.y),o=Math.abs(t.y),n=Math.abs(r.y),s=(i>o?i>n?a.e.sign(e.y):a.e.sign(r.y):o>n?a.e.sign(t.y):a.e.sign(r.y))<0;j(e,s),j(t,s),j(r,s)}(e,t,r);var i=e.y<0,o=t.y<0,n=r.y<0,s=0;s+=i?1:0,s+=o?1:0;var u=re.indices;1===(s+=n?1:0)?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,i?(K(e,t,$,ee),K(e,r,Q,te),u[0]=0,u[3]=1,u[4]=2,u[6]=1):o?(K(t,r,$,ee),K(t,e,Q,te),u[0]=1,u[3]=2,u[4]=0,u[6]=2):n&&(K(r,e,$,ee),K(r,t,Q,te),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===s&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,i?o?n||(K(r,e,$,ee),K(r,t,Q,te),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(K(t,r,$,ee),K(t,e,Q,te),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(K(e,t,$,ee),K(e,r,Q,te),u[0]=1,u[1]=2,u[3]=1,u[6]=0));var p=re.positions;return p[0]=e,p[1]=t,p[2]=r,p.length=3,(1===s||2===s)&&(p[3]=$,p[4]=Q,p[5]=ee,p[6]=te,p.length=7),re}}function oe(e,t){var r=e.attributes;if(0!==r.position.values.length){for(var i in r)if(r.hasOwnProperty(i)&&n.e(r[i])&&n.e(r[i].values)){var o=r[i];o.values=l.ComponentDatatype.createTypedArray(o.componentDatatype,o.values)}var a=c.I.computeNumberOfVertices(e);return e.indices=y.IndexDatatype.createTypedArray(a,e.indices),t&&(e.boundingSphere=s.i.fromVertices(r.position.values)),e}}function ne(e){var t=e.attributes,r={};for(var i in t)if(t.hasOwnProperty(i)&&n.e(t[i])&&n.e(t[i].values)){var o=t[i];r[i]=new c.o({componentDatatype:o.componentDatatype,componentsPerAttribute:o.componentsPerAttribute,normalize:o.normalize,values:[]})}return new c.I({attributes:r,indices:[],primitiveType:e.primitiveType})}function ae(e,t,r){var i=n.e(e.geometry.boundingSphere);t=oe(t,i),r=oe(r,i),n.e(r)&&!n.e(t)?e.geometry=r:!n.e(r)&&n.e(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function se(e,t){var r=new e,i=new e,o=new e;return function(n,a,s,u,p,l,v,c){var y=e.fromArray(p,n*t,r),m=e.fromArray(p,a*t,i),f=e.fromArray(p,s*t,o);e.multiplyByScalar(y,u.x,y),e.multiplyByScalar(m,u.y,m),e.multiplyByScalar(f,u.z,f);var h=e.add(y,m,y);e.add(h,f,h),c&&e.normalize(h,h),e.pack(h,l,v*t)}}var ue=se(u.e,4),pe=se(i.o,3),le=se(r.o,2),ve=new i.o,ce=new i.o,ye=new i.o,me=new i.o;function fe(e,t,r,o,s,u,p,l,v,c,y,m,f,h,d,b){if(n.e(u)||n.e(p)||n.e(l)||n.e(v)||n.e(c)||0!==h){var w=g(o,i.o.fromArray(s,3*e,ve),i.o.fromArray(s,3*t,ce),i.o.fromArray(s,3*r,ye),me);if(n.e(u)&&pe(e,t,r,w,u,m.normal.values,b,!0),n.e(c)){var x,T=i.o.fromArray(c,3*e,ve),A=i.o.fromArray(c,3*t,ce),I=i.o.fromArray(c,3*r,ye);i.o.multiplyByScalar(T,w.x,T),i.o.multiplyByScalar(A,w.y,A),i.o.multiplyByScalar(I,w.z,I),i.o.equals(T,i.o.ZERO)&&i.o.equals(A,i.o.ZERO)&&i.o.equals(I,i.o.ZERO)?((x=ve).x=0,x.y=0,x.z=0):(x=i.o.add(T,A,T),i.o.add(x,I,x),i.o.normalize(x,x)),i.o.pack(x,m.extrudeDirection.values,3*b)}if(n.e(y)&&function(e,t,r,i,o,n,s){var u=o[e]*i.x,p=o[t]*i.y,l=o[r]*i.z;n[s]=u+p+l>a.e.EPSILON6?1:0}(e,t,r,w,y,m.applyOffset.values,b),n.e(p)&&pe(e,t,r,w,p,m.tangent.values,b,!0),n.e(l)&&pe(e,t,r,w,l,m.bitangent.values,b,!0),n.e(v)&&le(e,t,r,w,v,m.st.values,b),h>0)for(var S=0;S<h;S++){var N=f[S];he(e,t,r,w,b,d[N],m[N])}}}function he(e,t,r,i,o,n,a){var s=n.componentsPerAttribute,u=n.values,p=a.values;switch(s){case 4:ue(e,t,r,i,u,p,o,!1);break;case 3:pe(e,t,r,i,u,p,o,!1);break;case 2:le(e,t,r,i,u,p,o,!1);break;default:p[o]=u[e]*i.x+u[t]*i.y+u[r]*i.z}}function de(e,t,r,i,o,n){var a=e.position.values.length/3;if(-1!==o){var s=i[o],u=r[s];return-1===u?(r[s]=a,e.position.values.push(n.x,n.y,n.z),t.push(a),a):(t.push(u),u)}return e.position.values.push(n.x,n.y,n.z),t.push(a),a}var be={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function we(e){var t=e.geometry,r=t.attributes,o=r.position.values,a=n.e(r.normal)?r.normal.values:void 0,s=n.e(r.bitangent)?r.bitangent.values:void 0,u=n.e(r.tangent)?r.tangent.values:void 0,p=n.e(r.st)?r.st.values:void 0,l=n.e(r.extrudeDirection)?r.extrudeDirection.values:void 0,v=n.e(r.applyOffset)?r.applyOffset.values:void 0,c=t.indices,y=[];for(var m in r)r.hasOwnProperty(m)&&!be[m]&&n.e(r[m])&&y.push(m);var f,h,d,b,w=y.length,g=ne(t),x=ne(t),T=[];T.length=o.length/3;var A=[];for(A.length=o.length/3,b=0;b<T.length;++b)T[b]=-1,A[b]=-1;var I=c.length;for(b=0;b<I;b+=3){var S=c[b],N=c[b+1],P=c[b+2],E=i.o.fromArray(o,3*S),O=i.o.fromArray(o,3*N),L=i.o.fromArray(o,3*P),D=ie(E,O,L);if(n.e(D)&&D.positions.length>3)for(var z=D.positions,_=D.indices,q=_.length,C=0;C<q;++C){var R=_[C],G=z[R];G.y<0?(f=x.attributes,h=x.indices,d=T):(f=g.attributes,h=g.indices,d=A),fe(S,N,P,G,o,a,u,s,p,l,v,f,y,w,r,de(f,h,d,c,R<3?b+R:-1,G))}else n.e(D)&&(E=D.positions[0],O=D.positions[1],L=D.positions[2]),E.y<0?(f=x.attributes,h=x.indices,d=T):(f=g.attributes,h=g.indices,d=A),fe(S,N,P,E,o,a,u,s,p,l,v,f,y,w,r,de(f,h,d,c,b,E)),fe(S,N,P,O,o,a,u,s,p,l,v,f,y,w,r,de(f,h,d,c,b+1,O)),fe(S,N,P,L,o,a,u,s,p,l,v,f,y,w,r,de(f,h,d,c,b+2,L))}ae(e,x,g)}var ge=h.o.fromPointNormal(i.o.ZERO,i.o.UNIT_Y),xe=new i.o,Te=new i.o;function Ae(e,t,r,o,s,u,p){if(n.e(p)){var l=i.o.fromArray(o,3*e,ve);i.o.equalsEpsilon(l,r,a.e.EPSILON10)?u.applyOffset.values[s]=p[e]:u.applyOffset.values[s]=p[t]}}function Ie(e){var t,r=e.geometry,o=r.attributes,s=o.position.values,u=n.e(o.applyOffset)?o.applyOffset.values:void 0,p=r.indices,l=ne(r),v=ne(r),c=p.length,y=[];y.length=s.length/3;var f=[];for(f.length=s.length/3,t=0;t<y.length;++t)y[t]=-1,f[t]=-1;for(t=0;t<c;t+=2){var h=p[t],d=p[t+1],b=i.o.fromArray(s,3*h,ve),w=i.o.fromArray(s,3*d,ce);Math.abs(b.y)<a.e.EPSILON6&&(b.y<0?b.y=-a.e.EPSILON6:b.y=a.e.EPSILON6),Math.abs(w.y)<a.e.EPSILON6&&(w.y<0?w.y=-a.e.EPSILON6:w.y=a.e.EPSILON6);var g=l.attributes,x=l.indices,T=f,A=v.attributes,I=v.indices,S=y,N=m.g.lineSegmentPlane(b,w,ge,ye);if(n.e(N)){var P=i.o.multiplyByScalar(i.o.UNIT_Y,5*a.e.EPSILON9,xe);b.y<0&&(i.o.negate(P,P),g=v.attributes,x=v.indices,T=y,A=l.attributes,I=l.indices,S=f);var E=i.o.add(N,P,Te);Ae(h,d,b,s,de(g,x,T,p,t,b),g,u),Ae(h,d,E,s,de(g,x,T,p,-1,E),g,u),i.o.negate(P,P),i.o.add(N,P,E),Ae(h,d,E,s,de(A,I,S,p,-1,E),A,u),Ae(h,d,w,s,de(A,I,S,p,t+1,w),A,u)}else{var O,L,D;b.y<0?(O=v.attributes,L=v.indices,D=y):(O=l.attributes,L=l.indices,D=f),Ae(h,d,b,s,de(O,L,D,p,t,b),O,u),Ae(h,d,w,s,de(O,L,D,p,t+1,w),O,u)}}ae(e,v,l)}var Se=new r.o,Ne=new r.o,Pe=new i.o,Ee=new i.o,Oe=new i.o,Le=new i.o,De=new i.o,ze=new i.o,_e=new i.o,qe=new u.e;function Ce(e){for(var t=e.attributes,r=t.position.values,o=t.prevPosition.values,n=t.nextPosition.values,a=r.length,s=0;s<a;s+=3){var u=i.o.unpack(r,s,Pe);if(!(u.x>0)){var p=i.o.unpack(o,s,Ee);(u.y<0&&p.y>0||u.y>0&&p.y<0)&&(s-3>0?(o[s]=r[s-3],o[s+1]=r[s-2],o[s+2]=r[s-1]):i.o.pack(u,o,s));var l=i.o.unpack(n,s,Oe);(u.y<0&&l.y>0||u.y>0&&l.y<0)&&(s+3<a?(n[s]=r[s+3],n[s+1]=r[s+4],n[s+2]=r[s+5]):i.o.pack(u,n,s))}}}var Re=5*a.e.EPSILON9,Ge=a.e.EPSILON6;T.splitLongitude=function(e){if(!n.e(e))throw new o.t("instance is required.");var t=e.geometry,p=t.boundingSphere;if(n.e(p)&&(p.center.x-p.radius>0||s.i.intersectPlane(p,h.o.ORIGIN_ZX_PLANE)!==s.S.INTERSECTING))return e;if(t.geometryType!==c.Me.NONE)switch(t.geometryType){case c.Me.POLYLINES:!function(e){var t,o,s,p=e.geometry,l=p.attributes,v=l.position.values,c=l.prevPosition.values,y=l.nextPosition.values,f=l.expandAndWidth.values,h=n.e(l.st)?l.st.values:void 0,d=n.e(l.color)?l.color.values:void 0,b=n.e(l.dist)?l.dist.values:void 0,w=ne(p),g=ne(p),x=!1,T=v.length/3;for(t=0;t<T;t+=4){var A=t,I=t+2,S=i.o.fromArray(v,3*A,Pe),N=i.o.fromArray(v,3*I,Ee);if(Math.abs(S.y)<Ge)for(S.y=Ge*(N.y<0?-1:1),v[3*t+1]=S.y,v[3*(t+1)+1]=S.y,o=3*A;o<3*A+12;o+=3)c[o]=v[3*t],c[o+1]=v[3*t+1],c[o+2]=v[3*t+2];if(Math.abs(N.y)<Ge)for(N.y=Ge*(S.y<0?-1:1),v[3*(t+2)+1]=N.y,v[3*(t+3)+1]=N.y,o=3*A;o<3*A+12;o+=3)y[o]=v[3*(t+2)],y[o+1]=v[3*(t+2)+1],y[o+2]=v[3*(t+2)+2];var P=w.attributes,E=w.indices,O=g.attributes,L=g.indices,D=m.g.lineSegmentPlane(S,N,ge,Le);if(n.e(D)){x=!0;var z=i.o.multiplyByScalar(i.o.UNIT_Y,Re,De);S.y<0&&(i.o.negate(z,z),P=g.attributes,E=g.indices,O=w.attributes,L=w.indices);var _=i.o.add(D,z,ze);P.position.values.push(S.x,S.y,S.z,S.x,S.y,S.z),P.position.values.push(_.x,_.y,_.z),P.position.values.push(_.x,_.y,_.z),P.prevPosition.values.push(c[3*A],c[3*A+1],c[3*A+2]),P.prevPosition.values.push(c[3*A+3],c[3*A+4],c[3*A+5]),P.prevPosition.values.push(S.x,S.y,S.z,S.x,S.y,S.z),P.nextPosition.values.push(_.x,_.y,_.z),P.nextPosition.values.push(_.x,_.y,_.z),P.nextPosition.values.push(_.x,_.y,_.z),P.nextPosition.values.push(_.x,_.y,_.z),i.o.negate(z,z),i.o.add(D,z,_),O.position.values.push(_.x,_.y,_.z),O.position.values.push(_.x,_.y,_.z),O.position.values.push(N.x,N.y,N.z,N.x,N.y,N.z),O.prevPosition.values.push(_.x,_.y,_.z),O.prevPosition.values.push(_.x,_.y,_.z),O.prevPosition.values.push(_.x,_.y,_.z),O.prevPosition.values.push(_.x,_.y,_.z),O.nextPosition.values.push(N.x,N.y,N.z,N.x,N.y,N.z),O.nextPosition.values.push(y[3*I],y[3*I+1],y[3*I+2]),O.nextPosition.values.push(y[3*I+3],y[3*I+4],y[3*I+5]);var q=r.o.fromArray(f,2*A,Se),C=Math.abs(q.y);P.expandAndWidth.values.push(-1,C,1,C),P.expandAndWidth.values.push(-1,-C,1,-C),O.expandAndWidth.values.push(-1,C,1,C),O.expandAndWidth.values.push(-1,-C,1,-C);var R=i.o.magnitudeSquared(i.o.subtract(D,S,Oe));if(R/=i.o.magnitudeSquared(i.o.subtract(N,S,Oe)),n.e(d)){var G=u.e.fromArray(d,4*A,qe),F=u.e.fromArray(d,4*I,qe),k=a.e.lerp(G.x,F.x,R),B=a.e.lerp(G.y,F.y,R),M=a.e.lerp(G.z,F.z,R),U=a.e.lerp(G.w,F.w,R);for(o=4*A;o<4*A+8;++o)P.color.values.push(d[o]);for(P.color.values.push(k,B,M,U),P.color.values.push(k,B,M,U),O.color.values.push(k,B,M,U),O.color.values.push(k,B,M,U),o=4*I;o<4*I+8;++o)O.color.values.push(d[o])}if(n.e(h)){var V=r.o.fromArray(h,2*A,Se),Y=r.o.fromArray(h,2*(t+3),Ne),Z=a.e.lerp(V.x,Y.x,R);for(o=2*A;o<2*A+4;++o)P.st.values.push(h[o]);for(P.st.values.push(Z,V.y),P.st.values.push(Z,Y.y),O.st.values.push(Z,V.y),O.st.values.push(Z,Y.y),o=2*I;o<2*I+4;++o)O.st.values.push(h[o])}if(n.e(b)){var H=i.o.fromArray(b,3*A,_e),W=i.o.fromArray(b,3*I,_e),X=a.e.lerp(H.x,W.x,R);for(o=3*A;o<3*A+6;++o)P.dist.values.push(b[o]);for(P.dist.values.push(X,H.y,H.z),P.dist.values.push(X,H.y,H.z),O.dist.values.push(X,W.y,W.z),O.dist.values.push(X,W.y,W.z),o=3*I;o<3*I+6;++o)O.dist.values.push(b[o])}s=P.position.values.length/3-4,E.push(s,s+2,s+1),E.push(s+1,s+2,s+3),s=O.position.values.length/3-4,L.push(s,s+2,s+1),L.push(s+1,s+2,s+3)}else{var j,J;for(S.y<0?(j=g.attributes,J=g.indices):(j=w.attributes,J=w.indices),j.position.values.push(S.x,S.y,S.z),j.position.values.push(S.x,S.y,S.z),j.position.values.push(N.x,N.y,N.z),j.position.values.push(N.x,N.y,N.z),o=3*t;o<3*t+12;++o)j.prevPosition.values.push(c[o]),j.nextPosition.values.push(y[o]);for(o=2*t;o<2*t+8;++o)j.expandAndWidth.values.push(f[o]),n.e(h)&&j.st.values.push(h[o]);if(n.e(d))for(o=4*t;o<4*t+16;++o)j.color.values.push(d[o]);if(n.e(b))for(o=3*t;o<3*t+12;++o)j.dist.values.push(b[o]);s=j.position.values.length/3-4,J.push(s,s+2,s+1),J.push(s+1,s+2,s+3)}}x&&(Ce(g),Ce(w)),ae(e,g,w)}(e);break;case c.Me.TRIANGLES:we(e);break;case c.Me.LINES:Ie(e)}else X(t),t.primitiveType===f._0x4b6a27.TRIANGLES?we(e):t.primitiveType===f._0x4b6a27.LINES&&Ie(e);return e},e.k=T}));
