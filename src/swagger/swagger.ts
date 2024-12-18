import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Zythologue API',
            version: '1.0.0',
            description: 'A REST API for managing beers and breweries',
            contact: {
                name: 'API Support',
                email: 'support@zythologue.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ],
        components: {
            schemas: {
                Beer: {
                    type: 'object',
                    required: ['name', 'description', 'abv', 'brewery_id', 'category_id'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The auto-generated id of the beer'
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the beer'
                        },
                        description: {
                            type: 'string',
                            description: 'Description of the beer'
                        },
                        abv: {
                            type: 'number',
                            format: 'float',
                            description: 'Alcohol by volume percentage'
                        },
                        brewery_id: {
                            type: 'integer',
                            description: 'ID of the brewery that produces this beer'
                        },
                        category_id: {
                            type: 'integer',
                            description: 'ID of the beer category'
                        }
                    }
                },
                Brewery: {
                    type: 'object',
                    required: ['name', 'country'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The auto-generated id of the brewery'
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the brewery'
                        },
                        country: {
                            type: 'string',
                            description: 'Country where the brewery is located'
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        error: {
                            type: 'string',
                            description: 'Error message'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
