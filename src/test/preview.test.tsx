import { render } from '@testing-library/react';
import Preview from '../components/pages/preview';

describe('Preview', () => {
    test('renders Preview component without crashing', () => {
        const mockProps = {
            Data: {
                selectedMaterial: null,
                setSelectedMaterial: jest.fn(),
                price_per_m2: null,
                set_Price_per_m2: jest.fn(),
                width: null,
                setWidth: jest.fn(),
                length: null,
                setLength: jest.fn(),
                drillholes: null,
                setDrillholes: jest.fn(),
                wallOutlet: null,
                setWallOutlet: jest.fn(),
                edgingFinishWidth: null,
                setEdgingFinishWidth: jest.fn(),
                edgingFinishLength: null,
                setEdgingFinishLength: jest.fn(),
                rearWall: null,
                setRearWall: jest.fn(),
                windowsillWidth: null,
                setWindowsillWidth: jest.fn(),
                windowsillLength: null,
                setWindowsillLength: jest.fn(),
                isSelectedSinkHole: false,
                setIsSelectedSinkhole: jest.fn(),
                isSelectedSoapDispender: false,
                setIsSelectedSoapDispender: jest.fn(),
                isSelectedUndermountSink: false,
                setIsSelectedUndermountSink: jest.fn(),
                isSelectedInlaySink: false,
                setIsSelectedInlaySink: jest.fn(),
                totalprice: null,
                setTotalPrice: jest.fn(),
                isSelectedCoarseSink: false,
                setIsSelectedCoarseSink: jest.fn(),
                totalPrice: null,
            },
        };

        expect(() => render(<Preview {...mockProps} />)).not.toThrow();
    });
});