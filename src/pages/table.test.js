import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { HashRouter } from "react-router-dom";

import TablePage from './table';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
jest.useFakeTimers();

let wrapper;

configure({ adapter: new Adapter() });

describe('Layer recursion', () => {
  beforeEach(() => {
    wrapper = mount(
      <HashRouter basename='/'>
        <TablePage />
      </HashRouter>
    );
  });

  test('it has an H1', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
});
