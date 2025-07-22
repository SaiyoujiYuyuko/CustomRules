const proxyName = "Proxy";

function main(config) {
    if (!config.proxies || config.proxies.length === 0)
        return config;
    overwriteRules(config);
    overwriteProxyGroups(config);
    overwriteDns(config);
    addCustomRules(config)
    return config;
}

//添加自定义规则
function addCustomRules(config) {
    customRules = [
        // 在这里添加前置自定义规则
        // "DOMAIN-SUFFIX,baidu.com,DIRECT"
    ]
    config["rules"] = [...customRules, ...config["rules"]]
}

//覆写规则
function overwriteRules(params) {
    const rules = [
  // 额外自定义规则       //在此添加你想要的规则
  "RULE-SET,Custom Direct,DIRECT", 
  "RULE-SET,Custom Proxy," + proxyName, 
  "RULE-SET,Custom NoJP,Custom NoJP", 
  "RULE-SET,Custom JP,Custom JP", 
  "PROCESS-NAME,steam.exe,DIRECT",
  // Loyalsoldier 规则集
  "RULE-SET,applications,DIRECT",
  "RULE-SET,private,DIRECT",
  "RULE-SET,reject,REJECT",
  "RULE-SET,icloud,Apple",
  "RULE-SET,apple,Apple",
  "RULE-SET,google,Google",
  "RULE-SET,proxy," + proxyName,
  "RULE-SET,gfw," + proxyName,
  "RULE-SET,tld-not-cn," + proxyName,
  "RULE-SET,direct,DIRECT",
  "RULE-SET,lancidr,DIRECT,no-resolve",
  "RULE-SET,cncidr,DIRECT,no-resolve",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
        //
        "RULE-SET,Apple,Apple",
        "RULE-SET,BiliBili,BiliBili",
        "RULE-SET,Netflix,Netflix",
        "RULE-SET,Disney,Disney",
        "RULE-SET,TikTok,TikTok",
        "RULE-SET,OpenAI,OpenAI",
        "RULE-SET,SteamCN,SteamCN",
        "RULE-SET,Steam,Steam",
        "RULE-SET,Google,Google",
        "RULE-SET,PayPal,PayPal",
        "RULE-SET,Telegram,Telegram",
        "RULE-SET,Microsoft,Microsoft",
        "RULE-SET,GlobalMedia,GlobalMedia",
        "RULE-SET,ChinaMax,DIRECT",
        "RULE-SET,LAN,DIRECT",
        "MATCH," + proxyName,
    ];
    const ruleProviders = {
    // 自定义规则集
  "Custom Direct": {
    "type": "http",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/direct.yaml",
    "path": "./ruleset/Custom/direct.yaml",
    "createGroup": false
  },
    "Custom Proxy": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/proxy.yaml",
    "path": "./ruleset/Custom/proxy.yaml",
    "createGroup": false
  },
    "Custom NoJP": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/NoJP.yaml",
    "path": "./ruleset/Custom/NoJP.yaml"
  },
    "Custom JP": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/SaiyoujiYuyuko/CustomRules@refs/heads/main/ClashVerge/Rules/JP.yaml",
    "path": "./ruleset/Custom/JP.yaml"
  },
  
  "reject": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml",
    "createGroup": false
  },
  "icloud": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml",
    "createGroup": false
  },
  "apple": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml",
    "createGroup": false
  },
  "google": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml",
    "createGroup": false
  },
  "proxy": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml",
    "createGroup": false
  },
  "direct": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml",
    "createGroup": false
  },
  "private": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml",
    "createGroup": false
  },
  "gfw": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml",
    "createGroup": false
  },
  "tld-not-cn": {
    "type": "http",
    "interval": 86400,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml",
    "createGroup": false
  },
  "telegramcidr": {
    "type": "http",
    "interval": 86400,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml",
    "createGroup": false
  },
  "cncidr": {
    "type": "http",
    "interval": 86400,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml",
    "createGroup": false
  },
  "lancidr": {
    "type": "http",
    "interval": 86400,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml",
    "createGroup": false
  },
  "applications": {
    "type": "http",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml",
    "createGroup": false
  },
        //
        Apple: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple_Classical_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Apple_No_Resolve.yaml",
        },
        BiliBili: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/BiliBili_No_Resolve.yaml",
        },
        Netflix: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Netflix/Netflix_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Netflix_No_Resolve.yaml",
        },
        Disney: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Disney/Disney_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Disney_No_Resolve.yaml",
        },
        TikTok: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/TikTok/TikTok_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/TikTok_No_Resolve.yaml",
        },
        GlobalMedia: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia_Classical_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/GlobalMedia_Classical_No_Resolve.yaml",
        },
        OpenAI: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/OpenAI_No_Resolve.yaml",
        },
        Google: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Google_No_Resolve.yaml",
        },
        Microsoft: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Microsoft_No_Resolve.yaml",
        },
        PayPal: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/PayPal/PayPal_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/PayPal_No_Resolve.yaml",
        },
        Telegram: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Telegram_No_Resolve.yaml",
        },
        Steam: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Steam/Steam_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Steam_No_Resolve.yaml",
        },
        SteamCN: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/SteamCN/SteamCN_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/SteamCN_No_Resolve.yaml",
        },
        ChinaMax: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/ChinaMax/ChinaMax_Classical_No_IPv6_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/ChinaMax_Classical_No_IPv6_No_Resolve.yaml",
        },
        LAN: {
            type: "http",
            behavior: "classical",
            url: "https://raw.gitmirror.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan_No_Resolve.yaml",
            interval: 86400,
            path: "./ruleset/Lan_No_Resolve.yaml",
        },
    };
    params["rule-providers"] = ruleProviders;
    params["rules"] = rules;
}

