(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,f,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},f=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);try{f=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),l(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(d){s=!0,console.error("WS error in setup",t,d)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,l(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[f]&&r.removeSignatureListener(f),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,f,b,l,d,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),f={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,l=b.data.itemsAvailable.toNumber(),d=b.itemsRedeemed.toNumber(),p=l-d,m=b.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:f,itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,d,x,O,g;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,b=t.connection,d=t.program,e.next=7,m(s.publicKey);case 7:return x=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return g=e.sent,e.next=16,d.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:x,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:g,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),l(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),f=n.n(u),b=(n(353),n(354),n(12)),l=n(1),d=n.n(l),p=n(4),m=n(13),j=n(132),x=n(134),O=n(313),g=n(596),y=n(601),v=n(605),h=n(604),w=n(15),S=n(52),k=n(175),P=n(133),K=n(31),R=Object(x.a)(k.a)(r||(r=Object(j.a)([""]))),T=x.a.span(c||(c=Object(j.a)([""]))),M=x.a.div(a||(a=Object(j.a)([""]))),B=Object(x.a)(g.a)(i||(i=Object(j.a)([""]))),L=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(K.jsxs)(T,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},A=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(o.useState)(!1),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),f=Object(m.a)(u,2),l=f[0],j=f[1],x=Object(o.useState)(!1),g=Object(m.a)(x,2),k=g[0],T=g[1],A=Object(o.useState)(0),C=Object(m.a)(A,2),I=C[0],D=C[1],E=Object(o.useState)(0),W=Object(m.a)(E,2),N=W[0],_=W[1],U=Object(o.useState)(0),Y=Object(m.a)(U,2),F=(Y[0],Y[1]),Z=Object(o.useState)({open:!1,message:"",severity:void 0}),q=Object(m.a)(Z,2),H=q[0],J=q[1],V=Object(o.useState)(new Date(e.startDate)),G=Object(m.a)(V,2),z=G[0],Q=G[1],X=Object(S.c)(),$=Object(o.useState)(),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(d.a.mark((function t(){var n,r,c,a,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(X){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(X,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,D(a),F(i),_(o),j(0===i),Q(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(d.a.mark((function t(){var n,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,T(!0),!X||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(P.c)(te,e.config,X.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?J({open:!0,message:"Mint failed! Please try again!",severity:"error"}):J({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),J({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!X){t.next=23;break}return t.next=21,e.connection.getBalance(X.publicKey);case 21:i=t.sent,r(i/w.LAMPORTS_PER_SOL);case 23:return T(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!X){t.next=5;break}return t.next=3,e.connection.getBalance(X.publicKey);case 3:n=t.sent,r(n/w.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[X,e.connection]),Object(o.useEffect)(re,[X,e.candyMachineId,e.connection]),Object(K.jsxs)("main",{style:{display:"flex",height:"100vh"},children:[Object(K.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[X&&Object(K.jsxs)("p",{children:["Wallet ",Object(P.d)(X.publicKey.toBase58()||"")]}),Object(K.jsxs)(R,{children:[" ",X?"Connected":"Connect Wallet"," "]})]}),Object(K.jsxs)("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(K.jsx)(M,{children:Object(K.jsx)(B,{disabled:l||k||!i,onClick:ce,variant:"contained",children:l?"SOLD OUT":i?k?Object(K.jsx)(y.a,{}):"MINT":Object(K.jsx)(O.a,{date:z,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:L})})}),Object(K.jsx)("div",{children:X&&Object(K.jsxs)("p",{children:["Supply: ",N,"/",I," "]})})]}),Object(K.jsx)(v.a,{open:H.open,autoHideDuration:6e3,onClose:function(){return J(Object(b.a)(Object(b.a)({},H),{},{open:!1}))},children:Object(K.jsx)(h.a,{onClose:function(){return J(Object(b.a)(Object(b.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})},C=n(32),I=n(116),D=n(340),E=n(602),W=new C.d.PublicKey("5EgUHFviLva7imb61Wys83SKAaD36chbxf5knhiZ1NB1"),N=new C.d.PublicKey("2Ucwtj2Bjnx4SLFfXFewJxLCTZeYaVvPFbvpmAH3NGne"),_=new C.d.PublicKey("4Zvbi6CCfWDerbwbDB6Ycfc8bZeTysLQrzYx8WMJquxT"),U="mainnet-beta",Y=new C.d.Connection("https://explorer-api.mainnet-beta.solana.com"),F=parseInt("1636848720",10),Z=Object(D.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),q=function(){var e=Object(o.useMemo)((function(){return Object(w.clusterApiUrl)(U)}),[]),t=Object(o.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:U}),Object(I.d)({network:U})]}),[]);return Object(K.jsx)(E.a,{theme:Z,children:Object(K.jsx)(S.a,{endpoint:e,children:Object(K.jsx)(S.b,{wallets:t,autoConnect:!0,children:Object(K.jsx)(k.b,{children:Object(K.jsx)(A,{candyMachineId:_,config:N,connection:Y,startDate:F,treasury:W,txTimeout:3e4})})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};f.a.render(Object(K.jsx)(s.a.StrictMode,{children:Object(K.jsx)(q,{})}),document.getElementById("root")),H()}},[[569,1,2]]]);
//# sourceMappingURL=main.1c6fdfb4.chunk.js.map