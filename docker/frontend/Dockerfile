#FROM httpd:alpine
FROM php:7.2.7-apache

RUN a2enmod rewrite
RUN a2enmod proxy
RUN a2enmod proxy_http
#RUN rc-service apache2 restart
RUN service apache2 restart

# RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# RUN { \
  # echo 'IncludeOptional conf.d/*.conf'; \
# } >> /usr/local/apache2/conf/httpd.conf \
  # && mkdir /usr/local/apache2/conf.d