//覆写代理组
function overwriteProxyGroups(params) {
    const allProxies = params["proxies"].map((e) => e.name);

    // 地区代理组正则匹配规则
    const regionFilterRegexs = [
        { name: "🇭🇰 Hong Kong", regex: /香港|HK|Hong|🇭🇰/ },
        { name: "🇸🇬 Singapore", regex: /新加坡|狮城|SG|Singapore|🇸🇬/ },
        { name: "🇯🇵 Japan", regex: /日本|JP|Japan|🇯🇵/ },
        { name: "🇺🇸 United States", regex: /美国|US|United States|America|🇺🇸/ },
        { name: "🇨🇳 Taiwan", regex: /台湾|TW|Taiwan|Wan|🇨🇳|🇹🇼/ },
        { name: "🇩🇪 Germany", regex: /德国|DE|Germany|🇩🇪/ },
        { name: "🇬🇧 United Kingdom", regex: /英国|UK|United Kingdom|Britain|🇬🇧/ },
        { name: "🇰🇷 South Korea", regex: /韩国|KR|South Korea|🇰🇷/ },
        { name: "🇫🇷 France", regex: /法国|FR|France|🇫🇷/ },
        { name: "🇳🇱 Netherlands", regex: /荷兰|NL|Netherlands|🇳🇱/ },
        { name: "🇮🇳 India", regex: /印度|IN|India|🇮🇳/ },
        { name: "🇹🇷 Türkiye", regex: /土耳其|TR|Türkiye|Turkey|🇹🇷/ },
        { name: "🇨🇦 Canada", regex: /加拿大|CA|Canada|🇨🇦/ },
        { name: "🇦🇺 Australia", regex: /澳大利亚|AU|Australia|🇦🇺/ },
        { name: "🇨🇭 Switzerland", regex: /瑞士|CH|Switzerland|🇨🇭/ },
        { name: "🇸🇪 Sweden", regex: /瑞典|SE|Sweden|🇸🇪/ },
        { name: "🇳🇿 New Zealand", regex: /新西兰|NZ|New Zealand|🇳🇿/ },
        { name: "🇷🇺 Russia", regex: /俄罗斯|RU|Russia|🇷🇺/ },
        { name: "🇧🇷 Brazil", regex: /巴西|BR|Brazil|🇧🇷/ },
        { name: "🇲🇾 Malaysia", regex: /马来西亚|MY|Malaysia|🇲🇾/ },
        { name: "🇮🇩 Indonesia", regex: /印度尼西亚|ID|Indonesia|🇮🇩/ },
        { name: "🇲🇽 Mexico", regex: /墨西哥|MX|Mexico|🇲🇽/ },
        { name: "🇿🇦 South Africa", regex: /南非|ZA|South Africa|🇿🇦/ },
        { name: "🇦🇹 Austria", regex: /奥地利|AT|Austria|🇦🇹/ },
        { name: "🇧🇪 Belgium", regex: /比利时|BE|Belgium|🇧🇪/ },
        { name: "🚫🇯🇵 Non-Japan", regex: /^(?!.*(日本|JP|Japan|🇯🇵)).*$/ },
    ];

    const regionProxyGroups = regionFilterRegexs
        .map((item) => {
            const proxies = getProxiesByRegex(params, item.regex);
            return {
                name: item.name,
                type: "url-test",
                url: "http://www.gstatic.com/generate_204",
                interval: 300,
                tolerance: 50,
                proxies,
            };
        })
        .filter((item) => item.proxies.length > 0);

    // 规则集代理组，基于 ruleProviders 键名，代理为所有地区代理组名称 + DIRECT（特殊规则ChinaMax和Lan）
    const ruleProviders = params["rule-providers"] || {};
    const regionGroupNames = regionProxyGroups.map((g) => g.name);

    const ruleSetProxyGroups = Object.keys(ruleProviders)
        .filter(ruleSetName => {
            // 检查是否需要创建代理组，默认为 true
            const ruleProvider = ruleProviders[ruleSetName];
            return ruleProvider.createGroup !== false;
        })
        .map((ruleSetName) => {
            let proxies;

            if (ruleSetName === "LAN" || ruleSetName === "ChinaMax" || ruleSetName === "SteamCN") {
                proxies = ["DIRECT", proxyName, ...regionGroupNames];
            } else {
                proxies = [proxyName, ...regionGroupNames, "DIRECT"];
            }

            return {
                name: ruleSetName,
                type: "select",
                proxies,
            };
        });

    const autoSelect = {
        name: "🌏 Auto",
        type: "url-test",
        url: "http://www.gstatic.com/generate_204",
        interval: 300,
        tolerance: 50,
        proxies: [...allProxies]
    }

    // Proxy 组，默认出口，包含所有地区代理组和所有节点
    const proxyGroup = {
        name: proxyName,
        type: "select",
        proxies: ["🌏 Auto", ...regionGroupNames, ...allProxies, "DIRECT"],
    };

    // 组装最终代理组数组
    const groups = [
        proxyGroup,
        autoSelect,
        ...ruleSetProxyGroups,
        ...regionProxyGroups,
    ];

    params["proxy-groups"] = groups;
}

