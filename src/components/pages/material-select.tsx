import { TrashIcon } from "@radix-ui/react-icons";
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
            id="Breedte"
            name="Breedte"
            placeholder={"Breedte(M)"}
          />
          <Input
            className="w-fit mx-2"
            id="Lengte"
            name="Lengte"
            placeholder={"Lengte(M)"}
          />
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium">Boorgaten</p>{" "}
            <Input></Input>
          </div>
          <div className="flex mx-2">
            <p className="mr-2 text-lg font-medium">Wandcontactdoos</p>{" "}
            <Input></Input>
          </div>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Wandcontactdoos</p>{" "}
          <Input className="mr-2"></Input> <Input className="mr-2"></Input>
          <p className="mr-2 text-lg font-medium w-full">0 - 150mm</p>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">vensterbank</p>{" "}
          <Input className="mr-2"></Input> <Input className="mr-2"></Input>
          <p className="mr-2 text-lg font-medium w-full">0 - 150mm</p>
        </div>
        <div className="flex mx-2">
          <p className="mr-2 text-lg font-medium w-full">Randafwerking</p>{" "}
          <Input className="mr-2"></Input> <Input className="mr-2"></Input>
          <p className="mr-2 text-lg font-medium w-full">40 - 150mm</p>
        </div>
      </div>
      <div className="grid gap-2">
        <h2 className="text-2xl font-bold">Toevoegingen</h2>
        <div>
          <div className="flex flex-row flex-grow px-3">
            <Button variant="outline" className="flex-grow m-1">
              Kraangat
            </Button>
            <Button variant="outline" className="flex-grow m-1">
              Zeepdispenser
            </Button>
            <Card className="flex w-2/5 flex-grow m-1">
              Achterwand <Input className="ml-2" />
            </Card>
          </div>
          <div className="flex flex-row flex-grow px-3">
            <Button variant="outline" className="flex-grow m-1">
              Spoelback: onderbouw
            </Button>
            <Button variant="outline" className="flex-grow m-1">
              Spoelback: inleg
            </Button>
            <Button variant="outline" className="flex-grow m-1">
              Spoelback: ruw
            </Button>
          </div>
        </div>
        <div className="flex">
          <h2 className="text-2xl font-bold">Totaal:</h2>
          <div className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="destructive" className="mr-2">Verwijderen</Button>
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
                  <AlertDialogAction>Verijderen</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="outline">Toevoegen</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialSelect;
