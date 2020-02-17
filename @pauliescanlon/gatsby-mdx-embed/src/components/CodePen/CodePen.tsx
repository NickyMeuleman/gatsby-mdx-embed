import React, { FunctionComponent } from 'react'
import useDefaultProps from '../../hooks/useDefaultProps'

export interface ICodePenProps {
  /** CodePen id */
  codePenId: string
  /** Height for the iFrame */
  height?: number
  /** Which tabs to display */
  tabs?: string[] | 'js' | 'css' | 'scss' | 'less' | 'result'
}

export const CodePen: FunctionComponent<ICodePenProps> = props => {
  const { codePenId, height, tabs } = useDefaultProps('CodePen', props)
  console.log({ codePenId, height, tabs })
  return (
    <iframe
      title={`codePen-${codePenId}`}
      className="codepen-mdx-embed"
      height={height}
      style={{
        width: '100%'
      }}
      scrolling="no"
      src={`https://codepen.io/team/codepen/embed/${codePenId}?height=265&theme-id=default&default-tab=${tabs}`}
      frameBorder="no"
      allowFullScreen
    />
  )
}
