import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './homePage';
import { SlimUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


// Mocking the `useQuery` hook
jest.mock('@tanstack/react-query', () => {
  const actual = jest.requireActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: jest.fn(),
  };
});

const mockUseQuery = useQuery as jest.Mock;

// Utility to render component with all required providers
const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

describe('HomePage', () => {
  const mockUsers: SlimUser[] = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
      age: 31,
      gender: 'male',
      username: 'johndoe',
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Doe',
      email: 'jane.doe@example.com',
      birthDate: '1992-02-02',
      age: 29,
      gender: 'female',
      username: 'janedoe',
    },
  ];

  it('should render loader during data fetch', () => {
    mockUseQuery.mockImplementation(() => ({
      isLoading: true,
      data: [],
      isError: false,
      error: null,
    }));

    renderWithProviders(<HomePage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render error message if fetch fails', () => {
    mockUseQuery.mockImplementation(() => ({
      isLoading: false,
      data: [],
      isError: true,
      error: new Error('Failed to fetch users'),
    }));

    renderWithProviders(<HomePage />);
    expect(screen.getByText(/Error: Failed to fetch users/i)).toBeInTheDocument();
  });

  it('should render users list when data is successfully fetched', async () => {
    mockUseQuery.mockImplementation(() => ({
      isLoading: false,
      data: mockUsers,
      isError: false,
      error: null,
    }));

    renderWithProviders(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });
});
