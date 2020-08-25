import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Layer from './layer';

let wrapper; let
  props;

configure({ adapter: new Adapter() });

beforeEach(() => {
  props = {
    answers: [
      {
        answer: 'I am self-employed',
      },
      {
        answer: 'I lost my job due to COVID-19',
        result: {
          text: 'This is result text'
        }
      }
    ],
    index: 1,
    onClick: () => {},
    layerCount: 1,
    moreInfo: { preview: 'What is that?', fullText: 'this is more info' },
    key: 1,
    question: 'this is a question'
  };

  wrapper = shallow(
    <Layer {...props} /> // eslint-disable-line
  );
});

describe('Layer content', () => {
  test('it displays a unique bullet for every option', () => {
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').first().text()).toEqual('I am self-employed');
  });

  test('it displays more info if it is provided', () => {
    expect(wrapper.find('.more-info__content').html()).toContain('this is more info');
  });

  test('it displays a question title if it is provided', () => {
    expect(wrapper.find('legend').text()).toBe('this is a question');
  });
});
