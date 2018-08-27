import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('Card Number', () => {
  const component = shallow(<App />)
  it('should render without crashing',() => {
 expect(component.find('div').exists()).toBe(true)
  })

  it('renders cardnumber input',() =>{
expect(component.find('input').length).toEqual(1)
  })
})
