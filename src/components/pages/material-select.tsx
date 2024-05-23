import { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
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

function MaterialSelect(props: {
  Data: {
    setWidth: (arg0: number) => void;
    setLength: (arg0: number) => void;
    setDrillholes: (arg0: number) => void;
    setWallOutlet: (arg0: number) => void;
    setWallOutletWidth: (arg0: number) => void;
    setWallOutletHeight: (arg0: number) => void;
    setWindowsillWidth: (arg0: number) => void;
    setWindowsillHeight: (arg0: number) => void;
    setEdgingFinishWidth: (arg0: number) => void;
    setEdgingFinishHeight: (arg0: number) => void;
    setIsSelectedSinkhole: (arg0: boolean) => void;
    setIsSelectedSoapDispender: (arg0: boolean) => void;
    setRearWall: (arg0: number) => void;
    setIsSelectedUndermountSink: (arg0: boolean) => void;
    setIsSelectedInlaySink: (arg0: boolean) => void;
    setIsSelectedCoarseSink: (arg0: boolean) => void;
    isSelectedSinkHole: boolean;
    isSelectedSoapDispender: boolean;
    isSelectedUndermountSink: boolean;
    isSelectedInlaySink: boolean;
    isSelectedCoarseSink: boolean;
  }
}) {
  const navigate = useNavigate();

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

  const toggleSelection = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setter((prevState) => !prevState);
  };

  // Blad afmetingen
  const OnWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWidth(Number(event.target.value));
  };
  const OnLengthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setLength(Number(event.target.value));
  };

  // Aantal boorgaten
  const OnDrillHolesChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setDrillholes(Number(event.target.value));
  };

  // Aantal wandcontactdozen
  const OnWallOutletChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWallOutlet(Number(event.target.value));
  };

  // Wandcontactdoos afmetingen
  const OnWallOutletWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWallOutletWidth(Number(event.target.value));
  };
  const OnWallOutletHeightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWallOutletHeight(Number(event.target.value));
  };

  // Vensterbank afmetingen
  const OnWindowsillWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWindowsillWidth(Number(event.target.value));
  }

  const OnWindowsillHeightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setWindowsillHeight(Number(event.target.value));
  }

  // Randafwerking afmetingen
  const OnEdgingFinishWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Data.setEdgingFinishWidth(Number(event.target.value));
  };
  const OnEdgingFinishHeightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  const OnRearWallChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="grid gap-8">
      <div>
        <h2 className="text-2xl font-bold">MateriaalNaam</h2>
      </div>
      <div className="grid gap-2">
        <h2 className="text-2xl font-bold">Afmetingen</h2>
        <div className="flex">
          <Input
            className="w-fit mr-2"
            id="width"
            name="width"
            placeholder={"Breedte(m)"}
            onChange={OnWidthChangeHandler}
          />
          <Input
            className="w-fit mx-2"
            id="length"
            name="length"
            placeholder={"Lengte(m)"}
            onChange={OnLengthChangeHandler}
          />
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium">Boorgaten</p>{" "}
            <Input
              onChange={OnDrillHolesChangeHandler}
            />
          </div>
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium">Wandcontactdoos</p>{" "}
            <Input
              onChange={OnWallOutletChangeHandler}
            />
          </div>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Wandcontactdoos</p>{" "}
          <Input
            className="mr-2"
            placeholder="Breedte(mm)"
            onChange={OnWallOutletWidthChangeHandler}
          />{" "}
          <Input
            className="mr-2"
            placeholder="Hoogte(mm)"
            onChange={OnWallOutletHeightChangeHandler}
          />
          <p className="mr-2 text-lg font-medium w-full">0 - 150mm</p>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Vensterbank</p>{" "}
          <Input
            className="mr-2"
            placeholder="Breedte(mm)"
            onChange={OnWindowsillWidthChangeHandler}
          />{" "}
          <Input
            className="mr-2"
            placeholder="Hoogte(mm)"
            onChange={OnWindowsillHeightChangeHandler}
          />
          <p className="mr-2 text-lg font-medium w-full">0 - 150mm</p>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Randafwerking</p>{" "}
          <Input
            className="mr-2"
            placeholder="Breedte(mm)"
            onChange={OnEdgingFinishWidthChangeHandler}
          />{" "}
          <Input
            className="mr-2"
            placeholder="Hoogte(mm)"
            onChange={OnEdgingFinishHeightChangeHandler}
          />
          <p className="mr-2 text-lg font-medium w-full">40 - 150mm</p>
        </div>
      </div>
      <div className="grid gap-2">
        <h2 className="text-2xl font-bold">Toevoegingen</h2>
        <div>
          <div className="flex flex-row flex-grow pr-3">
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${isSelectedSinkHole ? "border-primary" : ""
                }`}
              onClick={() => {
                OnSinkHoleChangeHandler(props.Data.isSelectedSinkHole);
                toggleSelection(setIsSelectedSinkhole);
              }}
            >
              Kraangat
            </Button>
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${isSelectedSoapDispender ? "border-primary" : ""
                }`}
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
                onChange={OnRearWallChangeHandler}
              />
            </Card>
          </div>
          <div className="flex flex-row flex-grow pr-3">
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${isSelectedUndermountSink ? "border-primary" : ""
                }`}
              onClick={() => {
                OnUndermountSinkChangeHandler(props.Data.isSelectedUndermountSink);
                toggleSelection(setIsSelectedUndermountSink);
              }}
            >
              Spoelback: onderbouw
            </Button>
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${isSelectedInlaySink ? "border-primary" : ""
                }`}
              onClick={() => {
                OnInlaySinkChangeHandler(props.Data.isSelectedInlaySink);
                toggleSelection(setIsSelectedInlaySink);
              }}
            >
              Spoelback: inleg
            </Button>
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${isSelectedCoarseSink ? "border-primary" : ""
                }`}
              onClick={() => {
                OnCoarseSinkChangeHandler(props.Data.isSelectedCoarseSink);
                toggleSelection(setIsSelectedCoarseSink);
              }}
            >
              Spoelback: inleg
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Totaal:</h2>
          <div className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="destructive" size="lg" className="mr-2" onClick={() => navigate(-1)}>
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
            <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
              Toevoegen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialSelect;
