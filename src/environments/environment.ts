export const environment = {
  production: false,
  apiEndpoint: 'https://api-20109-5000.app.zerops.io',
  recipeConfig: `{
  "name": "Zerops Angular",
  "knowledgeBaseLink": "https://zerops.io/article/how-we-use-zerops-to-build-deploy-and-run-zerops-io",
  "services": [
    {
      "hostname": "app",
      "port": 80,
      "url": "https://app-20109.app.zerops.io",
      "repository": "https://github.com/fxck/zerops-recipe-base",
      "type": "Nginx",
      "containers": 1,
      "category": "runtime"
    },
    {
      "hostname": "api",
      "port": 3000,
      "url": "https://api-20109-5000.app.zerops.io",
      "repository": "https://github.com/fxck/todos-backend-nestjs",
      "type": "Node.js",
      "containers": 1,
      "category": "runtime"
    },
    {
      "hostname": "db",
      "port": 27017,
      "type": "Node.js",
      "containers": 1,
      "category": "database"
    }
  ]
}`
};


