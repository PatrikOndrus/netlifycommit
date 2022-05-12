import React from 'react'
import { useRoutes } from 'react-router-dom'
import { theme } from '../src/theme'
import { GraphqlcodegenDataProvider } from '@iteria-app/component-templates'
import {
  DataContext,
  ThemeProvider,
  I18nProvider,
  useLocale,
} from '@iteria-app/component-templates'
import {
  createClient,
  Provider as UrqlProvider,
  debugExchange,
  cacheExchange,
  fetchExchange,
} from 'urql'
import PropTypes from 'prop-types'
import '../src/mixins/chartjs'
import routes from './routes'
import { messages } from './locale'

import * as graphqlgen from './generated/graphql'
import introspection from './generated/introspect.json'

const graphqlcodegenDataProvider = new GraphqlcodegenDataProvider(
  graphqlgen,
  introspection.__schema as any
)
const client = createClient({
  // TODO web rollup: url: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT as string,
  url: '%VITE_HASURA_GRAPHQL_ENDPOINT%',
  exchanges: [debugExchange, cacheExchange, fetchExchange],
})

const App = () => {
  const routing = useRoutes(routes)
  const locale = useLocale()
  const messagesObject = messages(locale)

  return (
    <DataContext.Provider value={graphqlcodegenDataProvider}>
      <UrqlProvider value={client}>
        <I18nProvider locale={locale} messages={messagesObject}>
          <ThemeProvider theme={theme}>
            {routing}
          </ThemeProvider>
        </I18nProvider>
      </UrqlProvider>
    </DataContext.Provider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
