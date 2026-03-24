# 📘 Git — Manual Profissional para Iniciantes (Completo e Comentado)

## 🎯 Objetivo do documento

Este material foi escrito para fornecer um manual confiável e detalhado, onde nenhuma linha de comando fica sem explicação.
O foco é **clareza técnica**, **progressão didática** e **linguagem profissional**.

---

# 📑 Sumário

1. [Conceitos Básicos](#1-conceitos-básicos-do-git)
2. [Configuração Inicial](#2-configuração-inicial-do-ambiente)
3. [Diagnóstico de Conexão e SSH (Caso Real)](#3-diagnóstico-de-conexão-e-ssh-caso-real)
4. [Comandos Fundamentais](#4-comandos-fundamentais)
5. [Comandos Intermediários](#5-comandos-intermediários)
6. [Comandos Avançados](#6-comandos-avançados)
7. [Inspeção e Manutenção](#7-inspeção-diagnóstico-e-manutenção)
8. [Boas Práticas](#8-boas-práticas)

---

# 1. Conceitos Básicos do Git

O Git gerencia estados de arquivos em três áreas:

### 🧩 Working Directory

Arquivos físicos no seu computador.

### 📦 Staging Area (Index)

Zona de preparação para o próximo commit.

### 🗂️ Repositório (.git)

Onde o histórico definitivo é armazenado.

---

# 2. Configuração Inicial do Ambiente

Executados **uma única vez por máquina** para identificar o autor dos commits.

```bash
# Configura nome e e-mail
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Define o VS Code como editor padrão e aguarda o fechamento
git config --global core.editor "code --wait"

# Listar todas as configurações ativas
git config --list
```

---

# 3. Diagnóstico de Conexão e SSH (Caso Real)

Essencial para resolver problemas de permissão e autenticação entre o computador e o GitHub.

## 3.1 Validar Conexão SSH

```bash
ssh -T git@github.com
```

Resposta esperada:

```
Hi usuario! You've successfully authenticated...
```

Observação:
Se o teste passar mas o push falhar, o problema normalmente é a **URL do repositório**.

---

## 3.2 Corrigir Protocolo (HTTPS → SSH)

Se o repositório foi clonado via HTTPS, ele pedirá senha/token.
Para usar a chave SSH configurada, altere a URL:

```bash
# Verificar URL atual
git remote -v

# Alterar para SSH
git remote set-url origin git@github.com:usuario/nome-do-repositorio.git
```

---

# 4. Comandos Fundamentais

## 4.1 git init e git clone

```bash
git init
```

Inicializa um novo repositório local.

```bash
git clone URL
```

Copia um repositório remoto para sua máquina.

```bash
git clone --depth 1 URL
```

Baixa apenas o último histórico (clone raso/rápido).

---

## 4.2 git status e git add

```bash
git status
```

Mostra o estado atual (arquivos modificados/não rastreados).

```bash
git add .
```

Adiciona todas as mudanças à Staging Area.

```bash
git add -p
```

Permite escolher partes específicas de um arquivo para adicionar.

---

## 4.3 git commit

```bash
git commit -m "mensagem"
```

Grava as mudanças com uma descrição.

```bash
git commit --amend
```

Corrige o último commit (adiciona arquivos ou muda a mensagem).

---

# 5. Comandos Intermediários

## 5.1 Branches (Ramos)

```bash
git branch
```

Lista branches locais.

```bash
git switch -c nova-feature
```

Cria e entra em uma nova branch.

```bash
git merge feature
```

Traz as mudanças da branch feature para a atual.

---

## 5.2 Sincronização Remota

```bash
git fetch origin
```

Baixa as novidades do servidor sem mesclar com seu código.

```bash
git pull origin main
```

Baixa e mescla as novidades da branch main remota.

```bash
git push origin branch
```

Envia seus commits locais para o servidor.

---

# 6. Comandos Avançados

## 6.1 git reset (Uso Consciente)

```bash
git reset --soft HEAD~1
```

Desfaz o commit, mas mantém as alterações nos arquivos.

```bash
git reset --hard HEAD~1
```

Desfaz o commit e apaga todas as alterações.

⚠️ Use com cuidado, pois pode apagar código.

---

## 6.2 git revert

```bash
git revert HASH_DO_COMMIT
```

Diferente do reset, o revert cria um **novo commit** que desfaz as alterações de um commit anterior.
É a forma mais segura em projetos compartilhados.

---

# 7. Inspeção, Diagnóstico e Manutenção

```bash
git log --oneline --graph
```

Visualiza o histórico de forma gráfica e resumida.

```bash
git blame arquivo.txt
```

Mostra quem alterou cada linha do arquivo e quando.

```bash
git reflog
```

O "diário de bordo" do Git.
Permite recuperar quase qualquer commit deletado por erro.

---

# 8. Boas Práticas

## ✅ 1. Commits Atômicos

Um commit deve resolver apenas **um problema ou funcionalidade**.

## ✅ 2. Mensagens Claras

Use verbos no imperativo:

```
Adiciona função X
Corrige bug Y
Atualiza layout do footer
```

## ✅ 3. Nunca Force

Evite:

```bash
git push --force
```

Prefira:

```bash
git push --force-with-lease
```

---

## ✅ 4. Ignore o Desnecessário

Sempre use `.gitignore` para não subir:

* node_modules
* venv
* .env
* **pycache**
* arquivos temporários

Exemplo:

```
venv/
__pycache__/
.env
node_modules/
*.log
```

---

# 🧠 Fluxo Profissional Mais Comum

```bash
git pull
git add .
git commit -m "mensagem clara"
git push
```

---

# 🏁 Fim do Manual

Este documento cobre:

* Configuração
* SSH
* Fluxo profissional
* Comandos essenciais
* Comandos avançados
* Diagnóstico
* Boas práticas
