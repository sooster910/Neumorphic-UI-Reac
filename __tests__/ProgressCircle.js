

/**
 *  1. METHOD :  USING MOUNT
 */
import React from 'react';
import { mount } from 'enzyme';

import  Button from '../src/components/Button';
import 'jest-styled-components';

describe('<Button />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Button title="Hi"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

/**
 *  2. METHOD :  USING TREE RENDERER 
 */

// import React from 'react'
// import renderer from 'react-test-renderer'
// import Button from '../src/components/Button'
// import 'jest-styled-components';


// describe('Button Block', () => {
//   it('should render correctly', () => {
//     const tree = renderer
//     .create(<Button>Submit</Button>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
// });