define(["./createTaskProcessorWorker","./defaultValue-a9572088"],(function(e,t){"use strict";function r(){let e,t;const r=new Promise((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}}function n(e){return null!=e}function c(e){var t;this.name="DeveloperError",this.message=e;try{throw new Error}catch(e){t=e.stack}this.stack=t}n(Object.create)&&(c.prototype=Object.create(Error.prototype),c.prototype.constructor=c),c.prototype.toString=function(){var e=this.name+": "+this.message;return n(this.stack)&&(e+="\n"+this.stack.toString()),e},c.throwInstantiationError=function(){throw new c("This function defines an interface and should not be called directly.")};var o=1,a=2,s=3;function i(e){if(!n(e.name))throw new c("options.name is required.");var t=r();this.dbname=e.name;var o=indexedDB.open(this.dbname),a=this;return o.onsuccess=function(e){a.db=e.target.result,a.version=a.db.version,n(a.cachestatus)||(a.cachestatus={}),t.resolve(a)},o.onupgradeneeded=function(e){a.db=e.target.result,a.version=a.db.version,t.resolve(a)},o.onerror=function(e){a.db=null,t.reject("create database fail, error code : "+e.target.errorcode)},this.layer=e.layer||null,this.storageType=e.storageType||"arrayBuffer",this.creatingTable=!1,this.cachestatus={},t.promise}i.prototype.checkObjectStoreExit=function(e){return!!n(this.db)&&this.db.objectStoreNames.contains(e)},i.prototype.createObjectStore=function(e){var t=r();if(this.creatingTable)t.reject(!1);else{if(this.db.objectStoreNames.contains(e))return t.reject(!1),t.promise;this.creatingTable=!0;var c=this,o=parseInt(c.db.version);c.db.close();var a=indexedDB.open(c.dbname,o+1);a.onupgradeneeded=function(r){var o=r.target.result;c.db=o;var a=o.createObjectStore(e,{keyPath:"id"});n(a)?(a.createIndex("value","value",{unique:!1}),c.creatingTable=!1,n(c.cachestatus)||(c.cachestatus={}),c.cachestatus[e]={},c.db.close(),indexedDB.open(c.dbname).onsuccess=function(e){var r=e.target.result;c.db=r,t.resolve(!0)}):(c.creatingTable=!1,t.reject(!1))},a.onsuccess=function(e){e.target.result.close(),t.resolve(!0)},a.onerror=function(e){c.creatingTable=!1,t.reject(!1)}}return t.promise},i.prototype.putElementInDB=function(e,t,c,i){var u=r();if(!n(this.db))return u.reject(!1),u.promise;var l,h=this;if(n(h.cachestatus[e])&&!n(i)&&n(h.cachestatus[e][t])&&(h.cachestatus[e][t]===o||h.cachestatus[e][t]===a))return u.resolve(!1),u.promise;if(this.db.objectStoreNames.contains(e)){var d;n(h.cachestatus[e])||(h.cachestatus[e]={});try{d=this.db.transaction([e],"readwrite")}catch{return u.reject(null),u.promise}if(l=d.objectStore(e),n(i))if(i instanceof Array){for(var v=0,b=i.length;v<b;v++)h.cachestatus[e][i[v].key]!==a&&(l.add({id:i[v].key,value:i[v].value}),h.cachestatus[e][i[v].key]=a);u.resolve(!0)}else{for(var t in i)isNaN(1*t)||l.add({id:t,value:i[t]});u.resolve(!0)}else{if(!n(t)||!n(c))return;if(t instanceof Array&&c instanceof Array){for(v=0,b=t.length;v<b;v++)h.cachestatus[e][t[v]]!==a&&(l.add({id:t[v],value:c[v]}),h.cachestatus[e][t[v]]=a);d.oncomplete=function(e){u.resolve(!0)},d.onerror=function(e){u.reject(!1)}}else{var f=l.add({id:t,value:c});h.cachestatus[e][t]=o,f.onsuccess=function(r){h.cachestatus[e][t]=a,u.resolve(!0)},f.onerror=function(r){h.cachestatus[e][t]=s,u.reject(!1)}}}}else this.createObjectStore(e).then((function(r){var o=h.db.transaction([e],"readwrite");if(l=o.objectStore(e),n(i)){for(var a=0,s=i.length;a<s;a++)l.add({id:i[a].key,value:i[a].value});u.resolve(!0)}else{var d=l.add({id:t,value:c});d.onsuccess=function(e){u.resolve(!0)},d.onerror=function(e){u.reject(!1)}}}),(function(e){u.reject(!1)}));return u.promise},i.prototype.getRangeFromDB=function(e,t){var c,o,a=r();if(!n(this.db)||!this.db.objectStoreNames.contains(e))return null;try{c=this.db.transaction([e])}catch{return a.reject(null),a.promise}try{o=c.objectStore(e)}catch{a.reject(null)}var s=o.openCursor(IDBKeyRange.bound(t[0],t[1])),i=[];return s.onsuccess=function(e){var t=e.target.result;n(t)?(i.push(t.value),t.continue()):a.resolve(i)},s.onerror=function(e){a.reject(null)},a.promise},i.prototype.getElementFromDB=function(e,t){var c,o,a=r();if(!n(this.db)||!this.db.objectStoreNames.contains(e))return null;try{c=this.db.transaction([e])}catch{return a.reject(null),a.promise}try{o=c.objectStore(e)}catch{a.reject(null)}var s=o.get(t);return s.onsuccess=function(e){n(e.target.result)?a.resolve(e.target.result.value):a.reject(null)},s.onerror=function(e){a.reject(null)},a.promise},i.prototype.getAllElementFromDB=function(e){var t,c,o=r();if(!n(this.db)||!this.db.objectStoreNames.contains(e))return null;if(null!=this.transaction)t=this.transaction;else try{t=this.db.transaction([e])}catch{return o.reject(null),o.promise}try{c=t.objectStore(e)}catch{o.reject(null)}var a=c.getAll();return a.onsuccess=function(e){n(e.target.result)?o.resolve(e.target.result):o.reject(null)},a.onerror=function(e){o.reject(null)},o.promise},i.prototype.updateElementInDB=function(e,t,c,o){var a=r();if(!n(this.db)||!this.db.objectStoreNames.contains(e))return a.resolve(!1),a.promise;var s,i=this.db.transaction([e],"readwrite");try{s=i.objectStore(e)}catch{a.resolve(!1)}var u=s.get(t);return u.onsuccess=function(e){var r=e.target.result;n(r)||(r={id:t}),r.value=!0===o?Object.assign(r.value,c):c;var i=s.put(r);i.onsuccess=function(e){a.resolve(!0)},i.onerror=function(e){a.resolve(!1)}},u.onerror=function(e){a.resolve(!1)},a.promise},i.prototype.removeElementFromDB=function(e,t){var c=r();if(!n(this.db)||!this.db.objectStoreNames.contains(e))return c.resolve(!1),c.promise;var o,a=this.db.transaction([e],"readwrite");try{o=a.objectStore(e)}catch{c.resolve(!1)}var s=o.delete(t);return s.onerror=function(e){c.resolve(!1)},s.onsuccess=function(e){c.resolve(!0)},c.promise},i.prototype.clear=function(e){var t=r();if(!n(this.db)||!this.db.objectStoreNames.contains(e))return t.resolve(!1),t.promise;var c,o=this.db.transaction([e],"readwrite");try{c=o.objectStore(e)}catch{t.resolve(!1)}var a=c.clear();return a.onerror=function(e){t.resolve(!1)},a.onsuccess=function(e){t.resolve(!0)},t.promise};var u={};function l(e,t,r){null===r.scheduler?r.creatingDB||(r.creatingDB=!0,new i({name:e}).then((function(e){r.creatingDB=!1,r.scheduler=e,e.checkObjectStoreExit(t)?(e.putElementInDB(t,null,null,r.cache),r.cache=[]):r.creatingTable||(r.creatingTable=!0,e.createObjectStore(t).then((function(){r.creatingTable=!1,e.putElementInDB(t,null,null,r.cache),r.cache=[]})).catch((function(e){})))}))):r.scheduler.checkObjectStoreExit(t)?(r.scheduler.putElementInDB(t,null,null,r.cache),r.cache=[]):r.creatingTable||(r.creatingTable=!0,r.scheduler.createObjectStore(t).then((function(){r.creatingTable=!1,r.scheduler.putElementInDB(t,null,null,r.cache),r.cache=[]})))}return e((function(e,t){var r=e.blob,n=e.key;if(void 0!==r&&void 0!==n){var c=e.tablename,o=e.dbname;void 0===u[h=o+c]&&(u[h]={cache:[],creatingDB:!1,scheduler:null,creatingTable:!1});var a=50;void 0!==e.reserveCount&&(a=e.reserveCount),u[h].cache.length<a&&u[h].cache.push({key:n,value:r})}else for(var s=e.nameArray,i=0;i<s.length;i++){var h;c=s[i].tablename,o=s[i].dbname;void 0!==u[h=o+c]&&0!==Object.keys(u[h].cache).length&&l(o,c,u[h])}}))}));
