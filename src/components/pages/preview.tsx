import Logo from '../../assets/blisdigital-logo.svg';

function Preview() {
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
            <div className='px-12 flow-root'>
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

        </div>
    );
}

export default Preview;