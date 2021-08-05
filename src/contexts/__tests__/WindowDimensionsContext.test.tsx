import { render } from '@testing-library/react'

import React from 'react'
import WindowDimensionsProvider, { useWindowDimensions } from '~contexts/window-dimensions'
import { fireResize } from '~testSetup/testUtils'

const TestDimensions = () => {
  const { innerWidth, innerHeight } = useWindowDimensions()
  return (
    <>
      <div> Inner Width: {innerWidth}</div>
      <div> Inner Height: {innerHeight}</div>
    </>
  )
}

describe('WindowDimensionsProvider Component', () => {
  let windowSpy = null
  // at the top to save the current window object
  beforeEach(() => {
    windowSpy = jest.spyOn(global, 'window', 'get')
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  it('should set the inner width and height based off window object', async () => {
    const { queryByText } = render(
      <WindowDimensionsProvider>
        <TestDimensions />
      </WindowDimensionsProvider>
    )
    // Set the window viewport
    await fireResize(1400, 1300)
    expect(queryByText('Inner Width: 1400')).toBeInTheDocument()
    expect(queryByText('Inner Height: 1300')).toBeInTheDocument()
  })

  it('should account for the window being undefined and set the dimensions back on resize', async () => {
    const currentWindow = window
    const { queryByText, rerender } = render(
      <WindowDimensionsProvider>
        <TestDimensions />
      </WindowDimensionsProvider>
    )

    // Set the window viewport
    await fireResize(0, 0)
    windowSpy.mockImplementation(() => undefined)
    expect(window).toBeUndefined()
    expect(queryByText('Inner Width: 0')).toBeInTheDocument()
    expect(queryByText('Inner Height: 0')).toBeInTheDocument()

    rerender(
      <WindowDimensionsProvider>
        <TestDimensions />
      </WindowDimensionsProvider>
    )

    // Set the window viewport
    windowSpy.mockImplementation(() => currentWindow)
    expect(window).not.toBeUndefined()
    await fireResize(1400, 1300)
    expect(queryByText('Inner Width: 1400')).toBeInTheDocument()
    expect(queryByText('Inner Height: 1300')).toBeInTheDocument()
  })
})
