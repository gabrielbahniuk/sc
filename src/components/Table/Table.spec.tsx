import React from 'react'
import Table from '.'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('Test Table component', () => {
  const tableProps = {
    investmentValue: 10,
    riskLevel: 3,
    yearsInvestment: 1,
    cones: [{ riskLevel: 3, mu: 0.0216, sigma: 0.0215 }]
  }
  it('should render Table if isVisible prop is true', () => {
    const table = create(<Table {...tableProps} isVisible={true} />).toJSON()
    expect(table).toMatchSnapshot()
  })
  it('should not render Table if isVisible prop is false', () => {
    const wrapper = shallow(<Table {...tableProps} isVisible={false} />)
    expect(wrapper.find('table')).toHaveLength(0)
  })
})
