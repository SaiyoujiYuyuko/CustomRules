//https://github.com/yyhhyyyyyy/selfproxy/blob/main/Mihomo/Extension_Script/script.js
// Mihomo Party 覆写 / Clash Verge Rev 扩展脚本

function main(params) {
  if (!params.proxies) return params;
  overwriteBasicOptions(params);
  overwriteDns(params);
  overwriteFakeIpFilter(params);
  overwriteNameserverPolicy(params);
  overwriteHosts(params);
  overwriteTunnel(params);
  overwriteProxyGroups(params);
  overwriteRules(params);
  return params;
}

// 覆写Basic Options
function overwriteBasicOptions(params) {
  const otherOptions = {
    "mixed-port": 7897,
    "allow-lan": true,
    mode: "rule",
    "log-level": "warning",
    ipv6: false,
    "find-process-mode": "strict",
    profile: {
      "store-selected": true,
      "store-fake-ip": true,
    },
    "unified-delay": true,
    "tcp-concurrent": true,
    "global-client-fingerprint": "chrome",
    sniffer: {
      enable: true,
      sniff: {
        HTTP: {
          ports: [80, "8080-8880"],
          "override-destination": true,
        },
        TLS: {
          ports: [443, 8443],
        },
        QUIC: {
          ports: [443, 8443],
        },
      },
      "skip-domain": ["Mijia Cloud", "+.push.apple.com"]
    },
  };
  Object.keys(otherOptions).forEach((key) => {
    params[key] = otherOptions[key];
  });
}

// 覆写DNS
function overwriteDns(params) {
  const dnsList = [
    "https://223.5.5.5/dns-query",
    "https://doh.pub/dns-query",
  ];

  const proxyDnsList = [
    "https://223.5.5.5/dns-query",
    "https://doh.pub/dns-query",
  ];

  const dnsOptions = {
    enable: true,
    "prefer-h3": true,
    ipv6: false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "respect-rules": true,
    nameserver: dnsList,
    "proxy-server-nameserver": proxyDnsList,
  };
  params.dns = { ...dnsOptions };
}

// 覆写DNS.Fake IP Filter
function overwriteFakeIpFilter(params) {
  const fakeIpFilter = [
    "+.+m2m",
    "+.$injections.adguard.org",
    "+.$local.adguard.org",
    "+.+bogon",
    "+.+lan",
    "+.+localdomain",
    "+.home.arpa",
    "dns.msftncsi.com",
    "*.srv.nintendo.net",
    "*.stun.playstation.net",
    "xbox.*.microsoft.com",
    "*.xboxlive.com",
    "*.turn.twilio.com",
    "*.stun.twilio.com",
    "stun.syncthing.net",
    "stun.*",
    "*.sslip.io",
    "*.nip.io"
  ];
  params.dns["fake-ip-filter"] = fakeIpFilter;
}

