import React, { FunctionComponent } from 'react'
import { getPadding } from '../../utils'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ITwitchProps {
  /** Twitch id */
  twitchId: string
  /** Skip to a time in the video */
  skipTo: {
    h?: number
    m: number
    s: number
  }
  /** Auto play the video */
  autoPlay: boolean
}

export const Twitch: FunctionComponent<ITwitchProps> = props => {
  const { twitchId, autoPlay, skipTo } = useDefaultProps('Twitch', props)
  const { h, m, s } = skipTo
  return (
    <div
      className="twitch-mdx-embed"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding('16:9')
      }}
    >
      <iframe
        title={`twitch-${twitchId}`}
        src={`https://player.twitch.tv/?autoplay=${autoPlay}&t=${h}h${m}m${s}s&video=v${twitchId}`}
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
