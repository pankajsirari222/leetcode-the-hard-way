"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2169],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(n),u=s,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27688:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),r=n(8539),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-good-people-based-on-statements/"},m="2151 - Maximum Good People Based on Statements (Hard)",l={unversionedId:"2100-2199/maximum-good-people-based-on-statements-hard",id:"2100-2199/maximum-good-people-based-on-statements-hard",title:"2151 - Maximum Good People Based on Statements (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-good-people-based-on-statements/",source:"@site/solutions/2100-2199/2151-maximum-good-people-based-on-statements-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/maximum-good-people-based-on-statements-hard",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-good-people-based-on-statements-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2151-maximum-good-people-based-on-statements-hard.md",tags:[],version:"current",sidebarPosition:2151,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-good-people-based-on-statements/"},sidebar:"tutorialSidebar",previous:{title:"2150 - Find All Lonely Numbers in the Array (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-all-lonely-numbers-in-the-array-medium"},next:{title:"2154 - Keep Multiplying Found Values by Two (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/keep-multiplying-found-values-by-two-easy"}},d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking",id:"approach-1-bit-masking",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,s.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2151---maximum-good-people-based-on-statements-hard"},"2151 - Maximum Good People Based on Statements (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-good-people-based-on-statements/"},"https://leetcode.com/problems/maximum-good-people-based-on-statements/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There are two types of persons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"good person"),": The person who always tells the truth."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"bad person"),": The person who might tell the truth and might lie.")),(0,o.kt)("p",null,"You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"statements")," of size ",(0,o.kt)("inlineCode",{parentName:"p"},"n x n")," that represents the statements made by ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," people about each other. More specifically, ",(0,o.kt)("inlineCode",{parentName:"p"},"statements[i][j]")," could be one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")," which represents a statement made by person ",(0,o.kt)("inlineCode",{parentName:"li"},"i")," that person ",(0,o.kt)("inlineCode",{parentName:"li"},"j")," is a ",(0,o.kt)("strong",{parentName:"li"},"bad")," person."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1")," which represents a statement made by person ",(0,o.kt)("inlineCode",{parentName:"li"},"i")," that person ",(0,o.kt)("inlineCode",{parentName:"li"},"j")," is a ",(0,o.kt)("strong",{parentName:"li"},"good")," person."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2")," represents that ",(0,o.kt)("strong",{parentName:"li"},"no statement")," is made by person ",(0,o.kt)("inlineCode",{parentName:"li"},"i")," about person ",(0,o.kt)("inlineCode",{parentName:"li"},"j"),".")),(0,o.kt)("p",null,"Additionally, no person ever makes a statement about themselves. Formally, we have that ",(0,o.kt)("inlineCode",{parentName:"p"},"statements[i][i] = 2")," for all ",(0,o.kt)("inlineCode",{parentName:"p"},"0 <= i < n"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"maximum")," number of people who can be ",(0,o.kt)("strong",{parentName:"em"},"good")," based on the statements made by the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," ",(0,o.kt)("em",{parentName:"p"},"people"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/01/15/logic1.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: statements = [[2,1,2],[1,2,2],[2,0,2]]\nOutput: 2\nExplanation: Each person makes a single statement.\n- Person 0 states that person 1 is good.\n- Person 1 states that person 0 is good.\n- Person 2 states that person 1 is bad.\nLet's take person 2 as the key.\n- Assuming that person 2 is a good person:\n    - Based on the statement made by person 2, person 1 is a bad person.\n    - Now we know for sure that person 1 is bad and person 2 is good.\n    - Based on the statement made by person 1, and since person 1 is bad, they could be:\n        - telling the truth. There will be a contradiction in this case and this assumption is invalid.\n        - lying. In this case, person 0 is also a bad person and lied in their statement.\n    - Following that person 2 is a good person, there will be only one good person in the group.\n- Assuming that person 2 is a bad person:\n    - Based on the statement made by person 2, and since person 2 is bad, they could be:\n        - telling the truth. Following this scenario, person 0 and 1 are both bad as explained before.\n            - Following that person 2 is bad but told the truth, there will be no good persons in the group.\n        - lying. In this case person 1 is a good person.\n            - Since person 1 is a good person, person 0 is also a good person.\n            - Following that person 2 is bad and lied, there will be two good persons in the group.\nWe can see that at most 2 persons are good in the best case, so we return 2.\nNote that there is more than one way to arrive at this conclusion.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/01/15/logic2.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: statements = [[2,0],[0,2]]\nOutput: 1\nExplanation: Each person makes a single statement.\n- Person 0 states that person 1 is bad.\n- Person 1 states that person 0 is bad.\nLet's take person 0 as the key.\n- Assuming that person 0 is a good person:\n    - Based on the statement made by person 0, person 1 is a bad person and was lying.\n    - Following that person 0 is a good person, there will be only one good person in the group.\n- Assuming that person 0 is a bad person:\n    - Based on the statement made by person 0, and since person 0 is bad, they could be:\n        - telling the truth. Following this scenario, person 0 and 1 are both bad.\n            - Following that person 0 is bad but told the truth, there will be no good persons in the group.\n        - lying. In this case person 1 is a good person.\n            - Following that person 0 is bad and lied, there will be only one good person in the group.\nWe can see that at most, one person is good in the best case, so we return 1.\nNote that there is more than one way to arrive at this conclusion.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == statements.length == statements[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= n <= 15")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"statements[i][j]")," is either ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"statements[i][i] == 2"))),(0,o.kt)("h2",{id:"approach-1-bit-masking"},"Approach 1: Bit Masking"),(0,o.kt)("p",null,"First, let's look at the constraint for n. It is just ",(0,o.kt)("inlineCode",{parentName:"p"},"2 <= n <= 15"),", which means this probably could be solved by Bit Masking. We can enumerate bit mask ",(0,o.kt)("inlineCode",{parentName:"p"},"mask")," from 1 to  2 ^ n - 1.  If the ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"-th bit of ",(0,o.kt)("inlineCode",{parentName:"p"},"mask")," is 1 or 0, it means that person ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," is good or bad. Bad persons' statements can be ignored as they can either true or false. Hence, if person ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," tells the truth, we just need to check if there is contradiction for person ",(0,o.kt)("inlineCode",{parentName:"p"},"j"),"."),(0,o.kt)("p",null,"If there is no contradiction for ",(0,o.kt)("inlineCode",{parentName:"p"},"mask"),", then we can count the number of 1s in ",(0,o.kt)("inlineCode",{parentName:"p"},"mask")," and update the answer. If you use C++, there is a built-in function called ",(0,o.kt)("inlineCode",{parentName:"p"},"__builtin_popcount")," to count it."),(0,o.kt)(r.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int ok(vector<vector<int>>& statements, int mask) {\n        int n = statements.size();\n        for (int i = 0; i < n; i++) {\n            if (mask & (1 << i)) {\n                // person i is good\n                for (int j = 0; j < n; j++) {\n                    int good = mask & (1 << j);\n                    if (statements[i][j] == 0 && good || statements[i][j] == 1 && !good) {\n                        return 0;\n                    }\n                }    \n            }\n        }\n        return 1;\n    }\n    \n    int maximumGood(vector<vector<int>>& statements) {\n        int ans = 0, n = statements.size();\n        for (int mask = 1; mask < (1 << n); mask++) {\n            if (ok(statements, mask)) {\n                ans = max(ans, __builtin_popcount(mask));\n            }\n        }\n    \n        return ans;\n    }\n};\n")),(0,o.kt)("p",null,"Time Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("msup",{parentName:"mrow"},(0,o.kt)("mn",{parentName:"msup"},"2"),(0,o.kt)("mi",{parentName:"msup"},"n")),(0,o.kt)("mo",{parentName:"mrow"},"\u2217"),(0,o.kt)("msup",{parentName:"mrow"},(0,o.kt)("mi",{parentName:"msup"},"n"),(0,o.kt)("mn",{parentName:"msup"},"2")),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(2 ^ n * n ^ 2)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord"},"2"),(0,o.kt)("span",{parentName:"span",className:"msupsub"},(0,o.kt)("span",{parentName:"span",className:"vlist-t"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,o.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"msupsub"},(0,o.kt)("span",{parentName:"span",className:"vlist-t"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,o.kt)("p",null,"Space Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mn",{parentName:"mrow"},"1"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294);function s(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);