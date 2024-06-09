import Logo from '../../assets/blisdigital-logo.svg';

function Preview(props: {
    Data: {
        selectedMaterial: string | null;
        setSelectedMaterial: (arg0: string) => void;
        width: number | null;
        setWidth: (arg0: number) => void;
        length: number | null;
        setLength: (arg0: number) => void;
        drillholes: number | null;
        setDrillholes: (arg0: number) => void;
        wallOutlet: number | null;
        setWallOutlet: (arg0: number) => void;
        edgingFinishWidth: number | null;
        setEdgingFinishWidth: (arg0: number) => void;
        edgingFinishHeight: number | null;
        setEdgingFinishHeight: (arg0: number) => void;
        rearWall: number | null;
        setRearWall: (arg0: number) => void;
        windowsillWidth: number | null;
        setWindowsillWidth: (arg0: number) => void;
        windowsillHeight: number | null;
        setWindowsillHeight: (arg0: number) => void;
        isSelectedSinkHole: boolean;
        setIsSelectedSinkhole: (arg0: boolean) => void;
        isSelectedSoapDispender: boolean;
        setIsSelectedSoapDispender: (arg0: boolean) => void;
        isSelectedUndermountSink: boolean;
        setIsSelectedUndermountSink: (arg0: boolean) => void;
        isSelectedInlaySink: boolean;
        setIsSelectedInlaySink: (arg0: boolean) => void;
        isSelectedCoarseSink: boolean;
        setIsSelectedCoarseSink: (arg0: boolean) => void;
        totalPrice: number | null;
        setTotalPrice: (arg0: number) => void;
    }
}) {
    const currentDate = new Date();
    return (
        <div className="rounded-md bg-clip-content bg-white px-32 py-8 h-screen">
            <div className="px-12 pt-20 pb-10 flow-root">
                <img src={Logo} alt="Blis Digital Logo" className='float-left' />
                <div className='float-right'>
                    <p className="text-xs font-bold text-black">Blis Digital</p>
                    <p className="text-xs font-bold text-black">1234 AB, Lorem Ipsum</p>
                    <p className="text-xs font-bold text-black">Tel: 123 456 7890</p>
                </div>
            </div>
            <div className='px-12 pb-5 flow-root'>
                <div className='float-left'>
                    <p className="text-xs font-bold text-black">Invoice No: 0000001</p>
                    <p className="text-xs font-bold text-black">Date: {currentDate.getDate()}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}</p>
                </div>
                <div className='float-right'>
                    <p className="text-xs font-bold text-black">Voor:</p>
                    <p className="text-xs font-bold text-black">Lorem Ipsum</p>
                    <p className="text-xs font-bold text-black">Lorem Ipsum</p>
                    <p className="text-xs font-bold text-black">Lorem Ipsum</p>
                    <p className="text-xs font-bold text-black">Lorem Ipsum, 1234 AB</p>
                </div>
            </div>
            <div className='border-b-black px-12 flex'>
                <p className='pr-16 text-xs font-bold text-black'>#</p>
                <p className='w-48 text-xs font-bold text-black'>Beschrijving</p>
                <p className='w-60 text-xs font-bold text-black'>Hoeveelheid</p>
                <p className='w-20 text-xs font-bold text-black'>Prijs</p>
                <p className='text-xs font-bold text-black'>Totaal</p>
            </div>
            <div className='px-12 pb-3'>
                <p className='text-xs font-bold text-black'>___________________________________________________________________________________________________________________________</p>
            </div>
            <div className='px-12 flex'>
                <p className='pr-16 text-xs font-bold text-black'>1</p>
                <p className='w-48 text-xs font-bold text-black'>{props.Data.selectedMaterial}</p>
                <p className='w-60 text-xs font-bold text-black'>{props.Data.width! * props.Data.length!} vierkante meters</p>
                <p className='w-20 text-xs font-bold text-black'></p>
                <p className='text-xs font-bold text-black'>Totaal</p>
            </div>

        </div>
    );
}

export default Preview;