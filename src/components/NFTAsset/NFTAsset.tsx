'use client'

import { FC } from 'react'
import Image from 'next/image'

interface NFTAssetProps {
  name: string
  source: string
  autoPlay?: boolean
  muted?: boolean
  className?: string
}

export const NFTAsset: FC<NFTAssetProps> = ({
  source,
  name,
  autoPlay,
  muted,
  ...props
}) => {
  const extension = source.split('.').pop()?.toLowerCase()
  return extension && ['mov', 'mp4'].includes(extension) ? (
    <video
      loop
      playsInline
      controls
      muted={!!muted}
      autoPlay={!!autoPlay}
      {...props}
      className="z-10 relative aspect-[4/3]"
    >
      <source src={source} type="video/mp4" />
    </video>
  ) : (
    <Image fill src={source} alt={name} {...props} />
  )
}