//覆写DNS
function overwriteDns(params) {
    const cnDnsList = [
        "https://223.5.5.5/dns-query",
        "https://223.6.6.6/dns-query",
        "119.29.29.29",
        "119.28.28.28",
        "223.5.5.5",
        "223.6.6.6"
    ];

    const trustDnsList = [
        "https://cloudflare-dns.com/dns-query",
        "https://dns.google/dns-query",
        "https://dns.quad9.net/dns-query",
        "https://doh.opendns.com/dns-query",
    ];

    const dnsOptions = {
        "enable": true,
        "prefer-h3": true, // 如果DNS服务器支持DoH3会优先使用h3
        "default-nameserver": cnDnsList, // 用于解析其他DNS服务器、和节点的域名, 必须为IP, 可为加密DNS。注意这个只用来解析节点和其他的dns，其他网络请求不归他管
        "nameserver": trustDnsList, // 其他网络请求都归他管

        // 这个用于覆盖上面的 nameserver
        "nameserver-policy": {
            //[combinedUrls]: notionDns,
            "geosite:cn": cnDnsList,
            "geosite:geolocation-!cn": trustDnsList,
            // 如果你有一些内网使用的DNS，应该定义在这里，多个域名用英文逗号分割
            // '+.公司域名.com, www.4399.com, +.baidu.com': '10.0.0.1'
        },
        "fallback": trustDnsList,
        "fallback-filter": {
            "geoip": true,
            //除了 geoip-code 配置的国家 IP, 其他的 IP 结果会被视为污染 geoip-code 配置的国家的结果会直接采用，否则将采用 fallback结果
            "geoip-code": "CN",
            //geosite 列表的内容被视为已污染，匹配到 geosite 的域名，将只使用 fallback解析，不去使用 nameserver
            "geosite": ["gfw"],
            "ipcidr": ["240.0.0.0/4"],
            "domain": ["+.google.com", "+.facebook.com", "+.youtube.com"],
        },
    };

    const rawGeoxURLs = {
        "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip.dat",
        "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
        "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country.mmdb",
    };

    const otherOptions = {
        "unified-delay": true,
        "tcp-concurrent": true,
        "profile": {
            "store-selected": true,
            "store-fake-ip": true,
        },
        "sniffer": {
            "enable": true,
            "sniff": {
                "TLS": {
                    "ports": [443, 8443],
                },
                "HTTP": {
                    "ports": [80, "8080-8880"],
                    "override-destination": true,
                },
            },
        },
        "geodata-mode": true,
        "geox-url": rawGeoxURLs,
    };

    params.dns = { ...params.dns, ...dnsOptions };
    Object.keys(otherOptions).forEach((key) => {
        params[key] = otherOptions[key];
    });
}

function getProxiesByRegex(params, regex) {
    return params.proxies.filter((e) => regex.test(e.name)).map((e) => e.name);
}