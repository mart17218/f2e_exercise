FROM nginx:1.13.7
ADD ./dist/ /usr/share/nginx/html/
EXPOSE 80/tcp