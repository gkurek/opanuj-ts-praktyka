interface GoogleIdentity {
  id: string;
  provider: 'google';
  userName: string;
}

interface AppleIdentity {
  id: string;
  provider: 'apple';
  userName: string;
}

interface RedditIdentity {
  id: string;
  provider: 'reddit';
  userName: string;
}

type Identity = GoogleIdentity | AppleIdentity | RedditIdentity;
type Provider = 'google' | 'apple' | 'reddit';

const users: ReadonlyArray<Identity> = [
  { id: '1', provider: 'google', userName: 'John Doe' },
  { id: '2', provider: 'apple', userName: 'Kate Williams' },
  { id: '3', provider: 'google', userName: 'Jane Doe' },
  { id: '4', provider: 'reddit', userName: 'Alex Smith' },
  { id: '5', provider: 'google', userName: 'Mike Johnson' },
  { id: '6', provider: 'reddit', userName: 'John Doe' },
];

class GoogleIdentityProcessor {
  findById(id: string): GoogleIdentity | undefined {
    return users.find((user) => user.id === id && user.provider === 'google') as
      | GoogleIdentity
      | undefined;
  }

  findByUserName(userName: string): GoogleIdentity | undefined {
    return users.find((user) => user.userName === userName && user.provider === 'google') as
      | GoogleIdentity
      | undefined;
  }
}

class AppleIdentityProcessor {
  findById(id: string): AppleIdentity | undefined {
    return users.find((user) => user.id === id && user.provider === 'apple') as
      | AppleIdentity
      | undefined;
  }

  findByUserName(userName: string): AppleIdentity | undefined {
    return users.find((user) => user.userName === userName && user.provider === 'apple') as
      | AppleIdentity
      | undefined;
  }
}

class RedditIdentityProcessor {
  findById(id: string): RedditIdentity | undefined {
    return users.find((user) => user.id === id && user.provider === 'reddit') as
      | RedditIdentity
      | undefined;
  }

  findByUserName(userName: string): RedditIdentity | undefined {
    return users.find((user) => user.userName === userName && user.provider === 'reddit') as
      | RedditIdentity
      | undefined;
  }
}

export class IdentityProcessor<T extends Provider, K extends Identity> {
  constructor(private readonly provider: T) {
    this.provider = provider;
  }

  findById(id: string): K | undefined {
    return users.find((user) => user.id === id && user.provider === this.provider) as K | undefined;
  }

  findByUserName(userName: string): K | undefined {
    return users.find((user) => user.userName === userName && user.provider === this.provider) as
      | K
      | undefined;
  }
}
