import autoTable from 'jspdf-autotable';
import jsPDF from "jspdf";
import * as XLSX from 'xlsx/xlsx.mjs';

export default {
  data: () => ({
    Search: "",
    Columns: [],
    Rows: [],
    TitleTable: "",
    Size_letter_title: 10,
    Size_letter_data: 10,
  }),

  props: ['columns', 'rows', 'titleTable', 'size_letter_title', 'size_letter_data'],

  created() {
    console.log("hola vista de gastos");
    this.Columns = this.columns;
    this.Rows = this.rows;
    this.TitleTable = this.titleTable;
    this.Size_letter_title = this.size_letter_title != undefined ? this.size_letter_title : 10;
    this.Size_letter_data = this.size_letter_data != undefined ? this.size_letter_data : 10;
  },

  watch: {
    Search() {
      console.log("escribiendo", this.Search);
      this.$emit("find", this.Search)
    }
  },

  methods: {
    exportExcel() {
      console.log(this.Rows);
      let data = XLSX.utils.json_to_sheet(this.Rows)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, data, this.TitleTable)
      XLSX.writeFile(workbook, `${this.TitleTable}.xlsx`)
    },

    async exportPdf() {
      var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      })
      doc.setFontSize(this.Size_letter_title)

      let width = doc.internal.pageSize.getWidth()
      doc.text(this.TitleTable, width / 2, 20, { align: 'center' });

      const tableRows = []
      this.Rows.forEach(item => {
        let data_to_insert = []
        for (const property in item) {
          data_to_insert.push(item[property]);
        }
        tableRows.push(data_to_insert)
      })

      console.log(this.columns);
      autoTable(doc, {
        head: [this.columns],
        body: tableRows, startY: 30, theme: 'grid', styles: {
          fontSize: this.Size_letter_data,
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
      doc.save(`${this.TitleTable}.pdf`)

    },
  }
}