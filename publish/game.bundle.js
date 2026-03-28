(()=>{var Oh=1,yl=2,yn=3,Fn=0,Lt=1;var ii=100;var vo=204,_o=205;var Fh=0,Vu=1,Wu=2,Nn=0,Xu=1,ju=2,qu=3,Ml=4,Yu=5,Zu=6;var Bh=300,Xi=301,ji=302,xo=303,yo=304,ca=306,qi=1e3,Sn=1001,Mo=1002,mt=1003,ic=1004;var dr=1005;var Dt=1006,Ua=1007;var zi=1008;var oi=1009;var Sl=1012,zh=1013,Dn=1014,bn=1015,Er=1016,Hh=1017,Gh=1018,li=1020;var nn=1023;var ci=1026,Yi=1027;var kh=1029;var Vh=1031,Wh=1033,Da=33776,Na=33777,Oa=33778,Fa=33779,rc=35840,sc=35841,ac=35842,oc=35843,Xh=36196,lc=37492,cc=37496,hc=37808,uc=37809,dc=37810,pc=37811,mc=37812,fc=37813,gc=37814,vc=37815,_c=37816,xc=37817,yc=37818,Mc=37819,Sc=37820,bc=37821,Ba=36492,Ec=36494,Tc=36495;var wc=36284,Ac=36285,Rc=36286;var Cs=2300,Ls=2301,za=2302,Cc=2400,Lc=2401,Pc=2402;var jh=3e3,hi=3001;var rn="",rt="srgb",En="srgb-linear",bl="display-p3",ha="display-p3-linear",Ps="linear",We="srgb",Is="rec709",Us="p3";var Si=7680;var Ic=35044;var Uc="300 es",So=1035,Zi=2e3,Ds=2001,Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,Gi=Math.PI/180,Tr=180/Math.PI;function mi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(St[255&i]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[255&e]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[63&t|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[255&n]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function bo(i,e){return(i%e+e)%e}function xr(i,e,t){return(1-t)*i+t*e}function Eo(i){return(i&i-1)==0&&i!==0}function Ns(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var we={DEG2RAD:Gi,RAD2DEG:Tr,generateUUID:mi,clamp:ft,euclideanModulo:bo,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:xr,damp:function(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(bo(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(Dc=i);let e=Dc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Gi},radToDeg:function(i){return i*Tr},isPowerOfTwo:Eo,ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:Ns,setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:wt,denormalize:Bi},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ce=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=r[0],g=r[3],f=r[6],_=r[1],v=r[4],y=r[7],R=r[2],A=r[5],E=r[8];return s[0]=a*x+o*_+l*R,s[3]=a*g+o*v+l*A,s[6]=a*f+o*y+l*E,s[1]=c*x+h*_+u*R,s[4]=c*g+h*v+u*A,s[7]=c*f+h*y+u*E,s[2]=d*x+p*_+m*R,s[5]=d*g+p*v+m*A,s[8]=d*f+p*y+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(r*c-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Ce;function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=Os("canvas");return i.style.display="block",i}var Nc={};function ki(i){i in Nc||(Nc[i]=!0,console.warn(i))}var Oc=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fc=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[En]:{transfer:Ps,primaries:Is,toReference:i=>i,fromReference:i=>i},[rt]:{transfer:We,primaries:Is,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:Ps,primaries:Us,toReference:i=>i.applyMatrix3(Fc),fromReference:i=>i.applyMatrix3(Oc)},[bl]:{transfer:We,primaries:Us,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fc),fromReference:i=>i.applyMatrix3(Oc).convertLinearToSRGB()}},Ku=new Set([En,ha]),ke={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ku.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=es[e].toReference;return(0,es[t].fromReference)(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return es[i].primaries},getTransfer:function(i){return i===rn?Ps:es[i].transfer}};function Vi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Ga(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var bi,Fs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Os("canvas")),bi.width=e.width,bi.height=e.height;let n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Vi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Vi(t[n]/255)):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$u=0,Bs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ka(r[a].image)):s.push(ka(r[a]))}else s=ka(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qu=0,Nt=class i extends Bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=mi(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===hi?rt:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?hi:jh}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hi?rt:rn}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=Bh,Nt.DEFAULT_ANISOTROPY=1;var Ve=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(p+1)/2,R=(f+1)/2,A=(h+d)/4,E=(u+x)/4,D=(m+g)/4;return v>y&&v>R?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=E/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=E/s,r=D/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hi?rt:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends To{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zs=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wo=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=x);if(u!==x||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let R=Math.sqrt(v),A=Math.atan2(R,f*_);g=Math.sin(g*A)/R,o=Math.sin(o*A)/R}let y=o*_;if(l=l*g+d*y,c=c*g+p*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new M,Bc=new sn,Gt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ns.subVectors(this.max,pr),Ei.subVectors(e.a,pr),Ti.subVectors(e.b,pr),wi.subVectors(e.c,pr),Rn.subVectors(Ti,Ei),Cn.subVectors(wi,Ti),$n.subVectors(Ei,wi);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-$n.z,$n.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,$n.z,0,-$n.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-$n.y,$n.x,0];return!!Wa(t,Ei,Ti,wi,ns)&&(t=[1,0,0,0,1,0,0,0,1],!!Wa(t,Ei,Ti,wi,ns)&&(is.crossVectors(Rn,Cn),t=[is.x,is.y,is.z],Wa(t,Ei,Ti,wi,ns)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Yt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fn=[new M,new M,new M,new M,new M,new M,new M,new M],Yt=new M,ts=new Gt,Ei=new M,Ti=new M,wi=new M,Rn=new M,Cn=new M,$n=new M,pr=new M,ns=new M,is=new M,Qn=new M;function Wa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qn.fromArray(i,s);let o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ed=new Gt,mr=new M,Xa=new M,an=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ed.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Xa)),this.expandByPoint(mr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gn=new M,ja=new M,rs=new M,Ln=new M,qa=new M,ss=new M,Ya=new M,ui=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ja.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(ja);let s=.5*e.distanceTo(t),a=-this.direction.dot(rs),o=Ln.dot(this.direction),l=-Ln.dot(rs),c=Ln.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ja).addScaledVector(rs,d),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);let n=gn.dot(this.direction),r=gn.dot(gn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,r,s){qa.subVectors(t,e),ss.subVectors(n,e),Ya.crossVectors(qa,ss);let a,o=this.direction.dot(Ya);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ln.subVectors(this.origin,e);let l=a*this.direction.dot(ss.crossVectors(Ln,ss));if(l<0)return null;let c=a*this.direction.dot(qa.cross(Ln));if(c<0||l+c>o)return null;let h=-a*Ln.dot(Ya);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,x,g)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,x,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){let r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Pn.crossVectors(n,It),Pn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Pn.crossVectors(n,It)),Pn.normalize(),as.crossVectors(It,Pn),r[0]=Pn.x,r[4]=as.x,r[8]=It.x,r[1]=Pn.y,r[5]=as.y,r[9]=It.y,r[2]=Pn.z,r[6]=as.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],_=n[3],v=n[7],y=n[11],R=n[15],A=r[0],E=r[4],D=r[8],N=r[12],P=r[1],q=r[5],C=r[9],H=r[13],W=r[2],ae=r[6],me=r[10],te=r[14],Z=r[3],$=r[7],se=r[11],j=r[15];return s[0]=a*A+o*P+l*W+c*Z,s[4]=a*E+o*q+l*ae+c*$,s[8]=a*D+o*C+l*me+c*se,s[12]=a*N+o*H+l*te+c*j,s[1]=h*A+u*P+d*W+p*Z,s[5]=h*E+u*q+d*ae+p*$,s[9]=h*D+u*C+d*me+p*se,s[13]=h*N+u*H+d*te+p*j,s[2]=m*A+x*P+g*W+f*Z,s[6]=m*E+x*q+g*ae+f*$,s[10]=m*D+x*C+g*me+f*se,s[14]=m*N+x*H+g*te+f*j,s[3]=_*A+v*P+y*W+R*Z,s[7]=_*E+v*q+y*ae+R*$,s[11]=_*D+v*C+y*me+R*se,s[15]=_*N+v*H+y*te+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],x=e[13],g=e[14],f=e[15],_=u*g*c-x*d*c+x*l*p-o*g*p-u*l*f+o*d*f,v=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,y=h*x*c-m*u*c+m*o*p-a*x*p-h*o*f+a*u*f,R=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,A=t*_+n*v+r*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=_*E,e[1]=(x*d*s-u*g*s-x*r*p+n*g*p+u*r*f-n*d*f)*E,e[2]=(o*g*s-x*l*s+x*r*c-n*g*c-o*r*f+n*l*f)*E,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*E,e[4]=v*E,e[5]=(h*g*s-m*d*s+m*r*p-t*g*p-h*r*f+t*d*f)*E,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*f-t*l*f)*E,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*E,e[8]=y*E,e[9]=(m*u*s-h*x*s-m*n*p+t*x*p+h*n*f-t*u*f)*E,e[10]=(a*x*s-m*o*s+m*n*c-t*x*c-a*n*f+t*o*f)*E,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*E,e[12]=R*E,e[13]=(h*x*r-m*u*r+m*n*d-t*x*d-h*n*g+t*u*g)*E,e[14]=(m*o*r-a*x*r-m*n*l+t*x*l+a*n*g-t*o*g)*E,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,x=a*h,g=a*u,f=o*u,_=l*c,v=l*h,y=l*u,R=n.x,A=n.y,E=n.z;return r[0]=(1-(x+f))*R,r[1]=(p+y)*R,r[2]=(m-v)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(d+f))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(m+v)*E,r[9]=(g-_)*E,r[10]=(1-(d+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Ai.set(r[0],r[1],r[2]).length(),a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);let l=1/s,c=1/a,h=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=c,Zt.elements[5]*=c,Zt.elements[6]*=c,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,m;if(o===Zi)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Ds)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,m,x;if(o===Zi)m=(a+s)*u,x=-2*u;else{if(o!==Ds)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,x=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new M,Zt=new Ae,td=new M(0,0,0),nd=new M(1,1,1),Pn=new M,as=new M,It=new M,zc=new Ae,Hc=new sn,Ji=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},id=0,Gc=new M,Ri=new sn,vn=new Ae,os=new M,fr=new M,rd=new M,sd=new sn,kc=new M(1,0,0),Vc=new M(0,1,0),Wc=new M(0,0,1),ad={type:"added"},od={type:"removed"},gt=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new Ji,n=new sn,r=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Ce}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(fr,os,this.up):vn.lookAt(os,fr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(vn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ad)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};gt.DEFAULT_UP=new M(0,1,0),gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=new M,_n=new M,Za=new M,xn=new M,Ci=new M,Li=new M,Xc=new M,Ja=new M,Ka=new M,$a=new M,ai=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jt.subVectors(e,t),r.cross(Jt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Jt.subVectors(r,t),_n.subVectors(n,t),Za.subVectors(e,t);let a=Jt.dot(Jt),o=Jt.dot(_n),l=Jt.dot(Za),c=_n.dot(_n),h=_n.dot(Za),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static isFrontFacing(e,t,n,r){return Jt.subVectors(n,t),_n.subVectors(e,t),Jt.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),.5*Jt.cross(_n).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ci.subVectors(r,n),Li.subVectors(s,n),Ja.subVectors(e,n);let l=Ci.dot(Ja),c=Li.dot(Ja);if(l<=0&&c<=0)return t.copy(n);Ka.subVectors(e,r);let h=Ci.dot(Ka),u=Li.dot(Ka);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ci,a);$a.subVectors(e,s);let p=Ci.dot($a),m=Li.dot($a);if(m>=0&&p<=m)return t.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Li,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Xc.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(Xc,o);let f=1/(g+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(Ci,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=bo(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qa(a,s,e+1/3),this.g=Qa(a,s,e),this.b=Qa(a,s,e-1/3)}return ke.toWorkingColorSpace(this,r),this}setStyle(e,t=rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){let n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return ke.fromWorkingColorSpace(bt.copy(this),e),65536*Math.round(ft(255*bt.r,0,255))+256*Math.round(ft(255*bt.g,0,255))+Math.round(ft(255*bt.b,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(bt.copy(this),t);let n=bt.r,r=bt.g,s=bt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=rt){ke.fromWorkingColorSpace(bt.copy(this),e);let t=bt.r,n=bt.g,r=bt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(ls);let n=xr(In.h,ls.h,t),r=xr(In.s,ls.s,t),s=xr(In.l,ls.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bt=new be;be.NAMES=Yh;var ld=0,zn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=1,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=_o,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rf=cd();function cd(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var it=new M,cs=new le,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ic,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ki("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}};var Hs=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Me=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}};var hd=0,zt=new Ae,eo=new gt,Pi=new M,Ut=new Gt,gr=new Gt,pt=new M,$e=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Gs:Hs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ut.min,gr.min),Ut.expandByPoint(pt),pt.addVectors(Ut.max,gr.max),Ut.expandByPoint(pt)):(Ut.expandByPoint(gr.min),Ut.expandByPoint(gr.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),pt.add(Pi)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<o;P++)c[P]=new M,h[P]=new M;let u=new M,d=new M,p=new M,m=new le,x=new le,g=new le,f=new M,_=new M;function v(P,q,C){u.fromArray(r,3*P),d.fromArray(r,3*q),p.fromArray(r,3*C),m.fromArray(a,2*P),x.fromArray(a,2*q),g.fromArray(a,2*C),d.sub(u),p.sub(u),x.sub(m),g.sub(m);let H=1/(x.x*g.y-g.x*x.y);isFinite(H)&&(f.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(H),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(H),c[P].add(f),c[q].add(f),c[C].add(f),h[P].add(_),h[q].add(_),h[C].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,q=y.length;P<q;++P){let C=y[P],H=C.start;for(let W=H,ae=H+C.count;W<ae;W+=3)v(n[W+0],n[W+1],n[W+2])}let R=new M,A=new M,E=new M,D=new M;function N(P){E.fromArray(s,3*P),D.copy(E);let q=c[P];R.copy(q),R.sub(E.multiplyScalar(E.dot(q))).normalize(),A.crossVectors(D,q);let C=A.dot(h[P])<0?-1:1;l[4*P]=R.x,l[4*P+1]=R.y,l[4*P+2]=R.z,l[4*P+3]=C}for(let P=0,q=y.length;P<q;++P){let C=y[P],H=C.start;for(let W=H,ae=H+C.count;W<ae;W+=3)N(n[W+0]),N(n[W+1]),N(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jc=new Ae,ei=new ui,hs=new an,qc=new M,Ii=new M,Ui=new M,Di=new M,to=new M,us=new M,ds=new le,ps=new le,ms=new le,Yc=new M,Zc=new M,Jc=new M,fs=new M,gs=new M,He=class extends gt{constructor(e=new $e,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(to.fromBufferAttribute(u,e),a?us.addScaledVector(to,h):us.addScaledVector(to.sub(t),h))}t.add(us)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),ei.copy(e.ray).recast(e.near),hs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(hs,qc)===null||ei.origin.distanceToSquared(qc)>(e.far-e.near)**2))return;jc.copy(s).invert(),ei.copy(e.ray).applyMatrix4(jc),n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ei)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)r=vs(this,f,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);m<x;m+=3)r=vs(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)r=vs(this,f,e,n,c,h,u,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);m<x;m+=3)r=vs(this,a,e,n,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function vs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ii),i.getVertexPosition(l,Ui),i.getVertexPosition(c,Di);let h=(function(u,d,p,m,x,g,f,_){let v;if(v=d.side===Lt?m.intersectTriangle(f,g,x,!0,_):m.intersectTriangle(x,g,f,d.side===Fn,_),v===null)return null;gs.copy(_),gs.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(gs);return y<p.near||y>p.far?null:{distance:y,point:gs.clone(),object:u}})(i,e,t,n,Ii,Ui,Di,fs);if(h){r&&(ds.fromBufferAttribute(r,o),ps.fromBufferAttribute(r,l),ms.fromBufferAttribute(r,c),h.uv=ai.getInterpolation(fs,Ii,Ui,Di,ds,ps,ms,new le)),s&&(ds.fromBufferAttribute(s,o),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,c),h.uv1=ai.getInterpolation(fs,Ii,Ui,Di,ds,ps,ms,new le),h.uv2=h.uv1),a&&(Yc.fromBufferAttribute(a,o),Zc.fromBufferAttribute(a,l),Jc.fromBufferAttribute(a,c),h.normal=ai.getInterpolation(fs,Ii,Ui,Di,Yc,Zc,Jc,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new M,materialIndex:0};ai.getNormal(Ii,Ui,Di,u.normal),h.face=u}return h}var Tt=class i extends $e{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(x,g,f,_,v,y,R,A,E,D,N){let P=y/E,q=R/D,C=y/2,H=R/2,W=A/2,ae=E+1,me=D+1,te=0,Z=0,$=new M;for(let se=0;se<me;se++){let j=se*q-H;for(let oe=0;oe<ae;oe++){let w=oe*P-C;$[x]=w*_,$[g]=j*v,$[f]=W,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[f]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(oe/E),u.push(1-se/D),te+=1}}for(let se=0;se<D;se++)for(let j=0;j<E;j++){let oe=d+j+ae*se,w=d+j+ae*(se+1),S=d+(j+1)+ae*(se+1),O=d+(j+1)+ae*se;l.push(oe,w,O),l.push(w,S,O),Z+=6}o.addGroup(p,Z,N),p+=Z,d+=te}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ki(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=Ki(i[t]);for(let r in n)e[r]=n[r]}return e}function Zh(i){return i.getRenderTarget()===null?i.outputColorSpace:ke.workingColorSpace}var ud={clone:Ki,merge:At},on=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ar=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new M,Kc=new le,$c=new le,Et=class extends Ar{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Tr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Gi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Tr*Math.atan(Math.tan(.5*Gi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,$c),t.subVectors($c,Kc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Gi*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ni=-90,Ao=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Et(Ni,1,e,t);r.layers=this.layers,this.add(r);let s=new Et(Ni,1,e,t);s.layers=this.layers,this.add(s);let a=new Et(Ni,1,e,t);a.layers=this.layers,this.add(a);let o=new Et(Ni,1,e,t);o.layers=this.layers,this.add(o);let l=new Et(Ni,1,e,t);l.layers=this.layers,this.add(l);let c=new Et(Ni,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ds)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ks=class extends Nt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Xi,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ro=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hi?rt:rn),this.texture=new ks(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tt(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:0});s.uniforms.tEquirect.value=t;let a=new He(r,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Dt),new Ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},no=new M,dd=new M,pd=new Ce,Mn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=no.subVectors(n,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(no),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pd.getNormalMatrix(e),r=this.coplanarPoint(no).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new an,_s=new M,$i=class{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],m=r[9],x=r[10],g=r[11],f=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,g-p,y-f).normalize(),n[1].setComponents(l+s,d+c,g+p,y+f).normalize(),n[2].setComponents(l+a,d+h,g+m,y+_).normalize(),n[3].setComponents(l-a,d-h,g-m,y-_).normalize(),n[4].setComponents(l-o,d-u,g-x,y-v).normalize(),t===Zi)n[5].setComponents(l+o,d+u,g+x,y+v).normalize();else{if(t!==Ds)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,x,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function md(i,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=n.get(r);s&&(i.deleteBuffer(s.buffer),n.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=n.get(r);return void((!o||o.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=n.get(r);if(a===void 0)n.set(r,(function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer(),p;if(i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=i.HALF_FLOAT}else p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=i.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}})(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,m=d.length;p<m;p++){let x=d[p];t?i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count):i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h.subarray(x.start,x.start+x.count))}l.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var Rr=class i extends $e{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let _=f*d-a;for(let v=0;v<c;v++){let y=v*u-s;m.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let v=_+c*f,y=_+c*(f+1),R=_+1+c*(f+1),A=_+1+c*f;p.push(v,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Te={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ce={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},tn={basic:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new be(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:At([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:At([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new be(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:At([ce.points,ce.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:At([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:At([ce.common,ce.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:At([ce.sprite,ce.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:At([ce.common,ce.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:At([ce.lights,ce.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};tn.physical={uniforms:At([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var xs={r:0,b:0,g:0};function fd(i,e,t,n,r,s,a){let o=new be(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(x,g){x.getRGB(xs,Zh(i)),n.buffers.color.setClear(xs.r,xs.g,xs.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(x,g=1){o.set(x),h=g,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,m(o,h)},render:function(x,g){let f=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_===null?m(o,h):_&&_.isColor&&(m(_,1),f=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||f)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ca)?(c===void 0&&(c=new He(new Tt(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ki(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ke.getTransfer(_.colorSpace)!==We,u===_&&d===_.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new He(new Rr(2,2),new on({name:"BackgroundMaterial",uniforms:Ki(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ke.getTransfer(_.colorSpace)!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}}}function gd(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function d(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R){let A=[],E=[],D=[];for(let N=0;N<r;N++)A[N]=0,E[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:E,attributeDivisors:D,object:R,attributes:{},index:null}}function m(){let R=c.newAttributes;for(let A=0,E=R.length;A<E;A++)R[A]=0}function x(R){g(R,0)}function g(R,A){let E=c.newAttributes,D=c.enabledAttributes,N=c.attributeDivisors;E[R]=1,D[R]===0&&(i.enableVertexAttribArray(R),D[R]=1),N[R]!==A&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,A),N[R]=A)}function f(){let R=c.newAttributes,A=c.enabledAttributes;for(let E=0,D=A.length;E<D;E++)A[E]!==R[E]&&(i.disableVertexAttribArray(E),A[E]=0)}function _(R,A,E,D,N,P,q){q===!0?i.vertexAttribIPointer(R,A,E,N,P):i.vertexAttribPointer(R,A,E,D,N,P)}function v(){y(),h=!0,c!==l&&(c=l,u(c.object))}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(R,A,E,D,N){let P=!1;if(a){let q=(function(C,H,W){let ae=W.wireframe===!0,me=o[C.id];me===void 0&&(me={},o[C.id]=me);let te=me[H.id];te===void 0&&(te={},me[H.id]=te);let Z=te[ae];return Z===void 0&&(Z=p(n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()),te[ae]=Z),Z})(D,E,A);c!==q&&(c=q,u(c.object)),P=(function(C,H,W,ae){let me=c.attributes,te=H.attributes,Z=0,$=W.getAttributes();for(let se in $)if($[se].location>=0){let j=me[se],oe=te[se];if(oe===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ae})(R,D,E,N),P&&(function(C,H,W,ae){let me={},te=H.attributes,Z=0,$=W.getAttributes();for(let se in $)if($[se].location>=0){let j=te[se];j===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));let oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),me[se]=oe,Z++}c.attributes=me,c.attributesNum=Z,c.index=ae})(R,D,E,N)}else{let q=A.wireframe===!0;c.geometry===D.id&&c.program===E.id&&c.wireframe===q||(c.geometry=D.id,c.program=E.id,c.wireframe=q,P=!0)}N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,(function(q,C,H,W){if(n.isWebGL2===!1&&(q.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let ae=W.attributes,me=H.getAttributes(),te=C.defaultAttributeValues;for(let Z in me){let $=me[Z];if($.location>=0){let se=ae[Z];if(se===void 0&&(Z==="instanceMatrix"&&q.instanceMatrix&&(se=q.instanceMatrix),Z==="instanceColor"&&q.instanceColor&&(se=q.instanceColor)),se!==void 0){let j=se.normalized,oe=se.itemSize,w=t.get(se);if(w===void 0)continue;let S=w.buffer,O=w.type,G=w.bytesPerElement,U=n.isWebGL2===!0&&(O===i.INT||O===i.UNSIGNED_INT||se.gpuType===zh);if(se.isInterleavedBufferAttribute){let B=se.data,L=B.stride,I=se.offset;if(B.isInstancedInterleavedBuffer){for(let F=0;F<$.locationSize;F++)g($.location+F,B.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let F=0;F<$.locationSize;F++)x($.location+F);i.bindBuffer(i.ARRAY_BUFFER,S);for(let F=0;F<$.locationSize;F++)_($.location+F,oe/$.locationSize,O,j,L*G,(I+oe/$.locationSize*F)*G,U)}else{if(se.isInstancedBufferAttribute){for(let B=0;B<$.locationSize;B++)g($.location+B,se.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let B=0;B<$.locationSize;B++)x($.location+B);i.bindBuffer(i.ARRAY_BUFFER,S);for(let B=0;B<$.locationSize;B++)_($.location+B,oe/$.locationSize,O,j,oe*G,oe/$.locationSize*B*G,U)}}else if(te!==void 0){let j=te[Z];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv($.location,j);break;case 3:i.vertexAttrib3fv($.location,j);break;case 4:i.vertexAttrib4fv($.location,j);break;default:i.vertexAttrib1fv($.location,j)}}}}f()})(R,A,E,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))},reset:v,resetDefaultState:y,dispose:function(){v();for(let R in o){let A=o[R];for(let E in A){let D=A[E];for(let N in D)d(D[N].object),delete D[N];delete A[E]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let A=o[R.id];for(let E in A){let D=A[E];for(let N in D)d(D[N].object),delete D[N];delete A[E]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let A in o){let E=o[A];if(E[R.id]===void 0)continue;let D=E[R.id];for(let N in D)d(D[N].object),delete D[N];delete E[R.id]}},initAttributes:m,enableAttribute:x,disableUnusedAttributes:f}}function vd(i,e,t,n){let r=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){i.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=i,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function _d(i,e,t){let n;function r(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),f=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:f,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:_&&v,maxSamples:s?i.getParameter(i.MAX_SAMPLES):0}}function xd(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Mn,o=new Ce,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,x=null;if(m!==0){if(x=l.value,p!==!0||x===null){let g=d+4*m,f=u.matrixWorldInverse;o.getNormalMatrix(f),(x===null||x.length<g)&&(x=new Float32Array(g));for(let _=0,v=d;_!==m;++_,v+=4)a.copy(h[_]).applyMatrix4(f,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,x=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||s&&!x)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let f=s?0:n,_=4*f,v=g.clippingState||null;l.value=v,v=c(p,u,_,d);for(let y=0;y!==_;++y)v[y]=t[y];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=f}}}function yd(i){let e=new WeakMap;function t(r,s){return s===xo?r.mapping=Xi:s===yo&&(r.mapping=ji),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===xo||s===yo){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Ro(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Vs=class extends Ar{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qc=[.125,.215,.35,.446,.526,.582],vr=20,io=new Vs,eh=new be,ro=null,so=0,ao=0,ni=(1+Math.sqrt(5))/2,Oi=1/ni,th=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,ni,Oi),new M(0,ni,-Oi),new M(Oi,0,ni),new M(-Oi,0,ni),new M(ni,Oi,0),new M(-ni,Oi,0)],Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,ao),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Er,format:nn,colorSpace:En,depthBuffer:!1},r=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Qc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=Qc[d-a+4-1]:d===0&&(m=0),c.push(m);let x=1/(p-2),g=-x,f=1+x,_=[g,g,f,g,f,f,g,g,f,f,g,f],v=6,y=6,R=3,A=2,E=1,D=new Float32Array(R*y*v),N=new Float32Array(A*y*v),P=new Float32Array(E*y*v);for(let C=0;C<v;C++){let H=C%3*2/3-1,W=C>2?0:-1,ae=[H,W,0,H+2/3,W,0,H+2/3,W+1,0,H,W,0,H+2/3,W+1,0,H,W+1,0];D.set(ae,R*y*C),N.set(_,A*y*C);let me=[C,C,C,C,C,C];P.set(me,E*y*C)}let q=new $e;q.setAttribute("position",new Ht(D,R)),q.setAttribute("uv",new Ht(N,A)),q.setAttribute("faceIndex",new Ht(P,E)),o.push(q),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(vr),h=new M(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,r){let s=new Et(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(eh),l.toneMapping=Nn,l.autoClear=!1;let u=new Hn({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),d=new He(new Tt,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(eh),p=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):g===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let f=this._cubeSize;ys(r,g*f,x>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Xi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ys(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=th[(r-1)%th.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new He(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,x=isFinite(s)?1+Math.floor(3*m):vr;x>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let g=[],f=0;for(let y=0;y<vr;++y){let R=y/m,A=Math.exp(-R*R/2);g.push(A),y===0?f+=A:y<x&&(f+=2*A)}for(let y=0;y<g.length;y++)g[y]=g[y]/f;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let v=this._sizeLods[r];ys(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,io)}};function nh(i,e,t){let n=new Tn(i,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ih(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Md(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===xo||s===yo,o=s===Xi||s===ji;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Ws(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u})(l)){t===null&&(t=new Ws(i));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",n),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Sd(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bd(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let x=h.array;d=h.version;for(let g=0,f=x.length;g<f;g+=3){let _=x[g+0],v=x[g+1],y=x[g+2];c.push(_,v,v,y,y,_)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let g=0,f=x.length/3-1;g<f;g+=3){let _=g+0,v=g+1,y=g+2;c.push(_,v,v,y,y,_)}}}let p=new(qh(c)?Gs:Hs)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Ed(i,e,t,n){let r=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){i.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=i,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function Td(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function wd(i,e){return i[0]-e[0]}function Ad(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Rd(i,e,t){let n={},r=new Float32Array(8),s=new WeakMap,a=new Ve,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,m=s.get(c);if(m===void 0||m.count!==p){let H=function(){q.dispose(),s.delete(c),c.removeEventListener("dispose",H)};m!==void 0&&m.texture.dispose();let f=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],A=c.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let D=c.attributes.position.count*E,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let P=new Float32Array(D*N*4*p),q=new zs(P,D,N,p);q.type=bn,q.needsUpdate=!0;let C=4*E;for(let W=0;W<p;W++){let ae=y[W],me=R[W],te=A[W],Z=D*N*4*W;for(let $=0;$<ae.count;$++){let se=$*C;f===!0&&(a.fromBufferAttribute(ae,$),P[Z+se+0]=a.x,P[Z+se+1]=a.y,P[Z+se+2]=a.z,P[Z+se+3]=0),_===!0&&(a.fromBufferAttribute(me,$),P[Z+se+4]=a.x,P[Z+se+5]=a.y,P[Z+se+6]=a.z,P[Z+se+7]=0),v===!0&&(a.fromBufferAttribute(te,$),P[Z+se+8]=a.x,P[Z+se+9]=a.y,P[Z+se+10]=a.z,P[Z+se+11]=te.itemSize===4?a.w:1)}}m={count:p,texture:q,size:new le(D,N)},s.set(c,m),c.addEventListener("dispose",H)}let x=0;for(let f=0;f<u.length;f++)x+=u[f];let g=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",u),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let _=0;_<d;_++)p[_]=[_,0];n[c.id]=p}for(let _=0;_<d;_++){let v=p[_];v[0]=_,v[1]=u[_]}p.sort(Ad);for(let _=0;_<8;_++)_<d&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(wd);let m=c.morphAttributes.position,x=c.morphAttributes.normal,g=0;for(let _=0;_<8;_++){let v=o[_],y=v[0],R=v[1];y!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+_)!==m[y]&&c.setAttribute("morphTarget"+_,m[y]),x&&c.getAttribute("morphNormal"+_)!==x[y]&&c.setAttribute("morphNormal"+_,x[y]),r[_]=R,g+=R):(m&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),x&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),r[_]=0)}let f=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}}}function Cd(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Xs=class extends Nt{constructor(e,t,n,r,s,a,o,l,c,h){if((h=h!==void 0?h:ci)!==ci&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=Dn),n===void 0&&h===Yi&&(n=li),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kh=new Nt,$h=new Xs(1,1);$h.compareFunction=515;var Qh=new zs,eu=new wo,tu=new ks,sh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=sh[r];if(s===void 0&&(s=new Float32Array(r),sh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ld(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Id(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Ud(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Dd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),ht(t,n)}}function Nd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),ht(t,n)}}function Od(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),ht(t,n)}}function Fd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function zd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Hd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Gd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function Vd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Wd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function Xd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?$h:Kh;t.setTexture2D(e||s,r)}function jd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||eu,r)}function qd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tu,r)}function Yd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qh,r)}function Zd(i,e){i.uniform1fv(this.addr,e)}function Jd(i,e){let t=nr(e,this.size,2);i.uniform2fv(this.addr,t)}function Kd(i,e){let t=nr(e,this.size,3);i.uniform3fv(this.addr,t)}function $d(i,e){let t=nr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qd(i,e){let t=nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ep(i,e){let t=nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tp(i,e){let t=nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function np(i,e){i.uniform1iv(this.addr,e)}function ip(i,e){i.uniform2iv(this.addr,e)}function rp(i,e){i.uniform3iv(this.addr,e)}function sp(i,e){i.uniform4iv(this.addr,e)}function ap(i,e){i.uniform1uiv(this.addr,e)}function op(i,e){i.uniform2uiv(this.addr,e)}function lp(i,e){i.uniform3uiv(this.addr,e)}function cp(i,e){i.uniform4uiv(this.addr,e)}function hp(i,e,t){let n=this.cache,r=e.length,s=ua(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Kh,s[a])}function up(i,e,t){let n=this.cache,r=e.length,s=ua(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||eu,s[a])}function dp(i,e,t){let n=this.cache,r=e.length,s=ua(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tu,s[a])}function pp(i,e,t){let n=this.cache,r=e.length,s=ua(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qh,s[a])}var Co=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Ld;case 35664:return Pd;case 35665:return Id;case 35666:return Ud;case 35674:return Dd;case 35675:return Nd;case 35676:return Od;case 5124:case 35670:return Fd;case 35667:case 35671:return Bd;case 35668:case 35672:return zd;case 35669:case 35673:return Hd;case 5125:return Gd;case 36294:return kd;case 36295:return Vd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Xd;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}})(t.type)}},Lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Zd;case 35664:return Jd;case 35665:return Kd;case 35666:return $d;case 35674:return Qd;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}})(t.type)}},Po=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},oo=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function mp(i,e,t){let n=i.name,r=n.length;for(oo.lastIndex=0;;){let s=oo.exec(n),a=oo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){hh(t,c===void 0?new Co(o,i,e):new Lo(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Po(o),hh(t,h)),t=h}}}var Wi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);mp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function uh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fp=37297,gp=0;function dh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function vp(i,e){let t=(function(n){let r=ke.getPrimaries(ke.workingColorSpace),s=ke.getPrimaries(n),a;switch(r===s?a="":r===Us&&s===Is?a="LinearDisplayP3ToLinearSRGB":r===Is&&s===Us&&(a="LinearSRGBToLinearDisplayP3"),n){case En:case ha:return[a,"LinearTransferOETF"];case rt:case bl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _p(i,e){let t;switch(e){case Xu:t="Linear";break;case ju:t="Reinhard";break;case qu:t="OptimizedCineon";break;case Ml:t="ACESFilmic";break;case Zu:t="AgX";break;case Yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fi(i){return i!==""}function ph(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(xp,Mp)}var yp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mp(i,e){let t=Te[e];if(t===void 0){let n=yp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Io(t)}var Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(Sp,bp)}function bp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(C){let H="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Oh?H="SHADOWMAP_TYPE_PCF":C.shadowMapType===yl?H="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===yn&&(H="SHADOWMAP_TYPE_VSM"),H})(t),c=(function(C){let H="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case Xi:case ji:H="ENVMAP_TYPE_CUBE";break;case ca:H="ENVMAP_TYPE_CUBE_UV"}return H})(t),h=(function(C){let H="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===ji&&(H="ENVMAP_MODE_REFRACTION"),H})(t),u=(function(C){let H="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Fh:H="ENVMAP_BLENDING_MULTIPLY";break;case Vu:H="ENVMAP_BLENDING_MIX";break;case Wu:H="ENVMAP_BLENDING_ADD"}return H})(t),d=(function(C){let H=C.envMapCubeUVHeight;if(H===null)return null;let W=Math.log2(H)-2,ae=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,W),112)),texelHeight:ae,maxMip:W}})(t),p=t.isWebGL2?"":(function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.alphaToCoverage||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fi).join(`
`)})(t),m=(function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)})(t),x=(function(C){let H=[];for(let W in C){let ae=C[W];ae!==!1&&H.push("#define "+W+" "+ae)}return H.join(`
`)})(s),g=r.createProgram(),f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fi).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fi).join(`
`),_.length>0&&(_+=`
`)):(f=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),_=[p,gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Te.tonemapping_pars_fragment:"",t.toneMapping!==Nn?_p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=Io(a),a=ph(a,t),a=mh(a,t),o=Io(o),o=ph(o,t),o=mh(o,t),a=fh(a),o=fh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+f+a,R=v+_+o,A=uh(r,r.VERTEX_SHADER,y),E=uh(r,r.FRAGMENT_SHADER,R);function D(C){if(i.debug.checkShaderErrors){let H=r.getProgramInfoLog(g).trim(),W=r.getShaderInfoLog(A).trim(),ae=r.getShaderInfoLog(E).trim(),me=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,E);else{let Z=dh(r,A,"vertex"),$=dh(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Z+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):W!==""&&ae!==""||(te=!1);te&&(C.diagnostics={runnable:me,programLog:H,vertexShader:{log:W,prefix:f},fragmentShader:{log:ae,prefix:_}})}r.deleteShader(A),r.deleteShader(E),N=new Wi(r,g),P=(function(H,W){let ae={},me=H.getProgramParameter(W,H.ACTIVE_ATTRIBUTES);for(let te=0;te<me;te++){let Z=H.getActiveAttrib(W,te),$=Z.name,se=1;Z.type===H.FLOAT_MAT2&&(se=2),Z.type===H.FLOAT_MAT3&&(se=3),Z.type===H.FLOAT_MAT4&&(se=4),ae[$]={type:Z.type,location:H.getAttribLocation(W,$),locationSize:se}}return ae})(r,g)}let N,P;r.attachShader(g,A),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),this.getUniforms=function(){return N===void 0&&D(this),N},this.getAttributes=function(){return P===void 0&&D(this),P};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(g,fp)),q},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var Tp=0,Uo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Do(e),t.set(e,n)),n}},Do=class{constructor(e){this.id=Tp++,this.code=e,this.usedTimes=0}};function wp(i,e,t,n,r,s,a){let o=new wr,l=new Uo,c=new Set,h=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures,m=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,_,v,y,R){let A=y.fog,E=R.geometry,D=f.isMeshStandardMaterial?y.environment:null,N=(f.isMeshStandardMaterial?t:e).get(f.envMap||D),P=N&&N.mapping===ca?N.image.height:null,q=x[f.type];f.precision!==null&&(m=r.getMaxPrecision(f.precision),m!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",m,"instead."));let C=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,H=C!==void 0?C.length:0,W,ae,me,te,Z=0;if(E.morphAttributes.position!==void 0&&(Z=1),E.morphAttributes.normal!==void 0&&(Z=2),E.morphAttributes.color!==void 0&&(Z=3),q){let cr=tn[q];W=cr.vertexShader,ae=cr.fragmentShader}else W=f.vertexShader,ae=f.fragmentShader,l.update(f),me=l.getVertexShaderID(f),te=l.getFragmentShaderID(f);let $=i.getRenderTarget(),se=R.isInstancedMesh===!0,j=R.isBatchedMesh===!0,oe=!!f.map,w=!!f.matcap,S=!!N,O=!!f.aoMap,G=!!f.lightMap,U=!!f.bumpMap,B=!!f.normalMap,L=!!f.displacementMap,I=!!f.emissiveMap,F=!!f.metalnessMap,Q=!!f.roughnessMap,K=f.anisotropy>0,b=f.clearcoat>0,ne=f.iridescence>0,z=f.sheen>0,k=f.transmission>0,ie=K&&!!f.anisotropyMap,he=b&&!!f.clearcoatMap,pe=b&&!!f.clearcoatNormalMap,fe=b&&!!f.clearcoatRoughnessMap,Se=ne&&!!f.iridescenceMap,ve=ne&&!!f.iridescenceThicknessMap,Oe=z&&!!f.sheenColorMap,ge=z&&!!f.sheenRoughnessMap,ze=!!f.specularMap,tt=!!f.specularColorMap,_e=!!f.specularIntensityMap,Fe=k&&!!f.transmissionMap,Ge=k&&!!f.thicknessMap,Jr=!!f.gradientMap,Mi=!!f.alphaMap,Ot=f.alphaTest>0,pn=!!f.alphaHash,Wt=!!f.extensions,X=Nn;f.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(X=i.toneMapping));let qn={isWebGL2:u,shaderID:q,shaderType:f.type,shaderName:f.name,vertexShader:W,fragmentShader:ae,defines:f.defines,customVertexShaderID:me,customFragmentShaderID:te,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:m,batching:j,instancing:se,instancingColor:se&&R.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:En,alphaToCoverage:!!f.alphaToCoverage,map:oe,matcap:w,envMap:S,envMapMode:S&&N.mapping,envMapCubeUVHeight:P,aoMap:O,lightMap:G,bumpMap:U,normalMap:B,displacementMap:p&&L,emissiveMap:I,normalMapObjectSpace:B&&f.normalMapType===1,normalMapTangentSpace:B&&f.normalMapType===0,metalnessMap:F,roughnessMap:Q,anisotropy:K,anisotropyMap:ie,clearcoat:b,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:fe,iridescence:ne,iridescenceMap:Se,iridescenceThicknessMap:ve,sheen:z,sheenColorMap:Oe,sheenRoughnessMap:ge,specularMap:ze,specularColorMap:tt,specularIntensityMap:_e,transmission:k,transmissionMap:Fe,thicknessMap:Ge,gradientMap:Jr,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Mi,alphaTest:Ot,alphaHash:pn,combine:f.combine,mapUv:oe&&g(f.map.channel),aoMapUv:O&&g(f.aoMap.channel),lightMapUv:G&&g(f.lightMap.channel),bumpMapUv:U&&g(f.bumpMap.channel),normalMapUv:B&&g(f.normalMap.channel),displacementMapUv:L&&g(f.displacementMap.channel),emissiveMapUv:I&&g(f.emissiveMap.channel),metalnessMapUv:F&&g(f.metalnessMap.channel),roughnessMapUv:Q&&g(f.roughnessMap.channel),anisotropyMapUv:ie&&g(f.anisotropyMap.channel),clearcoatMapUv:he&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(f.sheenRoughnessMap.channel),specularMapUv:ze&&g(f.specularMap.channel),specularColorMapUv:tt&&g(f.specularColorMap.channel),specularIntensityMapUv:_e&&g(f.specularIntensityMap.channel),transmissionMapUv:Fe&&g(f.transmissionMap.channel),thicknessMapUv:Ge&&g(f.thicknessMap.channel),alphaMapUv:Mi&&g(f.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(B||K),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!E.attributes.uv&&(oe||Mi),fog:!!A,useFog:f.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Z,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:X,useLegacyLights:i._useLegacyLights,decodeVideoTexture:oe&&f.map.isVideoTexture===!0&&ke.getTransfer(f.map.colorSpace)===We,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Lt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Wt&&f.extensions.derivatives===!0,extensionFragDepth:Wt&&f.extensions.fragDepth===!0,extensionDrawBuffers:Wt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Wt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Wt&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Wt&&f.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return qn.vertexUv1s=c.has(1),qn.vertexUv2s=c.has(2),qn.vertexUv3s=c.has(3),c.clear(),qn},getProgramCacheKey:function(f){let _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.customVertexShaderID),_.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)_.push(v),_.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(_,f),(function(v,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)})(_,f),_.push(i.outputColorSpace)),_.push(f.customProgramCacheKey),_.join()},getUniforms:function(f){let _=x[f.type],v;if(_){let y=tn[_];v=ud.clone(y.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,_){let v;for(let y=0,R=h.length;y<R;y++){let A=h[y];if(A.cacheKey===_){v=A,++v.usedTimes;break}}return v===void 0&&(v=new Ep(i,_,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let _=h.indexOf(f);h[_]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function Ap(){let i=new WeakMap;return{get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Rp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _h(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Rp),n.length>1&&n.sort(o||vh),r.length>1&&r.sort(o||vh)}}}function Cp(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new _h,i.set(e,[r])):t>=n.length?(r=new _h,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Lp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new be};break;case"SpotLight":t={position:new M,direction:new M,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new M,halfWidth:new M,halfHeight:new M}}return i[e.id]=t,t}}}var Pp=0;function Ip(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Up(i,e){let t=new Lp,n=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new M);let s=new M,a=new Ae,o=new Ae;return{setup:function(l,c){let h=0,u=0,d=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,_=0,v=0,y=0,R=0,A=0,E=0;l.sort(Ip);let D=c===!0?Math.PI:1;for(let P=0,q=l.length;P<q;P++){let C=l[P],H=C.color,W=C.intensity,ae=C.distance,me=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*W*D,u+=H.g*W*D,d+=H.b*W*D;else if(C.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(C.sh.coefficients[te],W);E++}else if(C.isDirectionalLight){let te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*D),C.castShadow){let Z=C.shadow,$=n.get(C);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,r.directionalShadow[p]=$,r.directionalShadowMap[p]=me,r.directionalShadowMatrix[p]=C.shadow.matrix,_++}r.directional[p]=te,p++}else if(C.isSpotLight){let te=t.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(H).multiplyScalar(W*D),te.distance=ae,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,r.spot[x]=te;let Z=C.shadow;if(C.map&&(r.spotLightMap[R]=C.map,R++,Z.updateMatrices(C),C.castShadow&&A++),r.spotLightMatrix[x]=Z.matrix,C.castShadow){let $=n.get(C);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,r.spotShadow[x]=$,r.spotShadowMap[x]=me,y++}x++}else if(C.isRectAreaLight){let te=t.get(C);te.color.copy(H).multiplyScalar(W),te.halfWidth.set(.5*C.width,0,0),te.halfHeight.set(0,.5*C.height,0),r.rectArea[g]=te,g++}else if(C.isPointLight){let te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*D),te.distance=C.distance,te.decay=C.decay,C.castShadow){let Z=C.shadow,$=n.get(C);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=me,r.pointShadowMatrix[m]=C.shadow.matrix,v++}r.point[m]=te,m++}else if(C.isHemisphereLight){let te=t.get(C);te.skyColor.copy(C.color).multiplyScalar(W*D),te.groundColor.copy(C.groundColor).multiplyScalar(W*D),r.hemi[f]=te,f++}}g>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let N=r.hash;N.directionalLength===p&&N.pointLength===m&&N.spotLength===x&&N.rectAreaLength===g&&N.hemiLength===f&&N.numDirectionalShadows===_&&N.numPointShadows===v&&N.numSpotShadows===y&&N.numSpotMaps===R&&N.numLightProbes===E||(r.directional.length=p,r.spot.length=x,r.rectArea.length=g,r.point.length=m,r.hemi.length=f,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=y+R-A,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=E,N.directionalLength=p,N.pointLength=m,N.spotLength=x,N.rectAreaLength=g,N.hemiLength=f,N.numDirectionalShadows=_,N.numPointShadows=v,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=E,r.version=Pp++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,m=0,x=c.matrixWorldInverse;for(let g=0,f=l.length;g<f;g++){let _=l[g];if(_.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),h++}else if(_.isSpotLight){let v=r.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(_.isRectAreaLight){let v=r.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),o.identity(),a.copy(_.matrixWorld),a.premultiply(x),o.extractRotation(a),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),u++}else if(_.isHemisphereLight){let v=r.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),m++}}},state:r}}function xh(i,e){let t=new Up(i,e),n=[],r=[];return{init:function(){n.length=0,r.length=0},state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){r.push(s)}}}function Dp(i,e){let t=new WeakMap;return{get:function(n,r=0){let s=t.get(n),a;return s===void 0?(a=new xh(i,e),t.set(n,[a])):r>=s.length?(a=new xh(i,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var No=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Np(i,e,t){let n=new $i,r=new le,s=new le,a=new Ve,o=new No({depthPacking:3201}),l=new Oo,c={},h=t.maxTextureSize,u={[Fn]:Lt,[Lt]:Fn,2:2},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new $e;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let f=this.type;function _(A,E){let D=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Tn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,D,p,x,null)}function v(A,E,D,N){let P=null,q=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(q!==void 0)P=q;else if(P=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let C=P.uuid,H=E.uuid,W=c[C];W===void 0&&(W={},c[C]=W);let ae=W[H];ae===void 0&&(ae=P.clone(),W[H]=ae,E.addEventListener("dispose",R)),P=ae}return P.visible=E.visible,P.wireframe=E.wireframe,P.side=N===yn?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:u[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,D.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(i.properties.get(P).light=D),P}function y(A,E,D,N,P){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let C=e.update(A),H=A.material;if(Array.isArray(H)){let W=C.groups;for(let ae=0,me=W.length;ae<me;ae++){let te=W[ae],Z=H[te.materialIndex];if(Z&&Z.visible){let $=v(A,Z,N,P);A.onBeforeShadow(i,A,E,D,C,$,te),i.renderBufferDirect(D,null,C,$,A,te),A.onAfterShadow(i,A,E,D,C,$,te)}}}else if(H.visible){let W=v(A,H,N,P);A.onBeforeShadow(i,A,E,D,C,W,null),i.renderBufferDirect(D,null,C,W,A,null),A.onAfterShadow(i,A,E,D,C,W,null)}}let q=A.children;for(let C=0,H=q.length;C<H;C++)y(q[C],E,D,N,P)}function R(A){A.target.removeEventListener("dispose",R);for(let E in c){let D=c[E],N=A.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}this.render=function(A,E,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let N=i.getRenderTarget(),P=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),C=i.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let H=f!==yn&&this.type===yn,W=f===yn&&this.type!==yn;for(let ae=0,me=A.length;ae<me;ae++){let te=A[ae],Z=te.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let $=Z.getFrameExtents();if(r.multiply($),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,Z.mapSize.y=s.y)),Z.map===null||H===!0||W===!0){let j=this.type!==yn?{minFilter:mt,magFilter:mt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Tn(r.x,r.y,j),Z.map.texture.name=te.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let se=Z.getViewportCount();for(let j=0;j<se;j++){let oe=Z.getViewport(j);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),C.viewport(a),Z.updateMatrices(te,j),n=Z.getFrustum(),y(E,D,Z.camera,te,this.type)}Z.isPointLightShadow!==!0&&this.type===yn&&_(Z,D),Z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(N,P,q)}}function Op(i,e,t){let n=t.isWebGL2,r=new function(){let b=!1,ne=new Ve,z=null,k=new Ve(0,0,0,0);return{setMask:function(ie){z===ie||b||(i.colorMask(ie,ie,ie,ie),z=ie)},setLocked:function(ie){b=ie},setClear:function(ie,he,pe,fe,Se){Se===!0&&(ie*=fe,he*=fe,pe*=fe),ne.set(ie,he,pe,fe),k.equals(ne)===!1&&(i.clearColor(ie,he,pe,fe),k.copy(ne))},reset:function(){b=!1,z=null,k.set(-1,0,0,0)}}},s=new function(){let b=!1,ne=null,z=null,k=null;return{setTest:function(ie){ie?G(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(ie){ne===ie||b||(i.depthMask(ie),ne=ie)},setFunc:function(ie){if(z!==ie){switch(ie){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}z=ie}},setLocked:function(ie){b=ie},setClear:function(ie){k!==ie&&(i.clearDepth(ie),k=ie)},reset:function(){b=!1,ne=null,z=null,k=null}}},a=new function(){let b=!1,ne=null,z=null,k=null,ie=null,he=null,pe=null,fe=null,Se=null;return{setTest:function(ve){b||(ve?G(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(ve){ne===ve||b||(i.stencilMask(ve),ne=ve)},setFunc:function(ve,Oe,ge){z===ve&&k===Oe&&ie===ge||(i.stencilFunc(ve,Oe,ge),z=ve,k=Oe,ie=ge)},setOp:function(ve,Oe,ge){he===ve&&pe===Oe&&fe===ge||(i.stencilOp(ve,Oe,ge),he=ve,pe=Oe,fe=ge)},setLocked:function(ve){b=ve},setClear:function(ve){Se!==ve&&(i.clearStencil(ve),Se=ve)},reset:function(){b=!1,ne=null,z=null,k=null,ie=null,he=null,pe=null,fe=null,Se=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,m=!1,x=null,g=null,f=null,_=null,v=null,y=null,R=null,A=new be(0,0,0),E=0,D=!1,N=null,P=null,q=null,C=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,me=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(te)[1]),ae=me>=1):te.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ae=me>=2);let Z=null,$={},se=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),oe=new Ve().fromArray(se),w=new Ve().fromArray(j);function S(b,ne,z,k){let ie=new Uint8Array(4),he=i.createTexture();i.bindTexture(b,he),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<z;pe++)!n||b!==i.TEXTURE_3D&&b!==i.TEXTURE_2D_ARRAY?i.texImage2D(ne+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage3D(ne,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,ie);return he}let O={};function G(b){c[b]!==!0&&(i.enable(b),c[b]=!0)}function U(b){c[b]!==!1&&(i.disable(b),c[b]=!1)}O[i.TEXTURE_2D]=S(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=S(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(O[i.TEXTURE_2D_ARRAY]=S(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=S(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),G(i.DEPTH_TEST),s.setFunc(3),F(!1),Q(1),G(i.CULL_FACE),I(0);let B={[ii]:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};if(n)B[103]=i.MIN,B[104]=i.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(B[103]=b.MIN_EXT,B[104]=b.MAX_EXT)}let L={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,[vo]:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function I(b,ne,z,k,ie,he,pe,fe,Se,ve){if(b!==0){if(m===!1&&(G(i.BLEND),m=!0),b===5)ie=ie||ne,he=he||z,pe=pe||k,ne===g&&ie===v||(i.blendEquationSeparate(B[ne],B[ie]),g=ne,v=ie),z===f&&k===_&&he===y&&pe===R||(i.blendFuncSeparate(L[z],L[k],L[he],L[pe]),f=z,_=k,y=he,R=pe),fe.equals(A)!==!1&&Se===E||(i.blendColor(fe.r,fe.g,fe.b,Se),A.copy(fe),E=Se),x=b,D=!1;else if(b!==x||ve!==D){if(g===ii&&v===ii||(i.blendEquation(i.FUNC_ADD),g=ii,v=ii),ve)switch(b){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}f=null,_=null,y=null,R=null,A.set(0,0,0),E=0,x=b,D=ve}}else m===!0&&(U(i.BLEND),m=!1)}function F(b){N!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),N=b)}function Q(b){b!==0?(G(i.CULL_FACE),b!==P&&(b===1?i.cullFace(i.BACK):b===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),P=b}function K(b,ne,z){b?(G(i.POLYGON_OFFSET_FILL),C===ne&&H===z||(i.polygonOffset(ne,z),C=ne,H=z)):U(i.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:G,disable:U,bindFramebuffer:function(b,ne){return h[b]!==ne&&(i.bindFramebuffer(b,ne),h[b]=ne,n&&(b===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),b===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne)),!0)},drawBuffers:function(b,ne){let z=d,k=!1;if(b)if(z=u.get(ne),z===void 0&&(z=[],u.set(ne,z)),b.isWebGLMultipleRenderTargets){let ie=b.texture;if(z.length!==ie.length||z[0]!==i.COLOR_ATTACHMENT0){for(let he=0,pe=ie.length;he<pe;he++)z[he]=i.COLOR_ATTACHMENT0+he;z.length=ie.length,k=!0}}else z[0]!==i.COLOR_ATTACHMENT0&&(z[0]=i.COLOR_ATTACHMENT0,k=!0);else z[0]!==i.BACK&&(z[0]=i.BACK,k=!0);k&&(t.isWebGL2?i.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(b){return p!==b&&(i.useProgram(b),p=b,!0)},setBlending:I,setMaterial:function(b,ne){b.side===2?U(i.CULL_FACE):G(i.CULL_FACE);let z=b.side===Lt;ne&&(z=!z),F(z),b.blending===1&&b.transparent===!1?I(0):I(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);let k=b.stencilWrite;a.setTest(k),k&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),K(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:Q,setLineWidth:function(b){b!==q&&(ae&&i.lineWidth(b),q=b)},setPolygonOffset:K,setScissorTest:function(b){b?G(i.SCISSOR_TEST):U(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+W-1),Z!==b&&(i.activeTexture(b),Z=b)},bindTexture:function(b,ne,z){z===void 0&&(z=Z===null?i.TEXTURE0+W-1:Z);let k=$[z];k===void 0&&(k={type:void 0,texture:void 0},$[z]=k),k.type===b&&k.texture===ne||(Z!==z&&(i.activeTexture(z),Z=z),i.bindTexture(b,ne||O[b]),k.type=b,k.texture=ne)},unbindTexture:function(){let b=$[Z];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,ne){let z=l.get(ne);z===void 0&&(z=new WeakMap,l.set(ne,z));let k=z.get(b);k===void 0&&(k=i.getUniformBlockIndex(ne,b.name),z.set(b,k))},uniformBlockBinding:function(b,ne){let z=l.get(ne).get(b);o.get(ne)!==z&&(i.uniformBlockBinding(ne,z,b.__bindingPointIndex),o.set(ne,z))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){oe.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),oe.copy(b))},viewport:function(b){w.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),w.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,$={},h={},u=new WeakMap,d=[],p=null,m=!1,x=null,g=null,f=null,_=null,v=null,y=null,R=null,A=new be(0,0,0),E=0,D=!1,N=null,P=null,q=null,C=null,H=null,oe.set(0,0,i.canvas.width,i.canvas.height),w.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}}}function Fp(i,e,t,n,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,S){return p?new OffscreenCanvas(w,S):Os("canvas")}function x(w,S,O,G){let U=1;if((w.width>G||w.height>G)&&(U=G/Math.max(w.width,w.height)),U<1||S===!0){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let B=S?Ns:Math.floor,L=B(U*w.width),I=B(U*w.height);u===void 0&&(u=m(L,I));let F=O?m(L,I):u;return F.width=L,F.height=I,F.getContext("2d").drawImage(w,0,0,L,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+L+"x"+I+")."),F}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function g(w){return Eo(w.width)&&Eo(w.height)}function f(w,S){return w.generateMipmaps&&S&&w.minFilter!==mt&&w.minFilter!==Dt}function _(w){i.generateMipmap(w)}function v(w,S,O,G,U=!1){if(o===!1)return S;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=S;if(S===i.RED&&(O===i.FLOAT&&(B=i.R32F),O===i.HALF_FLOAT&&(B=i.R16F),O===i.UNSIGNED_BYTE&&(B=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.R8UI),O===i.UNSIGNED_SHORT&&(B=i.R16UI),O===i.UNSIGNED_INT&&(B=i.R32UI),O===i.BYTE&&(B=i.R8I),O===i.SHORT&&(B=i.R16I),O===i.INT&&(B=i.R32I)),S===i.RG&&(O===i.FLOAT&&(B=i.RG32F),O===i.HALF_FLOAT&&(B=i.RG16F),O===i.UNSIGNED_BYTE&&(B=i.RG8)),S===i.RGBA){let L=U?Ps:ke.getTransfer(G);O===i.FLOAT&&(B=i.RGBA32F),O===i.HALF_FLOAT&&(B=i.RGBA16F),O===i.UNSIGNED_BYTE&&(B=L===We?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return B!==i.R16F&&B!==i.R32F&&B!==i.RG16F&&B!==i.RG32F&&B!==i.RGBA16F&&B!==i.RGBA32F||e.get("EXT_color_buffer_float"),B}function y(w,S,O){return f(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==mt&&w.minFilter!==Dt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){return w===mt||w===ic||w===dr?i.NEAREST:i.LINEAR}function A(w){let S=w.target;S.removeEventListener("dispose",A),(function(O){let G=n.get(O);if(G.__webglInit===void 0)return;let U=O.source,B=d.get(U);if(B){let L=B[G.__cacheKey];L.usedTimes--,L.usedTimes===0&&D(O),Object.keys(B).length===0&&d.delete(U)}n.remove(O)})(S),S.isVideoTexture&&h.delete(S)}function E(w){let S=w.target;S.removeEventListener("dispose",E),(function(O){let G=O.texture,U=n.get(O),B=n.get(G);if(B.__webglTexture!==void 0&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(U.__webglFramebuffer[L]))for(let I=0;I<U.__webglFramebuffer[L].length;I++)i.deleteFramebuffer(U.__webglFramebuffer[L][I]);else i.deleteFramebuffer(U.__webglFramebuffer[L]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[L])}else{if(Array.isArray(U.__webglFramebuffer))for(let L=0;L<U.__webglFramebuffer.length;L++)i.deleteFramebuffer(U.__webglFramebuffer[L]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let L=0;L<U.__webglColorRenderbuffer.length;L++)U.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[L]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let L=0,I=G.length;L<I;L++){let F=n.get(G[L]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(G[L])}n.remove(G),n.remove(O)})(S)}function D(w){let S=n.get(w);i.deleteTexture(S.__webglTexture);let O=w.source;delete d.get(O)[S.__cacheKey],a.memory.textures--}let N=0;function P(w,S){let O=n.get(w);if(w.isVideoTexture&&(function(G){let U=a.render.frame;h.get(G)!==U&&(h.set(G,U),G.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(G.complete!==!1)return void me(O,w,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}let q={[qi]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},C={[mt]:i.NEAREST,[ic]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},H={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function W(w,S,O){if(S.type!==bn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Dt&&S.magFilter!==Ua&&S.magFilter!==dr&&S.magFilter!==zi&&S.minFilter!==Dt&&S.minFilter!==Ua&&S.minFilter!==dr&&S.minFilter!==zi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(i.texParameteri(w,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,q[S.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,C[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,C[S.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),S.wrapS===Sn&&S.wrapT===Sn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==mt&&S.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let G=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===mt||S.minFilter!==dr&&S.minFilter!==zi||S.type===bn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ae(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));let G=S.source,U=d.get(G);U===void 0&&(U={},d.set(G,U));let B=(function(L){let I=[];return I.push(L.wrapS),I.push(L.wrapT),I.push(L.wrapR||0),I.push(L.magFilter),I.push(L.minFilter),I.push(L.anisotropy),I.push(L.internalFormat),I.push(L.format),I.push(L.type),I.push(L.generateMipmaps),I.push(L.premultiplyAlpha),I.push(L.flipY),I.push(L.unpackAlignment),I.push(L.colorSpace),I.join()})(S);if(B!==w.__cacheKey){U[B]===void 0&&(U[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),U[B].usedTimes++;let L=U[w.__cacheKey];L!==void 0&&(U[w.__cacheKey].usedTimes--,L.usedTimes===0&&D(S)),w.__cacheKey=B,w.__webglTexture=U[B].texture}return O}function me(w,S,O){let G=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=i.TEXTURE_3D);let U=ae(w,S),B=S.source;t.bindTexture(G,w.__webglTexture,i.TEXTURE0+O);let L=n.get(B);if(B.version!==L.__version||U===!0){t.activeTexture(i.TEXTURE0+O);let I=ke.getPrimaries(ke.workingColorSpace),F=S.colorSpace===rn?null:ke.getPrimaries(S.colorSpace),Q=S.colorSpace===rn||I===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let K=(function(ge){return!o&&(ge.wrapS!==Sn||ge.wrapT!==Sn||ge.minFilter!==mt&&ge.minFilter!==Dt)})(S)&&g(S.image)===!1,b=x(S.image,K,!1,r.maxTextureSize);b=oe(S,b);let ne=g(b)||o,z=s.convert(S.format,S.colorSpace),k,ie=s.convert(S.type),he=v(S.internalFormat,z,ie,S.colorSpace,S.isVideoTexture);W(G,S,ne);let pe=S.mipmaps,fe=o&&S.isVideoTexture!==!0&&he!==Xh,Se=L.__version===void 0||U===!0,ve=B.dataReady,Oe=y(S,b,ne);if(S.isDepthTexture)he=i.DEPTH_COMPONENT,o?he=S.type===bn?i.DEPTH_COMPONENT32F:S.type===Dn?i.DEPTH_COMPONENT24:S.type===li?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT16:S.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ci&&he===i.DEPTH_COMPONENT&&S.type!==Sl&&S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Dn,ie=s.convert(S.type)),S.format===Yi&&he===i.DEPTH_COMPONENT&&(he=i.DEPTH_STENCIL,S.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=li,ie=s.convert(S.type))),Se&&(fe?t.texStorage2D(i.TEXTURE_2D,1,he,b.width,b.height):t.texImage2D(i.TEXTURE_2D,0,he,b.width,b.height,0,z,ie,null));else if(S.isDataTexture)if(pe.length>0&&ne){fe&&Se&&t.texStorage2D(i.TEXTURE_2D,Oe,he,pe[0].width,pe[0].height);for(let ge=0,ze=pe.length;ge<ze;ge++)k=pe[ge],fe?ve&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,k.width,k.height,z,ie,k.data):t.texImage2D(i.TEXTURE_2D,ge,he,k.width,k.height,0,z,ie,k.data);S.generateMipmaps=!1}else fe?(Se&&t.texStorage2D(i.TEXTURE_2D,Oe,he,b.width,b.height),ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,ie,b.data)):t.texImage2D(i.TEXTURE_2D,0,he,b.width,b.height,0,z,ie,b.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){fe&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,he,pe[0].width,pe[0].height,b.depth);for(let ge=0,ze=pe.length;ge<ze;ge++)k=pe[ge],S.format!==nn?z!==null?fe?ve&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,k.width,k.height,b.depth,z,k.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,he,k.width,k.height,b.depth,0,k.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,k.width,k.height,b.depth,z,ie,k.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,he,k.width,k.height,b.depth,0,z,ie,k.data)}else{fe&&Se&&t.texStorage2D(i.TEXTURE_2D,Oe,he,pe[0].width,pe[0].height);for(let ge=0,ze=pe.length;ge<ze;ge++)k=pe[ge],S.format!==nn?z!==null?fe?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,k.width,k.height,z,k.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,he,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ve&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,k.width,k.height,z,ie,k.data):t.texImage2D(i.TEXTURE_2D,ge,he,k.width,k.height,0,z,ie,k.data)}else if(S.isDataArrayTexture)fe?(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,he,b.width,b.height,b.depth),ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,z,ie,b.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,b.width,b.height,b.depth,0,z,ie,b.data);else if(S.isData3DTexture)fe?(Se&&t.texStorage3D(i.TEXTURE_3D,Oe,he,b.width,b.height,b.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,z,ie,b.data)):t.texImage3D(i.TEXTURE_3D,0,he,b.width,b.height,b.depth,0,z,ie,b.data);else if(S.isFramebufferTexture){if(Se)if(fe)t.texStorage2D(i.TEXTURE_2D,Oe,he,b.width,b.height);else{let ge=b.width,ze=b.height;for(let tt=0;tt<Oe;tt++)t.texImage2D(i.TEXTURE_2D,tt,he,ge,ze,0,z,ie,null),ge>>=1,ze>>=1}}else if(pe.length>0&&ne){fe&&Se&&t.texStorage2D(i.TEXTURE_2D,Oe,he,pe[0].width,pe[0].height);for(let ge=0,ze=pe.length;ge<ze;ge++)k=pe[ge],fe?ve&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,z,ie,k):t.texImage2D(i.TEXTURE_2D,ge,he,z,ie,k);S.generateMipmaps=!1}else fe?(Se&&t.texStorage2D(i.TEXTURE_2D,Oe,he,b.width,b.height),ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z,ie,b)):t.texImage2D(i.TEXTURE_2D,0,he,z,ie,b);f(S,ne)&&_(G),L.__version=B.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function te(w,S,O,G,U,B){let L=s.convert(O.format,O.colorSpace),I=s.convert(O.type),F=v(O.internalFormat,L,I,O.colorSpace);if(!n.get(S).__hasExternalTextures){let Q=Math.max(1,S.width>>B),K=Math.max(1,S.height>>B);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,B,F,Q,K,S.depth,0,L,I,null):t.texImage2D(U,B,F,Q,K,0,L,I,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),j(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,U,n.get(O).__webglTexture,0,se(S)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,U,n.get(O).__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(w,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let G=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||j(S)){let U=S.depthTexture;U&&U.isDepthTexture&&(U.type===bn?G=i.DEPTH_COMPONENT32F:U.type===Dn&&(G=i.DEPTH_COMPONENT24));let B=se(S);j(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,G,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,B,G,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,G,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){let G=se(S);O&&j(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let U=0;U<G.length;U++){let B=G[U],L=s.convert(B.format,B.colorSpace),I=s.convert(B.type),F=v(B.internalFormat,L,I,B.colorSpace),Q=se(S);O&&j(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,F,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,F,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,F,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(w){let S=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(G,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,G),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),P(U.depthTexture,0);let B=n.get(U.depthTexture).__webglTexture,L=se(U);if(U.depthTexture.format===ci)j(U)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else{if(U.depthTexture.format!==Yi)throw new Error("Unknown depthTexture format");j(U)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0)}})(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]=i.createRenderbuffer(),Z(S.__webglDepthbuffer[G],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Z(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(w){return Math.min(r.maxSamples,w.samples)}function j(w){let S=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function oe(w,S){let O=w.colorSpace,G=w.format,U=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===So||O!==En&&O!==rn&&(ke.getTransfer(O)===We?o===!1?e.has("EXT_sRGB")===!0&&G===nn?(w.format=So,w.minFilter=Dt,w.generateMipmaps=!1):S=Fs.sRGBToLinear(S):G===nn&&U===oi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=function(){let w=N;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),N+=1,w},this.resetTextureUnits=function(){N=0},this.setTexture2D=P,this.setTexture2DArray=function(w,S){let O=n.get(w);w.version>0&&O.__version!==w.version?me(O,w,S):t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)},this.setTexture3D=function(w,S){let O=n.get(w);w.version>0&&O.__version!==w.version?me(O,w,S):t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)},this.setTextureCube=function(w,S){let O=n.get(w);w.version>0&&O.__version!==w.version?(function(G,U,B){if(U.image.length!==6)return;let L=ae(G,U),I=U.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+B);let F=n.get(I);if(I.version!==F.__version||L===!0){t.activeTexture(i.TEXTURE0+B);let Q=ke.getPrimaries(ke.workingColorSpace),K=U.colorSpace===rn?null:ke.getPrimaries(U.colorSpace),b=U.colorSpace===rn||Q===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let ne=U.isCompressedTexture||U.image[0].isCompressedTexture,z=U.image[0]&&U.image[0].isDataTexture,k=[];for(let _e=0;_e<6;_e++)k[_e]=ne||z?z?U.image[_e].image:U.image[_e]:x(U.image[_e],!1,!0,r.maxCubemapSize),k[_e]=oe(U,k[_e]);let ie=k[0],he=g(ie)||o,pe=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),Se=v(U.internalFormat,pe,fe,U.colorSpace),ve=o&&U.isVideoTexture!==!0,Oe=F.__version===void 0||L===!0,ge=I.dataReady,ze,tt=y(U,ie,he);if(W(i.TEXTURE_CUBE_MAP,U,he),ne){ve&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Se,ie.width,ie.height);for(let _e=0;_e<6;_e++){ze=k[_e].mipmaps;for(let Fe=0;Fe<ze.length;Fe++){let Ge=ze[Fe];U.format!==nn?pe!==null?ve?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,Ge.width,Ge.height,pe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,Se,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,Ge.width,Ge.height,pe,fe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,Se,Ge.width,Ge.height,0,pe,fe,Ge.data)}}}else{ze=U.mipmaps,ve&&Oe&&(ze.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Se,k[0].width,k[0].height));for(let _e=0;_e<6;_e++)if(z){ve?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,k[_e].width,k[_e].height,pe,fe,k[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Se,k[_e].width,k[_e].height,0,pe,fe,k[_e].data);for(let Fe=0;Fe<ze.length;Fe++){let Ge=ze[Fe].image[_e].image;ve?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,Ge.width,Ge.height,pe,fe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,Se,Ge.width,Ge.height,0,pe,fe,Ge.data)}}else{ve?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,pe,fe,k[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Se,pe,fe,k[_e]);for(let Fe=0;Fe<ze.length;Fe++){let Ge=ze[Fe];ve?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,pe,fe,Ge.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,Se,pe,fe,Ge.image[_e])}}}f(U,he)&&_(i.TEXTURE_CUBE_MAP),F.__version=I.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version})(O,w,S):t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)},this.rebindTextures=function(w,S,O){let G=n.get(w);S!==void 0&&te(G.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&$(w)},this.setupRenderTarget=function(w){let S=w.texture,O=n.get(w),G=n.get(S);w.addEventListener("dispose",E),w.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=S.version,a.memory.textures++);let U=w.isWebGLCubeRenderTarget===!0,B=w.isWebGLMultipleRenderTargets===!0,L=g(w)||o;if(U){O.__webglFramebuffer=[];for(let I=0;I<6;I++)if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[I]=[];for(let F=0;F<S.mipmaps.length;F++)O.__webglFramebuffer[I][F]=i.createFramebuffer()}else O.__webglFramebuffer[I]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let I=0;I<S.mipmaps.length;I++)O.__webglFramebuffer[I]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(B)if(r.drawBuffers){let I=w.texture;for(let F=0,Q=I.length;F<Q;F++){let K=n.get(I[F]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&j(w)===!1){let I=B?S:[S];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<I.length;F++){let Q=I[F];O.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[F]);let K=s.convert(Q.format,Q.colorSpace),b=s.convert(Q.type),ne=v(Q.internalFormat,K,b,Q.colorSpace,w.isXRRenderTarget===!0),z=se(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,z,ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,O.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),W(i.TEXTURE_CUBE_MAP,S,L);for(let I=0;I<6;I++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)te(O.__webglFramebuffer[I][F],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,F);else te(O.__webglFramebuffer[I],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);f(S,L)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){let I=w.texture;for(let F=0,Q=I.length;F<Q;F++){let K=I[F],b=n.get(K);t.bindTexture(i.TEXTURE_2D,b.__webglTexture),W(i.TEXTURE_2D,K,L),te(O.__webglFramebuffer,w,K,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,0),f(K,L)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let I=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?I=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,G.__webglTexture),W(I,S,L),o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)te(O.__webglFramebuffer[F],w,S,i.COLOR_ATTACHMENT0,I,F);else te(O.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,I,0);f(S,L)&&_(I),t.unbindTexture()}w.depthBuffer&&$(w)},this.updateRenderTargetMipmap=function(w){let S=g(w)||o,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let G=0,U=O.length;G<U;G++){let B=O[G];if(f(B,S)){let L=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,I=n.get(B).__webglTexture;t.bindTexture(L,I),_(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&j(w)===!1){let S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,G=w.height,U=i.COLOR_BUFFER_BIT,B=[],L=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let Q=0;Q<S.length;Q++)t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let Q=0;Q<S.length;Q++){B.push(i.COLOR_ATTACHMENT0+Q),w.depthBuffer&&B.push(L);let K=I.__ignoreDepthValues!==void 0&&I.__ignoreDepthValues;if(K===!1&&(w.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),F&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,I.__webglColorRenderbuffer[Q]),K===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[L]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])),F){let b=n.get(S[Q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,b,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,U,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let Q=0;Q<S.length;Q++){t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,I.__webglColorRenderbuffer[Q]);let K=n.get(S[Q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=te,this.useMultisampledRTT=j}function Bp(i,e,t){let n=t.isWebGL2;return{convert:function(r,s=""){let a,o=ke.getTransfer(s);if(r===oi)return i.UNSIGNED_BYTE;if(r===Hh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return i.BYTE;if(r===1011)return i.SHORT;if(r===Sl)return i.UNSIGNED_SHORT;if(r===zh)return i.INT;if(r===Dn)return i.UNSIGNED_INT;if(r===bn)return i.FLOAT;if(r===Er)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return i.ALPHA;if(r===nn)return i.RGBA;if(r===1024)return i.LUMINANCE;if(r===1025)return i.LUMINANCE_ALPHA;if(r===ci)return i.DEPTH_COMPONENT;if(r===Yi)return i.DEPTH_STENCIL;if(r===So)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return i.RED;if(r===kh)return i.RED_INTEGER;if(r===1030)return i.RG;if(r===Vh)return i.RG_INTEGER;if(r===Wh)return i.RGBA_INTEGER;if(r===Da||r===Na||r===Oa||r===Fa)if(o===We){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===Da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===Da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===rc||r===sc||r===ac||r===oc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===rc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ac)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===Xh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lc||r===cc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===lc)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===hc||r===uc||r===dc||r===pc||r===mc||r===fc||r===gc||r===vc||r===_c||r===xc||r===yc||r===Mc||r===Sc||r===bc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===hc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_c)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===Ba||r===Ec||r===Tc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===Ba)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ec)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===wc||r===Ac||r===Rc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===Ba)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===li?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}}}var Fo=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zp={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Nt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,r=new on({extensions:{fragDepth:!0},vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new He(new Rr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},zo=class extends Bn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,x=new Bo,g=t.getContextAttributes(),f=null,_=null,v=[],y=[],R=new le,A=null,E=new Et;E.layers.enable(1),E.viewport=new Ve;let D=new Et;D.layers.enable(2),D.viewport=new Ve;let N=[E,D],P=new Fo;P.layers.enable(1),P.layers.enable(2);let q=null,C=null;function H(j){let oe=y.indexOf(j.inputSource);if(oe===-1)return;let w=v[oe];w!==void 0&&(w.update(j.inputSource,j.frame,c||a),w.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ae);for(let j=0;j<v.length;j++){let oe=y[j];oe!==null&&(y[j]=null,v[j].disconnect(oe))}q=null,C=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,_=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function ae(j){for(let oe=0;oe<j.removed.length;oe++){let w=j.removed[oe],S=y.indexOf(w);S>=0&&(y[S]=null,v[S].disconnect(w))}for(let oe=0;oe<j.added.length;oe++){let w=j.added[oe],S=y.indexOf(w);if(S===-1){for(let G=0;G<v.length;G++){if(G>=y.length){y.push(w),S=G;break}if(y[G]===null){y[G]=w,S=G;break}}if(S===-1)break}let O=v[S];O&&O.connect(w)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=v[j];return oe===void 0&&(oe=new yr,v[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=v[j];return oe===void 0&&(oe=new yr,v[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=v[j];return oe===void 0&&(oe=new yr,v[j]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Tn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,w=null,S=null;g.depth&&(S=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?Yi:ci,w=g.stencil?li:Dn);let O={colorFormat:t.RGBA8,depthFormat:S,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(O),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Tn(d.textureWidth,d.textureHeight,{format:nn,type:oi,depthTexture:new Xs(d.textureWidth,d.textureHeight,w,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(_).__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let me=new M,te=new M;function Z(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),P.near=D.near=E.near=j.near,P.far=D.far=E.far=j.far,q===P.near&&C===P.far||(r.updateRenderState({depthNear:P.near,depthFar:P.far}),q=P.near,C=P.far,E.near=q,E.far=C,D.near=q,D.far=C,E.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());let oe=j.parent,w=P.cameras;Z(P,oe);for(let S=0;S<w.length;S++)Z(w[S],oe);w.length===2?(function(S,O,G){me.setFromMatrixPosition(O.matrixWorld),te.setFromMatrixPosition(G.matrixWorld);let U=me.distanceTo(te),B=O.projectionMatrix.elements,L=G.projectionMatrix.elements,I=B[14]/(B[10]-1),F=B[14]/(B[10]+1),Q=(B[9]+1)/B[5],K=(B[9]-1)/B[5],b=(B[8]-1)/B[0],ne=(L[8]+1)/L[0],z=I*b,k=I*ne,ie=U/(-b+ne),he=ie*-b;O.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(he),S.translateZ(ie),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert();let pe=I+ie,fe=F+ie,Se=z-he,ve=k+(U-he),Oe=Q*F/fe*pe,ge=K*F/fe*pe;S.projectionMatrix.makePerspective(Se,ve,Oe,ge,pe,fe),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()})(P,E,D):P.projectionMatrix.copy(E.projectionMatrix),(function(S,O,G){G===null?S.matrix.copy(O.matrixWorld):(S.matrix.copy(G.matrixWorld),S.matrix.invert(),S.matrix.multiply(O.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(O.projectionMatrix),S.projectionMatrixInverse.copy(O.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*Tr*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(j,P,oe)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null};let $=null,se=new Jh;se.setAnimationLoop((function(j,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){let w=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let S=!1;w.length!==P.cameras.length&&(P.cameras.length=0,S=!0);for(let G=0;G<w.length;G++){let U=w[G],B=null;if(p!==null)B=p.getViewport(U);else{let I=u.getViewSubImage(d,U);B=I.viewport,G===0&&(e.setRenderTargetTextures(_,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(_))}let L=N[G];L===void 0&&(L=new Et,L.layers.enable(G),L.viewport=new Ve,N[G]=L),L.matrix.fromArray(U.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(U.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(B.x,B.y,B.width,B.height),G===0&&(P.matrix.copy(L.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),S===!0&&P.cameras.push(L)}let O=r.enabledFeatures;if(O&&O.includes("depth-sensing")){let G=u.getDepthInformation(w[0]);G&&G.isValid&&G.texture&&x.init(e,G,r.renderState)}}for(let w=0;w<v.length;w++){let S=y[w],O=v[w];S!==null&&O!==void 0&&O.update(S,oe,c||a)}x.render(e,P),$&&$(j,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null})),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}};function Hp(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Lt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Lt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=i._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Zh(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Gp(i,e,t,n){let r={},s={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let x=u.value,g=d+"_"+p;if(m[g]===void 0)return m[g]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let f=m[g];if(typeof x=="number"||typeof x=="boolean"){if(f!==x)return m[g]=x,!0}else if(f.equals(x)===!1)return f.copy(x),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(g){let f=g.uniforms,_=0,v=16;for(let R=0,A=f.length;R<A;R++){let E=Array.isArray(f[R])?f[R]:[f[R]];for(let D=0,N=E.length;D<N;D++){let P=E[D],q=Array.isArray(P.value)?P.value:[P.value];for(let C=0,H=q.length;C<H;C++){let W=c(q[C]),ae=_%v;ae!==0&&v-ae<W.boundary&&(_+=v-ae),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=W.storage}}}let y=_%v;y>0&&(_+=v-y),g.__size=_,g.__cache={}})(u),p=(function(g){let f=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=f;let _=i.createBuffer(),v=g.__size,y=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,f,_),_})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let x=e.render.frame;s[u.id]!==x&&((function(g){let f=r[g.id],_=g.uniforms,v=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,f);for(let y=0,R=_.length;y<R;y++){let A=Array.isArray(_[y])?_[y]:[_[y]];for(let E=0,D=A.length;E<D;E++){let N=A[E];if(l(N,y,E,v)===!0){let P=N.__offset,q=Array.isArray(N.value)?N.value:[N.value],C=0;for(let H=0;H<q.length;H++){let W=q[H],ae=c(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,P+C,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,C),C+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var Cr=class{constructor(e={}){let{canvas:t=Ju(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),x=null,g=null,f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;let v=this,y=!1,R=0,A=0,E=null,D=-1,N=null,P=new Ve,q=new Ve,C=null,H=new be(0),W=0,ae=t.width,me=t.height,te=1,Z=null,$=null,se=new Ve(0,0,ae,me),j=new Ve(0,0,ae,me),oe=!1,w=new $i,S=!1,O=!1,G=null,U=new Ae,B=new le,L=new M,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return E===null?te:1}let Q,K,b,ne,z,k,ie,he,pe,fe,Se,ve,Oe,ge,ze,tt,_e,Fe,Ge,Jr,Mi,Ot,pn,Wt,X=n;function qn(T,V){for(let Y=0;Y<T.length;Y++){let re=T[Y],J=t.getContext(re,V);if(J!==null)return J}return null}try{let T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r161"),t.addEventListener("webglcontextlost",Gl,!1),t.addEventListener("webglcontextrestored",kl,!1),t.addEventListener("webglcontextcreationerror",Vl,!1),X===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),X=qn(V,T),X===null)throw qn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function cr(){Q=new Sd(X),K=new _d(X,Q,e),Q.init(K),Ot=new Bp(X,Q,K),b=new Op(X,Q,K),ne=new Td(X),z=new Ap,k=new Fp(X,Q,b,z,K,Ot,ne),ie=new yd(v),he=new Md(v),pe=new md(X,K),pn=new gd(X,Q,pe,K),fe=new bd(X,pe,ne,pn),Se=new Cd(X,fe,pe,ne),Ge=new Rd(X,K,k),tt=new xd(z),ve=new wp(v,ie,he,Q,K,pn,tt),Oe=new Hp(v,z),ge=new Cp,ze=new Dp(Q,K),Fe=new fd(v,ie,he,b,Se,d,l),_e=new Np(v,Se,K),Wt=new Gp(X,ne,K,b),Jr=new vd(X,Q,ne,K),Mi=new Ed(X,Q,ne,K),ne.programs=ve.programs,v.capabilities=K,v.extensions=Q,v.properties=z,v.renderLists=ge,v.shadowMap=_e,v.state=b,v.info=ne}cr();let yt=new zo(v,X);function Gl(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function kl(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=ne.autoReset,V=_e.enabled,Y=_e.autoUpdate,re=_e.needsUpdate,J=_e.type;cr(),ne.autoReset=T,_e.enabled=V,_e.autoUpdate=Y,_e.needsUpdate=re,_e.type=J}function Vl(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wl(T){let V=T.target;V.removeEventListener("dispose",Wl),(function(Y){(function(re){let J=z.get(re).programs;J!==void 0&&(J.forEach((function(ue){ve.releaseProgram(ue)})),re.isShaderMaterial&&ve.releaseShaderCache(re))})(Y),z.remove(Y)})(V)}function Xl(T,V,Y){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=Lt,T.needsUpdate=!0,$r(T,V,Y),T.side=Fn,T.needsUpdate=!0,$r(T,V,Y),T.side=2):$r(T,V,Y)}this.xr=yt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(ae,me,!1))},this.getSize=function(T){return T.set(ae,me)},this.setSize=function(T,V,Y=!0){yt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ae=T,me=V,t.width=Math.floor(T*te),t.height=Math.floor(V*te),Y===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V))},this.getDrawingBufferSize=function(T){return T.set(ae*te,me*te).floor()},this.setDrawingBufferSize=function(T,V,Y){ae=T,me=V,te=Y,t.width=Math.floor(T*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,V,Y,re){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,V,Y,re),b.viewport(P.copy(se).multiplyScalar(te).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,V,Y,re){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,V,Y,re),b.scissor(q.copy(j).multiplyScalar(te).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(T){b.setScissorTest(oe=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,V=!0,Y=!0){let re=0;if(T){let J=!1;if(E!==null){let ue=E.texture.format;J=ue===Wh||ue===Vh||ue===kh}if(J){let ue=E.texture.type,xe=ue===oi||ue===Dn||ue===Sl||ue===li||ue===Hh||ue===Gh,ye=Fe.getClearColor(),Re=Fe.getClearAlpha(),Le=ye.r,Ie=ye.g,Ue=ye.b;xe?(p[0]=Le,p[1]=Ie,p[2]=Ue,p[3]=Re,X.clearBufferuiv(X.COLOR,0,p)):(m[0]=Le,m[1]=Ie,m[2]=Ue,m[3]=Re,X.clearBufferiv(X.COLOR,0,m))}else re|=X.COLOR_BUFFER_BIT}V&&(re|=X.DEPTH_BUFFER_BIT),Y&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Gl,!1),t.removeEventListener("webglcontextrestored",kl,!1),t.removeEventListener("webglcontextcreationerror",Vl,!1),ge.dispose(),ze.dispose(),z.dispose(),ie.dispose(),he.dispose(),Se.dispose(),pn.dispose(),Wt.dispose(),ve.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",jl),yt.removeEventListener("sessionend",ql),G&&(G.dispose(),G=null),Yn.stop()},this.renderBufferDirect=function(T,V,Y,re,J,ue){V===null&&(V=I);let xe=J.isMesh&&J.matrixWorld.determinant()<0,ye=(function(lt,Ft,Ct,De,Ne){Ft.isScene!==!0&&(Ft=I),k.resetTextureUnits();let hr=Ft.fog,Ca=De.isMeshStandardMaterial?Ft.environment:null,Du=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:En,Qr=(De.isMeshStandardMaterial?he:ie).get(De.envMap||Ca),Nu=De.vertexColors===!0&&!!Ct.attributes.color&&Ct.attributes.color.itemSize===4,Ou=!!Ct.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),Fu=!!Ct.morphAttributes.position,Bu=!!Ct.morphAttributes.normal,zu=!!Ct.morphAttributes.color,Ql=Nn;De.toneMapped&&(E!==null&&E.isXRRenderTarget!==!0||(Ql=v.toneMapping));let ec=Ct.morphAttributes.position||Ct.morphAttributes.normal||Ct.morphAttributes.color,Hu=ec!==void 0?ec.length:0,Be=z.get(De),Gu=g.state.lights;if(S===!0&&(O===!0||lt!==N)){let Bt=lt===N&&De.id===D;tt.setState(De,lt,Bt)}let jt=!1;De.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Gu.state.version||Be.outputColorSpace!==Du||Ne.isBatchedMesh&&Be.batching===!1?jt=!0:Ne.isBatchedMesh||Be.batching!==!0?Ne.isInstancedMesh&&Be.instancing===!1?jt=!0:Ne.isInstancedMesh||Be.instancing!==!0?Ne.isSkinnedMesh&&Be.skinning===!1?jt=!0:Ne.isSkinnedMesh||Be.skinning!==!0?Ne.isInstancedMesh&&Be.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&Be.instancingColor===!1&&Ne.instanceColor!==null||Be.envMap!==Qr||De.fog===!0&&Be.fog!==hr?jt=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===tt.numPlanes&&Be.numIntersection===tt.numIntersection?(Be.vertexAlphas!==Nu||Be.vertexTangents!==Ou||Be.morphTargets!==Fu||Be.morphNormals!==Bu||Be.morphColors!==zu||Be.toneMapping!==Ql||K.isWebGL2===!0&&Be.morphTargetsCount!==Hu)&&(jt=!0):jt=!0:jt=!0:jt=!0:jt=!0:(jt=!0,Be.__version=De.version);let Jn=Be.currentProgram;jt===!0&&(Jn=$r(De,Ft,Ne));let tc=!1,ur=!1,La=!1,Mt=Jn.getUniforms(),Kn=Be.uniforms;if(b.useProgram(Jn.program)&&(tc=!0,ur=!0,La=!0),De.id!==D&&(D=De.id,ur=!0),tc||N!==lt){Mt.setValue(X,"projectionMatrix",lt.projectionMatrix),Mt.setValue(X,"viewMatrix",lt.matrixWorldInverse);let Bt=Mt.map.cameraPosition;Bt!==void 0&&Bt.setValue(X,L.setFromMatrixPosition(lt.matrixWorld)),K.logarithmicDepthBuffer&&Mt.setValue(X,"logDepthBufFC",2/(Math.log(lt.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&Mt.setValue(X,"isOrthographic",lt.isOrthographicCamera===!0),N!==lt&&(N=lt,ur=!0,La=!0)}if(Ne.isSkinnedMesh){Mt.setOptional(X,Ne,"bindMatrix"),Mt.setOptional(X,Ne,"bindMatrixInverse");let Bt=Ne.skeleton;Bt&&(K.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Mt.setValue(X,"boneTexture",Bt.boneTexture,k)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ne.isBatchedMesh&&(Mt.setOptional(X,Ne,"batchingTexture"),Mt.setValue(X,"batchingTexture",Ne._matricesTexture,k));let Pa=Ct.morphAttributes;(Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&K.isWebGL2===!0)&&Ge.update(Ne,Ct,Jn),(ur||Be.receiveShadow!==Ne.receiveShadow)&&(Be.receiveShadow=Ne.receiveShadow,Mt.setValue(X,"receiveShadow",Ne.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(Kn.envMap.value=Qr,Kn.flipEnvMap.value=Qr.isCubeTexture&&Qr.isRenderTargetTexture===!1?-1:1),ur&&(Mt.setValue(X,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&(qt=La,(en=Kn).ambientLightColor.needsUpdate=qt,en.lightProbe.needsUpdate=qt,en.directionalLights.needsUpdate=qt,en.directionalLightShadows.needsUpdate=qt,en.pointLights.needsUpdate=qt,en.pointLightShadows.needsUpdate=qt,en.spotLights.needsUpdate=qt,en.spotLightShadows.needsUpdate=qt,en.rectAreaLights.needsUpdate=qt,en.hemisphereLights.needsUpdate=qt),hr&&De.fog===!0&&Oe.refreshFogUniforms(Kn,hr),Oe.refreshMaterialUniforms(Kn,De,te,me,G),Wi.upload(X,Kl(Be),Kn,k));var en,qt;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(Wi.upload(X,Kl(Be),Kn,k),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&Mt.setValue(X,"center",Ne.center),Mt.setValue(X,"modelViewMatrix",Ne.modelViewMatrix),Mt.setValue(X,"normalMatrix",Ne.normalMatrix),Mt.setValue(X,"modelMatrix",Ne.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let Bt=De.uniformsGroups;for(let Ia=0,ku=Bt.length;Ia<ku;Ia++)if(K.isWebGL2){let nc=Bt[Ia];Wt.update(nc,Jn),Wt.bind(nc,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn})(T,V,Y,re,J);b.setMaterial(re,xe);let Re=Y.index,Le=1;if(re.wireframe===!0){if(Re=fe.getWireframeAttribute(Y),Re===void 0)return;Le=2}let Ie=Y.drawRange,Ue=Y.attributes.position,Ze=Ie.start*Le,Xt=(Ie.start+Ie.count)*Le;ue!==null&&(Ze=Math.max(Ze,ue.start*Le),Xt=Math.min(Xt,(ue.start+ue.count)*Le)),Re!==null?(Ze=Math.max(Ze,0),Xt=Math.min(Xt,Re.count)):Ue!=null&&(Ze=Math.max(Ze,0),Xt=Math.min(Xt,Ue.count));let mn=Xt-Ze;if(mn<0||mn===1/0)return;let Zn;pn.setup(J,re,ye,Y,Re);let Je=Jr;if(Re!==null&&(Zn=pe.get(Re),Je=Mi,Je.setIndex(Zn)),J.isMesh)re.wireframe===!0?(b.setLineWidth(re.wireframeLinewidth*F()),Je.setMode(X.LINES)):Je.setMode(X.TRIANGLES);else if(J.isLine){let lt=re.linewidth;lt===void 0&&(lt=1),b.setLineWidth(lt*F()),J.isLineSegments?Je.setMode(X.LINES):J.isLineLoop?Je.setMode(X.LINE_LOOP):Je.setMode(X.LINE_STRIP)}else J.isPoints?Je.setMode(X.POINTS):J.isSprite&&Je.setMode(X.TRIANGLES);if(J.isBatchedMesh)Je.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Je.renderInstances(Ze,mn,J.count);else if(Y.isInstancedBufferGeometry){let lt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ft=Math.min(Y.instanceCount,lt);Je.renderInstances(Ze,mn,Ft)}else Je.render(Ze,mn)},this.compile=function(T,V,Y=null){Y===null&&(Y=T),g=ze.get(Y),g.init(),_.push(g),Y.traverseVisible((function(J){J.isLight&&J.layers.test(V.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))})),T!==Y&&T.traverseVisible((function(J){J.isLight&&J.layers.test(V.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))})),g.setupLights(v._useLegacyLights);let re=new Set;return T.traverse((function(J){let ue=J.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let ye=ue[xe];Xl(ye,Y,J),re.add(ye)}else Xl(ue,Y,J),re.add(ue)})),_.pop(),g=null,re},this.compileAsync=function(T,V,Y=null){let re=this.compile(T,V,Y);return new Promise((J=>{function ue(){re.forEach((function(xe){z.get(xe).currentProgram.isReady()&&re.delete(xe)})),re.size!==0?setTimeout(ue,10):J(T)}Q.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)}))};let Ra=null;function jl(){Yn.stop()}function ql(){Yn.start()}let Yn=new Jh;function Yl(T,V,Y,re){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||w.intersectsSprite(T)){re&&L.setFromMatrixPosition(T.matrixWorld).applyMatrix4(U);let ue=Se.update(T),xe=T.material;xe.visible&&x.push(T,ue,xe,Y,L.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||w.intersectsObject(T))){let ue=Se.update(T),xe=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),L.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),L.copy(ue.boundingSphere.center)),L.applyMatrix4(T.matrixWorld).applyMatrix4(U)),Array.isArray(xe)){let ye=ue.groups;for(let Re=0,Le=ye.length;Re<Le;Re++){let Ie=ye[Re],Ue=xe[Ie.materialIndex];Ue&&Ue.visible&&x.push(T,ue,Ue,Y,L.z,Ie)}}else xe.visible&&x.push(T,ue,xe,Y,L.z,null)}}let J=T.children;for(let ue=0,xe=J.length;ue<xe;ue++)Yl(J[ue],V,Y,re)}function Zl(T,V,Y,re){let J=T.opaque,ue=T.transmissive,xe=T.transparent;g.setupLightsView(Y),S===!0&&tt.setGlobalState(v.clippingPlanes,Y),ue.length>0&&(function(ye,Re,Le,Ie){if((Le.isScene===!0?Le.overrideMaterial:null)!==null)return;let Ze=K.isWebGL2;G===null&&(G=new Tn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Er:oi,minFilter:zi,samples:Ze?4:0})),v.getDrawingBufferSize(B),Ze?G.setSize(B.x,B.y):G.setSize(Ns(B.x),Ns(B.y));let Xt=v.getRenderTarget();v.setRenderTarget(G),v.getClearColor(H),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear();let mn=v.toneMapping;v.toneMapping=Nn,Kr(ye,Le,Ie),k.updateMultisampleRenderTarget(G),k.updateRenderTargetMipmap(G);let Zn=!1;for(let Je=0,lt=Re.length;Je<lt;Je++){let Ft=Re[Je],Ct=Ft.object,De=Ft.geometry,Ne=Ft.material,hr=Ft.group;if(Ne.side===2&&Ct.layers.test(Ie.layers)){let Ca=Ne.side;Ne.side=Lt,Ne.needsUpdate=!0,Jl(Ct,Le,Ie,De,Ne,hr),Ne.side=Ca,Ne.needsUpdate=!0,Zn=!0}}Zn===!0&&(k.updateMultisampleRenderTarget(G),k.updateRenderTargetMipmap(G)),v.setRenderTarget(Xt),v.setClearColor(H,W),v.toneMapping=mn})(J,ue,V,Y),re&&b.viewport(P.copy(re)),J.length>0&&Kr(J,V,Y),ue.length>0&&Kr(ue,V,Y),xe.length>0&&Kr(xe,V,Y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Kr(T,V,Y){let re=V.isScene===!0?V.overrideMaterial:null;for(let J=0,ue=T.length;J<ue;J++){let xe=T[J],ye=xe.object,Re=xe.geometry,Le=re===null?xe.material:re,Ie=xe.group;ye.layers.test(Y.layers)&&Jl(ye,V,Y,Re,Le,Ie)}}function Jl(T,V,Y,re,J,ue){T.onBeforeRender(v,V,Y,re,J,ue),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(v,V,Y,re,T,ue),J.transparent===!0&&J.side===2&&J.forceSinglePass===!1?(J.side=Lt,J.needsUpdate=!0,v.renderBufferDirect(Y,V,re,J,T,ue),J.side=Fn,J.needsUpdate=!0,v.renderBufferDirect(Y,V,re,J,T,ue),J.side=2):v.renderBufferDirect(Y,V,re,J,T,ue),T.onAfterRender(v,V,Y,re,J,ue)}function $r(T,V,Y){V.isScene!==!0&&(V=I);let re=z.get(T),J=g.state.lights,ue=g.state.shadowsArray,xe=J.state.version,ye=ve.getParameters(T,J.state,ue,V,Y),Re=ve.getProgramCacheKey(ye),Le=re.programs;re.environment=T.isMeshStandardMaterial?V.environment:null,re.fog=V.fog,re.envMap=(T.isMeshStandardMaterial?he:ie).get(T.envMap||re.environment),Le===void 0&&(T.addEventListener("dispose",Wl),Le=new Map,re.programs=Le);let Ie=Le.get(Re);if(Ie!==void 0){if(re.currentProgram===Ie&&re.lightsStateVersion===xe)return $l(T,ye),Ie}else ye.uniforms=ve.getUniforms(T),T.onBuild(Y,ye,v),T.onBeforeCompile(ye,v),Ie=ve.acquireProgram(ye,Re),Le.set(Re,Ie),re.uniforms=ye.uniforms;let Ue=re.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Ue.clippingPlanes=tt.uniform),$l(T,ye),re.needsLights=(function(Ze){return Ze.isMeshLambertMaterial||Ze.isMeshToonMaterial||Ze.isMeshPhongMaterial||Ze.isMeshStandardMaterial||Ze.isShadowMaterial||Ze.isShaderMaterial&&Ze.lights===!0})(T),re.lightsStateVersion=xe,re.needsLights&&(Ue.ambientLightColor.value=J.state.ambient,Ue.lightProbe.value=J.state.probe,Ue.directionalLights.value=J.state.directional,Ue.directionalLightShadows.value=J.state.directionalShadow,Ue.spotLights.value=J.state.spot,Ue.spotLightShadows.value=J.state.spotShadow,Ue.rectAreaLights.value=J.state.rectArea,Ue.ltc_1.value=J.state.rectAreaLTC1,Ue.ltc_2.value=J.state.rectAreaLTC2,Ue.pointLights.value=J.state.point,Ue.pointLightShadows.value=J.state.pointShadow,Ue.hemisphereLights.value=J.state.hemi,Ue.directionalShadowMap.value=J.state.directionalShadowMap,Ue.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ue.spotShadowMap.value=J.state.spotShadowMap,Ue.spotLightMatrix.value=J.state.spotLightMatrix,Ue.spotLightMap.value=J.state.spotLightMap,Ue.pointShadowMap.value=J.state.pointShadowMap,Ue.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=Ie,re.uniformsList=null,Ie}function Kl(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Wi.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function $l(T,V){let Y=z.get(T);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}Yn.setAnimationLoop((function(T){Ra&&Ra(T)})),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(T){Ra=T,yt.setAnimationLoop(T),T===null?Yn.stop():Yn.start()},yt.addEventListener("sessionstart",jl),yt.addEventListener("sessionend",ql),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(V),V=yt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,V,E),g=ze.get(T,_.length),g.init(),_.push(g),U.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),w.setFromProjectionMatrix(U),O=this.localClippingEnabled,S=tt.init(this.clippingPlanes,O),x=ge.get(T,f.length),x.init(),f.push(x),Yl(T,V,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Z,$),this.info.render.frame++,S===!0&&tt.beginShadows();let Y=g.state.shadowsArray;if(_e.render(Y,T,V),S===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),yt.enabled!==!1&&yt.isPresenting!==!1&&yt.hasDepthSensing()!==!1||Fe.render(x,T),g.setupLights(v._useLegacyLights),V.isArrayCamera){let re=V.cameras;for(let J=0,ue=re.length;J<ue;J++){let xe=re[J];Zl(x,T,xe,xe.viewport)}}else Zl(x,T,V);E!==null&&(k.updateMultisampleRenderTarget(E),k.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(v,T,V),pn.resetDefaultState(),D=-1,N=null,_.pop(),g=_.length>0?_[_.length-1]:null,f.pop(),x=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,V,Y){z.get(T.texture).__webglTexture=V,z.get(T.depthTexture).__webglTexture=Y;let re=z.get(T);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=Y===void 0,re.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){let Y=z.get(T);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Y=0){E=T,R=V,A=Y;let re=!0,J=null,ue=!1,xe=!1;if(T){let ye=z.get(T);ye.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(X.FRAMEBUFFER,null),re=!1):ye.__webglFramebuffer===void 0?k.setupRenderTarget(T):ye.__hasExternalTextures&&k.rebindTextures(T,z.get(T.texture).__webglTexture,z.get(T.depthTexture).__webglTexture);let Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);let Le=z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(J=Array.isArray(Le[V])?Le[V][Y]:Le[V],ue=!0):J=K.isWebGL2&&T.samples>0&&k.useMultisampledRTT(T)===!1?z.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[Y]:Le,P.copy(T.viewport),q.copy(T.scissor),C=T.scissorTest}else P.copy(se).multiplyScalar(te).floor(),q.copy(j).multiplyScalar(te).floor(),C=oe;if(b.bindFramebuffer(X.FRAMEBUFFER,J)&&K.drawBuffers&&re&&b.drawBuffers(T,J),b.viewport(P),b.scissor(q),b.setScissorTest(C),ue){let ye=z.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,ye.__webglTexture,Y)}else if(xe){let ye=z.get(T.texture),Re=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ye.__webglTexture,Y||0,Re)}D=-1},this.readRenderTargetPixels=function(T,V,Y,re,J,ue,xe){if(!T||!T.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){b.bindFramebuffer(X.FRAMEBUFFER,ye);try{let Re=T.texture,Le=Re.format,Ie=Re.type;if(Le!==nn&&Ot.convert(Le)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ue=Ie===Er&&(Q.has("EXT_color_buffer_half_float")||K.isWebGL2&&Q.has("EXT_color_buffer_float"));if(!(Ie===oi||Ot.convert(Ie)===X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)||Ie===bn&&(K.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float"))||Ue))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=T.width-re&&Y>=0&&Y<=T.height-J&&X.readPixels(V,Y,re,J,Ot.convert(Le),Ot.convert(Ie),ue)}finally{let Re=E!==null?z.get(E).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,V,Y=0){let re=Math.pow(2,-Y),J=Math.floor(V.image.width*re),ue=Math.floor(V.image.height*re);k.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,Y,0,0,T.x,T.y,J,ue),b.unbindTexture()},this.copyTextureToTexture=function(T,V,Y,re=0){let J=V.image.width,ue=V.image.height,xe=Ot.convert(Y.format),ye=Ot.convert(Y.type);k.setTexture2D(Y,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,re,T.x,T.y,J,ue,xe,ye,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,re,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,xe,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,re,T.x,T.y,xe,ye,V.image),re===0&&Y.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Y,re,J=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ue=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,ye=T.max.z-T.min.z+1,Re=Ot.convert(re.format),Le=Ot.convert(re.type),Ie;if(re.isData3DTexture)k.setTexture3D(re,0),Ie=X.TEXTURE_3D;else{if(!re.isDataArrayTexture&&!re.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");k.setTexture2DArray(re,0),Ie=X.TEXTURE_2D_ARRAY}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment);let Ue=X.getParameter(X.UNPACK_ROW_LENGTH),Ze=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Xt=X.getParameter(X.UNPACK_SKIP_PIXELS),mn=X.getParameter(X.UNPACK_SKIP_ROWS),Zn=X.getParameter(X.UNPACK_SKIP_IMAGES),Je=Y.isCompressedTexture?Y.mipmaps[J]:Y.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,T.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,T.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?X.texSubImage3D(Ie,J,V.x,V.y,V.z,ue,xe,ye,Re,Le,Je.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ie,J,V.x,V.y,V.z,ue,xe,ye,Re,Je.data)):X.texSubImage3D(Ie,J,V.x,V.y,V.z,ue,xe,ye,Re,Le,Je),X.pixelStorei(X.UNPACK_ROW_LENGTH,Ue),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ze),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Xt),X.pixelStorei(X.UNPACK_SKIP_ROWS,mn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Zn),J===0&&re.generateMipmaps&&X.generateMipmap(Ie),b.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?k.setTextureCube(T,0):T.isData3DTexture?k.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?k.setTexture2DArray(T,0):k.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,b.reset(),pn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?hi:jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hi?rt:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ho=class extends Cr{};Ho.prototype.isWebGL1Renderer=!0;var js=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qs=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Cf=new M;var Lf=new M,Pf=new M,If=new M,Uf=new le,Df=new le,Nf=new Ae,Of=new M,Ff=new M,Bf=new M,zf=new le,Hf=new le,Gf=new le;var kf=new M,Vf=new M;var Wf=new M,Xf=new Ve,jf=new Ve,qf=new M,Yf=new Ae,Zf=new M,Jf=new an,Kf=new Ae,$f=new ui;var Qf=new Ae,eg=new Ae;var tg=new Ae,ng=new Ae;var ig=new Gt,rg=new Ae,sg=new He,ag=new an;var Go=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var og=new Ae,lg=new Ae,cg=new Ae,hg=new Ae,ug=new $i,dg=new Gt,pg=new an,mg=new M,fg=new Go,gg=new He;var Qi=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yh=new M,Mh=new M,Sh=new Ae,lo=new ui,Ms=new an,Lr=class extends gt{constructor(e=new $e,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)yh.fromBufferAttribute(t,r-1),Mh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=yh.distanceTo(Mh);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;Sh.copy(r).invert(),lo.copy(e.ray).applyMatrix4(Sh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new M,h=new M,u=new M,d=new M,p=this.isLineSegments?2:1,m=n.index,x=n.attributes.position;if(m!==null)for(let g=Math.max(0,a.start),f=Math.min(m.count,a.start+a.count)-1;g<f;g+=p){let _=m.getX(g),v=m.getX(g+1);if(c.fromBufferAttribute(x,_),h.fromBufferAttribute(x,v),lo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}else for(let g=Math.max(0,a.start),f=Math.min(x.count,a.start+a.count)-1;g<f;g+=p){if(c.fromBufferAttribute(x,g),h.fromBufferAttribute(x,g+1),lo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},bh=new M,Eh=new M,Ys=class extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)bh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bh.distanceTo(Eh);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vg=new Ae,_g=new ui,xg=new an,yg=new M;var Zs=class extends Nt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,r=[],s=[],a=[],o=new M,l=new Ae;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ft(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ft(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends kt{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new le,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ko=class extends Pr{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tl(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Ss=new M,co=new Tl,ho=new Tl,uo=new Tl,Vo=class extends kt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new M){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ss.subVectors(r[0],r[1]).add(r[0]),o=Ss);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ss.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),co.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,x,g),ho.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,x,g),uo.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,x,g)}else this.curveType==="catmullrom"&&(co.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),ho.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),uo.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(co.calc(h),ho.calc(h),uo.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Th(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Mr(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Sr(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Js=class extends kt{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,r.x,s.x,a.x,o.x),Sr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends kt{constructor(e=new M,t=new M,n=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,r.x,s.x,a.x,o.x),Sr(e,r.y,s.y,a.y,o.y),Sr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends kt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends kt{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends kt{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Mr(e,r.x,s.x,a.x),Mr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qs=class extends kt{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Mr(e,r.x,s.x,a.x),Mr(e,r.y,s.y,a.y),Mr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Th(o,l.x,c.x,h.x,u.x),Th(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},ta=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:Vo,CubicBezierCurve:Js,CubicBezierCurve3:Wo,EllipseCurve:Pr,LineCurve:Ks,LineCurve3:Xo,QuadraticBezierCurve:$s,QuadraticBezierCurve3:Qs,SplineCurve:ea}),jo=class extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new ta[r.type]().fromJSON(r))}return this}},Ir=class extends jo{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ks(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new $s(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Js(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ea(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new Pr(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},na=class i extends $e{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ft(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new M,d=new le,p=new M,m=new M,x=new M,g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=1*f,p.y=-g,p.z=0*f,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=1*f,p.y=-g,p.z=0*f,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let _=0;_<=t;_++){let v=n+_*h*r,y=Math.sin(v),R=Math.cos(v);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*R,a.push(u.x,u.y,u.z),d.x=_/t,d.y=A/(e.length-1),o.push(d.x,d.y);let E=l[3*A+0]*y,D=l[3*A+1],N=l[3*A+0]*R;c.push(E,D,N)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,R=y,A=y+e.length,E=y+e.length+1,D=y+1;s.push(R,A,D),s.push(E,D,A)}this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},qo=class i extends na{constructor(e=1,t=1,n=4,r=8){let s=new Ir;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Yo=class i extends $e{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gn=class i extends $e{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,x=[],g=n/2,f=0;function _(v){let y=m,R=new le,A=new M,E=0,D=v===!0?e:t,N=v===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,g*N,0),d.push(0,N,0),p.push(.5,.5),m++;let P=m;for(let q=0;q<=r;q++){let C=q/r*l+o,H=Math.cos(C),W=Math.sin(C);A.x=D*W,A.y=g*N,A.z=D*H,u.push(A.x,A.y,A.z),d.push(0,N,0),R.x=.5*H+.5,R.y=.5*W*N+.5,p.push(R.x,R.y),m++}for(let q=0;q<r;q++){let C=y+q,H=P+q;v===!0?h.push(H,H+1,C):h.push(H+1,H,C),E+=3}c.addGroup(f,E,v===!0?1:2),f+=E}(function(){let v=new M,y=new M,R=0,A=(t-e)/n;for(let E=0;E<=s;E++){let D=[],N=E/s,P=N*(t-e)+e;for(let q=0;q<=r;q++){let C=q/r,H=C*l+o,W=Math.sin(H),ae=Math.cos(H);y.x=P*W,y.y=-N*n+g,y.z=P*ae,u.push(y.x,y.y,y.z),v.set(W,A,ae).normalize(),d.push(v.x,v.y,v.z),p.push(C,1-N),D.push(m++)}x.push(D)}for(let E=0;E<r;E++)for(let D=0;D<s;D++){let N=x[D][E],P=x[D+1][E],q=x[D+1][E+1],C=x[D][E+1];h.push(N,P,C),h.push(P,q,C),R+=6}c.addGroup(f,R,0),f+=R})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ur=class i extends Gn{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},di=class i extends $e{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,m,x){let g=x+1,f=[];for(let _=0;_<=g;_++){f[_]=[];let v=d.clone().lerp(m,_/g),y=p.clone().lerp(m,_/g),R=g-_;for(let A=0;A<=R;A++)f[_][A]=A===0&&_===g?v:v.clone().lerp(y,A/R)}for(let _=0;_<g;_++)for(let v=0;v<2*(g-_)-1;v++){let y=Math.floor(v/2);v%2==0?(l(f[_][y+1]),l(f[_+1][y]),l(f[_][y])):(l(f[_][y+1]),l(f[_+1][y+1]),l(f[_+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,x){x<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=x/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new M,m=new M,x=new M;for(let g=0;g<t.length;g+=3)c(t[g+0],p),c(t[g+1],m),c(t[g+2],x),o(p,m,x,d)})(r),(function(d){let p=new M;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let d=new M;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let x=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-g)}var p;(function(){let m=new M,x=new M,g=new M,f=new M,_=new le,v=new le,y=new le;for(let R=0,A=0;R<s.length;R+=9,A+=6){m.set(s[R+0],s[R+1],s[R+2]),x.set(s[R+3],s[R+4],s[R+5]),g.set(s[R+6],s[R+7],s[R+8]),_.set(a[A+0],a[A+1]),v.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),f.copy(m).add(x).add(g).divideScalar(3);let E=u(f);h(_,A+0,m,E),h(v,A+2,x,E),h(y,A+4,g,E)}})(),(function(){for(let m=0;m<a.length;m+=6){let x=a[m+0],g=a[m+2],f=a[m+4],_=Math.max(x,g,f),v=Math.min(x,g,f);_>.9&&v<.1&&(x<.2&&(a[m+0]+=1),g<.2&&(a[m+2]+=1),f<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Zo=class i extends di{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},bs=new M,Es=new M,po=new M,Ts=new ai,Dr=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Gi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:f}=Ts;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Ts.getNormal(po),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,y=u[_],R=u[v],A=Ts[h[_]],E=Ts[h[v]],D=`${y}_${R}`,N=`${R}_${y}`;N in d&&d[N]?(po.dot(d[N].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(E.x,E.y,E.z)),d[N]=null):D in d||(d[D]={index0:c[_],index1:c[v],normal:po.clone()})}}for(let m in d)if(d[m]){let{index0:x,index1:g}=d[m];bs.fromBufferAttribute(o,x),Es.fromBufferAttribute(o,g),p.push(bs.x,bs.y,bs.z),p.push(Es.x,Es.y,Es.z)}this.setAttribute("position",new Me(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ia=class extends Ir{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Ir().fromJSON(r))}return this}},kp=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=wh(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(m,x,g,f){let _=[],v,y,R,A,E;for(v=0,y=x.length;v<y;v++)R=x[v]*f,A=v<y-1?x[v+1]*f:m.length,E=wh(m,R,A,f,!1),E===E.next&&(E.steiner=!0),_.push(Jp(E));for(_.sort(qp),v=0;v<_.length;v++)g=Yp(_[v],g);return g})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<r;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Nr(s,a,t,o,l,p,0),a};function wh(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Ah(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ah(s,i[s],i[s+1],a);return a&&da(a,a.next)&&(Fr(a),a=a.next),a}function pi(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!da(n,n.next)&&Ke(n.prev,n,n.next)!==0)n=n.next;else{if(Fr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Nr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=Jo(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(x){let g,f,_,v,y,R,A,E,D=1;do{for(f=x,x=null,y=null,R=0;f;){for(R++,_=f,A=0,g=0;g<D&&(A++,_=_.nextZ,_);g++);for(E=D;A>0||E>0&&_;)A!==0&&(E===0||!_||f.z<=_.z)?(v=f,f=f.nextZ,A--):(v=_,_=_.nextZ,E--),y?y.nextZ=v:x=v,v.prevZ=y,y=v;f=_}y.nextZ=null,D*=2}while(R>1)})(m)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?Wp(i,n,r,s):Vp(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Fr(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?Nr(i=Xp(pi(i),e,t),e,t,n,r,s,2):a===2&&jp(i,e,t,n,r,s):Nr(pi(i),e,t,n,r,s,1);break}}function Vp(i){let e=i.prev,t=i,n=i.next;if(Ke(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Hi(r,o,s,l,a,c,m.x,m.y)&&Ke(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wp(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Ke(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,f=Jo(p,m,e,t,n),_=Jo(x,g,e,t,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=f&&y&&y.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==a&&Hi(o,h,l,u,c,d,v.x,v.y)&&Ke(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Hi(o,h,l,u,c,d,y.x,y.y)&&Ke(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==a&&Hi(o,h,l,u,c,d,v.x,v.y)&&Ke(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Hi(o,h,l,u,c,d,y.x,y.y)&&Ke(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xp(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!da(r,s)&&nu(r,n,n.next,s)&&Or(r,s)&&Or(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Fr(n),Fr(n.next),n=i=s),n=n.next}while(n!==i);return pi(n)}function jp(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kp(a,o)){let l=iu(a,o);return a=pi(a,a.next),l=pi(l,l.next),Nr(a,e,t,n,r,s,0),void Nr(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function qp(i,e){return i.x-e.x}function Yp(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=c&&g>l&&(l=g,a=o.x<o.next.x?o:o.next,g===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,x=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Hi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),Or(o,r)&&(m<x||m===x&&(o.x>a.x||o.x===a.x&&Zp(a,o)))&&(a=o,x=m)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=iu(t,i);return pi(n,n.next),pi(t,t.next)}function Zp(i,e){return Ke(i.prev,i,e.prev)<0&&Ke(e.next,i,i.next)<0}function Jo(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Kp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&nu(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Or(i,e)&&Or(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(Ke(i.prev,i,e.prev)||Ke(i,e.prev,e))||da(i,e)&&Ke(i.prev,i,i.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function da(i,e){return i.x===e.x&&i.y===e.y}function nu(i,e,t,n){let r=As(Ke(i,e,t)),s=As(Ke(i,e,n)),a=As(Ke(t,n,i)),o=As(Ke(t,n,e));return r!==s&&a!==o||!(r!==0||!ws(i,t,e))||!(s!==0||!ws(i,n,e))||!(a!==0||!ws(t,i,n))||!(o!==0||!ws(t,e,n))}function ws(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function As(i){return i>0?1:i<0?-1:0}function Or(i,e){return Ke(i.prev,i,i.next)<0?Ke(i,e,i.next)>=0&&Ke(i,i.prev,e)>=0:Ke(i,e,i.prev)<0||Ke(i,i.next,e)<0}function iu(i,e){let t=new Ko(i.i,i.x,i.y),n=new Ko(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ah(i,e,t,n){let r=new Ko(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ko(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var On=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Rh(e),Ch(n,e);let a=e.length;t.forEach(Rh);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ch(n,t[l]);let o=kp(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Rh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ch(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var $o=class i extends $e{constructor(e=new ia([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:$p,v,y,R,A,E,D=!1;f&&(v=f.getSpacedPoints(h),D=!0,d=!1,y=f.computeFrenetFrames(h,!1),R=new M,A=new M,E=new M),d||(g=0,p=0,m=0,x=0);let N=o.extractPoints(c),P=N.shape,q=N.holes;if(!On.isClockWise(P)){P=P.reverse();for(let L=0,I=q.length;L<I;L++){let F=q[L];On.isClockWise(F)&&(q[L]=F.reverse())}}let C=On.triangulateShape(P,q),H=P;for(let L=0,I=q.length;L<I;L++){let F=q[L];P=P.concat(F)}function W(L,I,F){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(I,F)}let ae=P.length,me=C.length;function te(L,I,F){let Q,K,b,ne=L.x-I.x,z=L.y-I.y,k=F.x-L.x,ie=F.y-L.y,he=ne*ne+z*z,pe=ne*ie-z*k;if(Math.abs(pe)>Number.EPSILON){let fe=Math.sqrt(he),Se=Math.sqrt(k*k+ie*ie),ve=I.x-z/fe,Oe=I.y+ne/fe,ge=((F.x-ie/Se-ve)*ie-(F.y+k/Se-Oe)*k)/(ne*ie-z*k);Q=ve+ne*ge-L.x,K=Oe+z*ge-L.y;let ze=Q*Q+K*K;if(ze<=2)return new le(Q,K);b=Math.sqrt(ze/2)}else{let fe=!1;ne>Number.EPSILON?k>Number.EPSILON&&(fe=!0):ne<-Number.EPSILON?k<-Number.EPSILON&&(fe=!0):Math.sign(z)===Math.sign(ie)&&(fe=!0),fe?(Q=-z,K=ne,b=Math.sqrt(he)):(Q=ne,K=z,b=Math.sqrt(he/2))}return new le(Q/b,K/b)}let Z=[];for(let L=0,I=H.length,F=I-1,Q=L+1;L<I;L++,F++,Q++)F===I&&(F=0),Q===I&&(Q=0),Z[L]=te(H[L],H[F],H[Q]);let $=[],se,j=Z.concat();for(let L=0,I=q.length;L<I;L++){let F=q[L];se=[];for(let Q=0,K=F.length,b=K-1,ne=Q+1;Q<K;Q++,b++,ne++)b===K&&(b=0),ne===K&&(ne=0),se[Q]=te(F[Q],F[b],F[ne]);$.push(se),j=j.concat(se)}for(let L=0;L<g;L++){let I=L/g,F=p*Math.cos(I*Math.PI/2),Q=m*Math.sin(I*Math.PI/2)+x;for(let K=0,b=H.length;K<b;K++){let ne=W(H[K],Z[K],Q);S(ne.x,ne.y,-F)}for(let K=0,b=q.length;K<b;K++){let ne=q[K];se=$[K];for(let z=0,k=ne.length;z<k;z++){let ie=W(ne[z],se[z],Q);S(ie.x,ie.y,-F)}}}let oe=m+x;for(let L=0;L<ae;L++){let I=d?W(P[L],j[L],oe):P[L];D?(A.copy(y.normals[0]).multiplyScalar(I.x),R.copy(y.binormals[0]).multiplyScalar(I.y),E.copy(v[0]).add(A).add(R),S(E.x,E.y,E.z)):S(I.x,I.y,0)}for(let L=1;L<=h;L++)for(let I=0;I<ae;I++){let F=d?W(P[I],j[I],oe):P[I];D?(A.copy(y.normals[L]).multiplyScalar(F.x),R.copy(y.binormals[L]).multiplyScalar(F.y),E.copy(v[L]).add(A).add(R),S(E.x,E.y,E.z)):S(F.x,F.y,u/h*L)}for(let L=g-1;L>=0;L--){let I=L/g,F=p*Math.cos(I*Math.PI/2),Q=m*Math.sin(I*Math.PI/2)+x;for(let K=0,b=H.length;K<b;K++){let ne=W(H[K],Z[K],Q);S(ne.x,ne.y,u+F)}for(let K=0,b=q.length;K<b;K++){let ne=q[K];se=$[K];for(let z=0,k=ne.length;z<k;z++){let ie=W(ne[z],se[z],Q);D?S(ie.x,ie.y+v[h-1].y,v[h-1].x+F):S(ie.x,ie.y,u+F)}}}function w(L,I){let F=L.length;for(;--F>=0;){let Q=F,K=F-1;K<0&&(K=L.length-1);for(let b=0,ne=h+2*g;b<ne;b++){let z=ae*b,k=ae*(b+1);G(I+Q+z,I+K+z,I+K+k,I+Q+k)}}}function S(L,I,F){l.push(L),l.push(I),l.push(F)}function O(L,I,F){U(L),U(I),U(F);let Q=r.length/3,K=_.generateTopUV(n,r,Q-3,Q-2,Q-1);B(K[0]),B(K[1]),B(K[2])}function G(L,I,F,Q){U(L),U(I),U(Q),U(I),U(F),U(Q);let K=r.length/3,b=_.generateSideWallUV(n,r,K-6,K-3,K-2,K-1);B(b[0]),B(b[1]),B(b[3]),B(b[1]),B(b[2]),B(b[3])}function U(L){r.push(l[3*L+0]),r.push(l[3*L+1]),r.push(l[3*L+2])}function B(L){s.push(L.x),s.push(L.y)}(function(){let L=r.length/3;if(d){let I=0,F=ae*I;for(let Q=0;Q<me;Q++){let K=C[Q];O(K[2]+F,K[1]+F,K[0]+F)}I=h+2*g,F=ae*I;for(let Q=0;Q<me;Q++){let K=C[Q];O(K[0]+F,K[1]+F,K[2]+F)}}else{for(let I=0;I<me;I++){let F=C[I];O(F[2],F[1],F[0])}for(let I=0;I<me;I++){let F=C[I];O(F[0]+ae*h,F[1]+ae*h,F[2]+ae*h)}}n.addGroup(L,r.length/3-L,0)})(),(function(){let L=r.length/3,I=0;w(H,I),I+=H.length;for(let F=0,Q=q.length;F<Q;F++){let K=q[F];w(K,I),I+=K.length}n.addGroup(L,r.length/3-L,1)})()}this.setAttribute("position",new Me(r,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ta[r.type]().fromJSON(r)),new i(n,e.options)}},$p={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new le(s,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],x=e[3*s],g=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-m),new le(x,1-f)]:[new le(o,1-l),new le(h,1-u),new le(p,1-m),new le(g,1-f)]}},Qo=class i extends di{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},el=class i extends di{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},tl=class i extends $e{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new M,m=new le;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let f=s+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<r;x++){let g=x*(n+1);for(let f=0;f<n;f++){let _=f+g,v=_,y=_+n+1,R=_+n+2,A=_+1;o.push(v,y,A),o.push(y,R,A)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},nl=class i extends $e{constructor(e=new ia([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;On.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let _=m[g];On.isClockWise(_)===!0&&(m[g]=_.reverse())}let x=On.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let _=m[g];p=p.concat(_)}for(let g=0,f=p.length;g<f;g++){let _=p[g];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let g=0,f=x.length;g<f;g++){let _=x[g],v=_[0]+u,y=_[1]+u,R=_[2]+u;n.push(v,y,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},kn=class i extends $e{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,d=new M,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let _=[],v=f/n,y=0;f===0&&a===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+y,1-v),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let v=h[f][_+1],y=h[f][_],R=h[f+1][_],A=h[f+1][_+1];(f!==0||a>0)&&p.push(v,y,A),(f!==n-1||l<Math.PI)&&p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},il=class i extends di{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},rl=class i extends $e{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let m=0;m<=r;m++){let x=m/r*s,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=r;m++){let x=(r+1)*p+m-1,g=(r+1)*(p-1)+m-1,f=(r+1)*(p-1)+m,_=(r+1)*p+m;a.push(x,g,_),a.push(g,f,_)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},sl=class i extends $e{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new M,d=new M,p=new M,m=new M,x=new M,g=new M,f=new M;for(let v=0;v<=n;++v){let y=v/n*s*Math.PI*2;_(y,s,a,e,p),_(y+.01,s,a,e,m),g.subVectors(m,p),f.addVectors(m,p),x.crossVectors(g,f),f.crossVectors(x,g),x.normalize(),f.normalize();for(let R=0;R<=r;++R){let A=R/r*Math.PI*2,E=-t*Math.cos(A),D=t*Math.sin(A);u.x=p.x+(E*f.x+D*x.x),u.y=p.y+(E*f.y+D*x.y),u.z=p.z+(E*f.z+D*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(R/r)}}for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){let R=(r+1)*(v-1)+(y-1),A=(r+1)*v+(y-1),E=(r+1)*v+y,D=(r+1)*(v-1)+y;o.push(R,A,D),o.push(A,E,D)}function _(v,y,R,A,E){let D=Math.cos(v),N=Math.sin(v),P=R/y*v,q=Math.cos(P);E.x=A*(2+q)*.5*D,E.y=A*(2+q)*N*.5,E.z=A*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},al=class i extends $e{constructor(e=new Qs(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new le,h=new M,u=[],d=[],p=[],m=[];function x(g){h=e.getPointAt(g/t,h);let f=a.normals[g],_=a.binormals[g];for(let v=0;v<=r;v++){let y=v/r*Math.PI*2,R=Math.sin(y),A=-Math.cos(y);l.x=A*f.x+R*_.x,l.y=A*f.y+R*_.y,l.z=A*f.z+R*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)x(g);x(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let f=0;f<=r;f++)c.x=g/t,c.y=f/r,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let f=1;f<=r;f++){let _=(r+1)*(g-1)+(f-1),v=(r+1)*g+(f-1),y=(r+1)*g+f,R=(r+1)*(g-1)+f;m.push(_,v,R),m.push(v,y,R)}})()})(),this.setIndex(m),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ta[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ol=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let x=0;x<3;x++){let g=o.getX(p+x),f=o.getX(p+(x+1)%3);r.fromBufferAttribute(a,g),s.fromBufferAttribute(a,f),Lh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Lh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Mg=Object.freeze({__proto__:null,BoxGeometry:Tt,CapsuleGeometry:qo,CircleGeometry:Yo,ConeGeometry:Ur,CylinderGeometry:Gn,DodecahedronGeometry:Zo,EdgesGeometry:Dr,ExtrudeGeometry:$o,IcosahedronGeometry:Qo,LatheGeometry:na,OctahedronGeometry:el,PlaneGeometry:Rr,PolyhedronGeometry:di,RingGeometry:tl,ShapeGeometry:nl,SphereGeometry:kn,TetrahedronGeometry:il,TorusGeometry:rl,TorusKnotGeometry:sl,TubeGeometry:al,WireframeGeometry:ol});var Qe=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Rs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var er=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends er{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:s=e,o=2*t-n;break;case Pc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:a=e,l=2*n-t;break;case Pc:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),x=m*m,g=x*m,f=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-p)*g+(1.5+p)*x+.5*m,y=p*g-p*x;for(let R=0;R!==o;++R)s[R]=f*a[h+R]+_*a[c+R]+v*a[l+R]+y*a[u+R];return s}},cl=class extends er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},hl=class extends er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Qp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===za,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Kt.prototype.TimeBufferType=Float32Array,Kt.prototype.ValueBufferType=Float32Array,Kt.prototype.DefaultInterpolation=Ls;var ri=class extends Kt{};ri.prototype.ValueTypeName="bool",ri.prototype.ValueBufferType=Array,ri.prototype.DefaultInterpolation=Cs,ri.prototype.InterpolantFactoryMethodLinear=void 0,ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Kt{};ul.prototype.ValueTypeName="color";var dl=class extends Kt{};dl.prototype.ValueTypeName="number";var pl=class extends er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(s,0,a,c-o,a,c,l);return s}},br=class extends Kt{InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion",br.prototype.DefaultInterpolation=Ls,br.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends Kt{};si.prototype.ValueTypeName="string",si.prototype.ValueBufferType=Array,si.prototype.DefaultInterpolation=Cs,si.prototype.InterpolantFactoryMethodLinear=void 0,si.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Kt{};ml.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},em=new fl,gl=class{constructor(e){this.manager=e!==void 0?e:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ra=class extends Br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mo=new Ae,Ph=new M,Ih=new M,sa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Uh=new Ae,_r=new M,fo=new M,vl=class extends sa{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),r.makeTranslation(-_r.x,-_r.y,-_r.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}},tr=class extends Br{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_l=class extends sa{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},aa=class extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Sg=new Ae,bg=new Ae,Eg=new Ae;var oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Dh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Dh(){return(typeof performance>"u"?Date:performance).now()}var Tg=new M,wg=new sn,Ag=new M,Rg=new M;var Cg=new M,Lg=new sn,Pg=new M,Ig=new M;var wl="\\[\\]\\.:\\/",tm=new RegExp("["+wl+"]","g"),go="[^"+wl+"]",nm="[^"+wl.replace("\\.","")+"]",im=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",go)+/(WCOD+)?/.source.replace("WCOD",nm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",go)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",go)+"$"),rm=["material","materials","bones","map"],Xe=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){let t=im.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);rm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=class{constructor(i,e,t){let n=t||Xe.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray],Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ug=new Float32Array(1);var la=class{constructor(e,t,n=0,r=1/0){this.ray=new ui(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xl(e,this,n,t),n.sort(Nh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)xl(e[r],this,n,t);return n.sort(Nh),n}};function Nh(i,e){return i.distance-e.distance}function xl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,a=r.length;s<a;s++)xl(r[s],e,t,!0)}}var Dg=new le;var Ng=new M,Og=new M;var Fg=new M;var Bg=new M,zg=new Ae,Hg=new Ae;var Gg=new M,kg=new be,Vg=new be;var Wg=new M,Xg=new M,jg=new M;var qg=new M,Yg=new Ar;var Zg=new Gt;var Jg=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"161"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="161");var gi=document.getElementById("overlay"),$g=document.getElementById("playButton"),_i=document.getElementById("loadNote"),xa=document.getElementById("missionText"),am=document.getElementById("hpValue"),om=document.getElementById("armorValue"),lm=document.getElementById("hpFill"),cm=document.getElementById("armorFill"),hm=document.getElementById("levelValue"),um=document.getElementById("scoreValue"),dm=document.getElementById("materialsValue"),pm=document.getElementById("weaponName"),mm=document.getElementById("weaponMeta"),fm=document.getElementById("ammoText"),gm=document.getElementById("grenadeText"),vm=document.getElementById("craftText"),_m=document.getElementById("reloadText"),ru=document.getElementById("targetCard"),xm=document.getElementById("targetName"),ym=document.getElementById("targetHp"),su=document.getElementById("crosshair"),Mm=document.getElementById("hitMarker"),Ll=document.getElementById("minimapCanvas"),Sm=document.getElementById("minimapInfo"),bm=document.getElementById("mobileHud"),zr=document.getElementById("mobileLookZone"),rr=document.getElementById("joystickBase"),Em=document.getElementById("joystickKnob"),Al=document.getElementById("mobileFire"),Tm=document.getElementById("mobileJump"),wm=document.getElementById("mobileReload"),pu=document.getElementById("mobileSwitch"),Am=document.getElementById("mobileGrenade"),Rm=document.getElementById("mobileCraft"),Cm=document.getElementById("rotateHint"),un=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Lm=Ll.getContext("2d"),wn=!1,Wr=!1,Pm=!0,Pl=0,ma=0,mu=0,hn=!1,ar=0,An=0,Hr=null,Ea="handgun",Pt=new Cr({antialias:!0,powerPreference:"high-performance"});Pt.setSize(window.innerWidth,window.innerHeight);Pt.setPixelRatio(Math.min(window.devicePixelRatio,2));Pt.shadowMap.enabled=!0;Pt.shadowMap.type=yl;Pt.outputColorSpace=rt;Pt.toneMapping=Ml;Pt.toneMappingExposure=1.08;document.body.appendChild(Pt.domElement);var Ye=new qs;Ye.background=new be(9225471);Ye.fog=new js(9225471,18,110);var jn=new Et(72,window.innerWidth/window.innerHeight,.1,180);Ye.add(jn);var vt=new st;Ye.add(vt);var Nl=new st;Ye.add(Nl);var Ol=new st;Ye.add(Ol);var ya=new oa,ut=new la;ut.firstHitOnly=!0;var Qt=new M,fu=new M,Il=new M,Im=new M,Um=new M,Xr=new M,Dm=new M,$t=new M,vi=new M(0,1,0),Nm=new Ji(0,0,0,"YXZ"),au=new M,or=[],Fl=[],Ta=[],lr=[],Bl=[],xi=[],kr=[],Xn=[],fa=[],ga=[],va=[],qe={forward:!1,backward:!1,left:!1,right:!1,jumpQueued:!1,triggerHeld:!1,queuedSemiShot:!1},at={moveX:0,moveY:0,joystickPointerId:null,lookPointerId:null,lookLastX:0,lookLastY:0},ee={radius:.38,height:1.82,eyeHeight:1.58,gravity:23,jumpSpeed:7.5,moveSpeed:7.2,airMoveSpeed:4.7,velocity:new M,onGround:!1,bobTime:0,moveAmount:0,hp:100,maxHp:100,armor:60,maxArmor:100,score:0,level:1,materials:0,grenadeCount:2,damageCooldown:0},ot={yaw:Math.PI,pitch:-.14,pitchMin:-.95,pitchMax:.65,distance:4.9,shoulder:1.08,focusHeight:1.42,currentCameraPos:new M(0,3.8,10),currentLookPos:new M(0,1.6,0)},Ee={cam:0,camTarget:0,pos:new M,posTarget:new M,rot:new M,rotTarget:new M,reloadLift:0,reloadTarget:0},et={x:0,y:0,xTarget:0,yTarget:0};un&&(document.documentElement.classList.add("touch-device"),bm.setAttribute("aria-hidden","false"));window.addEventListener("error",()=>{_i.textContent="Battlefield loading failed. Reload this page.",_i.classList.add("error")});function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Rt(i,e,t,n){return we.lerp(i,e,1-Math.exp(-t*n))}function sr(i,e,t,n){i.lerp(e,1-Math.exp(-t*n))}function gu(i,e,t,n){let r=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+r*(1-Math.exp(-t*n))}function Gr(i,e){let t=i.indexOf(e);t!==-1&&i.splice(t,1)}function dt(i,e=2.2){xa.textContent=i,Pl=e}function Yr(){return Pm}function wa(){if(!un)return;let i=window.innerHeight>window.innerWidth;document.documentElement.classList.toggle("portrait-touch",i),Cm.hidden=!i}async function Om(){if(!(!un||!screen.orientation||!screen.orientation.lock))try{await screen.orientation.lock("landscape")}catch{wa()}}function Wn(){if(un){wn=!0,gi&&(gi.hidden=!0),_i&&(_i.textContent="Touch deployment active."),dt("Touch deployment active. Sweep the streets of Cubis.",1.6),Om();return}gi&&(gi.hidden=!0),Pt.domElement.requestPointerLock()}function ou(){return Pe.current===0?"Deploy when ready. Round combat begins the moment you enter the district.":Pe.pending?`Round ${Pe.current} clear. Next wave in ${Math.max(1,Math.ceil(Pe.countdown))}.`:`Round ${Pe.current} live. Hostiles left: ${Pe.activeCount}. Scrap ${ee.materials} fuels ammo and grenades.`}function Vn(i){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");t.imageSmoothingEnabled=!1;let n=s=>{t.fillStyle=s,t.fillRect(0,0,64,64)};if(i==="grassTop"){n("#6db95a");for(let s=0;s<230;s+=1)t.fillStyle=s%3===0?"#84d164":s%3===1?"#4f8e3f":"#6ab94c",t.fillRect(Math.random()*64|0,Math.random()*64|0,3,3)}else if(i==="dirt"){n("#7b5737");for(let s=0;s<220;s+=1)t.fillStyle=s%2?"#5f4128":"#92653f",t.fillRect(Math.random()*64|0,Math.random()*64|0,3,3)}else if(i==="road"){n("#6a7684"),t.fillStyle="#a7b5c6",t.fillRect(0,28,64,8);for(let s=0;s<180;s+=1)t.fillStyle=s%2?"#4d5764":"#7a8696",t.fillRect(Math.random()*64|0,Math.random()*64|0,2,2)}else if(i==="concrete"){n("#8f99a8");for(let s=0;s<180;s+=1)t.fillStyle=s%3===0?"#6e7787":s%3===1?"#9da9b8":"#7c8795",t.fillRect(Math.random()*64|0,Math.random()*64|0,3,3)}else if(i==="metalBlue"){n("#325885");for(let s=0;s<64;s+=8)t.fillStyle=s%16===0?"#4f7eb4":"#2b476c",t.fillRect(0,s,64,5);for(let s=0;s<48;s+=1)t.fillStyle="#8dbfff",t.fillRect((Math.random()*60|0)+2,(Math.random()*60|0)+2,2,2)}else if(i==="metalYellow"){n("#8d6c22");for(let s=0;s<64;s+=8)t.fillStyle=s%16===0?"#c49a35":"#73561c",t.fillRect(0,s,64,5);for(let s=0;s<48;s+=1)t.fillStyle="#ffe08f",t.fillRect((Math.random()*60|0)+2,(Math.random()*60|0)+2,2,2)}else if(i==="darkMetal"){n("#3b4654");for(let s=0;s<64;s+=10)t.fillStyle=s%20===0?"#566173":"#2e3743",t.fillRect(0,s,64,6)}else i==="neon"?(n("#203044"),t.fillStyle="#7bffce",t.fillRect(10,8,12,48),t.fillRect(42,8,12,48),t.fillStyle="#dffff3",t.fillRect(14,12,4,40),t.fillRect(46,12,4,40)):n("#9a7d46");let r=new Zs(e);return r.colorSpace=rt,r.magFilter=mt,r.minFilter=mt,r.wrapS=qi,r.wrapT=qi,r}var _t={grassTop:Vn("grassTop"),dirt:Vn("dirt"),road:Vn("road"),concrete:Vn("concrete"),metalBlue:Vn("metalBlue"),metalYellow:Vn("metalYellow"),darkMetal:Vn("darkMetal"),neon:Vn("neon")},Fm=new Tt(1,1,1);function xt(i){return new Qe({flatShading:!0,roughness:.82,metalness:.08,...i})}var jr={terrain:{materials:[xt({map:_t.dirt}),xt({map:_t.dirt}),xt({map:_t.grassTop}),xt({map:_t.dirt}),xt({map:_t.dirt}),xt({map:_t.dirt})],debris:[11962200,7126875,8016950],minimap:"#62784f"},concrete:{materials:new Array(6).fill(0).map(()=>xt({map:_t.concrete})),debris:[13883877,11450567,7832210],minimap:"#8a94a1"},road:{materials:[xt({map:_t.concrete}),xt({map:_t.concrete}),xt({map:_t.road}),xt({map:_t.concrete}),xt({map:_t.concrete}),xt({map:_t.concrete})],debris:[15261640,11187912,7437196],minimap:"#6c7787"},blue:{materials:new Array(6).fill(0).map(()=>xt({map:_t.metalBlue,metalness:.22,roughness:.58})),debris:[10934527,5146049,2379134],minimap:"#3e75c0"},yellow:{materials:new Array(6).fill(0).map(()=>xt({map:_t.metalYellow,metalness:.18,roughness:.62})),debris:[16769192,13737274,8281893],minimap:"#c99d38"},dark:{materials:new Array(6).fill(0).map(()=>xt({map:_t.darkMetal,metalness:.28,roughness:.66})),debris:[13160923,6582915,2634305],minimap:"#506172"},neon:{materials:new Array(6).fill(0).map(()=>xt({map:_t.neon,emissive:6619091,emissiveIntensity:.5,metalness:.12,roughness:.62})),debris:[14811124,8123848,2917234],minimap:"#63ffcf"}};function vu(i,e=1185824,t=.4){let n=new Ys(new Dr(i.geometry),new Qi({color:e,transparent:!0,opacity:t}));i.add(n)}function Bm(i,e,t={}){let n={mesh:i,bounds:e,style:t.style||"concrete",destructible:!!t.destructible,hp:t.hp||1,maxHp:t.hp||1,reward:t.reward||0,debris:t.debris||jr[t.style||"concrete"].debris,minimap:t.minimap||jr[t.style||"concrete"].minimap};return i.userData.colliderRef=n,or.push(n),Ta.push(i),Fl.push(i),lr.push(i),n.destructible&&(i.userData.blockRef=n,Bl.push(n)),n}function Vt(i,e,t,n,r,s,a="concrete",o={}){let l=o.geometry||new Tt(i,e,t),c=o.materials||jr[a].materials,h=new He(l,c);return h.position.set(n,r+e*.5,s),h.castShadow=!0,h.receiveShadow=!0,Nl.add(h),o.outline!==!1&&vu(h,988448,.3),o.collider!==!1&&Bm(h,new Gt(new M(n-i*.5,r,s-t*.5),new M(n+i*.5,r+e,s+t*.5)),{style:a,destructible:o.destructible,hp:o.hp,reward:o.reward,debris:jr[a].debris}),h}function fi(i,e,t,n="concrete",r={}){return Vt(1,1,1,i,e,t,n,{geometry:Fm,destructible:r.destructible??!0,hp:r.hp||1,reward:r.reward??1,outline:r.outline})}function pa(i,e,t,n=4){let r=new Qe({color:16777215,roughness:1,flatShading:!0});for(let s=0;s<n;s+=1){let a=new He(new Tt(1.2+Math.random()*2.2,.8+Math.random()*.8,1.2+Math.random()*2.2),r);a.position.set(i+we.randFloatSpread(4),e+we.randFloatSpread(.8),t+we.randFloatSpread(4)),a.castShadow=!0,Ol.add(a)}}function zm(i,e,t,n,r,s,a=!1){let o=new Qe({color:s,roughness:.88,metalness:.14,flatShading:!0,emissive:a?3995606:0,emissiveIntensity:a?.24:0}),l=new He(new Tt(i,e,t),o);l.position.set(n,e*.5-6,r),l.castShadow=!0,l.receiveShadow=!0,Ol.add(l)}function Rl(i,e,t,n){Vt(2,t,2,i,0,e,n,{destructible:!1,outline:!0}),Vt(1,t+3,1,i,0,e,"neon",{destructible:!1,outline:!1})}function Hm(){Vt(82,6,82,0,-6,0,"terrain",{destructible:!1,outline:!1}),Vt(10,1,10,0,0,0,"road",{destructible:!1}),Vt(17,1,10,-13.5,0,0,"road",{destructible:!1}),Vt(17,1,10,13.5,0,0,"road",{destructible:!1}),Vt(10,1,14,0,0,-12,"road",{destructible:!1}),Vt(10,1,14,0,0,12,"road",{destructible:!1}),Vt(14,1,4,0,3,-8,"road",{destructible:!1}),Vt(8,1,4,12,2,8,"road",{destructible:!1}),Vt(8,1,4,-12,2,8,"road",{destructible:!1});let i=(t,n,r,s,a,o,l=2)=>{for(let c=0;c<a;c+=1)for(let h=0;h<r;h+=1)for(let u=0;u<s;u+=1)fi(t+h,c,n+u,o,{destructible:!0,hp:l,reward:1})},e=(t,n,r,s,a,o)=>{for(let l=0;l<r;l+=1)for(let c=0;c<s;c+=1){let h=a==="x"?t+l:t,u=a==="z"?n+l:n;fi(h,c,u,o,{destructible:!0,hp:1,reward:1})}};i(-15,-16,4,4,5,"blue"),i(10,-18,5,4,6,"yellow"),i(-17,10,4,5,4,"dark"),i(12,11,5,5,5,"blue"),i(-3,-20,3,3,7,"neon",3),i(4,16,3,3,6,"yellow",2),e(-9,-4,6,2,"x","concrete"),e(4,3,7,2,"x","concrete"),e(-4,10,5,2,"z","dark"),e(8,-6,5,2,"z","dark");for(let t=0;t<4;t+=1)fi(-6+t,t,7,"road",{destructible:!0,hp:1,reward:1}),fi(7+t,t,-3,"road",{destructible:!0,hp:1,reward:1});for(let t=-2;t<=2;t+=1)fi(t,1,-8,t===0?"neon":"concrete",{destructible:!0,hp:2,reward:1}),fi(t,2,-8,"dark",{destructible:!0,hp:2,reward:1});for(let t=0;t<10;t+=1){let n=we.randInt(-18,18),r=we.randInt(-18,18),s=we.randInt(0,2);fi(n,s,r,t%3===0?"yellow":t%3===1?"blue":"concrete",{destructible:!0,hp:1,reward:1})}Rl(0,-24,9,"dark"),Rl(20,0,8,"blue"),Rl(-22,3,7,"yellow");for(let t=0;t<18;t+=1)zm(we.randFloat(4,10),we.randFloat(12,28),we.randFloat(4,10),we.randFloatSpread(110),-42-Math.random()*18,t%2?5532807:4150384,t%5===0);pa(-18,22,-12,5),pa(6,20,-28,4),pa(20,24,-6,6),pa(-2,18,18,3)}var Gm=new ra(13625343,2964272,1.8);Ye.add(Gm);var dn=new aa(16774616,1.55);dn.position.set(16,28,10);dn.castShadow=!0;dn.shadow.mapSize.set(2048,2048);dn.shadow.camera.left=-42;dn.shadow.camera.right=42;dn.shadow.camera.top=42;dn.shadow.camera.bottom=-42;dn.shadow.camera.near=1;dn.shadow.camera.far=120;Ye.add(dn);var _u=new tr(8388565,.9,26,2);_u.position.set(0,8,-14);Ye.add(_u);function je(i,e,t,n,r,s){let a=new He(new Tt(i,e,t),n);return a.position.copy(r),a.castShadow=!0,a.receiveShadow=!0,vu(a,988448,.5),s.add(a),a}function km(){let i=new st,e=new st,t=new st,n=new st,r=new st,s=new st,a=new Qe({color:3049424,roughness:.72,metalness:.16,flatShading:!0}),o=new Qe({color:2051966,roughness:.8,metalness:.12,flatShading:!0}),l=new Qe({color:9562367,emissive:2090495,emissiveIntensity:.34,roughness:.24,metalness:.42,flatShading:!0}),c=new Qe({color:12372440,roughness:.52,metalness:.24,flatShading:!0});i.add(e),e.add(n,t),t.position.y=.88;let h=je(.68,.82,.38,a,new M(0,.1,0),t);je(.54,.2,.42,c,new M(0,.14,.06),t),je(.34,.54,.18,o,new M(0,.02,-.26),t);let u=je(.5,.5,.5,o,new M(0,.72,0),t),d=je(.38,.14,.08,l,new M(0,.72,.24),t);je(.18,.18,.18,c,new M(-.42,.26,0),t),je(.18,.18,.18,c,new M(.42,.26,0),t);let p=je(.2,.62,.2,a,new M(-.28,.02,.14),t),m=je(.2,.62,.2,a,new M(.28,-.02,.16),t),x=je(.16,.18,.16,c,new M(-.14,-.18,.34),t),g=je(.16,.18,.16,c,new M(.16,-.2,.36),t),f=je(.24,.82,.24,o,new M(-.16,.4,0),n),_=je(.24,.82,.24,o,new M(.16,.4,0),n);return t.add(r),r.position.set(.08,-.04,.34),r.add(s),s.position.set(.1,-.06,-.12),{root:i,bodyYaw:e,upper:t,torso:h,head:u,visor:d,armL:p,armR:m,handL:x,handR:g,legL:f,legR:_,weaponPivot:r,rightHandMount:s}}function Cl(i){let e=new st,t=new gt,n=new Qe({color:6714498,roughness:.42,metalness:.52,flatShading:!0}),r=new Qe({color:2306625,roughness:.62,metalness:.24,flatShading:!0}),s=new Qe({color:4165861,roughness:.6,metalness:.24,flatShading:!0}),a=new Qe({color:9397557,roughness:.88,metalness:.04,flatShading:!0}),o=(l,c,h,u,d,p,m)=>je(l,c,h,m,new M(u,d,p),e);if(i==="handgun")o(.16,.12,.38,0,0,-.02,n),o(.1,.2,.12,0,-.18,.04,r),o(.08,.06,.18,0,-.05,-.17,r),t.position.set(0,0,-.28);else if(i==="assault"){o(.18,.14,.58,0,0,-.02,n),o(.14,.12,.36,0,-.02,.32,r),o(.14,.1,.52,0,-.02,-.56,r),o(.08,.24,.12,0,-.2,-.02,s),o(.05,.05,.14,0,.08,-.76,s);let l=new He(new Gn(.025,.025,.72,12),n);l.rotation.x=Math.PI*.5,l.position.set(0,0,-.94),l.castShadow=!0,l.receiveShadow=!0,e.add(l),t.position.set(0,0,-1.28)}else{o(.22,.15,.42,0,0,0,n),o(.18,.14,.42,0,-.02,.42,a),o(.16,.12,.2,0,-.06,-.3,a);let l=new He(new Gn(.032,.032,.92,14),n);l.rotation.x=Math.PI*.5,l.position.set(0,.02,-.56),l.castShadow=!0,l.receiveShadow=!0,e.add(l);let c=new He(new Gn(.022,.022,.78,12),r);c.rotation.x=Math.PI*.5,c.position.set(0,-.05,-.46),c.castShadow=!0,c.receiveShadow=!0,e.add(c),t.position.set(0,.02,-1.02)}return e.scale.setScalar(.92),e.rotation.set(-.18,Math.PI,.08),e.position.set(.05,-.05,-.08),e.add(t),{group:e,muzzle:t}}var nt=km();vt.add(nt.root);var Ma={handgun:Cl("handgun"),assault:Cl("assault"),shotgun:Cl("shotgun")};Object.values(Ma).forEach(i=>{i.group.visible=!1,nt.weaponPivot.add(i.group)});var Zr=new st,Ul=new He(new kn(.09,12,10),new Hn({color:16773796,transparent:!0,opacity:0})),qr=new He(new Ur(.14,.34,10),new Hn({color:16747852,transparent:!0,opacity:0})),xu=new tr(16763002,0,8,2);qr.rotation.x=Math.PI*.5;qr.position.z=-.18;Zr.add(Ul,qr,xu);Zr.visible=!1;var zl={handgun:{key:"handgun",slot:1,name:"HANDGUN",meta:"SIDEARM / precise semi auto",magSize:10,ammoInMag:10,reserve:30,reloadTime:1.05,fireInterval:.23,auto:!1,pellets:1,damage:34,blockDamage:1,knockback:4.8,baseSpread:we.degToRad(.2),spreadGrowth:we.degToRad(.45),moveSpread:we.degToRad(.35),heatGain:.24,coolRate:1.8,flashScale:1,recoil:{cam:.06,back:.12,up:.06,pitch:.15,yaw:.03,roll:.06},craftCost:4,craftAmount:12,heat:0},assault:{key:"assault",slot:2,name:"VOXEL RIFLE",meta:"FULL AUTO / urban breach rifle",magSize:30,ammoInMag:30,reserve:120,reloadTime:1.48,fireInterval:.085,auto:!0,pellets:1,damage:16,blockDamage:1,knockback:3.2,baseSpread:we.degToRad(.24),spreadGrowth:we.degToRad(1.45),moveSpread:we.degToRad(.56),heatGain:.12,coolRate:1.06,flashScale:.95,recoil:{cam:.035,back:.09,up:.05,pitch:.11,yaw:.02,roll:.045},craftCost:6,craftAmount:30,heat:0},shotgun:{key:"shotgun",slot:3,name:"SHOTGUN",meta:"BREACHER / 10 pellet blast",magSize:5,ammoInMag:5,reserve:10,reloadTime:1.75,fireInterval:.82,auto:!1,pellets:10,damage:12,blockDamage:1,knockback:9.2,baseSpread:we.degToRad(4.6),spreadGrowth:we.degToRad(.8),moveSpread:we.degToRad(1.2),heatGain:.52,coolRate:1.25,flashScale:1.8,recoil:{cam:.095,back:.18,up:.1,pitch:.22,yaw:.035,roll:.08},craftCost:5,craftAmount:4,heat:0}},de=zl[Ea],lu=[new M(-20,0,-22),new M(-11,0,-24),new M(0,0,-25),new M(13,0,-23),new M(24,0,-11),new M(24,0,10),new M(14,0,23),new M(0,0,25),new M(-14,0,23),new M(-24,0,9)],ir=new M(-23,0,23),Pe={current:0,activeCount:0,pending:!1,countdown:0,nextRound:1,announcedSecond:-1};function Vr(i){Ea=i,de=zl[i],hn=!1,ar=0,Ee.reloadTarget=0,Object.entries(Ma).forEach(([e,t])=>{t.group.visible=e===i}),Ma[i].muzzle.add(Zr),pu.textContent=`SWAP ${de.slot}`,dt(`${de.name} online.`,1.2)}function Vm(){let i=["handgun","assault","shotgun"],e=(i.indexOf(Ea)+1)%i.length;Vr(i[e])}function Sa(i=!1){hn||de.reserve<=0||!i&&de.ammoInMag>=de.magSize||(hn=!0,ar=de.reloadTime,qe.queuedSemiShot=!1,dt(`${de.name} reloading.`,.9))}function Wm(){let i=de.magSize-de.ammoInMag,e=Math.min(i,de.reserve);de.ammoInMag+=e,de.reserve-=e,hn=!1,ar=0,dt(`${de.name} ready.`,.9)}function yu(){if(ee.materials<de.craftCost){dt(`Need ${de.craftCost} scrap for ${de.name} ammo.`,1.2);return}ee.materials-=de.craftCost,de.reserve+=de.craftAmount,dt(`${de.name} ammo crafted +${de.craftAmount}.`,1.2)}function Mu(){if(ee.materials<8){dt("Need 8 scrap to build a grenade.",1.2);return}ee.materials-=8,ee.grenadeCount+=1,dt("Grenade fabricated from salvage.",1.2)}function _a(i,e,t=1){let n=new st,r={ammo:16767112,scrap:8841471,grenade:9633674},s={ammo:6441240,scrap:1196626,grenade:1329436},a=new He(new Tt(.28,.28,.28),new Qe({color:r[i],emissive:s[i],emissiveIntensity:.72,roughness:.48,metalness:.2,flatShading:!0}));if(a.castShadow=!0,n.add(a),i==="ammo"){let o=new He(new Tt(.1,.42,.1),new Qe({color:5979939,roughness:.4,metalness:.24,flatShading:!0}));o.castShadow=!0,n.add(o)}else if(i==="scrap"){let o=new He(new Tt(.42,.08,.18),new Qe({color:15268095,roughness:.32,metalness:.42,flatShading:!0}));o.rotation.set(.3,.6,.1),o.castShadow=!0,n.add(o)}else{let o=new He(new kn(.12,10,8),new Qe({color:15267801,roughness:.2,metalness:.14,flatShading:!0}));o.position.y=.14,o.castShadow=!0,n.add(o)}n.position.copy(e),Ye.add(n),kr.push({type:i,amount:t,group:n,baseY:e.y,phase:Math.random()*Math.PI*2,pickupRadius:1.05})}function yi(i,e,t,n=1,r=12){for(let s=0;s<r;s+=1){let a=we.randFloat(.03,.08)*n,o=new Qe({color:t[Math.random()*t.length|0],emissive:2364171,emissiveIntensity:.32,transparent:!0,opacity:1,roughness:.72,flatShading:!0}),l=new He(new Tt(a,a,a),o);l.castShadow=!0,l.position.copy(i).addScaledVector(e,.04);let c=e.clone().multiplyScalar(we.randFloat(1.6,4.4)*n).add(new M(we.randFloatSpread(1.2),we.randFloat(.4,1.8),we.randFloatSpread(1.2)).multiplyScalar(n)),h=new M(we.randFloatSpread(8),we.randFloatSpread(8),we.randFloatSpread(8));Ye.add(l),Xn.push({mesh:l,velocity:c,spin:h,life:we.randFloat(.28,.56),maxLife:0}),Xn[Xn.length-1].maxLife=Xn[Xn.length-1].life}}function Xm(i,e,t,n=.9){let r=new $e().setFromPoints([i,e]),s=new Qi({color:t,transparent:!0,opacity:n}),a=new Lr(r,s);Ye.add(a),fa.push({line:a,material:s,life:.08,maxLife:.08})}function jm(i,e=5,t=16756814){let n=new tr(t,7,e*4,2);n.position.copy(i),Ye.add(n);let r=new He(new kn(e*.22,12,10),new Hn({color:t,transparent:!0,opacity:.48}));r.position.copy(i),Ye.add(r),va.push({light:n,mesh:r,life:.22,maxLife:.22,radius:e})}function Su(i){Gr(lr,i)}function qm(i){Gr(or,i),Gr(Bl,i),Gr(Fl,i.mesh),Gr(Ta,i.mesh),Su(i.mesh),delete i.mesh.userData.blockRef}function bu(i,e,t){qm(i),Nl.remove(i.mesh),yi(e||i.mesh.position.clone(),t||new M(0,1,0),i.debris,1.2,18),Math.random()<.7&&_a("scrap",i.mesh.position.clone().add(new M(0,.4,0)),we.randInt(1,2)),ee.score+=10}function Ym(i,e,t,n){if(!i.destructible){yi(t,n,i.debris,.9,8);return}i.hp-=e,yi(t,n,i.debris,.75,8),i.hp<=0&&bu(i,t,n)}function Zm(i,e,t=120,n={}){let r=Qm(new M(i,0,e),.38,1.62),s=new st;Ye.add(s);let a=new Qe({color:5027919,emissive:1920543,emissiveIntensity:.34,roughness:.74,metalness:.08,flatShading:!0}),o=new Qe({color:2377003,roughness:.82,metalness:.08,flatShading:!0}),l=new Qe({color:15269847,emissive:13762448,emissiveIntensity:.44,roughness:.22,metalness:.12,flatShading:!0}),c=je(.54,.64,.32,a,new M(0,.1,0),s),h=je(.4,.22,.26,o,new M(0,-.34,0),s),u=je(.42,.42,.42,a,new M(0,.58,.02),s),d=je(.36,.12,.28,o,new M(0,.38,.12),s),p=je(.08,.08,.06,l,new M(-.12,.62,.22),s),m=je(.08,.08,.06,l,new M(.12,.62,.22),s),x=je(.16,.56,.16,a,new M(-.38,.04,0),s),g=je(.16,.56,.16,a,new M(.38,.04,0),s),f=je(.18,.62,.18,o,new M(-.14,-.74,0),s),_=je(.18,.62,.18,o,new M(.14,-.74,0),s),v={name:"Tetta Virus",hp:t,maxHp:t,group:s,bodyMeshes:[c,h,u,d,p,m,x,g,f,_],materials:[a,o,l],position:r.clone(),velocity:new M,radius:.38,height:1.62,flash:0,alive:!0,pulse:Math.random()*Math.PI*2,detectionRange:40,stopRange:1.55,maxSpeed:n.maxSpeed||3.1,accel:n.accel||7.8,stepHeight:n.stepHeight||1.08,jumpHeight:n.jumpHeight||5.55,jumpSpeed:n.jumpSpeed||17.7,repathTimer:0,steerDir:new M,attackCooldown:we.randFloat(.2,.7),attackDamage:n.attackDamage||16,round:n.round||1,onGround:!0,jumpCooldown:we.randFloat(.1,.35)};s.position.set(r.x,r.y+v.height*.5,r.z),v.bodyMeshes.forEach(y=>{y.userData.enemyRef=v,lr.push(y)}),xi.push(v)}function Jm(i){i.alive=!1,i.bodyMeshes.forEach(e=>Su(e)),Ye.remove(i.group),ee.score+=220+i.round*30,ee.level=1+Math.floor(ee.score/1500),yi(i.group.position.clone(),new M(0,1,0),[15204303,7660395,2055207],2.2,28),_a("ammo",i.position.clone().add(new M(0,.45,0)),1),_a("scrap",i.position.clone().add(new M(.24,.4,.12)),we.randInt(2,4)+Math.floor(i.round/3)),Math.random()<.28&&_a("grenade",i.position.clone().add(new M(-.18,.42,-.12)),1),dt(`${i.name} shattered into salvage.`,1.2)}function Eu(i){return{count:Math.min(18,4+i*2),hpBase:96+i*18,hpStep:7,maxSpeed:Math.min(4.8,3.05+i*.14),accel:7.8+i*.22,attackDamage:13+i*2,countdown:ln(3.8-i*.14,1.8,3.8)}}function cu(i){let e=Eu(i);Pe.current=i,Pe.activeCount=e.count,Pe.pending=!1,Pe.countdown=0,Pe.nextRound=i+1,Pe.announcedSecond=-1;for(let t=0;t<e.count;t+=1){let n=lu[t%lu.length],r=we.randFloatSpread(1.6),s=we.randFloatSpread(1.6);Zm(n.x+r,n.z+s,e.hpBase+t*e.hpStep,{maxSpeed:e.maxSpeed,accel:e.accel,attackDamage:e.attackDamage,round:i})}ee.armor=Math.min(ee.maxArmor,ee.armor+10+i*2),dt(`Round ${i} incoming. ${e.count} hostiles breaching the district.`,2.2)}function Km(){Pe.pending||(Pe.pending=!0,Pe.countdown=Eu(Pe.nextRound).countdown,Pe.announcedSecond=-1,dt(`Round ${Pe.current} clear. Salvage fast, next wave inbound.`,1.8))}function $m(i){if(!Yr())return;if(Pe.current===0){cu(1);return}if(!Pe.pending&&Pe.activeCount===0&&Km(),!Pe.pending)return;Pe.countdown-=i;let e=Math.max(0,Math.ceil(Pe.countdown));e!==Pe.announcedSecond&&(Pe.announcedSecond=e,xa.textContent=`Round ${Pe.current} clear. Next wave in ${e}.`),Pe.countdown<=0&&cu(Pe.nextRound)}function cn(i,e,t,n=ee.radius,r=1.1,s=2.3){let a=[[0,0],[n*.7,0],[-n*.7,0],[0,n*.7],[0,-n*.7]],o=null;for(let[l,c]of a){Xr.set(i+l,t+r,e+c),ut.set(Xr,Dm.set(0,-1,0)),ut.far=s;let h=ut.intersectObjects(Fl,!1)[0];h&&(h.face&&h.face.normal.y<.4||(!o||h.point.y>o.height)&&(o={height:h.point.y,object:h.object}))}return o}function Tu(i,e,t,n,r,s){let a=t+.04,o=t+s-.04;return e+r>i.min.x&&e-r<i.max.x&&n+r>i.min.z&&n-r<i.max.z&&o>i.min.y&&a<i.max.y}function Hl(i,e,t,n,r){for(let s of or)if(Tu(s.bounds,i,e,t,n,r))return!0;return!1}function hu(i,e,t,n,r){if(Hl(i,e,t,n,r)||Math.hypot(vt.position.x-i,vt.position.z-t)<3.2)return!0;for(let a of xi){if(!a.alive)continue;if(Math.hypot(a.position.x-i,a.position.z-t)<n+a.radius+.45)return!0}return!1}function Qm(i,e,t){let n=[0,1.8,3.4,5.2,7],r=[0,Math.PI/4,Math.PI/2,Math.PI*3/4,Math.PI,Math.PI*5/4,Math.PI*3/2,Math.PI*7/4];for(let a of n)for(let o of r){let l=i.x+Math.cos(o)*a,c=i.z+Math.sin(o)*a,h=cn(l,c,2.5,e,3.6,6);if(!h)continue;let u=h.height;if(!hu(l,u+.02,c,e,t))return new M(l,u,c)}for(let[a,o]of[[0,0],[6,0],[-6,0],[0,6],[0,-6]]){let l=i.x+a,c=i.z+o,h=cn(l,c,2.5,e,3.6,6);if(!h)continue;let u=h.height;if(!hu(l,u+.02,c,e,t))return new M(l,u,c)}let s=cn(i.x,i.z,6,e,6.5,8);return new M(i.x,s?s.height:0,i.z)}function wu(){for(let e of[0,2,4,6])for(let t of[0,Math.PI/4,Math.PI/2,Math.PI*3/4,Math.PI,Math.PI*5/4,Math.PI*3/2,Math.PI*7/4]){let n=ir.x+Math.cos(t)*e,r=ir.z+Math.sin(t)*e,s=cn(n,r,4,ee.radius,4.5,7);if(!s)continue;let a=s.object?.userData?.colliderRef?.style,o=s.height;if(a==="road"||Hl(n,o+.02,r,ee.radius,ee.height))continue;let l=!1;for(let c of xi){if(!c.alive)continue;if(Math.hypot(c.position.x-n,c.position.z-r)<2.8){l=!0;break}}if(!l)return new M(n,o,r)}let i=cn(ir.x,ir.z,6,ee.radius,6.5,8);return new M(ir.x,i?i.height:0,ir.z)}function Au(){vt.position.copy(wu())}function ef(i,e,t,n,r){let s=cn(i.x,i.z,e+r,t,1.4+r,3.4+r);if(!s)return!1;let a=s.height-e;return a<=.04||a>r||Hl(i.x,s.height+.02,i.z,t,n)?!1:(i.y=s.height,!0)}function ba(i,e,t,n,r,s=i.y,a=0){for(let o of or)Tu(o.bounds,i.x,i.y,i.z,t,n)&&(a>0&&ef(i,s,t,n,a)||(r==="x"?(e.x>0?i.x=o.bounds.min.x-t:e.x<0&&(i.x=o.bounds.max.x+t),e.x=0):(e.z>0?i.z=o.bounds.min.z-t:e.z<0&&(i.z=o.bounds.max.z+t),e.z=0)))}function tf(i,e){if(ee.velocity.y<=0)return;let t=i+ee.height,n=e.y+ee.height;for(let r of or)if(!(e.x+ee.radius<=r.bounds.min.x||e.x-ee.radius>=r.bounds.max.x||e.z+ee.radius<=r.bounds.min.z||e.z-ee.radius>=r.bounds.max.z)&&t<=r.bounds.min.y&&n>=r.bounds.min.y&&e.y<r.bounds.min.y){e.y=r.bounds.min.y-ee.height,ee.velocity.y=0;return}}function Aa(i=Qt,e=!0){let t=ot.pitch+(e?Ee.cam:0);return i.set(Math.sin(ot.yaw)*Math.cos(t),Math.sin(t),Math.cos(ot.yaw)*Math.cos(t)),i.normalize()}function nf(i=Qt){return i.set(Math.sin(ot.yaw),0,Math.cos(ot.yaw)).normalize(),i}function Ru(i,e){ot.yaw-=i*.0032,ot.pitch=ln(ot.pitch-e*.0024,ot.pitchMin,ot.pitchMax),et.xTarget=ln(et.xTarget-i*18e-5,-.08,.08),et.yTarget=ln(et.yTarget+e*12e-5,-.08,.08)}function rf(i){ee.damageCooldown=Math.max(0,ee.damageCooldown-i);let e=(qe.forward?1:0)-(qe.backward?1:0),t=(qe.right?1:0)-(qe.left?1:0),n=ln(e+-at.moveY,-1,1),r=ln(t+at.moveX,-1,1);nf(Qt),$t.crossVectors(Qt,vi).normalize();let s=fu.set(0,0,0).addScaledVector(Qt,n).addScaledVector($t,r);s.lengthSq()>0&&s.normalize().multiplyScalar(ee.onGround?ee.moveSpeed:ee.airMoveSpeed),ee.velocity.x=Rt(ee.velocity.x,s.x,ee.onGround?18:5.8,i),ee.velocity.z=Rt(ee.velocity.z,s.z,ee.onGround?18:5.8,i),ee.moveAmount=Math.hypot(ee.velocity.x,ee.velocity.z),qe.jumpQueued&&ee.onGround&&(ee.velocity.y=ee.jumpSpeed,ee.onGround=!1),qe.jumpQueued=!1,ee.velocity.y-=ee.gravity*i;let a=vt.position.clone();a.x+=ee.velocity.x*i,ba(a,ee.velocity,ee.radius,ee.height,"x"),a.z+=ee.velocity.z*i,ba(a,ee.velocity,ee.radius,ee.height,"z");let o=vt.position.y;a.y+=ee.velocity.y*i,tf(o,a);let l=cn(a.x,a.z,a.y);l&&ee.velocity.y<=0&&a.y<=l.height+.15&&a.y>=l.height-.55?(a.y=l.height,ee.velocity.y=0,ee.onGround=!0):ee.onGround=!1,a.y<-14&&(a.copy(wu()),ee.velocity.set(0,0,0),Cu(18,"Fall impact")),vt.position.copy(a)}function sf(i){ee.onGround&&ee.moveAmount>.2&&(ee.bobTime+=i*9.8);let e=ee.onGround?ln(ee.moveAmount/ee.moveSpeed,0,1):0,t=Math.sin(ee.bobTime*1.8)*.68*e,n=Math.abs(Math.cos(ee.bobTime*3.6))*.04*e,r=Math.atan2(Qt.x||Math.sin(ot.yaw),Qt.z||Math.cos(ot.yaw));nt.bodyYaw.rotation.y=gu(nt.bodyYaw.rotation.y,r,10,i),nt.upper.position.y=Rt(nt.upper.position.y,.88+n,10,i),nt.legL.rotation.x=t,nt.legR.rotation.x=-t,Ee.reloadTarget=hn?1:0,Ee.reloadLift=Rt(Ee.reloadLift,Ee.reloadTarget,9,i),et.x=Rt(et.x,et.xTarget,12,i),et.y=Rt(et.y,et.yTarget,12,i),et.xTarget=Rt(et.xTarget,0,16,i),et.yTarget=Rt(et.yTarget,0,16,i),sr(Ee.pos,Ee.posTarget,26,i),sr(Ee.posTarget,au,12,i),sr(Ee.rot,Ee.rotTarget,24,i),sr(Ee.rotTarget,au,12,i),Ee.cam=Rt(Ee.cam,Ee.camTarget,28,i),Ee.camTarget=Rt(Ee.camTarget,0,14,i);let s=Math.sin(Ee.reloadLift*Math.PI)*Ee.reloadLift,a=.34+Ee.pos.z*.25+s*.1,o=-.02+Ee.pos.y*.3-s*.1,l=et.x*.26-Ee.rot.y*.18;nt.weaponPivot.position.set(.08+Ee.pos.x*.6-et.x*.05,o-s*.22,a),nt.weaponPivot.rotation.set(-.22-Ee.rot.x*.9-et.y*.28-s*.36,.12+l,.04-Ee.rot.z*.7-s*.2),nt.armL.position.set(-.26,.02+n*.4,.16+Ee.pos.z*.12),nt.armR.position.set(.24,-.02+n*.4,.18+Ee.pos.z*.1),nt.handL.position.set(-.08,-.18-s*.06,.38+Ee.pos.z*.16),nt.handR.position.set(.14,-.2-s*.08,.42+Ee.pos.z*.12),nt.armL.rotation.set(-1.26-Ee.rot.x*.32+t*.08-s*.18,.06+et.x*.22,-.9+Ee.rot.z*.15),nt.armR.rotation.set(-1.38-Ee.rot.x*.38-t*.06-s*.22,-.18+et.x*.32,.54-Ee.rot.z*.16),nt.handL.rotation.set(-.22,.12,-.34),nt.handR.rotation.set(-.18,-.16,.18);let c=.8+An*.9;Ul.material.opacity=An*.95,qr.material.opacity=An*.72,Ul.scale.setScalar(c),qr.scale.set(de.flashScale,de.flashScale,de.flashScale+An*.3),xu.intensity=5.2*An,Zr.visible=An>.05,An=Rt(An,0,30,i)}function af(i){let e=Qt.copy(vt.position).add(new M(0,ot.focusHeight,0)),t=Aa(fu);$t.crossVectors(t,vi).normalize();let n=Il.copy(e).addScaledVector(t,12).addScaledVector($t,et.x*1.2).addScaledVector(vi,et.y*-.8),r=Im.copy(e).addScaledVector($t,ot.shoulder+et.x*.4).addScaledVector(vi,.8+et.y*.3).addScaledVector(t,-(ot.distance+Ee.pos.z*3.2)),s=Um.subVectors(r,e),a=s.length();s.normalize(),ut.set(e,s),ut.far=a;let o=ut.intersectObjects(Ta,!1)[0];o&&r.copy(o.point).addScaledVector(o.face?o.face.normal.clone().transformDirection(o.object.matrixWorld).normalize():vi,.28),sr(ot.currentCameraPos,r,10,i),sr(ot.currentLookPos,n,12,i),jn.position.copy(ot.currentCameraPos),jn.lookAt(ot.currentLookPos)}function Cu(i,e="Hostile impact"){if(ee.damageCooldown>0)return;ee.damageCooldown=.48;let t=Math.min(ee.armor,i*.7);ee.armor-=t;let n=Math.max(0,i-t);ee.hp=Math.max(0,ee.hp-n),nt.visor.material.emissiveIntensity=1.2,dt(`${e}. HP ${ee.hp} / ${ee.maxHp}.`,1.1),ee.hp<=0&&(ee.hp=ee.maxHp,ee.armor=Math.max(30,ee.maxArmor*.4),Au(),ee.velocity.set(0,0,0),dt("Suit rebooted at extraction point.",1.8))}function Dl(i,e,t){ut.set(i,e),ut.far=t;let n=ut.intersectObjects(Ta,!1)[0];return!!(n&&n.distance<t-.12)}function of(i){let e=Qt.subVectors(vt.position,i.position),t=Math.hypot(e.x,e.z);if(t<.001||t>i.detectionRange||t<i.stopRange)return i.steerDir.set(0,0,0);let n=i.steerDir.set(e.x,0,e.z).normalize(),r=Xr.set(i.position.x,i.position.y+i.height*.6,i.position.z),s=Math.min(2.2,t);if(!Dl(r,n,s))return n;let a=n.clone(),o=-1/0,l=[Math.PI/6,-Math.PI/6,Math.PI/3,-Math.PI/3,Math.PI/2,-Math.PI/2];for(let c of l){let h=n.clone().applyAxisAngle(vi,c),d=(Dl(r,h,1.8)?-10:0)+h.dot(n);d>o&&(o=d,a=h)}return i.steerDir.copy(a.normalize())}function lf(i){if(!i.onGround||i.jumpCooldown>0||i.steerDir.lengthSq()<.04)return!1;let e=Xr.set(i.position.x,i.position.y+i.height*.55,i.position.z);if(!Dl(e,i.steerDir,.9))return!1;let t=i.position.x+i.steerDir.x*.95,n=i.position.z+i.steerDir.z*.95,r=cn(t,n,i.position.y+i.jumpHeight,i.radius,1.8+i.jumpHeight,4.6);if(!r)return!1;let s=r.height-i.position.y;return s>i.stepHeight*.9&&s<=i.jumpHeight}function cf(i,e){i.repathTimer-=e,i.jumpCooldown=Math.max(0,i.jumpCooldown-e),i.repathTimer<=0&&(of(i),i.repathTimer=.18+Math.random()*.1),i.steerDir.lengthSq()>0&&(i.velocity.x+=i.steerDir.x*i.accel*e,i.velocity.z+=i.steerDir.z*i.accel*e),lf(i)&&(i.velocity.y=i.jumpSpeed,i.onGround=!1,i.jumpCooldown=.9),i.velocity.y-=18*e,i.velocity.x=Rt(i.velocity.x,0,5.5,e),i.velocity.z=Rt(i.velocity.z,0,5.5,e);let t=Math.hypot(i.velocity.x,i.velocity.z);if(t>i.maxSpeed){let o=i.maxSpeed/t;i.velocity.x*=o,i.velocity.z*=o}let n=i.position.clone();n.x+=i.velocity.x*e,ba(n,i.velocity,i.radius,i.height,"x",i.position.y,i.stepHeight),n.z+=i.velocity.z*e,ba(n,i.velocity,i.radius,i.height,"z",n.y,i.stepHeight),n.y+=i.velocity.y*e;let r=cn(n.x,n.z,n.y);r&&i.velocity.y<=0&&n.y<=r.height+.08?(n.y=r.height,i.velocity.y=0,i.onGround=!0):i.onGround=!1,i.position.copy(n);let s=.08+Math.sin(ya.elapsedTime*2.6+i.pulse)*.03;if(i.group.position.set(i.position.x,i.position.y+i.height*.5+s,i.position.z),i.steerDir.lengthSq()>.01){let o=Math.atan2(i.steerDir.x,i.steerDir.z);i.group.rotation.y=gu(i.group.rotation.y,o,10,e)}i.flash=Rt(i.flash,0,9,e),i.materials[0].color.setHex(5027919).lerp(new be(16777215),i.flash),i.materials[1].color.setHex(2377003).lerp(new be(16777215),i.flash*.6),i.materials[0].emissiveIntensity=.34+i.flash*.85,i.materials[2].emissiveIntensity=.44+i.flash*1.2,i.attackCooldown-=e,i.position.distanceTo(vt.position)<1.26&&i.attackCooldown<=0&&(i.attackCooldown=.75,Cu(i.attackDamage,"Tetta Virus strike"),Ee.camTarget+=.04)}function hf(i,e){$t.crossVectors(i,vi),$t.lengthSq()<1e-4?$t.set(1,0,0):$t.normalize(),Il.crossVectors($t,i).normalize();let t=Math.tan(e*Math.sqrt(Math.random())),n=Math.random()*Math.PI*2;return i.clone().addScaledVector($t,Math.cos(n)*t).addScaledVector(Il,Math.sin(n)*t).normalize()}function uf(i){let e=Xr.copy(vt.position).add(new M(0,ee.eyeHeight,0));ut.set(jn.position,i),ut.far=120;let t=ut.intersectObjects(lr,!1)[0];return t?t.point.clone():e.addScaledVector(i,90)}function Lu(i,e,t,n,r,s){i.hp=Math.max(0,i.hp-t),i.flash=1,i.velocity.addScaledVector(e,n),i.velocity.y+=n*.2,yi(r,s,[15400906,7991154,2845231],1.05,16),i.hp<=0&&i.alive&&Jm(i)}function Pu(){if(!Yr()||ee.grenadeCount<=0){ee.grenadeCount<=0&&dt("No grenades left. Craft more from scrap.",1.2);return}ee.grenadeCount-=1;let i=new He(new kn(.16,10,8),new Qe({color:7000172,emissive:1920290,emissiveIntensity:.46,roughness:.36,metalness:.12,flatShading:!0}));i.castShadow=!0,Ye.add(i);let e=vt.position.clone().add(new M(0,ee.eyeHeight*.8,0)),t=Aa(new M).clone(),n=t.multiplyScalar(10).add(new M(0,2.4,0)).addScaledVector(ee.velocity,.28);i.position.copy(e).addScaledVector(t,.8),ga.push({mesh:i,velocity:n,fuse:1.05,bounces:0}),dt("Grenade out.",.8)}function df(i){let e=i.mesh.position.clone();jm(e,4.8,16755023),yi(e,new M(0,1,0),[16773563,16758363,8115711],2.4,42);for(let t of xi){if(!t.alive)continue;let n=t.position.distanceTo(e);if(n>4.8)continue;let r=1-n/4.8,s=t.position.clone().sub(e).setY(.2).normalize();Lu(t,s,54*r,8.5*r,t.group.position.clone(),s)}for(let t of[...Bl]){let n=t.mesh.position.distanceTo(e);if(n>3.3)continue;(n<2.2?999:1)>=t.hp&&bu(t,t.mesh.position.clone(),t.mesh.position.clone().sub(e).normalize())}}function pf(i){if(hn)return;if(de.ammoInMag<=0){de.reserve>0?Sa(!0):dt("Magazine dry. Craft ammo from scrap.",1.2);return}de.ammoInMag-=1,de.heat=ln(de.heat+de.heatGain,0,1.4),mu=i+de.fireInterval,Ee.camTarget+=de.recoil.cam,Ee.posTarget.z+=de.recoil.back,Ee.posTarget.y+=de.recoil.up,Ee.rotTarget.x+=de.recoil.pitch,Ee.rotTarget.y+=we.randFloatSpread(de.recoil.yaw),Ee.rotTarget.z+=we.randFloatSpread(de.recoil.roll),An=de.flashScale,Zr.visible=!0;let e=de.baseSpread+de.spreadGrowth*de.heat+(ee.moveAmount>1.4?de.moveSpread:0),t=Aa(Qt).clone(),n=uf(t),r=Ma[Ea].muzzle.getWorldPosition(new M),s=!1;for(let a=0;a<de.pellets;a+=1){let o=de.pellets===1?n.clone().sub(r).normalize().applyEuler(Nm.set(we.randFloatSpread(e*.6),we.randFloatSpread(e),0)).normalize():hf(n.clone().sub(r).normalize(),e);ut.set(r,o),ut.far=120;let l=ut.intersectObjects(lr,!1)[0],c=l?l.point.clone():r.clone().addScaledVector(o,90);if((de.pellets===1||a<5)&&Xm(r.clone(),c,de.key==="shotgun"?16766868:16773302,de.pellets===1?.92:.62),!l)continue;let h=l.face?l.face.normal.clone().transformDirection(l.object.matrixWorld).normalize():new M(0,1,0),u=l.object.userData.enemyRef;if(u&&u.alive){s=!0,Lu(u,o,de.damage,de.knockback/de.pellets,l.point.clone(),h);continue}let d=l.object.userData.blockRef;d?Ym(d,de.blockDamage,l.point.clone(),h):yi(l.point.clone(),h,jr.concrete.debris,de.pellets>1?.8:1,de.pellets>1?8:12)}s&&(ma=.14),de.ammoInMag<=0&&de.reserve>0&&Sa(!0)}function mf(i){hn&&(ar-=i,ar<=0&&Wm())}function ff(i){if(!Yr()||hn)return;(de.auto?qe.triggerHeld:qe.queuedSemiShot)&&i>=mu&&(pf(i),de.auto||(qe.queuedSemiShot=!1))}function gf(i){for(let e=kr.length-1;e>=0;e-=1){let t=kr[e];t.group.rotation.y+=i*1.8,t.group.position.y=t.baseY+.12+Math.sin(ya.elapsedTime*3.1+t.phase)*.06;let n=t.group.position.x-vt.position.x,r=t.group.position.z-vt.position.z;if(!(Math.hypot(n,r)>t.pickupRadius||Math.abs(t.group.position.y-(vt.position.y+.6))>1.5)){if(t.type==="ammo"){let a=de.key==="handgun"?10:de.key==="assault"?30:4;de.reserve+=a,dt(`${de.name} ammo +${a}.`,1)}else t.type==="scrap"?(ee.materials+=t.amount,dt(`Scrap recovered +${t.amount}.`,1)):(ee.grenadeCount+=t.amount,dt(`Grenade stock +${t.amount}.`,1));Ye.remove(t.group),kr.splice(e,1)}}}function vf(i){for(let e=ga.length-1;e>=0;e-=1){let t=ga[e];t.fuse-=i,t.velocity.y-=16*i,t.mesh.position.addScaledVector(t.velocity,i),t.mesh.rotation.x+=i*7,t.mesh.rotation.z+=i*5;let n=cn(t.mesh.position.x,t.mesh.position.z,t.mesh.position.y-.16);n&&t.velocity.y<0&&t.mesh.position.y<=n.height+.16&&(t.mesh.position.y=n.height+.16,t.velocity.y*=-.34,t.velocity.x*=.72,t.velocity.z*=.72,t.bounces+=1),t.fuse<=0&&(df(t),Ye.remove(t.mesh),ga.splice(e,1))}}function _f(i){for(let e=Xn.length-1;e>=0;e-=1){let t=Xn[e];if(t.life-=i,t.life<=0){Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Xn.splice(e,1);continue}let n=t.life/t.maxLife;t.velocity.y-=9*i,t.velocity.multiplyScalar(Math.exp(-4.6*i)),t.mesh.position.addScaledVector(t.velocity,i),t.mesh.rotation.x+=t.spin.x*i,t.mesh.rotation.y+=t.spin.y*i,t.mesh.rotation.z+=t.spin.z*i,t.mesh.material.opacity=n,t.mesh.scale.setScalar(.55+n*.85)}for(let e=va.length-1;e>=0;e-=1){let t=va[e];if(t.life-=i,t.life<=0){Ye.remove(t.light),Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),va.splice(e,1);continue}let n=t.life/t.maxLife;t.light.intensity=6*n,t.mesh.material.opacity=.45*n,t.mesh.scale.setScalar(1+(1-n)*2.4)}}function xf(i){for(let e=fa.length-1;e>=0;e-=1){let t=fa[e];if(t.life-=i,t.life<=0){Ye.remove(t.line),t.line.geometry.dispose(),t.material.dispose(),fa.splice(e,1);continue}t.material.opacity=t.life/t.maxLife}}function yf(){let i=Aa(Qt);ut.set(jn.position,i),ut.far=120;let e=ut.intersectObjects(lr,!1)[0];Hr=e&&e.object.userData.enemyRef&&e.object.userData.enemyRef.alive?e.object.userData.enemyRef:null,Hr?(ru.classList.add("visible"),xm.textContent=Hr.name,ym.textContent=`HP ${Math.ceil(Hr.hp)} / ${Hr.maxHp}`):ru.classList.remove("visible")}function Mf(){let i=Lm,e=Ll.width,t=Ll.height,n=24,r=e/(n*2);i.clearRect(0,0,e,t),i.fillStyle="#101722",i.fillRect(0,0,e,t),i.strokeStyle="rgba(113, 148, 184, 0.18)",i.lineWidth=1;for(let o=0;o<=8;o+=1){let l=o/8*e;i.beginPath(),i.moveTo(l,0),i.lineTo(l,t),i.stroke(),i.beginPath(),i.moveTo(0,l),i.lineTo(e,l),i.stroke()}let s=vt.position.x,a=vt.position.z;for(let o of or){let l=(o.bounds.min.x+o.bounds.max.x)*.5,c=(o.bounds.min.z+o.bounds.max.z)*.5;if(Math.abs(l-s)>n+4||Math.abs(c-a)>n+4)continue;let h=Math.max(2,(o.bounds.max.x-o.bounds.min.x)*r),u=Math.max(2,(o.bounds.max.z-o.bounds.min.z)*r),d=e*.5+(l-s)*r-h*.5,p=t*.5+(c-a)*r-u*.5;i.fillStyle=o.minimap||"#788396",i.fillRect(d,p,h,u)}for(let o of kr){let l=e*.5+(o.group.position.x-s)*r,c=t*.5+(o.group.position.z-a)*r;i.fillStyle=o.type==="scrap"?"#74e8ff":o.type==="grenade"?"#88ff7a":"#ffd68c",i.fillRect(l-1.5,c-1.5,3,3)}for(let o of xi){if(!o.alive)continue;let l=e*.5+(o.position.x-s)*r,c=t*.5+(o.position.z-a)*r;i.fillStyle="#ff6760",i.beginPath(),i.arc(l,c,3.5,0,Math.PI*2),i.fill()}i.save(),i.translate(e*.5,t*.5),i.rotate(-ot.yaw),i.fillStyle="#7dd0ff",i.beginPath(),i.moveTo(0,-8),i.lineTo(6,7),i.lineTo(0,4),i.lineTo(-6,7),i.closePath(),i.fill(),i.restore(),i.strokeStyle="rgba(178, 218, 255, 0.5)",i.lineWidth=2,i.strokeRect(1,1,e-2,t-2)}function Sf(i){ma=Math.max(0,ma-i),Mm.classList.toggle("visible",ma>0),su.classList.toggle("dim",!Yr()),pm.textContent=de.name,mm.textContent=de.meta,fm.textContent=`${de.ammoInMag} / ${de.reserve}`,gm.textContent=`GRENADES x${ee.grenadeCount}`,vm.textContent=`C AMMO ${de.craftCost} SCRAP // F GRENADE 8 // G THROW`,_m.textContent=hn?`RELOADING ${Math.max(0,ar).toFixed(1)}`:de.ammoInMag===0&&de.reserve===0?"OUT OF AMMO":"",am.textContent=`${Math.ceil(ee.hp)} / ${ee.maxHp}`,om.textContent=`${Math.ceil(ee.armor)} / ${ee.maxArmor}`,lm.style.width=`${ee.hp/ee.maxHp*100}%`,cm.style.width=`${ee.armor/ee.maxArmor*100}%`,hm.textContent=`${ee.level}`,um.textContent=`${ee.score.toLocaleString()}`,dm.textContent=`${ee.materials}`,Sm.textContent=Pe.current===0?"Stand by for deployment":Pe.pending?`Round ${Pe.current} clear // next wave ${Math.max(1,Math.ceil(Pe.countdown))}`:`Round ${Pe.current} // ${Pe.activeCount} hostiles live`;let e=8+de.heat*16+(ee.moveAmount>1.2?6:0)+(hn?5:0);su.style.setProperty("--gap",`${e}px`),yf(),Mf()}function bf(i){let e=0;if(!Yr()){Pe.activeCount=xi.filter(t=>t.alive).length;return}for(let t of xi)t.alive&&(e+=1,cf(t,i));Pe.activeCount=e}function Ef(i){Object.values(zl).forEach(e=>{e.heat=Math.max(0,e.heat-e.coolRate*i)})}function Iu(i,e){switch(i.code){case"KeyW":qe.forward=e;break;case"KeyS":qe.backward=e;break;case"KeyA":qe.left=e;break;case"KeyD":qe.right=e;break;case"Space":e&&(qe.jumpQueued=!0);break;case"KeyR":e&&Sa(!1);break;case"Digit1":e&&Vr("handgun");break;case"Digit2":e&&Vr("assault");break;case"Digit3":e&&Vr("shotgun");break;case"KeyC":e&&yu();break;case"KeyF":e&&Mu();break;case"KeyG":e&&Pu();break;default:break}}function Uu(i,e){Em.style.transform=`translate(${i}px, ${e}px)`}function Tf(){at.moveX=0,at.moveY=0,at.joystickPointerId=null,Uu(0,0)}function uu(i,e){let t=rr.getBoundingClientRect(),n=t.left+t.width*.5,r=t.top+t.height*.5,s=t.width*.32,a=i-n,o=e-r,l=Math.hypot(a,o)||1,c=Math.min(s,l),h=a/l*c,u=o/l*c;at.moveX=ln(h/s,-1,1),at.moveY=ln(u/s,-1,1),Uu(h,u)}function wf(){qe.triggerHeld=!0,de.auto||(qe.queuedSemiShot=!0)}function du(){qe.triggerHeld=!1}Hm();Au();Vr("assault");document.addEventListener("keydown",i=>Iu(i,!0));document.addEventListener("keyup",i=>Iu(i,!1));document.addEventListener("mousedown",i=>{if(!(un||i.button!==0)){if(!Wr){Pt.domElement.requestPointerLock();return}qe.triggerHeld=!0,de.auto||(qe.queuedSemiShot=!0)}});document.addEventListener("mouseup",i=>{un||i.button!==0||(qe.triggerHeld=!1)});document.addEventListener("mousemove",i=>{un||!Wr||Ru(i.movementX,i.movementY)});document.addEventListener("pointerlockchange",()=>{Wr=document.pointerLockElement===Pt.domElement,Wr||(qe.triggerHeld=!1,qe.queuedSemiShot=!1)});if(un){wn=!0,gi.hidden=!0,_i.textContent="Battlefield live. Rotate sideways and sweep the district.",wa(),rr.addEventListener("pointerdown",t=>{t.preventDefault(),at.joystickPointerId=t.pointerId,rr.setPointerCapture(t.pointerId),uu(t.clientX,t.clientY)}),rr.addEventListener("pointermove",t=>{at.joystickPointerId===t.pointerId&&(t.preventDefault(),uu(t.clientX,t.clientY))});let i=t=>{at.joystickPointerId===t.pointerId&&(t.preventDefault(),Tf())};rr.addEventListener("pointerup",i),rr.addEventListener("pointercancel",i),zr.addEventListener("pointerdown",t=>{t.target.closest(".mobile-btn")||(t.preventDefault(),wn||Wn(),at.lookPointerId=t.pointerId,at.lookLastX=t.clientX,at.lookLastY=t.clientY,zr.setPointerCapture(t.pointerId))}),zr.addEventListener("pointermove",t=>{if(at.lookPointerId!==t.pointerId)return;t.preventDefault();let n=t.clientX-at.lookLastX,r=t.clientY-at.lookLastY;at.lookLastX=t.clientX,at.lookLastY=t.clientY,Ru(n,r)});let e=t=>{at.lookPointerId===t.pointerId&&(t.preventDefault(),at.lookPointerId=null)};zr.addEventListener("pointerup",e),zr.addEventListener("pointercancel",e),Al.addEventListener("pointerdown",t=>{t.preventDefault(),wn||Wn(),wf()}),Al.addEventListener("pointerup",t=>{t.preventDefault(),du()}),Al.addEventListener("pointercancel",t=>{t.preventDefault(),du()}),Tm.addEventListener("pointerdown",t=>{t.preventDefault(),wn||Wn(),qe.jumpQueued=!0}),wm.addEventListener("pointerdown",t=>{t.preventDefault(),wn||Wn(),Sa(!1)}),pu.addEventListener("pointerdown",t=>{t.preventDefault(),wn||Wn(),Vm()}),Am.addEventListener("pointerdown",t=>{t.preventDefault(),wn||Wn(),Pu()}),Rm.addEventListener("pointerdown",t=>{t.preventDefault(),wn||Wn(),ee.grenadeCount<2?Mu():yu()})}window.addEventListener("resize",()=>{jn.aspect=window.innerWidth/window.innerHeight,jn.updateProjectionMatrix(),Pt.setSize(window.innerWidth,window.innerHeight),wa()});window.addEventListener("orientationchange",()=>wa());document.addEventListener("contextmenu",i=>{i.preventDefault()});function Af(){let i=Math.min(ya.getDelta(),.033),e=ya.elapsedTime;Ef(i),$m(i),rf(i),mf(i),ff(e),sf(i),af(i),bf(i),gf(i),vf(i),_f(i),xf(i),Sf(i),ee.level=1+Math.floor(ee.score/1500),nt.visor.material.emissiveIntensity=Rt(nt.visor.material.emissiveIntensity,.34,6,i),Pl>0?Pl-=i:xa.textContent!==ou()&&(xa.textContent=ou()),Pt.render(Ye,jn)}_i&&(_i.textContent=un?"Battlefield live. Rotate to landscape.":"Battlefield live. Click anywhere to lock the cursor.");gi&&(gi.hidden=!0);un||document.addEventListener("click",()=>{Wr||Wn()});Pt.setAnimationLoop(Af);})();
/*! Bundled license information:

three/build/three.module.min.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
