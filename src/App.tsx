import { useState, useEffect } from "react";
import Papa, { ParseResult } from "papaparse";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
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
} from "./components/ui/alert-dialog";
import { Pencil1Icon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

type Data = {
  Materiaalsoort: string;
  Spatrand: string;
  Vensterbank: string;
  Boorgaten_per_stuk_mogelijk: boolean;
  WCD_mogelijk: boolean;
  Randafwerking_mogelijk: boolean;
  Prijs_per_m2: number;
  Randafwerking_pm: number;
  Spatrand_pm: number;
  Vensterbank_pm: number;
  Uitsparing_onderbouw: number;
  Uitsparing_inleg: number;
  Uitsparing_ruw: number;
  Kraangat: number;
  Zeepdispenser: number;
  Boorgaten_per_stuk: number;
  WCD: number;
  Achterwand_pm: number;
  Randafwerking_pm_optie2: number;
};

type Values = {
  data: Data[];
};

const useReadCSV = () => {
  const [values, setValues] = useState<Values | undefined>();

  const getCSV = () => {
    Papa.parse("/PriceList.csv", {
      header: true,
      download: true,
      delimiter: ";",
      complete: (result: ParseResult<Data>) => {
        setValues(result);
      },
    });
  };

  useEffect(() => {
    getCSV();
  }, []);

  return values;
};

function App() {
  console.log(useReadCSV());

  return (
    <div className="grid-container grid h-screen grid-cols-2">
      <div className="px-8 py-4 border-r-2 h-screen">
        <div className="pt-4 pb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-primary">Blis</span>
            <span className="text-outline">Digital</span>
          </h1>
        </div>
        <Select>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select a material" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nieuw Materiaal</SelectLabel>
              <SelectItem value="NobleDesiree">
                Noble Desiree Grey Matt
              </SelectItem>
              <SelectItem value="NobleCarrara">
                Noble Carrara Verzoet
              </SelectItem>
              <SelectItem value="TaurusWhite">
                Taurus Terazzo White Verzoet
              </SelectItem>
              <SelectItem value="TaurusBlack">Taurus Terazzo Black</SelectItem>
              <SelectItem value="GlencoeVerzoet">Glencoe Verzoet</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="py-8 grid gap-2">
          <h2 className="text-2xl font-bold">Materialen</h2>
          <Card>
            <CardHeader>
              <CardTitle>Geselecteerde Materialen</CardTitle>
              <CardDescription>
                Pas materialen aan of verwijder deze.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <p className="mr-2">Random materiaal</p>
          <AlertDialog>
            <AlertDialogTrigger>
                <Button variant="ghost">
                  
                <TrashIcon className="h-5 w-5 " />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Weet u het zeker?</AlertDialogTitle>
                <AlertDialogDescription>
                  <p>Deze actie kan niet ongedaan worden gemaakt. Dit zal je geselecteerde materiaal verwijderen en je gegevens (afmetingen en toevoegingen) wissen.</p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Terug</AlertDialogCancel>
                <AlertDialogAction>Verijderen</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
                <Button variant="ghost">
                  
                <Pencil1Icon className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Button>Genereer PDF</Button>
          <Button variant="outline">Scan foto</Button>

        </div>
      </div>
      <div>
        test
      </div>
    </div>
  );
}

export default App;
