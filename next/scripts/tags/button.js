// build time:Mon Jun 08 2020 19:39:03 GMT+0800 (GMT+08:00)
function postButton(t){t=t.join(" ").split(",");var e=t[0];var n=t[1]||"";var r=t[2]||"";var a=t[3]||"";if(!e){hexo.log.warn("URL can NOT be empty")}n=n.trim();r=r.trim();a=a.trim();var s=['<a class="btn" href="'+e+'"'];a.length>0&&s.push(' title="'+a+'"');s.push(">");r.length>0&&s.push('<i class="fa fa-'+r+'"></i>');n.length>0&&s.push(n);s.push("</a>");return s.join("")}hexo.extend.tag.register("button",postButton);hexo.extend.tag.register("btn",postButton);
//rebuild by neat 