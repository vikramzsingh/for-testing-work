import React from 'react';
import { shallow } from "enzyme";
import TestComponent from './TestComponent';
// import adapter from '../setupTests'

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow(<TestComponent/>);
    expect(wrapper.find("h1").text()).toEqual("Hello React App!");
  });
});