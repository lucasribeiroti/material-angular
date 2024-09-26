import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Item {
  codigo: number;
  descricao: string;
  quantidade: string;
}

const ELEMENT_DATA: Item[] = [

  { codigo: 1, descricao: 'Arroz Branco', quantidade: '5kg' },
  { codigo: 2, descricao: 'Feijão Carioca', quantidade: '1kg' },
  { codigo: 3, descricao: 'Açúcar Refinado', quantidade: '1kg' },
  { codigo: 4, descricao: 'Óleo de Soja', quantidade: '900ml' },
  { codigo: 5, descricao: 'Macarrão Espaguete', quantidade: '500g' },
  { codigo: 6, descricao: 'Farinha de Trigo', quantidade: '1kg' },
  { codigo: 7, descricao: 'Café Torrado e Moído', quantidade: '500g' },
  { codigo: 8, descricao: 'Leite Integral', quantidade: '1L' },
  { codigo: 9, descricao: 'Sal Refinado', quantidade: '1kg' },
  { codigo: 10, descricao: 'Manteiga com Sal', quantidade: '200g' },
  { codigo: 11, descricao: 'Molho de Tomate', quantidade: '340g' },
  { codigo: 12, descricao: 'Creme de Leite', quantidade: '200g' },
  { codigo: 13, descricao: 'Leite Condensado', quantidade: '395g' },
  { codigo: 14, descricao: 'Atum em Conserva', quantidade: '170g' },
  { codigo: 15, descricao: 'Sardinha em Óleo', quantidade: '125g' },
  { codigo: 16, descricao: 'Milho Verde em Conserva', quantidade: '200g' },
  { codigo: 17, descricao: 'Ervilha em Conserva', quantidade: '200g' },
  { codigo: 18, descricao: 'Suco de Laranja', quantidade: '1L' },
  { codigo: 19, descricao: 'Refrigerante de Cola', quantidade: '2L' },
  { codigo: 20, descricao: 'Água Mineral', quantidade: '1.5L' },
  { codigo: 21, descricao: 'Sabonete em Barra', quantidade: '90g' },
  { codigo: 22, descricao: 'Shampoo', quantidade: '400ml' },
  { codigo: 23, descricao: 'Condicionador', quantidade: '400ml' },
  { codigo: 24, descricao: 'Papel Higiênico', quantidade: '12 rolos' },
  { codigo: 25, descricao: 'Detergente Líquido', quantidade: '500ml' },
  { codigo: 26, descricao: 'Sabão em Pó', quantidade: '1kg' },
  { codigo: 27, descricao: 'Desinfetante Líquido', quantidade: '500ml' },
  { codigo: 28, descricao: 'Água Sanitária', quantidade: '1L' },
  { codigo: 29, descricao: 'Amaciante de Roupas', quantidade: '2L' },
  { codigo: 30, descricao: 'Esponja de Limpeza', quantidade: '3 unidades' },
  { codigo: 31, descricao: 'Pão de Forma Integral', quantidade: '500g' },
  { codigo: 32, descricao: 'Biscoito Recheado', quantidade: '140g' },
  { codigo: 33, descricao: 'Achocolatado em Pó', quantidade: '400g' },
  { codigo: 34, descricao: 'Cereal Matinal', quantidade: '250g' },
  { codigo: 35, descricao: 'Margarina', quantidade: '500g' },
  { codigo: 36, descricao: 'Presunto Fatiado', quantidade: '200g' },
  { codigo: 37, descricao: 'Queijo Mussarela Fatiado', quantidade: '200g' },
  { codigo: 38, descricao: 'Frango Congelado', quantidade: '1kg' },
  { codigo: 39, descricao: 'Carne Moída', quantidade: '500g' },
  { codigo: 40, descricao: 'Bife de Alcatra', quantidade: '1kg' },
  { codigo: 41, descricao: 'Linguiça Toscana', quantidade: '1kg' },
  { codigo: 42, descricao: 'Salsicha', quantidade: '500g' },
  { codigo: 43, descricao: 'Filé de Peito de Frango', quantidade: '1kg' },
  { codigo: 44, descricao: 'Batata Congelada', quantidade: '1kg' },
  { codigo: 45, descricao: 'Hambúrguer Bovino', quantidade: '500g' },
  { codigo: 46, descricao: 'Pizza Congelada Calabresa', quantidade: '400g' },
  { codigo: 47, descricao: 'Polpa de Açaí', quantidade: '1kg' },
  { codigo: 48, descricao: 'Iogurte Natural', quantidade: '170g' },
  { codigo: 49, descricao: 'Iogurte Sabor Morango', quantidade: '170g' },
  { codigo: 50, descricao: 'Cenoura', quantidade: '1kg' },
  { codigo: 51, descricao: 'Tomate', quantidade: '1kg' },
  { codigo: 52, descricao: 'Batata', quantidade: '1kg' },
  { codigo: 53, descricao: 'Cebola', quantidade: '1kg' },
  { codigo: 54, descricao: 'Alface Crespa', quantidade: 'Unidade' },
  { codigo: 55, descricao: 'Maçã Gala', quantidade: '1kg' },
  { codigo: 56, descricao: 'Banana Prata', quantidade: '1kg' },
  { codigo: 57, descricao: 'Laranja', quantidade: '1kg' },
  { codigo: 58, descricao: 'Mamão Papaia', quantidade: 'Unidade' },
  { codigo: 59, descricao: 'Abacaxi', quantidade: 'Unidade' },
  { codigo: 60, descricao: 'Uva Rubi', quantidade: '500g' },
  { codigo: 61, descricao: 'Pera Williams', quantidade: '1kg' },
  { codigo: 62, descricao: 'Abobrinha', quantidade: '1kg' },
  { codigo: 63, descricao: 'Berinjela', quantidade: '1kg' },
  { codigo: 64, descricao: 'Pimentão Verde', quantidade: '500g' },
  { codigo: 65, descricao: 'Chuchu', quantidade: 'Unidade' },
  { codigo: 66, descricao: 'Pepino', quantidade: '1kg' },
  { codigo: 67, descricao: 'Azeite de Oliva', quantidade: '500ml' },
  { codigo: 68, descricao: 'Vinagre de Álcool', quantidade: '750ml' },
  { codigo: 69, descricao: 'Maionese', quantidade: '500g' },
  { codigo: 70, descricao: 'Ketchup', quantidade: '400g' },
  { codigo: 71, descricao: 'Mostarda', quantidade: '200g' },
  { codigo: 72, descricao: 'Pimenta Moída', quantidade: '50g' },
  { codigo: 73, descricao: 'Alho Triturado', quantidade: '200g' },
  { codigo: 74, descricao: 'Fermento Biológico', quantidade: '100g' },
  { codigo: 75, descricao: 'Farinha de Mandioca', quantidade: '500g' },
  { codigo: 76, descricao: 'Amido de Milho', quantidade: '500g' },
  { codigo: 77, descricao: 'Aveia em Flocos', quantidade: '200g' },
  { codigo: 78, descricao: 'Granola', quantidade: '250g' },
  { codigo: 79, descricao: 'Mel', quantidade: '300g' },
  { codigo: 80, descricao: 'Geleia de Morango', quantidade: '300g' },
  { codigo: 81, descricao: 'Castanha de Caju', quantidade: '200g' },
  { codigo: 82, descricao: 'Amendoim Torrado', quantidade: '200g' },
  { codigo: 83, descricao: 'Coco Ralado', quantidade: '100g' },
  { codigo: 84, descricao: 'Gelatina Sabor Morango', quantidade: '25g' },
  { codigo: 85, descricao: 'Pudim de Leite em Pó', quantidade: '50g' },
  { codigo: 86, descricao: 'Biscoito Água e Sal', quantidade: '200g' },
  { codigo: 87, descricao: 'Torrada Integral', quantidade: '140g' },
  { codigo: 88, descricao: 'Pão Francês', quantidade: '1kg' },
  { codigo: 89, descricao: 'Croissant Simples', quantidade: '60g' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['codigo', 'descricao', 'quantidade'];
  dataSource = new MatTableDataSource<Item>(ELEMENT_DATA);
  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    setTimeout(() => {
      if (this.dataSource.sort) {
        this.dataSource.sort.sort({ id: 'codigo', start: 'desc', disableClear: true });
      }
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.filter = '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filterPredicate = (data: Item, filter: string) => {
      const normalizedFilter = filter.trim().toLowerCase();
      return data.codigo.toString().includes(normalizedFilter) || 
             data.descricao.toLowerCase().includes(normalizedFilter) ||
             data.quantidade.toLowerCase().includes(normalizedFilter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}