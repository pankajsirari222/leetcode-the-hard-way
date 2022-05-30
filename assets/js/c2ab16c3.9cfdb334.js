"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[290],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return h}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96559:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/guess-number-higher-or-lower/"},l="0374 - Guess Number Higher or Lower (Easy)",s={unversionedId:"0300-0399/guess-number-higher-or-lower-easy",id:"0300-0399/guess-number-higher-or-lower-easy",title:"0374 - Guess Number Higher or Lower (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/guess-number-higher-or-lower/",source:"@site/solutions/0300-0399/0374-guess-number-higher-or-lower-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/guess-number-higher-or-lower-easy",permalink:"/leetcode-the-hard-way/solutions/0300-0399/guess-number-higher-or-lower-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0374-guess-number-higher-or-lower-easy.md",tags:[],version:"current",sidebarPosition:374,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/guess-number-higher-or-lower/"},sidebar:"tutorialSidebar",previous:{title:"0367 - Valid Perfect Square (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/valid-perfect-square-easy"},next:{title:"0389 - Find the Difference (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/find-the-difference-easy"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],m={toc:c};function h(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0374---guess-number-higher-or-lower-easy"},"0374 - Guess Number Higher or Lower (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"We are playing the Guess Game. The game is as follows:"),(0,o.kt)("p",null,"I pick a number from ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),". You have to guess which number I picked."),(0,o.kt)("p",null,"Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess."),(0,o.kt)("p",null,"You call a pre-defined API ",(0,o.kt)("inlineCode",{parentName:"p"},"int guess(int num)"),", which returns three possible results:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-1"),": Your guess is higher than the number I picked (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"num > pick"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1"),": Your guess is lower than the number I picked (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"num < pick"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0"),": your guess is equal to the number I picked (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"num == pick"),").")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the number that I picked"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 10, pick = 6\nOutput: 6\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 1, pick = 1\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 2, pick = 1\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2^31 - 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= pick <= n"))),(0,o.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")," for basic understanding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"/** \n * Forward declaration of guess API.\n * @param  num   your guess\n * @return   -1 if num is higher than the picked number\n *           1 if num is lower than the picked number\n *               otherwise return 0\n * int guess(int num);\n */\n\nclass Solution {\npublic:\n    int guessNumber(int n) {\n        int l = 1, r = n;\n        while (l < r) {\n            // middle point\n            int m = l + (r - l) / 2;\n            // check the result\n            int x = guess(m);\n            // found the answer\n            if (x == 0) return m;\n            // exclude m\n            else if (x == 1) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}h.isMDXComponent=!0}}]);