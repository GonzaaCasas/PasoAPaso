import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from 'src/app/models/articulo-familia';
import { MockArticulosFamiliasService } from "../../services/mock-articulos-familias.service";
import { ArticulosFamiliasService } from "../../services/articulos-familias.service";

@Component({
  selector: 'app-articulo-familias',
  templateUrl: './articulo-familias.component.html',
  styleUrls: ['./articulo-familias.component.css']
})
export class ArticuloFamiliasComponent implements OnInit {
  Items: ArticuloFamilia[] = [];
  Titulo = "Articulos Familias";

  constructor(
    private articulosFamiliasService:  ArticulosFamiliasService
  ){}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res:ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
