// build time:Mon Jun 08 2020 20:04:18 GMT+0800 (GMT+08:00)
var exec=require("child_process").exec;hexo.on("new",function(e){exec("open -a MacDown "+e.path)});
//rebuild by neat 