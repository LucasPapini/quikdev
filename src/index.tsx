import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    post: Model,
  },

  seeds(server) {
    server.db.loadData({
      posts: [
        {
          id: 1,
          title: "teste",
          content: "teste atualizado",
          user_id: 1,
          comments: [
            {
              "content": "Comentario atualizado",
              "id": 1,
              "user_id": 1
            }
          ]
        },
        {
          id: 2,
          title: "teste 2",
          content: "teste atualizado 2",
          user_id: 1,
          comments: [
            {
              "content": "Comentario atualizado 2",
              "id": 1,
              "user_id": 1
            }
          ]
        },
      ],
    })
  },

  routes() {
    this.namespace = '/api'

    this.get('/fakeApi', () => {
      return this.schema.all('post');
    })

    this.post('/fakeApi', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('post', data);
    })

  },

});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
