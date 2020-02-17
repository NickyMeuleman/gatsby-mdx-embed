import { useContext } from 'react'
import PluginOptionsContext from '../context/PluginOptionsContext'

const useDefaultProps = (componentKey: string, passedProps: any) => {
  const pluginOptions: any = useContext(PluginOptionsContext)
  const defaultProps = pluginOptions.defaultProps[componentKey]
  return {
    ...defaultProps,
    ...passedProps
  }
}

export default useDefaultProps
