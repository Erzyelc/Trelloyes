import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import card from './card';

describe('Card Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
    ReactDOM.render(<card />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<card />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
})