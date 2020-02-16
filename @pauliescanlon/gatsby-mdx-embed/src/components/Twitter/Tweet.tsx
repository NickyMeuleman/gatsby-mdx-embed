import React, { FunctionComponent } from 'react'
import { PluginOptionsContext } from '../../context/PluginOptionsContext'

export interface ITweetProps {
  /** Tweet link */
  tweetLink: string
  /** Color theme of the Tweet */
  theme?: 'light' | 'dark'
  /** Alignment of the Tweet */
  align?: 'left' | 'center' | 'right'
}

export const Tweet: FunctionComponent<ITweetProps> = ({ tweetLink }) => {
  const {
    defaultProps: {
      Tweet: { theme, align }
    }
  }: any = React.useContext(PluginOptionsContext)
  return (
    <div className="twitter-tweet-mdx-embed" style={{ overflow: 'auto' }}>
      <blockquote
        className="twitter-tweet"
        data-theme={theme}
        data-align={align}
      >
        <a href={`https://twitter.com/${tweetLink}?ref_src=twsrc%5Etfw`}>
          {typeof window !== 'undefined' && !(window as any).twttr
            ? 'Loading'
            : ''}
        </a>
      </blockquote>
    </div>
  )
}
