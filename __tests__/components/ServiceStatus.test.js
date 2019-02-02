import React from 'react'
import {render, cleanup, waitForDomChange} from 'react-testing-library'
import 'jest-styled-components'

import ServiceStatus from '../../components/ServiceStatus'

afterEach(cleanup)

test('Changes color to green when ready', async () => {
  global.fetch = jest.fn(async () => ({ok: true}))

  const {container} = render(<ServiceStatus />)

  expect(container.firstChild).toHaveStyleRule('background', '#f4d142')

  await waitForDomChange({container})

  expect(container.firstChild).toHaveStyleRule('background', '#5ff441')
})

test("Changes color to red when response isn't ok", async () => {
  global.fetch = jest.fn(async () => ({ok: false}))

  const {container} = render(<ServiceStatus />)

  expect(container.firstChild).toHaveStyleRule('background', '#f4d142')

  await waitForDomChange({container})

  expect(container.firstChild).toHaveStyleRule('background', '#ff001f')
})

test('Changes color to red when throws error', async () => {
  global.fetch = jest.fn(async () => {
    throw new Error('Mocked error')
  })

  const {container} = render(<ServiceStatus />)

  expect(container.firstChild).toHaveStyleRule('background', '#f4d142')

  await waitForDomChange({container})

  expect(container.firstChild).toHaveStyleRule('background', '#ff001f')
})
