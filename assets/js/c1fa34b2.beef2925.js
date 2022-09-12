"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9393],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,y=c["".concat(o,".").concat(d)]||c[d]||p[d]||i;return t?r.createElement(y,s(s({ref:n},l),{},{components:t})):r.createElement(y,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var m=2;m<i;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},37491:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=t(8539),u=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-ascending-subarray-sum/"},m="1800 - Maximum Ascending Subarray Sum (Easy)",l={unversionedId:"1800-1899/maximum-ascending-subarray-sum-easy",id:"1800-1899/maximum-ascending-subarray-sum-easy",title:"1800 - Maximum Ascending Subarray Sum (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-ascending-subarray-sum/",source:"@site/solutions/1800-1899/1800-maximum-ascending-subarray-sum-easy.md",sourceDirName:"1800-1899",slug:"/1800-1899/maximum-ascending-subarray-sum-easy",permalink:"/leetcode-the-hard-way/solutions/1800-1899/maximum-ascending-subarray-sum-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1800-maximum-ascending-subarray-sum-easy.md",tags:[],version:"current",sidebarPosition:1800,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-ascending-subarray-sum/"},sidebar:"tutorialSidebar",previous:{title:"1800 - 1899",permalink:"/leetcode-the-hard-way/solutions/category/1800---1899"},next:{title:"1822 - Sign of the Product of an Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/1800-1899/sign-of-the-product-of-an-array-easy"}},p={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: One-Pass",id:"approach-1-one-pass",level:2}],d={toc:c};function y(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1800---maximum-ascending-subarray-sum-easy"},"1800 - Maximum Ascending Subarray Sum (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-ascending-subarray-sum/"},"https://leetcode.com/problems/maximum-ascending-subarray-sum/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an array of positive integers ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", return the ",(0,i.kt)("em",{parentName:"p"},"maximum possible sum of an ",(0,i.kt)("strong",{parentName:"em"},"ascending")," subarray in")," ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,i.kt)("p",null,"A subarray is defined as a contiguous sequence of numbers in an array."),(0,i.kt)("p",null,"A subarray ",(0,i.kt)("inlineCode",{parentName:"p"},"[numsl, numsl+1, ..., numsr-1, numsr]")," is ",(0,i.kt)("strong",{parentName:"p"},"ascending")," if for all ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"l <= i < r"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"numsi < numsi+1"),". Note that a subarray of size ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," is ",(0,i.kt)("strong",{parentName:"p"},"ascending"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [10,20,30,5,10,50]\nOutput: 65\nExplanation: [5,10,50] is the ascending subarray with the maximum sum of 65.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [10,20,30,40,50]\nOutput: 150\nExplanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [12,17,15,13,10,11,12]\nOutput: 33\nExplanation: [10,11,12] is the ascending subarray with the maximum sum of 33. \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 100"))),(0,i.kt)("h2",{id:"approach-1-one-pass"},"Approach 1: One-Pass"),(0,i.kt)("p",null,"Check each number starting from the second one to see if the current number is greater than the previous one or not. If so, add the current number to total sum and compare with the answer. Else we reset the sum as the current number."),(0,i.kt)(s.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxAscendingSum(vector<int>& nums) {\n        int n = nums.size(), sum = nums[0], ans = nums[0];\n        for (int i = 1; i < n; i++) {\n            // check if it's ascending\n            if (nums[i] > nums[i - 1]) {\n                // it's ascending -> add this number to sum\n                sum += nums[i];\n                // update ans\n                ans = max(ans, sum);\n            } else {\n                // start a new ascending subarray \n                // reset sum to nums[i]\n                sum = nums[i];\n            }\n        }\n        return ans;\n    }\n};\n")))}y.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);