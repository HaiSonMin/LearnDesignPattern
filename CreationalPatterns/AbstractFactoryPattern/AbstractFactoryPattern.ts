// Abstract classes for CPU and RAM
abstract class CPU {
  public abstract getSpecification(): void;
}

abstract class RAM {
  public abstract getSpecification(): void;
}

// Concrete implementations of CPU
class IntelCPU extends CPU {
  public getSpecification(): void {
    console.log('Intel CPU: 8 cores, 3.5 GHz');
  }
}

class AMDCPU extends CPU {
  public getSpecification(): void {
    console.log('AMD CPU: 6 cores, 4.0 GHz');
  }
}

// Concrete implementations of RAM
class CorsairRAM extends RAM {
  public getSpecification(): void {
    console.log('Corsair RAM: 16 GB, DDR4, 3200 MHz');
  }
}

class KingstonRAM extends RAM {
  public getSpecification(): void {
    console.log('Kingston RAM: 8 GB, DDR4, 2666 MHz');
  }
}

// Abstract factory interface
interface ComputerComponentFactory {
  createCPU(): CPU;
  createRAM(): RAM;
}

// Concrete factory implementations
class HighEndComputerFactory implements ComputerComponentFactory {
  public createCPU(): CPU {
    return new IntelCPU();
  }

  public createRAM(): RAM {
    return new CorsairRAM();
  }
}

class LowEndComputerFactory implements ComputerComponentFactory {
  public createCPU(): CPU {
    return new AMDCPU();
  }

  public createRAM(): RAM {
    return new KingstonRAM();
  }
}

// Client class that uses the abstract factory
class Computer {
  private cpu: CPU;
  private ram: RAM;

  constructor(factory: ComputerComponentFactory) {
    this.cpu = factory.createCPU();
    this.ram = factory.createRAM();
  }

  public getSpecification(): void {
    console.log('CPU Specification:');
    this.cpu.getSpecification();
    console.log('RAM Specification:');
    this.ram.getSpecification();
  }
}

// Example usage
const highEndComputer = new Computer(new HighEndComputerFactory());
highEndComputer.getSpecification();

const lowEndComputer = new Computer(new LowEndComputerFactory());
lowEndComputer.getSpecification();
