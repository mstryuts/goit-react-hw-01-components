import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile';
import data from 'data/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'data/friends.json';
import { Friendlist } from './Friendlist/Friendlist';
import transactions from 'data/transactions.json';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={'Upload stats'} stats={data} />

      <Friendlist friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
