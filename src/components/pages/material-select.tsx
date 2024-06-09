import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import useReadCSV, { Data, GekozenOpties } from "@/functions/ReadCSV";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AlleMaterialen } from "./home";

let lastId = 0;

function MaterialSelect(props: {
  Data: {
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
  // const materiaaldata = useReadCSV();

  const [material, setMaterial] = useState<Data>();
  const navigate = useNavigate();
  const materiaaldata = useReadCSV();
  const SetMatByName = (name: string) => {
    setMaterial(materiaaldata?.find((item) => item.Materiaalsoort === name));
    // props.Data.setSelectedMaterial(name);
  };

  /////////////////////////////////////////////
  // Is dom maar laat staan voor nu. geloof me
  /////////////////////////////////////////////
  const [isSelectedSinkHole, setIsSelectedSinkhole] = useState<boolean>(false);
  const [isSelectedSoapDispender, setIsSelectedSoapDispender] =
    useState<boolean>(false);
  const [isSelectedUndermountSink, setIsSelectedUndermountSink] =
    useState<boolean>(false);
  const [isSelectedInlaySink, setIsSelectedInlaySink] =
    useState<boolean>(false);
  const [isSelectedCoarseSink, setIsSelectedCoarseSink] =
    useState<boolean>(false);

  const prijs_per_m2 = props.Data.width! * props.Data.length! * material?.Prijs_per_m2!;
  const drillprijs = props.Data.drillholes! * material?.Boorgaten_per_stuk!;
  const wallOutletPrijs = props.Data.wallOutlet! * material?.WCD!;
  const RandafwerkingPrijs =
    props.Data.edgingFinishWidth! * props.Data.edgingFinishHeight! * material?.Randafwerking_pm!;
  const VensterbankPrijs =
    props.Data.windowsillWidth! * props.Data.windowsillHeight! * material?.Vensterbank_pm!;

  const AchterwandPrijs = props.Data.rearWall! * material?.Achterwand_pm!;
  const SinkholePrijs = props.Data.isSelectedSinkHole ? Number(material?.Kraangat!) : 0;
  const SoapDispenderPrijs = props.Data.isSelectedSoapDispender
    ? Number(material?.Zeepdispenser!)
    : 0;
  const UndermountSinkPrijs = props.Data.isSelectedUndermountSink
    ? Number(material?.Uitsparing_onderbouw!)
    : 0;
  const InlaySinkPrijs = props.Data.isSelectedInlaySink
    ? Number(material?.Uitsparing_inleg!)
    : 0;
  const CoarseSinkPrijs = props.Data.isSelectedCoarseSink
    ? Number(material?.Uitsparing_ruw!)
    : 0;

  const totaal =
    prijs_per_m2 +
    drillprijs +
    wallOutletPrijs +
    RandafwerkingPrijs +
    VensterbankPrijs +
    AchterwandPrijs +
    SinkholePrijs +
    SoapDispenderPrijs +
    UndermountSinkPrijs +
    InlaySinkPrijs +
    CoarseSinkPrijs;

  props.Data.setTotalPrice(totaal);

  const toggleSelection = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prevState) => !prevState);
  };

  // Blad afmetingen
  const OnWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWidth(Number(event.target.value));
  };
  const OnLengthChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setLength(Number(event.target.value));
  };

  // Aantal boorgaten
  const OnDrillHolesChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setDrillholes(Number(event.target.value));
  };

  // Aantal wandcontactdozen
  const OnWallOutletChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setWallOutlet(Number(event.target.value));
  };

  // Vensterbank afmetingen
  const OnWindowsillWidthChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setWindowsillWidth(Number(event.target.value));
  };
  const OnWindowsillHeightChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setWindowsillHeight(Number(event.target.value));
  };

  // Randafwerking afmetingen
  const OnEdgingFinishWidthChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setEdgingFinishWidth(Number(event.target.value));
  };
  const OnEdgingFinishHeightChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setEdgingFinishHeight(Number(event.target.value));
  };

  // Kraangat
  const OnSinkHoleChangeHandler = (e: boolean) => {
    props.Data.setIsSelectedSinkhole(!e);
  };

  // Zeepdispenser
  const OnSoapDispenderChangeHandler = (e: boolean) => {
    props.Data.setIsSelectedSoapDispender(!e);
  };

  // Achterwand
  const OnRearWallChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.Data.setRearWall(Number(event.target.value));
  };

  // Spoelbakken
  const OnUndermountSinkChangeHandler = (e: boolean) => {
    props.Data.setIsSelectedUndermountSink(!e);
  };
  const OnInlaySinkChangeHandler = (e: boolean) => {
    props.Data.setIsSelectedInlaySink(!e);
  };
  const OnCoarseSinkChangeHandler = (e: boolean) => {
    props.Data.setIsSelectedCoarseSink(!e);
  };

  const handleClick = () => {
    const opties: GekozenOpties = {
      ID: lastId++,
      selectedMaterial: material?.Materiaalsoort!,
      width: props.Data.width!,
      length: props.Data.length!,
      drillholes: props.Data.drillholes!,
      wallOutlet: props.Data.wallOutlet!,
      edgingFinishWidth: props.Data.edgingFinishWidth!,
      edgingFinishHeight: props.Data.edgingFinishHeight!,
      rearWall: props.Data.rearWall!,
      windowsillWidth: props.Data.windowsillWidth!,
      windowsillHeight: props.Data.windowsillHeight!,
      isSelectedSinkHole,
      isSelectedSoapDispender,
      isSelectedUndermountSink,
      isSelectedInlaySink,
      isSelectedCoarseSink,
      TotalPrice: props.Data.totalPrice!
    };
    if (opties.selectedMaterial !== null) {
      AlleMaterialen.push(opties);
    }
    navigate(-1);
  };

  return (
    <>
      <div className="grid gap-8">
        <div>
          <Select onValueChange={(value) => SetMatByName(value)}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Selecteer materiaal" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Nieuw Materiaal</SelectLabel>
                {materiaaldata?.map((item) => (
                  <SelectItem value={item.Materiaalsoort}>
                    {item.Materiaalsoort}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Afmetingen</h2>
          <div className="flex">
            <Input
              type="number"
              min={0}
              className="w-fit mr-2"
              id="width"
              name="width"
              placeholder={props.Data.width ? props.Data.width.toString() : "Breedte(m)"}
              onChange={OnWidthChangeHandler}
            />
            <Input
              type="number"
              min={0}
              className="w-fit mx-2"
              id="length"
              name="length"
              placeholder={"Lengte(m)"}
              onChange={OnLengthChangeHandler}
            />
            <div className="flex mx-2">
              <p className="mr-2 text-lg font-medium">Boorgaten</p>{" "}
              <Input
                type="number"
                min={0}
                onChange={OnDrillHolesChangeHandler}
              />
            </div>
            <div className="flex mx-2">
              <p className="mr-2 text-lg font-medium">Wandcontactdoos</p>{" "}
              <Input
                type="number"
                min={0}
                onChange={OnWallOutletChangeHandler}
              />
            </div>
          </div>
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium w-full">Vensterbank</p>{" "}
            <Input
              type="number"
              min={0}
              className="mr-2"
              placeholder="Breedte(mm)"
              onChange={OnWindowsillWidthChangeHandler}
            />{" "}
            <Input
              type="number"
              min={0}
              className="mr-2"
              placeholder="Hoogte(mm)"
              onChange={OnWindowsillHeightChangeHandler}
            />
            <p className="mr-2 text-lg font-medium w-full">
              {material?.Vensterbank ? material.Vensterbank : "0 - 150mm"}
            </p>
          </div>
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium w-full">Randafwerking</p>{" "}
            <Input
              type="number"
              min={0}
              className="mr-2"
              placeholder="Breedte(mm)"
              onChange={OnEdgingFinishWidthChangeHandler}
            />{" "}
            <Input
              type="number"
              min={0}
              className="mr-2"
              placeholder="Hoogte(mm)"
              onChange={OnEdgingFinishHeightChangeHandler}
            />
            <p className="mr-2 text-lg font-medium w-full">
              {material?.Spatrand ? material?.Spatrand : "0 - 150mm"}
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Toevoegingen</h2>
          <div>
            <div className="flex flex-row flex-grow pr-3">
              <Button
                variant="outline"
                className={`flex-grow m-1 focus:outline-none ${isSelectedSinkHole ? "border-primary" : ""}`}
                onClick={() => {
                  OnSinkHoleChangeHandler(props.Data.isSelectedSinkHole);
                  toggleSelection(setIsSelectedSinkhole);
                }}
              >
                Kraangat
              </Button>
              <Button
                variant="outline"
                className={`flex-grow m-1 focus:outline-none ${isSelectedSoapDispender ? "border-primary" : ""}`}
                onClick={() => {
                  OnSoapDispenderChangeHandler(props.Data.isSelectedSoapDispender);
                  toggleSelection(setIsSelectedSoapDispender);
                }}
              >
                Zeepdispenser
              </Button>

              <Card className="flex w-2/5 flex-grow m-1">
                <p className="mx-2 pt-2 text-sm font-medium">Achterwand</p>{" "}
                <Input
                  type="number"
                  min={0}
                  onChange={OnRearWallChangeHandler}
                />
              </Card>
            </div>
            <div className="flex flex-row flex-grow pr-3">
              <Button
                variant="outline"
                className={`flex-grow m-1 focus:outline-none ${isSelectedUndermountSink ? "border-primary" : ""}`}
                onClick={() => {
                  OnUndermountSinkChangeHandler(props.Data.isSelectedUndermountSink);
                  toggleSelection(setIsSelectedUndermountSink);
                }}
              >
                Spoelbak: onderbouw
              </Button>
              <Button
                variant="outline"
                className={`flex-grow m-1 focus:outline-none ${isSelectedInlaySink ? "border-primary" : ""}`}
                onClick={() => {
                  OnInlaySinkChangeHandler(props.Data.isSelectedInlaySink);
                  toggleSelection(setIsSelectedInlaySink);
                }}
              >
                Spoelbak: inleg
              </Button>
              <Button
                variant="outline"
                className={`flex-grow m-1 focus:outline-none ${isSelectedCoarseSink ? "border-primary" : ""}`}
                onClick={() => {
                  OnCoarseSinkChangeHandler(props.Data.isSelectedCoarseSink);
                  toggleSelection(setIsSelectedCoarseSink);
                }}
              >
                Spoelbak: inleg
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Totaal: {totaal ? totaal.toFixed(2) : "0.00"} euro</h2>
            <div className="flex justify-end">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button
                    variant="destructive"
                    size="lg"
                    className="mr-2"
                    onClick={() => navigate(-1)}
                  >
                    Verwijderen
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Weet u het zeker?</AlertDialogTitle>
                    <AlertDialogDescription>
                      <p>
                        Deze actie kan niet ongedaan worden gemaakt. Dit zal je
                        geselecteerde materiaal verwijderen en je gegevens
                        (afmetingen en toevoegingen) wissen.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Terug</AlertDialogCancel>
                    <AlertDialogAction>Verwijderen</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button variant="outline" size="lg" onClick={handleClick}>
                Toevoegen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MaterialSelect;
