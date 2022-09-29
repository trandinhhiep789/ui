import React from 'react'
import { render } from '@testing-library/react'

import Report from './Report'

describe('Report', () => {
    test('renders the Report component', () => {
        render(<Report content="<p>Content Report</p>" />)
    })
})
