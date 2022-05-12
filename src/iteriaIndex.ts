import * as emotionreact from '@emotion/react'
import * as emotionstyled from '@emotion/styled'
import * as iteriaappcomponenttemplates from '@iteria-app/component-templates'
import * as iteriaappgenerator from '@iteria-app/generator'
import * as iteriaappidedevserver from '@iteria-app/ide-devserver'
import * as iteriaappgraphqllowcode from '@iteria-app/graphql-lowcode'
import * as muiiconsmaterial from '@mui/icons-material'
import * as muimaterial from '@mui/material'
import * as chartjs from 'chart.js'
import * as clsx from 'clsx'
import * as formik from 'formik'
import * as graphql from 'graphql'
import * as graphqltag from 'graphql-tag'
import * as history from 'history'
import * as moment from 'moment'
import * as osbrowserify from 'os-browserify'
import * as pathbrowserify from 'path-browserify'
import * as process from 'process'
import * as react from 'react'
import * as reactchartjs2 from 'react-chartjs-2'
import * as reactdom from 'react-dom'
import * as reactfeather from 'react-feather'
import * as reacthelmet from 'react-helmet'
import * as reacthookform from 'react-hook-form'
import * as reactperfectscrollbar from 'react-perfect-scrollbar'
import * as reactrouter from 'react-router'
import * as reactrouterdom from 'react-router-dom'
import * as urql from 'urql'
import * as uuid from 'uuid'
import * as yup from 'yup'
import * as proptypes from 'prop-types'

