---
title: 'Como ignorar arquivos depois de alterar o .gitignore'
date: '2021-15-05'
---
Para parar de rastrear todos arquivos que agora estão no seu .gitignore:

Primeiro comite tudo que precisar e, então, rode o comando:

To untrack every file that is now in your .gitignore:
```
git rm -r --cached .
```
Isso remove todos os seus arquivos que estão no .gitignore da sua 'staging area'.
Depois, rode:
```
git add .
git commit -m ".gitignore esta funcionando"
```