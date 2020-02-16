import React, { FunctionComponent } from 'react'
import { PluginOptionsContext } from '../../context/PluginOptionsContext'

export interface ICodePenProps {
  /** CodePen id */
  codePenId: string
  /** Height for the iFrame */
  height?: number
  /** Which tabs to display */
  tabs?: string[] | 'js' | 'css' | 'scss' | 'less' | 'result'
}

export const CodePen: FunctionComponent<ICodePenProps> = ({ codePenId }) => {
  const {
    defaultProps: {
      CodePen: { height, tabs }
    }
  }: any = React.useContext(PluginOptionsContext)
  console.log({ height, tabs })

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
