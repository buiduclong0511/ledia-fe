(this["webpackJsonpmedia-player-fe"]=this["webpackJsonpmedia-player-fe"]||[]).push([[0],{209:function(n,e,t){},210:function(n,e,t){},371:function(n,e,t){"use strict";t.r(e);var i,a,o,r,c,s,l,d=t(0),u=t.n(d),b=t(9),p=t.n(b),j=t(18),h=t(178),f=(t(209),t(210),t(63)),g=t(14),x=t(16),m=t(7),O=t(5),v=t(412),y=t(1),w=function(n){var e=n.label,t=void 0===e?"":e,i=n.type,a=void 0===i?"text":i,o=n.value,r=void 0===o?"":o,c=n.error,s=void 0===c?"":c,l=n.touched,d=void 0!==l&&l,u=n.name,b=void 0===u?"":u,p=n.multiline,j=void 0!==p&&p,h=n.required,f=void 0!==h&&h,g=n.onChange,x=void 0===g?function(){}:g,m=n.onBlur,O=void 0===m?function(){}:m;return Object(y.jsx)(k,{children:Object(y.jsx)(v.a,{label:t,value:r,type:a,error:!!s&&d,helperText:d&&s?s:"",onChange:x,onBlur:O,variant:"outlined",name:b,autoComplete:"",fullWidth:!0,multiline:j,maxRows:10,required:f})})},k=O.c.div(i||(i=Object(m.a)(["\n    padding: 10px 0;\n\n    .MuiFormLabel-root {\n        color: #fff;\n    }\n\n    .MuiInputBase-root {\n        color: #fff;\n    }\n    \n    .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n        border-color: #ccc;\n    }\n\n    .MuiFormLabel-root.Mui-focused {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiInputBase-inputMultiline::-webkit-scrollbar-thumb {\n        background: #fff;\n    }\n"]))),N=function(n){var e=n.imgPath,t=void 0===e?"":e,i=n.width,a=void 0===i?40:i;return Object(y.jsx)(S,{width:a,children:t?Object(y.jsx)("img",{src:t,alt:"",className:"avatar"}):Object(y.jsx)("div",{className:"noAvatar",children:Object(y.jsx)("i",{className:"far fa-user"})})})},S=O.c.div(a||(a=Object(m.a)(["\n    cursor: pointer;\n    width: ",";\n    height: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid ",";\n    border-radius: 50%;\n    background-color: ",";\n"])),(function(n){return n.width+"px"}),(function(n){return n.width+"px"}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),C=t(409),B=t(414),I=t(410),M=t(411),F=function(n){var e=n.label,t=void 0===e?"":e,i=n.options,a=void 0===i?[]:i,o=n.value,r=void 0===o?null:o,c=n.id,s=void 0===c?"":c,l=n.onChange,d=void 0===l?function(){}:l;return Object(y.jsx)(P,{children:Object(y.jsxs)(C.a,{variant:"outlined",fullWidth:!0,children:[Object(y.jsx)(B.a,{id:s,children:t}),Object(y.jsx)(I.a,{labelId:s+"-label",id:s,value:r,onChange:d,label:t,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},getContentAnchorEl:null},children:a.map((function(n,e){return Object(y.jsx)(M.a,{value:n.value,children:n.label},e)}))})]})})},P=O.c.div(o||(o=Object(m.a)(["\n    padding: 10px 0;\n\n    .MuiFormLabel-root {\n        color: #fff;\n    }\n    \n    .MuiInputBase-root {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n        border-color: #ccc;\n    }\n\n    .MuiSelect-icon {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiFormLabel-root.Mui-focused {\n        color: #fff;\n    }\n"]))),L=t(185),T=t.n(L),E=function(n){var e=n.height,t=void 0===e?35:e,i=n.width,a=void 0===i?4:i,o=n.radius,r=void 0===o?2:o,c=n.margin,s=void 0===c?2:c;return Object(y.jsxs)(z,{children:[Object(y.jsx)("div",{className:"overlay"}),Object(y.jsx)("div",{className:"icon",children:Object(y.jsx)(T.a,{height:t,width:a,radius:r,margin:s,color:"#36D7B7"})})]})},z=O.c.div(r||(r=Object(m.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);\n    }\n\n    .icon {\n        z-index: 1;\n    }\n"]))),q={colors:{main:"#170F23",secondary:"#3F0537",purple:"#7200A1",orange:"#FF5D24",gray:"#F6F6F6",gray_1:"#333333",gray_2:"#4f4f4f",gray_3:"#828282",gray_4:"#BDBDBD",gray_5:"#E0E0E0",gray_6:"#F2F2F2",black:"#231B2E",bgBtn:"#430538"},breakPoints:{breakSmall:"320px",breakMobile:"540px",breakMobileMedium:"575px",breakTablet:"770px",breakOnlyMobile:"768px",breakMedium:"980px",breakIpadPro:"1024px",breakLarge:"1200px",breakBig:"1366px"}},U=function(){return Object(O.b)(c||(c=Object(m.a)(["\n        @media (max-width: ",") {\n            ","\n        }\n    "])),q.breakPoints.breakMobile,O.b.apply(void 0,arguments))},R=function(){return Object(O.b)(s||(s=Object(m.a)(["\n        @media (max-width: ",") {\n            ","\n        }\n    "])),q.breakPoints.breakTablet,O.b.apply(void 0,arguments))},A=function(){return Object(O.b)(l||(l=Object(m.a)(["\n        @media (max-width: ",") {\n            ","\n        }\n    "])),q.breakPoints.breakIpadPro,O.b.apply(void 0,arguments))};function D(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}var _,W,H,V,G,J,X,Y=t(39),K=Y.a().shape({email:Y.c().required("This field is required!").email("Email is invalid!"),password:Y.c().required("This field is required!")}),Q=Y.a().shape({email:Y.c().required("This field is required!").email("Email is invalid!"),password:Y.c().required("This field is required!"),confirmPassword:Y.c().oneOf([Y.b("password"),null],"Passwords must match")}),Z=function(n){var e={};return e.name=n.songName||n.name,e.musicSrc=n.fileUrl||n.musicSrc,e.cover=n.coverUrl||n.cover,e.singer=n.singer||n.singer,e.lyric=n.lyrics||n.lyric,e.key=n._id||n.key,e},$=O.c.div(_||(_=Object(m.a)(['\n    padding: 0 20px;\n\n    .banner {\n        margin: 20px 50px 50px 50px;\n        border-radius: 30px;\n        background-image: url("images/banners/banner.jpg");\n        height: 300px;\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n\n        ',"\n    }\n"])),U(W||(W=Object(m.a)(["\n            display: none;\n        "])))),nn=O.c.div(H||(H=Object(m.a)(["\n    padding: 20px;\n\n    .infoUpload {\n        max-width: 500px;\n    }\n    \n    .inputFile {\n        .input {\n            padding-left: 10px;\n        }\n    }\n    \n    .audioFile {\n        padding-bottom: 20px;\n\n        .heading {\n            padding: 20px 0 10px 0;\n        }\n    }\n\n    .buttonUpload {\n        padding-top: 20px;\n    }\n"]))),en=O.c.div(V||(V=Object(m.a)(["\n    background: rgb(2,0,36);\n    background: linear-gradient(32deg, rgba(2,0,36,1) 0%, rgba(121,9,73,1) 50%, rgba(0,212,255,1) 100%);\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n"]))),tn=O.c.button(G||(G=Object(m.a)(["\n    background-color: ",";\n    padding: 10px 20px;\n    font-size: 15px;\n    border-radius: 5px;\n    transition: 300ms;\n    width: 100%;\n    cursor: ",";\n\n    ","\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.disabled?"#ccc":n.theme.colors.main}),(function(n){return n.disabled?"not-allowed":"pointer"}),U(J||(J=Object(m.a)(["\n        padding: 10px;\n        font-size: 12px;\n    "]))),(function(n){return n.disabled?"#ccc":n.theme.colors.orange})),an=O.c.button(X||(X=Object(m.a)(["\n    font-size: 15px;\n    border-bottom: 2px solid transparent;\n\n    &:hover {\n        border-color: #fff;\n    }\n\n    .text {\n        margin-left: 5px;\n    }\n"]))),on=t(26),rn=t.n(on),cn=t(36),sn=t(189),ln=t.n(sn),dn=t(30),un=t(114),bn=t(190),pn=t.n(bn),jn=t(66),hn=t(21),fn=Object(dn.b)("auth/login",function(){var n=Object(cn.a)(rn.a.mark((function n(e,t){var i,a;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.rejectWithValue,n.prev=1,n.next=4,ne.login(e);case 4:return a=n.sent,n.abrupt("return",a.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",i(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),gn=Object(dn.b)("auth/register",function(){var n=Object(cn.a)(rn.a.mark((function n(e,t){var i,a;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.rejectWithValue,n.prev=1,n.next=4,ne.register(e);case 4:return a=n.sent,n.abrupt("return",a.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",i(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),xn=Object(dn.c)({name:"auth",initialState:{userInfo:null,token:null,isLoading:!1},reducers:{logout:function(n){n.token=null,n.isLoading=!1,n.userInfo=null}},extraReducers:function(n){n.addCase(fn.fulfilled,(function(n,e){var t=e.payload,i=t.userInfo,a=t.token;n.token=a,n.userInfo=i,n.isLoading=!1})),n.addCase(fn.pending,(function(n){n.isLoading=!0})),n.addCase(fn.rejected,(function(n){n.token=null,n.isLoading=!1,n.userInfo=null})),n.addCase(gn.fulfilled,(function(n,e){var t=e.payload,i=t.userInfo,a=t.token;n.token=a,n.userInfo=i,n.isLoading=!1})),n.addCase(gn.pending,(function(n){n.isLoading=!0})),n.addCase(gn.rejected,(function(n){n.token=null,n.isLoading=!1,n.userInfo=null}))}}),mn=function(n){return n.auth},On=xn.actions.logout,vn=xn.reducer,yn=Object(dn.c)({name:"app",initialState:{playlist:[],playingSong:null,isPlaying:!1},reducers:{addSongs:function(n,e){e.payload.forEach((function(e){return n.playlist.push(e)}))},replaceSongs:function(n,e){n.playlist=e.payload},play:function(n){n.isPlaying=!0},updatePlayingSong:function(n,e){n.playingSong=e.payload}}}),wn=function(n){return n.app},kn=yn.actions,Nn=kn.addSongs,Sn=kn.replaceSongs,Cn=kn.play,Bn=kn.updatePlayingSong,In=yn.reducer,Mn=Object(hn.b)({auth:vn,app:In}),Fn={key:"root",storage:pn.a,whitelist:["auth"]},Pn=Object(un.a)(Fn,Mn),Ln=Object(dn.a)({reducer:Pn,middleware:[jn.a]}),Tn=Object(un.b)(Ln),En=t(149),zn=ln.a.create({baseURL:"https://media-player-be.herokuapp.com/api",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:function(n){return En.stringify(n)}});zn.interceptors.request.use((function(n){var e=Ln.getState().auth.token;return e&&(n.headers.Authorization="Bearer ".concat(e)),n})),zn.interceptors.response.use((function(n){return n&&n.data,n}),(function(n){throw n.response&&401===n.response.status&&Ln.dispatch(On()),n}));var qn,Un,Rn,An,Dn,_n,Wn,Hn,Vn,Gn,Jn,Xn,Yn,Kn,Qn,Zn,$n=zn,ne={login:function(n){return $n.post("/users/login",n)},register:function(n){return $n.post("/users/register",n)}},ee=t(149),te=function(n){return $n.post("/songs",n)},ie=function(n){var e=ee.stringify(n),t="/songs";return e&&(t+="?"+e),$n.get(t)},ae=t(24),oe="/ledia-fe/",re="/ledia-fe/upload",ce=[{path:oe,component:function(){var n=Object(d.useState)([]),e=Object(x.a)(n,2),t=e[0],i=e[1],a=Object(d.useState)(!1),o=Object(x.a)(a,2),r=o[0],c=o[1],s=function(){var n=Object(cn.a)(rn.a.mark((function n(){var e;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,ie({all:!0});case 4:e=n.sent,i(e.data.songs.map((function(n){return Z(n)}))),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return Object(d.useEffect)((function(){s()}),[]),Object(y.jsxs)($,{children:[Object(y.jsx)("div",{className:"banner"}),r?Object(y.jsx)(E,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(be,{heading:"B\xe0i h\xe1t \u0111\u01b0\u1ee3c nghe nhi\u1ec1u nh\u1ea5t",listSongs:t}),Object(y.jsx)(be,{heading:"Playlist \u0111\u01b0\u1ee3c y\xeau th\xedch nh\u1ea5t",listSongs:t}),Object(y.jsx)(be,{heading:"B\xe0i h\xe1t nghe g\u1ea7n \u0111\xe2y",listSongs:t})]})]})}},{path:re,component:function(){var n=Object(j.c)(mn).userInfo,e=Object(d.useState)(!1),t=Object(x.a)(e,2),i=t[0],a=t[1],o=Object(d.useState)({songName:"",singer:"",author:"",type:"",lyrics:"",thumb:null,audioFile:null,poster:n._id}),r=Object(x.a)(o,2),c=r[0],s=r[1],l=Object(d.useState)(!0),u=Object(x.a)(l,2),b=u[0],p=u[1],h=Object(d.useState)(""),f=Object(x.a)(h,2),g=f[0],m=f[1],O=Object(d.useRef)([{value:"Nh\u1ea1c tr\u1ebb",label:"Nh\u1ea1c tr\u1ebb"},{value:"Nh\u1ea1c rap",label:"Nh\u1ea1c rap"},{value:"Nh\u1ea1c v\xe0ng",label:"Nh\u1ea1c v\xe0ng"}]);Object(d.useEffect)((function(){p(!!(c.songName&&c.audioFile&&c.thumb))}),[c]);return console.log("upload info: ",c),Object(y.jsxs)(nn,{children:[i?Object(y.jsx)(E,{height:70,width:10,margin:5,radius:5}):Object(y.jsx)(y.Fragment,{}),Object(y.jsx)("div",{className:"grid",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col l-5 m-5 c-12",children:[Object(y.jsxs)("div",{className:"inputFile",children:[Object(y.jsx)("p",{className:"heading",children:"Thumb image * "}),Object(y.jsxs)("div",{className:"input",children:[Object(y.jsx)(Te,{blobPath:g}),Object(y.jsx)("input",{type:"file",accept:"image/*",onChange:function(n){var e;s(Object(ae.a)(Object(ae.a)({},c),{},{thumb:n.target.files[0]})),m(""+(e=n.target.files[0],URL.createObjectURL(e)))}})]})]}),Object(y.jsxs)("div",{className:"inputFile audioFile",children:[Object(y.jsx)("p",{className:"heading",children:"Audio file * "}),Object(y.jsx)("div",{className:"input",children:Object(y.jsx)("input",{type:"file",accept:"audio/*",onChange:function(n){s(Object(ae.a)(Object(ae.a)({},c),{},{audioFile:n.target.files[0]}))}})})]})]}),Object(y.jsx)("div",{className:"col l-7 m-7 c-12",children:Object(y.jsxs)("div",{className:"infoUpload",children:[Object(y.jsx)(w,{label:"T\xean b\xe0i h\xe1t",value:c.songName,onChange:function(n){s(Object(ae.a)(Object(ae.a)({},c),{},{songName:n.target.value}))},required:!0}),Object(y.jsx)(w,{label:"Ca s\u0129",value:c.singer,onChange:function(n){s(Object(ae.a)(Object(ae.a)({},c),{},{singer:n.target.value}))}}),Object(y.jsx)(w,{label:"T\xe1c gi\u1ea3",value:c.author,onChange:function(n){s(Object(ae.a)(Object(ae.a)({},c),{},{author:n.target.value}))}}),Object(y.jsx)(F,{label:"Th\u1ec3 lo\u1ea1i",options:O.current,value:c.type,onChange:function(n){s(Object(ae.a)(Object(ae.a)({},c),{},{type:n.target.value}))}}),Object(y.jsx)(w,{label:"L\u1eddi b\xe0i h\xe1t",multiline:!0,value:c.lyrics,onChange:function(n){s(Object(ae.a)(Object(ae.a)({},c),{},{lyrics:n.target.value}))}}),Object(y.jsx)("div",{className:"buttonUpload",children:Object(y.jsx)(tn,{disabled:!b,onClick:function(){var n=function(){var n=c;return n.singer||(n.singer="unknown"),n.author||(n.author="unknown"),n.type||(n.type="unknown"),n.lyrics||(n.lyrics="unknown"),n}();a(!0),te(function(n){var e=new FormData;return Object.keys(n).forEach((function(t){e.append(t,n[t])})),e}(n)).then((function(n){return console.log(n)})).catch((function(n){return console.log(n.response)})).finally((function(){return a(!1)}))},children:"Upload"})})]})})]})})]})}}],se=function(){return Object(y.jsx)(le,{children:Object(y.jsx)(f.b,{to:oe,className:"logo",children:Object(y.jsx)("img",{src:"images/logos/logo.png",alt:"",className:"logoImg"})})})},le=O.c.div(qn||(qn=Object(m.a)(["\n    min-height: 100vh;\n    background-color: ",";\n    box-shadow: 1px 0 10px rgba(0, 0, 0, .5);\n    position: sticky;\n    top: 0;\n    \n    .logo {\n        display: flex;\n        justify-content: center;\n        padding-top: 10px;\n\n        .logoImg {\n            width: 35%;\n        }\n    }\n"])),(function(n){return n.theme.colors.secondary})),de=function(n){var e=n.isScrollDown,t=void 0!==e&&e,i=n.onToggleShowLoginModal,a=void 0===i?function(){}:i,o=n.onPushToUpload,r=void 0===o?function(){}:o,c=Object(j.c)(mn).userInfo;return Object(y.jsxs)(ue,{isScrollDown:t,children:[Object(y.jsx)("div",{className:"searchBox",children:Object(y.jsxs)("div",{className:"inputWrapper",children:[Object(y.jsx)("input",{type:"text"}),Object(y.jsx)("span",{className:"searchIcon",children:Object(y.jsx)("i",{className:"fas fa-search"})})]})}),Object(y.jsxs)("div",{className:"listBtn",children:[Object(y.jsx)("div",{className:"uploadBtn",children:Object(y.jsxs)(an,{onClick:r,children:[Object(y.jsx)("i",{className:"fas fa-cloud-upload-alt"}),Object(y.jsx)("span",{className:"text",children:"Upload"})]})}),c?Object(y.jsxs)("div",{className:"avatar",children:[Object(y.jsx)(N,{imgPath:c.avatarUrl}),Object(y.jsx)("div",{className:"menuHeader",children:Object(y.jsx)(Le,{})})]}):Object(y.jsx)("div",{className:"loginBtn",children:Object(y.jsx)(tn,{onClick:a,children:"\u0110\u0103ng nh\u1eadp"})})]})]})},ue=O.c.div(Un||(Un=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n    transition: height 200ms, backdrop-filter 200ms;\n    position: sticky;\n    top: 0;\n    z-index: 3;\n    ","\n\n    .inputWrapper {\n        min-width: 300px;\n        background-color: ",";\n        border-radius: 100px;\n        position: relative;\n\n        ","\n\n        .searchIcon {\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            right: 10px;\n            cursor: pointer;\n        }\n        \n        input {\n            padding: 12px 32px 12px 20px;\n            height: 100%;\n            width: 100%;\n            color: #fff;\n        }\n    }\n\n    .listBtn {\n        display: flex;\n        align-items: center;\n\n        .uploadBtn {\n            \n            ","\n        }\n\n        .loginBtn,\n        .avatar {\n            margin-left: 20px;\n        }\n\n        .avatar {\n            position: relative;\n\n            &:hover {\n                .menuHeader {\n                    display: block;\n                }\n            }\n\n            .menuHeader {\n                position: absolute;\n                top: 100%;\n                right: 0;\n                display: none;\n            }\n        }\n    }\n"])),(function(n){return n.isScrollDown?"\n        height: 55px;\n        backdrop-filter: blur(10px);\n        border-bottom: 1px solid ".concat(n.theme.colors.gray_2,";\n        box-shadow: 0 2px 10px rgba(0, 0, 0, .5);\n    "):"\n        height: 70px;\n        backdrop-filter: blur(0);\n        border-bottom: none;\n    "}),(function(n){return n.theme.colors.gray_1}),U(Rn||(Rn=Object(m.a)(["\n            min-width: 200px;\n            max-width: 250px;\n        "]))),U(An||(An=Object(m.a)(["\n                display: none;\n            "])))),be=function(n){var e=n.heading,t=void 0===e?"":e,i=n.listSongs,a=void 0===i?[]:i;return Object(y.jsxs)(pe,{children:[Object(y.jsx)("h2",{className:"heading",children:t}),Object(y.jsx)("div",{className:"listSongs",children:Object(y.jsx)("div",{className:"grid",children:Object(y.jsx)("div",{className:"row",children:a.map((function(n){return Object(y.jsx)("div",{className:"col l-2 m-4 c-12",children:Object(y.jsx)(Ie,{data:n})},n.key)}))})})})]})},pe=O.c.div(Dn||(Dn=Object(m.a)(["\n    margin-bottom: 40px;\n\n    .heading {\n        padding-bottom: 10px;\n    }\n\n    .listSongs {\n        padding-top: 10px;\n        padding-left: 10px;\n    }\n"]))),je=function(n){var e=n.data,t=void 0===e?{}:e,i=n.isPlaying,a=void 0!==i&&i,o=n.isWaiting,r=void 0!==o&&o,c=n.onPlaySong,s=void 0===c?function(){}:c,l=n.onAddSong,u=void 0===l?function(){}:l;return function(){var n=Object(d.useState)(D()),e=Object(x.a)(n,2),t=e[0],i=e[1];return Object(d.useEffect)((function(){function n(){i(D())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t}().width>767?Object(y.jsxs)(he,{children:[Object(y.jsx)("img",{src:t.cover,alt:""}),Object(y.jsx)("div",{className:"overlay",children:Object(y.jsxs)("div",{className:"listBtn",children:[Object(y.jsx)("button",{className:"btn playBtn",onClick:s,children:Object(y.jsx)("i",{className:"far fa-".concat(a?"pause":"play","-circle")})}),r?Object(y.jsx)(y.Fragment,{}):Object(y.jsx)("button",{className:"btn addBtn",onClick:u,children:Object(y.jsx)("i",{className:"fas fa-plus-circle"})})]})})]}):Object(y.jsxs)(fe,{children:[Object(y.jsx)("div",{className:"coverImg",children:Object(y.jsx)("img",{src:t.cover,alt:""})}),Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("div",{className:"name",children:t.name}),Object(y.jsx)("div",{className:"singer",children:t.singer})]}),Object(y.jsxs)("div",{className:"listBtn",children:[Object(y.jsx)("button",{className:"btn playBtn",onClick:s,children:Object(y.jsx)("i",{className:"far fa-play-circle"})}),r?Object(y.jsx)(y.Fragment,{}):Object(y.jsx)("button",{className:"btn addBtn",onClick:u,children:Object(y.jsx)("i",{className:"fas fa-plus-circle"})})]})]})},he=O.c.div(_n||(_n=Object(m.a)(["\n    cursor: pointer;\n    position: relative;\n    margin: 10px;\n\n    ","\n\n    &:hover {\n        .overlay {\n            opacity: 1;\n            visibility: visible;\n        }\n    }\n\n    img {\n        width: 100%;\n    }\n\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, .3);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        visibility: hidden;\n        transition: 300ms;\n\n        .listBtn {\n            display: flex;\n\n            .btn {\n                padding: 5px;\n                font-size: 24px;\n            }\n        }\n    }\n"])),A(Wn||(Wn=Object(m.a)(["\n        margin-bottom: 15px;\n    "])))),fe=O.c.div(Hn||(Hn=Object(m.a)(["\n    display: flex;\n    padding: 10px 0;\n    border-bottom: 1px solid ",";\n\n    .coverImg {\n        width: 80px;\n\n        img {\n            width: 100%;\n        }\n    }\n\n    .info {\n        padding-left: 10px;\n        flex: 1;\n    }\n\n    .listBtn {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding-right: 5px;\n\n        .btn {\n            margin: 5px 0;\n            font-size: 23px;\n        }\n    }\n"])),(function(n){return n.theme.colors.gray_3})),ge=function(n){var e=n.children,t=void 0===e?null:e;return Object(y.jsxs)(xe,{children:[Object(y.jsx)("div",{className:"overlay"}),Object(y.jsx)("div",{className:"modalContent",children:t})]})},xe=O.c.div(Vn||(Vn=Object(m.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 4;\n\n    .modalContent {\n        z-index: 1;\n    }\n\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, .5);\n    }\n"]))),me=function(n){var e=n.values,t=void 0===e?{}:e,i=n.errors,a=void 0===i?{}:i,o=n.touched,r=void 0===o?{}:o,c=(n.isSubmitting,n.onChange),s=n.onBlur,l=n.onSubmit,d=void 0===l?function(){}:l,u=n.onSwitchToRegister,b=void 0===u?function(){}:u,p=n.onCloseModal,j=void 0===p?function(){}:p;return Object(y.jsxs)(Oe,{onSubmit:d,children:[Object(y.jsx)("div",{className:"close",onClick:j,children:Object(y.jsx)("button",{type:"button",children:"\xd7"})}),Object(y.jsxs)("div",{className:"listFields",children:[Object(y.jsx)(w,{label:"Email",value:t.email,error:a.email,touched:r.email,onChange:c,onBlur:s,name:"email"}),Object(y.jsx)(w,{label:"Password",type:"password",value:t.password,error:a.password,touched:r.password,onChange:c,onBlur:s,name:"password"})]}),Object(y.jsx)("div",{className:"button",children:Object(y.jsx)(tn,{type:"submit",children:"\u0110\u0103ng nh\u1eadp"})}),Object(y.jsxs)("p",{className:"switchForm",children:["B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? ",Object(y.jsx)("span",{onClick:b,children:"\u0110\u0103ng k\xfd"})]})]})},Oe=O.c.form(Gn||(Gn=Object(m.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    padding: 50px 30px 20px 30px;\n    min-height: 370px;\n    position: relative;\n\n    .close {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 10px;\n\n        button {\n            font-size: 25px;\n        }\n    }\n\n    .listFields {\n        flex: 1;\n    }\n\n    .switchForm {\n        padding-top: 10px;\n\n        span {\n            transition: 300ms;\n\n            &:hover {\n                color: ",";\n                cursor: pointer;\n            }\n        }\n    }\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.orange})),ve=function(n){var e=n.values,t=void 0===e?{}:e,i=n.errors,a=void 0===i?{}:i,o=n.touched,r=void 0===o?{}:o,c=(n.isSubmitting,n.onChange),s=n.onBlur,l=n.onSubmit,d=void 0===l?function(){}:l,u=n.onSwitchToLogin,b=void 0===u?function(){}:u,p=n.onCloseModal,j=void 0===p?function(){}:p;return Object(y.jsxs)(ye,{onSubmit:d,children:[Object(y.jsx)("div",{className:"close",onClick:j,children:Object(y.jsx)("button",{type:"button",children:"\xd7"})}),Object(y.jsxs)("div",{className:"listFields",children:[Object(y.jsx)(w,{label:"Email",value:t.email,error:a.email,touched:r.email,onChange:c,onBlur:s,name:"email"}),Object(y.jsx)(w,{label:"Password",type:"password",value:t.password,error:a.password,touched:r.password,onChange:c,onBlur:s,name:"password"}),Object(y.jsx)(w,{label:"Confirm password",type:"password",value:t.confirmPassword,error:a.confirmPassword,touched:r.confirmPassword,onChange:c,onBlur:s,name:"confirmPassword"})]}),Object(y.jsx)("div",{className:"button",children:Object(y.jsx)(tn,{type:"submit",children:"\u0110\u0103ng k\xfd"})}),Object(y.jsxs)("p",{className:"switchForm",children:["B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n? ",Object(y.jsx)("span",{onClick:b,children:"\u0110\u0103ng nh\u1eadp"})]})]})},ye=O.c.form(Jn||(Jn=Object(m.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    padding: 50px 30px 20px 30px;\n    min-height: 370px;\n    position: relative;\n\n    .close {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 10px;\n\n        button {\n            font-size: 25px;\n        }\n    }\n\n    .listFields {\n        flex: 1;\n    }\n\n    .switchForm {\n        padding-top: 10px;\n\n        span {\n            transition: 300ms;\n\n            &:hover {\n                color: ",";\n                cursor: pointer;\n            }\n        }\n    }\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.orange})),we=function(n){var e=n.onClickLogout,t=void 0===e?function(){}:e;return Object(y.jsxs)(ke,{children:[Object(y.jsxs)("div",{className:"menuItem",children:[Object(y.jsx)("span",{className:"icon",children:Object(y.jsx)("i",{className:"far fa-id-badge"})}),Object(y.jsx)("span",{className:"text",children:"Profile"})]}),Object(y.jsxs)("div",{className:"menuItem",onClick:t,children:[Object(y.jsx)("span",{className:"icon",children:Object(y.jsx)("i",{className:"fas fa-sign-out-alt"})}),Object(y.jsx)("span",{className:"text",children:"\u0110\u0103ng xu\u1ea5t"})]})]})},ke=O.c.div(Xn||(Xn=Object(m.a)(["\n    background-color: ",";\n    min-width: 150px;\n    padding: 10px 20px;\n    border-radius: 8px;\n    margin-top: 5px;\n\n    .menuItem {\n        display: flex;\n        padding: 10px 0;\n        cursor: pointer;\n\n        .icon {\n            display: inline-block;\n            width: 25px;\n        }\n    }\n"])),(function(n){return n.theme.colors.main})),Ne=function(n){var e=n.blobPath,t=void 0===e?"":e;return Object(y.jsx)(Se,{blob:t,children:t?Object(y.jsx)("img",{className:"previewImg",src:t,alt:""}):Object(y.jsx)("div",{className:"noImage",children:Object(y.jsx)("i",{className:"far fa-file-image"})})})},Se=O.c.div(Yn||(Yn=Object(m.a)(["\n    margin: 10px 0;\n    border: 1px solid #fff;\n    height: 400px;\n    width: 400px;\n    overflow-y: hidden;\n    display: flex;\n    align-items: center;\n    background-color: ",";\n\n    ","\n\n    ","\n\n    ","\n\n    .noImage {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 100px;\n        height: 100%;\n        width: 100%;\n    }\n\n    .previewImg {\n        width: 100%;\n    }\n"])),(function(n){return n.blob?"#000":"transparent"}),A(Kn||(Kn=Object(m.a)(["\n        width: 250px;\n        height: 250px;\n    "]))),R(Qn||(Qn=Object(m.a)(["\n        width: 200px;\n        height: 200px;\n    "]))),U(Zn||(Zn=Object(m.a)(["\n        width: 250px;\n        height: 250px;\n    "])))),Ce="LOGIN",Be=function(){var n=Object(d.useState)(!1),e=Object(x.a)(n,2),t=e[0],i=e[1],a=Object(d.useState)(Ce),o=Object(x.a)(a,2),r=o[0],c=o[1],s=Object(d.useState)(!1),l=Object(x.a)(s,2),u=l[0],b=l[1],p=Object(g.f)(),j=function(){i(window.scrollY>50)};Object(d.useEffect)((function(){return document.addEventListener("scroll",j),function(){document.removeEventListener("scroll",j)}}),[]);var h=function(n){c(n)},f=function(){b(!u)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(de,{isScrollDown:t,onToggleShowLoginModal:f,onPushToUpload:function(){p.push(re)}}),u?Object(y.jsx)(ge,{children:r===Ce?Object(y.jsx)(Fe,{onSwitch:h,onCloseModal:f}):Object(y.jsx)(Pe,{onSwitch:h,onCloseModal:f})}):Object(y.jsx)(y.Fragment,{})]})},Ie=function(n){var e=n.data,t=Object(j.b)(),i=Object(j.c)(wn),a=i.playlist,o=i.playingSong||{},r=a.some((function(n){return n.key===e.key})),c=o.key===e.key;return Object(y.jsx)(je,{data:e,onPlaySong:function(){t(Sn([e])),t(Cn())},onAddSong:function(){t(Nn([e])),t(Cn())},isPlaying:c,isWaiting:r})},Me=t(82),Fe=function(n){var e=n.onCloseModal,t=void 0===e?function(){}:e,i=n.onSwitch,a=void 0===i?function(){}:i,o=Object(j.b)(),r=function(){return a("REGISTER")},c=function(){var n=Object(cn.a)(rn.a.mark((function n(e){var i;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o(fn(e));case 3:i=n.sent,Object(dn.d)(i),i&&t(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return Object(y.jsx)(Me.a,{initialValues:{email:"buiduclong0511@gmail.com",password:"123@abc"},onSubmit:c,validationSchema:K,children:function(n){var e=n.values,i=n.errors,a=n.touched,o=n.handleChange,c=n.handleBlur,s=n.handleSubmit,l=n.isSubmitting;return Object(y.jsx)(me,{onSwitchToRegister:r,values:e,errors:i,touched:a,onChange:o,onBlur:c,onSubmit:s,isSubmitting:l,onCloseModal:t})}})},Pe=function(n){var e=n.onCloseModal,t=n.onSwitch,i=void 0===t?function(){}:t,a=Object(j.b)(),o=function(){return i(Ce)},r=function(){var n=Object(cn.a)(rn.a.mark((function n(t){var i;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a(gn(t));case 3:i=n.sent,Object(dn.d)(i),i&&e(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return Object(y.jsx)(Me.a,{initialValues:{email:"buiduclong0511@gmail.com",password:"123@abc",confirmPassword:"123@abc"},onSubmit:r,validationSchema:Q,children:function(n){var t=n.values,i=n.errors,a=n.touched,r=n.handleChange,c=n.handleBlur,s=n.handleSubmit,l=n.isSubmitting;return Object(y.jsx)(ve,{onSwitchToLogin:o,values:t,errors:i,touched:a,onChange:r,onBlur:c,onSubmit:s,isSubmitting:l,onCloseModal:e})}})},Le=function(){var n=Object(j.b)();return Object(y.jsx)(we,{onClickLogout:function(){n(On())}})},Te=function(n){var e=n.blobPath;return Object(y.jsx)(Ne,{blobPath:e})},Ee=t(196),ze=(t(350),function(){var n=Object(j.c)(wn),e=Object(j.b)(),t=Object(d.useRef)(null),i=Object(d.useRef)(null);return Object(y.jsx)(Ee.a,{audioLists:n.playlist,autoPlay:n.isPlaying,quietUpdate:!0,defaultPosition:{right:100,top:100},clearPriorAudioLists:!0,showThemeSwitch:!1,theme:"dark",mode:"full",onAudioPlay:function(n){t.current||(i.current.volume=.99,t.current=i.current.volume),e(Bn(Z(n)))},getAudioInstance:function(n){i.current=n}})}),qe=function(){return Object(y.jsx)("div",{className:"grid",children:Object(y.jsx)(f.a,{children:Object(y.jsxs)("div",{className:"row no-gutters",children:[Object(y.jsx)("div",{className:"col l-2 m-3 c-0",children:Object(y.jsx)(se,{})}),Object(y.jsxs)("div",{className:"col l-10 m-9 c-12",children:[Object(y.jsx)(Be,{}),Object(y.jsx)(g.c,{children:ce.map((function(n,e){return Object(y.jsx)(g.a,{path:n.path,component:n.component,exact:!0},e)}))})]})]})})})},Ue=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(en,{}),Object(y.jsx)(qe,{}),Object(y.jsx)(ze,{})]})},Re=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,415)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))};p.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(h.a,{loading:null,persistor:Tn,children:Object(y.jsx)(j.a,{store:Ln,children:Object(y.jsx)(O.a,{theme:q,children:Object(y.jsx)(Ue,{})})})})}),document.getElementById("root")),Re()}},[[371,1,2]]]);
//# sourceMappingURL=main.064dc77c.chunk.js.map