FROM golang:1.13.5 as builder

# 设置go mod proxy 国内代理
# 设置golang path
ENV GOPROXY=https://goproxy.cn \
    GO111MODULE=on \
    CGO_ENABLED=0
WORKDIR /ginvue
COPY . .
RUN go env && go list && go build -tags netgo -o app main.go

FROM alpine:3.7
COPY --from=builder /ginvue/app /app
# 拷贝配置文件, 资源目录,日志目录到运行时所在目录(防止找不到文件错误,因为运行时是在/目录, 会在/目录下寻找配置文件)
COPY config.yaml /config.yaml
COPY resource /resource
COPY log /log
EXPOSE 8888
CMD /app
