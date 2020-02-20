import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface IPinterestBoardProps {
  /** Pinterest link */
  pinterestLink: string
  /** Width for the board */
  width?: number
  /** Height for the board */
  height?: number
  /** Size of the thumbnails */
  imageWidth?: number
  /** The type of board */
  variant?: 'board' | 'user'
}

export const PinterestBoard: FunctionComponent<IPinterestBoardProps> = props => {
  const { pinterestLink, width, height, imageWidth, variant } = useDefaultProps(
    'PinterestBoard',
    props
  )
  // TODO: TypeScript shows warnings about possibly undefined because the returntype of useDefaultProps is not typed to always include defaults (it does)
  return (
    <a
      className="pinterest-board pinterest-board-mdx-embed"
      data-pin-do={`embed${variant.charAt(0).toUpperCase()}${variant.slice(1)}`}
      data-pin-board-width={width}
      data-pin-scale-height={height}
      data-pin-scale-width={imageWidth}
      href={`https://www.pinterest.com/${pinterestLink}`}
    />
  )
}
