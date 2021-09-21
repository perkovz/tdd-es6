import { MongoClient } from 'mongodb';
import { expect } from 'chai';
import { async } from 'regenerator-runtime';
import { getUserByUsername } from './db';

describe('getUserByUsername', () => {
  it('get a correct user from the database give a username', async () => {
    const client = await MongoClient.connect(
      `mongodb://localhost:27017/TEST_DB`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  });

  const db = client.db('TEST_DB');

  const fakeData = [{
    id: '123',
    username: 'abc',
    email: 'abc@gmail.com'
  }];

  client.close();
});