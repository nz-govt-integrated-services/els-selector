import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Option from './option';

let wrapper; let
  props;

configure({ adapter: new Adapter() });

beforeEach(() => {
  props = {
    heading: 'Some Scheme',
    text: 'Lorem ipsum',
    links: [{ href: 'https://www.google.com', text: 'This is a link' }],
    conditions: ['You need to be a cat']
  };

  wrapper = shallow(
    <Option {...props} />
  );
});

describe('Option content', () => {
  test('it displays a heading', () => {
    expect(wrapper.find('.option__heading').first().html()).toContain('Some Scheme');
  });

  test('it displays links', () => {
    expect(wrapper.find('.option__links li').last().html()).toContain('This is a link');
    expect(wrapper.find('.option__links li').last().html()).toContain('https://www.google.com');
  });

  test('it displays text', () => {
    expect(wrapper.find('.option__text').first().html()).toContain('Lorem ipsum');
  });

  test('it displays conditions', () => {
    expect(wrapper.find('.option__conditions li').first().html()).toContain('You need to be a cat');
  });
});
