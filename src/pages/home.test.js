import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HashRouter } from "react-router-dom";

import HomePage from './home';

jest.useFakeTimers();

let wrapper;

configure({ adapter: new Adapter() });

describe('Layer recursion', () => {
  beforeEach(() => {
    wrapper = mount(
      <HashRouter basename='/'>
        <HomePage />
      </HashRouter>
    );
  });

  test('it has an H1', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
});
