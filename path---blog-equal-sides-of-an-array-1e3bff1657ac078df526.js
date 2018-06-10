webpackJsonp([0xb2ab4d3e5616],{1094:function(e,t){e.exports={data:{contentfulBlogPost:{title:"Equal Sides Of An Array",id:"PU9aLuiQKsqm0WgqQyAm0",tags:["general"],categories:["algorithm"],publishDate:"2018-06-03T10:26+09:00",heroImage:{sizes:{base64:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQFCAn/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEBREhAAYSBxMxQVEVIlJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQEAAgICAQUAAAAAAAAAAAABAAIDERIhUQQxQXGB/9oADAMBAAIRAxEAPwDRmo7jqsJlgxdtzZ5W2hSk99pCkEqsUquq1wM4JGf2RhgJ2yhi43ZWVJUTtWY3xWU3XIatb8vtJNs/F8HGhdAu4zHUtcrbofmSVMqqJ0BmRPb+mSXOV4zj2UgKIB9eQL+Pek1eRtJT6nFTBlceK/INd+ev36gdqVGRUqQ09Jc7jhWU8rAYx8aLxJk0saqKlFDqORCTg8TY/wBGgs+8OhKVdbdjUhfUCdzRLdOTydnyFnKlKOSu9rk49eBjTK2QjdE//9k=",aspectRatio:1.8083623693379791,src:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=320&h=177&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=519&h=287&q=50 519w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:"<p>You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.</p>\n<h3>For example:</h3>\n<h4>Let's say you are given the array [1,2,3,4,3,2,1]:</h4>\n<p>Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ([1,2,3]) and the sum of the right side of the index ([3,2,1]) both equal 6.</p>\n<h4>Let's look at another one.</h4>\n<p>You are given the array [1,100,50,-51,1,1]:\nYour function will return the index 1, because at the 1st position of the array, the sum of left side of the index ([1]) and the sum of the right side of the index ([50,-51,1,1]) both equal 1.</p>\n<h4>Last one:</h4>\n<p>You are given the array [20,10,-80,10,10,15,35]\nAt index 0 the left side is []\nThe right side is [10,-80,10,10,15,35]\nThey both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)\nIndex 0 is the place where the left side and right side are equal.</p>\n<p><b>Note</b>: Please remember that in most programming/scripting languages the index of an array starts at 0.</p>\n<h4>Input:</h4>\n<p>An integer array of length 0 &#x3C; arr &#x3C; 1000. The numbers in the array can be any integer positive or negative.</p>\n<h4>Output:</h4>\n<p>The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.</p>\n<p><b>Note</b>:\nIf you are given an array with multiple answers, return the lowest correct index.\nAn empty array should be treated like a 0 in this problem.</p>\n<p>My Answer</p>\n<pre><code>function findEvenIndex(arr) {\n  let result = -1;\n  for (let i = 1; i &#x3C; arr.length; i++) {\n    const left = arr.slice(0, i).reduce((curr, next) => curr + next, 0);\n    const right = arr.slice(i+1).reduce((curr, next) => curr + next, 0);\n    \n    if (left === right) {\n      result = i;\n    }\n  }\n  \n  return result;\n}\n</code></pre>\n<p>Best Practice</p>\n<pre><code>function findEvenIndex(arr)\n{\n  for(var i=1; i&#x3C;arr.length-1; i++) {\n    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {\n      return i;\n    }\n  }\n  return -1;\n}\n</code></pre>\n<p>반복문 안에서 조건문에 return처리를 해버리면 훨씬 깔끔했을텐데 멍청하게 그걸 이용 안하고 쓸모없는 result 변수에 할당하고, 마지막에 return하는 형식으로 구현해버렸다.\n쓸데없이 변수에 할당하는 습관을 줄여야지..</p>"}}}},pathContext:{slug:"equal-sides-of-an-array"}}}});
//# sourceMappingURL=path---blog-equal-sides-of-an-array-1e3bff1657ac078df526.js.map