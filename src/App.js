import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Section
        name="General Information"
        fields={[{ id: 'name', type: 'text', title: 'Name' }]}
      />
      <Section name="Education" />
      <Section name="Work Experience" />
    </div>
  );
}

export default App;
