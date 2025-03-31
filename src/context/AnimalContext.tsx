import { createContext, useContext, useReducer, ReactNode } from 'react'

// Define our state types
type Location = 'all' | 'CA' | 'TN'

interface AnimalState {
  activeLocation: Location
  searchQuery: string
  selectedAnimalType: string | null
  isLoading: boolean
  filters: {
    location: Location
    searchTerm: string
  }
}

// Define our action types
type AnimalAction =
  | { type: 'SET_LOCATION'; payload: Location }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_ANIMAL_TYPE'; payload: string | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_FILTERS' }

// Initial state
const initialState: AnimalState = {
  activeLocation: 'all',
  searchQuery: '',
  selectedAnimalType: null,
  isLoading: false,
  filters: {
    location: 'all',
    searchTerm: ''
  }
}

// Create context
const AnimalContext = createContext<{
  state: AnimalState
  dispatch: React.Dispatch<AnimalAction>
} | undefined>(undefined)

// Reducer function
function animalReducer(state: AnimalState, action: AnimalAction): AnimalState {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        activeLocation: action.payload,
        filters: { ...state.filters, location: action.payload }
      }
    case 'SET_SEARCH':
      return {
        ...state,
        searchQuery: action.payload,
        filters: { ...state.filters, searchTerm: action.payload }
      }
    case 'SET_ANIMAL_TYPE':
      return {
        ...state,
        selectedAnimalType: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'RESET_FILTERS':
      return {
        ...state,
        activeLocation: 'all',
        searchQuery: '',
        filters: {
          location: 'all',
          searchTerm: ''
        }
      }
    default:
      return state
  }
}

// Provider component
export function AnimalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(animalReducer, initialState)

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  )
}

// Custom hook for using the context
export function useAnimal() {
  const context = useContext(AnimalContext)
  if (context === undefined) {
    throw new Error('useAnimal must be used within an AnimalProvider')
  }
  return context
}