// 覆写DNS.Nameserver Policy
function overwriteNameserverPolicy(params) {
  const nameserverPolicy = {
    "dns.alidns.com": "quic://223.5.5.5:853",
    "doh.pub": "https://1.12.12.12/dns-query",
    "doh.360.cn": "101.198.198.198",
    "+.uc.cn": "quic://dns.alidns.com:853",
    "+.alibaba.com": "quic://dns.alidns.com:853",
    "*.alicdn.com": "quic://dns.alidns.com:853",
    "*.ialicdn.com": "quic://dns.alidns.com:853",
    "*.myalicdn.com": "quic://dns.alidns.com:853",
    "*.alidns.com": "quic://dns.alidns.com:853",
    "*.aliimg.com": "quic://dns.alidns.com:853",
    "+.aliyun.com": "quic://dns.alidns.com:853",
    "*.aliyuncs.com": "quic://dns.alidns.com:853",
    "*.alikunlun.com": "quic://dns.alidns.com:853",
    "*.alikunlun.net": "quic://dns.alidns.com:853",
    "*.cdngslb.com": "quic://dns.alidns.com:853",
    "+.alipay.com": "quic://dns.alidns.com:853",
    "+.alipay.cn": "quic://dns.alidns.com:853",
    "+.alipay.com.cn": "quic://dns.alidns.com:853",
    "*.alipayobjects.com": "quic://dns.alidns.com:853",
    "+.alibaba-inc.com": "quic://dns.alidns.com:853",
    "*.alibabausercontent.com": "quic://dns.alidns.com:853",
    "*.alibabadns.com": "quic://dns.alidns.com:853",
    "+.alibabachengdun.com": "quic://dns.alidns.com:853",
    "+.alicloudccp.com": "quic://dns.alidns.com:853",
    "+.alipan.com": "quic://dns.alidns.com:853",
    "+.aliyundrive.com": "quic://dns.alidns.com:853",
    "+.aliyundrive.net": "quic://dns.alidns.com:853",
    "+.cainiao.com": "quic://dns.alidns.com:853",
    "+.cainiao.com.cn": "quic://dns.alidns.com:853",
    "+.cainiaoyizhan.com": "quic://dns.alidns.com:853",
    "+.guoguo-app.com": "quic://dns.alidns.com:853",
    "+.etao.com": "quic://dns.alidns.com:853",
    "+.yitao.com": "quic://dns.alidns.com:853",
    "+.1688.com": "quic://dns.alidns.com:853",
    "+.amap.com": "quic://dns.alidns.com:853",
    "+.gaode.com": "quic://dns.alidns.com:853",
    "+.autonavi.com": "quic://dns.alidns.com:853",
    "+.dingtalk.com": "quic://dns.alidns.com:853",
    "+.mxhichina.com": "quic://dns.alidns.com:853",
    "+.soku.com": "quic://dns.alidns.com:853",
    "+.tb.cn": "quic://dns.alidns.com:853",
    "+.taobao.com": "quic://dns.alidns.com:853",
    "*.taobaocdn.com": "quic://dns.alidns.com:853",
    "*.tbcache.com": "quic://dns.alidns.com:853",
    "+.tmall.com": "quic://dns.alidns.com:853",
    "+.goofish.com": "quic://dns.alidns.com:853",
    "+.xiami.com": "quic://dns.alidns.com:853",
    "+.xiami.net": "quic://dns.alidns.com:853",
    "*.ykimg.com": "quic://dns.alidns.com:853",
    "+.youku.com": "quic://dns.alidns.com:853",
    "+.tudou.com": "quic://dns.alidns.com:853",
    "*.cibntv.net": "quic://dns.alidns.com:853",
    "+.ele.me": "quic://dns.alidns.com:853",
    "*.elemecdn.com": "quic://dns.alidns.com:853",
    "+.feizhu.com": "quic://dns.alidns.com:853",
    "+.taopiaopiao.com": "quic://dns.alidns.com:853",
    "+.fliggy.com": "quic://dns.alidns.com:853",
    "+.koubei.com": "quic://dns.alidns.com:853",
    "+.mybank.cn": "quic://dns.alidns.com:853",
    "+.mmstat.com": "quic://dns.alidns.com:853",
    "+.uczzd.cn": "quic://dns.alidns.com:853",
    "+.iconfont.cn": "quic://dns.alidns.com:853",
    "+.freshhema.com": "quic://dns.alidns.com:853",
    "+.hemamax.com": "quic://dns.alidns.com:853",
    "+.hemaos.com": "quic://dns.alidns.com:853",
    "+.hemashare.cn": "quic://dns.alidns.com:853",
    "+.shyhhema.com": "quic://dns.alidns.com:853",
    "+.sm.cn": "quic://dns.alidns.com:853",
    "+.npmmirror.com": "quic://dns.alidns.com:853",
    "+.alios.cn": "quic://dns.alidns.com:853",
    "+.wandoujia.com": "quic://dns.alidns.com:853",
    "+.aligames.com": "quic://dns.alidns.com:853",
    "+.25pp.com": "quic://dns.alidns.com:853",
    "*.aliapp.org": "quic://dns.alidns.com:853",
    "+.tanx.com": "quic://dns.alidns.com:853",
    "+.hellobike.com": "quic://dns.alidns.com:853",
    "*.hichina.com": "quic://dns.alidns.com:853",
    "*.yunos.com": "quic://dns.alidns.com:853",
    "*.nlark.com": "quic://dns.alidns.com:853",
    "*.yuque.com": "quic://dns.alidns.com:853",
    "upos-sz-mirrorali.bilivideo.com": "quic://dns.alidns.com:853",
    "upos-sz-estgoss.bilivideo.com": "quic://dns.alidns.com:853",
    "ali-safety-video.acfun.cn": "quic://dns.alidns.com:853",
    "*.qcloud.com": "https://doh.pub/dns-query",
    "*.gtimg.cn": "https://doh.pub/dns-query",
    "*.gtimg.com": "https://doh.pub/dns-query",
    "*.gtimg.com.cn": "https://doh.pub/dns-query",
    "*.gdtimg.com": "https://doh.pub/dns-query",
    "*.idqqimg.com": "https://doh.pub/dns-query",
    "*.udqqimg.com": "https://doh.pub/dns-query",
    "*.igamecj.com": "https://doh.pub/dns-query",
    "+.myapp.com": "https://doh.pub/dns-query",
    "*.myqcloud.com": "https://doh.pub/dns-query",
    "+.dnspod.com": "https://doh.pub/dns-query",
    "*.qpic.cn": "https://doh.pub/dns-query",
    "*.qlogo.cn": "https://doh.pub/dns-query",
    "+.qq.com": "https://doh.pub/dns-query",
    "+.qq.com.cn": "https://doh.pub/dns-query",
    "*.qqmail.com": "https://doh.pub/dns-query",
    "+.qzone.com": "https://doh.pub/dns-query",
    "*.tencent-cloud.net": "https://doh.pub/dns-query",
    "*.tencent-cloud.com": "https://doh.pub/dns-query",
    "+.tencent.com": "https://doh.pub/dns-query",
    "+.tencent.com.cn": "https://doh.pub/dns-query",
    "+.tencentmusic.com": "https://doh.pub/dns-query",
    "+.weixinbridge.com": "https://doh.pub/dns-query",
    "+.weixin.com": "https://doh.pub/dns-query",
    "+.weiyun.com": "https://doh.pub/dns-query",
    "+.soso.com": "https://doh.pub/dns-query",
    "+.sogo.com": "https://doh.pub/dns-query",
    "+.sogou.com": "https://doh.pub/dns-query",
    "*.sogoucdn.com": "https://doh.pub/dns-query",
    "*.roblox.cn": "https://doh.pub/dns-query",
    "+.robloxdev.cn": "https://doh.pub/dns-query",
    "+.wegame.com": "https://doh.pub/dns-query",
    "+.wegame.com.cn": "https://doh.pub/dns-query",
    "+.wegameplus.com": "https://doh.pub/dns-query",
    "+.cdn-go.cn": "https://doh.pub/dns-query",
    "*.tencentcs.cn": "https://doh.pub/dns-query",
    "*.qcloudimg.com": "https://doh.pub/dns-query",
    "+.dnspod.cn": "https://doh.pub/dns-query",
    "+.anticheatexpert.com": "https://doh.pub/dns-query",
    "url.cn": "https://doh.pub/dns-query",
    "*.qlivecdn.com": "https://doh.pub/dns-query",
    "*.tcdnlive.com": "https://doh.pub/dns-query",
    "*.dnsv1.com": "https://doh.pub/dns-query",
    "*.smtcdns.net": "https://doh.pub/dns-query",
    "+.coding.net": "https://doh.pub/dns-query",
    "*.codehub.cn": "https://doh.pub/dns-query",
    "tx-safety-video.acfun.cn": "https://doh.pub/dns-query",
    "acg.tv": "https://doh.pub/dns-query",
    "b23.tv": "https://doh.pub/dns-query",
    "+.bilibili.cn": "https://doh.pub/dns-query",
    "+.bilibili.com": "https://doh.pub/dns-query",
    "*.acgvideo.com": "https://doh.pub/dns-query",
    "*.bilivideo.com": "https://doh.pub/dns-query",
    "*.bilivideo.cn": "https://doh.pub/dns-query",
    "*.bilivideo.net": "https://doh.pub/dns-query",
    "*.hdslb.com": "https://doh.pub/dns-query",
    "*.biliimg.com": "https://doh.pub/dns-query",
    "*.biliapi.com": "https://doh.pub/dns-query",
    "*.biliapi.net": "https://doh.pub/dns-query",
    "+.biligame.com": "https://doh.pub/dns-query",
    "*.biligame.net": "https://doh.pub/dns-query",
    "+.bilicomic.com": "https://doh.pub/dns-query",
    "+.bilicomics.com": "https://doh.pub/dns-query",
    "*.bilicdn1.com": "https://doh.pub/dns-query",
    "+.mi.com": "https://doh.pub/dns-query",
    "+.duokan.com": "https://doh.pub/dns-query",
    "*.mi-img.com": "https://doh.pub/dns-query",
    "*.mi-idc.com": "https://doh.pub/dns-query",
    "*.xiaoaisound.com": "https://doh.pub/dns-query",
    "*.xiaomixiaoai.com": "https://doh.pub/dns-query",
    "*.mi-fds.com": "https://doh.pub/dns-query",
    "*.mifile.cn": "https://doh.pub/dns-query",
    "*.mijia.tech": "https://doh.pub/dns-query",
    "+.miui.com": "https://doh.pub/dns-query",
    "+.xiaomi.com": "https://doh.pub/dns-query",
    "+.xiaomi.cn": "https://doh.pub/dns-query",
    "+.xiaomi.net": "https://doh.pub/dns-query",
    "+.xiaomiev.com": "https://doh.pub/dns-query",
    "+.xiaomiyoupin.com": "https://doh.pub/dns-query",
    "+.bytedance.com": "180.184.2.2",
    "*.bytecdn.cn": "180.184.2.2",
    "*.volccdn.com": "180.184.2.2",
    "*.toutiaoimg.com": "180.184.2.2",
    "*.toutiaoimg.cn": "180.184.2.2",
    "*.toutiaostatic.com": "180.184.2.2",
    "*.toutiaovod.com": "180.184.2.2",
    "*.toutiaocloud.com": "180.184.2.2",
    "+.toutiaopage.com": "180.184.2.2",
    "+.feiliao.com": "180.184.2.2",
    "+.iesdouyin.com": "180.184.2.2",
    "*.pstatp.com": "180.184.2.2",
    "+.snssdk.com": "180.184.2.2",
    "*.bytegoofy.com": "180.184.2.2",
    "+.toutiao.com": "180.184.2.2",
    "+.feishu.cn": "180.184.2.2",
    "+.feishu.net": "180.184.2.2",
    "*.feishucdn.com": "180.184.2.2",
    "*.feishupkg.com": "180.184.2.2",
    "+.douyin.com": "180.184.2.2",
    "*.douyinpic.com": "180.184.2.2",
    "*.douyinstatic.com": "180.184.2.2",
    "*.douyincdn.com": "180.184.2.2",
    "*.douyinliving.com": "180.184.2.2",
    "*.douyinvod.com": "180.184.2.2",
    "+.huoshan.com": "180.184.2.2",
    "*.huoshanstatic.com": "180.184.2.2",
    "+.huoshanzhibo.com": "180.184.2.2",
    "+.ixigua.com": "180.184.2.2",
    "*.ixiguavideo.com": "180.184.2.2",
    "*.ixgvideo.com": "180.184.2.2",
    "*.byted-static.com": "180.184.2.2",
    "+.volces.com": "180.184.2.2",
    "+.baike.com": "180.184.2.2",
    "*.zjcdn.com": "180.184.2.2",
    "*.zijieapi.com": "180.184.2.2",
    "+.feelgood.cn": "180.184.2.2",
    "*.bytetcc.com": "180.184.2.2",
    "*.bytednsdoc.com": "180.184.2.2",
    "*.byteimg.com": "180.184.2.2",
    "*.byteacctimg.com": "180.184.2.2",
    "*.ibytedapm.com": "180.184.2.2",
    "+.oceanengine.com": "180.184.2.2",
    "*.edge-byted.com": "180.184.2.2",
    "*.volcvideo.com": "180.184.2.2",
    "+.91.com": "180.76.76.76",
    "+.hao123.com": "180.76.76.76",
    "+.baidu.cn": "180.76.76.76",
    "+.baidu.com": "180.76.76.76",
    "+.iqiyi.com": "180.76.76.76",
    "*.iqiyipic.com": "180.76.76.76",
    "*.baidubce.com": "180.76.76.76",
    "*.bcelive.com": "180.76.76.76",
    "*.baiducontent.com": "180.76.76.76",
    "*.baidustatic.com": "180.76.76.76",
    "*.bdstatic.com": "180.76.76.76",
    "*.bdimg.com": "180.76.76.76",
    "*.bcebos.com": "180.76.76.76",
    "*.baidupcs.com": "180.76.76.76",
    "*.baidubcr.com": "180.76.76.76",
    "*.yunjiasu-cdn.net": "180.76.76.76",
    "+.tieba.com": "180.76.76.76",
    "+.xiaodutv.com": "180.76.76.76",
    "*.shifen.com": "180.76.76.76",
    "*.jomodns.com": "180.76.76.76",
    "*.bdydns.com": "180.76.76.76",
    "*.jomoxc.com": "180.76.76.76",
    "*.duapp.com": "180.76.76.76",
    "*.antpcdn.com": "180.76.76.76",
    "upos-sz-mirrorbd.bilivideo.com": "180.76.76.76",
    "upos-sz-mirrorbos.bilivideo.com": "180.76.76.76",
    "*.qhimg.com": "https://doh.360.cn/dns-query",
    "*.qhimgs.com": "https://doh.360.cn/dns-query",
    "*.qhimgs?.com": "https://doh.360.cn/dns-query",
    "*.qhres.com": "https://doh.360.cn/dns-query",
    "*.qhres2.com": "https://doh.360.cn/dns-query",
    "*.qhmsg.com": "https://doh.360.cn/dns-query",
    "*.qhstatic.com": "https://doh.360.cn/dns-query",
    "*.qhupdate.com": "https://doh.360.cn/dns-query",
    "*.qihucdn.com": "https://doh.360.cn/dns-query",
    "+.360.com": "https://doh.360.cn/dns-query",
    "+.360.cn": "https://doh.360.cn/dns-query",
    "+.360.net": "https://doh.360.cn/dns-query",
    "+.360safe.com": "https://doh.360.cn/dns-query",
    "*.360tpcdn.com": "https://doh.360.cn/dns-query",
    "+.360os.com": "https://doh.360.cn/dns-query",
    "*.360webcache.com": "https://doh.360.cn/dns-query",
    "+.360kuai.com": "https://doh.360.cn/dns-query",
    "+.so.com": "https://doh.360.cn/dns-query",
    "+.haosou.com": "https://doh.360.cn/dns-query",
    "+.yunpan.cn": "https://doh.360.cn/dns-query",
    "+.yunpan.com": "https://doh.360.cn/dns-query",
    "+.yunpan.com.cn": "https://doh.360.cn/dns-query",
    "*.qh-cdn.com": "https://doh.360.cn/dns-query",
    "+.baomitu.com": "https://doh.360.cn/dns-query",
    "+.qiku.com": "https://doh.360.cn/dns-query",
    "+.securelogin.com.cn": ['system://', 'system', 'dhcp://system'],
    "captive.apple.com": ['system://', 'system', 'dhcp://system'],
    "hotspot.cslwifi.com": ['system://', 'system', 'dhcp://system'],
    "*.m2m": ['system://', 'system', 'dhcp://system'],
    "injections.adguard.org": ['system://', 'system', 'dhcp://system'],
    "local.adguard.org": ['system://', 'system', 'dhcp://system'],
    "*.bogon": ['system://', 'system', 'dhcp://system'],
    "*.home": ['system://', 'system', 'dhcp://system'],
    "instant.arubanetworks.com": ['system://', 'system', 'dhcp://system'],
    "setmeup.arubanetworks.com": ['system://', 'system', 'dhcp://system'],
    "router.asus.com": ['system://', 'system', 'dhcp://system'],
    "repeater.asus.com": ['system://', 'system', 'dhcp://system'],
    "+.asusrouter.com": ['system://', 'system', 'dhcp://system'],
    "+.routerlogin.net": ['system://', 'system', 'dhcp://system'],
    "+.routerlogin.com": ['system://', 'system', 'dhcp://system'],
    "+.tplinkwifi.net": ['system://', 'system', 'dhcp://system'],
    "+.tplogin.cn": ['system://', 'system', 'dhcp://system'],
    "+.tplinkap.net": ['system://', 'system', 'dhcp://system'],
    "+.tplinkmodem.net": ['system://', 'system', 'dhcp://system'],
    "+.tplinkplclogin.net": ['system://', 'system', 'dhcp://system'],
    "+.tplinkrepeater.net": ['system://', 'system', 'dhcp://system'],
    "*.ui.direct": ['system://', 'system', 'dhcp://system'],
    "unifi": ['system://', 'system', 'dhcp://system'],
    "*.huaweimobilewifi.com": ['system://', 'system', 'dhcp://system'],
    "*.router": ['system://', 'system', 'dhcp://system'],
    "aterm.me": ['system://', 'system', 'dhcp://system'],
    "console.gl-inet.com": ['system://', 'system', 'dhcp://system'],
    "homerouter.cpe": ['system://', 'system', 'dhcp://system'],
    "mobile.hotspot": ['system://', 'system', 'dhcp://system'],
    "ntt.setup": ['system://', 'system', 'dhcp://system'],
    "pi.hole": ['system://', 'system', 'dhcp://system'],
    "*.plex.direct": ['system://', 'system', 'dhcp://system'],
    "+.10.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.16.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.17.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.18.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.19.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.20.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.21.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.22.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.23.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.24.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.25.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.26.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.27.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.28.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.29.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.30.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.31.172.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.168.192.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "+.254.169.in-addr.arpa": ['system://', 'system', 'dhcp://system'],
    "*.lan": ['system://', 'system', 'dhcp://system'],
    "*.localdomain": ['system://', 'system', 'dhcp://system'],
    "+.home.arpa": ['system://', 'system', 'dhcp://system']
  };
  params.dns["nameserver-policy"] = nameserverPolicy;
}

