FROM golang:1.16-alpine AS builder

WORKDIR /api

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /docker-gs-ping


FROM alpine:latest

WORKDIR /apibuild

COPY --from=builder /docker-gs-ping /api

EXPOSE 8080

CMD ["/api"]
