import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ITwitterHashtagButtonProps {
  /** Twitter hashtag */
  hashtag: string
  /** The size of the button */
  size?: 'large' | 'small'
}

export const TwitterHashtagButton: FunctionComponent<ITwitterHashtagButtonProps> = props => {
  const { hashtag, size } = useDefaultProps('TwitterHashtagButton', props)
  return (
    <a
      href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&ref_src=twsrc%5Etfw`}
      className="twitter-hashtag-button twitter-hashtag-button-mdx-embed"
      data-size={size}
    >{`Tweet #${hashtag}`}</a>
  )
}
