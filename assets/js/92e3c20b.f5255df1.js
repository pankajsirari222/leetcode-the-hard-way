"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6050],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=l(a),k=r,N=c["".concat(o,".").concat(k)]||c[k]||u[k]||s;return a?n.createElement(N,m(m({ref:t},i),{},{components:a})):n.createElement(N,m({ref:t},i))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var l=2;l<s;l++)m[l]=a[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9229:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return N},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),m=a(8539),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/a-number-after-a-double-reversal/"},l="2119 - A Number After a Double Reversal (Easy)",i={unversionedId:"2100-2199/a-number-after-a-double-reversal-easy",id:"2100-2199/a-number-after-a-double-reversal-easy",title:"2119 - A Number After a Double Reversal (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/a-number-after-a-double-reversal/",source:"@site/solutions/2100-2199/2119-a-number-after-a-double-reversal-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/a-number-after-a-double-reversal-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/a-number-after-a-double-reversal-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2119-a-number-after-a-double-reversal-easy.md",tags:[],version:"current",sidebarPosition:2119,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/a-number-after-a-double-reversal/"},sidebar:"tutorialSidebar",previous:{title:"2111 - Minimum Operations to Make the Array K-Increasing (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-operations-to-make-the-array-k-increasing-hard"},next:{title:"2120 - Execution of All Suffix Instructions Staying in a Grid (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/execution-of-all-suffix-instructions-staying-in-a-grid-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Just do what it says",id:"approach-1-just-do-what-it-says",level:2},{value:"Approach 2: Check Trailing Zero",id:"approach-2-check-trailing-zero",level:2}],k={toc:c};function N(e){var t=e.components,a=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2119---a-number-after-a-double-reversal-easy"},"2119 - A Number After a Double Reversal (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/a-number-after-a-double-reversal/"},"https://leetcode.com/problems/a-number-after-a-double-reversal/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Reversing")," an integer means to reverse all its digits."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"For example, reversing ",(0,s.kt)("inlineCode",{parentName:"li"},"2021")," gives ",(0,s.kt)("inlineCode",{parentName:"li"},"1202"),". Reversing ",(0,s.kt)("inlineCode",{parentName:"li"},"12300")," gives ",(0,s.kt)("inlineCode",{parentName:"li"},"321")," as the ",(0,s.kt)("strong",{parentName:"li"},"leading zeros are not retained"),".")),(0,s.kt)("p",null,"Given an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"num"),", ",(0,s.kt)("strong",{parentName:"p"},"reverse")," ",(0,s.kt)("inlineCode",{parentName:"p"},"num")," to get ",(0,s.kt)("inlineCode",{parentName:"p"},"reversed1"),", ",(0,s.kt)("strong",{parentName:"p"},"then reverse")," ",(0,s.kt)("inlineCode",{parentName:"p"},"reversed1")," to get ",(0,s.kt)("inlineCode",{parentName:"p"},"reversed2"),". Return ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," ",(0,s.kt)("em",{parentName:"p"},"if")," ",(0,s.kt)("inlineCode",{parentName:"p"},"reversed2")," ",(0,s.kt)("em",{parentName:"p"},"equals")," ",(0,s.kt)("inlineCode",{parentName:"p"},"num"),". Otherwise return ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: num = 526\nOutput: true\nExplanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: num = 1800\nOutput: false\nExplanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: num = 0\nOutput: true\nExplanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= num <= 106"))),(0,s.kt)("h2",{id:"approach-1-just-do-what-it-says"},"Approach 1: Just do what it says"),(0,s.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isSameAfterReversals(int num) {\n        if (num == 0) return 1;\n        string s = to_string(num);\n        int n = s.size(), j = 0;\n        while (s[n - 1 - j] == '0') j++;\n        string t = s.substr(0, n - j);\n        return s == t;\n    }\n};\n")),(0,s.kt)("h2",{id:"approach-2-check-trailing-zero"},"Approach 2: Check Trailing Zero"),(0,s.kt)("p",null,"However, a better way to solve this is to check if there is any trailing zero. No matter how many zeros at the end, after removing them all, it won't be same if you reverse it. The only exceptional case is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num=0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,s.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isSameAfterReversals(int num) {\n        return num == 0 || num % 10;\n    }\n};\n")),(0,s.kt)("p",null,"Time Complexity : ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))))}N.isMDXComponent=!0},8539:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);