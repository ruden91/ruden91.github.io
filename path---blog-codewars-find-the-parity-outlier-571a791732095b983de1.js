webpackJsonp([0xe152e6043f88],{1026:function(e,A){e.exports={data:{contentfulBlogPost:{title:"[codewars] Find The Parity Outlier",id:"c28HVoJ37nWYKkIAuGuiKqW",tags:["general"],categories:["algorithm"],publishDate:"2018-06-03T10:44+09:00",heroImage:{sizes:{base64:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQFCAn/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEBREhAAYSBxMxQVEVIlJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQEAAgICAQUAAAAAAAAAAAABAAIDERIhUQQxQXGB/9oADAMBAAIRAxEAPwDRmo7jqsJlgxdtzZ5W2hSk99pCkEqsUquq1wM4JGf2RhgJ2yhi43ZWVJUTtWY3xWU3XIatb8vtJNs/F8HGhdAu4zHUtcrbofmSVMqqJ0BmRPb+mSXOV4zj2UgKIB9eQL+Pek1eRtJT6nFTBlceK/INd+ev36gdqVGRUqQ09Jc7jhWU8rAYx8aLxJk0saqKlFDqORCTg8TY/wBGgs+8OhKVdbdjUhfUCdzRLdOTydnyFnKlKOSu9rk49eBjTK2QjdE//9k=",aspectRatio:1.8083623693379791,src:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=320&h=177&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=519&h=287&q=50 519w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:'<p>You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.</p>\n<h3>Examples</h3>\n<pre><code>[2, 4, 0, 100, 4, 11, 2602, 36]\nShould return: 11 (the only odd number)\n\n[160, 3, 1719, 19, 11, 13, -21]\nShould return: 160 (the only even number)\n</code></pre>\n<h3>My Answer</h3>\n<pre><code>function findOutlier(integers){\n  let odd = integers.filter(i => i % 2 !== 0);\n  let even = integers.filter(i => i % 2 === 0);\n  \n  return odd.length > even.length ? even[0] : odd[0];\n}\n</code></pre>\n<h3>Best Practice</h3>\n<pre><code>function findOutlier(int){\n  var even = int.filter(a=>a%2==0);\n  var odd = int.filter(a=>a%2!==0);\n  return even.length==1? even[0] : odd[0];\n}\n</code></pre>'}}}},pathContext:{slug:"codewars-find-the-parity-outlier"}}}});
//# sourceMappingURL=path---blog-codewars-find-the-parity-outlier-571a791732095b983de1.js.map