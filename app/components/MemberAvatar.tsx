'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './MemberAvatar.module.css'

interface MemberAvatarProps {
  name: string
  image?: string
  size?: number
  className?: string
}

export default function MemberAvatar({ name, image, size = 100, className = '' }: MemberAvatarProps) {
  const [imageError, setImageError] = useState(false)

  if (!image || imageError) {
    return (
      <div className={`${styles.avatar} ${className}`} style={{ width: size, height: size }}>
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <div className={`${styles.avatar} ${className}`} style={{ width: size, height: size }}>
      <Image
        src={image}
        alt={name}
        width={size}
        height={size}
        className={styles.avatarImage}
        onError={() => setImageError(true)}
      />
    </div>
  )
}
