interface IUser {
  name: string;
  age: number;
  phone: string;
}

interface ModelDatabase<T> {
  create(payload: T): IUser;
  getOne(id: string): T;
  getMany(): T[];
  update(id: string, payload: T): string;
  delete(id: string): string;
}

class UserModelDatabase implements ModelDatabase<IUser> {
  create(payload: IUser): IUser {
    console.log('Create new User with payload:', payload);

    return payload;
  }
  getOne(id: string): IUser {
    console.log('Get one by id:', id);
    return { age: 123, name: '123', phone: '123' };
  }
  getMany(): IUser[] {
    return [
      { age: 123, name: '123', phone: '123' },
      { age: 123, name: '123', phone: '123' },
    ];
  }
  update(id: string, payload: IUser): string {
    console.log('Update by id:', id);
    console.log('Update by payload:', payload);
    return 'Update success';
  }
  delete(id: string): string {
    console.log('Delete by id:', id);
    return 'Delete success';
  }
}

class ProxyModelDatabase implements ModelDatabase<IUser> {
  private userModelDatabase: UserModelDatabase | null = null;

  private getUserModelDatabase(): UserModelDatabase {
    if (!this.userModelDatabase) {
      this.userModelDatabase = new UserModelDatabase();
    }
    return this.userModelDatabase;
  }

  create(payload: IUser): IUser {
    return this.getUserModelDatabase().create(payload);
  }
  getOne(id: string): IUser {
    return this.getUserModelDatabase().getOne(id);
  }
  getMany(): IUser[] {
    return this.getUserModelDatabase().getMany();
  }
  update(id: string, payload: IUser): string {
    return this.getUserModelDatabase().update(id, payload);
  }
  delete(id: string): string {
    return this.getUserModelDatabase().delete(id);
  }
}
const proxyModelDatabase = new ProxyModelDatabase();

proxyModelDatabase.create({ age: 123, name: 'Van A', phone: '123123' });
proxyModelDatabase.getOne('123123');
proxyModelDatabase.getMany();
proxyModelDatabase.update('123123', {
  age: 23,
  name: 'Van B',
  phone: '123123',
});
proxyModelDatabase.delete('123123');
