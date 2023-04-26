<h1 align=\"center\" style=\"font-family:Papyrus; font-size:4em;\"> Talkative Llama </h1>
<p align=\"center\">
  <img src=\"https://github.com/Gayflix/talkative-llama/blob/main/docs/images/talkative-llama.jpg\" width=\"350\" \">
</p>

<p align=\"center\">
    <em>A robust chat app leveraging Llama LLMs</em>
</p>

<p align=\"center\">
    <a href=\"https://rust-lang.github.io/rfcs/2495-min-rust-version.html\"><img src=\"https://img.shields.io/badge/rustc-1.60+-blue.svg\" alt=\"minimum rustc 1.60\"></a>
    <a href=\"https://GitHub.com/Gayflix/talkative-llama/graphs/commit-activity\"><img src=\"https://img.shields.io/badge/Maintained%3F-yes-green.svg\" alt=\"Maintenance\"></a>
    <a href=\"https://GitHub.com/Gayflix/talkative-llama/pulls\"><img src=\"https://img.shields.io/github/issues-pr/Gayflix/talkative-llama.svg\" alt=\"GitHub pull-requests\"></a>
    <a href=\"https://GitHub.com/Gayflix/talkative-llama/pulls\"><img src=\"https://img.shields.io/github/issues-pr-closed/Gayflix/talkative-llama.svg\" alt=\"GitHub pull-requests closed\"></a>
    <img src=\"https://views.whatilearened.today/views/github/Gayflix/talkative-llama.svg\" alt=\"ViewCount\">
    <a href=\"https://opensource.org/licenses/MIT\"><img src=\"https://img.shields.io/badge/License-MIT-yellow.svg\" alt=\"License: MIT\"></a>
</p>

## How to run

#### 1. Install huggingface-cli

```sh
$ make install-huggingface-cli
```

#### 2. Export huggingface token

Create a huggingface token: https://huggingface.co/settings/tokens

, then set the token as env variable on your machine:

```sh
$ export HF_TOKEN=<your-token-here>
```

#### 3. Download the [Llama-2-7B-Chat-GGML](https://huggingface.co/TheBloke/Llama-2-7B-