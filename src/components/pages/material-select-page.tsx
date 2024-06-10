import { useState } from "react";
import MaterialSelect from "./material-select";
import Preview from "./preview";
import { AlleMaterialen } from "./home";

function MaterialSelectPage() {
    const [gekozenOpties, setGekozenOpties] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
    const [price_per_m2, set_Price_per_m2] = useState<number | null>(null);
    const [width, setWidth] = useState<number | null>(null);
    const [length, setLength] = useState<number | null>(null);
    const [drillholes, setDrillholes] = useState<number | null>(null);
    const [wallOutlet, setWallOutlet] = useState<number | null>(null);
    const [edgingFinishWidth, setEdgingFinishWidth] = useState<number | null>(
        null,
    );
    const [edgingFinishLength, setEdgingFinishLength] = useState<number | null>(
        null,
    );
    const [rearWall, setRearWall] = useState<number | null>(null);
    const [windowsillWidth, setWindowsillWidth] = useState<number | null>(null);
    const [windowsillLenght, setWindowsillLenght] = useState<number | null>(null);

    const [isSelectedSinkHole, setIsSelectedSinkhole] = useState<boolean>(false);
    const [isSelectedSoapDispender, setIsSelectedSoapDispender] =
        useState<boolean>(false);
    const [isSelectedUndermountSink, setIsSelectedUndermountSink] =
        useState<boolean>(false);
    const [isSelectedInlaySink, setIsSelectedInlaySink] =
        useState<boolean>(false);
    const [isSelectedCoarseSink, setIsSelectedCoarseSink] =
        useState<boolean>(false);

    const [totalPrice, setTotalPrice] = useState<number | null>(null);

    const Alldata = {
        selectedMaterial,
        setSelectedMaterial,
        price_per_m2,
        set_Price_per_m2,
        width,
        setWidth,
        length,
        setLength,
        drillholes,
        setDrillholes,
        wallOutlet,
        setWallOutlet,
        edgingFinishWidth,
        setEdgingFinishWidth,
        edgingFinishLength: edgingFinishLength,
        setEdgingFinishLength: setEdgingFinishLength,
        rearWall,
        setRearWall,
        windowsillWidth,
        setWindowsillWidth,
        windowsillLength: windowsillLenght,
        setWindowsillLength: setWindowsillLenght,
        isSelectedSinkHole,
        setIsSelectedSinkhole,
        isSelectedSoapDispender,
        setIsSelectedSoapDispender,
        isSelectedUndermountSink,
        setIsSelectedUndermountSink,
        isSelectedInlaySink,
        setIsSelectedInlaySink,
        isSelectedCoarseSink,
        setIsSelectedCoarseSink,
        totalPrice,
        setTotalPrice
    };
    console.log(AlleMaterialen)
    console.log(selectedMaterial);
    return (
        <div className="grid-container grid h-screen grid-cols-2">
            <div className="px-8 py-4 border-r-2 h-screen">
                <div className="pt-4 pb-8">
                    <h1 className="text-4xl font-bold">
                        <span className="text-primary">Blis</span>
                        <span className="text-outline">Digital</span>
                    </h1>
                </div>
                <MaterialSelect Data={Alldata} />
            </div>
            <div><Preview Data={Alldata} /></div>
        </div>
    );
}

export default MaterialSelectPage;
