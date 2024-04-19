interface ICommand {
  execute(): void;
}

class Receiver {
  public action(cmdName: string): void {
    console.log('Receiver is execute action: ', cmdName);
  }
}

class ConcreteCommand implements ICommand {
  constructor(private receiver: Receiver, private nameCmd: string) {}

  execute(): void {
    console.log('ConcreteCommand is executing command: ', this.nameCmd);
    this.receiver.action(this.nameCmd);
  }
}

class Invoker {
  private commands: ICommand[] = [];

  public storeCommand(command: ICommand) {
    this.commands.push(command);
    return this;
  }

  public executeCommands() {
    this.commands.forEach((cmd) => cmd.execute());
    this.commands = [];
  }
}

const receiver = new Receiver();
const cmd1 = new ConcreteCommand(receiver, 'Luột thằng A cho tao');
const cmd2 = new ConcreteCommand(receiver, 'Luột thằng B cho tao');

const invoker = new Invoker();

invoker.storeCommand(cmd1).storeCommand(cmd2).executeCommands();
