__Observações sobre conteúdo e testes:__
- Foi usado o sistema de navegação por links para simplificar o projeto;
- A Pesquisa de Satisfação dos participantes do workshop encontra-se na pasta CONTEUDO DO WORKSHOP.
- O conteúdo didático de autoria do discente que serviu de guia e foi distribuido aos participantes encontra-se na mesma pasta citada anteriormente.

__Lado do servidor__

Foi usada a seguinte API para testes:

```https://github.com/Grabium/extensao-api-laravel.git```

Após clonagem da API (Em PHP-Laravel):
- ligar xampp e configurar DB e variáveis de ambiente no __./env__.
- servir laravel:
```php artisan serve```
- Servir a API através do ngrok:
```.\ngrok.exe http 8000```

__Lado do cliente__

Após instalação do React Native e configuração:
- Clonar este projeto.
- Colar url no provider/axios
- Se for emular, recomendo que o faça no __cold__.
- Iniciar yarn (se preferir) ou mpn (recomendado).
