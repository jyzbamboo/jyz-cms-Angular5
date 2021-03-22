# jyz-CMS
cms系统（采用响应式界面，包含天气，文章等页面），使用了Angular5, bootstrap, layui等
需要node和npm，请先在终端/控制台窗口中运行命令 node -v 和 npm -v，来验证一下你正在运行 node 6.9.x 和 npm 3.x.x 以上的版本。 更老的版本可能会出现错误，更新的版本则没问题。
需要先安装 [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## 安装系统
先下载代码到jyz-cms文件夹
```控制台
$ cd jyz-cms
# 安装包
$ npm install
# 开始运行系统， 在浏览器输入地址 `http://localhost:4200/` 即可使用
$ npm start
# 编译系统，编译后文件会放在根目录的dist文件夹里
# 编译后的文件，加上.htaccess文件就可以正常访问使用了
$ npm run build
```

```.htacess文件
RewriteEngine on  
# Don't rewrite files or directories  
RewriteCond %{REQUEST_FILENAME} -f [OR]  
RewriteCond %{REQUEST_FILENAME} -d  
RewriteRule ^ - [L]  
  
# Rewrite everything else to index.html to allow html5 state links  
RewriteRule ^ index.html [L]  
```
