import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: "1a9co7w4",
    dataset: 'production',
    apiVersion: '2023-03-28', //use a UTC Date string
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}
