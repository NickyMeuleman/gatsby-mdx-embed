import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface IPinProps {
  /** Pinterest id */
  pinId: string
  /** Size */
  size: 'small' | 'medium' | 'large'
}

export const Pin: FunctionComponent<IPinProps> = props => {
  const { pinId, size } = useDefaultProps('Pin', props)
  return (
    <a
      className="pinterest-pin pinterest-pin-mdx-embed"
      data-pin-do="embedPin"
      data-pin-width={size}
      href={`https://www.pinterest.com/pin/${pinId}`}
    />
  )
}
