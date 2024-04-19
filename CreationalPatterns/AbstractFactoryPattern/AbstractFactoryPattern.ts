// Abstract classes for CPU and RAM
abstract class CPU {
  public abstract getSpecificationCPU(): void;
}

abstract class RAM {
  public abstract getSpecificationRAM(): void;
}

// Concrete implementations of CPU
class IntelCPU extends CPU {
  public getSpecificationCPU(): void {
    console.log('Intel CPU: 8 cores, 3.5 GHz');
  }
}

class AMDCPU extends CPU {
  public getSpecificationCPU(): void {
    console.log('AMD CPU: 6 cores, 4.0 GHz');
  }
}

class NvidiaCPU extends CPU {
  public getSpecificationCPU(): void {
    console.log('AMD CPU: 6 cores, 4.0 GHz');
  }
}

// Concrete implementations of RAM
class CorsairRAM extends RAM {
  public getSpecificationRAM(): void {
    console.log('Corsair RAM: 16 GB, DDR4, 3200 MHz');
  }
}

class KingstonRAM extends RAM {
  public getSpecificationRAM(): void {
    console.log('Kingston RAM: 8 GB, DDR4, 2666 MHz');
  }
}

class SamsungRAM extends RAM {
  public getSpecificationRAM(): void {
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
  private model: string;

  constructor(model: string, factory: ComputerComponentFactory) {
    this.cpu = factory.createCPU();
    this.ram = factory.createRAM();
    this.model = model;
  }

  public getSpecification(): void {
    console.log('Thông số kỹ thuật của dòng máy: ', this.model);
    console.log('CPU Specification:');
    this.cpu.getSpecificationCPU();
    console.log('RAM Specification:');
    this.ram.getSpecificationRAM();
  }
}

// Example usage
const highEndComputer = new Computer('Cao cấp', new HighEndComputerFactory());
highEndComputer.getSpecification();

const lowEndComputer = new Computer(
  'Cấu hình thấp',
  new LowEndComputerFactory()
);
lowEndComputer.getSpecification();
