import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'orderItem',
  title: 'Order Item',
  type: 'document',
  fields: [
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
      validation: (Rule) => Rule.required().error('Product reference is required'),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).error('Quantity must be at least 1'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('Price must be a positive number'),
    }),
    defineField({
      name: 'total',
      title: 'Total',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('Total must be a positive number'),
    }),
  ],
  preview: {
    select: {
      title: 'product.name',
      subtitle: 'quantity',
      media: 'product.image',
    },
  },
});