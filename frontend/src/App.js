import Table from './component/table/Table';


function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-800 my-4">FulltimeForce Test (Github commits history)</h1>
      <div className="lg:flex lg:justify-center">
        <div className="lg:w-3/4">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
