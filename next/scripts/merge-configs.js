// build time:Mon Jun 08 2020 20:04:18 GMT+0800 (GMT+08:00)
var merge=require("./merge");hexo.on("generateBefore",function(){if(hexo.locals.get){var e=hexo.locals.get("data");if(e&&e.next){if(e.next.override){hexo.theme.config=e.next}else{merge(hexo.theme.config,e.next)}}}});hexo.on("generateAfter",function(){hexo.log.warn("===============================================================");hexo.log.warn("========================= ATTENTION! ==========================");hexo.log.warn("===============================================================");hexo.log.warn(" NexT repository is moving here: https://github.com/theme-next ");hexo.log.warn("===============================================================");hexo.log.warn(" It's rebase to v6.0.0 and future maintenance will resume there");hexo.log.warn("===============================================================")});
//rebuild by neat 