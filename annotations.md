# Git — Manual Profissional para Iniciantes (Completo e Comentado)

## Objetivo do documento

Este material foi escrito para **quem está começando em Git** e precisa de um **manual confiável, profissional e detalhado**, no qual **nenhuma linha de comando fica sem explicação**.

O foco é:

* clareza técnica
* progressão didática
* exemplos reais
* linguagem profissional (sem emojis, sem atalhos excessivos)

Este documento pode ser lido do início ao fim ou usado como **referência futura**.

---

## Sumário

1. Conceitos básicos do Git
2. Configuração inicial do ambiente
3. Comandos fundamentais
4. Comandos intermediários
5. Comandos avançados (uso consciente)
6. Inspeção, diagnóstico e manutenção
7. Fluxos de trabalho comuns
8. Boas práticas

---

# 1. Conceitos básicos do Git

Antes dos comandos, é essencial entender **os estados dos arquivos**:

* **Working Directory**: arquivos no seu computador
* **Staging Area (Index)**: arquivos preparados para commit
* **Repositório (.git)**: histórico definitivo

Fluxo básico:

```
Editar arquivo → git add → git commit → histórico salvo
```

---

# 2. Configuração inicial do ambiente

Esses comandos são executados **uma única vez por máquina**.

## Configurar nome do usuário

```bash
git config --global user.name "Seu Nome"
```

* `git config` → altera configurações do Git
* `--global` → vale para todos os projetos do usuário
* `user.name` → nome que aparecerá nos commits

---

## Configurar e-mail

```bash
git config --global user.email "seu@email.com"
```

* o e-mail deve ser o mesmo usado no GitHub/GitLab

---

## Definir editor padrão

```bash
git config --global core.editor "code --wait"
```

* define o VS Code como editor de mensagens de commit
* `--wait` garante que o Git espere o editor fechar

---

## Ver todas as configurações

```bash
git config --list
```

* lista todas as configurações ativas

---

## Criar aliases (atalhos)

```bash
git config --global alias.st status
git config --global alias.co checkout
```

* permite usar `git st` em vez de `git status`
* melhora produtividade

---

# 3. Comandos Fundamentais

## 3.1 `git init`

Inicializa um repositório Git.

```bash
git init
```

* cria a pasta `.git`
* transforma o diretório atual em repositório

```bash
git init projeto
```

* cria a pasta `projeto`
* inicializa o Git dentro dela

---

## 3.2 `git clone`

Copia um repositório remoto.

```bash
git clone URL
```

* cria uma pasta com o nome do repositório
* baixa todo o histórico

```bash
git clone URL pasta
```

* clona o repositório dentro da pasta especificada

```bash
git clone --depth 1 URL
```

* baixa apenas o último commit
* reduz tempo e espaço

---

## 3.3 `git status`

Mostra o estado do repositório.

```bash
git status
```

* mostra branch atual
* arquivos modificados
* arquivos não rastreados

```bash
git status -s
```

* saída resumida

---

## 3.4 `git add`

Adiciona arquivos ao staging.

```bash
git add arquivo.txt
```

* adiciona apenas o arquivo informado

```bash
git add .
```

* adiciona todos os arquivos do diretório atual

```bash
git add -A
```

* adiciona tudo, incluindo remoções

```bash
git add -p
```

* modo interativo
* adiciona trechos específicos

---

## 3.5 `git commit`

Registra mudanças.

```bash
git commit -m "mensagem"
```

* cria commit com mensagem curta

```bash
git commit -am "mensagem"
```

* adiciona e commita arquivos já rastreados

```bash
git commit --amend
```

* altera o último commit
* útil para corrigir mensagem ou incluir arquivos esquecidos

---

## 3.6 `git log`

Exibe histórico.

```bash
git log
```

* histórico completo

```bash
git log --oneline
```

* versão resumida

```bash
git log --graph --all
```

* visualiza branches e merges

---

## 3.7 `git diff`

Mostra diferenças.

```bash
git diff
```

* diferenças ainda não adicionadas

```bash
git diff --staged
```

* diferenças já preparadas para commit

---

## 3.8 `git rm`

Remove arquivos.

```bash
git rm arquivo.txt
```

* remove do Git e do disco

```bash
git rm --cached arquivo.txt
```

* remove apenas do controle do Git

---

# 4. Comandos Intermediários

## 4.1 `git branch`

Gerencia branches.

```bash
git branch
```

* lista branches locais

```bash
git branch nova-branch
```

* cria branch

```bash
git branch -d branch
```

* remove branch já mesclada

---

## 4.2 `git switch`

Troca de branch.

```bash
git switch main
```

* muda para main

```bash
git switch -c feature
```

* cria e muda para a branch

---

## 4.3 `git checkout` (legado)

```bash
git checkout branch
```

* troca de branch

```bash
git checkout -- arquivo.txt
```

* descarta alterações locais do arquivo

---

## 4.4 `git merge`

Une branches.

```bash
git merge feature
```

* aplica alterações da feature

```bash
git merge --abort
```

* cancela merge com conflito

---

## 4.5 `git stash`

Salva trabalho temporariamente.

```bash
git stash
```

* salva alterações

```bash
git stash list
```

* lista stashes

```bash
git stash pop
```

* reaplica alterações

---

# 5. Comandos Avançados

## 5.1 `git reset`

```bash
git reset --soft HEAD~1
```

* desfaz commit
* mantém staging

```bash
git reset --hard HEAD~1
```

* desfaz commit
* apaga alterações

---

## 5.2 `git revert`

```bash
git revert commit
```

* cria commit que desfaz outro
* seguro para repositórios compartilhados

---

## 5.3 `git reflog`

```bash
git reflog
```

* histórico completo de ações
* permite recuperar commits perdidos

---

# 6. Inspeção, Diagnóstico e Manutenção

```bash
git show commit      # mostra detalhes de um commit
git blame arquivo    # mostra autoria linha a linha
git fsck             # verifica integridade
git gc               # otimiza o repositório
```

---

# 7. Fluxos de Trabalho Comuns

## Criar feature

```bash
git switch -c feature
# editar arquivos
git add .
git commit -m "descrição"
git push -u origin feature
```

## Atualizar branch

```bash
git fetch origin
git rebase origin/main
git push --force-with-lease
```

---

# 8. Boas Práticas

* commits pequenos e descritivos
* uma funcionalidade por commit
* evite `git push --force` sem necessidade
* use `.gitignore`
* revise com `git status` antes de commitar

---

## Conclusão

Dominar este material garante uma base sólida em Git para:

* faculdade
* mercado de trabalho
* projetos pessoais
* concursos

Este documento foi pensado para **consulta de longo prazo**.
