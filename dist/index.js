"use strict";var e=require("react"),t=require("styled-components");function i(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}const n={width:{80:80,110:110,141:141,185:185,350:350,540:540,930:930,1110:1110,1920:1920},height:{46:46,54:54,60:60,80:80,120:120,126:126,132:132,200:200,370:370,580:580,590:590,740:740},fontFamily:{Manrope:"'Manrope', sans-serif",OpenSans:"'Open Sans', sans-serif"},fontSize:{14:14,16:16,20:20,22:22,25:25,30:30,38:38,46:46,50:50,57:57},fontWeight:{400:400,500:500,600:600,700:700,800:800},gap:{5:5,10:10,15:15,25:25,30:30,40:40,46:46,50:50},lineHeight:{24:24,28:28,33:33,56:56,60:60,66:66},margin:{12:12,20:20,30:30,50:50,75:75,80:80,90:90,120:120},padding:{10:10,25:25,35:35},borderRadius:{6:6,20:20,100:100},scale:{xs:1.1},flexBasis:{25:25},transition:"all 0.2s linear",colors:{primary:"#185CFF",secondary:"#002B4E",tertiary:"#F0F9FF",helperBlue1:"#194060",helperBlue2:"#607D94",helperBlue3:"#C9DCEC",black:"#292D33",grey:"#9497A1",background:"#F1F6FA",red:"#C14040",white:"#FFFFFF",hoverBlue:"#467DFF"},shadows:{button:"0px 12px 30px rgba(24, 92, 255, 0.18)",card1:"0px 2px 20px 17px rgba(24, 92, 255, 0.04)",card2:"0px 12px 30px 17px rgba(24, 92, 255, 0.04)",card3:"0px 4px 12px rgba(12, 68, 204, 0.1)",dropdown:"0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)"}},r=t.div`
  box-sizing: border-box;
  padding: 0 5px;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  border-radius: ${({theme:e})=>e.borderRadius[6]}px;
  background-color: ${({theme:e,disabled:t})=>t?e.colors.grey:e.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme:e})=>e.gap[10]}px;
  color: ${({theme:e})=>e.colors.white};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: ${({theme:e})=>e.transition};
  box-shadow: ${({theme:e,disabled:t})=>t?"none":e.shadows.button};
  &:hover {
    background-color: ${({theme:e,disabled:t})=>!t&&e.colors.hoverBlue};
  }
  &:active {
    box-shadow: ${({disabled:e})=>!e&&"none"};
    background-color: ${({theme:e,disabled:t})=>!t&&e.colors.primary};
  }
`,o=t.p`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e,fontWeight:t})=>t||e.fontWeight[700]};
  font-size: ${({theme:e,fontSize:t})=>t||e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
  overflow: hidden;
`,l=t.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
  }
`,a=t.div`
  box-sizing: border-box;
  padding: 0 5px;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.white};
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: transparent;
`,h=t.p`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e,fontWeight:t})=>t||e.fontWeight[700]};
  font-size: ${({theme:e,fontSize:t})=>t||e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
  overflow: hidden;
`,s=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  border-radius: 100%;
  background-color: ${({theme:e,disabled:t})=>t?e.colors.grey:e.colors.primary};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  &:hover {
    background-color: ${({theme:e,disabled:t})=>!t&&e.colors.hoverBlue};
  }
  &:active {
    background-color: ${({theme:e,disabled:t})=>!t&&e.colors.primary};
  }
  border: ${({width:e})=>.08*e}px solid ${({theme:e})=>e.colors.white};
`;var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=e.createContext&&e.createContext(d),m=function(){return m=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m.apply(this,arguments)},p=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};function f(t){return t&&t.map((function(t,i){return e.createElement(t.tag,m({key:i},t.attr),f(t.child))}))}function g(t){return function(i){return e.createElement(x,m({attr:m({},t.attr)},i),f(t.child))}}function x(t){var i=function(i){var n,r=t.attr,o=t.size,l=t.title,a=p(t,["attr","size","title"]),h=o||i.size||"1em";return i.className&&(n=i.className),t.className&&(n=(n?n+" ":"")+t.className),e.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,a,{className:n,style:m(m({color:t.color||i.color},i.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&e.createElement("title",null,l),t.children)};return void 0!==c?e.createElement(c.Consumer,null,(function(e){return i(e)})):i(d)}function u(e){return g({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16l-4-4m0 0l4-4m-4 4h18"}}]})(e)}function $(e){return g({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"}}]})(e)}const w=t=>{let i=null,n=null;e.useEffect((()=>{"cardsCarousel"===t&&(i=document.querySelector(".cardsCarousel"),n=document.querySelector(".card")),"postsCarousel"===t&&(i=document.querySelector(".postsCarousel"),n=document.querySelector(".post"))}),[]);return{leftClickHandler:()=>{i.scrollLeft-=n.clientWidth+30},rightClickHandler:()=>{i.scrollLeft+=n.clientWidth+30}}},y=t.div`
  width: ${({theme:e})=>e.width[1110]}px;
`,b=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.margin[50]}px;
  padding-left: ${({theme:e})=>e.padding[10]}px;
