/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



import '@quasar/extras/mdi-v4/mdi-v4.css'

import '@quasar/extras/roboto-font/roboto-font.css'

import '@quasar/extras/material-icons/material-icons.css'



import '@quasar/extras/animate/zoomIn.css'

import '@quasar/extras/animate/zoomOut.css'

import '@quasar/extras/animate/slideInUp.css'

import '@quasar/extras/animate/slideInDown.css'

import '@quasar/extras/animate/slideOutUp.css'

import '@quasar/extras/animate/slideOutDown.css'

import '@quasar/extras/animate/slideInRight.css'

import '@quasar/extras/animate/slideInLeft.css'

import '@quasar/extras/animate/slideOutRight.css'

import '@quasar/extras/animate/slideOutLeft.css'


// We load Quasar stylesheet file
import 'quasar/dist/quasar.sass'




import 'src/css/app.sass'


import Vue from 'vue'
import createApp from './app.js'















async function start () {
  const { app, store, router } = await createApp()

  

  

  

    

    

    new Vue(app)

    

  

}

start()
