import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.nagelstudioludwigsburg.de',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/de-DE',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/de-DE/pricing',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/de-DE/gallery',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/de-DE/about',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/en-US',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/en-US/pricing',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/en-US/gallery',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nagelstudioludwigsburg.de/en-US/about',
            lastModified: new Date(),
        },
    ]
}