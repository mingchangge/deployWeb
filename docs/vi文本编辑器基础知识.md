﻿这篇是[K8S及Rancher部署](https://blog.csdn.net/u012761510/article/details/140117477)的前置知识。因为项目部署测试需要，向公司申请了一个虚拟机做服务器用。以下是回溯的命令，多了解了解，拓宽知识面吧。PS：本人相关知识0，见啥都稀奇，小白一个，知识浅显，勿喷。
# vi文本编辑器知识汇总
`vi` 是一个在 Unix 和 Unix-like 系统上广泛使用的文本编辑器，它是一个模式化的编辑器，具有多种模式，包括命令模式、插入模式等。以下是一些基本的 `vi` 命令和它们的作用：

1. **进入 vi 编辑器**:
   - `vi filename`: 打开或创建名为 filename 的文件进行编辑。

2. **命令模式**:
   - 进入插入模式: `i`（插入在光标位置之前）、`I`（插入在当前行首）、`a`（在光标后插入）、`A`（在行尾插入）。
   - 退出插入模式: `Esc`（退出插入模式回到命令模式）。

3. **移动光标**:
   - `h`: 左移光标。
   - `j`: 下移光标。
   - `k`: 上移光标。
   - `l`: 右移光标。
   - `G`: 移动到文件的最后一行。
   - `gg`: 移动到文件的第一行。

4. **编辑文本**:
   - `x`: 删除光标下的字符。
   - `dd`: 删除当前行。
   - `yy`: 复制当前行。
   - `p`: 粘贴复制的内容。

5. **查找和替换**:
   - `/word`: 向下查找 "word"。
   - `?word`: 向上查找 "word"。
   - `:%s/old/new/g`: 替换文件中所有的 "old" 为 "new"。

6. **保存和退出**:
   - `:w`: 保存当前文件。
   - `:wq`: 保存并退出 vi。
   - `:q`: 退出 vi。
   - `:q!`: 强制退出不保存。

7. **设置**:
   - `:set number`: 显示行号。
   - `:set nowrap`: 禁止自动换行。

8. **其他**:
   - `u`: 撤销上一个操作。
   - `Ctrl + r`: 重做撤销的操作。 

9.  **多行注释**
     - 按`ctrl + v`进入 visual block模式，然后按 `j`/`k` 选中多行，把需要注释的行标记起来 
     - 按大写字母`I`，再插入注释符，例如#
     - 按`esc`键就会全部注释了
     - 使用命令添加注释（`:10,20 s/^/\/\/ /g`---注释10到20行）
    
11. **取消多行注释**
      - 按`ctrl + v`进入 visual block模式，按字母`l`横向选中列的个数
      - 按字母 `j`/`k` 选中注释符号
      - 按`d`键就可全部取消注释
      - 使用命令取消注释（`:10,20 s/^\/\/ //g`---取消注释10到20行）
