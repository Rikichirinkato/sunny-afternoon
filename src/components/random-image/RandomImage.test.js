import { render, screen, fireEvent } from '@testing-library/react';
import RandomImageComponenet from './RandomImage';

describe('it should render RandomIname componene', () => {
    it('renders random image when there is some url', () => {
        const url = 'https://lastfm.freetls.fastly.net/i/u/500x500/221d9dea5bed3ecd731606df30f82ea3.jpg';
        render(<RandomImageComponenet url={url} emit={null} />);
        expect(screen.getByTestId('random-picture')).toBeInTheDocument();
    });
    
    it('renders empty state whe there is no image url', () => {
        render(<RandomImageComponenet url={null} emit={null} />);
        expect(screen.getByTestId('empty-state')).toBeInTheDocument();
    });
    
    it('click on component should trigger emit function', () => {
        const emit = jest.fn();
        render(<RandomImageComponenet url={null} emit={emit} />);
        fireEvent.click(screen.getByTestId('empty-state'));
        expect(emit).toHaveBeenCalledTimes(1);
    });
});
