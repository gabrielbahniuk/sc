import React from 'react'
import RiskLevelSelector from '.'
import { create } from 'react-test-renderer'
import { shallow, ShallowWrapper } from 'enzyme'

describe('Test RiskLevelSelector', () => {
  const mockHandleRiskLevel = jest.fn()
  it('should render a risk level selector', () => {
    const riskLevelSelector = create(<RiskLevelSelector riskLevel={3} handleRiskLevel={mockHandleRiskLevel} />).toJSON()
    expect(riskLevelSelector).toMatchSnapshot()
  })
  it('should have 22 html option elements', () => {
    const wrapper: ShallowWrapper = shallow(<RiskLevelSelector riskLevel={3} handleRiskLevel={mockHandleRiskLevel} />)
    expect(wrapper.find('option').length).toEqual(23)
  })
})
