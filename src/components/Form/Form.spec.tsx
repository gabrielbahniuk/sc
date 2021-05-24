import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, ShallowWrapper } from 'enzyme'
import Button from '@/components/Button'
import RiskLevelSelector from '@/components/RiskLevelSelector'
import RiskLevelProgressBar from '@/components/RiskLevelProgressBar'
import Form from '.'

describe('Test Form component', () => {
  it('should render Form', () => {
    const form = renderer.create(<Form />).toJSON()
    expect(form).toMatchSnapshot()
  })
  it('should have correct elements within Form', () => {
    const wrapper: ShallowWrapper = shallow(<Form />)
    expect(wrapper.find('input').length).toBe(2)
    expect(wrapper.find('label').length).toBe(3)
    expect(wrapper.find(Button).length).toBe(1)
    expect(wrapper.find(RiskLevelSelector).length).toBe(1)
    expect(wrapper.find(RiskLevelProgressBar).length).toBe(1)
  })
})
