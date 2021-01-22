(this["webpackJsonpfootball-webapp"]=this["webpackJsonpfootball-webapp"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a(0),i=a.n(r),c=a(28),n=a.n(c),o=(a(81),a(18)),l=a(19),u=a(21),d=a(20),h=a(72),p=a(9),g=a(26),b=a(121),j=a(123),m=a(67),f=a.n(m),O=a(68),x=a.n(O),v=a(69),S=a.n(v),y=a(70),N=a.n(y),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={selected:""},s.handleChange=s.handleChange.bind(Object(g.a)(s)),s}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({selected:e}),window.location.href="#/".concat(e)}},{key:"render",value:function(){var e=this,t=this.state.selected,a={borderTop:"2px solid teal"};return Object(s.jsxs)(b.a,{className:"navbar",style:{overflow:"hidden",position:"fixed",bottom:"0"},children:[Object(s.jsx)(j.a,{onClick:function(t){return e.handleChange("")},icon:Object(s.jsx)(f.a,{}),style:""===t?a:null}),Object(s.jsx)(j.a,{onClick:function(t){return e.handleChange("explore")},icon:Object(s.jsx)(x.a,{}),style:"explore"===t?a:null}),Object(s.jsx)(j.a,{onClick:function(t){return e.handleChange("news")},icon:Object(s.jsx)(S.a,{}),style:"news"===t?a:null}),Object(s.jsx)(j.a,{onClick:function(t){return e.handleChange("settings")},icon:Object(s.jsx)(N.a,{}),style:"settings"===t?a:null})]})}}]),a}(r.Component),k=a(71),L=a.n(k).a.create({baseURL:"https://api-football-v1.p.rapidapi.com/v2",headers:{"x-rapidapi-key":"4a1027fbf3msh3c00f81a0e06e7cp1e691ejsna31c05f325b5","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}}),T=a(136),w=a(129),M=a(130),C=a(131),D=a(45),B=a.n(D),E=a(133),A=a(124),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.changeDate,t=new Date,a=new Date(t);a.setDate(t.getDate()-1);var r=a.toJSON().slice(0,10).replace(/-/g,"-"),i=t.toJSON().slice(0,10).replace(/-/g,"-"),c=new Date(t);c.setDate(t.getDate()+1);var n=c.toJSON().slice(0,10).replace(/-/g,"-");return Object(s.jsxs)(E.a,{indicatorColor:"primary",textColor:"primary",variant:"fullWidth",className:"day-tab",style:{marginTop:"3.5rem"},children:[Object(s.jsx)(A.a,{label:"Yesterday",onClick:function(){return e("".concat(r))}}),Object(s.jsx)(A.a,{label:"Today",onClick:function(){return e("".concat(i))}}),Object(s.jsx)(A.a,{label:"Tomorrow",onClick:function(){return e("".concat(n))}})]})}}]),a}(r.Component),I=[{league_name:"Premier League",league_id:2790,flag:"https://media.api-sports.io/flags/gb.svg",logo:"https://media.api-sports.io/football/leagues/39.png",fixtures:[]},{league_name:"Primera Division",league_id:2833,flag:"https://media.api-sports.io/flags/es.svg",logo:"https://media.api-sports.io/football/leagues/140.png",fixtures:[]},{league_name:"Bundesliga",league_id:2755,flag:"https://media.api-sports.io/flags/de.svg",logo:"https://media.api-sports.io/football/leagues/78.png",fixtures:[]},{league_name:"Serie A",league_id:2857,flag:"https://media.api-sports.io/flags/it.svg",logo:"https://media.api-sports.io/football/leagues/135.png",fixtures:[]},{league_name:"Primeira Liga",league_id:2826,flag:"https://media.api-sports.io/flags/pt.svg",logo:"https://media.api-sports.io/football/leagues/94.png",fixtures:[]},{league_name:"Ligue 1",league_id:2664,flag:"https://media.api-sports.io/flags/fr.svg",logo:"https://media.api-sports.io/football/leagues/61.png",fixtures:[]},{league_name:"Eredivisie",league_id:2673,flag:"https://media.api-sports.io/flags/nl.svg",logo:"https://media.api-sports.io/football/leagues/88.png",fixtures:[]},{league_name:"FA Cup",league_id:2791,flag:"https://media.api-sports.io/flags/gb.svg",logo:"https://media.api-sports.io/football/leagues/45.png",fixtures:[]},{league_name:"Championship",league_id:2794,flag:"https://media.api-sports.io/flags/gb.svg",logo:"https://media.api-sports.io/football/leagues/40.png",fixtures:[]}],F=a(132),K=a(125),P=a(126),U=a(127),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.fixtures;return I.forEach((function(t){var a=e.filter((function(e){return e.league_id===t.league_id}));t.fixtures=a})),Object(s.jsxs)("div",{className:"fixtures",children:[I.map((function(e){return e.fixtures[0]?Object(s.jsxs)(F.a,{className:"league-group",children:[Object(s.jsx)(F.a.Item,{style:{paddingTop:"0.3rem"},children:Object(s.jsxs)(K.a,{className:"league-title",children:[Object(s.jsx)("img",{style:{height:"1rem"},src:e.logo,alt:"league logo"}),Object(s.jsxs)("p",{children:[" - ",e.league_name]})]})}),e.fixtures.map((function(e){return Object(s.jsx)(F.a.Item,{children:Object(s.jsxs)(K.a,{children:[Object(s.jsx)(P.a,{className:"col-1",children:"FT"===e.statusShort?Object(s.jsx)(U.a,{className:"status-ft",children:"FT"}):"NS"===e.statusShort?Object(s.jsx)(U.a,{}):Object(s.jsx)(U.a,{className:"status-on blink",children:e.elapsed})}),Object(s.jsxs)(P.a,{className:"text-center col-4",children:[Object(s.jsx)("p",{children:e.homeTeam.team_name}),Object(s.jsx)("img",{src:e.homeTeam.logo,alt:"home team logo"})]}),Object(s.jsx)(P.a,{className:"col-2",children:Object(s.jsx)("p",{className:"score",children:null!=e.goalsHomeTeam?"".concat(e.goalsHomeTeam," : ").concat(e.goalsAwayTeam):"".concat(e.event_date.slice(11,16))})}),Object(s.jsxs)(P.a,{className:"text-center col-4",children:[Object(s.jsx)("p",{children:e.awayTeam.team_name}),Object(s.jsx)("img",{src:e.awayTeam.logo,alt:"away team logo"})]}),Object(s.jsx)(P.a,{className:"col-1"})]})})}))]}):null})),Object(s.jsx)(F.a.Item,{style:{marginBottom:"2rem"},children:Object(s.jsxs)(K.a,{children:[Object(s.jsx)(P.a,{className:"col-1"}),Object(s.jsx)(P.a,{className:"text-center col-4"}),Object(s.jsx)(P.a,{className:"col-2"}),Object(s.jsx)(P.a,{className:"text-center col-4"}),Object(s.jsx)(P.a,{className:"col-1"})]})})]})}}]),a}(r.Component),J=a(128),X=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"loading-div",children:Object(s.jsx)(J.a,{variant:"dark",animation:"border",size:"md",className:"spinner"})})})},H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var s;Object(o.a)(this,a),s=t.call(this,e);var r=(new Date).toISOString().slice(0,10);return s.state={fixtures:[],currentDate:"".concat(r),loaded:!1},s.getRequest=s.getRequest.bind(Object(g.a)(s)),s.changeDate=s.changeDate.bind(Object(g.a)(s)),s}return Object(l.a)(a,[{key:"getRequest",value:function(e){var t=this;this.setState({loaded:!1}),L.get("/fixtures/date/".concat(e)).then((function(e){var a=e.data;t.setState({fixtures:a.api.fixtures,loaded:!0})}))}},{key:"changeDate",value:function(e){this.getRequest(e)}},{key:"componentDidMount",value:function(){this.getRequest(this.state.currentDate)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)(T.a,{position:"static",className:"appbar",children:Object(s.jsxs)(w.a,{children:[Object(s.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(C.a,{variant:"h6",children:"Matches"})]})}),Object(s.jsx)(_,{changeDate:this.changeDate}),this.state.loaded?Object(s.jsx)(G,{fixtures:this.state.fixtures}):Object(s.jsx)(X,{})]})}}]),a}(r.Component),V=a(134),Z=a(135),Y=[{source:{id:"reuters",name:"Reuters"},author:"Reuters Staff",title:"Soccer-Diego Costa rescinds contract with Atletico - club statement - Reuters UK",description:"Atletico Madrid have agreed to rescind striker Diego Costa's contract, the La Liga leaders said on Tuesday.",url:"https://in.reuters.com/article/uk-soccer-spain-atm-get-preview-idUKKBN293128",urlToImage:"https://static.reuters.com/resources/r/?m=02&d=20201229&t=2&i=1546046817&r=LYNXMPEGBS0JX&w=800",publishedAt:"2020-12-29T12:19:00Z",content:"By Reuters Staff\r\nFILE PHOTO: Soccer Football - La Liga Santander - Atletico Madrid v Granada - Wanda Metropolitano, Madrid, Spain - September 27, 2020. Atletico Madrid's Diego Costa celebrates scori\u2026 [+391 chars]"},{source:{id:"reuters",name:"Reuters"},author:"Reuters Staff",title:"La Liga talking points - Reuters UK",description:"Talking points from the weekend in Spanish football.",url:"https://www.reuters.com/article/uk-soccer-spain-idUKKBN29902N",urlToImage:"https://static.reuters.com/resources/r/?m=02&d=20210104&t=2&i=1546488435&r=LYNXMPEH0300X&w=800",publishedAt:"2021-01-04T01:01:00Z",content:"By Reuters Staff\r\nMADRID (Reuters) - Talking points from the weekend in Spanish football.\r\nFILE PHOTO: Soccer Football - La Liga Santander - Real Madrid v Celta Vigo - Estadio Alfredo Di Stefano, Mad\u2026 [+2532 chars]"},{source:{id:"reuters",name:"Reuters"},author:"Reuters Staff",title:"Athletic Bilbao sack coach Garitano hours after beating Elche - Reuters India",description:"La Liga side Athletic Bilbao said on Sunday that they have sacked coach Gaizka Garitano, only hours after their 1-0 victory at home over Elche.",url:"https://in.reuters.com/article/soccer-spain-atb-garitano-idINKBN2980HV",urlToImage:"https://static.reuters.com/resources/r/?m=02&d=20210103&t=2&i=1546468980&r=LYNXMPEH0209B&w=800",publishedAt:"2021-01-03T17:21:00Z",content:"By Reuters Staff\r\nSoccer Football - La Liga Santander - Real Madrid v Athletic Bilbao - Estadio Alfredo Di Stefano, Madrid, Spain - December 15, 2020 Athletic Bilbao coach Gaizka Garitano REUTERS/Ser\u2026 [+497 chars]"},{source:{id:"reuters",name:"Reuters"},author:"Reuters Staff",title:"Messi breaks Pele's record goal haul by scoring 644th for Barca - Reuters UK",description:"Lionel Messi became the all-time top scorer for a single soccer club on Tuesday after scoring his 644th goal for Barcelona during their La Liga match against Real Valladolid, surpassing Pele's record goal haul for Brazilian side Santos.",url:"https://uk.reuters.com/article/uk-soccer-spain-rev-fcb-idUKKBN28W2OF",urlToImage:"https://static.reuters.com/resources/r/?m=02&d=20201222&t=2&i=1545491546&r=LYNXMPEGBL1JZ&w=800",publishedAt:"2020-12-22T22:40:00Z",content:"By Reuters Staff\r\nSoccer Football - La Liga Santander - Real Valladolid v FC Barcelona - Estadio Jose Zorrilla, Valladolid, Spain - December 22, 2020 Barcelona's Lionel Messi celebrates scoring their\u2026 [+505 chars]"},{source:{id:"reuters",name:"Reuters"},author:"Reuters Staff",title:"Soccer-Costa misses Atletico training, considering future - Reuters UK",description:"Atletico Madrid striker Diego Costa missed training on Monday because he is considering his future with the La Liga leaders, a club source said.",url:"https://uk.reuters.com/article/uk-soccer-spain-atm-costa-idUKKBN2921EV",urlToImage:"https://static.reuters.com/resources/r/?m=02&d=20201228&t=2&i=1545972105&r=LYNXMPEGBR0OX&w=800",publishedAt:"2020-12-28T15:43:00Z",content:"By Reuters Staff\r\nFILE PHOTO: Soccer Football - La Liga Santander - Atletico Madrid v Elche - Wanda Metropolitano, Madrid, Spain - December 19, 2020 Atletico Madrid's Diego Costa celebrates scoring t\u2026 [+1094 chars]"},{source:{id:"reuters",name:"Reuters"},author:"Reuters Staff",title:"Soccer-Real Madrid frustrated by Elche to leave Atleti clear at top - Reuters UK",description:"Real Madrid were held to a disappointing 1-1 draw at struggling Elche on Wednesday, losing ground in the La Liga title race to leaders Atletico Madrid.",url:"https://uk.reuters.com/article/uk-soccer-spain-elc-mad-report-idUKKBN2942EI",urlToImage:"https://static.reuters.com/resources/r/?m=02&d=20201230&t=2&i=1546212667&r=LYNXMPEGBT1DK&w=800",publishedAt:"2020-12-30T22:30:00Z",content:"By Reuters Staff\r\nSoccer Football - La Liga Santander - Elche v Real Madrid - Estadio Manuel Martinez Valero, Elche, Spain - December 30, 2020 Real Madrid's Karim Benzema shoots at goal REUTERS/Juan \u2026 [+815 chars]"}],z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"news",children:[Object(s.jsx)(T.a,{position:"static",className:"appbar",children:Object(s.jsxs)(w.a,{children:[Object(s.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(C.a,{variant:"h6",children:"News"})]})}),Object(s.jsx)("div",{className:"articles",children:Y.map((function(e){return Object(s.jsxs)(V.a,{className:"card",children:[Object(s.jsx)(V.a.Img,{variant:"top",src:e.urlToImage}),Object(s.jsxs)(V.a.Body,{children:[Object(s.jsx)(V.a.Title,{children:e.title}),Object(s.jsx)(V.a.Text,{children:e.description}),Object(s.jsx)(Z.a,{variant:"primary",children:"See More"})]})]})}))})]})}}]),a}(r.Component),W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(h.a,{basename:"/",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(R,{}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{exact:!0,path:"/",children:Object(s.jsx)(H,{})}),Object(s.jsx)(p.a,{exact:!0,path:"/news",children:Object(s.jsx)(z,{})})]})]})})}}]),a}(r.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,138)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),i(e),c(e)}))},Q=window.innerWidth;n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Q<700?Object(s.jsx)(W,{}):Object(s.jsx)("h1",{className:"text-center",children:"This App Is Currently Only Adapted For Mobile View"})}),document.getElementById("root")),q()},81:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.9b836d77.chunk.js.map