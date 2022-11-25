<template>
  <div>
    <v-card>
      <div class="row mt-5">
        <div class="col-md-4 mt-5 ml-5">
          <span style="font-size: 1.3rem; font-weight: bold">
            {{TitleTable}}
          </span>
        </div>
        <div class="col-md-5 col-sm-12">
          <v-text-field
            v-model="Search"
            append-icon="mdi-magnify"
            label="buscar"
            single-line
            hide-details
          ></v-text-field>
        </div>
        <div class="col-md-2 mt-3">
          <v-btn @click="createItem" color="primary">Crear producto</v-btn>
          <v-btn class="m-2" @click="exportPdf()" fab small
            ><v-icon>picture_as_pdf</v-icon></v-btn
          >
        </div>
      </div>
      <v-data-table :headers="Columns" :items="Rows" :search="Search">
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom color="fb8c00">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="editItem(item)"
                v-bind="attrs"
                v-on="on"
                icon
                dark
                small
                color="white"
              >
                <v-icon
                  style="
                    background-color: #fb8c00;
                    border-radius: 50%;
                    width: 35px;
                    height: 35px;
                  "
                  class="text-center"
                >
                  {{ icon_edit }}
                </v-icon>
              </v-btn>
            </template>
            <span>Editar Producto</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>

    <!-- DIALOG GASTOS COMPROMETIDOS -->
    <v-dialog v-model="Dialog">
      <v-card>
        <h1 class="p-1 text-center">{{ titleDialog }}</h1>
        <v-card-actions>
          <span style="color: gray; font-weight: bold"
            >Esriba el nombre del producto como gasto comprometido</span
          >
        </v-card-actions>
        <v-card-actions>
          <br />
          <v-text-field label="Descripcion"> </v-text-field>
        </v-card-actions>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="error" @click="Dialog = false">Cancelar</v-btn>
          <v-btn color="primary" :loading="Loadingbtn" @click="confirm">{{
            Create ? "Crear" : "Actualizar"
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  <script  src="./customTable.js"/>