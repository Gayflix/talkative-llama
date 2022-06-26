## Backend WebSocket API serving the LLM


### Test from terminal

Install `websocat` command-line client for WebSockets.

```
$ cargo install --feature=ssl websocat
```

Start websocket server

**Note!**
* Without the target-cpu=native flag, the ge