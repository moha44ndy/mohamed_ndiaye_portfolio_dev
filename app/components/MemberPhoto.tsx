'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './MemberPhoto.module.css'

interface MemberPhotoProps {
  name: string
  image?: string
  width?: number
  height?: number
  className?: string
}

export default function MemberPhoto({ name, image, width = 300, height = 400, className = '' }: MemberPhotoProps) {
  const [imageError, setImageError] = useState(false)

  if (!image || imageError) {
    return (
      <div className={`${styles.photo} ${className}`} style={{ width, height }}>
        <div className={styles.placeholder}>
          {name.charAt(0)}
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.photo} ${className}`} style={{ width, height }}>
      <Image
        src={image}
        alt={name}
        width={width}
        height={height}
        className={styles.photoImage}
        onError={() => setImageError(true)}
      />
    </div>
  )
}
