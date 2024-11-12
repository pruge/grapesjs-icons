import 'grapesjs/dist/css/grapes.min.css'

import grapesjs, {usePlugin} from 'grapesjs'
import plugin from './plugin'

import type {PluginOptions} from './types'

const options: PluginOptions = {
  search: {
    total: 0,
    start: 0,
    limit: 100,
    debounce: 500,
    throttle: 500,
  },
}

grapesjs.init({
  container: '#editor',
  height: '100vh',
  storageManager: false,
  plugins: [usePlugin(plugin, options)],
})
