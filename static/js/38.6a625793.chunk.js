(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[38],{266:function(t,e,i){"use strict";i.r(e);var a=i(20),s=i(33),d=i(82),c=i(6),l=i(32),n=i(84),o=i.n(n),r=i(83),j=i.n(r),b=i(1),u=i(90),m=function(t){var e=t.statistic,i=t.data,s=t.isPerMillion,d=t.lastUpdatedTT,n=Object(l.i)(i,e,{perMillion:s},d),r=n.total,j=n.delta,b=Object(u.c)({total:r,delta:j,config:c.q}),m=c.u[e];return Object(a.jsxs)("div",{className:"cell statistic",children:[!m.hideDelta&&Object(a.jsx)(u.a.div,{className:o()("delta","is-".concat(e)),title:j,children:b.delta.interpolate((function(t){return t>0?"\u2191"+Object(l.e)(t,m.format):t<0?"\u2193"+Object(l.e)(Math.abs(t),m.format):""}))}),Object(a.jsx)(u.a.div,{className:"total",title:r,children:b.total.interpolate((function(t){return Object(l.e)(t,m.format,e)}))})]})},h=function(t,e){var i,a,s,d;return!!j()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!j()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&!!j()(t.isPerMillion,e.isPerMillion))},v=Object(b.memo)(m,h),O=i(105),g=i(91),x=i(94),N=i(271);function p(t){var e,i=t.stateCode,d=t.districtName,l=t.data,n=t.isPerMillion,r=t.regionHighlighted,j=t.setRegionHighlighted,u=t.expandTable,m=t.lastUpdatedTT,h=Object(N.a)().t,p=Object(b.useCallback)((function(){r.districtName!==d&&j(Object(x.a)(r,(function(t){t.stateCode=i,t.districtName=d})))}),[r,d,j,i]),C=u?c.x:c.w;return Object(a.jsxs)("div",{className:o()("row","district",{"is-highlighted":(null===r||void 0===r?void 0:r.districtName)===d}),onMouseEnter:p,children:[Object(a.jsxs)("div",{className:"cell",children:[Object(a.jsx)("div",{className:"state-name",children:h(d)}),(null===l||void 0===l||null===(e=l.meta)||void 0===e?void 0:e.notes)&&Object(a.jsx)(O.a,Object(s.a)(Object(s.a)({},{data:l.meta.notes}),{},{children:Object(a.jsx)(g.j,{size:16})}))]}),C.map((function(t){return Object(a.jsx)(v,Object(s.a)({},{statistic:t,data:l,isPerMillion:n,lastUpdatedTT:m}),t)}))]})}var C=function(t,e){var i,a,s,d,c,l;return!!j()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!j()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&(!!j()(null===(c=t.data)||void 0===c?void 0:c.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!!j()(t.isPerMillion,e.isPerMillion)&&(!(!j()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(j()(t.regionHighlighted.districtName,t.districtName)||j()(e.regionHighlighted.districtName,e.districtName)))&&!!j()(t.expandTable,e.expandTable)))))},f=Object(b.memo)(p,C),T=i(157),H=i(5),M=i(225);function k(t){var e,i,n=this,r=t.data,j=t.stateCode,u=t.districtName,m=t.isPerMillion,h=t.regionHighlighted,p=t.setRegionHighlighted,C=t.expandTable,k=t.lastUpdatedTT,P=Object(b.useState)(!1),w=Object(d.a)(P,2),D=w[0],U=w[1],A=Object(M.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),S=Object(d.a)(A,2),R=S[0],_=S[1],z=Object(H.g)(),E=Object(N.a)().t,F=Object(b.useRef)(),I=Object(b.useCallback)((function(t){_(Object(x.a)(R,(function(e){e.isAscending=!R.isAscending,e.sortColumn=t})))}),[R,_]),J=Object(b.useCallback)((function(t,e){if("districtName"!==R.sortColumn){var i=c.u[R.sortColumn],a=R.delta&&!i.hideDelta?"delta":"total",s=Object(l.i)(r.districts[t],R.sortColumn,{perMillion:m},k)[a],d=Object(l.i)(r.districts[e],R.sortColumn,{perMillion:m},k)[a];return R.isAscending?s-d:d-s}return R.isAscending?t.localeCompare(e):e.localeCompare(t)}),[R,r,m,k]),q=Object(b.useCallback)((function(){j?h.stateCode!==j&&p(Object(x.a)(h,(function(t){t.stateCode=j,t.districtName=null}))):u&&(h.districtName===u&&h.stateCode===r.stateCode||p(Object(x.a)(h,(function(t){t.stateCode=r.stateCode,t.districtName=u}))))}),[r.stateCode,u,h,p,j]),y=Object(b.useCallback)((function(){r.districts&&U(!D)}),[D,r]),V=E(u);u===c.D&&(V="".concat(E(c.D)," [").concat(E(c.t[r.stateCode]),"]"));var B=Object(b.useCallback)((function(t){z.push("state/".concat(t))}),[z]),G=Object(b.useCallback)((function(){U(!1),F.current.scrollIntoView({block:"start"})}),[]),K=C?c.x:c.w;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:o()("row",{"is-total":"TT"===j},{"is-highlighted":j&&(null===h||void 0===h?void 0:h.stateCode)===j||u&&(null===h||void 0===h?void 0:h.districtName)===u&&(null===h||void 0===h?void 0:h.stateCode)===r.stateCode}),onMouseEnter:q,onClick:y,ref:F,children:[Object(a.jsxs)("div",{className:"cell",children:[Object(a.jsx)("div",{className:"state-name fadeInUp",children:E(c.t[j])||V}),(null===r||void 0===r||null===(e=r.meta)||void 0===e?void 0:e.notes)&&Object(a.jsx)(O.a,Object(s.a)(Object(s.a)({},{data:r.meta.notes}),{},{children:Object(a.jsx)(g.j,{size:16})}))]}),K.map((function(t){return Object(a.jsx)(v,Object(s.a)({},{data:r,statistic:t,isPerMillion:m,lastUpdatedTT:k}),t)}))]}),D&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"state-meta",children:[Object(a.jsxs)("div",{className:"state-meta-top",children:[(null===r||void 0===r||null===(i=r.meta)||void 0===i?void 0:i.last_updated)&&Object(a.jsxs)("p",{className:"last-updated",children:[Object(a.jsx)(g.c,{}),Object(l.a)("".concat(Object(l.d)(r.meta.last_updated)," ").concat(E("ago")))]}),Object(a.jsxs)("div",{className:"state-page",onClick:B.bind(this,j),children:[Object(a.jsx)(g.h,{}),Object(a.jsx)("span",{children:E("See more details on {{state}}",{state:j})})]})]}),r.districts&&c.D in r.districts&&Object(a.jsx)("div",{className:"state-meta-bottom",children:Object(a.jsxs)("div",{className:o()("disclaimer"),children:[Object(a.jsx)(g.a,{}),Object(a.jsx)("span",{children:E("District-wise data not available in state bulletin")})]})})]}),Object(a.jsxs)("div",{className:o()("row","heading"),children:[Object(a.jsxs)("div",{className:"cell heading",onClick:I.bind(this,"districtName"),children:[Object(a.jsx)("div",{className:"district-name",children:E("District")}),"districtName"===R.sortColumn&&Object(a.jsx)("div",{className:o()("sort-icon",{invert:!R.isAscending}),children:Object(a.jsx)(g.e,{size:10})})]}),K.map((function(t){return Object(a.jsx)(T.a,Object(s.a)(Object(s.a)({},{statistic:t,sortData:R,setSortData:_}),{},{handleSort:I.bind(n,t)}),t)}))]})]}),D&&Object.keys(r.districts||{}).sort((function(t,e){return J(t,e)})).map((function(t){return Object(a.jsx)(f,Object(s.a)({data:r.districts[t]},{districtName:t,regionHighlighted:h,setRegionHighlighted:p,stateCode:j,isPerMillion:m,expandTable:C,lastUpdatedTT:k}),t)})),D&&Object(a.jsx)("div",{className:"spacer-row",children:Object(a.jsxs)("div",{className:"spacer",children:[Object(a.jsx)("p",{children:"End of ".concat(E(c.t[j]),"'s districts")}),Object(a.jsx)("div",{className:"fold",onClick:G,children:Object(a.jsx)(g.g,{})})]})})]})}var P=function(t,e){var i,a,s,d;return!!j()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!j()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&(!!j()(t.isPerMillion,e.isPerMillion)&&(!(!j()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&j()(t.regionHighlighted.stateCode,t.stateCode)||j()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!j()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&j()(t.regionHighlighted.districtName,t.districtName)||j()(e.regionHighlighted.districtName,e.districtName))&&!!j()(t.expandTable,e.expandTable)))))};e.default=Object(b.memo)(k,P)}}]);
//# sourceMappingURL=38.6a625793.chunk.js.map