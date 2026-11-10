FROM node:22.23.4-bookworm-slim

ENV container=docker
ENV ORCA_BACKGROUND_LAUNCH=1

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends systemd dbus procps \
  && rm -rf /var/lib/apt/lists/*

STOPSIGNAL SIGRTMIN+3
RUN useradd --create-home --shell /bin/sh orca
USER orca
CMD ["/lib/systemd/systemd"]