`,v=t.div`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[800]};
  font-size: ${({theme:e})=>e.fontSize[38]}px;
  line-height: ${({theme:e})=>e.lineHeight[56]}px;
`,E=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme:e})=>e.height[60]}px;
  gap: ${({theme:e})=>e.gap[15]}px;
`,k=t.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.tertiary};
  border-radius: ${({theme:e})=>e.borderRadius[20]}px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition};
  &:hover {
    transform: ${({theme:e})=>`scale(${e.scale.xs})`};
  }
  svg {
    width: inherit;
    font-size: ${({theme:e})=>e.fontSize[25]}px;
    color: ${({theme:e})=>e.colors.secondary};
  }
`,z=t.div`
  width: inherit;
  height: ${({theme:e})=>e.height[370]}px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0px;
  gap: ${({theme:e})=>e.gap[30]}px;
  padding: ${({theme:e})=>e.padding[10]}px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,C=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({theme:e})=>e.padding[35]}px;
  gap: ${({theme:e})=>e.gap[25]}px;
  width: ${({theme:e})=>e.width[350]}px;
  box-shadow: ${({theme:e})=>e.shadows.card3};
  background-color: ${({theme:e})=>e.colors.white};
  flex-basis: ${({theme:e})=>e.flexBasis[25]}%;
  flex-shrink: 0;
`,S=t.img`
  width: ${({theme:e})=>e.width[80]}px;
  height: ${({theme:e})=>e.height[80]}px;
  border-radius: ${({theme:e})=>e.borderRadius[100]}%;
  overflow: hidden;
`,F=t.div`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[700]};
  font-size: ${({theme:e})=>e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
`,O=t.div`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[500]};
  font-size: ${({theme:e})=>e.fontSize[14]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
`,j=t.div`
  font-family: ${({theme:e})=>e.fontFamily.OpenSans};
  font-weight: ${({theme:e})=>e.fontWeight[400]};
  font-size: ${({theme:e})=>e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[28]}px;
  color: ${({theme:e})=>e.colors.grey};
`,W=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({theme:e})=>e.gap[25]}px;
`,H=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,B=t.div`
  width: ${({theme:e})=>e.width[110]}px;
  height: inherit;
`,M=t.div`
  width: ${({theme:e})=>e.width[110]}px;
  height: inherit;
`,P=t.div`
  width: 445px;
  border-radius: 6px;
  background: #c9dcec;
  display: flex;
  justify-content: space-between;
`,N=t.input`
  width: auto;
  padding: 15px 25px;
  background-color: transparent;
  border: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  &::placeholder {
    color: ${({theme:e})=>e.colors.black};
  }
  &:focus {
    outline: none;
  }
`,R=t.div`
  width: 125px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background-color: white;
  color: ${({theme:e})=>e.colors.black};
  border-radius: 6px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`,L=t.div`
  width: ${({theme:e})=>e.width[1110]}px;
`,q=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.margin[50]}px;
  padding-left: ${({theme:e})=>e.padding[10]}px;
`,T=t.div`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[800]};
  font-size: ${({theme:e})=>e.fontSize[38]}px;
  line-height: ${({theme:e})=>e.lineHeight[56]}px;
`,D=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme:e})=>e.height[60]}px;
  gap: ${({theme:e})=>e.gap[15]}px;
`,A=t.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.tertiary};
  border-radius: ${({theme:e})=>e.borderRadius[20]}px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition};
  &:hover {
    transform: ${({theme:e})=>`scale(${e.scale.xs})`};
  }
  svg {
    width: inherit;
    font-size: ${({theme:e})=>e.fontSize[25]}px;
    color: ${({theme:e})=>e.colors.secondary};
  }
`,I=t.div`
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: ${({theme:e})=>e.gap[30]}px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Y=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({theme:e})=>e.width[350]}px;
  background-color: ${({theme:e})=>e.colors.white};
  flex-basis: ${({theme:e})=>e.flexBasis[25]}%;
  flex-shrink: 0;
