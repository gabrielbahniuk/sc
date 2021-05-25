import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { InitialInvestment } from './InitialInvestment'
import { Form } from '@/components/Form'
import { create } from 'react-test-renderer'

describe('InitialInvestment Page', () => {
  it('should match snapshot', () => {
    const initialInvestmentPage = create(<InitialInvestment />).toJSON()
    expect(initialInvestmentPage).toMatchSnapshot()
  })
  it('should render page components', () => {
    const wrapper: ShallowWrapper = shallow(<InitialInvestment />)
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find(Form).length).toEqual(1)
  })
})
