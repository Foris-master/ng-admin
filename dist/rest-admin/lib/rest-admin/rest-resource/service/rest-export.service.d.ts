import { HttpClient } from "@angular/common/http";
import "jspdf-autotable";
import * as i0 from "@angular/core";
export declare const ALPHABET: string[];
export declare class RestExportService {
    private http;
    constructor(http: HttpClient);
    exportToExcel(data: any[], fileName: string, param?: boolean): Blob;
    exportToCsv(header: string[], data: any, fileName: string, param?: boolean): Blob;
    exportToPdf(header: string[], data: any, fileName: string, fileTitle: string, param?: boolean): Blob;
    private getOptions;
    private ConvertToCSV;
    generateZip(header: any, pdfData: any, csvData: any, excelData: any): void;
    private s2ab;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestExportService>;
}
//# sourceMappingURL=rest-export.service.d.ts.map