`,G=t.img`
  width: ${({theme:e})=>e.width[350]}px;
  min-height: ${({theme:e})=>e.height[200]}px;
  border-radius: ${({theme:e})=>e.borderRadius[6]};
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.margin[20]}px;
`,J=t.div`
  width: inherit;
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[700]};
  font-size: ${({theme:e})=>e.fontSize[22]}px;
  line-height: ${({theme:e})=>e.lineHeight[33]}px;
  text-align: start;
  margin-bottom: ${({theme:e})=>e.margin[12]}px;
`,K=t.div`
  font-family: ${({theme:e})=>e.fontFamily.OpenSans};
  font-weight: ${({theme:e})=>e.fontWeight[400]};
  font-size: ${({theme:e})=>e.fontSize[14]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
  margin-bottom: ${({theme:e})=>e.margin[12]}px;
  color: ${({theme:e})=>e.colors.grey};
`,Q=t.div`
  width: inherit;
  font-family: ${({theme:e})=>e.fontFamily.OpenSans};
  font-weight: ${({theme:e})=>e.fontWeight[400]};
  font-size: ${({theme:e})=>e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[28]}px;
  color: ${({theme:e})=>e.colors.grey};
  margin-bottom: ${({theme:e})=>e.margin[12]}px;
`,U=t.div`
  width: ${({theme:e})=>e.width[110]}px;
  height: inherit;
`,V=t.div`
  width: ${({theme:e})=>e.width[110]}px;
  height: inherit;
`,X=t.p`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.primary};
  gap: ${({theme:e})=>e.gap[5]}px;
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[600]};
  font-size: ${({theme:e})=>e.fontSize[14]}px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`;exports.Button=a=>{var{width:h=200,height:s=60,text:d="Button text",disabled:c=!1,onClick:m}=a,p=i(a,["width","height","text","disabled","onClick"]);const{icon:f,fontSize:g,fontWeight:x}=p;return e.createElement(t.ThemeProvider,{theme:n},e.createElement(r,{width:h,height:s,onClick:c?void 0:m,disabled:c,icon:f||null},f&&e.createElement(l,null,f),e.createElement(o,{fontSize:g&&g,fontWeight:x&&x},d)))},exports.CardCarousel=({title:i,cards:r})=>{const{leftClickHandler:o,rightClickHandler:l}=w("cardsCarousel");return e.createElement(t.ThemeProvider,{theme:n},e.createElement(y,null,e.createElement(b,null,e.createElement(v,null,i),e.createElement(E,null,e.createElement(M,{onClick:o},e.createElement(k,null,e.createElement(u,null))),e.createElement(B,{onClick:l},e.createElement(k,null,e.createElement($,null))))),e.createElement(z,{className:"cardsCarousel"},r.map(((t,i)=>e.createElement(C,{key:i,className:"card"},e.createElement(W,null,e.createElement(S,{src:t.image}),e.createElement(H,null,e.createElement(F,null,t.name),e.createElement(O,null,t.position))),e.createElement(j,null,t.comment)))))))},exports.EmailField=()=>e.createElement(t.ThemeProvider,{theme:n},e.createElement(P,null,e.createElement(N,{placeholder:"Your email"}),e.createElement(R,null,"Send"))),exports.PostsCarousel=({title:i,posts:r})=>{const{leftClickHandler:o,rightClickHandler:l}=w("postsCarousel");return e.createElement(t.ThemeProvider,{theme:n},e.createElement(L,null,e.createElement(q,null,e.createElement(T,null,i),e.createElement(D,null,e.createElement(V,{onClick:o},e.createElement(A,null,e.createElement(u,null))),e.createElement(U,{onClick:l},e.createElement(A,null,e.createElement($,null))))),e.createElement(I,{className:"postsCarousel"},r.map(((t,i)=>e.createElement(Y,{key:i,className:"post"},e.createElement(G,{src:t.image}),e.createElement(K,null,t.date),e.createElement(J,null,t.title),e.createElement(Q,null,t.text),e.createElement(X,null,e.createElement("a",{href:t.readMoreLink},"Read more"),e.createElement($,null))))))))},exports.RoundButton=r=>{var{size:o=200,text:l="Button text",disabled:d=!1,onClick:c}=r,m=i(r,["size","text","disabled","onClick"]);const{fontSize:p,fontWeight:f}=m;return e.createElement(t.ThemeProvider,{theme:n},e.createElement(s,{width:o,height:o,disabled:d},e.createElement(a,{width:o-.15*o,height:o-.15*o,onClick:d?void 0:c,disabled:d},e.createElement(h,{fontSize:p&&p,fontWeight:f&&f},l))))};
