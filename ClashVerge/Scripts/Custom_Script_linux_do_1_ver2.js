/**
 * https://linux.do/t/topic/328932
 * 代理规则配置
 * name: 规则名称
 * gfw: 是否被墙，如果为 true 则默认使用代理，如果为 true 则默认不使用代理,可手动切换节点。
 * urls: 规则集链接,可在这个仓库查找 https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/Clash/README.md
 * payload: 规则集,如果使用 payload,则 urls 失效。
 * extraProxies: 额外代理,一般不需要,去广告可以加一个REJECT
 * 
 * ts类型,看得懂的可以看，看不懂的就算了。
 * {
 *   name: string,
 *   gfw?: boolean,
 *   urls?: string | string[],
 *   payload?: string | string[],
 *   extraProxies?: string | string[],
 * }[]
 */

/**
 * @type { {name: string,gfw?: boolean,urls?: string | string[],payload?: string | string[],extraProxies?: string | string[]}[] }
 */
const proxyGrepConfig = [
  {
    name: "⛔️广告拦截", gfw: false, extraProxies: "REJECT", urls: [
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AdvertisingLite/AdvertisingLite_Classical.yaml",
      "https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/AD.yaml",
      "https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/EasyList.yaml",
      "https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/EasyListChina.yaml",
      "https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/EasyPrivacy.yaml",
      "https://fastly.jsdelivr.net/gh/earoftoast/clash-rules@main/ProgramAD.yaml",
      "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    ]
  },
  { name: "🌓linux.do", gfw: false, payload: "DOMAIN-SUFFIX,linux.do" },
  // { name: "linux.do", gfw: false, payload: ["DOMAIN-SUFFIX,linux.do","DOMAIN-SUFFIX,linux.do"] },//例子，多个规则可以用数组 
  { name: "🌪GitHub", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml" },
  {
    name: "🎞️YouTube", gfw: true, urls: [
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTubeMusic/YouTubeMusic.yaml"
    ]
  },
  { name: "🇬 Google", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml" },
  { name: "🤖openAi", gfw: true, urls: ["https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml", 
  "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.yaml"] },
  { name: "🎥Netflix", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix.yaml" },
  { name: "🖥️Twitter", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml" },
  { name: "🎵TikTok", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.yaml" },
  { name: "📘Facebook", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Facebook/Facebook.yaml" },
  { name: "Ⓜ️OneDrive", gfw: false, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OneDrive/OneDrive.yaml" },
  { name: "Ⓜ️Microsoft", gfw: false, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml" },
  { name: "🎮Steam", gfw: false, urls: ["https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Steam/Steam.yaml", 
  "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/SteamCN/SteamCN.yaml", 
  "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Majsoul/Majsoul.yaml"
  ] },
  { name: "🎯Cloudflare", gfw: false, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Cloudflare/Cloudflare.yaml" },
  { name: "📽️Bahamut", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Bahamut/Bahamut.yaml" },
  { name: "📺BiliBiliIntl", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/BiliBiliIntl/BiliBiliIntl.yaml" },
  {
    name: "🛡️Domestic website", gfw: false, urls: [
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
      "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/direct.yaml"
    ]
  },
  { name: "🚫🇯🇵NoJP website", gfw: true, urls: "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/NoJP.yaml" },
  { name: "🇯🇵JP website", gfw: true, urls: "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/JP.yaml" },
  {
    name: "🌍Foreign website", gfw: true, urls: [
      "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/proxy.yaml",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
      "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt", 
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Global/Global_Classical.yaml"
    ]
  },
]


function main(config) {
  // GPL3.0 license. origin https://linux.do/t/topic/328932 (请保留此注释, author 按需修改)
  // author : picpi https://linux.do/t/topic/328932


  const proxies = config.proxies;
  //创建域名规则组
  function createRuleProviderUrl(url) {
    return {
      "type": "http",
      "interval": 86400,
      "behavior": "classical",
      "format": "yaml",
      "url": url
    }
  }
  //创建payload对应的规则
  function createPayloadRules(payload, name) {
    const rules = [];
    const payloads = Array.isArray(payload) ? payload : [payload];
    for (const item of payloads) {
      const p = item.split(",");
      let pushIndex = p.length;
      if (p[p.length - 1].toLocaleLowerCase() == "no-resolve") {
        pushIndex--;
      }
      p.splice(pushIndex, 0, name.replaceAll(",", "-"));
      rules.push(p.join(","));
    }
    console.log(rules);
    return rules;
  }
  //被墙默认规则
  function createGfwProxyGrep(name, addProxies) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
      "name": name,
      "type": "select",
      "proxies": [...addProxies, "🛩节点选择", "🚫🇯🇵自动选择(NoJP)", "🇯🇵自动选择(JP)", "DIRECT"],
      "include-all": true,
    }
  }
  //默认不被墙规则
  function createProxyGrep(name, addProxies) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
      "name": name,
      "type": "select",
      "proxies": [...addProxies, "DIRECT", "🛩节点选择"],
      "include-all": true,
    }
  }

  const proxyGroups = [];
  const proxyGfwGroups = [];
  const ruleProviders = {};
  const rules = [];
  for (const { name, gfw, urls, payload, extraProxies } of proxyGrepConfig) {
    if (gfw) {
      proxyGfwGroups.push(createGfwProxyGrep(name, extraProxies));
    } else {
      proxyGroups.push(createProxyGrep(name, extraProxies));
    }
    if (payload) {
      rules.push(...createPayloadRules(payload, name));
    } else {
      const urlList = urls ? (Array.isArray(urls) ? urls : [urls]) : [];
      for (const index in urlList) {
        const theUrl = urlList[index];
        const iName = `${name}-rule${index != 0 ? `-${index}` : ''}`;
        ruleProviders[iName] = createRuleProviderUrl(theUrl);
        rules.push(`RULE-SET,${iName},${name}`);
      }
    }
  }


  return {
    mode: "rule",
    "find-process-mode": "strict",
    "global-client-fingerprint": "chrome",
    "unified-delay": true, //更换延迟计算方式，去除握手等额外延迟
    "tcp-concurrent": true, //TCP 并发
    "geox-url": {
      geoip: "https://ghgo.xyz/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      geosite: "https://ghgo.xyz/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    },
    dns: {
      enable: true,
      ipv6: false,
      "enhanced-mode": "fake-ip",
      "fake-ip-filter": [
        "*",
        "+.lan",
        "+.local",
        "localhost.ptlogin2.qq.com",
        "dns.msftncsi.com",
        "www.msftncsi.com",
        "www.msftconnecttest.com",
      ],
      nameserver: [
        "system",
        "114.114.114.114",
        "223.5.5.5",
        "https://dns.alidns.com/dns-query",//阿里云
        "https://doh.pub/dns-query",//腾讯
      ],
      fallback: [
        "https://1.0.0.1/dns-query",//Cloudflare
        "https://sky.rethinkdns.com",//rethinkdns
        "https://dns.alidns.com/dns-query",//阿里云
        "https://doh.pub/dns-query",//腾讯
      ],
      "fallback-filter": {
        geoip: true,
        "geoip-code": "CN",
        geosite: ["gfw"],
        domain: [
          '+.google.com',
          '+.facebook.com',
          '+.youtube.com',
        ]
      }
    },
    //代理
    proxies: proxies,
    "proxy-groups": [
      {
        "name": "🛡️国内网站",
        "type": "select",
        "proxies": ["DIRECT", "🛩节点选择"],
        "include-all": true,
        "url": "https://www.baidu.com/favicon.ico"
      },
      ...proxyGroups,
      {
        "name": "🐟 漏网之鱼",
        "type": "select",
        "url": "https://www.bing.com/favicon.ico",
        "proxies": ["DIRECT", "🛩节点选择"],
        "include-all": true,
      },
      ...proxyGfwGroups,
      {
        "name": "🧱被墙网站",
        "type": "select",
        "proxies": ["🛩节点选择", "DIRECT"],
        "include-all": true,
      },
      {
        "name": "🛩节点选择",
        "type": "select",
        "proxies": ["🚀自动选择(最低延迟)", "🚫🇯🇵自动选择(NoJP)", "🌐负载均衡", "DIRECT"],
        "include-all": true,
      },
      {
        "name": "🚀自动选择(最低延迟)",
        "type": "url-test",
        "tolerance": 20,
        "include-all": true,
        "url": "https://play-lh.googleusercontent.com/1UF2WCBNl4918bNk8JsILadL9-agIjRtMpdjuPgx2ohsxnQyspdWDwYMquW1-r8mSQOSjSLOY4g=w720-rw",
      },
      {
        "name": "🚫🇯🇵自动选择(NoJP)",
        "type": "url-test",
        "tolerance": 20,
        "include-all": true,
        "filter": "^(?!.*(JP|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|Japan)).*",
        "url": "https://play-lh.googleusercontent.com/1UF2WCBNl4918bNk8JsILadL9-agIjRtMpdjuPgx2ohsxnQyspdWDwYMquW1-r8mSQOSjSLOY4g=w720-rw",
      },
      {
        "name": "🇯🇵自动选择(JP)",
        "type": "url-test",
        "tolerance": 20,
        "include-all": true,
        "filter": "^(?=.*(JP|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|Japan)).*",
        "url": "https://play-lh.googleusercontent.com/1UF2WCBNl4918bNk8JsILadL9-agIjRtMpdjuPgx2ohsxnQyspdWDwYMquW1-r8mSQOSjSLOY4g=w720-rw",
      },
      {
        "name": "🌐负载均衡",
        "type": "load-balance",
        "include-all": true,
        "hidden": true,
        "strategy": "sticky-sessions",
        "url": "https://play-lh.googleusercontent.com/1UF2WCBNl4918bNk8JsILadL9-agIjRtMpdjuPgx2ohsxnQyspdWDwYMquW1-r8mSQOSjSLOY4g=w720-rw",
      }
    ],
    "rule-providers": ruleProviders,
    rules: [
      ...rules,
      "GEOSITE,gfw,🧱被墙网站",
      "GEOIP,CN,🛡️国内网站",
      "MATCH,🐟 漏网之鱼"
    ]
  };
}
