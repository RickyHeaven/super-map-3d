define(["./CompressedTextureBuffer-4ed44c37","./defaultValue-a9572088","./PixelFormat-62c40a90","./RuntimeError-7a3815c0","./createTaskProcessorWorker","./WebGLConstants-ade65f0f"],(function(e,r,t,n,a,s){"use strict";
/**
     * @license
     *
     * Copyright (c) 2014, Brandon Jones. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation
     *  and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
     * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
     * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
     * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
     * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */var f,o,i=1,u=2,c={};c[0]=t.PixelFormat.RGB_DXT1,c[i]=t.PixelFormat.RGBA_DXT3,c[u]=t.PixelFormat.RGBA_DXT5;var l,_=0;function m(a,s){var i=a.data,u=i.byteLength,m=new Uint8Array(i),d=l._malloc(u);!function(e,r,t,n){var a,s=t/4,f=n%4,o=new Uint32Array(e.buffer,0,(n-f)/4),i=new Uint32Array(r.buffer);for(a=0;a<o.length;a++)i[s+a]=o[a];for(a=n-f;a<n;a++)r[t+a]=e[a]}(m,l.HEAPU8,d,u);var p=l._crn_get_dxt_format(d,u),w=c[p];if(!r.e(w))throw new n.t("Unsupported compressed format.");var b,y=l._crn_get_levels(d,u),g=l._crn_get_width(d,u),v=l._crn_get_height(d,u),x=0;for(b=0;b<y;++b)x+=t.PixelFormat.compressedTextureSizeInBytes(w,g>>b,v>>b);if(_<x&&(r.e(f)&&l._free(f),f=l._malloc(x),o=new Uint8Array(l.HEAPU8.buffer,f,x),_=x),l._crn_decompress(d,u,f,x,0,y),l._free(d),r.u(a.bMipMap,!1)){var A=o.slice(0,x);return s.push(A.buffer),new e.e(w,g,v,A)}var P=t.PixelFormat.compressedTextureSizeInBytes(w,g,v),h=o.subarray(0,P),U=new Uint8Array(P);return U.set(h,0),s.push(U.buffer),new e.e(w,g,v,U)}function d(e){l=e,self.onmessage=a(m),self.postMessage(!0)}return function(e){var t=e.data.webAssemblyConfig;if(r.e(t))return require([t.modulePath],(function(e){r.e(t.wasmBinaryFile)?(r.e(e)||(e=self.Module),d(e)):d(e)}))}}));
