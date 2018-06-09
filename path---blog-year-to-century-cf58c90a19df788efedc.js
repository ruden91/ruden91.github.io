webpackJsonp([0x814b9ab843b0],{1058:function(A,e){A.exports={data:{contentfulBlogPost:{title:"년도를 세기로 변환하기",id:"c2ixWZ6UUkYCMyss0qKmmqk",tags:["general"],categories:["algorithm"],publishDate:"2018-05-27T17:19+09:00",heroImage:{sizes:{base64:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQFCAn/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEBREhAAYSBxMxQVEVIlJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQEAAgICAQUAAAAAAAAAAAABAAIDERIhUQQxQXGB/9oADAMBAAIRAxEAPwDRmo7jqsJlgxdtzZ5W2hSk99pCkEqsUquq1wM4JGf2RhgJ2yhi43ZWVJUTtWY3xWU3XIatb8vtJNs/F8HGhdAu4zHUtcrbofmSVMqqJ0BmRPb+mSXOV4zj2UgKIB9eQL+Pek1eRtJT6nFTBlceK/INd+ev36gdqVGRUqQ09Jc7jhWU8rAYx8aLxJk0saqKlFDqORCTg8TY/wBGgs+8OhKVdbdjUhfUCdzRLdOTydnyFnKlKOSu9rk49eBjTK2QjdE//9k=",aspectRatio:1.8083623693379791,src:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=320&h=177&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=519&h=287&q=50 519w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:"<h2>Introduction</h2>\n<p>The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.</p>\n<h2>Task :</h2>\n<p>Given a year, return the century it is in.</p>\n<h2>Input , Output Examples ::</h2>\n<pre><code>centuryFromYear(1705)  returns (18)\ncenturyFromYear(1900)  returns (19)\ncenturyFromYear(1601)  returns (17)\ncenturyFromYear(2000)  returns (20)\n</code></pre>\n<h2>my answer</h2>\n<pre><code>function century(year) {\n  return Math.ceil(year / 100) > 0 ? Math.ceil(year / 100) : 1;\n}\n</code></pre>\n<h2>Best Practices</h2>\n<pre><code>const century = year => Math.ceil(year/100)\n</code></pre>"}}}},pathContext:{slug:"year-to-century"}}}});
//# sourceMappingURL=path---blog-year-to-century-cf58c90a19df788efedc.js.map