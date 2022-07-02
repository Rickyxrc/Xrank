# Xrank

## this is a pre-version!

一个实时排行榜,基于node.js,使用了docker和mysql。

## 安装方式

可以直接使用docker镜像进行安装
镜像名称`rickyxrc/xrank`

需要指定如下环境变量：
- MYSQL_HOST
- MYSQL_PORT(非必须，默认`3306`)
- MYSQL_USER
- MYSQL_DATABASE
- MYSQL_PASSWORD