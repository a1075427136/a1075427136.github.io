// build time:Mon Jun 08 2020 17:06:02 GMT+0800 (GMT+08:00)
const ap=new APlayer({container:document.getElementById("aplayer"),fixed:true,autoplay:true,audio:[{name:"借口(Live)",artist:"周杰伦",url:"http://ws.stream.qqmusic.qq.com/C400002kJEux0hnCJ6.m4a?guid=632233090&vkey=CE67201A2A9ECAE4A741767E190C152CACC888672AFE06EEE23402255C352C5EED90C6495A2157B849103D2B04DBD577B86F2C22A555DB08&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M0000032ezFm3F53yO.jpg"},{name:"晴天(Live)",artist:"杨博然",url:"http://183.240.120.29/amobile.music.tc.qq.com/C400004Fs2FP1EvZYc.m4a?guid=256451898&vkey=C48BB68FC43E420ECF369BA8923D6A699A1CEFF75D2FE664BDE1A97869C66BB4C3DEC56F572DE226D2BCB5641C1CC8BD0F55699F3CC5946C&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000004fXSyj3bWTMN.jpg"},{name:"一路向北 (Live) ",artist:"周杰伦",url:"http://183.240.120.19/amobile.music.tc.qq.com/C400004c8nUE0sCRkT.m4a?guid=399791358&vkey=279488890A85CA4BAFB4322AAB68E3A1B866309B9C1548ECEC40AA5602EBC01665872EAA1D71F8F33F21B35423A2785C7FF7DB9508DDFE8D&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000004c8Md02WHHju.jpg"},{name:"一生只能唱给一个人的歌",artist:"徐彪",url:"http://ws.stream.qqmusic.qq.com/C400002hNjO60AIpp3.m4a?guid=258109293&vkey=A74A530B264F249E206D47C6DFF4DE3038867B053368DE8EFE2E94E14C9AD537E30607100D00093B4BCC41B70D859A5684FDC09846F6A06E&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003hNduI2F4vzH.jpg"},{name:"我是如此相信",artist:"周杰伦",url:"http://ws.stream.qqmusic.qq.com/C400001PLl3C4gPSCI.m4a?guid=761836732&vkey=90CFF50F39B4311B0CEDC23FB944CE13EE9C2C7704D5B0B8D8DDBB111B3EDE15ED27DBE5E289413D77E25EB5657BB0F515605D4F7020C0DF&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000001hGx1Z0so1YX.jpg"},{name:"可惜没如果 (Live)",artist:"林俊杰",url:"http://ws.stream.qqmusic.qq.com/C4000037LkcI27qvrH.m4a?guid=953519803&vkey=12B8E0829BB78496D5DBE793FC3201EAEEEE87A8D2E92BA439A0C645BF41D3E301A44D6F30163F4D5D41901D20069D161E30D049736BF74E&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000004Gi4h11RqEsB.jpg"},{name:"那些你很冒险的梦 (Live)",artist:"林俊杰",url:"http://ws.stream.qqmusic.qq.com/C400002YaeAs24w8Z7.m4a?guid=222549185&vkey=41F10EE29CD4514078745D64686E3B716B602804C5E0D1D3372A8D2C8319A9373D764EF37A6AFA67C90D84671F9D3E60DB49B9F276C2AB87&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M0000000lvgk461TtN.jpg"},{name:"那女孩对我说",artist:"黄义达",url:"http://183.240.120.28/amobile.music.tc.qq.com/C400001dXoRu43WIvM.m4a?guid=702163752&vkey=201AF4E5FD7C4601ED4CB81D4C5B2A59173DB56894625DD97BD06E9F272427D55C7B7B1C22349279A99638EF5C3B8AA83AC53691CA819B8B&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003GkHZb20mB6f.jpg"},{name:"只是太爱你",artist:"张敬轩",url:"http://ws.stream.qqmusic.qq.com/C400003Hbz6I0TAAVv.m4a?guid=861465582&vkey=822BFABC1E91B9EADF4C34D4BC5B54F9E31FD2467A3CB750D73D7C6939D3CCC0E022C73293E457EFE35B4928A7140358948AE949352734AC&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000000XX5h70p8HhJ.jpg"},{name:"空空如也",artist:"胡66",url:"http://183.240.120.27/amobile.music.tc.qq.com/C400001NczPU3NiIFC.m4a?guid=190221625&vkey=8275E676AE1D9D34930E43D66E32347E5629316BB436E635FE016EDED6ACE530CEED6BF33978BBB66233ED60FA89EF10F68BCC36E028489F&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000002TtvI007ZBG3.jpg"},{name:"春娇与志明",artist:"街道办GDC,欧阳耀莹",url:"http://183.240.120.22/amobile.music.tc.qq.com/C400003K4R1k1UFHot.m4a?guid=617748706&vkey=99BD55F93A4E38FF9C24DE49CF55382C8C159E4A1DA599EFD8157DABF1D7D18CE4B274DABC5B1BF6833EEE6B681C6FAC209C3D2DAC7B8053&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000000lrXyA0MlEEo.jpg"},{name:"世界这么大还是遇见你",artist:"程响",url:"http://isure.stream.qqmusic.qq.com/C400001xLIXo2w9V7U.m4a?guid=757151435&vkey=CF2FBE69918317C7FBD06E932AF7EFB45B1B4362093D5CA3C4D5B257F2FDA32476EF5C6EC8ADA0CD512483E339D1DB77D1DA557816375287&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH.jpg"},{name:"告白气球 (Live)",artist:"周杰伦",url:"http://183.240.120.28/amobile.music.tc.qq.com/C400002t78Qs1Av9Kn.m4a?guid=238508294&vkey=37AEB01EEA354D06D2209195391C88344969B4A3DB4BCC05B69F38100F21D272FC8167CAE5366EBAC69EC82774CC3714B1386885A3D157E2&uin=0&fromtag=66",cover:"http://y.gtimg.cn/music/photo_new/T002R300x300M000004fXSyj3bWTMN.jpg"}]});
//rebuild by neat 