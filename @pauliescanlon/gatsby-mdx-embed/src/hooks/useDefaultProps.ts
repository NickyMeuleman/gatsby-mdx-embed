import { useContext } from 'react'
import PluginOptionsContext from '../context/PluginOptionsContext'

const useDefaultProps = <Props>(
  componentKey: string,
  passedProps: Props
): Props => {
  // TODO: better TS typings
  // The returning the same type as Props is not really true, many values that were optional there and might not exist are supplied now.
  const pluginOptions: any = useContext(PluginOptionsContext)
  const defaultProps = pluginOptions.defaultProps[componentKey]
  return {
    ...defaultProps,
    ...passedProps
  }
}

export default useDefaultProps
