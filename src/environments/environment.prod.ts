export const environment = {
  production: true,
  apiEndpoint: 'https://api-20109-5000.app.zerops.io',
  recipeConfig: `{
  "name": "Zerops Angular",
  "knowledgeBaseLink": "https://zerops.io/article/how-we-use-zerops-to-build-deploy-and-run-zerops-io",
  "repositories": {
    "app": "https://github.com/fxck/zerops-recipe-base",
    "api": "https://github.com/fxck/zerops-recipe-base"
  },
  "services": [
    {
      "hostname": "app",
      "port": 3000,
      "url": "https://github.com/fxck/zerops-recipe-base",
      "type": "Node.js",
      "category": "runtime"
    }
  ]
}`
};
