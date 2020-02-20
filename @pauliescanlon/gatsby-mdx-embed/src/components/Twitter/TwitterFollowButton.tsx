import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ITwitterFollowButtonProps {
  /** Twitter username */
  username: string
  /** Show the follower count */
  showFollowers?: boolean
  /** Show the username */
  showUsername?: boolean
  /** The size of the button */
  size?: 'large' | 'small'
}

export const TwitterFollowButton: FunctionComponent<ITwitterFollowButtonProps> = props => {
  const { username, showFollowers, showUsername, size } = useDefaultProps(
    'TwitterFollowButton',
    props
  )
  return (
    <a
      href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
      className="twitter-follow-button twitter-follow-button-mdx-embed"
      data-show-count={showFollowers}
      data-show-screen-name={showUsername}
      data-size={size}
    >{`Follow @${username}`}</a>
  )
}