// 覆写hosts
function overwriteHosts(params) {
  const hosts = {
    "dns.alidns.com": ['223.5.5.5', '223.6.6.6', '2400:3200:baba::1', '2400:3200::1'],
    "doh.pub": ['120.53.53.53', '1.12.12.12'],
    "cdn.jsdelivr.net": ['cdn.jsdelivr.net.cdn.cloudflare.net']
  };
  params.hosts = hosts;
}

// 覆写Tunnel
function overwriteTunnel(params) {
  const tunnelOptions = {
    enable: true,
    stack: "system",
    device: "tun0",
    "dns-hijack": ["any:53", "tcp://any:53"],
    "auto-route": true,
    "auto-detect-interface": true,
    "strict-route": true,
    // 根据自己环境来看要排除哪些网段
    "route-exclude-address": [],
  };
  params.tun = { ...tunnelOptions };
}

// 覆写代理组
function overwriteProxyGroups(params) {
  // 所有代理
  const allProxies = params["proxies"].map((e) => e.name);
  // 公共的正则片段
  const excludeTerms = "剩余|到期|主页|官网|游戏|关注|网站|地址|有效|网址|禁止|邮箱|发布|客服|订阅|节点|问题|联系";
  // 包含条件：各个国家或地区的关键词
  const includeTerms = {
    HK: "(香港|HK|Hong|🇭🇰)",
    TW: "(台湾|TW|Taiwan|Wan|🇹🇼|🇨🇳)",
    SG: "(新加坡|狮城|SG|Singapore|🇸🇬)",
    JP: "(日本|JP|Japan|🇯🇵)",
    KR: "(韩国|韓|KR|Korea|🇰🇷)",
    US: "(美国|US|United States|America|🇺🇸)",
    UK: "(英国|UK|United Kingdom|🇬🇧)",
    FR: "(法国|FR|France|🇫🇷)",
    DE: "(德国|DE|Germany|🇩🇪)"
  };
  // 合并所有国家关键词，供"其它"条件使用
  const allCountryTerms = Object.values(includeTerms).join("|");
  // 自动代理组正则表达式配置
  const autoProxyGroupRegexs = [
    { name: "HK - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.HK})(?!.*${excludeTerms}).*$`, "i") },
    { name: "TW - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.TW})(?!.*${excludeTerms}).*$`, "i") },
    { name: "SG - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.SG})(?!.*${excludeTerms}).*$`, "i") },
    { name: "JP - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.JP})(?!.*${excludeTerms}).*$`, "i") },
    { name: "KR - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.KR})(?!.*${excludeTerms}).*$`, "i") },
    { name: "US - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.US})(?!.*${excludeTerms}).*$`, "i") },
    { name: "UK - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.UK})(?!.*${excludeTerms}).*$`, "i") },
    { name: "FR - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.FR})(?!.*${excludeTerms}).*$`, "i") },
    { name: "DE - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.DE})(?!.*${excludeTerms}).*$`, "i") },
    { name: "HK|SG - 自动选择", regex: new RegExp(`^(?=.*${includeTerms.HK}|${includeTerms.SG})(?!.*${excludeTerms}).*$`, "i") },
    { name: "NoJP - 自动选择", regex: new RegExp(`^(?!.*(?:${includeTerms.JP}|${excludeTerms})).*$`, "i") },
    {
      name: "其它 - 自动选择",
      regex: new RegExp(`^(?!.*(?:${allCountryTerms}|${excludeTerms})).*$`, "i")
    }
  ];

  const autoProxyGroups = autoProxyGroupRegexs
    .map((item) => ({
      name: item.name,
      type: "url-test",
      url: "https://cp.cloudflare.com",
      interval: 300,
      tolerance: 50,
      proxies: getProxiesByRegex(params, item.regex),
      hidden: true,
    }))
    .filter((item) => item.proxies.length > 0);

  // 手动选择代理组
  const manualProxyGroups = [
    {
      name: "HK - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.HK})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png"
    },
    {
      name: "JP - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.JP})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png"
    },
    {
      name: "KR - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.KR})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png"
    },
    {
      name: "SG - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.SG})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png"
    },
    {
      name: "US - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.US})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png"
    },
    {
      name: "UK - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.UK})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/UK.png"
    },
    {
      name: "FR - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.FR})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/FR.png"
    },
    {
      name: "DE - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.DE})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/DE.png"
    },
    {
      name: "TW - 手动选择",
      regex: new RegExp(`^(?=.*${includeTerms.TW})(?!.*${excludeTerms}).*$`, "i"),
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png"
    }
  ];

  const manualProxyGroupsConfig = manualProxyGroups
    .map((item) => ({
      name: item.name,
      type: "select",
      proxies: getManualProxiesByRegex(params, item.regex),
      icon: item.icon,
      hidden: false,
    }))
    .filter((item) => item.proxies.length > 0);

  // 负载均衡策略
  // 可选值：round-robin / consistent-hashing / sticky-sessions
  // round-robin：轮询 按顺序循环使用代理列表中的节点
  // consistent-hashing：散列 根据请求的哈希值将请求分配到固定的节点
  // sticky-sessions：缓存 对「你的设备IP + 目标地址」组合计算哈希值，根据哈希值将请求分配到固定的节点 缓存 10 分钟过期
  // 默认值：consistent-hashing
  const loadBalanceStrategy = "consistent-hashing";

  const groups = [
    {
      name: "节点选择",
      type: "select",
      url: "https://cp.cloudflare.com",
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png",
      proxies: [
        "ALL - 自动选择",
        "HK|SG - 自动选择",
        "NoJP - 自动选择",
        "手动选择",
        "⚖️ 负载均衡",
        "DIRECT",
      ],
    },
    {
      name: "手动选择",
      type: "select",
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Cylink.png",
      proxies: ["HK - 手动选择", "JP - 手动选择", "KR - 手动选择", "SG - 手动选择", "US - 手动选择", "UK - 手动选择", "FR - 手动选择", "DE - 手动选择", "TW - 手动选择"],
      'include-all-proxies': true
    },
    {
      name: "⚖️ 负载均衡",
      type: "load-balance",
      url: "https://cp.cloudflare.com",
      interval: 300,
      strategy: loadBalanceStrategy,
      proxies: allProxies,
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Available.png"
    },
    {
      name: "ALL - 自动选择",
      type: "url-test",
      url: "https://cp.cloudflare.com",
      interval: 300,
      tolerance: 50,
      proxies: allProxies,
      //hidden: true,
    },
    {
      name: 'PT下载',
      icon: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Download.png',
      type: 'select',
      proxies: ['DIRECT', '节点选择']
    },
    {
      name: 'Usenet',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Usenet1.png',
      type: 'select',
      proxies: ['节点选择', 'DIRECT']
    },
    {
      name: '电报信息',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Telegram.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '无损音乐',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Spotify.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '人工智能',
      icon: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/ChatGPT.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '油管视频',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Youtube.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '环球影视',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Netflix.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '国外抖音',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Tiktok.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '谷歌服务',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Google.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '贝宝信用',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Paypal.png',
      type: 'select',
      proxies: ['节点选择']
    },
    {
      name: '测速软件',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Speedtest.png',
      type: 'select',
      proxies: ['DIRECT', '节点选择']
    },
    {
      name: '苹果服务',
      icon: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png',
      type: 'select',
      proxies: ['DIRECT', '节点选择']
    },
    {
      name: '微软服务',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Microsoft.png',
      type: 'select',
      proxies: ['DIRECT', '节点选择']
    },
    {
      name: '数字游戏',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Game.png',
      type: 'select',
      proxies: ['DIRECT', '节点选择']
    },
    {
      name: '漏网之鱼',
      icon: 'https://raw.githubusercontent.com/laobanbiefangcu/icon/main/Policy-Filter/Fish2.png',
      type: 'select',
      proxies: ['节点选择', 'DIRECT']
    }
  ];

  autoProxyGroups.length &&
    groups[2].proxies.unshift(...autoProxyGroups.map((item) => item.name));
  groups.push(...autoProxyGroups);
  groups.push(...manualProxyGroupsConfig);
  params["proxy-groups"] = groups;
}

// 覆写规则
function overwriteRules(params) {
  // 规则集锚点定义 (对应YAML锚点)
  const ruleSetTemplates = {
    RuleSet_classical: {
      type: 'http',
      behavior: 'classical',
      interval: 43200,
      proxy: '节点选择'
    },
    RuleSet_domain: {
      type: 'http',
      behavior: 'domain',
      interval: 43200,
      proxy: '节点选择'
    },
    RuleSet_ipcidr: {
      type: 'http',
      behavior: 'ipcidr',
      interval: 43200,
      proxy: '节点选择'
    },
    RuleSet_classical_text: {
      type: 'http',
      behavior: 'classical',
      interval: 43200,
      format: 'text',
      proxy: '节点选择'
    },
    RuleSet_domain_text: {
      type: 'http',
      behavior: 'domain',
      interval: 43200,
      format: 'text',
      proxy: '节点选择'
    },
    RuleSet_ipcidr_text: {
      type: 'http',
      behavior: 'ipcidr',
      interval: 43200,
      format: 'text',
      proxy: '节点选择'
    },
    RuleSet_classical_mrs: {
      type: 'http',
      behavior: 'classical',
      interval: 43200,
      format: 'mrs',
      proxy: '节点选择'
    },
    RuleSet_domain_mrs: {
      type: 'http',
      behavior: 'domain',
      interval: 43200,
      format: 'mrs',
      proxy: '节点选择'
    },
    RuleSet_ipcidr_mrs: {
      type: 'http',
      behavior: 'ipcidr',
      interval: 43200,
      format: 'mrs',
      proxy: '节点选择'
    }
  };

  const adNonipRules = [
    "RULE-SET,reject_non_ip,REJECT",
    "RULE-SET,reject_domainset,REJECT",
    "RULE-SET,reject_non_ip_drop,REJECT-DROP",
    "RULE-SET,reject_non_ip_no_drop,REJECT"
  ];

  const customRules = [
    // 在此添加自定义规则，优先级次于ad。例子：
    // "DOMAIN,baidu.com,DIRECT",
    // ================== 非IP类规则 ==================
    'RULE-SET,reject_non_ip,REJECT',
    'RULE-SET,reject_domainset,REJECT',
    'RULE-SET,reject_non_ip_drop,REJECT-DROP',
    'RULE-SET,reject_non_ip_no_drop,REJECT',
    'RULE-SET,cdn_domainset,节点选择',
    'RULE-SET,cdn_non_ip,节点选择',
    'RULE-SET,stream_non_ip,节点选择',
    'RULE-SET,telegram_non_ip,电报信息',
    'RULE-SET,apple_cdn,DIRECT',
    'RULE-SET,download_domainset,节点选择',
    'RULE-SET,download_non_ip,节点选择',
    'RULE-SET,microsoft_cdn_non_ip,DIRECT',
    'RULE-SET,apple_cn_non_ip,DIRECT',
    'RULE-SET,apple_services,苹果服务',
    'RULE-SET,microsoft_non_ip,微软服务',
    'RULE-SET,ai_non_ip,人工智能',
    'RULE-SET,global_non_ip,节点选择',
    'RULE-SET,domestic_non_ip,DIRECT',
    'RULE-SET,direct_non_ip,DIRECT',
    'RULE-SET,lan_non_ip,DIRECT',

    // ================== IP类规则 ==================
    'RULE-SET,reject_ip,REJECT',
    'RULE-SET,telegram_ip,电报信息',
    'RULE-SET,stream_ip,节点选择',
    'RULE-SET,lan_ip,DIRECT',
    'RULE-SET,domestic_ip,DIRECT',
    'RULE-SET,china_ip,DIRECT',

    // ================== 应用规则 ==================
    'RULE-SET,Reject,REJECT-DROP',
    // 'RULE-SET,Anti-AD,REJECT-DROP', // 可注释广告规则
    'RULE-SET,DouYin,DIRECT',
    'RULE-SET,Proxy,节点选择',
    'RULE-SET,Adobe,REJECT',
    'RULE-SET,Docker,节点选择',
    'RULE-SET,Discord,节点选择',

    // AI服务
    'RULE-SET,OpenAI,人工智能',
    'RULE-SET,Claude,人工智能',
    'RULE-SET,Copilot,人工智能',
    'RULE-SET,Gemini,人工智能',
    'RULE-SET,AI,人工智能',

    // 流媒体服务
    'RULE-SET,MovieTV,环球影视',
    'RULE-SET,AppleTV,环球影视',
    'RULE-SET,Netflix,环球影视',
    'RULE-SET,Tmdb,环球影视',
    'RULE-SET,IMDB,环球影视',
    'RULE-SET,Disney,环球影视',
    'RULE-SET,AmazonPrimeVideo,环球影视',
    'RULE-SET,Amazon,环球影视',
    'RULE-SET,Hulu,环球影视',
    'RULE-SET,Max,环球影视',
    'RULE-SET,TVB,环球影视',
    'RULE-SET,HuluJP,环球影视',
    'RULE-SET,HuluUSA,环球影视',

    // 音乐服务
    'RULE-SET,Spotify,无损音乐',
    'RULE-SET,TIDAL,无损音乐',
    'RULE-SET,Qobuz,无损音乐',
    'RULE-SET,Pandora,无损音乐',
    'RULE-SET,SoundCloud,无损音乐',

    // 社交平台
    'RULE-SET,Telegram,电报信息',
    'RULE-SET,Twitter,节点选择',
    'RULE-SET,Instagram,节点选择',
    'RULE-SET,Facebook,节点选择',
    'RULE-SET,TikTok,国外抖音',

    // 谷歌生态
    'RULE-SET,Google,谷歌服务',
    'RULE-SET,GoogleDrive,谷歌服务',
    'RULE-SET,GoogleEarth,谷歌服务',
    'RULE-SET,YouTube,油管视频',
    'RULE-SET,GoogleFCM,谷歌服务',
    'RULE-SET,GoogleVoice,谷歌服务',
    'RULE-SET,Chromecast,谷歌服务',

    // 苹果生态
    'RULE-SET,Apple,苹果服务',
    'RULE-SET,AppStore,苹果服务',
    'RULE-SET,iCloud,苹果服务',
    'RULE-SET,SystemOTA,苹果服务',
    'RULE-SET,AppleID,苹果服务',
    'RULE-SET,Apple_Domain,苹果服务',
    'RULE-SET,TestFlight,苹果服务',
    'RULE-SET,AppleMail,苹果服务',
    'RULE-SET,AppleMusic,苹果服务',
    'RULE-SET,AppleNews,苹果服务',
    'RULE-SET,AppleFirmware,苹果服务',
    'RULE-SET,AppleHardware,苹果服务',
    'RULE-SET,AppleDaily,苹果服务',
    'RULE-SET,AppleDev,苹果服务',
    'RULE-SET,AppleMedia,苹果服务',
    'RULE-SET,FitnessPlus,苹果服务',
    'RULE-SET,Siri,苹果服务',
    'RULE-SET,AppleProxy,苹果服务',
    'RULE-SET,Beats,苹果服务',

    // 微软生态
    'RULE-SET,Bing,微软服务',
    'RULE-SET,Microsoft,微软服务',
    'RULE-SET,Teams,微软服务',
    'RULE-SET,MicrosoftEdge,微软服务',
    'RULE-SET,OneDrive,微软服务',

    // 游戏平台
    'RULE-SET,Game,数字游戏',
    'RULE-SET,Blizzard,数字游戏',
    'RULE-SET,Steam,数字游戏',
    'RULE-SET,Rockstar,数字游戏',
    'RULE-SET,PlayStation,数字游戏',
    'RULE-SET,Epic,数字游戏',
    'RULE-SET,SteamCN,数字游戏',
    'RULE-SET,WildRift,数字游戏',
    'RULE-SET,Supercell,数字游戏',
    'RULE-SET,EA,数字游戏',
    'RULE-SET,Xbox,数字游戏',
    'RULE-SET,Sony,数字游戏',
    'RULE-SET,NGA,数字游戏',
    'RULE-SET,HoYoverse,数字游戏',
    'RULE-SET,GameDownload,数字游戏',
    'RULE-SET,TencentLoLMobile,数字游戏',
    'RULE-SET,GameDownloadCN,数字游戏',

    // 国内直连服务
    'RULE-SET,BaiDuTieBa,DIRECT',
    'RULE-SET,NetEaseMusic,DIRECT',
    'RULE-SET,GaoDe,DIRECT',
    'RULE-SET,JingDong,DIRECT',
    'RULE-SET,KugouKuwo,DIRECT',
    'RULE-SET,MeiTuan,DIRECT',
    'RULE-SET,SMZDM,DIRECT',
    'RULE-SET,Tencent,DIRECT',
    'RULE-SET,WeChat,DIRECT',
    'RULE-SET,Alibaba_Domain,DIRECT',
    'RULE-SET,Pinduoduo,DIRECT',
    'RULE-SET,CCTV,DIRECT',
    'RULE-SET,ChinaMedia,DIRECT',
    'RULE-SET,Weibo,DIRECT',
    'RULE-SET,NetEase,DIRECT',
    'RULE-SET,12306,DIRECT',
    'RULE-SET,Sina,DIRECT',
    'RULE-SET,DouBan,DIRECT',
    'RULE-SET,Hupu,DIRECT',
    'RULE-SET,Bilibili,DIRECT',
    'RULE-SET,AliPay,DIRECT',
    'RULE-SET,ABC,DIRECT',
    'RULE-SET,Baidu,DIRECT',
    'RULE-SET,DingTalk,DIRECT',
    'RULE-SET,TencentVideo,DIRECT',
    'RULE-SET,Youku,DIRECT',
    'RULE-SET,iQIYI,DIRECT',
    'RULE-SET,XiaoMi,DIRECT',
    'RULE-SET,ByteDance,DIRECT',

    // 网络相关
    'SRC-IP-CIDR,192.168.1.131/32,DIRECT', // 需替换实际NAS IP
    'RULE-SET,PrivateTracker,PT下载',
    'RULE-SET,Direct,DIRECT',
    'RULE-SET,ASN.China,DIRECT',
    'GEOIP,cn,DIRECT,no-resolve',

    // 补充规则
    'DOMAIN-SUFFIX,googleapis.cn,节点选择',
    'DOMAIN-SUFFIX,gstatic.com,节点选择',
    'DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择',
    'DOMAIN-SUFFIX,github.io,节点选择',
    'DOMAIN,v2rayse.com,节点选择',
    'DOMAIN,hajimi.icu,节点选择',
    'IP-CIDR,183.230.113.152/32,REJECT',
    'IP-CIDR,1.12.12.12/32,节点选择',

    // 自定义规则
    'RULE-SET,CustomDirect,DIRECT',
    'RULE-SET,CustomProxy,节点选择',
    'GEOSITE,geolocation-cn,DIRECT',

    // 基础规则
    'RULE-SET,direct,DIRECT',
    'RULE-SET,cncidr,DIRECT,no-resolve',
    'RULE-SET,lancidr,DIRECT,no-resolve',
    'RULE-SET,apple,节点选择',
    'RULE-SET,icloud,节点选择',

    // 广告过滤
    'RULE-SET,reject,REJECT',
    'RULE-SET,AD,REJECT',
    'RULE-SET,EasyList,REJECT',
    'RULE-SET,EasyListChina,REJECT',
    'RULE-SET,EasyPrivacy,REJECT',
    'RULE-SET,ProgramAD,REJECT',
    'RULE-SET,秋风广告规则,REJECT',

    // 网络优化
    'RULE-SET,tld-not-cn,节点选择',
    'RULE-SET,applications,DIRECT',
    'RULE-SET,private,DIRECT',
    'RULE-SET,ads,REJECT',
    'RULE-SET,microsoft-cn,DIRECT',
    'RULE-SET,apple-cn,DIRECT',
    'RULE-SET,google-cn,DIRECT',
    'RULE-SET,games-cn,DIRECT',
    'RULE-SET,networktest,测速软件',

    // 最终规则
    'RULE-SET,proxy,节点选择',
    'RULE-SET,cn,DIRECT',
    'RULE-SET,netflixip,环球影视,no-resolve',
    'RULE-SET,telegramip,节点选择,no-resolve',
    'RULE-SET,privateip,DIRECT,no-resolve',
    'RULE-SET,cnip,DIRECT',
  ];

  const nonipRules = [
    "RULE-SET,cdn_domainset,节点选择",
    "RULE-SET,cdn_non_ip,节点选择",
    "RULE-SET,stream_non_ip,节点选择",
    "RULE-SET,telegram_non_ip,电报信息",
    "RULE-SET,apple_cdn,DIRECT",
    "RULE-SET,download_domainset,节点选择",
    "RULE-SET,download_non_ip,节点选择",
    "RULE-SET,microsoft_cdn_non_ip,DIRECT",
    "RULE-SET,apple_cn_non_ip,DIRECT",
    "RULE-SET,apple_services,苹果服务",
    "RULE-SET,microsoft_non_ip,微软服务",
    "RULE-SET,ai_non_ip,人工智能",
    "RULE-SET,global_non_ip,节点选择",
    "RULE-SET,domestic_non_ip,DIRECT",
    "RULE-SET,direct_non_ip,DIRECT",
    "RULE-SET,lan_non_ip,DIRECT"
  ];

  const allNonipRules = [
    ...adNonipRules,
    ...customRules,
    ...nonipRules
  ];

  const ipRules = [
    "RULE-SET,reject_ip,REJECT",
    "RULE-SET,telegram_ip,电报信息",
    "RULE-SET,stream_ip,节点选择",
    "RULE-SET,lan_ip,DIRECT",
    "RULE-SET,domestic_ip,DIRECT",
    "RULE-SET,china_ip,DIRECT",
    "MATCH,节点选择"
  ];

  const rules = [
    // 非ip类规则
    ...allNonipRules,
    // ip类规则
    ...ipRules
  ];

  const ruleProviders = {
    // 去广告
    reject_non_ip_no_drop: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/reject-no-drop.txt",
      path: "./rule_set/sukkaw_ruleset/reject_non_ip_no_drop.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    reject_non_ip_drop: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/reject-drop.txt",
      path: "./rule_set/sukkaw_ruleset/reject_non_ip_drop.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    reject_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/reject.txt",
      path: "./rule_set/sukkaw_ruleset/reject_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    reject_domainset: {
      type: "http",
      behavior: "domain",
      url: "https://ruleset.skk.moe/Clash/domainset/reject.txt",
      path: "./rule_set/sukkaw_ruleset/reject_domainset.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    reject_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/ip/reject.txt",
      path: "./rule_set/sukkaw_ruleset/reject_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // 静态cdn
    cdn_domainset: {
      type: "http",
      behavior: "domain",
      url: "https://ruleset.skk.moe/Clash/domainset/cdn.txt",
      path: "./rule_set/sukkaw_ruleset/cdn_domainset.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    cdn_non_ip: {
      type: "http",
      behavior: "domain",
      url: "https://ruleset.skk.moe/Clash/non_ip/cdn.txt",
      path: "./rule_set/sukkaw_ruleset/cdn_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // 流媒体
    stream_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/stream.txt",
      path: "./rule_set/sukkaw_ruleset/stream_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    stream_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/ip/stream.txt",
      path: "./rule_set/sukkaw_ruleset/stream_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // AIGC
    ai_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/ai.txt",
      path: "./rule_set/sukkaw_ruleset/ai_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // telegram
    telegram_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/telegram.txt",
      path: "./rule_set/sukkaw_ruleset/telegram_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    telegram_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/ip/telegram.txt",
      path: "./rule_set/sukkaw_ruleset/telegram_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // apple
    apple_cdn: {
      type: "http",
      behavior: "domain",
      url: "https://ruleset.skk.moe/Clash/domainset/apple_cdn.txt",
      path: "./rule_set/sukkaw_ruleset/apple_cdn.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    apple_services: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/apple_services.txt",
      path: "./rule_set/sukkaw_ruleset/apple_services.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    apple_cn_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/apple_cn.txt",
      path: "./rule_set/sukkaw_ruleset/apple_cn_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // microsoft
    microsoft_cdn_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/microsoft_cdn.txt",
      path: "./rule_set/sukkaw_ruleset/microsoft_cdn_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    microsoft_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/microsoft.txt",
      path: "./rule_set/sukkaw_ruleset/microsoft_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // 软件更新、操作系统等大文件下载
    download_domainset: {
      type: "http",
      behavior: "domain",
      url: "https://ruleset.skk.moe/Clash/domainset/download.txt",
      path: "./rule_set/sukkaw_ruleset/download_domainset.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    download_non_ip: {
      type: "http",
      behavior: "domain",
      url: "https://ruleset.skk.moe/Clash/non_ip/download.txt",
      path: "./rule_set/sukkaw_ruleset/download_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    // 内网域名和局域网 IP
    lan_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/lan.txt",
      path: "./rule_set/sukkaw_ruleset/lan_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    lan_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/ip/lan.txt",
      path: "./rule_set/sukkaw_ruleset/lan_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    domestic_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/domestic.txt",
      path: "./rule_set/sukkaw_ruleset/domestic_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    direct_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/direct.txt",
      path: "./rule_set/sukkaw_ruleset/direct_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    global_non_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/non_ip/global.txt",
      path: "./rule_set/sukkaw_ruleset/global_non_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    domestic_ip: {
      type: "http",
      behavior: "classical",
      url: "https://ruleset.skk.moe/Clash/ip/domestic.txt",
      path: "./rule_set/sukkaw_ruleset/domestic_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    china_ip: {
      type: "http",
      behavior: "ipcidr",
      url: "https://ruleset.skk.moe/Clash/ip/china_ip.txt",
      path: "./rule_set/sukkaw_ruleset/china_ip.txt",
      interval: 43200,
      format: "text",
      proxy: "节点选择"
    },
    reject_non_ip_no_drop: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/reject-no-drop.txt',
      path: './rule_set/sukkaw_ruleset/reject_non_ip_no_drop.txt'
    },
    reject_non_ip_drop: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/reject-drop.txt',
      path: './rule_set/sukkaw_ruleset/reject_non_ip_drop.txt'
    },
    reject_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/reject.txt',
      path: './rule_set/sukkaw_ruleset/reject_non_ip.txt'
    },
    reject_domainset: {
      ...ruleSetTemplates.RuleSet_domain_text,
      url: 'https://ruleset.skk.moe/Clash/domainset/reject.txt',
      path: './rule_set/sukkaw_ruleset/reject_domainset.txt'
    },
    reject_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/ip/reject.txt',
      path: './rule_set/sukkaw_ruleset/reject_ip.txt'
    },
    cdn_domainset: {
      ...ruleSetTemplates.RuleSet_domain_text,
      url: 'https://ruleset.skk.moe/Clash/domainset/cdn.txt',
      path: './rule_set/sukkaw_ruleset/cdn_domainset.txt'
    },
    cdn_non_ip: {
      ...ruleSetTemplates.RuleSet_domain_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/cdn.txt',
      path: './rule_set/sukkaw_ruleset/cdn_non_ip.txt'
    },
    stream_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/stream.txt',
      path: './rule_set/sukkaw_ruleset/stream_non_ip.txt'
    },
    stream_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/ip/stream.txt',
      path: './rule_set/sukkaw_ruleset/stream_ip.txt'
    },
    ai_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/ai.txt',
      path: './rule_set/sukkaw_ruleset/ai_non_ip.txt'
    },
    telegram_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/telegram.txt',
      path: './rule_set/sukkaw_ruleset/telegram_non_ip.txt'
    },
    telegram_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/ip/telegram.txt',
      path: './rule_set/sukkaw_ruleset/telegram_ip.txt'
    },
    apple_cdn: {
      ...ruleSetTemplates.RuleSet_domain_text,
      url: 'https://ruleset.skk.moe/Clash/domainset/apple_cdn.txt',
      path: './rule_set/sukkaw_ruleset/apple_cdn.txt'
    },
    apple_services: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/apple_services.txt',
      path: './rule_set/sukkaw_ruleset/apple_services.txt'
    },
    apple_cn_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/apple_cn.txt',
      path: './rule_set/sukkaw_ruleset/apple_cn_non_ip.txt'
    },
    microsoft_cdn_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/microsoft_cdn.txt',
      path: './rule_set/sukkaw_ruleset/microsoft_cdn_non_ip.txt'
    },
    microsoft_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/microsoft.txt',
      path: './rule_set/sukkaw_ruleset/microsoft_non_ip.txt'
    },
    download_domainset: {
      ...ruleSetTemplates.RuleSet_domain_text,
      url: 'https://ruleset.skk.moe/Clash/domainset/download.txt',
      path: './rule_set/sukkaw_ruleset/download_domainset.txt'
    },
    download_non_ip: {
      ...ruleSetTemplates.RuleSet_domain_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/download.txt',
      path: './rule_set/sukkaw_ruleset/download_non_ip.txt'
    },
    lan_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/lan.txt',
      path: './rule_set/sukkaw_ruleset/lan_non_ip.txt'
    },
    lan_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/ip/lan.txt',
      path: './rule_set/sukkaw_ruleset/lan_ip.txt'
    },
    domestic_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/domestic.txt',
      path: './rule_set/sukkaw_ruleset/domestic_non_ip.txt'
    },
    direct_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/direct.txt',
      path: './rule_set/sukkaw_ruleset/direct_non_ip.txt'
    },
    global_non_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/non_ip/global.txt',
      path: './rule_set/sukkaw_ruleset/global_non_ip.txt'
    },
    domestic_ip: {
      ...ruleSetTemplates.RuleSet_classical_text,
      url: 'https://ruleset.skk.moe/Clash/ip/domestic.txt',
      path: './rule_set/sukkaw_ruleset/domestic_ip.txt'
    },
    china_ip: {
      ...ruleSetTemplates.RuleSet_ipcidr_text,
      url: 'https://ruleset.skk.moe/Clash/ip/china_ip.txt',
      path: './rule_set/sukkaw_ruleset/china_ip.txt'
    },
    '12306': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/12306/12306.yaml',
      path: './Rules/12306.yaml'
    },
    'ABC': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ABC/ABC.yaml',
      path: './Rules/ABC.yaml'
    },
    'Adobe': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Adobe/Adobe.yaml',
      path: './Rules/Adobe.yaml'
    },
    'AI': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/AI/AI.yaml',
      path: './Rules/AI.yaml'
    },
    'Alibaba_Domain': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Alibaba/Alibaba_Domain.yaml',
      path: './Rules/Alibaba_Domain.yaml'
    },
    'AliPay': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AliPay/AliPay.yaml',
      path: './Rules/AliPay.yaml'
    },
    'Amazon': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Amazon/Amazon.yaml',
      path: './Rules/Amazon.yaml'
    },
    'AmazonPrimeVideo': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AmazonPrimeVideo/AmazonPrimeVideo.yaml',
      path: './Rules/AmazonPrimeVideo.yaml'
    },
    'Anti-AD': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Anti-AD/Anti-AD.yaml',
      path: './Rules/Anti-AD.yaml'
    },
    'Apple': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.yaml',
      path: './Rules/Apple.yaml'
    },
    'Apple_Domain': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple_Domain.yaml',
      path: './Rules/Apple_Domain.yaml'
    },
    'AppleDaily': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleDaily/AppleDaily.yaml',
      path: './Rules/AppleDaily.yaml'
    },
    'AppleDev': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleDev/AppleDev.yaml',
      path: './Rules/AppleDev.yaml'
    },
    'AppleFirmware': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleFirmware/AppleFirmware.yaml',
      path: './Rules/AppleFirmware.yaml'
    },
    'AppleHardware': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleHardware/AppleHardware.yaml',
      path: './Rules/AppleHardware.yaml'
    },
    'AppleID': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleID/AppleID.yaml',
      path: './Rules/AppleID.yaml'
    },
    'AppleMail': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleMail/AppleMail.yaml',
      path: './Rules/AppleMail.yaml'
    },
    'AppleMedia': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleMedia/AppleMedia.yaml',
      path: './Rules/AppleMedia.yaml'
    },
    'AppleMusic': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleMusic/AppleMusic.yaml',
      path: './Rules/AppleMusic.yaml'
    },
    'AppleNews': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleNews/AppleNews.yaml',
      path: './Rules/AppleNews.yaml'
    },
    'AppleProxy': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleProxy/AppleProxy.yaml',
      path: './Rules/AppleProxy.yaml'
    },
    'AppleTV': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppleTV/AppleTV.yaml',
      path: './Rules/AppleTV.yaml'
    },
    'AppStore': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AppStore/AppStore.yaml',
      path: './Rules/AppStore.yaml'
    },
    'ASN.China': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://raw.githubusercontent.com/VirgilClyne/GetSomeFries/main/ruleset/ASN.China.yaml',
      path: './Rules/ASN.China.yaml'
    },
    'Baidu': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Baidu/Baidu.yaml',
      path: './Rules/Baidu.yaml'
    },
    'BaiDuTieBa': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BaiDuTieBa/BaiDuTieBa.yaml',
      path: './Rules/BaiDuTieBa.yaml'
    },
    'Beats': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Beats/Beats.yaml',
      path: './Rules/Beats.yaml'
    },
    'Bilibili': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.yaml',
      path: './Rules/BiliBili.yaml'
    },
    'Bing': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bing/Bing.yaml',
      path: './Rules/Bing.yaml'
    },
    'Blizzard': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Blizzard/Blizzard.yaml',
      path: './Rules/Blizzard.yaml'
    },
    'ByteDance': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ByteDance/ByteDance.yaml',
      path: './Rules/ByteDance.yaml'
    },
    'CCTV': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/CCTV/CCTV.yaml',
      path: './Rules/CCTV.yaml'
    },
    'ChinaMedia': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ChinaMedia/ChinaMedia.yaml',
      path: './Rules/ChinaMedia.yaml'
    },
    'Chromecast': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Chromecast/Chromecast.yaml',
      path: './Rules/chromecast.yaml'
    },
    'Claude': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Claude/Claude.yaml',
      path: './Rules/Claude.yaml'
    },
    'Copilot': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Copilot/Copilot.yaml',
      path: './Rules/Copilot.yaml'
    },
    'DingTalk': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/DingTalk/DingTalk.yaml',
      path: './Rules/DingTalk.yaml'
    },
    'Direct': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Direct/Direct.yaml',
      path: './Rules/Direct.yaml'
    },
    'Discord': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Discord/Discord.yaml',
      path: './Rules/Discord.yaml'
    },
    'Disney': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Disney/Disney.yaml',
      path: './Rules/Disney.yaml'
    },
    'Docker': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Docker/Docker.yaml',
      path: './Rules/Docker.yaml'
    },
    'DouBan': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/DouBan/DouBan.yaml',
      path: './Rules/DouBan.yaml'
    },
    'DouYin': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/DouYin/DouYin.yaml',
      path: './Rules/DouYin.yaml'
    },
    'EA': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/EA/EA.yaml',
      path: './Rules/EA.yaml'
    },
    'Epic': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Epic/Epic.yaml',
      path: './Rules/Epic.yaml'
    },
    'Facebook': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Facebook/Facebook.yaml',
      path: './Rules/Facebook.yaml'
    },
    'FitnessPlus': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/FitnessPlus/FitnessPlus.yaml',
      path: './Rules/FitnessPlus.yaml'
    },
    'Game': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/Game.yaml',
      path: './Rules/Game.yaml'
    },
    'GameDownload': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/GameDownload/GameDownload.yaml',
      path: './Rules/GameDownload.yaml'
    },
    'GameDownloadCN': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/GameDownloadCN/GameDownloadCN.yaml',
      path: './Rules/GameDownloadCN.yaml'
    },
    'GaoDe': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GaoDe/GaoDe.yaml',
      path: './Rules/GaoDe.yaml'
    },
    'Gemini': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml',
      path: './Rules/Gemini.yaml'
    },
    'GitHub': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.yaml',
      path: './Rules/GitHub.yaml'
    },
    'Google': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml',
      path: './Rules/Google.yaml'
    },
    'GoogleDrive': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GoogleDrive/GoogleDrive.yaml',
      path: './Rules/GoogleDrive.yaml'
    },
    'GoogleEarth': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GoogleEarth/GoogleEarth.yaml',
      path: './Rules/GoogleEarth.yaml'
    },
    'GoogleFCM': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GoogleFCM/GoogleFCM.yaml',
      path: './Rules/GoogleFCM.yaml'
    },
    'GoogleVoice': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GoogleVoice/GoogleVoice.yaml',
      path: './Rules/GoogleVoice.yaml'
    },
    'HoYoverse': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/HoYoverse/HoYoverse.yaml',
      path: './Rules/HoYoverse.yaml'
    },
    'Hulu': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Hulu/Hulu.yaml',
      path: './Rules/Hulu.yaml'
    },
    'HuluJP': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/HuluJP/HuluJP.yaml',
      path: './Rules/HuluJP.yaml'
    },
    'HuluUSA': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/HuluUSA/HuluUSA.yaml',
      path: './Rules/HuluUSA.yaml'
    },
    'Hupu': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Hupu/Hupu.yaml',
      path: './Rules/Hupu.yaml'
    },
    'iCloud': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/iCloud/iCloud.yaml',
      path: './Rules/iCloud.yaml'
    },
    'IMDB': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/IMDB/IMDB.yaml',
      path: './Rules/IMDB.yaml'
    },
    'Instagram': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Instagram/Instagram.yaml',
      path: './Rules/Instagram.yaml'
    },
    'Intel': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Intel/Intel.yaml',
      path: './Rules/Intel.yaml'
    },
    'iQIYI': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/iQIYI/iQIYI.yaml',
      path: './Rules/iQIYI.yaml'
    },
    'JingDong': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/JingDong/JingDong.yaml',
      path: './Rules/JingDong.yaml'
    },
    'KugouKuwo': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/KugouKuwo/KugouKuwo.yaml',
      path: './Rules/KugouKuwo.yaml'
    },
    'LastFM': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/LastFM/LastFM.yaml',
      path: './Rules/LastFM.yaml'
    },
    'Max': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Max/Max.yaml',
      path: './Rules/Max.yaml'
    },
    'MeiTuan': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/MeiTuan/MeiTuan.yaml',
      path: './Rules/MeiTuan.yaml'
    },
    'Microsoft': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml',
      path: './Rules/Microsoft.yaml'
    },
    'MicrosoftEdge': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/MicrosoftEdge/MicrosoftEdge.yaml',
      path: './Rules/MicrosoftEdge.yaml'
    },
    'MovieTV': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/MovieTV/MovieTV.yaml',
      path: './Rules/MovieTV.yaml'
    },
    'NetEase': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/NetEase/NetEase.yaml',
      path: './Rules/NetEase.yaml'
    },
    'NetEaseMusic': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/NetEaseMusic/NetEaseMusic.yaml',
      path: './Rules/NetEaseMusic.yaml'
    },
    'Netflix': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Netflix/Netflix.yaml',
      path: './Rules/Netflix.yaml'
    },
    'NGA': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/NGA/NGA.yaml',
      path: './Rules/NGA.yaml'
    },
    'OneDrive': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OneDrive/OneDrive.yaml',
      path: './Rules/OneDrive.yaml'
    },
    'OpenAI': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml',
      path: './Rules/OpenAI.yaml'
    },
    'Pandora': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Pandora/Pandora.yaml',
      path: './Rules/Pandora.yaml'
    },
    'PayPal': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PayPal/PayPal.yaml',
      path: './Rules/PayPal.yaml'
    },
    'Pinduoduo': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Pinduoduo/Pinduoduo.yaml',
      path: './Rules/Pinduoduo.yaml'
    },
    'PlayStation': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PlayStation/PlayStation.yaml',
      path: './Rules/PlayStation.yaml'
    },
    'Porn': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Porn/Porn.yaml',
      path: './Rules/Porn.yaml'
    },
    'PrivateTracker': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/PrivateTracker/PrivateTracker.yaml',
      path: './Rules/PrivateTracker.yaml'
    },
    'Proxy': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Proxy/Proxy.yaml',
      path: './Rules/Proxy.yaml'
    },
    'Qobuz': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Qobuz/Qobuz.yaml',
      path: './Rules/Qobuz.yaml'
    },
    'Rarbg': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Rarbg/Rarbg.yaml',
      path: './Rules/Rarbg.yaml'
    },
    'Reddit': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Reddit/Reddit.yaml',
      path: './Rules/Reddit.yaml'
    },
    'Reject': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Reject/Reject.yaml',
      path: './Rules/Reject.yaml'
    },
    'Rockstar': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Rockstar/Rockstar.yaml',
      path: './Rules/Rockstar.yaml'
    },
    'Scholar': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Scholar/Scholar.yaml',
      path: './Rules/Scholar.yaml'
    },
    'Sina': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Sina/Sina.yaml',
      path: './Rules/Sina.yaml'
    },
    'Siri': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Siri/Siri.yaml',
      path: './Rules/Siri.yaml'
    },
    'SMZDM': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/SMZDM/SMZDM.yaml',
      path: './Rules/SMZDM.yaml'
    },
    'Sony': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Sony/Sony.yaml',
      path: './Rules/Sony.yaml'
    },
    'SoundCloud': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/SoundCloud/SoundCloud.yaml',
      path: './Rules/SoundCloud.yaml'
    },
    'Speedtest': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Speedtest/Speedtest.yaml',
      path: './Rules/Speedtest.yaml'
    },
    'Spotify': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Spotify/Spotify.yaml',
      path: './Rules/Spotify.yaml'
    },
    'Steam': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Steam/Steam.yaml',
      path: './Rules/Steam.yaml'
    },
    'SteamCN': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/SteamCN/SteamCN.yaml',
      path: './Rules/SteamCN.yaml'
    },
    'Supercell': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Supercell/Supercell.yaml',
      path: './Rules/Supercell.yaml'
    },
    'SystemOTA': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/SystemOTA/SystemOTA.yaml',
      path: './Rules/SystemOTA.yaml'
    },
    'Teams': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Teams/Teams.yaml',
      path: './Rules/Teams.yaml'
    },
    'Telegram': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml',
      path: './Rules/Telegram.yaml'
    },
    'Tencent': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Tencent/Tencent.yaml',
      path: './Rules/Tencent.yaml'
    },
    'TencentLoLMobile': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/TencentLoLMobile/TencentLoLMobile.yaml',
      path: './Rules/TencentLoLMobile.yaml'
    },
    'TencentVideo': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TencentVideo/TencentVideo.yaml',
      path: './Rules/TencentVideo.yaml'
    },
    'TestFlight': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TestFlight/TestFlight.yaml',
      path: './Rules/TestFlight.yaml'
    },
    'TIDAL': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TIDAL/TIDAL.yaml',
      path: './Rules/TIDAL.yaml'
    },
    'TikTok': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TikTok/TikTok.yaml',
      path: './Rules/TikTok.yaml'
    },
    'Tmdb': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Tmdb/Tmdb.yaml',
      path: './Rules/Tmdb.yaml'
    },
    'TVB': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TVB/TVB.yaml',
      path: './Rules/TVB.yaml'
    },
    'Twitter': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml',
      path: './Rules/Twitter.yaml'
    },
    'Ubuntu': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Ubuntu/Ubuntu.yaml',
      path: './Rules/Ubuntu.yaml'
    },
    'Usenet': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/laobanbiefangcu/ios_rule_script/master/rule/Clash/Usenet/Usenet.yaml',
      path: './Rules/Usenet.yaml'
    },
    'WeChat': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/WeChat/WeChat.yaml',
      path: './Rules/WeChat.yaml'
    },
    'Weibo': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Weibo/Weibo.yaml',
      path: './Rules/Weibo.yaml'
    },
    'Whatsapp': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Whatsapp/Whatsapp.yaml',
      path: './Rules/Whatsapp.yaml'
    },
    'Wikimedia': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Wikimedia/Wikimedia.yaml',
      path: './Rules/Wikimedia.yaml'
    },
    'WildRift': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/WildRift/WildRift.yaml',
      path: './Rules/WildRift.yaml'
    },
    'Xbox': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Xbox/Xbox.yaml',
      path: './Rules/Xbox.yaml'
    },
    'XiaoMi': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/XiaoMi/XiaoMi.yaml',
      path: './Rules/XiaoMi.yaml'
    },
    'Youku': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Youku/Youku.yaml',
      path: './Rules/Youku.yaml'
    },
    'YouTube': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml',
      path: './Rules/YouTube.yaml'
    },
    'YouTubeMusic': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTubeMusic/YouTubeMusic.yaml',
      path: './Rules/YouTubeMusic.yaml'
    },
    'cn_domain': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      url: 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs',
      path: './MetaCubeX/cn_domain.yaml'
    },
    'CustomDirect': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/clash/direct.txt',
      path: './ruleset/custom/CustomDirect.yaml'
    },
    'CustomProxy': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/clash/proxy.txt',
      path: './ruleset/custom/CustomProxy.yaml'
    },
    'direct': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt',
      path: './ruleset/loyalsoldier/direct.yaml'
    },
    'reject': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt',
      path: './ruleset/loyalsoldier/reject.yaml'
    },
    'cncidr': {
      ...ruleSetTemplates.RuleSet_ipcidr,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt',
      path: './ruleset/loyalsoldier/cncidr.yaml'
    },
    'lancidr': {
      ...ruleSetTemplates.RuleSet_ipcidr,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt',
      path: './ruleset/loyalsoldier/lancidr.yaml'
    },
    'icloud': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt',
      path: './ruleset/loyalsoldier/icloud.yaml'
    },
    'apple': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt',
      path: './ruleset/loyalsoldier/apple.yaml'
    },
    'tld-not-cn': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt',
      path: './ruleset/loyalsoldier/tld-not-cn.yaml'
    },
    'fakeip-filter': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/fakeip-filter.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/fakeip-filter.mrs'
    },
    'applications': {
      ...ruleSetTemplates.RuleSet_classical_text,
      path: './rules/applications.list',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/applications.list'
    },
    'private': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/private.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/private.mrs'
    },
    'ads': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/ads.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/ads.mrs'
    },
    'microsoft-cn': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/microsoft-cn.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/microsoft-cn.mrs'
    },
    'apple-cn': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/apple-cn.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/apple-cn.mrs'
    },
    'google-cn': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/google-cn.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/google-cn.mrs'
    },
    'games-cn': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/games-cn.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/games-cn.mrs'
    },
    'primevideo': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/primevideo.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/primevideo.mrs'
    },
    'networktest': {
      ...ruleSetTemplates.RuleSet_classical_text,
      path: './rules/networktest.list',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/networktest.list'
    },
    'proxy': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/proxy.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/proxy.mrs'
    },
    'cn': {
      ...ruleSetTemplates.RuleSet_domain_mrs,
      path: './rules/cn.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/cn.mrs'
    },
    'netflixip': {
      ...ruleSetTemplates.RuleSet_ipcidr_mrs,
      path: './rules/netflixip.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/netflixip.mrs'
    },
    'telegramip': {
      ...ruleSetTemplates.RuleSet_ipcidr_mrs,
      path: './rules/telegramip.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/telegramip.mrs'
    },
    'privateip': {
      ...ruleSetTemplates.RuleSet_ipcidr_mrs,
      path: './rules/privateip.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/privateip.mrs'
    },
    'cnip': {
      ...ruleSetTemplates.RuleSet_ipcidr_mrs,
      path: './rules/cnip.mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/cnip.mrs'
    },
    'steam': {
      ...ruleSetTemplates.RuleSet_classical,
      url: 'https://fastly.jsdelivr.net/gh/yangtb2024/Mihomo-Rules@refs/heads/main/Steam.txt',
      path: './ruleset/yangtb2024/steam.yaml'
    },
    'greatfire': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt',
      path: './ruleset/Loyalsoldier/greatfire.yaml'
    },
    'AD': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/AD.yaml',
      path: './ruleset/earoftoast/AD.yaml'
    },
    'EasyList': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/EasyList.yaml',
      path: './ruleset/earoftoast/EasyList.yaml'
    },
    'EasyListChina': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/EasyListChina.yaml',
      path: './ruleset/earoftoast/EasyListChina.yaml'
    },
    'EasyPrivacy': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/EasyPrivacy.yaml',
      path: './ruleset/earoftoast/EasyPrivacy.yaml'
    },
    'ProgramAD': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/ProgramAD.yaml',
      path: './ruleset/earoftoast/ProgramAD.yaml'
    },
    '秋风广告规则': {
      ...ruleSetTemplates.RuleSet_domain,
      url: 'https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml',
      path: './ruleset/AWAvenue-Ads-Rule-Clash.yaml'
    }
  };

  params["rule-providers"] = ruleProviders;
  params["rules"] = rules;
}

function getProxiesByRegex(params, regex) {
  const matchedProxies = params.proxies.filter((e) => regex.test(e.name)).map((e) => e.name);
  return matchedProxies.length > 0 ? matchedProxies : ["COMPATIBLE"];
}

function getManualProxiesByRegex(params, regex) {
  const matchedProxies = params.proxies.filter((e) => regex.test(e.name)).map((e) => e.name);
  return matchedProxies.length > 0 ? matchedProxies : ["COMPATIBLE"];
}
