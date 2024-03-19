// Product: Pizza
class Pizza {
  private toppings: string[] = [];

  public addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  public listToppings(): void {
    console.log('Toppings: ' + this.toppings.join(', '));
  }
}

// Builder interface
interface PizzaBuilder {
  reset(): void;
  addCheese(): void;
  addPepperoni(): void;
  addMushrooms(): void;
  getPizza(): Pizza;
}

// Concrete builder: MargheritaPizzaBuilder
class MargheritaPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.pizza = new Pizza();
  }

  public addCheese(): void {
    this.pizza.addTopping('Cheese');
  }

  public getPizza(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }

  // For Margherita pizza, we don't add pepperoni or mushrooms
  public addPepperoni(): void {}
  public addMushrooms(): void {}
}

// Director: Waiter
class Waiter {
  private pizzaBuilder: PizzaBuilder;

  public setPizzaBuilder(builder: PizzaBuilder): void {
    this.pizzaBuilder = builder;
  }

  public buildPizza(): void {
    this.pizzaBuilder.reset();
    this.pizzaBuilder.addCheese();
    this.pizzaBuilder.addPepperoni();
    this.pizzaBuilder.addMushrooms();
  }
}

// Example usage
const waiter = new Waiter();
const margheritaBuilder = new MargheritaPizzaBuilder();

waiter.setPizzaBuilder(margheritaBuilder);
waiter.buildPizza();
const margheritaPizza = margheritaBuilder.getPizza();

margheritaPizza.listToppings(); // Output: Toppings: Cheese
