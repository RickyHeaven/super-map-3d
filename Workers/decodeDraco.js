define(["./ComponentDatatype-98414d16","./when-92c6cf3c","./IndexDatatype-86677ec4","./RuntimeError-c6a62a80","./createTaskProcessorWorker","./Check-52a7d806","./WebGLConstants-42651efd","./Math-ecf82623"],(function(e,t,r,n,a,o,i,s){"use strict";var u;function c(e,t){for(var n=e.num_points(),a=e.num_faces(),o=new u.DracoInt32Array,i=3*a,s=r.IndexDatatype.createTypedArray(n,i),c=0,y=0;y<a;++y)t.GetFaceFromMesh(e,y,o),s[c+0]=o.GetValue(0),s[c+1]=o.GetValue(1),s[c+2]=o.GetValue(2),c+=3;return u.destroy(o),{typedArray:s,numberOfIndices:i}}function y(r,n,a){var o,i=r.num_points(),s=a.num_components(),c=new u.AttributeQuantizationTransform;if(c.InitFromAttribute(a)){for(var y=new Array(s),d=0;d<s;++d)y[d]=c.min_value(d);o={quantizationBits:c.quantization_bits(),minValues:y,range:c.range(),octEncoded:!1}}u.destroy(c),(c=new u.AttributeOctahedronTransform).InitFromAttribute(a)&&(o={quantizationBits:c.quantization_bits(),octEncoded:!0}),u.destroy(c);var f,A=i*s;f=t.e(o)?function(e,t,r,n,a){var o,i;n.quantizationBits<=8?(i=new u.DracoUInt8Array,o=new Uint8Array(a),t.GetAttributeUInt8ForAllPoints(e,r,i)):(i=new u.DracoUInt16Array,o=new Uint16Array(a),t.GetAttributeUInt16ForAllPoints(e,r,i));for(var s=0;s<a;++s)o[s]=i.GetValue(s);return u.destroy(i),o}(r,n,a,o,A):function(e,t,r,n){var a,o;switch(r.data_type()){case 1:case 11:o=new u.DracoInt8Array,a=new Int8Array(n),t.GetAttributeInt8ForAllPoints(e,r,o);break;case 2:o=new u.DracoUInt8Array,a=new Uint8Array(n),t.GetAttributeUInt8ForAllPoints(e,r,o);break;case 3:o=new u.DracoInt16Array,a=new Int16Array(n),t.GetAttributeInt16ForAllPoints(e,r,o);break;case 4:o=new u.DracoUInt16Array,a=new Uint16Array(n),t.GetAttributeUInt16ForAllPoints(e,r,o);break;case 5:case 7:o=new u.DracoInt32Array,a=new Int32Array(n),t.GetAttributeInt32ForAllPoints(e,r,o);break;case 6:case 8:o=new u.DracoUInt32Array,a=new Uint32Array(n),t.GetAttributeUInt32ForAllPoints(e,r,o);break;case 9:case 10:o=new u.DracoFloat32Array,a=new Float32Array(n),t.GetAttributeFloatForAllPoints(e,r,o)}for(var i=0;i<n;++i)a[i]=o.GetValue(i);return u.destroy(o),a}(r,n,a,A);var w=e.ComponentDatatype.fromTypedArray(f);return{array:f,data:{componentsPerAttribute:s,componentDatatype:w,byteOffset:a.byte_offset(),byteStride:e.ComponentDatatype.getSizeInBytes(w)*s,normalized:a.normalized(),quantization:o}}}function d(e){return t.e(e.primitive)?function(e){var t=new u.Decoder,r=["POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(var a=0;a<r.length;++a)t.SkipAttributeTransform(u[r[a]]);var o=e.bufferView,i=new u.DecoderBuffer;if(i.Init(e.array,o.byteLength),t.GetEncodedGeometryType(i)!==u.TRIANGULAR_MESH)throw new n.t("Unsupported draco mesh geometry type.");var s=new u.Mesh,d=t.DecodeBufferToMesh(i,s);if(!d.ok()||0===s.ptr)throw new n.t("Error decoding draco mesh geometry: "+d.error_msg());u.destroy(i);var f={},A=e.compressedAttributes;for(var w in A)if(A.hasOwnProperty(w)){var l=A[w],b=t.GetAttributeByUniqueId(s,l);f[w]=y(s,t,b)}var m={indexArray:c(s,t),attributeData:f};return u.destroy(s),u.destroy(t),m}(e):function(e){var t=new u.Decoder;e.dequantizeInShader&&(t.SkipAttributeTransform(u.POSITION),t.SkipAttributeTransform(u.NORMAL));var r=new u.DecoderBuffer;if(r.Init(e.buffer,e.buffer.length),t.GetEncodedGeometryType(r)!==u.POINT_CLOUD)throw new n.t("Draco geometry type must be POINT_CLOUD.");var a=new u.PointCloud,o=t.DecodeBufferToPointCloud(r,a);if(!o.ok()||0===a.ptr)throw new n.t("Error decoding draco point cloud: "+o.error_msg());u.destroy(r);var i={},s=e.properties;for(var c in s)if(s.hasOwnProperty(c)){var d=s[c],f=t.GetAttributeByUniqueId(a,d);i[c]=y(a,t,f)}return u.destroy(a),u.destroy(t),i}(e)}function f(e){u=e,self.onmessage=a(d),self.postMessage(!0)}return function(e){var r=e.data.webAssemblyConfig;if(t.e(r))return require([r.modulePath],(function(e){t.e(r.wasmBinaryFile)?(t.e(e)||(e=self.DracoDecoderModule),e(r).then((function(e){f(e)}))):f(e())}))}}));
