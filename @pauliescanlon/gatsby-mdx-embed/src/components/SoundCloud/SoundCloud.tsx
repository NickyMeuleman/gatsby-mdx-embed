import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ISoundCloudProps {
  /** SoundCloud link */
  soundCloudLink: string
  /** Auto play audio */
  autoPlay?: boolean
  /** Show the visual artwork */
  visual?: boolean
  /** Width for the iFrame */
  width?: number | string
  /** Height for the iFrame */
  height?: number | string
  /** The color of the play button without the # */
  color?: string
}

export const SoundCloud: FunctionComponent<ISoundCloudProps> = props => {
  // Does color need a default? It currently has none and is listed as optional prop.
  const {
    soundCloudLink,
    width,
    height,
    autoPlay,
    visual,
    color
  } = useDefaultProps('SoundCloud', props)
  return (
    <iframe
      title={`sound-cloud-${soundCloudLink}`}
      className="soundcloud-mdx-embed"
      width={width}
      height={height}
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${soundCloudLink}&color=%23${color}&auto_play=${autoPlay}&visual=${visual}`}
    />
  )
}
