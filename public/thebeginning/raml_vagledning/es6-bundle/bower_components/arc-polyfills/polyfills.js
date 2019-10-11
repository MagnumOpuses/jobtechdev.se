if("function"!==typeof Object.assign){Object.assign=function(target){"use strict";if(null===target){throw new TypeError("Cannot convert undefined or null to object")}for(var to=Object(target),index=1,nextSource;index<arguments.length;index++){nextSource=arguments[index];if(null!==nextSource){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey]}}}}return to}}if(!Object.keys){Object.keys=function(){"use strict";var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable("toString"),dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;return function(obj){if("function"!==typeof obj&&("object"!==typeof obj||null===obj)){throw new TypeError("Object.keys called on non-object")}var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop)}}if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i])}}}return result}}()}if(!Array.isArray){Array.isArray=function(arg){return"[object Array]"===Object.prototype.toString.call(arg)}}if(!Array.prototype.find){Object.defineProperty(Array.prototype,"find",{value:function(predicate){if(null===this){throw new TypeError("\"this\" is null or not defined")}var o=Object(this),len=o.length>>>0;if("function"!==typeof predicate){throw new TypeError("predicate must be a function")}var thisArg=arguments[1],k=0;while(k<len){var kValue=o[k];if(predicate.call(thisArg,kValue,k,o)){return kValue}k++}}})}if(!Array.prototype.copyWithin){Array.prototype.copyWithin=function(target,start){var _Mathmin=Math.min,_Mathmax=Math.max;if(null===this){throw new TypeError("this is null or not defined")}var O=Object(this),len=O.length>>>0,relativeTarget=target>>0,to=0>relativeTarget?_Mathmax(len+relativeTarget,0):_Mathmin(relativeTarget,len),relativeStart=start>>0,from=0>relativeStart?_Mathmax(len+relativeStart,0):_Mathmin(relativeStart,len),end=arguments[2],relativeEnd=end===void 0?len:end>>0,final=0>relativeEnd?_Mathmax(len+relativeEnd,0):_Mathmin(relativeEnd,len),count=_Mathmin(final-from,len-to),direction=1;if(from<to&&to<from+count){direction=-1;from+=count-1;to+=count-1}while(0<count){if(from in O){O[to]=O[from]}else{delete O[to]}from+=direction;to+=direction;count--}return O}}if(!Array.prototype.findIndex){Object.defineProperty(Array.prototype,"findIndex",{value:function(predicate){if(null===this){throw new TypeError("\"this\" is null or not defined")}var o=Object(this),len=o.length>>>0;if("function"!==typeof predicate){throw new TypeError("predicate must be a function")}var thisArg=arguments[1],k=0;while(k<len){var kValue=o[k];if(predicate.call(thisArg,kValue,k,o)){return k}k++}return-1}})}if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{value:function(searchElement,fromIndex){if(null===this){throw new TypeError("\"this\" is null or not defined")}var o=Object(this),len=o.length>>>0;if(0===len){return!1}var n=0|fromIndex,k=Math.max(0<=n?n:len-Math.abs(n),0);function sameValueZero(x,y){return x===y||"number"===typeof x&&"number"===typeof y&&isNaN(x)&&isNaN(y)}while(k<len){if(sameValueZero(o[k],searchElement)){return!0}k++}return!1}})}if(!Array.from){Array.from=function(){var toStr=Object.prototype.toString,isCallable=function(fn){return"function"===typeof fn||"[object Function]"===toStr.call(fn)},toInteger=function(value){var number=+value;if(isNaN(number)){return 0}if(0===number||!isFinite(number)){return number}return(0<number?1:-1)*Math.floor(Math.abs(number))},toLength=function(value){var len=toInteger(value);return Math.min(Math.max(len,0),9007199254740992-1)};return function(arrayLike){var C=this,items=Object(arrayLike);if(null===arrayLike){throw new TypeError("Array.from requires an array-like object - not null or undefined")}var mapFn=1<arguments.length?arguments[1]:void void 0,T;if("undefined"!==typeof mapFn){if(!isCallable(mapFn)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(2<arguments.length){T=arguments[2]}}var len=toLength(items.length),A=isCallable(C)?Object(new C(len)):Array(len),k=0,kValue;while(k<len){kValue=items[k];if(mapFn){A[k]="undefined"===typeof T?mapFn(kValue,k):mapFn.call(T,kValue,k)}else{A[k]=kValue}k+=1}A.length=len;return A}}()}Number.isInteger=Number.isInteger||function(value){return"number"===typeof value&&isFinite(value)&&Math.floor(value)===value};