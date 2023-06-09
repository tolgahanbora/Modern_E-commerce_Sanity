export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string'
        },
        
        {
            name: 'product',
            title: 'Product',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string'
        },
        {
            name: 'largeText',
            title: 'LargeText',
            type: 'string'
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string'
        },
        {
            name: 'price',
            title: 'price',
            type: 'number',

        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',

        },
        {
            name: 'saletime',
            title: 'SaleTime',
            type: 'string'
        }
    ]
}