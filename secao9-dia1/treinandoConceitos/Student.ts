class Student {
private _matrícula: number;
private _nome: string;
private _notasProva: number[];
private _notaTrabalho: number[];

  constructor(m:number, n:string, nP:number[],nT:number[]){
    this._matrícula= m;
    this._nome= n;
    this._notaTrabalho = nT;
    this._notasProva = nP;
  }
  calcNota(){
    return this._notasProva.reduce((acc,cur) => acc += cur ,0) +
    this._notaTrabalho.reduce((acc,cur) => acc+= cur,0)
  }
  calcMedia(){
    return this.calcNota() / (this._notaTrabalho.length + this._notasProva.length)
  }
}
const s1 = new Student(18,'Carla',[12,10],[10,10])
console.log(s1.calcNota());
console.log(s1.calcMedia());
