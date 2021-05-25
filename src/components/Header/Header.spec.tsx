import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { Header } from './Header'

describe('Header Component', () => {
  it('should render logo within header', () => {
    const wrapper: ReactWrapper = mount(<Header />)
    expect(wrapper.find('svg').length).toEqual(1)
    wrapper.unmount()
  })
})
