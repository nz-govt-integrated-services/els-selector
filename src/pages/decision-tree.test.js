import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HashRouter } from "react-router-dom";

import DecisionTreePage from './decision-tree';

jest.useFakeTimers();

let wrapper;

configure({ adapter: new Adapter() });

describe('Layer recursion', () => {
  beforeEach(() => {
    wrapper = mount(
      <HashRouter basename='/'>
        <DecisionTreePage />
      </HashRouter>
    );
  });

  test('it has an H1', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
});
