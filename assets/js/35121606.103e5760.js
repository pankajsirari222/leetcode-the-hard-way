"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(8539),s=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/sort-the-jumbled-numbers/"},m="2191 - Sort the Jumbled Numbers (Medium)",l={unversionedId:"2100-2199/sort-the-jumbled-numbers-medium",id:"2100-2199/sort-the-jumbled-numbers-medium",title:"2191 - Sort the Jumbled Numbers (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/sort-the-jumbled-numbers/",source:"@site/solutions/2100-2199/2191-sort-the-jumbled-numbers-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/sort-the-jumbled-numbers-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/sort-the-jumbled-numbers-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2191-sort-the-jumbled-numbers-medium.md",tags:[],version:"current",sidebarPosition:2191,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sort-the-jumbled-numbers/"},sidebar:"tutorialSidebar",previous:{title:"2190 - Most Frequent Number Following Key In an Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/most-frequent-number-following-key-in-an-array-easy"},next:{title:"2192 - All Ancestors of a Node in a Directed Acyclic Graph (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2191---sort-the-jumbled-numbers-medium"},"2191 - Sort the Jumbled Numbers (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-the-jumbled-numbers"},"https://leetcode.com/problems/sort-the-jumbled-numbers")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," which represents the mapping rule of a shuffled decimal system. ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping[i] = j")," means digit ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," should be mapped to digit ",(0,o.kt)("inlineCode",{parentName:"p"},"j")," in this system."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"mapped value")," of an integer is the new integer obtained by replacing each occurrence of digit ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," in the integer with ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping[i]")," for all ",(0,o.kt)("inlineCode",{parentName:"p"},"0 <= i <= 9"),"."),(0,o.kt)("p",null,"You are also given another integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". Return ",(0,o.kt)("em",{parentName:"p"},"the array")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," ",(0,o.kt)("em",{parentName:"p"},"sorted in ",(0,o.kt)("strong",{parentName:"em"},"non-decreasing")," order based on the ",(0,o.kt)("strong",{parentName:"em"},"mapped values")," of its elements.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elements with the same mapped values should appear in the ",(0,o.kt)("strong",{parentName:"li"},"same relative order")," as in the input."),(0,o.kt)("li",{parentName:"ul"},"The elements of ",(0,o.kt)("inlineCode",{parentName:"li"},"nums")," should only be sorted based on their mapped values and ",(0,o.kt)("strong",{parentName:"li"},"not be replaced")," by them.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]\nOutput: [338,38,991]\nExplanation: \nMap the number 991 as follows:\n1. mapping[9] = 6, so all occurrences of the digit 9 will become 6.\n2. mapping[1] = 9, so all occurrences of the digit 1 will become 9.\nTherefore, the mapped value of 991 is 669.\n338 maps to 007, or 7 after removing the leading zeros.\n38 maps to 07, which is also 7 after removing leading zeros.\nSince 338 and 38 share the same mapped value, they should remain in the same relative order, so 338 comes before 38.\nThus, the sorted array is [338,38,991].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]\nOutput: [123,456,789]\nExplanation: 789 maps to 789, 456 maps to 456, and 123 maps to 123. Thus, the sorted array is [123,456,789].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mapping.length == 10")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= mapping[i] <= 9")),(0,o.kt)("li",{parentName:"ul"},"All the values of ",(0,o.kt)("inlineCode",{parentName:"li"},"mapping[i]")," are ",(0,o.kt)("strong",{parentName:"li"},"unique"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 3 * 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] < 10^9"))),(0,o.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,o.kt)("p",null,"For each number, we generate a mapped value. For example, ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"991")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"991")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"991")))))," -> ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"669")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"669")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"669"))))),". We store it in a pair where the key is the original value and the value is the mapped value. Then we sort by the value so  that we could keep the same relative order if the values are same."),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {\n        vector<pair<int, int>> a;\n        for (auto x : nums) {\n            string s = to_string(x), t;\n            // generate a mapped value\n            for (auto c : s) t += mapping[c - '0'] + '0';\n            // {original value, mapped value}\n            a.push_back({x, stoi(t)});\n        }\n        // sort by value\n        sort(a.begin(), a.end(), [&](const pair<int, int> a, const pair<int, int> b) {\n           return a.second < b.second;\n        });\n        vector<int> ans;\n        // print the original value based on new order\n        for (auto x : a) ans.push_back(x.first);\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);