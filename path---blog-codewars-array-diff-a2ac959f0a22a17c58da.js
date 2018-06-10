webpackJsonp([0x812be5f1a96c],{1089:function(A,e){A.exports={data:{contentfulBlogPost:{title:"[codewars] Array.diff",id:"c5YjeZauJaM64IK6uYQ6IKi",tags:["general"],categories:["algorithm"],publishDate:"2018-06-02T00:00+09:00",heroImage:{sizes:{base64:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQFCAn/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEBREhAAYSBxMxQVEVIlJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQEAAgICAQUAAAAAAAAAAAABAAIDERIhUQQxQXGB/9oADAMBAAIRAxEAPwDRmo7jqsJlgxdtzZ5W2hSk99pCkEqsUquq1wM4JGf2RhgJ2yhi43ZWVJUTtWY3xWU3XIatb8vtJNs/F8HGhdAu4zHUtcrbofmSVMqqJ0BmRPb+mSXOV4zj2UgKIB9eQL+Pek1eRtJT6nFTBlceK/INd+ev36gdqVGRUqQ09Jc7jhWU8rAYx8aLxJk0saqKlFDqORCTg8TY/wBGgs+8OhKVdbdjUhfUCdzRLdOTydnyFnKlKOSu9rk49eBjTK2QjdE//9k=",aspectRatio:1.8083623693379791,src:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=320&h=177&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=519&h=287&q=50 519w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:"<p>Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.</p>\n<p>It should remove all values from list a, which are present in list b.</p>\n<pre><code>array_diff([1,2],[1]) == [2]\n</code></pre>\n<p>If a value is present in b, all of its occurrences must be removed from the other:</p>\n<pre><code>array_diff([1,2,2,2,3],[2]) == [1,3]\n</code></pre>\n<p>my answer</p>\n<pre><code>const array_diff = (a, b) => a.filter(x => b.indexOf(x) === -1 );\n</code></pre>\n<p>best practice</p>\n<pre><code>function array_diff(a, b) {\n  return a.filter(e => !b.includes(e));\n}\n</code></pre>"}}}},pathContext:{slug:"codewars-array-diff"}}}});
//# sourceMappingURL=path---blog-codewars-array-diff-a2ac959f0a22a17c58da.js.map