import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('Card Form', () => {
  const component = shallow(<App />)
  it('should render without crashing',() => {
 expect(component.find('div').exists()).toBe(true)
  })

  it('renders cardnumber input field',() =>{
expect(component.find('input.cardnumber').length).toEqual(1)
  })

it('Should match cardnumber label',() =>{
  expect(component.text()).toEqual('Enter Card Number : ')
    })
  })