export const getPadding = (aspectRatio: string) => {
  const config = {
    '1:1': {
      paddingTop: '100%'
    },
    '16:9': {
      paddingTop: '56.25%'
    },
    '4:3': {
      paddingTop: '75%'
    },
    '3:2': {
      paddingTop: '66.66%'
    },
    '8.5': {
      paddingTop: '62.5%'
    }
  }
  // @ts-ignore
  return config[aspectRatio]
}

export const createScriptTag = (
  providerEmbedUrl: string | null,
  providerEmbedScript: string | null
) => {
  const script = document.createElement(`script`)

  script.type = `text/javascript`

  if (providerEmbedUrl) {
    script.src = providerEmbedUrl
  }

  if (providerEmbedScript) {
    script.innerText = providerEmbedScript
  }

  script.onerror = error => {
    console.error(`MdxEmbedProvider ${(error as any).type}`, error)
  }

  document.getElementsByTagName(`head`)[0].appendChild(script)
}

export const createStyleSheet = (href: string) => {
  const link = document.createElement(`link`)

  link.type = `text/css`
  link.rel = `stylesheet`
  link.href = href

  document.getElementsByTagName(`head`)[0].appendChild(link)
}

export const withDefaults = (options: any = { defaultProps: {} }) => {
  return {
    defaultProps: {
      CodePen: {
        height: 500,
        tabs: 'result',
        ...options.defaultProps.CodePen
      },
      Pin: {
        size: 'small'
      },
      PinterestBoard: {
        width: 400,
        height: 250,
        imageWidth: 80,
        variant: 'board'
      },
      SoundCloud: {
        width: '100%',
        height: 'auto',
        autoPlay: false,
        visual: false
      },
      Spotify: {
        width: 320,
        height: 380
      },
      Twitch: {
        autoPlay: false,
        skipTo: { h: 0, m: 0, s: 0 }
      },
      Tweet: {
        theme: 'light',
        align: 'left',
        ...options.defaultProps.Tweet
      },
      TwitterFollowButton: {
        showFollowers: false,
        showUsername: true,
        size: 'small'
      },
      TwitterHashtagButton: {
        size: 'small'
      },
      TwitterList: {
        theme: 'light',
        width: '498px',
        height: null
      },
      TwitterMentionButton: {
        size: 'small'
      },
      TwitterTimeline: {
        theme: 'light',
        showLikes: null,
        width: '498px',
        height: null
      },
      Vimeo: {
        autoPlay: false,
        skipTo: { h: 0, m: 0, s: 0 }
      },
      Wikipedia: {
        height: 600
      },
      YouTube: {
        aspectRatio: '16:9',
        autoPlay: false,
        skipTo: { h: 0, m: 0, s: 0 }
      }
    }
  }
}
