FROM ghub.webterren.com/nginx
COPY dist/ /usr/share/nginx/html/
# 将项目根目录的nginx配置文件放在docker容器中的nginx子配置文件夹目录下
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf