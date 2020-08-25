import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';

import DECISIONTREE_DATA from 'data/test-decision-tree.json';
import DecisionTree from './decision-tree';

jest.useFakeTimers();

let wrapper;

configure({ adapter: new Adapter() });

describe('Layer recursion', () => {
  beforeEach(() => {
    // To mock scrollIntoView see https://github.com/jsdom/jsdom/pull/2332
    Element.prototype.scrollIntoView = () => {};
    wrapper = mount(
      <DecisionTree
        data={DECISIONTREE_DATA}
      />
    );
  });

  test('it displays the next set of questions on click', () => {
    expect(wrapper.find('input').length).toBe(3);
    wrapper.find('input').first().simulate('click');
    expect(wrapper.find('input').length).toBe(5);
  });

  test('it clears all unrelated questions when click on new parent button', () => {
    // Start with total 3 buttons revealed
    expect(wrapper.find('input').length).toBe(3);

    // Reveals subquestion A
    wrapper.find('input').first().simulate('click');
    expect(wrapper.find('input').length).toBe(5);

    // Goes to result - no extra buttons
    wrapper.find('input').at(1).simulate('click');
    expect(wrapper.find('input').length).toBe(3);
  });
  test('it does not show results before getting through all the questions', () => {
    // start with total 3 buttons revealed, should be no results
    expect(wrapper.find('input').length).toBe(3);
    act(() => jest.runAllTimers());
    wrapper.update();
    expect(wrapper.find('.result').length).toBe(0);

    // click on layer 1 reveals +2 buttons, still no results
    wrapper.find('input').first().simulate('click');
    expect(wrapper.find('input').length).toBe(5);
    act(() => jest.runAllTimers());
    wrapper.update();
    expect(wrapper.find('.result').length).toBe(0);
  });
  test('it shows results if we click the correct combination of buttons', () => {
    expect(wrapper.find('input').length).toBe(3);
    act(() => jest.runAllTimers());
    wrapper.update();
    // Second answer goes straight to results
    wrapper.find('input').at(1).simulate('click');
    expect(wrapper.find('.result').length).toBe(0);
    // force debounce timeout to finish
    act(() => jest.runAllTimers());
    wrapper.update();
    expect(wrapper.find('.result').length).toBe(1);
  });
});
