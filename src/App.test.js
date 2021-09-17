import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';

describe('it shoud render component', () => {
    it('renders app with empty state', () => {
        const store = createStore(reducer);
        render(<Provider store={store}><App /></Provider>);
        const h1 = screen.queryByText('Approved images (0)');
        expect(h1).toBeInTheDocument();
        expect(screen.getByTestId('empty-state')).toBeInTheDocument();
    });    
});
