webpackJsonp([35783957827783],{85:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(9),r=l(n),u=a(11),i=l(u),d=a(10),o=l(d),c=a(1),f=l(c),s=a(49),m=l(s),p=a(50),E=l(p),g=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,o.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,l=e.postSEO,n=void 0,r=void 0,u=void 0,i=void 0;l?(r=t.title,n=t.title,u="https:"+t.heroImage.file.url,i=E.default.siteUrl+E.default.pathPrefix+a):(n=E.default.siteTitle,r=E.default.siteDescription,u=E.default.siteLogo);var d=("/"===E.default.pathPrefix?"":E.default.pathPrefix,E.default.siteUrl+E.default.pathPrefix),o=[{"@context":"https://ruden91.github.io","@type":"WebSite",url:d,name:n,alternateName:E.default.siteTitleAlt?E.default.siteTitleAlt:""}];return l&&o.push([{"@context":"https://ruden91.github.io","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:n,image:u}}]},{"@context":"https://ruden91.github.io","@type":"BlogPosting",url:d,name:n,alternateName:E.default.siteTitleAlt?E.default.siteTitleAlt:"",headline:n,image:{"@type":"ImageObject",url:u},description:r}]),f.default.createElement(m.default,null,f.default.createElement("meta",{name:"description",content:r}),f.default.createElement("meta",{name:"image",content:u}),f.default.createElement("script",{type:"application/ld+json"},JSON.stringify(o)),f.default.createElement("meta",{property:"og:url",content:l?i:d}),l?f.default.createElement("meta",{property:"og:type",content:"article"}):null,f.default.createElement("meta",{property:"og:title",content:n}),f.default.createElement("meta",{property:"og:description",content:r}),f.default.createElement("meta",{property:"og:image",content:u}),f.default.createElement("meta",{property:"fb:app_id",content:E.default.siteFBAppID?E.default.siteFBAppID:""}),f.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f.default.createElement("meta",{name:"twitter:creator",content:E.default.userTwitter?E.default.userTwitter:""}),f.default.createElement("meta",{name:"twitter:title",content:n}),f.default.createElement("meta",{name:"twitter:description",content:r}),f.default.createElement("meta",{name:"twitter:image",content:u}))},t}(c.Component);t.default=g,e.exports=t.default},161:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),u=a(186),i=l(u),d=a(30),o=l(d);t.default=function(e){var t=e.article;return r.default.createElement("div",{className:i.default.preview},r.default.createElement(o.default,{to:"/blog/"+t.slug},r.default.createElement("span",{className:"image-wrap"},r.default.createElement("img",{src:t.heroImage.file.url+"?fit=scale&w=350&h=196",alt:""})),r.default.createElement("div",null,r.default.createElement("h3",{className:i.default.previewTitle},t.title),r.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),r.default.createElement("footer",null,r.default.createElement("p",null,"BY ",r.default.createElement("strong",null,"RUDEN")),r.default.createElement("small",null,t.publishDate)))))},e.exports=t.default},186:function(e,t){e.exports={previewTitle:"src-components----article-preview-module---previewTitle---16pYm",tag:"src-components----article-preview-module---tag---27JAs"}},1055:function(e,t){},460:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(9),r=l(n),u=a(11),i=l(u),d=a(10),o=l(d),c=a(1),f=l(c),s=a(30),m=(l(s),a(60)),p=l(m),E=a(49),g=l(E),h=a(85),v=l(h),y=a(50),w=l(y);a(1055);var _=a(161),T=l(_),x=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,o.default)(t,e),t.prototype.render=function(){var e=(this.props.transition,(0,p.default)(this,"props.data.allContentfulBlogPost.edges"));return console.log(e),f.default.createElement("section",{className:"container"},f.default.createElement(g.default,null,f.default.createElement("title",null,w.default.siteTitle),f.default.createElement("link",{rel:"canonical",href:""+w.default.siteUrl})),f.default.createElement(v.default,{postEdges:e}),f.default.createElement("div",null,f.default.createElement("ul",{className:"article-list"},e.map(function(e){var t=e.node;return f.default.createElement("li",{key:t.id,className:"col-3"},f.default.createElement(T.default,{article:t}))}))))},t}(f.default.Component);t.default=x;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-6cc37a2c1cba938720a8.js.map