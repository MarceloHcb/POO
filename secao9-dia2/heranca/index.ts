class Vehicle{
  constructor(public brand:string,
    private automaker: string ){

    }

    public speed(): string{
      return `O ${this.brand} acelera!`
    }
}

class Car extends Vehicle{
  constructor(brand: string,automaker:string){
    super(brand, automaker)
  }
  public speed(): string {
    return super.speed() + ` Acelera o ${this.brand}!!`
  }
}

const carro = new Car("Polo", "VW")
console.log(carro.speed());
