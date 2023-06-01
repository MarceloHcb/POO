class Cliente {
  private _nome: string;
  constructor(n:string){
    this._nome = n
  }
  get nome():string{
    return this._nome
  }
  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this.nome = value;
  }
}

class itemPedido {
  private _nomePedido: string;
  private _preco: number;
    
    constructor(nP:string, p:number){
      this._nomePedido = nP;
      this._preco =p
    }

    get nomePedido(): string{
      return this._nomePedido
    }

    set nomePedido(value: string){
      if(value.length < 3) {
        throw new Error('O nome deve conter no mínimo 3 caracteres.');
      }
      this._nomePedido = value
    }

    get preco(){
      return this._preco
    }
    
    set preco(value: number){
      if(value < 0 ) throw new Error('O preço deve ser positivo.');
      this._preco =  value;
    }

}

class Pedido {
  private _cliente: Cliente;
  private _itensConsumidos: itemPedido[]=[];
  private _pagamento: string;
  private _desconto = 0;

  constructor(c:Cliente, iC:itemPedido[],pgto:string,d:number){
    this._cliente = c;
    this._itensConsumidos = iC;
    this._pagamento = pgto;
    this._desconto = d;
  }

  get cliente(): Cliente {
    return this._cliente
  }

  get pagamento():string{
    return this._pagamento
  }
  set pagamento(value: string) {
    this._pagamento = value
  }

  set cliente(value:Cliente) {
    this._cliente = value
  }

  get itensConsumidos(): itemPedido[]{
    return this._itensConsumidos
  }

  set itensConsumidos(value: itemPedido[]){
    if(value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }
    this._itensConsumidos = value
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value:number) {
    if(value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._desconto = value
  }

  calculaPrecoTotal(): number {    
    return this._itensConsumidos.reduce((acc,cur) => acc + cur.preco,0)
  }

  calculaPrecoComDesconto(): number {
    return this.calculaPrecoTotal() * (1 - this._desconto)
  }

}



const client = new Cliente('João');

const sandwich = new itemPedido('Sanduíche Natural', 5.00);
const juice = new itemPedido('Suco de Abacaxi', 5.00);
const dessert = new itemPedido('Gelatina de Uva', 2.50);

const result = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(result.calculaPrecoTotal());
console.log(result.calculaPrecoComDesconto());
