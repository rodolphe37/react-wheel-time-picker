import{jsx as e,jsxs as n,Fragment as t}from"react/jsx-runtime";import{useState as r,useRef as a,useEffect as o}from"react";import"./styles/react-wheel-time-picker.css";var c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},c.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var l=function(e,n,t){void 0===e&&(e=54),void 0===n&&(n=24),void 0===t&&(t=0);for(var r=[{number:"00",translatedValue:(2*e).toString(),selected:!1},{number:"01",translatedValue:e.toString(),selected:!1}],a=[{number:"00",translatedValue:e.toString(),selected:!1,hidden:!0},{number:"01",translatedValue:e.toString(),selected:!1}],o=13===n?a:r,c=0,l=0;l<3;l++)for(var i=0;i<n;i++)0===l&&i<2||13===n&&0===i||(1!==l||i!==t?(1===i.toString().length?o.push({number:"0".concat(i.toString()),translatedValue:"-".concat(c),selected:!1}):o.push({number:i.toString(),translatedValue:"-".concat(c),selected:!1}),c+=e):(1===Number(i).toString().length?o.push({number:"0".concat(Number(i).toString()),translatedValue:"-".concat(c),selected:!0}):o.push({number:Number(i).toString(),translatedValue:"-".concat(c),selected:!0}),c+=e));return o},i=function(e,n){void 0===e&&(e=54),void 0===n&&(n=24);for(var t=[{number:"00",translatedValue:(2*e).toString(),arrayNumber:0},{number:"01",translatedValue:e.toString(),arrayNumber:1}],r=0,a=0;a<3;a++)for(var o=0;o<n;o++)0===a&&o<2||13===n&&0===o||(1===o.toString().length?t.push({number:"0".concat(o.toString()),translatedValue:"-".concat(r),selected:!1}):t.push({number:o.toString(),translatedValue:"-".concat(r),selected:!1}),r+=e);return t};function u(n){var t,u,s=n.height,d=n.value,f=n.setValue,m=n.use12Hours,h=n.isDarkMode,p=m?13:24,v=r(l(s,p,parseInt(d.slice(0,2)))),w=v[0],g=v[1],b=a(null),k=r(null),y=k[0],V=k[1],M=r(0),N=M[0],S=M[1],x=r(parseInt(null!==(u=null===(t=l(s,p,parseInt(d.slice(0,2))).filter((function(e){return e.number===d.slice(0,2)&&!0===e.selected}))[0])||void 0===t?void 0:t.translatedValue)&&void 0!==u?u:"00")),Y=x[0],C=x[1],T=r(!1),I=T[0],D=T[1],F=r(!1),O=F[0],A=F[1],H=r(0),P=H[0],E=H[1],B=r(0),j=B[0],L=B[1],U=r(null)[1],W=r(null),q=W[0],z=W[1],G=r(null),J=G[0],K=G[1],Q=r(void 0)[1],R=function(){D(!1),C((function(e){return e+y})),A(!0),L(performance.now()),performance.now()-P<=100?z("fast"):z("slow"),K(y<0?"down":"up")};o((function(){I&&void 0!==b.current&&(b.current.style.transform="translateY(".concat(Y+y,"px)"))}),[y,Y,I]),o((function(){if(O&&void 0!==b.current){if(U(j-P),j-P<=100&&0!==y){var e=void 0;"down"===J?e=Y-120/(j-P)*100:"up"===J&&(e=Y+120/(j-P)*100);var n=Math.round(e/s)*s;m?(n<-34*s&&(n=-34*s),n>s&&(n=s)):(n<-69*s&&(n=-69*s),n>2*s&&(n=2*s)),b.current.style.transform="translateY(".concat(n,"px)"),C(n)}if(j-P>100&&0!==y){n=Math.round(Y/s)*s;m?(n<-34*s&&(n=-34*s),n>s&&(n=s)):(n<-69*s&&(n=-69*s),n>2*s&&(n=2*s)),b.current.style.transform="translateY(".concat(n,"px)"),C(n)}V(0)}}),[O,Y,y,J,j,P,s,m]);var X=function(e){var n=e.target;0===y&&C(parseInt(n.dataset.translatedValue))},Z=O&&"fast"===q,$=O&&"slow"===q;return e("div",{className:"react-wheel-time-picker-hour ".concat(m&&"react-wheel-time-picker-hour-12hour-format"),onMouseDown:function(e){return function(e){A(!1),S(e.clientY),D(!0),E(performance.now())}(e)},onMouseUp:R,onMouseMove:function(e){V(I?e.clientY-N:0)},onMouseLeave:function(){D(!1),C((function(e){return e+y})),A(!0),L(performance.now()),performance.now()-P<=100?z("fast"):z("slow"),K(y<0?"down":"up")},style:{height:5.7*s},onWheel:function(e){m?e.deltaY>0?Y<s&&C((function(e){return e+s})):Y>-34*s&&C((function(e){return e-s})):e.deltaY>0?Y<2*s&&C((function(e){return e+s})):Y>-69*s&&C((function(e){return e-s}))},onTouchStart:function(e){return function(e){A(!1),S(e.targetTouches[0].clientY),D(!0),E(performance.now())}(e)},onTouchMove:function(e){return function(e){V(I?e.targetTouches[0].clientY-N:0)}(e)},onTouchEnd:R,children:e("div",{ref:b,className:"".concat(!0===Z&&"react-wheel-time-picker-fast"," ").concat(!0===$&&"react-wheel-time-picker-slow"),onTransitionEnd:function(){i(s,p).map((function(e){parseInt(e.translatedValue)===Y&&(Q(e.arrayNumber),f((function(n){return"".concat(e.number,":").concat(n.slice(3,6))})),g((function(){return l(s,p).map((function(n){return n.number==e.number&&+n.translatedValue==Y?c(c({},n),{selected:!0}):n}))})))}))},style:{transform:"translateY(".concat(Y,"px)")},children:w.map((function(n,t){return e("div",{className:"react-wheel-time-picker-cell-hour",style:{height:"".concat(s,"px")},children:e("div",{style:{color:h?"#f7f7f7":n.selected?"#000":"#6a6a6b",fontSize:n.selected?18:14},className:"react-wheel-time-picker-cell-inner-hour".concat(n.selected?" react-wheel-time-picker-cell-inner-selected":"").concat((null==n?void 0:n.hidden)?" react-wheel-time-picker-cell-inner-hidden":""),onClick:X,"data-translated-value":n.translatedValue,children:n.number})},t)}))})})}function s(n){var t=n.height,u=n.value,s=n.setValue,d=n.isDarkMode,f=r(l(t,60,parseInt(u.slice(3,6)))),m=f[0],h=f[1],p=a(null),v=r(0),w=v[0],g=v[1],b=r(0),k=b[0],y=b[1],V=r(u&&parseInt(l(t,60,parseInt(u.slice(3,6))).filter((function(e){return e.number===u.toString().slice(3,6)&&!0===e.selected}))[0].translatedValue)),M=V[0],N=V[1],S=r(!1),x=S[0],Y=S[1],C=r(!1),T=C[0],I=C[1],D=r(0),F=D[0],O=D[1],A=r(0),H=A[0],P=A[1],E=r(null)[1],B=r(""),j=B[0],L=B[1],U=r(null),W=U[0],q=U[1],z=r(void 0)[1],G=function(){Y(!1),N((function(e){return+e+w})),I(!0),P(performance.now()),performance.now()-F<=100?L("fast"):L("slow"),q(w<0?"down":"up")};o((function(){x&&(p.current.style.transform="translateY(".concat(+M+w,"px)"))}),[w,M,x]),o((function(){if(T){if(E(H-F),H-F<=100&&0!==w){var e=void 0;"down"===W?e=+M-120/(H-F)*100:"up"===W&&(e=+M+120/(H-F)*100),(n=Math.round(e/t)*t)<-177*t&&(n=-177*t),n>2*t&&(n=2*t),p.current.style.transform="translateY(".concat(n,"px)"),N(n)}var n;if(H-F>100&&0!==w)(n=Math.round(+M/t)*t)<-177*t&&(n=-177*t),n>2*t&&(n=2*t),p.current.style.transform="translateY(".concat(n,"px)"),N(n);g(0)}}),[T,M,w,W,H,t,F]);var J=function(e){var n=e.target;0===w&&N(parseInt(n.dataset.translatedValue))},K=T&&"slow"===j;return e("div",{className:"react-wheel-time-picker-minute",onMouseDown:function(e){I(!1),y(e.clientY),Y(!0),O(performance.now())},onMouseUp:G,onMouseMove:function(e){g(x?e.clientY-k:0)},onMouseLeave:function(){Y(!1),N((function(e){return+e+w})),I(!0),P(performance.now()),performance.now()-F<=100?L("fast"):L("slow"),q(w<0?"down":"up")},style:{height:5.7*t},onWheel:function(e){e.deltaY>0?+M<2*t&&N((function(e){return+e+t})):+M>-177*t&&N((function(e){return+e-t}))},onTouchStart:function(e){I(!1),y(e.targetTouches[0].clientY),Y(!0),O(performance.now())},onTouchMove:function(e){g(x?e.targetTouches[0].clientY-k:0)},onTouchEnd:G,children:e("div",{ref:p,className:"".concat(!0===(T&&"fast"===j)&&"react-wheel-time-picker-fast"," ").concat(!0===K&&"react-wheel-time-picker-slow"),onTransitionEnd:function(){i(t,60).map((function(e){parseInt(e.translatedValue)===M&&(z(e.arrayNumber),s((function(n){return"".concat(null==n?void 0:n.slice(0,2),":").concat(e.number)})),h((function(){return l(t,60).map((function(n){return n.number==e.number&&+n.translatedValue==M?c(c({},n),{selected:!0}):n}))})))}))},style:{transform:"translateY(".concat(M,"px)")},children:m.map((function(n,r){return e("div",{className:"react-wheel-time-picker-cell-minute",style:{height:"".concat(t,"px")},children:e("div",{style:{color:d?"#f7f7f7":n.selected?"#000":"#6a6a6b",fontSize:n.selected?18:14},className:"react-wheel-time-picker-cell-inner-minute".concat(n.selected?" react-wheel-time-picker-cell-inner-selected":""),onClick:J,"data-translated-value":n.translatedValue,children:n.number})},r)}))})})}function d(n){var t,l,i=n.height,u=n.setHourFormat,s=n.hourFormat,d=n.isDarkMode,f=[{number:"AM",translatedValue:(2*i).toString(),selected:!1},{number:"PM",translatedValue:i.toString(),selected:!1}],m=r([{number:"AM",translatedValue:(2*i).toString(),selected:"AM"===s.hourFormat},{number:"PM",translatedValue:i.toString(),selected:"PM"===s.hourFormat}]),h=m[0],p=m[1],v=a(null),w=r(0),g=w[0],b=w[1],k=r(0),y=k[0],V=k[1],M=r(parseInt(null!==(l=null===(t=h.filter((function(e){return!0===e.selected}))[0])||void 0===t?void 0:t.translatedValue)&&void 0!==l?l:"00:00")),N=M[0],S=M[1],x=r(!1),Y=x[0],C=x[1],T=r(!1),I=T[0],D=T[1],F=r(0),O=F[0],A=F[1],H=r(0),P=H[0],E=H[1],B=r(null)[1],j=r("")[1],L=r(null),U=L[0],W=L[1],q=r(void 0)[1],z=function(){C(!1),S((function(e){return e+g})),D(!0),E(performance.now()),performance.now()-O<=100?j("fast"):j("slow"),W(g<0?"down":"up")};o((function(){Y&&(v.current.style.transform="translateY(".concat(N+g,"px)"))}),[g,N,Y]),o((function(){if(I){B(P-O);var e=Math.round(N/i)*i;e<i&&(e=i),e>2*i&&(e=2*i),v.current.style.transform="translateY(".concat(e,"px)"),S(e),b(0)}}),[I,N,g,U,P,i,O]);var G=function(e){var n=e.target;0===g&&S(parseInt(n.dataset.translatedValue))};return e("div",{className:"react-wheel-time-picker-hour-format",onMouseDown:function(e){D(!1),V(e.clientY),C(!0),A(performance.now())},onMouseUp:z,onMouseMove:function(e){b(Y?e.clientY-y:0)},onMouseLeave:function(){C(!1),S((function(e){return e+g})),D(!0),E(performance.now()),W(g<0?"down":"up")},style:{height:5*i},onWheel:function(e){e.deltaY>0?N<=i&&S((function(e){return e+i})):N>=2*i&&S((function(e){return e-i}))},onTouchStart:function(e){D(!1),V(e.targetTouches[0].clientY),C(!0),A(performance.now())},onTouchMove:function(e){b(Y?e.targetTouches[0].clientY-y:0)},onTouchEnd:z,children:e("div",{ref:v,className:"".concat(I&&"react-wheel-time-picker-hour-format-transition"),onTransitionEnd:function(e){"transform"===e.propertyName&&[{number:"AM",translatedValue:(2*i).toString(),arrayNumber:0},{number:"PM",translatedValue:i.toString(),arrayNumber:1}].map((function(e){parseInt(e.translatedValue)===N&&(q(e.arrayNumber),u({mount:!0,hourFormat:e.number}),p((function(){return f.map((function(n){return n.number==e.number&&+n.translatedValue==N?c(c({},n),{selected:!0}):n}))})))}))},style:{transform:"translateY(".concat(N,"px)")},children:h.map((function(n,t){return e("div",{className:"react-wheel-time-picker-cell-hour",style:{height:"".concat(i,"px")},children:e("div",{style:n.selected?{color:d?"#f7f7f7":"#000"}:{},className:"react-wheel-time-picker-cell-inner-hour-format".concat(n.selected?" react-wheel-time-picker-cell-inner-hour-format-selected":""),onClick:G,"data-translated-value":n.translatedValue,children:n.number})},t)}))})})}function f(t){var a=t.pickerDefaultValue,l=t.initialValue,i=t.onChange,f=t.height,m=t.onSave,h=t.onCancel,p=t.cancelButtonText,v=t.saveButtonText,w=t.controllers,g=t.setInputValue,b=t.setIsOpen,k=t.seperator,y=t.use12Hours,V=t.onAmPmChange,M=t.isDarkMode,N=y?null==l?void 0:l.slice(0,5):l,S=r(null===l?a:N),x=S[0],Y=S[1],C=r({mount:!1,hourFormat:l&&(null==l?void 0:l.slice(6,8))}),T=C[0],I=C[1];o((function(){if(!1===w){var e=y?"".concat(x," ").concat(T.hourFormat):x;g(e),i(e)}}),[x,w,T.hourFormat,i,g,y]),o((function(){T.mount&&V(T.hourFormat)}),[T,V]);var D={height:f,value:x,setValue:Y,controllers:w,use12Hours:y,onAmPmChange:V,setHourFormat:I,hourFormat:T,isDarkMode:M};return n("div",{className:"react-wheel-time-picker  react-wheel-time-picker-transition",children:[w&&n("div",{className:"react-wheel-time-picker-btn-container",style:M?{background:"#000"}:{backgroundColor:"#d6d6d6"},children:[e("button",{style:{backgroundColor:M?"#000":"#d6d6d6",color:M?"#fe9f06":"#262626"},className:"react-wheel-time-picker-btn react-wheel-time-picker-btn-cancel",onClick:function(){h(),b(!1)},children:p}),e("button",{style:{background:M?"#000":"#d6d6d6",color:M?"#fe9f06":"#262626"},className:"react-wheel-time-picker-btn",onClick:function(){var e=y?"".concat(x," ").concat(T.hourFormat):x;e&&(g(e),i(e),m(e)),b(!1)},children:v})]}),n("div",{className:"react-wheel-time-picker-container",style:{height:"".concat(5*f+20,"px"),backgroundColor:M?"#1d1d1d":"#f6f6f6f6"},children:[e("div",{className:"react-wheel-time-picker-selected-overlay",style:{top:"".concat(2*f+20,"px"),height:"".concat(f,"px"),backgroundColor:M?"#2c2c2f":"#d3d3d3d3"}}),e(u,c({},D)),k&&e("div",{className:"react-wheel-time-picker-colon",style:{color:M?"#f7f7f7":"#000"},children:":"}),e(s,c({},D)),y&&e(d,c({},D))]})]})}var m=function(n){var t=n.isOpen,r=n.isDarkMode,a=n.children;return e("div",{style:t?{width:"100%",height:"100%",backgroundColor:r?"rgba(58,54,56,0.83)":"rgba(0,0,0,0.83)",position:"absolute",top:0,left:0}:{},children:a})};function h(a){var o=a.value,l=void 0===o?"":o,i=a.cellHeight,u=void 0===i?28:i,s=a.placeHolder,d=void 0===s?"Select Time":s,h=a.pickerDefaultValue,p=void 0===h?"":h,v=a.onChange,w=void 0===v?function(){}:v,g=a.onFocus,b=void 0===g?function(){}:g,k=a.onSave,y=void 0===k?function(){}:k,V=a.onCancel,M=void 0===V?function(){}:V,N=a.disabled,S=void 0!==N&&N,x=a.isOpen,Y=void 0!==x&&x,C=a.required,T=void 0!==C&&C,I=a.cancelButtonText,D=void 0===I?"Cancel":I,F=a.saveButtonText,O=void 0===F?"Save":F,A=a.controllers,H=void 0===A||A,P=a.seperator,E=void 0===P||P,B=a.id,j=void 0===B?null:B,L=a.use12Hours,U=void 0!==L&&L,W=a.onAmPmChange,q=void 0===W?function(){}:W,z=a.name,G=void 0===z?null:z,J=a.onOpen,K=void 0===J?function(){}:J,Q=a.popupClassName,R=void 0===Q?null:Q,X=a.inputClassName,Z=void 0===X?null:X,$=a.isDarkMode,_=a.label,ee=r(Y),ne=ee[0],te=ee[1],re=r(u)[0],ae=r(l),oe=ae[0],ce=ae[1],le=oe;null===l&&U?le="".concat(p," AM"):null!==l||U||(le=p);var ie={onChange:w,height:re,onSave:y,onCancel:M,cancelButtonText:D,saveButtonText:O,controllers:H,setInputValue:ce,setIsOpen:te,seperator:E,use12Hours:U,onAmPmChange:q,initialValue:le,pickerDefaultValue:p,isDarkMode:$};return n(t,{children:[n("div",{className:"react-wheel-time-picker-main",style:{display:"flex",flexDirection:"column",alignItems:"center"},onClick:function(){te(!ne)},children:[e("label",{className:"label",children:_}),e("input",{id:j,name:G,className:"react-wheel-time-picker-input ".concat(Z||""),value:null===oe?"":oe,type:"text",style:{width:"80%",color:$?"#fff":"#000",border:$?"1px solid #fff":"1px solid #0005"},placeholder:d,readOnly:!0,disabled:S,required:T,onFocus:function(){b(),K()}})]}),ne&&!S&&e(m,{isOpen:ne,isDarkMode:$,children:e("div",{children:n("div",{className:"react-wheel-time-picker-popup",children:[e("div",{className:"react-wheel-time-picker-popup-overlay ".concat(R||""),onClick:function(){return te(!ne)}}),e(f,c({},ie))]})})})]})}export{h as TimePicker};
//# sourceMappingURL=bundle.esm.js.map
