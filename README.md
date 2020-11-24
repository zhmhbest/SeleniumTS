# SeleniumTS

使用Selenium和Typescript进行自动化Web测试。

## 准备

### Dependencies

```batch
npm install
```

### Driver

```batch
REM 查看ChromeVersion
DIR /B /O:N "%ProgramFiles%\Google\Chrome\Application" | FINDSTR ^[0-9]
```

根据ChromeVersion下载对应[Driver](http://npm.taobao.org/mirrors/chromedriver/)并放置到`PATH`所包含的目录下。

## 运行

```batch
npm run start
```

### 调试

在VSCode中，按下`F5`。
