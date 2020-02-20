import React, { FunctionComponent } from 'react'
import { getPadding } from '../../utils'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface IVimeoProps {
  /** Vimeo id */
  vimeoId: string
  /** Skip to a time in the video */
  skipTo: {
    h?: number
    m: number
    s: number
  }
  /** Auto play the video */
  autoPlay: boolean
}

export const Vimeo: FunctionComponent<IVimeoProps> = props => {
  const { vimeoId, skipTo, autoPlay } = useDefaultProps('Vimeo', props)
  const { h, m, s } = skipTo

  return (
    <div
      className="vimeo-mdx-embed"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding('16:9')
      }}
    >
      <iframe
        title={`vimeo-${vimeoId}`}
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}#t=${h}h${m}m${s}s`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}
