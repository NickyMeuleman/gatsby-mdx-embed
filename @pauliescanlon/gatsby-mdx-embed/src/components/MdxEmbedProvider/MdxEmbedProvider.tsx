import React, { FunctionComponent } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { CodePen } from '../CodePen'
import { CodeSandbox } from '../CodeSandbox'
import { Flickr } from '../Flickr'
import { Gist } from '../Gist'
import { Vimeo } from '../Vimeo'
import { Instagram } from '../Instagram'
import { Pin, PinterestBoard, PinterestFollowButton } from '../Pinterest'
import { SoundCloud } from '../SoundCloud'
import { Spotify } from '../Spotify'
import { Twitch } from '../Twitch'
import {
  Tweet,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterList,
  TwitterMentionButton,
  TwitterTimeline
} from '../Twitter'
import { Wikipedia } from '../Wikipedia'
import { YouTube } from '../YouTube'

const components = {
  CodePen,
  CodeSandbox,
  Flickr,
  Gist,
  Instagram,
  Pin,
  PinterestBoard,
  PinterestFollowButton,
  SoundCloud,
  Spotify,
  Twitch,
  Tweet,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterList,
  TwitterMentionButton,
  TwitterTimeline,
  Vimeo,
  Wikipedia,
  YouTube
} as any

export const MdxEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
