webpackJsonp([24012116680088],{1062:function(i,n){i.exports={data:{contentfulBlogPost:{title:"DTD(Document Type Definition) - 문서 형식 정의",id:"c1eviDN9gCA0gkkc0ckKOai",tags:["static-sites"],categories:["html5"],publishDate:"2018-05-26T00:00+09:00",heroImage:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAMAAACejr5sAAAApVBMVEXxZSrxZSrxZSrxZSr0iVz2mnH3pH/3rIv3pIHxZSr0hVb0i130hFP1lGr3o3/zf03xZSn+9PD/+/r+9PD96eD2mXH1jmH1jmH2n3j96eD82sz1jF/7z7z70Lz83M782sz6zLf5vKL5up/4s5b2mHD6zLf5vaP3qYf2oX32oHz3qYf5vaP3rIz//v384dX84dX3rIzxZivzf073qYj3qYjzf07xZSrpccwjAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4gYGADA7Uz5lggAAAEZJREFUGNNjZGBkQAf/GZmwCLJAGYxg8AvCgQmyIQtCtfMygijGv59RzBQEq3yFaiZEOwM2M4kV/MeMJsiKrBKrjxix+R0AR80MZcXP2ioAAAAASUVORK5CYII=",aspectRatio:1.4891304347826086,src:"//images.ctfassets.net/hu4faubeotg0/4SRJK3JXBCsWWAC44I084O/840ec7218ffecf9f3dae1cd26476d231/html5.png?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/4SRJK3JXBCsWWAC44I084O/840ec7218ffecf9f3dae1cd26476d231/html5.png?w=274&h=184&q=50 274w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:'<ul>\n<li>doctype이 무엇을 하는지</li>\n<li>표준모드(standard mode)와 관용모드(quirks mode)의 차이</li>\n</ul>\n<p>두 가지를 정의해보고자 한다.</p>\n<h1>DTD란?</h1>\n<ul>\n<li>문서 형식 정의(DTD: Document Type Definition)는 마크업 문서의 요소와 속성등을 해석하는 기준을 명시하는 것이다.</li>\n<li>문서 형식에는 HTML5, XHTML, HTML 3가지 유형이 존재한다.</li>\n<li>이전 버전의 HTML(HTML2 ~ HTML4)은 SGML에 기반을 두어 만들어졌기 때문에 상세한 DTD 참조가 필요하며, 이 때문에 DOCTYPE을 선언하려면 공개 식별자와 시스템 식별자가 포함된 긴 문자열을 작성해야 한다.</li>\n<li>\n<p>HTMl 4.01 Strict 모드로 문서 형식을 정의할 경우</p>\n<pre><code>&#x3C;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n</code></pre>\n</li>\n</ul>\n<h1>DTD를 정의하지 않으면, 관용모드(quirks mode)로 렌더링된다.</h1>\n<ul>\n<li>DOCTYPE 선언이 존재하지 않거나 잘못 작성할 경우, 웹 브라우저는 웹문서를 관용모드로 읽는다.</li>\n<li>관용모드란 IE6 이전의 오래된 브라우저에 대응된 웹사이트의 하위 호환성을 지원하기 위해 웹 브라우저가 웹문서를 해석하는 방식이다.</li>\n<li>표준모드(standard mode)는 W3C나 IETF의 표준을 엄격히 준수하여 문서를 해석한다.</li>\n<li>관용모드는 같은 코드라도 브라우저마다 서로 다르게 해석하므로 다른 결과를 보여줄 수 있다.</li>\n</ul>\n<h1>표준모드와 관용모드의 대표적인 차이</h1>\n<ul>\n<li>\n<p>IE 박스모델 버그</p>\n<ul>\n<li>관용모드: width 계산할 때, padding과 border를 포함한다.</li>\n<li>표준모드: width 계산할 때, padding과 border를 포함하지 않는다.</li>\n</ul>\n</li>\n<li>\n<p>인라인 요소의 수직정렬</p>\n<ul>\n<li>관용모드: box의 border bottom에 맞추어 이미지를 정렬한다.</li>\n<li>표준모드: baseline에 맞추어 정렬한다.</li>\n</ul>\n</li>\n<li>\n<p>테이블 안에 font-size 상속</p>\n<ul>\n<li>관용모드: 테이블 안에서 텍스트는 기본 폰트사이즈를 상속하지 않는다.</li>\n<li>표준모드: 테이블 안에서 텍스트는 기본 폰트사이즈를 상속받는다.</li>\n</ul>\n</li>\n</ul>'}}}},pathContext:{slug:"dtd-document-type-definition"}}}});
//# sourceMappingURL=path---blog-dtd-document-type-definition-ffa799bdcc3036f2cb16.js.map