export const environment = {
  production: false,
  apiEndpoint: 'https://api-20109-5000.app.zerops.io',
  recipeConfig: `{
  "intro": "👏👏👏",
  "description": "This Zerops recipe demonstrates how to run and best integrate Angular application with a basic CRUD backend using Nest.js API and a MongoDB database into Zerops. Play around with and follow the TODO app below to get deeper into Zerops and how to best integrate it with this type of tech stack.",
  "knowledgeBaseLink": "https://zerops.io/article/how-we-use-zerops-to-build-deploy-and-run-zerops-io",
  "services": [
    {
      "hostname": "app",
      "port": 80,
      "routings": ["https://app-20109.app.zerops.io"],
      "repository": "https://github.com/fxck/zerops-recipe-base",
      "type": "Nginx",
      "containers": 1,
      "category": "user"
    },
    {
      "hostname": "api",
      "port": 3000,
      "routings": ["https://api-20109-5000.app.zerops.io"],
      "repository": "https://github.com/fxck/todos-backend-nestjs",
      "type": "Node.js",
      "containers": 3,
      "category": "user"
    },
    {
      "hostname": "db",
      "port": 27017,
      "type": "MongoDB",
      "containers": 3,
      "category": "managed"
    }
  ]
}`
};


