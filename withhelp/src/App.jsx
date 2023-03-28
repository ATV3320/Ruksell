import { Navbar, Welcome, Footer, Services, Transactions, Loader } from './components';


const App = () => {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return(
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
};

export default App;
