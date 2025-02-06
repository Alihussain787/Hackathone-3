// import { defineType } from "sanity"

// export const order = defineType({
//     name: "order",
//     title: "Order",
//     type: "document",
//     fields: 
//         [{
//             name: "customer",
//             title: "Customer",
//             type: "document",
//             fields: [{
//                 name: "reference",
//                 title: "Reference",
//                 type: "document",
//                 fields: [
//                     {
//                     name: "_ref",
//                     title: "Ref",
//                     validation: (rule) => rule.required(),
//                     type: "string"
//                     }
//                 ]
//             }]
//         },
//         {
//             name: "items",
//             title: "Items",
//             type: "array",
//             of:[{
//                 name: "items",
//                 title: "Items",
//                 type: "document",
//                 fields:[
//                     {
//                         name: "id",
//                         title: "Id",
//                         validation: (rule) => rule.required(),
//                         type: "string"
//                     },
//                 {
//                     name: "product_title",
//                     title: "Product Title",
//                     validation: (rule) => rule.required(),
//                     type: "string"
//                 },
//                 {
//                     name: "product_price",
//                     title: "Product Price",
//                     validation: (rule) => rule.required(),
//                     type: "number"
//                 },
//                 {
//                     name: "product_description",
//                     title: "Product Description",
//                     validation: (rule) => rule.required(),
//                     type: "string"
//                 },
//                 {
//                     name: "quantity",
//                     title: "Quantity",
//                     validation: (rule) => rule.required(),
//                     type: "number"
//                 }]
//             }]

//     },
//     {      
//         name: "order_date",
//         title: "Order_Date",
//         validation: (rule) => rule.required(),
//         type: "string"
//     }]
//     //         {
//     //                 name: "customer",
//     //                 title: "Customer",
//     //                 type: "document",
//     //                 fields: [{
//     //                     name: "reference",
//     //                     title: "Reference",
//     //                     type: "document",
//     //                     fields: [
//     //                         {
//     //                             name: "ref",
//     //                             title: "Ref",
//     //                             validation: (rule) => rule.required(),
//     //                             type: "string"
//     //                         }
//     //                     ]
//     //                 }]
//     //             },
//     //     ]
//     // }
//         // {
//         //     name: "customer",
//         //     title: "Customer",
//         //     type: "document",
//         //     fields: [{
//         //         name: "reference",
//         //         title: "Reference",
//         //         type: "document",
//         //         fields: [
//         //             {
//         //                 name: "ref",
//         //                 title: "Ref",
//         //                 validation: (rule) => rule.required(),
//         //                 type: "string"
//         //             }
//         //         ]
//         //     }]
//         // },
//         // {
//         //     name: "items",
//         //     title: "Items",
//         //     type: "array",
//         //     of: 
//         //     [{ 
//         //         name: "items",
//         //         title:"Items",
//         //         type:"document",
//         //         fields:[
//         //             {
//         //                 name: "id",
//         //                 title: "Id",
//         //                 validation: (rule) => rule.required(),
//         //                 type: "string"
//         //             },
//         //             {
//         //                 name: "product_title",
//         //                 title: "Product Title",
//         //                 validation: (rule) => rule.required(),
//         //                 type: "string"
//         //             },
//         //             {
//         //                 name: "product_price",
//         //                 title: "Product Price",
//         //                 validation: (rule) => rule.required(),
//         //                 type: "number"
//         //             },
//         //             {
//         //                 name: "product_description",
//         //                 title: "roduct Description",
//         //                 validation: (rule) => rule.required(),
//         //                 type: "string"
//         //             },
//         //             {
//         //                 name: "quantity",
//         //                 title: "Quantity",
//         //                 validation: (rule) => rule.required(),
//         //                 type: "number"
//         //             },
//         //         ]
//         //      }]
//         // },
//         // {      
//         //     name: "order_date",
//         //     title: "Order_Date",
//         //     validation: (rule) => rule.required(),
//         //     type: "string"
//         // }

// //     ]
    
// })