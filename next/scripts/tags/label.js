// build time:Mon Jun 08 2020 19:39:03 GMT+0800 (GMT+08:00)
function postLabel(e){e=e.join(" ").split("@");var a=e[0]||"default";var t=e[1]||"";a=a.trim();!t&&hexo.log.warn("Label text must be defined!");return'<span class="label '+a+'">'+t+"</span>"}hexo.extend.tag.register("label",postLabel,{ends:false});
//rebuild by neat 