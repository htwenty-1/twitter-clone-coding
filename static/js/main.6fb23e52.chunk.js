(this["webpackJsonptwitter-clone-coding"]=this["webpackJsonptwitter-clone-coding"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(31),s=n.n(r),i=n(8),o=n(24),u=n(6),l=n(9),j=n.n(l),b=n(16),d=n(23);n(40),n(54),n(55);d.a.initializeApp({apiKey:"AIzaSyBXVbvBCM3gR1lSUpYMz9yS6GKxBOrwkls",authDomain:"twitter-clone-coding-ab671.firebaseapp.com",projectId:"twitter-clone-coding-ab671",storageBucket:"twitter-clone-coding-ab671.appspot.com",messagingSenderId:"550684082713",appId:"1:550684082713:web:e4d235a3024c1dafa0a088"});var p=d.a,O=d.a.auth(),f=d.a.firestore(),h=d.a.storage(),x=n(1),m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],f=d[1],h=Object(a.useState)(""),m=Object(i.a)(h,2),g=m[0],v=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:y,className:"container",children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694",required:!0,value:n,onChange:w,className:"authInput"}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",required:!0,value:o,onChange:w,className:"authInput"}),Object(x.jsx)("input",{type:"submit",value:p?"\uacc4\uc815 \uc0dd\uc131\ud558\uae30":"\uae30\uc874 \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778",className:"authInput authSubmit"}),g&&Object(x.jsx)("span",{className:"authError",children:g}),Object(x.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"\uae30\uc874 \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":"\uacc4\uc815\uc744 \uc0dd\uc131\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"})]})})},g=n(12),v=n(21),w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"authContainer",children:[Object(x.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"authBtns",children:[Object(x.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Google \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778 ",Object(x.jsx)(g.a,{icon:v.b})]}),Object(x.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Github \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778 ",Object(x.jsx)(g.a,{icon:v.a})]})]})]})})},y=function(e){var t=e.refreshUser,n=e.userObj,c=Object(u.g)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=5;break}return e.next=4,O.signOut();case 4:c.push("/");case 5:case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o,photoURL:""});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uc138\uc694",value:o,autoFocus:!0,className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8",className:"formBtn",style:{marginTop:10}})]}),Object(x.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:d,children:"\ub85c\uadf8\uc544\uc6c3"})]})},N=n(34),k=n(22),S=function(e){var t=e.tweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc774 \ud2b8\uc717\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c")){e.next=6;break}return e.next=4,f.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return o((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.doc("tweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"tweet",children:s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,className:"container tweetEdit",children:[Object(x.jsx)("input",{type:"text",placeholder:"\ud2b8\uc717\uc744 \ud3b8\uc9d1\ud558\uc138\uc694",value:d,onChange:function(e){var t=e.target.value;p(t)},required:!0,autoFocus:!0}),Object(x.jsx)("input",{type:"submit",value:"\uc5c5\ub370\uc774\ud2b8 \ud558\uae30",className:"formBtn"})]}),Object(x.jsx)("button",{onClick:m,className:"formBtn cancelBtn",children:"\ub2eb\uae30"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl,alt:"upload"}),n&&Object(x.jsxs)("div",{className:"tweet__actions",children:[Object(x.jsx)("span",{onClick:O,children:Object(x.jsx)(g.a,{icon:k.d})}),Object(x.jsx)("span",{onClick:m,children:Object(x.jsx)(g.a,{icon:k.a})})]})]})})},F=n(57),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(F.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,f.collection("tweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(x.jsxs)("div",{className:"factoryInput__container",children:[Object(x.jsx)("input",{value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\ub2f9\uc2e0\uc758 \uc18c\uc911\ud55c \uc21c\uac04\uc744 \uae30\ub85d\ud558\uc138\uc694.",minLength:5,maxLength:120,className:"factoryInput__input"}),Object(x.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(x.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(x.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00\ud558\uae30"}),Object(x.jsx)(g.a,{icon:k.b})]}),Object(x.jsx)("input",{id:"attach-file",type:"file",accpet:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(x.jsxs)("div",{className:"factoryForm__attachment",children:[Object(x.jsx)("img",{src:l,style:{backgroundImage:l},alt:"upload_image"}),Object(x.jsxs)("div",{className:"factoryForm__clear",onClick:function(){d("")},children:[Object(x.jsx)("span",{children:"\uc0ad\uc81c"}),Object(x.jsx)(g.a,{icon:k.c})]})]})]})})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){f.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(I,{userObj:t}),Object(x.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(x.jsx)(S,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},_=n(33),A=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(x.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(x.jsx)("li",{children:Object(x.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(x.jsx)(g.a,{icon:_.a,color:"#04AAFF",size:"2x"}),Object(x.jsx)("span",{style:{marginTop:10},children:null!==t?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(x.jsxs)(o.a,{children:[n&&Object(x.jsx)(A,{userObj:a}),Object(x.jsx)(u.d,{children:n?Object(x.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(x.jsx)(u.b,{exact:!0,path:"/",children:Object(x.jsx)(C,{userObj:a})}),Object(x.jsx)(u.b,{exact:!0,path:"/profile",children:Object(x.jsx)(y,{userObj:a,refreshUser:t})})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.b,{exact:!0,path:"/",children:Object(x.jsx)(w,{})}),Object(x.jsx)(u.a,{from:"*",to:"/"})]})})]})};var U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(null),j=Object(i.a)(l,2),b=j[0],d=j[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){e?(u(!0),d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(d(null),u(!1)),c(!0)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[n?Object(x.jsx)(B,{refreshUser:function(){var e=O.currentUser;d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:b}):"Initializing...",Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"footer__section",children:["\xa9 ",(new Date).getFullYear()," Twitter"]})})]})};n(52);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.6fb23e52.chunk.js.map