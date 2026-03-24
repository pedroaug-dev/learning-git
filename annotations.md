# Git — Manual Profissional para Iniciantes (Completo e Comentado)## Objetivo do documentoEste material foi escrito para fornecer um manual confiável e detalhado, onde nenhuma linha de comando fica sem explicação. O foco é clareza técnica, progressão didática e linguagem profissional.
---## Sumário1. [Conceitos Básicos](#1-conceitos-básicos-do-git)
2. [Configuração Inicial](#2-configuração-inicial-do-ambiente)
3. [Diagnóstico de Conexão e SSH (Caso Real)](#3-diagnóstico-de-conexão-e-ssh-caso-real)
4. [Comandos Fundamentais](#4-comandos-fundamentais)
5. [Comandos Intermediários](#5-comandos-intermediários)
6. [Comandos Avançados](#6-comandos-avançados)
7. [Inspeção e Manutenção](#7-inspeção-diagnóstico-e-manutenção)
8. [Boas Práticas](#8-boas-práticas)
---# 1. Conceitos Básicos do GitO Git gerencia estados de arquivos em três áreas:*   **Working Directory**: Arquivos físicos no seu computador.*   **Staging Area (Index)**: Zona de preparação para o próximo commit.*   **Repositório (.git)**: Onde o histórico definitivo é armazenado.
---# 2. Configuração Inicial do AmbienteExecutados uma única vez por máquina para identificar o autor dos commits.

```bash
# Configura nome e e-mail
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Define o VS Code como editor padrão e aguarda o fechamento para prosseguir
git config --global core.editor "code --wait"

# Listar todas as configurações ativas
git config --list

------------------------------
3. Diagnóstico de Conexão e SSH (Caso Real)
Essencial para resolver problemas de permissão e autenticação entre o notebook e o GitHub.
3.1 Validar Conexão SSH

ssh -T git@github.com


* Resposta esperada: "Hi [usuario]! You've successfully authenticated..."
* Nota: Se o teste passar mas o push falhar, o problema é a URL do repositório.

3.2 Corrigir Protocolo (HTTPS para SSH)
Se o repositório foi clonado via HTTPS, altere a URL para usar a chave SSH:

# Verificar URL atual
git remote -v
# Alterar para SSH
git remote set-url origin git@github.com:pedroaug-dev/learning-django.git

------------------------------
4. Comandos Fundamentais4.1 git init e git clone

* git init: Inicializa um novo repositório local.
* git clone URL: Copia um repositório remoto para sua máquina.
* git clone --depth 1 URL: Baixa apenas o último histórico (clone raso/rápido).

4.2 git status e git add

* git status: Mostra o estado atual (arquivos modificados/não rastreados).
* git add .: Adiciona todas as mudanças à Staging Area.
* git add -p: Permite escolher partes específicas de um arquivo para adicionar.

4.3 git commit

* git commit -m "mensagem": Grava as mudanças com uma descrição.
* git commit --amend: Corrige o último commit (adiciona arquivos ou muda a mensagem).

------------------------------
5. Comandos Intermediários5.1 Branches (Ramos)

* git branch: Lista branches locais.
* git switch -c nova-feature: Cria e entra em uma nova branch.
* git merge feature: Traz as mudanças da branch feature para a atual.

5.2 Sincronização Remota

* git fetch origin: Baixa as novidades do servidor sem mesclar.
* git pull origin main: Baixa e mescla as novidades da branch main remota.
* git push origin branch: Envia seus commits locais para o servidor.

------------------------------
6. Comandos Avançados6.1 git reset (Uso Consciente)

* --soft: Desfaz o commit, mas mantém as alterações nos arquivos.
* --hard: Desfaz o commit e apaga todas as alterações locais.

6.2 git revert

* Cria um novo commit que desfaz as alterações de um commit anterior. É a forma mais segura de desfazer algo em projetos compartilhados.

------------------------------
7. Inspeção, Diagnóstico e Manutenção

* git log --oneline --graph: Visualiza o histórico de forma gráfica.
* git blame arquivo.txt: Mostra quem alterou cada linha do arquivo.
* git reflog: Histórico de ações para recuperar commits perdidos.

------------------------------
8. Boas Práticas

   1. Commits Atômicos: Um commit deve resolver apenas um problema/funcionalidade.
   2. Mensagens Claras: Use verbos no imperativo (ex: "Adiciona", "Corrige").
   3. Nunca Force: Evite git push --force sem necessidade.
   4. Ignore o Desnecessário: Use sempre um arquivo .gitignore.
