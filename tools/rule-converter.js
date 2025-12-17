#!/usr/bin/env node

/**
 * 规则格式转换工具
 * 支持在不同代理工具的规则格式之间转换
 */

const fs = require('fs');
const path = require('path');

class RuleConverter {
    constructor() {
        this.supportedFormats = ['clash', 'mihomo', 'sing-box'];
    }

    /**
     * 将 Clash YAML 格式转换为 Mihomo 列表格式
     */
    clashToMihomo(clashYaml) {
        const lines = clashYaml.split('\n');
        const result = [];

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('- ') || trimmed.startsWith('DOMAIN-') || trimmed.startsWith('IP-') || trimmed.startsWith('PROCESS-')) {
                const rule = trimmed.replace(/^-?\s*/, '').replace(/,/g, ',');
                if (rule && !rule.startsWith('#')) {
                    result.push(rule);
                }
            }
        }

        return result.join('\n');
    }

    /**
     * 将 Mihomo 列表格式转换为 Clash YAML 格式
     */
    mihomoToClash(mihomoList) {
        const lines = mihomoList.split('\n');
        const result = ['payload:'];

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                result.push(`  - ${trimmed}`);
            }
        }

        return result.join('\n');
    }

    /**
     * 将规则转换为 Sing-box JSON 格式
     */
    toSingBox(rules, type = 'domain_suffix') {
        const lines = rules.split('\n');
        const ruleSet = [];

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const parts = trimmed.split(',');
                if (parts.length >= 2) {
                    const ruleType = parts[0].toLowerCase();
                    const value = parts[1];

                    let singboxRule;
                    switch (ruleType) {
                        case 'domain-suffix':
                            singboxRule = { domain_suffix: [value] };
                            break;
                        case 'domain':
                            singboxRule = { domain: [value] };
                            break;
                        case 'domain-keyword':
                            singboxRule = { domain_keyword: [value] };
                            break;
                        case 'ip-cidr':
                            singboxRule = { ip_cidr: [value] };
                            break;
                        case 'process-name':
                            singboxRule = { process_name: [value] };
                            break;
                        default:
                            continue;
                    }

                    ruleSet.push(singboxRule);
                }
            }
        }

        return JSON.stringify({ rules: ruleSet }, null, 2);
    }

    /**
     * 转换文件
     */
    convertFile(inputPath, outputPath, fromFormat, toFormat) {
        try {
            const content = fs.readFileSync(inputPath, 'utf8');
            let result;

            if (fromFormat === 'clash' && toFormat === 'mihomo') {
                result = this.clashToMihomo(content);
            } else if (fromFormat === 'mihomo' && toFormat === 'clash') {
                result = this.mihomoToClash(content);
            } else if (toFormat === 'sing-box') {
                result = this.toSingBox(content);
            } else {
                throw new Error(`不支持从 ${fromFormat} 到 ${toFormat} 的转换`);
            }

            fs.writeFileSync(outputPath, result, 'utf8');
            console.log(`✅ 转换完成: ${inputPath} -> ${outputPath}`);

        } catch (error) {
            console.error(`❌ 转换失败: ${error.message}`);
        }
    }

    /**
     * 批量转换目录中的文件
     */
    convertDirectory(inputDir, outputDir, fromFormat, toFormat) {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const files = fs.readdirSync(inputDir);

        for (const file of files) {
            const inputPath = path.join(inputDir, file);
            const stat = fs.statSync(inputPath);

            if (stat.isFile()) {
                const ext = path.extname(file);
                let outputFile = file;

                // 根据目标格式调整扩展名
                if (toFormat === 'clash' && ext !== '.yaml') {
                    outputFile = path.basename(file, ext) + '.yaml';
                } else if (toFormat === 'mihomo' && ext !== '.list') {
                    outputFile = path.basename(file, ext) + '.list';
                } else if (toFormat === 'sing-box' && ext !== '.json') {
                    outputFile = path.basename(file, ext) + '.json';
                }

                const outputPath = path.join(outputDir, outputFile);
                this.convertFile(inputPath, outputPath, fromFormat, toFormat);
            }
        }
    }
}

// 命令行接口
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length < 4) {
        console.log('使用方法:');
        console.log('  node rule-converter.js <输入文件/目录> <输出文件/目录> <源格式> <目标格式>');
        console.log('');
        console.log('支持格式: clash, mihomo, sing-box');
        console.log('示例:');
        console.log('  node rule-converter.js custom-rules/domains/direct.yaml output.list mihomo clash');
        console.log('  node rule-converter.js custom-rules/domains/ output/ clash sing-box');
        process.exit(1);
    }

    const [input, output, fromFormat, toFormat] = args;
    const converter = new RuleConverter();

    if (fs.statSync(input).isDirectory()) {
        converter.convertDirectory(input, output, fromFormat, toFormat);
    } else {
        converter.convertFile(input, output, fromFormat, toFormat);
    }
}

module.exports = RuleConverter;