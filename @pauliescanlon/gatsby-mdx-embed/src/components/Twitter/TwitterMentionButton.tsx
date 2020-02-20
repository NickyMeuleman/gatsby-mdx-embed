import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ITwitterMentionButtonProps {
  /** Twitter username */
  username: string
  /** The size of the button */
  size?: 'large' | 'small'
}

export const TwitterMentionButton: FunctionComponent<ITwitterMentionButtonProps> = props => {
  const { username, size } = useDefaultProps('TwitterMentionButton', props)
  return (
    <a
      href={`https://twitter.com/intent/tweet?screen_name=${username}&ref_src=twsrc%5Etfw`}
      className="twitter-mention-button twitter-mention-button-mdx-embed"
      data-size={size}
    >{`Tweet to @${username}`}</a>
  )
}
