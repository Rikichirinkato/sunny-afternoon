import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';

let store;

beforeEach(() => {
    store = createStore(reducer);
    render(<Provider store={store}><App /></Provider>);
});

test('renders header with', () => {
    const h1 = screen.queryByText('Approved images (0)');
    expect(h1).toBeInTheDocument();
});
