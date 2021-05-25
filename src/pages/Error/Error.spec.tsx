import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { create } from 'react-test-renderer'
import { Error } from './Error'

let wrapper: ShallowWrapper

beforeAll(() => {
  wrapper = shallow(<Error />)
})

afterAll(() => {
  wrapper.unmount()
})

describe('Error Component', () => {
  it('should render Error component', () => {
    const errorComponent = create(<Error />).toJSON()
    expect(errorComponent).toMatchSnapshot()
  })

  it('should render title element', () => {
    expect(wrapper.find('h1').length).toBe(1)
  })
  it('should render button', () => {
    expect(wrapper.find('Button').length).toBe(1)
  })
})
