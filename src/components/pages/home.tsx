
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

function Home() {
  return (
    <>
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
            <SelectItem value="NobleCarrara">Noble Carrara Verzoet</SelectItem>
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
              <Button variant="ghost">
                <Pencil1Icon className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Button className="mr-4">Genereer PDF</Button>
        <Button variant="outline">Scan foto</Button>
      </div>
    </>
  );
}

export default Home;
