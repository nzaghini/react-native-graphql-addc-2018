// A mock navigation for Jest
export const mockNavigation = {    
    navigate: jest.fn(), 
    state: jest.fn(), 
    dispatch: jest.fn(),
    goBack: jest.fn(), 
    dismiss: jest.fn(), 
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn(),
};
