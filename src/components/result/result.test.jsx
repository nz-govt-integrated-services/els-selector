import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Result from './result';

let wrapper; let
  props;

configure({ adapter: new Adapter() });

beforeEach(() => {
  props = {
    text: 'Lorem ipsum',
    links: [{ href: 'https://www.google.com', text: 'This is a link' }],
    conditions: ['You need to be a cat']
  };

  wrapper = shallow(
    <Result {...props} />
  );
});

describe('Result content', () => {
  test('it displays links', () => {
    expect(wrapper.find('li').last().html()).toContain('This is a link');
    expect(wrapper.find('li').last().html()).toContain('https://www.google.com');
  });

  test('it displays text', () => {
    expect(wrapper.find('p').first().html()).toContain('Lorem ipsum');
  });

  test('it displays conditions', () => {
    expect(wrapper.find('.result__conditions li').first().html()).toContain('You need to be a cat');
  });
});
