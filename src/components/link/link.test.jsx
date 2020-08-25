import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Link from './link';

let wrapper; let
  props;

configure({ adapter: new Adapter() });

beforeEach(() => {
  props = {
    href: 'https://www.website.com',
    text: 'This is the text'
  };

  wrapper = shallow(
    <Link {...props} />
  );
});

describe('Link content', () => {
  test('it displays external class on <a> link', () => {
    expect(wrapper.find('a').html()).toContain('class="external"');
  });

  test('it displays text', () => {
    expect(wrapper.find('a').text()).toEqual('This is the text');
  });

  test('it displays the href', () => {
    expect(wrapper.find('a').html()).toContain('href="https://www.website.com"');
  });

  test('it displays a nonvisual-indicator span', () => {
    expect(wrapper.find('.nonvisual-indicator')).toBeDefined();
  });
});
