var posts=["2025/05/07/Hello-World-0/","2025/05/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };