// build time:Mon Jun 08 2020 19:39:03 GMT+0800 (GMT+08:00)
function bscallOut(e,n){return'<div class="note '+e.join(" ")+'">'+hexo.render.renderSync({text:n,engine:"markdown"}).trim()+"</div>"}hexo.extend.tag.register("note",bscallOut,{ends:true});
//rebuild by neat 