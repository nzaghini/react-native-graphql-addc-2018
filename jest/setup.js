jest.mock('Linking', () => ({                                                    
    addEventListener: jest.fn(),                                                   
    removeEventListener: jest.fn(),                                                
    openURL: jest.fn(),                                                            
    canOpenURL: jest.fn(),                                                         
    getInitialURL: jest.fn(),                                                      
  })); 
  

jest.mock('../src/common/AppNavigator', () => ({
    AppNavigator: {
        router: {
            MovieList: jest.fn(),
            MovieDetails: jest.fn()
        }
    }
}));