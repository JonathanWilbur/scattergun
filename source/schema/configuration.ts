export
const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    title: "Scattergun Configuration",
    type: "object",
    additionalProperties: true,
    properties: {
        pipelines: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    inputs: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                uri: {
                                    type: "string"
                                }
                            }
                        }
                    },
                    processing: {
                        type: "array",
                        items: {
                            type: "object"
                        }
                    },
                    outputs: {
                        type: "array",
                        items: {
                            type: "object"
                        }
                    }
                },
                required: [

                ]
            }
        }
    }
};