// const fs = require('fs')
//
// // process.env.GIT_PARAMS 是git commit msg对应信息存储目录
// // console.log(process.env.GIT_PARAMS)
// const content = fs.readFileSync(process.env.GIT_PARAMS, 'utf-8')
//
// console.log(content);
//
// // process.exit(code) 判断当前进程是否退出 0 1
// process.exit(1) // 让进程失败退出 使校验不通过
// Invoked on the commit-msg git hook by yorkie.

// 处理命令行样式
const chalk = require('chalk')
console.log(process.env.GIT_PARAMS);
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?(.{1,10})?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
	if (!mergeRe.test(msg)) {
		console.log(msg)
		console.error(
			`  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
				`invalid commit message format.`
			)}\n\n` +
			chalk.red(
				`  Proper commit message format is required for automated changelog generation. Examples:\n\n`
			) +
			`    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
			`    ${chalk.green(
				`fix(v-model): handle events on blur (close #28)`
			)}\n\n` +
			chalk.red(
				`  See https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md for more details.\n`
			)
		)
		process.exit(1)
	}
}
