'use client'
import { ImgurImage } from '@/data/gallery/image-types'
import { ImgurResponse } from '@/data/types'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

export default function GalleryGrid() {
    const [album, setAlbum] = useState<ImgurResponse<ImgurImage[]>>({
        data: [],
        status: 0,
        success: false,
    })

    const fetchAlbum = useCallback(async () => {
        const res = await fetch('/api/gallery',{
            next:{
                revalidate: 3600, // seconds (1 hour)
            }
        });
        if (!res.ok) {
            throw new Error('Error')
        }
        const data = await res.json()
        return data
    }, [])

    const updateAlbum = useCallback(async () => {
        try {
            const album = await fetchAlbum()
            setAlbum(album)
        } catch (error) {
            console.log('Error', error)
        }
    }, [fetchAlbum])

    useEffect(() => {
        updateAlbum()
    }, [updateAlbum])

    return (
        < >
            {album.data.map((image) => (
                <div key={image.id} >
                    <Image  src={image.link} alt={image.title || ""} width={400} height={0} className='rounded-2xl'/>
                </div>
            ))}
        </>
    )
}
