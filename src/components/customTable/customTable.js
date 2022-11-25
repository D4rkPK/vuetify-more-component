import autoTable from 'jspdf-autotable';
import jsPDF from "jspdf";


export default {


  props: ['search', 'columns', 'rows', 'dialog', 'item', 'default_item', 'txtCreate', 'txtEdit', 'loadingbtn',
    'icon_edit', 'icon_delete', 'titleTable'],


  data: () => ({
    Search: "",
    Columns: [],
    Rows: [],
    Dialog: false,
    Create: false,
    Item: {},
    Default_item: {},
    TxtCreate: "",
    TxtEdit: "",
    Loadingbtn: false,
    TitleTable: "",
  }),


  created() {
    console.log("hola vista de gastos");
    this.Columns = this.columns;
    this.Rows = this.rows;
    this.TitleTable = this.titleTable;
    this.Item = this.item;
  },


  watch: {
    Dialog(val) {
      val || this.closeDialog();
    }
  },

  computed: {
    titleDialog() {
      return this.Create ? this.TxtCreate : this.TxtEdit;
    },
  },

  methods: {

    editItem(item) {
      console.log("editItem", item);
      // this.dialog_gastos_comprometidos= true;
      // this.crear_gasto_comprometido = false;
      // this.item_gasto = Object.assign({}, item)
      // console.log(this.item_gasto);
    },

    createItem() {
      this.Dialog = true;
      this.Create = true;
      console.log(this.item_gasto);
    },

    closeDialog() {
      console.log("closeDialog");
      this.Create = false;
      this.Item = Object.assign({}, this.Default_item)
    },



    //   async confirmar_crearProductoGasto(){
    //     try {
    //       this.loading_crear = true;
    //       let r = await this.$store.state.services.categoriasService.insertar_gastos_comprometidos(this.item_gasto)
    //       console.log("r",r);
    //       this.loading_crear = false;
    //       this.$toast.success("Dato registrado exitosamente!");
    //       this.dialog_gastos_comprometidos = false;
    //       this.listado_productosGasto();
    //     } catch (error) {
    //       console.log(error);
    //       this.$toast.error("No es posible crear este tipo de producto")
    //     }
    //   },

    //   async confirmar_editarProductoGasto(){
    //     try {
    //       this.loading_crear = true;
    //       let r = await this.$store.state.services.categoriasService.actualizar_gastos_comprometidos(this.item_gasto)
    //       console.log("r",r);
    //       this.loading_crear = false;
    //       this.$toast.success("Dato actualizado exitosamente!");
    //       this.dialog_gastos_comprometidos = false;
    //       this.listado_productosGasto();
    //     } catch (error) {
    //       console.log(error);
    //       this.$toast.error("No es posible crear este tipo de producto")
    //     }
    //   },

    confirm() {
      console.log("acepted change");
      // this.crear_gasto_comprometido ? this.confirmar_crearProductoGasto() : this.confirmar_editarProductoGasto()
    },


    async exportPdf() {
      var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        //  putOnlyUsedFonts:true
      })


      doc.setFontSize(10)

      // var img = new Image()
      // img.src = imagen;
      // doc.addImage(img, 'png', 11, 10, 100, 18)

      // doc.text(50, doc.internal.pageSize.height - 20, 'Esto no es una caratúla oficial, esto no garantiza la solicitud del pedido');

      // for (const key in this.folios) {
      // doc.text(60, 33, )

      let width = doc.internal.pageSize.getWidth()
      doc.text(this.TitleTable, width / 2, 20, { align: 'center' })
      // doc.text(19, 30, 'PRODUCTO: ' + this.folios[key].producto)
      // doc.text(19, 35, 'MEDIDA: ' + this.folios[key].medida_producto)
      // let ticketData = [];
      // let encabezado = ["NOMBRE DEL PRODUCTO", "CÓDIGO DEL PRODUCTO", "CANTIDAD SOLICITADA",];
      // let header = Object.keys(this.filas).filter(key => !fila.includes(key));


      // empty array of rows to fill later a bit like Excel set up.
      const tableRows = []

      this.Rows.forEach(item => {
        let data_to_insert = []
        for (const property in item) {
          data_to_insert.push(item[property]);
        }
         tableRows.push(data_to_insert)
      })

      autoTable(doc, {

        head: [ Object.keys(this.Item)],
        body: tableRows, startY: 40, theme: 'grid', styles: {
          fontSize: 9,
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

      // doc.addPage()
      // }
      doc.save(`${this.TitleTable}.pdf`)

    },

    //   async listado_productosGasto(){
    //     try {
    //       this.loading_listado = true;
    //       let r = await this.$store.state.services.categoriasService.listar_gastos_comprometidos();
    //       console.log(r);
    //       this.filas_gastos_comprometidos = r.data.data;
    //       this.loading_listado = false;
    //     } catch (error) {
    //       console.log(error);
    //       this.$toast.error("No es posible obtener la información");
    //     }
    //   },
  }


}