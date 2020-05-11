import ReactDOM from 'react-dom'
import React from 'react'
import Profile from './Profile'
import setupYandexCounter from './yandexCounter'

setupYandexCounter()
ReactDOM.render(<Profile />, window.document.getElementById('root'))
