/**
@license

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var _0x259749=_0x22f5;function _0x458a(){var _0x2459cc=['UPPER_MASK','8pOrLgx','4ulOxXj','12HtERJA','111535MOuVDe','10306dCnJxw','getTime','12ZZkpRU','init_genrand','3534146zCiojy','821422XiQnaO','random','9zbbYUd','genrand_int32','MATRIX_A','1151232OUeqis','7182903NmqtrT','prototype','LOWER_MASK','mti','42lxHXNI','3089930tEnpYp'];_0x458a=function(){return _0x2459cc;};return _0x458a();}(function(_0x16a87e,_0x101915){var _0x658c53=_0x22f5,_0x36f6f6=_0x16a87e();while(!![]){try{var _0x2de136=parseInt(_0x658c53(0x15c))/0x1*(parseInt(_0x658c53(0x163))/0x2)+-parseInt(_0x658c53(0x16d))/0x3*(-parseInt(_0x658c53(0x160))/0x4)+-parseInt(_0x658c53(0x162))/0x5*(-parseInt(_0x658c53(0x165))/0x6)+parseInt(_0x658c53(0x168))/0x7*(parseInt(_0x658c53(0x15f))/0x8)+parseInt(_0x658c53(0x16a))/0x9*(parseInt(_0x658c53(0x15d))/0xa)+-parseInt(_0x658c53(0x167))/0xb+-parseInt(_0x658c53(0x161))/0xc*(parseInt(_0x658c53(0x158))/0xd);if(_0x2de136===_0x101915)break;else _0x36f6f6['push'](_0x36f6f6['shift']());}catch(_0x5e5e9e){_0x36f6f6['push'](_0x36f6f6['shift']());}}}(_0x458a,0x302ba));function _0x22f5(_0xbf5cea,_0xda7493){var _0x458a5d=_0x458a();return _0x22f5=function(_0x22f5e2,_0x1d9b76){_0x22f5e2=_0x22f5e2-0x158;var _0x604901=_0x458a5d[_0x22f5e2];return _0x604901;},_0x22f5(_0xbf5cea,_0xda7493);}var MersenneTwister=function(_0x17cb0c){var _0x2961e9=_0x22f5;_0x17cb0c==undefined&&(_0x17cb0c=new Date()[_0x2961e9(0x164)]()),this['N']=0x270,this['M']=0x18d,this['MATRIX_A']=0x9908b0df,this[_0x2961e9(0x15e)]=0x80000000,this['LOWER_MASK']=0x7fffffff,this['mt']=new Array(this['N']),this[_0x2961e9(0x15b)]=this['N']+0x1,this['init_genrand'](_0x17cb0c);};MersenneTwister[_0x259749(0x159)][_0x259749(0x166)]=function(_0x148c5f){var _0x56c3dc=_0x259749;this['mt'][0x0]=_0x148c5f>>>0x0;for(this['mti']=0x1;this[_0x56c3dc(0x15b)]<this['N'];this[_0x56c3dc(0x15b)]++){var _0x148c5f=this['mt'][this[_0x56c3dc(0x15b)]-0x1]^this['mt'][this['mti']-0x1]>>>0x1e;this['mt'][this[_0x56c3dc(0x15b)]]=(((_0x148c5f&0xffff0000)>>>0x10)*0x6c078965<<0x10)+(_0x148c5f&0xffff)*0x6c078965+this['mti'],this['mt'][this[_0x56c3dc(0x15b)]]>>>=0x0;}},MersenneTwister['prototype'][_0x259749(0x16b)]=function(){var _0x2e7a14=_0x259749,_0x348260,_0x3f0d70=new Array(0x0,this[_0x2e7a14(0x16c)]);if(this[_0x2e7a14(0x15b)]>=this['N']){var _0x51e434;if(this[_0x2e7a14(0x15b)]==this['N']+0x1)this[_0x2e7a14(0x166)](0x1571);for(_0x51e434=0x0;_0x51e434<this['N']-this['M'];_0x51e434++){_0x348260=this['mt'][_0x51e434]&this['UPPER_MASK']|this['mt'][_0x51e434+0x1]&this[_0x2e7a14(0x15a)],this['mt'][_0x51e434]=this['mt'][_0x51e434+this['M']]^_0x348260>>>0x1^_0x3f0d70[_0x348260&0x1];}for(;_0x51e434<this['N']-0x1;_0x51e434++){_0x348260=this['mt'][_0x51e434]&this[_0x2e7a14(0x15e)]|this['mt'][_0x51e434+0x1]&this[_0x2e7a14(0x15a)],this['mt'][_0x51e434]=this['mt'][_0x51e434+(this['M']-this['N'])]^_0x348260>>>0x1^_0x3f0d70[_0x348260&0x1];}_0x348260=this['mt'][this['N']-0x1]&this[_0x2e7a14(0x15e)]|this['mt'][0x0]&this[_0x2e7a14(0x15a)],this['mt'][this['N']-0x1]=this['mt'][this['M']-0x1]^_0x348260>>>0x1^_0x3f0d70[_0x348260&0x1],this[_0x2e7a14(0x15b)]=0x0;}return _0x348260=this['mt'][this[_0x2e7a14(0x15b)]++],_0x348260^=_0x348260>>>0xb,_0x348260^=_0x348260<<0x7&0x9d2c5680,_0x348260^=_0x348260<<0xf&0xefc60000,_0x348260^=_0x348260>>>0x12,_0x348260>>>0x0;},MersenneTwister[_0x259749(0x159)][_0x259749(0x169)]=function(){var _0x232db8=_0x259749;return this[_0x232db8(0x16b)]()*(0x1/0x100000000);};