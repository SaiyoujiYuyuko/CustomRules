# Mihomo 配置说明

## 目录结构

### 📁 mihomo/ - Mihomo专用配置
适用于 Mihomo（Clash Meta）代理工具的配置文件和覆写脚本。

#### scripts/ - 覆写脚本
- `main-config.js` - 主要配置脚本，包含基础选项覆写
- `subscription-converter.js` - 订阅转换脚本，用于处理不同格式的订阅
- `dns-overwrite.js` - DNS覆写脚本，优化DNS解析
- `gaming-optimizer.js` - 游戏优化脚本（预留）

#### overwrite-configs/ - 覆写配置文件
- `basic-overwrite.yaml` - 基础覆写配置，包含代理组和规则设置
- `proxy-groups.yaml` - 代理组配置模板
- `rules-overwrite.yaml` - 规则覆写配置
- `dns-overwrite.yaml` - DNS配置覆写

#### templates/ - 配置模板
- `full-config.yaml` - 完整配置模板（预留）
- `minimal-config.yaml` - 精简配置模板（预留）

## 使用方法

### 1. 使用覆写脚本
在 Mihomo 的扩展脚本功能中导入对应的 `.js` 文件：
- 主要配置：导入 `scripts/main-config.js`
- 订阅转换：导入 `scripts/subscription-converter.js`

### 2. 使用覆写配置
在配置文件的 `extends` 字段中引用：
```yaml
extends:
  - mihomo/overwrite-configs/basic-overwrite.yaml
```

### 3. 自定义配置
基于现有模板进行修改：
- 复制模板文件到对应目录
- 根据需求修改配置参数
- 在主配置中引用自定义文件

## 配置特点

### 主要功能
- 🚀 混合端口：7897
- 🌐 允许局域网连接
- 📡 严格进程查找模式
- 🛡️ 流量嗅探和防探测
- ⚡ TCP并发和统一延迟
- 🎮 游戏流量优化

### 代理组配置
- 自动故障转移
- 健康检查
- 多路复用支持
- 地理位置分流

### DNS优化
- 自定义DNS服务器
- Fake-IP过滤
- HOSTS覆写
- 域名解析策略

## 注意事项

- 脚本文件需要确保兼容性
- 配置文件中的路径需要相对正确
- 定期更新规则和DNS配置
- 测试配置文件语法正确性