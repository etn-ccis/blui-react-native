// Mock I18nManager before any modules are loaded
jest.mock('react-native', () => {
    const RN = jest.requireActual('react-native');

    // Create a mutable isRTL property
    let isRTL = false;

    RN.I18nManager = {
        get isRTL() {
            return isRTL;
        },
        set isRTL(value) {
            isRTL = value;
        },
        allowRTL: jest.fn(),
        forceRTL: jest.fn(),
        swapLeftAndRightInRTL: jest.fn(),
    };

    return RN;
});
