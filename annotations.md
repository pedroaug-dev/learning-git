# 📘 Git — Manual Profissional para Iniciantes

Guia completo, organizado e comentado para uso acadêmico e profissional.

---

# 📑 Sumário

* [1. Conceitos Básicos](#1-conceitos-básicos-do-git)
* [2. Configuração Inicial](#2-configuração-inicial-do-ambiente)
* [3. Diagnóstico de Conexão e SSH](#3-diagnóstico-de-conexão-e-ssh-caso-real)
* [4. Comandos Fundamentais](#4-comandos-fundamentais)
* [5. Comandos Intermediários](#5-comandos-intermediários)
* [6. Comandos Avançados](#6-comandos-avançados)
* [7. Inspeção e Manutenção](#7-inspeção-diagnóstico-e-manutenção)
* [8. Boas Práticas](#8-boas-práticas)

---

# 1. Conceitos Básicos do Git

O Git controla versões de arquivos através de três áreas principais:

### 📂 Working Directory

Arquivos físicos no seu computador.

### 📦 Staging Area (Index)

Área de preparação para o próximo commit.

### 🗂️ Repositório (.git)

Local onde o histórico definitivo é armazenado.

Fluxo visual:

```
Working Directory → Staging Area → Repository
```

---

# 2. Configuração Inicial do Ambiente

Executar apenas **uma vez por máquina**.

```bash
# Configurar nome
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu@email.com"

# Definir VS Code como editor padrão
git config --global core.editor "code --wait"

# Listar configurações
git config --list
```

---

# 3. Diagnóstico de Conexão e SSH (Caso Real)

## 3.1 Testar conexão SSH

```bash
ssh -T git@github.com
```

Resposta esperada:

```
Hi usuario! You've successfully authenticated...
```

Se funcionar, sua chave SSH está correta.

---

## 3.2 Verificar URL do repositório

```bash
git remote -v
```

Exemplo HTTPS (não recomendado):

```
https://github.com/user/repositorio.git
```

Exemplo SSH (recomendado):

```
git@github.com:user/repositorio.git
```

---

## 3.3 Alterar HTTPS para SSH

```bash
git remote set-url origin git@github.com:usuario/repositorio.git
```

---

# 4. Comandos Fundamentais

## 4.1 Inicialização

```bash
git init
```

Cria um repositório local.

```bash
git clone URL
```

Clona um repositório remoto.

```bash
git clone --depth 1 URL
```

Clone rápido sem histórico completo.

---

## 4.2 Verificação de estado

```bash
git status
```

Mostra:

* arquivos modificados
* arquivos novos
* arquivos staged
* branch atual

---

## 4.3 Adicionar arquivos

Adicionar tudo:

```bash
git add .
```

Adicionar arquivo específico:

```bash
git add arquivo.txt
```

Adicionar parcialmente:

```bash
git add -p
```

---

## 4.4 Commit

```bash
git commit -m "mensagem"
```

Editar último commit:

```bash
git commit --amend
```

---

# 5. Comandos Intermediários

## 5.1 Branches

Listar:

```bash
git branch
```

Criar nova:

```bash
git switch -c nova-branch
```

Trocar:

```bash
git switch main
```

Merge:

```bash
git merge feature
```

---

## 5.2 Sincronização remota

Baixar atualizações:

```bash
git fetch origin
```

Baixar e mesclar:

```bash
git pull origin main
```

Enviar commits:

```bash
git push origin main
```

---

# 6. Comandos Avançados

## 6.1 Reset

Soft (mantém alterações):

```bash
git reset --soft HEAD~1
```

Hard (apaga tudo):

```bash
git reset --hard HEAD~1
```

⚠️ Cuidado: o hard remove código.

---

## 6.2 Revert

Forma segura de desfazer commit:

```bash
git revert HASH
```

Cria um novo commit revertendo o anterior.

---

# 7. Inspeção, Diagnóstico e Manutenção

Histórico resumido:

```bash
git log --oneline --graph
```

Ver autor por linha:

```bash
git blame arquivo.txt
```

Recuperar commits perdidos:

```bash
git reflog
```

---

# 8. Boas Práticas

## ✔ Commits atômicos

Um commit = uma alteração lógica

Exemplo:

```
Adiciona login
Corrige footer
Atualiza CSS
```

---

## ✔ Mensagens padronizadas

Formato recomendado:

```
tipo: descrição
```

Exemplos:

```
feat: add login page
fix: correct footer spacing
docs: update git manual
style: format markdown file
```

---

## ✔ Evite force push

Não recomendado:

```bash
git push --force
```

Seguro:

```bash
git push --force-with-lease
```

---

## ✔ Use .gitignore

Exemplo:

```
venv/
__pycache__/
.env
node_modules/
*.log
*.sqlite3
```

---

# 🚀 Fluxo Profissional

Fluxo mais usado no dia a dia:

```bash
git pull
git add .
git commit -m "mensagem"
git push
```

---

# 🧠 Fluxo Completo

```bash
git status
git pull
git add .
git commit -m "mensagem clara"
git push origin main
```

---

# 📌 Convenção de Commits (Profissional)

| Tipo     | Uso                 |
| -------- | ------------------- |
| feat     | nova funcionalidade |
| fix      | correção de bug     |
| docs     | documentação        |
| style    | formatação          |
| refactor | refatoração         |
| chore    | ajustes gerais      |

Exemplo:

```bash
git commit -m "docs: format git manual"
```

---

# 🏁 Final

Este manual cobre:

* Conceitos do Git
* Configuração inicial
* SSH profissional
* Comandos essenciais
* Comandos intermediários
* Comandos avançados
* Diagnóstico
* Boas práticas
* Fluxo profissional

Documento pronto para uso acadêmico e profissional.
