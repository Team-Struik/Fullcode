import { useState } from "react";
import MaterialSelect from "./material-select";
import Preview from "./preview";
import { AlleMaterialen } from "./home";

function MaterialSelectPage() {
    const [gekozenOpties, setGekozenOpties] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
    const [width, setWidth] = useState<number | null>(null);
    const [length, setLength] = useState<number | null>(null);
    const [drillholes, setDrillholes] = useState<number | null>(null);
    const [wallOutlet, setWallOutlet] = useState<number | null>(null);
    const [edgingFinishWidth, setEdgingFinishWidth] = useState<number | null>(
        null,
    );
    const [edgingFinishHeight, setEdgingFinishHeight] = useState<number | null>(
        null,
    );
    const [rearWall, setRearWall] = useState<number | null>(null);
    const [windowsillWidth, setWindowsillWidth] = useState<number | null>(null);
    const [windowsillHeight, setWindowsillHeight] = useState<number | null>(null);

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
        edgingFinishHeight,
        setEdgingFinishHeight,
        rearWall,
        setRearWall,
        windowsillWidth,
        setWindowsillWidth,
        windowsillHeight,
        setWindowsillHeight,
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
    // console.log(AlleMaterialen)
    console.log(totalPrice);
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
            <div><Preview /></div>
        </div>
    );
}

export default MaterialSelectPage;
