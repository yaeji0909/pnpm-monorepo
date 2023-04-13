// pnpm-monorepo/packages/main/App.tsx
import { sayHi } from '@pnpm-monorepo/shared';

const App = () => {
  sayHi('Vedansh');
  return <h1>Main app</h1>;
};
export default App;
