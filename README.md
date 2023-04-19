# CODE TEST

Vite + React

## 安装使用

```sh
# 1. 下载子模块
git submodule update --init

# 2. 安装依赖
yarn # or npm install

# 3. 运行项目
yarn dev

# 4. 打包生产环境
yarn build

# 5.添加子模块
git submodule add git@github.com:sctaisen/ModuleB.git 'src/modules/ModuleB'

# 6.更新全部子模块
git submodule update --remote

# 7.更新指定子模块
git submodule update --remote src/modules/ModuleB

# 8.修改子模块分支
git config -f .gitmodules submodule.src/modules/ModuleA.branch a-test

# 9.删除子模块
git rm --cached src/modules/ModuleB
rm -rf src/modules/ModuleB
# 删除.gitmodules文件中src/modules/ModuleB节点
# 删除.git/modules/src/modules/ModulesB文件夹
```
