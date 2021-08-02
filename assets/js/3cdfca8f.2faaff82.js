(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[830],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2803:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),l=["components"],o={id:"basics",title:"1 - CLVM Basics",sidebar_label:"1 - CLVM Basics"},s=void 0,p={unversionedId:"basics",id:"basics",isDocsHomePage:!0,title:"1 - CLVM Basics",description:"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network.",source:"@site/docs/basics.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/basics.md",version:"current",frontMatter:{id:"basics",title:"1 - CLVM Basics",sidebar_label:"1 - CLVM Basics"},sidebar:"someSidebar",next:{title:"2 - Coins, Spends and Wallets",permalink:"/docs/coins_spends_and_wallets"}},u=[{value:"CLVM values",id:"clvm-values",children:[{value:"Atoms",id:"atoms",children:[]},{value:"Cons Boxes",id:"cons-boxes",children:[]}]},{value:"Lists",id:"lists",children:[]},{value:"Quoting",id:"quoting",children:[]},{value:"Lists and Programs",id:"lists-and-programs",children:[]},{value:"List Operators",id:"list-operators",children:[]},{value:"Math",id:"math",children:[]},{value:"Booleans",id:"booleans",children:[]},{value:"Flow Control",id:"flow-control",children:[]},{value:"Solutions and Environment Variables",id:"solutions-and-environment-variables",children:[]},{value:"Accessing Environmental Variables Through Integers",id:"accessing-environmental-variables-through-integers",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network.\nChialisp compiles into CLVM so it's important to understand how it works.\nThe full set of operators is documented ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/clvm"},"here"),"."),(0,i.kt)("p",null,"This guide will cover the basics of the language and act as an introduction to the structure of programs.\nYou should be able to follow along by running a version of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/clvm_tools"},"clvm_tools"),".  Follow the instructions in the README to install it."),(0,i.kt)("h2",{id:"clvm-values"},"CLVM values"),(0,i.kt)("p",null,"CLVM is built out of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cons"},"cons boxes")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/emacs/manual/html_node/eintr/Lisp-Atoms.html#:~:text=Technically%20speaking%2C%20a%20list%20in,nothing%20in%20it%20at%20all."},"atoms"),". These are referred to as CLVM Objects.\nA cons box is a pair of CLVM Objects. The items in a cons box can either be an atom or another cons box."),(0,i.kt)("h3",{id:"atoms"},"Atoms"),(0,i.kt)("p",null,"An atom is a string of bytes. These bytes can be interpreted both as a signed big-endian integer and a byte string, depending on the operator using it."),(0,i.kt)("p",null,"All atoms in CLVM are immutable. All operators that perform computations on atoms create new atoms for the result."),(0,i.kt)("p",null,"Atoms can be printed in three different ways, decimal, hexadecimal and as a string. Hexadecimal values are prefixed by ",(0,i.kt)("inlineCode",{parentName:"p"},"0x"),", and strings are quoted in ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),".\nThe way the integer is printed does not affect its underlying value.\nThe atom ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," printed in decimal is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"0x64")," printed in hexadecimal. Likewise the value ",(0,i.kt)("inlineCode",{parentName:"p"},"0x68656c6c6f")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},'"hello"'),"."),(0,i.kt)("p",null,"When interpreting atoms as integers, it's important to remember that they are signed. In order to represent a positive integer, the most significant bit may not be set. Because of this, positive integers have a 0 byte prepended to them, in case the most significant bit in the next byte is set."),(0,i.kt)("h3",{id:"cons-boxes"},"Cons Boxes"),(0,i.kt)("p",null,"Cons boxes are represented as a parentheses with two elements separated by a ",(0,i.kt)("inlineCode",{parentName:"p"},"."),".\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(200 . "hello")\n\n("hello" . ("world" . "!!!"))\n')),(0,i.kt)("p",null,"Are legal cons boxes, but the following is not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(200 . 300 . 400)\n")),(0,i.kt)("p",null,"A cons box always has two elements.\nHowever, we can chain cons boxes together to construct lists."),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"Lists are enclosed by parentheses and each entry in the list is single spaced with no period between values.\nLists are much more commonly used than cons boxes as they are more versatile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(200 300 "hello" "world")\n')),(0,i.kt)("p",null,"You can also nest lists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'("hello" ("nested" "list") ("world"))\n')),(0,i.kt)("p",null,"Remember a list is a representation of consecutive cons boxes terminated in a null atom ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),".\nThe following expressions are equal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(200 . (300 . (400 . ())))\n\n(200 300 400)\n")),(0,i.kt)("h2",{id:"quoting"},"Quoting"),(0,i.kt)("p",null,"To interpret an atom as a value, rather than a program, it needs to be quoted with ",(0,i.kt)("inlineCode",{parentName:"p"},"q"),". Quoted values form a cons box where the first item is the ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," operator.\nFor example, this program is just the value ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(q . 100)\n")),(0,i.kt)("p",null,"Note that in the higher level Chialisp language, values do not need to be quoted."),(0,i.kt)("h2",{id:"lists-and-programs"},"Lists and Programs"),(0,i.kt)("p",null,"A list is any space-separated, ordered group of one or more elements inside brackets.\nFor example: ",(0,i.kt)("inlineCode",{parentName:"p"},"(70 80 90 100)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'(0xf00dbabe 48 "hello")'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"(90)")," are all valid lists."),(0,i.kt)("p",null,"Lists can even contain other lists, such as ",(0,i.kt)("inlineCode",{parentName:"p"},'("list" "list" ("sublist" "sublist" ("sub-sublist")) "list")'),"."),(0,i.kt)("p",null,"Programs are a subset of lists which can be evaluated using CLVM. ",(0,i.kt)("strong",{parentName:"p"},"A program is actually just a list in ",(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Polish_notation"},"polish notation"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In order for a list to be a valid program:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1. The first item in the list must be a valid operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2. Every item after the first must be a valid program"))),(0,i.kt)("p",null,"Rule 2 is why literal values and non-program lists ",(0,i.kt)("em",{parentName:"p"},"must")," be quoted using ",(0,i.kt)("inlineCode",{parentName:"p"},"q . "),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(q . (80 90 100))'\n(80 90 100)\n")),(0,i.kt)("p",null,"And now that we know we can have programs inside programs we can create programs such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(i (= (q . 50) (q . 50)) (+ (q . 40) (q . 30)) (q . 20))' '()'\n70\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(More on the operators that are used later)")),(0,i.kt)("p",null,"Programs in CLVM tend to get built in this fashion.\nSmaller programs are assembled together to create a larger program.\nIt is recommended that you create your programs in an editor with brackets matching!"),(0,i.kt)("h2",{id:"list-operators"},"List Operators"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"f")," returns the first element in a passed list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(f (q . (80 90 100)))'\n80\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"r")," returns every element in a list except for the first."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(r (q . (80 90 100)))'\n(90 100)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"c")," prepends an element to a list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(c (q . 70) (q . (80 90 100)))'\n(70 80 90 100)\n")),(0,i.kt)("p",null,"And we can use combinations of these to access or replace any element we want from a list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(c (q . 100) (r (q . (60 110 120))))'\n(100 110 120)\n\n$ brun '(f (r (r (q . (100 110 120 130 140)))))'\n120\n")),(0,i.kt)("h2",{id:"math"},"Math"),(0,i.kt)("p",null,"There are no support for floating point numbers in CLVM, only integers. There is no hard size limit on integers in CLVM. There is also support for negative values."),(0,i.kt)("p",null,"The math operators are ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(- (q . 6) (q . 5))'\n1\n\n$ brun '(* (q . 2) (q . 4) (q . 5))'\n40\n\n$ brun '(+ (q . 10) (q . 20) (q . 30) (q . 40))'\n100\n\n$ brun '(/ (q . 20) (q . 11))'\n1\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that ",(0,i.kt)("inlineCode",{parentName:"em"},"/")," returns the")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"floored"))," ",(0,i.kt)("em",{parentName:"p"},"quotient. CLVM is also different from most languages in that it floors to negative infinity rather than zero.  This can create some unexpected results when trying to divide negative numbers.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"brun '(/ (q . 3) (q . 2))'\n1\n\nbrun '(/ (q . 3) (q . -2))'\n-2\n\nbrun '(/ (q . -3) (q . 2))'\n-2\n\nbrun '(/ (q . -3) (q . -2))'\n1\n")),(0,i.kt)("p",null,"You may have noticed that the multiplication example above takes more than two parameters in the list.\nThis is because many operators can take a variable number of parameters.\n",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," are commutative so the order of parameters does not matter.\nFor non-commutative operations, ",(0,i.kt)("inlineCode",{parentName:"p"},"(- 100 30 20 5)")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"(- 100 (+ 30 20 5))"),".\nSimilarly, ",(0,i.kt)("inlineCode",{parentName:"p"},"(/ 120 5 4 2)")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"(/ 120 (* 5 4 2))"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(- (q . 5) (q . 7))'\n-2\n\n\n$ brun '(+ (q . 3) (q . -8))'\n-5\n")),(0,i.kt)("p",null,"To use hexadecimal numbers, simply prefix them with ",(0,i.kt)("inlineCode",{parentName:"p"},"0x"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(+ (q . 0x000a) (q . 0x000b))'\n21\n")),(0,i.kt)("p",null,"The final mathematical operator is equal which acts similarly to == in other languages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(= (q . 5) (q . 6))'\n()\n\n$ brun '(= (q . 5) (q . 5))'\n1\n")),(0,i.kt)("p",null,"As you can see above this language interprets some data as boolean values."),(0,i.kt)("h2",{id:"booleans"},"Booleans"),(0,i.kt)("p",null,"In this language an empty list ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," evaluate to ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),".\nAny other value evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", though internally ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," is represented with ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(= (q . 100) (q . 90))'\n()\n\n$ brun '(= (q . 100) (q . 100))'\n1\n")),(0,i.kt)("p",null,"The exception to this rule is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," because ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is  exactly the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(= (q . 0) ())'\n1\n\n$ brun '(+ (q . 70) ())'\n70\n")),(0,i.kt)("h2",{id:"flow-control"},"Flow Control"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," operator takes the form ",(0,i.kt)("inlineCode",{parentName:"p"},"(i A B C)")," and acts as an if-statement that\nevaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," is True and ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," otherwise."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(i (q . 0) (q . 70) (q . 80))'\n80\n\n$ brun '(i (q . 1) (q . 70) (q . 80))'\n70\n\n$ brun '(i (q . 12) (q . 70) (q . 80))'\n70\n\n$ brun '(i () (q . 70) (q . 80))'\n80\n")),(0,i.kt)("p",null,"Note that both ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," are evaluated eagerly, just like all subexpressions.\nTo defer evaluation until after the condition, ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," must be quoted (with\n",(0,i.kt)("inlineCode",{parentName:"p"},"q"),"), and then evaluated with ",(0,i.kt)("inlineCode",{parentName:"p"},"(a)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(a (q . (i (q . 0) (q . (x (q . 1337) )) (q . (q . 1)))) ())'\n")),(0,i.kt)("p",null,"More on this later."),(0,i.kt)("h2",{id:"solutions-and-environment-variables"},"Solutions and Environment Variables"),(0,i.kt)("p",null,"Up until now our programs have not had any input or variables, however CLVM does have support for a kind of variable which is passed in through a solution."),(0,i.kt)("p",null,"It's important to remember that the context for ChiaLisp is for use in locking up coins with a puzzle program.\nThis means that we need to be able to pass some information to the puzzle."),(0,i.kt)("p",null,"A solution is a list of values passed to the puzzle.\nThe solution can be referenced with ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '1' '(\"this\" \"is the\" \"solution\")'\n(\"this\" \"is the\" \"solution\")\n\n$ brun '(f 1)' '(80 90 100 110)'\n80\n\n$ brun '(r 1)' '(80 90 100 110)'\n(90 100 110)\n")),(0,i.kt)("p",null,"And remember lists can be nested too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(f (f (r 1)))' '((70 80) (90 100) (110 120))'\n90\n\n$ brun '(f (f (r 1)))' '((70 80) ((91 92 93 94 95) 100) (110 120))'\n(91 92 93 94 95)\n")),(0,i.kt)("p",null,"These environment variables can be used in combination with all other operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(+ (f 1) (q . 5))' '(10)'\n15\n\n$ brun '(* (f 1) (f 1))' '(10)'\n100\n")),(0,i.kt)("p",null,"This program checks that the second variable is equal to the square of the first variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(= (f (r 1)) (* (f 1) (f 1)))' '(5 25)'\n1\n\n$ brun '(= (f (r 1)) (* (f 1) (f 1)))' '(5 30)'\n()\n")),(0,i.kt)("h2",{id:"accessing-environmental-variables-through-integers"},"Accessing Environmental Variables Through Integers"),(0,i.kt)("p",null,"In the above examples we only used ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," which access the root of the tree and returns the entire solution list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'$ brun \'1\' \'("example" "data" "for" "test")\'\n("example" "data" "for" "test")\n')),(0,i.kt)("p",null,"However, every unquoted integer in the lower level language refers to a part of the solution."),(0,i.kt)("p",null,"You can imagine a binary tree of ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),", where each node is numbered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'$ brun \'2\' \'("example" "data" "for" "test")\'\n"example"\n\n$ brun \'3\' \'("example" "data" "for" "test")\'\n("data" "for" "test")\n\n$ brun \'5\' \'("example" "data" "for" "test")\'\n"data"\n')),(0,i.kt)("p",null,"And this is designed to work when there are lists inside lists too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'$ brun \'4\' \'(("deeper" "example") "data" "for" "test")\'\n"deeper"\n\n$ brun \'5\' \'(("deeper" "example") "data" "for" "test")\'\n"data"\n\n$ brun \'6\' \'(("deeper" "example") "data" "for" "test")\'\n("example")\n')),(0,i.kt)("p",null,"And so on."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This marks the end of this section of the guide.\nIn this section we have covered many of the basics of using CLVM.\nIt is recommended you play with using the information presented here for a bit before moving on."),(0,i.kt)("p",null,"This guide has not covered all of the operators available in CLVM - try using some of the other ones listed ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/clvm"},"here"),"!"))}c.isMDXComponent=!0}}]);