export default () => {
  window.__deps = {}
  window.__deps_default = {}
  ;(window.__deps['@emotion'] ?? (window.__deps['@emotion'] = {}))['react'] =
    emotionreact
  if (window.__deps['@emotion']['react'].default) {
    window.__deps_default['@emotion']['react'] =
      window.__deps['@emotion']['react'].default
  }

  ;(window.__deps['@emotion'] ?? (window.__deps['@emotion'] = {}))['styled'] =
    emotionstyled
  ;(window.__deps['@iteria-app'] ?? (window.__deps['@iteria-app'] = {}))[
    'component-templates'
  ] = iteriaappcomponenttemplates
  if (window.__deps['@iteria-app']['component-templates'].default) {
    window.__deps_default['@iteria-app']['component-templates'] =
      window.__deps['@iteria-app']['component-templates'].default
  }

  ;(window.__deps['@iteria-app'] ?? (window.__deps['@iteria-app'] = {}))[
    'generator'
  ] = iteriaappgenerator
  if (window.__deps['@iteria-app']['generator'].default) {
    window.__deps_default['@iteria-app']['generator'] =
      window.__deps['@iteria-app']['generator'].default
  }

  ;(window.__deps['@iteria-app'] ?? (window.__deps['@iteria-app'] = {}))[
    'graphql-lowcode'
  ] = iteriaappgraphqllowcode
  if (window.__deps['@iteria-app']['graphql-lowcode'].default) {
    window.__deps_default['@iteria-app']['graphql-lowcode'] =
      window.__deps['@iteria-app']['graphql-lowcode'].default
  }

  ;(window.__deps['@iteria-app'] ?? (window.__deps['@iteria-app'] = {}))[
    'ide-devserver'
  ] = iteriaappidedevserver
  if (window.__deps['@iteria-app']['ide-devserver'].default) {
    window.__deps_default['@iteria-app']['ide-devserver'] =
      window.__deps['@iteria-app']['ide-devserver'].default
  }

  ;(window.__deps['@mui'] ?? (window.__deps['@mui'] = {}))['icons-material'] =
    muiiconsmaterial
  if (window.__deps['@mui']['icons-material'].default) {
    window.__deps_default['@mui']['icons-material'] =
      window.__deps['@mui']['icons-material'].default
  }

  ;(window.__deps['@mui'] ?? (window.__deps['@mui'] = {}))['material'] =
    muimaterial
  if (window.__deps['@mui']['material'].default) {
    window.__deps_default['@mui']['material'] =
      window.__deps['@mui']['material'].default
  }

  window.__deps['chart.js'] = chartjs
  if (window.__deps['chart.js'].default) {
    window.__deps_default['chart.js'] = window.__deps['chart.js'].default
  }

  window.__deps['clsx'] = clsx
  if (window.__deps['clsx'].default) {
    window.__deps_default['clsx'] = window.__deps['clsx'].default
  }

  window.__deps['formik'] = formik
  if (window.__deps['formik'].default) {
    window.__deps_default['formik'] = window.__deps['formik'].default
  }

  window.__deps['graphql'] = graphql
  if (window.__deps['graphql'].default) {
    window.__deps_default['graphql'] = window.__deps['graphql'].default
  }

  window.__deps['graphql-tag'] = graphqltag
  if (window.__deps['graphql-tag'].default) {
    window.__deps_default['graphql-tag'] = window.__deps['graphql-tag'].default
  }

  window.__deps['history'] = history
  if (window.__deps['history'].default) {
    window.__deps_default['history'] = window.__deps['history'].default
  }

  window.__deps['moment'] = moment
  if (window.__deps['moment'].default) {
    window.__deps_default['moment'] = window.__deps['moment'].default
  }

  window.__deps['os-browserify'] = osbrowserify
  if (window.__deps['os-browserify'].default) {
    window.__deps_default['os-browserify'] =
      window.__deps['os-browserify'].default
  }

  window.__deps['path-browserify'] = pathbrowserify
  if (window.__deps['path-browserify'].default) {
    window.__deps_default['path-browserify'] =
      window.__deps['path-browserify'].default
  }
 
  window.__deps['process'] = process
  if (window.__deps['process'].default) {
    window.__deps_default['process'] = window.__deps['process'].default
  }

  window.__deps['react'] = react
  if (window.__deps['react'].default) {
    window.__deps_default['react'] = window.__deps['react'].default
  }

  window.__deps['react-chartjs-2'] = reactchartjs2

  window.__deps['react-dom'] = reactdom
  if (window.__deps['react-dom'].default) {
    window.__deps_default['react-dom'] = window.__deps['react-dom'].default
  }

  window.__deps['react-feather'] = reactfeather
  if (window.__deps['react-feather'].default) {
    window.__deps_default['react-feather'] =
      window.__deps['react-feather'].default
  }

  window.__deps['react-helmet'] = reacthelmet
  if (window.__deps['react-helmet'].default) {
    window.__deps_default['react-helmet'] =
      window.__deps['react-helmet'].default
  }

  window.__deps['react-hook-form'] = reacthookform
  if (window.__deps['react-hook-form'].default) {
    window.__deps_default['react-hook-form'] =
      window.__deps['react-hook-form'].default
  }

  window.__deps['react-perfect-scrollbar'] = reactperfectscrollbar
  if (window.__deps['react-perfect-scrollbar'].default) {
    window.__deps_default['react-perfect-scrollbar'] =
      window.__deps['react-perfect-scrollbar'].default
  }

  window.__deps['react-router'] = reactrouter
  if (window.__deps['react-router'].default) {
    window.__deps_default['react-router'] =
      window.__deps['react-router'].default
  }

  window.__deps['react-router-dom'] = reactrouterdom
  if (window.__deps['react-router-dom'].default) {
    window.__deps_default['react-router-dom'] =
      window.__deps['react-router-dom'].default
  }

  window.__deps['urql'] = urql
  if (window.__deps['urql'].default) {
    window.__deps_default['urql'] = window.__deps['urql'].default
  }

  window.__deps['uuid'] = uuid
  if (window.__deps['uuid'].default) {
    window.__deps_default['uuid'] = window.__deps['uuid'].default
  }

  window.__deps['yup'] = yup
  if (window.__deps['yup'].default) {
    window.__deps_default['yup'] = window.__deps['yup'].default
  }
  window.__deps['prop-types'] = proptypes
}
