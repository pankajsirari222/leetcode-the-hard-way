"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6077],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17103:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=r(8539),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/symmetric-tree/"},u="0101 - Symmetric Tree (Easy)",c={unversionedId:"0100-0199/symmetric-tree-easy",id:"0100-0199/symmetric-tree-easy",title:"0101 - Symmetric Tree (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/symmetric-tree/",source:"@site/solutions/0100-0199/0101-symmetric-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/symmetric-tree-easy",permalink:"/leetcode-the-hard-way/solutions/0100-0199/symmetric-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0100-0199/0101-symmetric-tree-easy.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/symmetric-tree/"},sidebar:"tutorialSidebar",previous:{title:"0100 - 0199",permalink:"/leetcode-the-hard-way/solutions/category/0100---0199"},next:{title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2}],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0101---symmetric-tree-easy"},"0101 - Symmetric Tree (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/symmetric-tree/"},"https://leetcode.com/problems/symmetric-tree/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, ",(0,a.kt)("em",{parentName:"p"},"check whether it is a mirror of itself")," (i.e., symmetric around its center)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,3,4,4,3]\nOutput: true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,null,3,null,3]\nOutput: false\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 1000]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Could you solve it both recursively and iteratively?"),(0,a.kt)("h2",{id:"approach-1-recursive"},"Approach 1: Recursive"),(0,a.kt)("p",null,"A tree is symmetric if the following conditions are satisfied"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"two nodes should have the value "),(0,a.kt)("li",{parentName:"ul"},"the left sub-tree is a reflection of the right sub-tree of the other tree")),(0,a.kt)(l.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool f(TreeNode* r1, TreeNode* r2){\n        // if two nodes r null, they are same\n        if(!r1 && !r2) return true;\n        // if one of them r null, they are not same\n        if(!r1 || !r2) return false;\n        // if their values are same, and the sub-nodes are same\n        return (r1->val == r2->val) && f(r1->left, r2->right) && f(r1->right, r2->left);\n    }\n    \n    bool isSymmetric(TreeNode* root) {\n        return f(root, root);\n    }\n};\n")))}f.isMDXComponent=!0},8539:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294);function o(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);