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

function MaterialSelect() {
  const [width, setWidth] = useState<number | null>(null);
  const [length, setLength] = useState<number | null>(null);
  const [drillholes, setDrillholes] = useState<number | null>(null);
  const [wallOutlet, setWallOutlet] = useState<number | null>(null);
  const [wallOutletWidth, setWallOutletWidth] = useState<number | null>(null);
  const [wallOutletHeight, setWallOutletHeight] = useState<number | null>(null);
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

    const toggleSelection = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      setter(prevState => !prevState);
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
            onChange={(e) => {
              setWidth(Number(e.target.value));
            }}
          />
          <Input
            className="w-fit mx-2"
            id="length"
            name="length"
            placeholder={"Lengte(m)"}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium">Boorgaten</p>{" "}
            <Input
              onChange={(e) => {
                setDrillholes(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium">Wandcontactdoos</p>{" "}
            <Input
              onChange={(e) => {
                setWallOutlet(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Wandcontactdoos</p>{" "}
          <Input
            className="mr-2"
            placeholder="Breedte(mm)"
            onChange={(e) => {
              setWallOutletWidth(Number(e.target.value));
            }}
          />{" "}
          <Input
            className="mr-2"
            placeholder="Hoogte(mm)"
            onChange={(e) => {
              setWallOutletHeight(Number(e.target.value));
            }}
          />
          <p className="mr-2 text-lg font-medium w-full">0 - 150mm</p>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Vensterbank</p>{" "}
          <Input
            className="mr-2"
            placeholder="Breedte(mm)"
            onChange={(e) => {
              setWindowsillWidth(Number(e.target.value));
            }}
          />{" "}
          <Input
            className="mr-2"
            placeholder="Hoogte(mm)"
            onChange={(e) => {
              setWindowsillHeight(Number(e.target.value));
            }}
          />
          <p className="mr-2 text-lg font-medium w-full">0 - 150mm</p>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Randafwerking</p>{" "}
          <Input
            className="mr-2"
            placeholder="Breedte(mm)"
            onChange={(e) => {
              setEdgingFinishWidth(Number(e.target.value));
            }}
          />{" "}
          <Input
            className="mr-2"
            placeholder="Hoogte(mm)"
            onChange={(e) => {
              setEdgingFinishHeight(Number(e.target.value));
            }}
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
              className={`flex-grow m-1 focus:outline-none ${
                isSelectedSinkHole ? "border-primary" : ""
              }`}
              onClick={() => toggleSelection(setIsSelectedSinkhole)}
            >
              Kraangat
            </Button>
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${
                isSelectedSoapDispender ? "border-primary" : ""
              }`}
              onClick={() => toggleSelection(setIsSelectedSoapDispender)}
            >
              Zeepdispenser
            </Button>

            <Card className="flex w-2/5 flex-grow m-1">
              <p className="mx-2 pt-2 text-sm font-medium">Achterwand</p>{" "}
              <Input
                onChange={(e) => {
                  setRearWall(Number(e.target.value));
                }}
              />
            </Card>
          </div>
          <div className="flex flex-row flex-grow pr-3">
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${
                isSelectedUndermountSink ? "border-primary" : ""
              }`}
              onClick={() => toggleSelection(setIsSelectedUndermountSink)}
            >
              Spoelback: onderbouw
            </Button>
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${
                isSelectedInlaySink ? "border-primary" : ""
              }`}
              onClick={() => toggleSelection(setIsSelectedInlaySink)}
            >
              Spoelback: inleg
            </Button>
            <Button
              variant="outline"
              className={`flex-grow m-1 focus:outline-none ${
                isSelectedCoarseSink ? "border-primary" : ""
              }`}
              onClick={() => toggleSelection(setIsSelectedCoarseSink)}
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
                <Button variant="destructive" size="lg" className="mr-2">
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
            <Button variant="outline" size="lg">
              Toevoegen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialSelect;
