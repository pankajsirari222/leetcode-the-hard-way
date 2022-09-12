"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6721],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||o;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(8539),s=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/two-out-of-three",tags:["Hash Map"]},l="2032 - Two Out of Three (Easy)",p={unversionedId:"2000-2099/two-out-of-three-easy",id:"2000-2099/two-out-of-three-easy",title:"2032 - Two Out of Three (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/two-out-of-three",source:"@site/solutions/2000-2099/2032-two-out-of-three-easy.md",sourceDirName:"2000-2099",slug:"/2000-2099/two-out-of-three-easy",permalink:"/leetcode-the-hard-way/solutions/2000-2099/two-out-of-three-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2032-two-out-of-three-easy.md",tags:[{label:"Hash Map",permalink:"/leetcode-the-hard-way/solutions/tags/hash-map"}],version:"current",sidebarPosition:2032,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/two-out-of-three",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"2017 - Grid Game (Medium)",permalink:"/leetcode-the-hard-way/solutions/2000-2099/grid-game-medium"},next:{title:"2075 - Decode the Slanted Ciphertext (Medium)",permalink:"/leetcode-the-hard-way/solutions/2000-2099/decode-the-slanted-ciphertext-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2032---two-out-of-three-easy"},"2032 - Two Out of Three (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-out-of-three"},"https://leetcode.com/problems/two-out-of-three")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given three integer arrays ",(0,o.kt)("inlineCode",{parentName:"p"},"nums1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nums2"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"nums3"),", return ",(0,o.kt)("em",{parentName:"p"},"a ",(0,o.kt)("strong",{parentName:"em"},"distinct")," array containing all the values that are present in ",(0,o.kt)("strong",{parentName:"em"},"at least two")," out of the three arrays. You may return the values in ",(0,o.kt)("strong",{parentName:"em"},"any")," order"),"."," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]\nOutput: [3,2]\nExplanation: The values that are present in at least two arrays are:\n- 3, in all three arrays.\n- 2, in nums1 and nums2.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]\nOutput: [2,3,1]\nExplanation: The values that are present in at least two arrays are:\n- 2, in nums2 and nums3.\n- 3, in nums1 and nums2.\n- 1, in nums1 and nums3.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]\nOutput: []\nExplanation: No value is present in at least two arrays.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums1.length, nums2.length, nums3.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums1[i], nums2[j], nums3[k] <= 100"))),(0,o.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,o.kt)(u.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {\n        vector<int> ans;\n        // use hash map to all elements from nums1, nums2, and nums3\n        map<int, int> m;\n        for(auto x : nums1) m[x] = 1;\n        for(auto x : nums2) m[x] = 1;\n        for(auto x : nums3) m[x] = 1;\n        for(auto x : m) {\n            // for each element in hash map, check if it exists in nums1, nums2, and nums3\n            int c1 = 0, c2 = 0, c3 = 0;\n            if (find(nums1.begin(), nums1.end(), x.first) != nums1.end()) c1 = 1;\n            if (find(nums2.begin(), nums2.end(), x.first) != nums2.end()) c2 = 1;\n            if (find(nums3.begin(), nums3.end(), x.first) != nums3.end()) c3 = 1;\n            // if it presents in at least two out of the three arrays,\n            // then add it to ans\n            if (c1 + c2 + c3 >= 2) ans.push_back(x.first);\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);