import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ITwitterTimelineProps {
  /** Twitter username */
  username: string
  /** Show Tweets liked by the username */
  showLikes?: boolean | null
  /** Color theme of the Timeline */
  theme?: 'light' | 'dark'
  /** Width for the iFrame */
  width?: number | string
  /** Height for the iFrame. Null is full height */
  height?: number | string | null
}

export const TwitterTimeline: FunctionComponent<ITwitterTimelineProps> = props => {
  const { username, theme, showLikes, width, height } = useDefaultProps(
    'TwitterTimeline',
    props
  )
  return (
    <div style={{ overflow: 'auto' }}>
      <a
        className="twitter-timeline twitter-timeline-mdx-embed"
        data-theme={theme}
        data-width={width}
        data-height={height}
        href={`https://twitter.com/${username}${
          showLikes ? `/likes` : ''
        }?ref_src=twsrc%5Etfw`}
      >
        {`Tweets by @${username}`}
      </a>
    </div>
  )
}
