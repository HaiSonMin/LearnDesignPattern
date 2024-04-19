// Người tham gia (Gamer)
interface IObserver {
  update(subject: ISubject, message: string): void;
}

// Chủ thể (Room)
interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notificationObservers(message: string): void;
}

// Khởi tạo đối tượng chủ thể (Room chat)
class InstanceSubject implements ISubject {
  private observers: IObserver[] = [];
  private state: number = 0;

  public getState(): number {
    return this.state;
  }

  // Push notification when state change
  public setState(state: number): void {
    this.state = state;
    this.notificationObservers(`State has changed is: ${this.state}`);
  }

  public addObserver(observer: IObserver): void {
    this.notificationObservers(
      `Person is ${(observer as InstanceObserver).getName()} has added in room`
    );
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    const indexObs = this.observers.indexOf(observer);
    // If have exist => remove
    if (indexObs !== -1) {
      const obRemoved = this.observers[indexObs];
      this.observers.splice(indexObs, 1);
      this.notificationObservers(
        `Person ${(obRemoved as InstanceObserver).getName()} has removed`
      );
    }
  }

  public notificationObservers(message: string): void {
    for (const obs of this.observers) {
      obs.update(this, message);
    }
  }
}

class InstanceObserver implements IObserver {
  constructor(private name: string) {}

  update(subject: ISubject, message: string): void {
    if (subject instanceof InstanceSubject) {
      console.log(`Observer ${this.name}: Received the message::: ${message}`);
    }
  }

  getName() {
    return this.name;
  }
}

const roomChat = new InstanceSubject();

const admin = new InstanceObserver('ADMIN');
const people1 = new InstanceObserver('Sơn');
const people2 = new InstanceObserver('Nam');
const people3 = new InstanceObserver('Tiến');

roomChat.addObserver(admin);
roomChat.addObserver(people1);
roomChat.addObserver(people2);
roomChat.addObserver(people3);

roomChat.setState(10);
roomChat.removeObserver(people3);
