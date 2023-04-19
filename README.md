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

# 5.更新全部子模块
git submodule update --remote

# 6.更新指定子模块
git submodule update --remote src/modules/ModuleB

# 7.修改子模块分支
git config -f .gitmodules submodule.src/modules/ModuleA.branch a-test
```
