import React, { FunctionComponent } from 'react'

export interface ISpotifyProps {
  /** Spotify link */
  spotifyLink: string
  /** Width for the iFrame */
  width?: number | string
  /** Height for the iFrame */
  height?: number | string
}

export const Spotify: FunctionComponent<ISpotifyProps> = ({
  spotifyLink,
  width = 320,
  height = 380
}: ISpotifyProps) => (
  <iframe
    title={`spotify-${spotifyLink}`}
    className="spotify-mdx-embed"
    src={`https://open.spotify.com/embed/${spotifyLink}`}
    width={width}
    height={height}
    frameBorder="0"
    allow="encrypted-media"
  />
)
