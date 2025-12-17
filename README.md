# 代理配置工具套件
# Proxy Suite Configuration Toolkit

![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Cross--Platform-success)
![Version](https://img.shields.io/badge/Version-2.0-green.svg)

一站式代理工具配置解决方案，提供统一的规则管理和多工具配置支持。

## 📁 项目结构

```
CustomRules/
├── 📁 custom-rules/              # 🎯 通用自定义规则（核心）
│   ├── 📁 domains/              # 域名规则（直连/代理/拒绝）
│   ├── 📁 ip-ranges/           # IP段规则
│   └── 📁 processes/           # 进程规则
├── 📁 mihomo/                  # ⚡ Mihomo配置
│   ├── 📁 scripts/             # 覆写脚本
│   ├── 📁 overwrite-configs/   # 覆写配置文件
│   └── 📁 templates/           # 配置模板
├── 📁 sing-box/                # 📦 Sing-box专用配置
│   ├── 📁 rules/               # JSON规则文件
│   └── 📁 templates/           # 配置模板
├── 📁 docs/                    # 📚 文档目录
├── 📁 tools/                   # 🛠️ 工具脚本
└── 📄 README.md               # 本文档
```

## 🌟 核心特性

### 🎯 统一规则管理
- **通用规则集合**：自定义规则可在不同代理工具间复用
- **分类存储**：域名、IP段、进程规则分类管理
- **格式转换**：自动支持不同工具的规则格式

### ⚡ Mihomo 优化
- **智能覆写脚本**：自动优化基础配置、DNS、代理组
- **游戏优化**：针对游戏流量的专门优化
- **订阅转换**：支持多种订阅格式转换

### 📦 多工具支持
- **Mihomo**：完整配置和脚本支持
- **Sing-box**：JSON格式规则和模板
- **兼容性**：支持Clash、Mihomo等主流工具

### 🛠️ 实用工具
- **规则转换器**：在不同格式间转换规则
- **配置验证器**：检查配置文件语法正确性
- **批量更新器**：批量更新和同步规则

## 🚀 快速开始

### 1. 选择你的代理工具
- **Mihomo用户** → 查看 `mihomo/README.md`
- **Sing-box用户** → 查看 `sing-box/rules/`

### 2. 添加自定义规则
在 `custom-rules/` 目录中添加你的规则：
- 域名规则 → `custom-rules/domains/`
- IP段规则 → `custom-rules/ip-ranges/`
- 进程规则 → `custom-rules/processes/`

### 3. 使用工具脚本
```bash
# 转换规则格式
node tools/rule-converter.js input.yaml output.list clash mihomo

# 验证配置
node tools/config-validator.js config.yaml
```

## 📖 详细文档

- **[配置使用指南](docs/config-guide.md)** - 完整的使用说明和最佳实践
- **[自定义规则说明](custom-rules/README.md)** - 规则添加和管理方法
- **[Mihomo配置](mihomo/README.md)** - 专用配置说明

## 🔄 从旧版本迁移

如果你有旧版本的配置文件，可以使用以下方式迁移：

1. **自动迁移**：使用 `tools/migrator.js` 脚本
2. **手动迁移**：按照新目录结构重新组织文件
3. **保留备份**：迁移前请备份现有配置

## 🤝 贡献指南

欢迎通过以下方式参与改进：

1. **提交规则**：在对应目录添加新的规则文件
2. **改进配置**：优化现有配置和脚本
3. **完善文档**：改进文档内容和示例
4. **开发工具**：开发新的工具脚本
5. **问题反馈**：报告配置问题和建议

### 提交规范
- 规则文件需要清晰的中文注释
- 配置变更需要说明用途和效果
- 文档更新需要准确详实
- 代码需要遵循项目规范

## 📜 许可证

本项目采用 [Apache-2.0 License](LICENSE)，使用时请遵守：
- ✅ 个人使用和修改
- ✅ 非商业分发和引用
- ❌ 禁止商业倒卖
- 📝 引用时需注明来源

---

> 📌 **推荐工具搭配**：
> - [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev) - 现代化Clash客户端
> - [Mihomo Party](https://github.com/mihomo-party-org/mihomo-party) - 基于Clash Meta的代理工具
> - [FlClash](https://github.com/chen08209/FlClash) - 跨平台Clash代理客户端
> - [GUI.for.SingBox](https://github.com/GUI-for-Cores/GUI.for.SingBox) - Sing-box图形界面
> - [Sparkle](https://github.com/xishang0128/sparkle) - 基于Kotlin+Spring Boot的代理工具

> 💡 **提示**：首次使用建议阅读 [配置使用指南](docs/config-guide.md) 了解详细使用方法。



