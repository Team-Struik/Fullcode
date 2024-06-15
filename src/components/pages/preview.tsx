import Logo from "../../assets/blisdigital-logo.svg";
import useReadCSV from "@/functions/ReadCSV";

function Preview(props: {
  Data: {
    selectedMaterial: string | null;
    setSelectedMaterial: (arg0: string) => void;
    price_per_m2: number | null;
    set_Price_per_m2: (arg0: number) => void;
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
    edgingFinishLength: number | null;
    setEdgingFinishLength: (arg0: number) => void;
    rearWall: number | null;
    setRearWall: (arg0: number) => void;
    windowsillWidth: number | null;
    setWindowsillWidth: (arg0: number) => void;
    windowsillLength: number | null;
    setWindowsillLength: (arg0: number) => void;
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
  };
}) {
  const currentDate = new Date();
  const data = useReadCSV();

  const price_per_m2 = () => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Materiaalsoort === props.Data.selectedMaterial) {
          return data[i].Prijs_per_m2;
        }
      }
    }
  };

  const price_window_sill = () => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Materiaalsoort === props.Data.selectedMaterial) {
          return data[i].Vensterbank_pm;
        }
      }
    }
  };

  const price_edging_finish = () => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Materiaalsoort === props.Data.selectedMaterial) {
          return data[i].Randafwerking_pm;
        }
      }
    }
  };

  const price_rear_wall = () => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Materiaalsoort === props.Data.selectedMaterial) {
          return data[i].Achterwand_pm;
        }
      }
    }
  };

  const selected_sink = () => {
    if (props.Data.isSelectedUndermountSink) return "onderbouw";
    else if (props.Data.isSelectedInlaySink) return "inleg";
    else if (props.Data.isSelectedCoarseSink) return "ruw";
  };

  const get_price_sink = () => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Materiaalsoort === props.Data.selectedMaterial) {
          if (props.Data.isSelectedUndermountSink)
            return data[i].Uitsparing_onderbouw;
          else if (props.Data.isSelectedInlaySink)
            return data[i].Uitsparing_inleg;
          else if (props.Data.isSelectedCoarseSink)
            return data[i].Uitsparing_ruw;
        }
      }
    }
  };
  const itemCounter = [9, 8, 7, 6, 5, 4, 3, 2];

  return (
    <div className="rounded-md bg-clip-content bg-white px-32 py-8 h-screen">
      <div className="px-12 pt-20 pb-10 flow-root">
        <img src={Logo} alt="Blis Digital Logo" className="float-left" />
        <div className="float-right">
          <p className="text-xs font-bold text-black">Blis Digital</p>
          <p className="text-xs font-bold text-black">1234 AB, Lorem Ipsum</p>
          <p className="text-xs font-bold text-black">Tel: 123 456 7890</p>
        </div>
      </div>
      <div className="px-12 pb-5 flow-root">
        <div className="float-left">
          <p className="text-xs font-bold text-black">Invoice No: 0000001</p>
          <p className="text-xs font-bold text-black">
            Date: {currentDate.getDate()}/{currentDate.getMonth() + 1}/
            {currentDate.getFullYear()}
          </p>
        </div>
        <div className="float-right">
          <p className="text-xs font-bold text-black">Voor:</p>
          <p className="text-xs font-bold text-black">Lorem Ipsum</p>
          <p className="text-xs font-bold text-black">Lorem Ipsum</p>
          <p className="text-xs font-bold text-black">Lorem Ipsum, 1234 AB</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <div className="border-b-black px-12 flex">
            <p className="pr-16 text-xs font-bold text-black">#</p>
            <p className="w-48 text-xs font-bold text-black">Beschrijving</p>
            <p className="w-52 text-xs font-bold text-black">Hoeveelheid</p>
            <p className="w-20 text-xs font-bold text-black">Prijs</p>
            <p className="text-xs font-bold text-black">Totaal</p>
          </div>
          <div className="px-12 pb-2">
            <p className="text-xs font-bold text-black">
              ___________________________________________________________________________________________________________________________
            </p>
          </div>
          <div className="px-12 flex pb-1">
            <p className="pr-16 text-xs font-bold text-black">1</p>
            <p className="w-48 text-xs font-bold text-black">
              {props.Data.selectedMaterial}
            </p>
            <p className="w-52 text-xs font-bold text-black">
              {props.Data.width! * props.Data.length!} vierkante meter
            </p>
            <p className="w-20 text-xs font-bold text-black">
              €{price_per_m2()}
            </p>
            <p className="text-xs font-bold text-black">
              €
              {(
                price_per_m2()! *
                props.Data.length! *
                props.Data.width!
              ).toFixed(2)}
            </p>
          </div>
          {props.Data.drillholes === null ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">Boorgaten</p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.drillholes == null ? 0 : props.Data.drillholes}{" "}
                gaten
              </p>
              <p className="w-20 text-xs font-bold text-black">€5.00</p>
              <p className="text-xs font-bold text-black">
                €{(props.Data.drillholes! * 5).toFixed(2)}
              </p>
            </div>
          )}
          {props.Data.wallOutlet === null ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">
                Wandcontactdoos
              </p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.wallOutlet == null ? 0 : props.Data.wallOutlet}{" "}
                wandcontactdozen
              </p>
              <p className="w-20 text-xs font-bold text-black">€13.50</p>
              <p className="text-xs font-bold text-black">
                €{(props.Data.wallOutlet! * 13.5).toFixed(2)}
              </p>
            </div>
          )}
          {props.Data.windowsillWidth === null ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">
                {props.Data.windowsillWidth == null
                  ? 0
                  : props.Data.windowsillWidth}{" "}
                mm brede vensterbank
              </p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.windowsillLength == null
                  ? 0
                  : props.Data.windowsillLength}{" "}
                meter lang
              </p>
              <p className="w-20 text-xs font-bold text-black">
                €{price_window_sill()}
              </p>
              <p className="text-xs font-bold text-black">
                €
                {(price_window_sill()! * props.Data.windowsillLength!).toFixed(
                  2,
                )}
              </p>
            </div>
          )}
          {props.Data.edgingFinishWidth === null ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">
                {props.Data.edgingFinishWidth == null
                  ? 0
                  : props.Data.edgingFinishWidth}{" "}
                mm brede randafwerking
              </p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.edgingFinishLength == null
                  ? 0
                  : props.Data.edgingFinishLength}{" "}
                meter lang
              </p>
              <p className="w-20 text-xs font-bold text-black">
                €{price_edging_finish()}
              </p>
              <p className="text-xs font-bold text-black">
                €
                {(
                  price_edging_finish()! * props.Data.edgingFinishLength!
                ).toFixed(2)}
              </p>
            </div>
          )}
          {props.Data.isSelectedSinkHole === false ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">Kraangat</p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.isSelectedSinkHole ? "1" : "Nee"}
              </p>
              <p className="w-20 text-xs font-bold text-black">€10.70</p>
              <p className="text-xs font-bold text-black">
                €{props.Data.isSelectedSinkHole ? "10.70" : "0.00"}
              </p>
            </div>
          )}
          {props.Data.isSelectedSoapDispender === false ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">Zeepdispenser</p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.isSelectedSoapDispender ? "1" : "Nee"}
              </p>
              <p className="w-20 text-xs font-bold text-black">€10.70</p>
              <p className="text-xs font-bold text-black">
                €{props.Data.isSelectedSoapDispender ? "10.70" : "0.00"}
              </p>
            </div>
          )}
          {props.Data.rearWall === null ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">Achterwand</p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.rearWall == null ? 0 : props.Data.rearWall} meter
                lang
              </p>
              <p className="w-20 text-xs font-bold text-black">
                €{price_window_sill()}
              </p>
              <p className="text-xs font-bold text-black">
                €{(price_rear_wall()! * props.Data.rearWall!).toFixed(2)}
              </p>
            </div>
          )}
          {props.Data.isSelectedCoarseSink === false &&
            props.Data.isSelectedInlaySink === false &&
            props.Data.isSelectedUndermountSink === false ? null : (
            <div className="px-12 flex pb-1">
              <p className="pr-16 text-xs font-bold text-black">
                {itemCounter.pop()}
              </p>
              <p className="w-48 text-xs font-bold text-black">
                Spoelbak: {selected_sink()!}
              </p>
              <p className="w-52 text-xs font-bold text-black">
                {props.Data.isSelectedCoarseSink ||
                  props.Data.isSelectedInlaySink ||
                  props.Data.isSelectedUndermountSink
                  ? "1"
                  : "Nee"}
              </p>
              <p className="w-20 text-xs font-bold text-black">
                €{get_price_sink()}
              </p>
              <p className="text-xs font-bold text-black">
                €{get_price_sink() == null ? "0.00" : get_price_sink()}
              </p>
            </div>
          )}
          <div className="px-12 pt-5" dir="rtl">
            <h1 className="text-l font-bold text-black">
              Totaal: €{props.Data.totalPrice?.toFixed(2)}
            </h1>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center align-bottem px-12 pt-5">
        Bij verdere vragen kunt u ons bereiken op lorem@ipsum.com
      </p>
    </div>
  );
}

export default Preview;
