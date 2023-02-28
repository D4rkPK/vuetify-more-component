import autoTable from 'jspdf-autotable';
import jsPDF from "jspdf";
import * as XLSX from 'xlsx/xlsx.mjs';

export default {
  data: () => ({
    Search: "",
    Columns: [],
    Rows: [],
    Size_letter_title_pdf: 10,
    Size_letter_data_pdf: 10,

    Hidden_btn_export_pdf: false,
    Tooltip_color_pdf: "",
    Btn_color_pdf: "",
    Btn_icon_pdf: "",
    Tooltip_text_pdf: "",

    Hidden_btn_export_excel: false,
    Tooltip_color_excel: "",
    Btn_color_excel: "",
    Btn_icon_excel: "",
    Tooltip_text_excel: "",

    LblSearch: "",
    Hidden_search: false,

    Pdf_export_name: "",
    Excel_export_name: "",
  }),

  props: ['columns', 'rows', 'size_letter_title_pdf', 'size_letter_data_pdf',
    'hidden_btn_export_pdf', 'tooltip_color_pdf', 'tooltip_text_pdf', 'btn_color_pdf', 'btn_icon_pdf',
    'hidden_btn_export_excel', 'tooltip_color_excel', 'tooltip_text_excel', 'btn_color_excel', 'btn_icon_excel',
    'lblSearch', 'hidden_search', 'pdf_export_name', 'excel_export_name'
  ],

  created() {
    this.Columns = this.columns;
    this.Rows = this.rows;
    this.Size_letter_title_pdf = this.size_letter_title_pdf != undefined ? this.size_letter_title_pdf : 10;
    this.Size_letter_data_pdf = this.size_letter_data_pdf != undefined ? this.size_letter_data_pdf : 10;

    this.Hidden_btn_export_pdf = this.hidden_btn_export_pdf != undefined ? this.hidden_btn_export_pdf : false;
    this.Tooltip_color_pdf = this.tooltip_color_pdf != undefined ? this.tooltip_color_pdf : "primary";
    this.Btn_color_pdf = this.btn_color_pdf != undefined ? this.btn_color_pdf : "#ffff";
    this.Btn_icon_pdf = this.btn_icon_pdf != undefined ? this.btn_icon_pdf : "picture_as_pdf";
    this.Tooltip_text_pdf = this.tooltip_text_pdf != undefined ? this.tooltip_text_pdf : "Export to PDF";

    this.Hidden_btn_export_excel = this.hidden_btn_export_excel != undefined ? this.hidden_btn_export_excel : false;
    this.Tooltip_color_excel = this.tooltip_color_excel != undefined ? this.tooltip_color_excel : "primary";
    this.Btn_color_excel = this.btn_color_excel != undefined ? this.btn_color_excel : "#ffff";
    this.Btn_icon_excel = this.btn_icon_excel != undefined ? this.btn_icon_excel : "mdi-file-excel";
    this.Tooltip_text_excel = this.tooltip_text_excel != undefined ? this.tooltip_text_excel : "Export to Excel";

    this.LblSearch = this.lblSearch != undefined ? this.lblSearch : "Search"
    this.Hidden_search = this.hidden_search != undefined ? this.hidden_search : false

    this.Pdf_export_name = this.pdf_export_name != undefined ? this.pdf_export_name : "PDF Report"
    this.Excel_export_name = this.excel_export_name != undefined ? this.excel_export_name : "Excel Report"
  },

  watch: {
    Search() {
      this.$emit("find", this.Search)
    },

    rows(){
      this.Rows = this.rows;
    },

    columns(){
      this.Columns = this.columns;
    },

  },

  methods: {
    async exportExcel() {
      console.log(this.Rows);
      let data = XLSX.utils.json_to_sheet(this.Rows)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, data, this.Excel_export_name)
      XLSX.writeFile(workbook, `${this.Excel_export_name.substring(0, 13)}.xlsx`)
    },

    async exportPdf() {
      var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      })
      doc.setFontSize(this.Size_letter_title_pdf)

      let width = doc.internal.pageSize.getWidth()
      doc.text(this.Pdf_export_name, width / 2, 20, { align: 'center' });

      const tableRows = []
      this.Rows.forEach(item => {
        let data_to_insert = []
        for (const property in item) {
          data_to_insert.push(item[property]);
        }
        tableRows.push(data_to_insert)
      })

      autoTable(doc, {
        head: [this.columns],
        body: tableRows, startY: 30, theme: 'grid', styles: {
          fontSize: this.Size_letter_data_pdf,
          fontStyle: 'Arial',
          valign: 'top',
          overflow: 'linebreak',
          cellWidth: 'auto',
          cellPadding: 0.5,
          rowHeight: 0,
          halign: 'center'
        },

        headStyles: {
          halign: 'center',
          fillColor: [255, 255, 255], textColor: [0, 0, 0], lineWidth: 0.2,
          lineColor: [0, 0, 0]
        },
      })
      doc.save(`${this.Pdf_export_name}.pdf`)
    },
  }
}