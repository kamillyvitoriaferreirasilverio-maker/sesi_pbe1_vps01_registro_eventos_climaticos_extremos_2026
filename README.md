# Registro de Eventos Climáticos Extremos Back-end

Exemplo simples de back-end para registro de eventos climáticos extremos, utilizando dados em formato JSON e funcionalidades CRUD padrão.

---

## Tecnologias

* **Node.js**
* **JavaScript**
* **VSCode**
* **Thunder Client**
* **HTML**

---

## Passos para testar

* 1 Clone este repositório.
* 2 Abra com **VSCode** e em um terminal digite:

```bash
npm install
npm run dev
```

* 3 Teste as rotas com a extensão `Thunder Client` do **VSCode**.
* 4 Abra o arquivo `client/index.html` com a extensão `Live Server` do **VSCode**.

---

## Print dos testes e exemplo de requisições

* ![CREATE]()
* READ ALL 
* BUSCAR POR ID [Find ID](prints/03-get-id.png) ([image](prints/03-get-id.png))
* BUSCAR POR CIDADE [Find City](prints/04-get-cidade.png) ([image](prints/04-get-cidade.png))
* BUSCAR POR TIPO DE EVENTO [Find Event Type](prints/05-get-tipo.png) ([image](prints/05-get-tipo.png))
* UPDATE [Update](prints/06-put-evento.png) ([image](prints/06-put-evento.png))
* DELETE [Delete](prints/07-delete-evento.png) ([image](prints/07-delete-evento.png))

### Exemplo de requisição CREATE

```json
{
    "cidade": "Campinas",
    "tipo_evento": "Onda de calor",
    "temperatura_maxima": 38.5,
    "data": "2026-09-24",
    "nivel_impacto": "Alto"
}
```

---

## Cliente

* [Formulário](prints/08-formulario.png) ([image](prints/08-formulario.png))

* Resposta:

```json
{
    "cidade": "Campinas",
    "tipo_evento": "Onda de calor",
    "temperatura_maxima": "38.5",
    "data": "2026-09-24",
    "nivel_impacto": "alto",
    "id": 6
}
```
