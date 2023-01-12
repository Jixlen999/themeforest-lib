import e from"react";import t,{ThemeProvider as o}from"styled-components";function i(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(o[i[r]]=e[i[r]])}return o}const r={width:{141:141,185:185,350:350,540:540,930:930,1110:1110,1920:1920},height:{46:46,54:54,120:120,126:126,132:132,580:580,590:590,740:740},fontFamily:{Manrope:"'Manrope', sans-serif",OpenSans:"'Open Sans', sans-serif"},fontSize:{14:14,16:16,20:20,22:22,30:30,38:38,46:46,50:50,57:57},fontWeight:{400:400,500:500,600:600,700:700,800:800},gap:{10:10,30:30,40:40,46:46,50:50},lineHeight:{24:24,28:28,33:33,56:56,60:60,66:66},margin:{30:30,75:75,80:80,90:90,120:120},padding:{25:25},borderRadius:{6:6},transition:"all 0.2s linear",colors:{primary:"#185CFF",secondary:"#002B4E",tertiary:"#F0F9FF",helperBlue1:"#194060",helperBlue2:"#607D94",helperBlue3:"#C9DCEC",black:"#292D33",grey:"#9497A1",background:"#F1F6FA",red:"#C14040",white:"#FFFFFF",hoverBlue:"#467DFF"},shadows:{button:"0px 12px 30px rgba(24, 92, 255, 0.18)",card1:"0px 2px 20px 17px rgba(24, 92, 255, 0.04)",card2:"0px 12px 30px 17px rgba(24, 92, 255, 0.04)",card3:"0px 4px 12px rgba(12, 68, 204, 0.1)",dropdown:"0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)"}},n=t.div`
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
`,l=t.p`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e,fontWeight:t})=>t||e.fontWeight[700]};
  font-size: ${({theme:e,fontSize:t})=>t||e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
  overflow: hidden;
`,a=t.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
  }
`,d=t=>{var{width:d=200,height:h=60,text:s="Button text",disabled:p=!1,onClick:c}=t,g=i(t,["width","height","text","disabled","onClick"]);const{icon:x,fontSize:b,fontWeight:m}=g;return e.createElement(o,{theme:r},e.createElement(n,{width:d,height:h,onClick:p?void 0:c,disabled:p,icon:x||null},x&&e.createElement(a,null,x),e.createElement(l,{fontSize:b&&b,fontWeight:m&&m},s)))},h=t.div`
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
`,s=t.p`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e,fontWeight:t})=>t||e.fontWeight[700]};
  font-size: ${({theme:e,fontSize:t})=>t||e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
  overflow: hidden;
`,p=t.div`
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
  border: ${({width:e})=>.08*e}px solid
    ${({theme:e})=>e.colors.white};
`,c=t=>{var{size:n=200,text:l="Button text",disabled:a=!1,onClick:d}=t,c=i(t,["size","text","disabled","onClick"]);const{fontSize:g,fontWeight:x}=c;return e.createElement(o,{theme:r},e.createElement(p,{width:n,height:n,disabled:a},e.createElement(h,{width:n-.15*n,height:n-.15*n,onClick:a?void 0:d,disabled:a},e.createElement(s,{fontSize:g&&g,fontWeight:x&&x},l))))};export{d as Button,c as RoundButton};
