FROM rprakashg/hugo-docker as builder
RUN mkdir -p /var/www/hugo
COPY . /var/www/hugo
WORKDIR /var/www/hugo
RUN hugo

FROM bitnami/nginx
COPY --from=builder /var/www/hugo/public /opt/bitnami/nginx/html
USER 1001
ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "/run.sh" ]