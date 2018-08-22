// You're going to need react, mount from enzyme,
// mountToJson from enzyme-to-json, and ./Button
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './Button';



test('styles the button with a background of the context color', () => {

  const mountedButton = mount(<Button children={[2, 1, 2]} />, {
    context: {
      color: 'blue',
    }
  });

  expect(toJson(mountedButton)).toMatchSnapshot();
})
