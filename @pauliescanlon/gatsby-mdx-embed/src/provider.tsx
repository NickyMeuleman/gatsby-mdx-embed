import React from 'react'
import { MdxEmbedProvider } from './components/MdxEmbedProvider'
import PluginOptionsContext from './context/PluginOptionsContext'
import { withDefaults } from './utils'

interface IProviderProps {
  element: React.ReactNode
}

module.exports = ({ element }: IProviderProps, options: any) => {
  const optionsWithDefaults = withDefaults(options)
  return (
    <PluginOptionsContext.Provider value={optionsWithDefaults}>
      <MdxEmbedProvider>{element}</MdxEmbedProvider>
    </PluginOptionsContext.Provider>
  )
}
