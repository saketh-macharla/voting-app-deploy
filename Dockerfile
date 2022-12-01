FROM mongo:4.2-rc-bionic
COPY sqlscript.js /docker-entrypoint-initdb.d/


