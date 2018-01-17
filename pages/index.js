import React, { Component } from 'react'

import withColorScroller from '../components/ColorScroller'

import Title from '../components/Title'

const Index = () => <Title />

export default withColorScroller(Index, ['#ffffff', '#ff00f1'])
