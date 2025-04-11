```markdown
# Proxy Suite Configuration Toolkit

![GitHub release](https://img.shields.io/github/v/release/yourusername/repo)
![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Cross--Platform-success)

一站式代理工具配置解决方案，包含Clash Verge、Mihomo Party、Sing-box的优化配置模板与智能规则集。

## 🌟 功能特性
- **多协议支持**：覆盖Clash Meta内核/Mihomo、Sing-box等主流代理工具
- **智能分流规则**：
  - 内置广告拦截/隐私保护/反欺诈规则（基于Steven Black列表）
  - 流媒体/CDN/游戏平台智能分流
  - 支持`DOMAIN-SUFFIX`/`IP-CIDR`/`GEOIP`等多维匹配
- **开箱即用模板**：
  - Clash Verge扩展脚本（支持负载均衡/防封IP策略）
  - Mihomo覆写配置文件（含订阅转换模板）
  - Sing-box类型定义文件（TypeScript支持）

## 🚀 快速开始
### 配置文件结构
```bash
├── clash-verge/
│   ├── Rules/          # 自定义规则文件
│   └── Scripts/           # 扩展脚本（轮询/散列策略）
├── MihomoParty/
│   └── Scripts/           # 扩展脚本（轮询/散列策略）
└── singbox/
    └── Rules/         # 规则集（JSON格式）

### 配置示例（Clash Verge）
```javascript
// 负载均衡脚本示例（clash-verge/scripts/load-balance.js）
const groupBaseOption = {
  "interval": 300,
  "strategy": "round-robin",
  "icon": "https://example.com/balance.svg"  // 自定义图标支持
};
```

### 规则应用（Mihomo Party）
1. 下载[覆写配置文件](https://github.com/Ckrvxr/MihomoRules/raw/main/Override/MihomoParty.yaml)
2. 在GUI中启用`Global Application`开关
3. 使用订阅转换模板：
   ```bash
   https://api.subconv.com?config=./subconverter.yaml&target=clash&url=YOUR_SUB_URL
   ```

## 🔧 高级配置
### Sing-box规则生成
通过JSON规则文件自动生成`.srs`配置：
```json
// rule-sets/game-cdn.json
{
  "rules": [
    {"domain": "steamcontent.com", "outbound": "direct"},
    {"ip-cidr": "192.0.2.0/24", "port": 443}
  ]
}
```
运行生成脚本：
```bash
deno run --allow-write generate-singbox-rules.ts  # 基于TypeScript类型验证
```

## 🤝 贡献指南
欢迎通过以下方式参与改进：
1. 提交Issue报告规则失效/配置优化建议
2. 通过PR提交新的分流规则（需附带测试用例）
3. 完善文档翻译（中英双语支持）

## 📜 许可证
本项目采用 [Apache-2.0 License](LICENSE)，使用即表示同意：
- 禁止商业倒卖配置模板
- 引用规则需注明原始来源

---

> 📌 推荐搭配工具：[Mihomo Party GUI](https://github.com/pompurin404/mihomo-party) | [Sing-box文档](https://sing-box.sagernet.org)
