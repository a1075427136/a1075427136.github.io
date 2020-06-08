// build time:Mon Jun 08 2020 20:04:18 GMT+0800 (GMT+08:00)
function centerQuote(e,t){return'<blockquote class="blockquote-center">'+hexo.render.renderSync({text:t,engine:"markdown"})+"</blockquote>"}hexo.extend.tag.register("centerquote",centerQuote,{ends:true});hexo.extend.tag.register("cq",centerQuote,{ends:true});
//rebuild by neat 