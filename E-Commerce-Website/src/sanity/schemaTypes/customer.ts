import { defineType } from "sanity"

export const customer = defineType({
    name: "customer",
    title: "Customers",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "phone",
            title: "Phone",
            validation: (rule) => rule.required(),
            type: "string"
        },
    ]
    
})