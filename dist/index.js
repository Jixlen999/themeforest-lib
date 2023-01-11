"use strict";var e=require("react"),t=require("styled-components");const r={width:{141:141,185:185,350:350,540:540,930:930,1110:1110,1920:1920},height:{46:46,54:54,120:120,126:126,132:132,580:580,590:590,740:740},fontFamily:{Manrope:"'Manrope', sans-serif",OpenSans:"'Open Sans', sans-serif"},fontSize:{14:14,16:16,20:20,22:22,30:30,38:38,46:46,50:50,57:57},fontWeight:{400:400,500:500,600:600,700:700,800:800},gap:{10:10,30:30,40:40,46:46,50:50},lineHeight:{24:24,28:28,33:33,56:56,60:60,66:66},margin:{30:30,75:75,80:80,90:90,120:120},padding:{25:25},borderRadius:{6:6},transition:"all 0.2s linear",colors:{primary:"#185CFF",secondary:"#002B4E",tertiary:"#F0F9FF",helperBlue1:"#194060",helperBlue2:"#607D94",helperBlue3:"#C9DCEC",black:"#292D33",grey:"#9497A1",background:"#F1F6FA",red:"#C14040",white:"#FFFFFF",hoverBlue:"#467DFF"},shadows:{button:"0px 12px 30px rgba(24, 92, 255, 0.18)",card1:"0px 2px 20px 17px rgba(24, 92, 255, 0.04)",card2:"0px 12px 30px 17px rgba(24, 92, 255, 0.04)",card3:"0px 4px 12px rgba(12, 68, 204, 0.1)",dropdown:"0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)"}},o=t.div`
  box-sizing: border-box;
  padding: 0 20px;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  border-radius: ${({theme:e})=>e.borderRadius[6]}px;
  background-color: ${({theme:e,state:t})=>"enabled"===t?e.colors.primary:"disabled"===t?e.colors.grey:void 0};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme:e})=>e.gap[10]}px;
  color: ${({theme:e})=>e.colors.white};
  cursor: ${({state:e})=>"enabled"===e&&"pointer"};
  transition: ${({theme:e})=>e.transition};
  box-shadow: ${({theme:e})=>e.shadows.button};
  &:hover {
    background-color: ${({theme:e,state:t})=>"enabled"===t&&e.colors.hoverBlue};
  }
  &:active {
    box-shadow: ${({state:e})=>"enabled"===e&&"none"};
    background-color: ${({theme:e,state:t})=>"enabled"===t&&e.colors.primary};
  }
`,a=t.p`
  font-family: ${({theme:e})=>e.fontFamily.Manrope};
  font-weight: ${({theme:e})=>e.fontWeight[700]};
  font-size: ${({theme:e})=>e.fontSize[16]}px;
  line-height: ${({theme:e})=>e.lineHeight[24]}px;
  overflow: hidden;
`;exports.Button=({state:n="enabled",width:i=200,height:h=60,text:p="Button text",onClick:l})=>e.createElement(t.ThemeProvider,{theme:r},e.createElement(o,{state:n,width:i,height:h,onClick:l},e.createElement(a,null," ",p)));
