import React from 'react';
import Enzyme, {shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

import FormList from './form-list';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  const wrapper = shallow(<FormList {...props} />);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const formComponent = findByTestAttr(wrapper, 'component-form');
  expect(formComponent.length).toBe(1);
});


