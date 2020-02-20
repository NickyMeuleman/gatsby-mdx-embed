import React, { FunctionComponent, Fragment, useEffect, useState } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface IWikipediaProps {
  /** Wikipedia page link */
  wikipediaLink: string
  /** Height for the iFrame */
  height?: number | string
}

interface IWikipediaState {
  /** Loading status */
  isLoading: boolean
  /** Error status */
  hasError: boolean
  /** HTML response from api  */
  body?: string
}

export const Wikipedia: FunctionComponent<IWikipediaProps> = props => {
  const { wikipediaLink, height } = useDefaultProps('Wikipedia', props)
  const [wikiResponse, setWikiResponse] = useState<IWikipediaState>({
    isLoading: true,
    hasError: false,
    body: ''
  })

  const wikipediaEmbedUrl = `https://en.wikipedia.org/api/rest_v1/page/html/${wikipediaLink}`

  useEffect(() => {
    fetch(wikipediaEmbedUrl)
      .then(response => response.text())
      .then(response => {
        if (response) {
          setWikiResponse({
            isLoading: false,
            hasError: false,
            body: response.replace(
              /<a rel="mw:WikiLink"/g,
              '<a target="_blank" rel="mw:WikiLink"'
            )
          })
        }

        if (!response) {
          setWikiResponse({
            isLoading: false,
            hasError: true
          })
        }
      })
  }, [wikipediaEmbedUrl])

  return (
    <Fragment>
      {!wikiResponse.isLoading && (
        <iframe
          className="wikipedia-mdx-embed"
          title={wikipediaLink}
          frameBorder="0"
          style={{
            width: '100%',
            minHeight: height
          }}
          srcDoc={wikiResponse.body}
        />
      )}
    </Fragment>
  )
}
