"use strict";(self.webpackChunkrust_lib=self.webpackChunkrust_lib||[]).push([[235],{235:(n,e,t)=>{t.a(n,(async(n,r)=>{try{t.r(e),t.d(e,{__wbg_log_17733ab6fa45831d:()=>o.Kj,__wbindgen_object_drop_ref:()=>o.ug,__wbindgen_string_new:()=>o.h4,__wbindgen_throw:()=>o.Or,grayscale:()=>o.se});var o=t(838),c=n([o]);o=(c.then?(await c)():c)[0],r()}catch(n){r(n)}}))},838:(n,e,t)=>{t.a(n,(async(r,o)=>{try{t.d(e,{Kj:()=>T,Or:()=>E,h4:()=>m,se:()=>j,ug:()=>A});var c=t(530);n=t.hmd(n);var i=r([c]);c=(i.then?(await i)():i)[0];let a=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let _=new Uint8Array;function u(){return 0===_.byteLength&&(_=new Uint8Array(c.memory.buffer)),_}function d(n,e){return a.decode(u().subarray(n,n+e))}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let l=f.length;function s(n){l===f.length&&f.push(f.length+1);const e=l;return l=f[e],f[e]=n,e}function g(n){return f[n]}function w(n){n<36||(f[n]=l,l=n)}function h(n){const e=g(n);return w(n),e}let b=0,y=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof y.encodeInto?function(n,e){return y.encodeInto(n,e)}:function(n,e){const t=y.encode(n);return e.set(t),{read:n.length,written:t.length}};function v(n,e,t){if(void 0===t){const t=y.encode(n),r=e(t.length);return u().subarray(r,r+t.length).set(t),b=t.length,r}let r=n.length,o=e(r);const c=u();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;c[o+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),o=t(o,r,r=i+3*n.length);const e=u().subarray(o+i,o+r);i+=p(n,e).written}return b=i,o}let k=new Int32Array;function x(){return 0===k.byteLength&&(k=new Int32Array(c.memory.buffer)),k}function j(n){try{const r=c.__wbindgen_add_to_stack_pointer(-16),o=v(n,c.__wbindgen_malloc,c.__wbindgen_realloc),i=b;c.grayscale(r,o,i);var e=x()[r/4+0],t=x()[r/4+1];return d(e,t)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(e,t)}}function m(n,e){return s(d(n,e))}function A(n){h(n)}function T(n){console.log(g(n))}function E(n,e){throw new Error(d(n,e))}o()}catch(I){o(I)}}))},530:(n,e,t)=>{t.a(n,(async(r,o)=>{try{var c,i=r([c=t(838)]),[c]=i.then?(await i)():i;await t.v(e,n.id,"4ea7d2d7c195d0d13de2",{"./index_bg.js":{__wbindgen_string_new:c.h4,__wbindgen_object_drop_ref:c.ug,__wbg_log_17733ab6fa45831d:c.Kj,__wbindgen_throw:c.Or}}),o()}catch(n){o(n)}}),1)}}]);