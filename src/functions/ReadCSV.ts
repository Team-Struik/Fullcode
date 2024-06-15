import { ParseResult } from "papaparse";
import { useState, useEffect } from "react";
import Papa from "papaparse";

export type Data = {
  Materiaalsoort: string;
  Spatrand: string;
  Vensterbank: string;
  Boorgaten_per_stuk_mogelijk: string;
  WCD_mogelijk: string;
  Randafwerking_mogelijk: string;
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

export type GekozenOpties = {
  ID: number;
  selectedMaterial: string | null;
  width: number | null;
  length: number | null;
  drillholes: number | null;
  wallOutlet: number | null;
  edgingFinishWidth: number | null;
  edgingFinishHeight: number | null;
  rearWall: number | null;
  windowsillWidth: number | null;
  windowsillHeight: number | null;
  isSelectedSinkHole: boolean;
  isSelectedSoapDispender: boolean;
  isSelectedUndermountSink: boolean;
  isSelectedInlaySink: boolean;
  isSelectedCoarseSink: boolean;
  TotalPrice: number | null;
};

type Values = {
  data: Data[];
};

const useReadCSV = () => {
  const [values, setValues] = useState<Values | undefined>();

  const getCSV = () => {
    Papa.parse("../../Pricelist.csv", {
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

  return values?.data;
};

export default useReadCSV;
