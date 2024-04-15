import { useState, useEffect } from "react";
import Papa, { ParseResult } from "papaparse";

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
    <div className="container">
      <div
        className="box bordercenter"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",        }}
      >
        <div style={{ position: "absolute", top: "40px", left: "140px", fontSize: "30px"}}>BlissDigital</div>
        <div style={{ position: "absolute", top: "100px", left: "140px" }}>
          <button
            style={{ border: "1px solid white", color: "white" }}
            onClick={() => alert("materiaalkeuze gemaakt")}
          >
            Kies Materiaal
          </button>
          <div style={{ position: "absolute", top: "60px", fontSize: "25px"}}>Materialen</div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: 75,
          }}
        >
          <button
            style={{ border: "1px solid blue", color: "blue" }}
            onClick={() => alert("PDF gegenereerd")}
          >
            Genereer PDF
          </button>
          <button
            style={{ border: "1px solid white", color: "white" }}
            onClick={() => alert("Foto gescand")}
          >
            Scan foto
          </button>
        </div>
      </div>
      <div className="box">right</div>
    </div>
  );
}

export default App;
