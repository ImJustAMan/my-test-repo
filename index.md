## git

### 简介
版本控制工具 svn
git 分布式版本控制工具

mac 查看隐藏文件 `defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder`

`command + shift + .`

- HEAD 指针 指向当前分支

- git init: 初始化git仓库

- git status: 查看文件状态

- git ls-files: 查看本地仓库中存储的文件

- git add

  - 将文件从工作区推送至暂存区
  - git add . 将全部文件推送至暂存区(不包含忽略文件)

- git commit 

  - 如果不使用参数 会打开对应系统中的编辑器
  - -m 追加提交信息 不去打开编辑器
  - -a 将已追踪状态(并处于已修改状态)的文件进行提交

- git reset 

  - --soft 将仓库文件回退至目标版本 将改动文件放于暂存区
  - --mixed 将仓库文件回退至目标版本 将改动文件放于工作区
  - --hard 将全部区域(不包含远程仓库)回退至目标版本

- git rm 

  - --cached 从暂存区删除
  - 直接执行 文件会从全部区域删除
  - 删除时会添加一个删除的提交记录

- git文件状态

  - Untracked 未追踪文件
  - modified 已修改
  - staged 已暂存
  - committed 已提交

- git diff

  - 查看差异
  - git diff <branch name> 查看本地仓库和对应分支的差异

- git branch

  - 查看分支 分支相当于当前项目的一个备份 分支与分支之间独立
  - git branch <branch name>  新建分支
  - git branch -d <branch name> 删除分支 无法删除未合并分支
  - git branch -D <branch name>强制删除分支

- git merge

  - 合并分支

  - ```html
    <<<<<<< 当前分支代码
    =======
    
    
    >>>>>>> 被合并分支代码
    ```

  - 

- git checkout

  - git checkout <branch name> 切换分支

- git log: 查看提交信息

  - git log --oneline 通过一行展示提交信息

- git remote

  - 关联远程仓库
  - add <repo name> <repo url> 添加仓库关联信息
  - -v 查看远程仓库信息

- git revert

  - 撤销某次执行 会添加一个revert提交记录
  - git revert <commit id>

- gitignore文件

  - 让git忽略文件

1. 工作区 当前工作目录(初始化git仓库后)
   - git add <file>： 文件推送至暂存区 ↓
   - git rm --cached <file>：将文件从暂存区删除(会将文件重置为未追踪状态 同时会在暂存区生成一个deleted的状态)↑
   - git restore --staged <file>：将文件从暂存区取回工作区↑
2. 暂存区
   - git commit -m '' 提交文件至本地仓库↓
3. 本地仓库
   - git reset --soft <commit id> 将仓库文件回退至目标版本 将改动文件放于暂存区↑
   - git reset <commit id> 将仓库文件回退至目标版本 将改动文件放于工作区↑↑
   - git push 将仓库文件推送至远程仓库↓
4. 远程仓库
   - git pull 将远端仓库文件拉取至本地仓库(工作区)
   - git fetch + git merge
