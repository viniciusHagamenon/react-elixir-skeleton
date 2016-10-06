'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/main'

import { useStrict } from 'mobx'

// Doesn't allow state changes out of an @action:
useStrict(true)

ReactDOM.render(
	<Main />,
	document.getElementById('app')
)
