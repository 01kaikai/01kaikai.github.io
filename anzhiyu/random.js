var posts=["2023/08/23/hexo命令/","2023/07/04/hello-world/","2023/07/13/vue传值/","2023/07/07/数组方法/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};