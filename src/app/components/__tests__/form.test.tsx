jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));
jest.mock('../../store/useCardStore', () => ({
  __esModule: true, 
  default: jest.fn().mockImplementation(() => ({
    cards: [{ id: 1, title: 'Test Card', description: 'Test Description' }],
    addCard: jest.fn(),
  })),
}));
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useToast: jest.fn(() => jest.fn()), 
}));
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../form-components/form';

beforeAll(() => {
  jest.resetModules(); 
});
describe('Form Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with all fields', () => {
    render(<Form />);
    expect(screen.getByPlaceholderText('Enter card title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter card description')).toBeInTheDocument();
  });

  it('displays validation errors', async () => {
    const user = userEvent.setup();
    render(<Form />);

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Title is short')).toBeInTheDocument();
    expect(screen.getByText('Description is short')).toBeInTheDocument();
  });
});