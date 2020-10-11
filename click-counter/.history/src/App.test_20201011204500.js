import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without error", () =>{
const wrapper = shallow(<App />);
const appComponent = wrapper.find("[data-test='component-app']");
expect(appComponent.length);
});

test('renders increment button', () => {
});

test('renders counter display', () => {
});

test('counter starts at 0', () => {
});

test('counter increments when button is clicked', () => {
});