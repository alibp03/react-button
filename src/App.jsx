import { Button } from './components/Button/Button';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem' }}>
      <Button variant="primary" size="large">
        primary
      </Button>

      <Button variant="secondary" size="medium">
        secondary
      </Button>

      <Button variant="secondary">small</Button>

      <Button variant="back">back</Button>
    </div>
  );
}

export default App;
