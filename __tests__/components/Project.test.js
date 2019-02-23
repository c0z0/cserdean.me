import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Project from '../../components/Project'

afterEach(cleanup)

test('Matches snapshot', () => {
  const { container } = render(
    <Project.Row>
      <Project
        title="test"
        description="test"
        href="test"
        src="test"
        icon="test"
      >
        test content
      </Project>
    </Project.Row>
  )

  expect(container.firstChild).toMatchSnapshot()
})
