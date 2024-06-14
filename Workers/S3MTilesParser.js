define(["./createTaskProcessorWorker","./ComponentDatatype-98414d16","./Color-98063b35","./getStringFromTypedArray-1e6dda18","./S3MEdgeProcessor-d09e57c2","./Cartesian3-3a8bdb0b","./Cartographic-a2c313d7","./FeatureDetection-cec0163f","./S3MPixelFormat-339a4168","./pako_inflate-f73548c4","./when-92c6cf3c","./Check-52a7d806","./WebGLConstants-42651efd","./Math-ecf82623","./RuntimeError-c6a62a80","./IndexDatatype-86677ec4","./Cartesian4-72b88c9e"],(function(t,e,n,r,a,i,o,E,s,y,p,T,u,l,c,A,v){"use strict";function _(t,e,n,r,a,i){this.left=t,this.bottom=e,this.right=n,this.top=r,this.minHeight=a,this.maxHeight=i,this.width=n-t,this.length=r-e,this.height=i-a}function d(t,n,r,s,y,p,T){var u=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;var l=0,c={},A=c.vertexAttributes=[],v=c.attrLocation={};c.instanceCount=0,c.instanceMode=0;var _=0;y.getUint32(p,!0),p+=Uint32Array.BYTES_PER_ELEMENT;var d=y.getUint16(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;var m=d;d>4&&(m=d>>8,d&=15);var f=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;var B=void 0,g=void 0;if(f>0){var P=y.getUint16(p,!0);P=d*Float32Array.BYTES_PER_ELEMENT,p+=Uint32Array.BYTES_PER_ELEMENT,l=f*P;var U=s.subarray(p,p+l);if(r){var L=new i.o,h=new i.o,M=new Float32Array(U.buffer,U.byteOffset,U.byteLength/4),S=new o.a;B=new o.a,g=new o.a;for(var N=new Float32Array(2*f),R=new Float64Array(2*f),D=0;D<f;D++)E.p.multiplyByPoint(n,i.o.fromElements(M[3*D],M[3*D+1],M[3*D+2],L),h),S=o.a.fromCartesian(h),R[2*D]=S.longitude,R[2*D+1]=S.latitude,0===D?(B.longitude=S.longitude,B.latitude=S.latitude,g.longitude=S.longitude,g.latitude=S.latitude):(B.longitude=Math.max(S.longitude,B.longitude),B.latitude=Math.max(S.latitude,B.latitude),g.longitude=Math.min(S.longitude,g.longitude),g.latitude=Math.min(S.latitude,g.latitude));for(D=0;D<f;D++)N[2*D]=R[2*D]-g.longitude,N[2*D+1]=R[2*D+1]-g.latitude;v.img=_,A.push({index:v.img,typedArray:N,componentsPerAttribute:2,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:2*Float32Array.BYTES_PER_ELEMENT,normalize:!1}),_++}v.aPosition=_,A.push({index:v.aPosition,typedArray:U,componentsPerAttribute:d,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:P,normalize:!1}),_++,p+=l}var Y=y.getUint32(p,!0);if(p+=Uint32Array.BYTES_PER_ELEMENT,Y>0){var I=y.getUint16(p,!0);I=m*Float32Array.BYTES_PER_ELEMENT,p+=Uint32Array.BYTES_PER_ELEMENT,l=Y*I,t.ignoreNormal||(v.aNormal=_,A.push({index:v.aNormal,typedArray:s.subarray(p,p+l),componentsPerAttribute:m,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:I,normalize:!1}),_++),p+=l}var x=y.getUint32(p,!0);if(p+=Uint32Array.BYTES_PER_ELEMENT,x>0){var F=new Uint8Array(4*x);T.push(F.buffer);var b=y.getUint32(p,!0);b=4*Float32Array.BYTES_PER_ELEMENT,p+=Uint32Array.BYTES_PER_ELEMENT,l=x*b;for(var C=new Float32Array(s.buffer,p,4*f),w=0;w<f;w++)F[4*w]=255*C[4*w],F[4*w+1]=255*C[4*w+1],F[4*w+2]=255*C[4*w+2],F[4*w+3]=255*C[4*w+3];p+=l,v.aColor=_,A.push({index:v.aColor,typedArray:F,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.UNSIGNED_BYTE,offsetInBytes:0,strideInBytes:4,normalize:!0}),_++}var O=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT,O>0&&(p+=l=16*O);var k=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;for(var z,G,H=-1,W=0;W<k;W++){z=y.getUint32(p,!0),p+=Uint32Array.BYTES_PER_ELEMENT,G=y.getUint16(p,!0),p+=Uint16Array.BYTES_PER_ELEMENT,y.getUint16(p,!0),p+=Uint16Array.BYTES_PER_ELEMENT,l=z*G*Float32Array.BYTES_PER_ELEMENT;var V,X=s.subarray(p,p+l);if(-1!=H||20!=G&&35!=G)if(-1!==H)c.instanceBounds=new Float32Array(s.buffer,p,z*G);else{var j="aTexCoord"+W;v[j]=_++,A.push({index:v[j],typedArray:X,componentsPerAttribute:G,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:G*Float32Array.BYTES_PER_ELEMENT,normalize:!1})}else H=W,c.instanceCount=z,c.instanceMode=G,c.instanceBuffer=X,20===G?(V=20*Float32Array.BYTES_PER_ELEMENT,v.uv2=_++,A.push({index:v.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:V,instanceDivisor:1}),v.uv3=_++,A.push({index:v.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv4=_++,A.push({index:v.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.secondary_colour=_++,A.push({index:v.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv6=_++,A.push({index:v.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1})):35===G&&(V=35*Float32Array.BYTES_PER_ELEMENT,v.uv1=_++,A.push({index:v.uv1,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:V,instanceDivisor:1,byteLength:l}),v.uv2=_++,A.push({index:v.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv3=_++,A.push({index:v.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv4=_++,A.push({index:v.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv5=_++,A.push({index:v.uv5,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv6=_++,A.push({index:v.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:20*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv7=_++,A.push({index:v.uv7,componentsPerAttribute:3,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:24*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.secondary_colour=_++,A.push({index:v.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:27*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),v.uv9=_++,A.push({index:v.uv9,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:31*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}));p+=l}c.verticesCount=f,c.instanceIndex=H;var q=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;var J,K=[];for(W=0;W<q;W++){var Q={},Z=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;var $=y.getUint8(p,!0);p+=Uint8Array.BYTES_PER_ELEMENT,y.getUint8(p,!0),p+=Uint8Array.BYTES_PER_ELEMENT;var tt=y.getUint8(p,!0);p+=Uint8Array.BYTES_PER_ELEMENT,p+=1,Q.indicesCount=Z,Q.indexType=$,Q.primitiveType=tt;var et=p;Z>0&&(0==$?(p+=l=Z*Uint16Array.BYTES_PER_ELEMENT,Z%2==1&&(p+=2)):p+=l=4*Z),Q.indicesTypedArray=s.subarray(et,et+l);var nt=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT;var rt=y.getUint32(p,!0);p+=Uint32Array.BYTES_PER_ELEMENT*nt,Q.materialCode=rt,K.push(Q)}return 2===K.length&&13===K[1].primitiveType&&K[1].indicesCount>=3&&(J=a._0x30c9ea.createEdgeDataByIndices(c,K[1],T)),t[u]={vertexPackage:c,arrIndexPackage:K,edgeGeometry:J,cartographicBounds:{max:B,min:g}},p}function m(t,n,r){var a=t.vertexAttributes,i=t.attrLocation,o=a.length;i[1===r?"instanceId":"batchId"]=o,a.push({index:o,typedArray:n,componentsPerAttribute:1,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:0,instanceDivisor:r})}return new n.e,t((function(t,e){var n=t.buffer,i=t.supportCompressType,o=t.bVolume,E=null,T=null,u=null,l=t.isCoverImageryLayer,c=t.modelMatrix;if(o&&t.volbuffer.byteLength<8&&(o=!1),o){var A=t.volbuffer,v=new Uint8Array(A,8),f=y.pako.inflate(v).buffer,B=new Float64Array(f,0,1),g=new Uint32Array(f,48,1);if(0===B[0]||3200===g[0]||3201===g[0]){var P=0;0===B[0]&&(P=8),e.push(f);var U=new Float64Array(f,P,6),L=U[0],h=U[1],M=U[2],S=U[3],N=U[4]<U[5]?U[4]:U[5],R=U[4]>U[5]?U[4]:U[5];T={left:L,top:h,right:M,bottom:S,minHeight:N,maxHeight:R,width:(E=new _(L,S,M,h,N,R)).width,length:E.length,height:E.height};var D=new Uint32Array(f,48+P,7),Y=D[0],I=D[1],x=D[2],F=D[3];u={nFormat:Y,nSideBlockCount:I,nBlockLength:x,nLength:F,nWidth:D[4],nHeight:D[5],nDepth:D[6],imageArray:new Uint8Array(f,76+P,F*F*4)}}}var b=0,C=new Uint8Array(n,0,4);if(115!==C[0]||51!==C[1]||109!==C[2])return{result:!1};var w=C[3],O=(v=new Uint8Array(n,4),y.pako.inflate(v).buffer),k=new Uint8Array(O);e.push(k.buffer);var z=new DataView(O),G=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var H=new Uint8Array(O,b,G),W=G%4;W&&(W=4-W),b+=G+W;var V=r.a(H,void 0,void 0,"gbk");V=(V=V.replace(new RegExp("\r\n","gm"),"")).replace(new RegExp(":","gm"),""),z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT;var X=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var j={};j.ignoreNormal=t.ignoreNormal;for(var q=0;q<X;q++)b=d(j,c,l,k,z,b,e);z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT;var J=z.getUint32(b,!0);for(b+=Uint32Array.BYTES_PER_ELEMENT,q=0;q<J;q++){var K=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Q=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Z={},$=j[K].vertexPackage.instanceIndex,tt=j[K].edgeGeometry;if(-1==$){for(var et=new Float32Array(j[K].vertexPackage.verticesCount),nt=0;nt<Q;nt++){var rt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var at=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var it=0,ot=0;Z[rt]={batchId:nt};for(var Et=0;Et<at;Et++)if(ot=z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT,it=z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT,et.fill)et.fill(nt,ot,ot+it);else for(var st=ot+ot,yt=ot;yt<st;yt++)et[yt]=nt;Z[rt].vertexColorOffset=ot,Z[rt].vertexColorCount=it}m(j[K].vertexPackage,et,void 0)}else{var pt=j[K].vertexPackage.instanceCount;j[K].vertexPackage.instanceBuffer,j[K].vertexPackage.instanceMode;var Tt=new Float32Array(pt),ut=0;for(nt=0;nt<Q;nt++){rt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;at=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;for(Et=0;Et<at;Et++){var lt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT,Tt[ut]=ut,void 0===Z[rt]&&(Z[rt]={vertexColorCount:1,instanceIds:[],vertexColorOffset:ut}),Z[rt].instanceIds.push(lt),ut++}}m(j[K].vertexPackage,Tt,1)}j[K].pickInfo=Z;tt=j[K].edgeGeometry;if(p.e(tt)){var ct,At,vt=tt.regular.instancesData,_t=a._0x30c9ea.RegularInstanceStride;if(p.e(vt))for(At=vt.length,ct=0;ct<At;ct+=_t){var dt=vt[ct+9];vt[ct+9]=et[dt]}var mt=tt.silhouette.instancesData;if(_t=a._0x30c9ea.SilhouetteInstanceStride,p.e(mt))for(At=mt.length,ct=0;ct<At;ct+=_t){dt=mt[ct+12];mt[ct+12]=et[dt]}}}z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT;var ft=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Bt={};for(q=0;q<ft;q++){var gt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Pt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Ut=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Lt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;at=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var ht=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Mt=null;if(Lt===a.S3MCompressType.enrS3TCDXTN&&1!==i){var St=null;ht>s.S3MPixelFormat.BGR||ht===s.S3MPixelFormat.LUMINANCE_ALPHA?(St=new Uint8Array(O,b,Pt*Ut),Mt=new Uint8Array(Pt*Ut*4)):(St=new Uint16Array(O,b,at/2),Mt=new Uint16Array(Pt*Ut)),a.L.decode(Mt,Pt,Ut,St,ht),e.push(Mt.buffer),Lt=0}else Mt=new Uint8Array(O,b,at);Bt[gt]={id:gt,width:Pt,height:Ut,compressType:Lt,nFormat:ht,imageBuffer:Mt},b+=at}return{result:!0,version:w,xmlDoc:V,geoPackage:j,texturePackage:Bt,volImageBuffer:u,volBounds:T}}))}));
