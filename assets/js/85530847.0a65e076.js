"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4103],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,k=u["".concat(m,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(k,i(i({ref:t},l),{},{components:a})):n.createElement(k,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58906:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"Sieve of Eratosthenes",description:"Author: @wingkwong",hide_table_of_contents:!0},m=void 0,p={unversionedId:"math/number-theory/sieve-of-eratosthenes",id:"math/number-theory/sieve-of-eratosthenes",title:"Sieve of Eratosthenes",description:"Author: @wingkwong",source:"@site/tutorials/math/number-theory/sieve-of-eratosthenes.md",sourceDirName:"math/number-theory",slug:"/math/number-theory/sieve-of-eratosthenes",permalink:"/leetcode-the-hard-way/tutorials/math/number-theory/sieve-of-eratosthenes",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/math/number-theory/sieve-of-eratosthenes.md",tags:[],version:"current",frontMatter:{title:"Sieve of Eratosthenes",description:"Author: @wingkwong",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Binary Exponentiation",permalink:"/leetcode-the-hard-way/tutorials/math/number-theory/binary-exponentiation"},next:{title:"Bit Manipulation",permalink:"/leetcode-the-hard-way/tutorials/bit-masking"}},l={},c=[{value:"C++ Implementation",id:"c-implementation",level:3},{value:"Suggested Problems",id:"suggested-problems",level:3}],u={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This tutorial is written by @wingkwong")),(0,s.kt)("p",null,"Sieve of Eratosthenes is a way of finding all prime numbers up to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," (inclusive)."),(0,s.kt)("p",null,"First we mark all integers as true except 0 and 1. Then starting from 2, we mark out all multiples of 2 that are bigger than itself because they are composite. The next integer that is not marked out is 3 and it is prime. We mark out all multiples of 3 that are bigger than itself. Similarly, we search for the next integer ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," that is not marked out and is prime, then mark out all multiples of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"."),(0,s.kt)("h3",{id:"c-implementation"},"C++ Implementation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'vector<bool> sieveOfEratosthenes(const int n) {\n  assert(n >= 2 && "N must be greater or equal to 2");\n  vector<bool> isPrime(n + 1, true);\n  isPrime[0] = isPrime[1] = false;\n  for (int i = 2; i * i <= n; i++) {\n    if (isPrime[i]) {\n      for (int j = i * i; j <= n; j += i) {\n        isPrime[j] = false;\n      }\n    }\n  }\n  return isPrime;\n}\n')),(0,s.kt)("h3",{id:"suggested-problems"},"Suggested Problems"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../solutions/0200-0299/count-primes"},"0204 - Count Primes (Medium)"))))}h.isMDXComponent=!0}}]);