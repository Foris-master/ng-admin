import { HttpClient, HttpParams } from "@angular/common/http";
import { ElementRef, Injectable } from "@angular/core";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as JSZip from "jszip";

const EXCEL_EXTENSION = ".xlsx";
const CSV_EXTENSION = ".csv";
const CSV_TYPE = "text/csv;charset=utf-8;";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8;";
export const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

@Injectable({
  providedIn: "root",
})
export class RestExportService {
  constructor(private http: HttpClient) {}

  public exportToExcel(data: any[], fileName: string, param = false) {
    // inserting first blank row
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      data[0].data,
      this.getOptions(data[0])
    );

    for (let i = 1, length = data.length; i < length; i++) {
      // adding a dummy row for separation
      XLSX.utils.sheet_add_json(
        worksheet,
        [{}],
        this.getOptions(
          {
            data: [],
            skipHeader: true,
          },
          -1
        )
      );
      XLSX.utils.sheet_add_json(
        worksheet,
        data[i].data,
        this.getOptions(data[i], -1)
      );
    }

    const workbook: XLSX.WorkBook = {
      Sheets: { Sheet1: worksheet },
      SheetNames: ["Sheet1"],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "buffer",
    });

    const blob = new Blob([excelBuffer], {
      type: EXCEL_TYPE,
    });

    if (param) {
      return blob;
    } else {
      FileSaver.saveAs(blob, fileName + EXCEL_EXTENSION);
      return null;
    }
    // save to file
  }

  public exportToCsv(
    header: string[],
    data: any,
    fileName: string,
    param = false
  ) {
    let csvData = this.ConvertToCSV(data, header);

    let blob = new Blob(["\ufeff" + csvData], {
      type: CSV_TYPE,
    });

    if (param) return blob;
    else {
      FileSaver.saveAs(blob, `${fileName}${CSV_EXTENSION}`);
    }
  }

  public exportToPdf(
    header: string[],
    data: any,
    fileName: string,
    fileTitle: string,
    param = false
  ) {
    var doc = new jsPDF("l", "mm", [305, 250]);
    var col = header;
    var rows = [];

    var rowCountModNew = data;

    rowCountModNew.forEach((element) => {
      rows.push(element);
    });

    (doc as any).autoTable(col, rows);
    doc.setProperties({
      title: fileName,
      subject: "List of " + fileName,
      author: "rest_admin",
      keywords: "generated, javascript, web 2.0, ajax",
      creator: "rest_admin",
    });

    if (param)
      return new Blob([doc.output("blob")], { type: "application/pdf" });
    else doc.save(`${fileName}.pdf`);
  }

  private getOptions(json: any, origin?: number): any {
    // adding actual data
    const options = {
      skipHeader: true,
      origin: -1,
      header: [],
    };
    options.skipHeader = json.skipHeader ? json.skipHeader : false;
    if (!options.skipHeader && json.header && json.header.length) {
      options.header = json.header;
    }
    if (origin) {
      options.origin = origin ? origin : -1;
    }
    return options;
  }

  private ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    let row = "";
    for (let index in headerList) {
      row += headerList[index] + ",";
    }
    row = row.slice(0, -1);
    str += row + "\r\n";
    for (let i = 0; i < array.length; i++) {
      let line = "";
      headerList.forEach((element, index) => {
        let head = headerList[index];
        if (index == 0) line += array[i][head];
        else line += "," + array[i][head];
      });
      str += line + "\r\n";
    }
    return str;
  }

  public generateZip(header, pdfData, csvData, excelData) {
    const conserved = true;
    const pdf = this.exportToPdf(
      header,
      pdfData,
      "rest_file_pdf",
      "",
      conserved
    );
    const csv = this.exportToCsv(header, csvData, "rest_file_csv", conserved);
    const excel = this.exportToExcel(excelData, "rest_file_excel", conserved);

    var zip = new JSZip();
    var document = zip.folder("rest_document");
    document.file("rest_file_pdf.pdf", pdf, { base64: true });
    document.file("rest_file_csv.csv", csv, { base64: true });
    document.file("rest_file_excel.xlsx", excel, { base64: true });

    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, "rest_document.zip");
    });
  }

  private s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
}
