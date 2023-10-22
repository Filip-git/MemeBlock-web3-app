import { Navbar, Welcome, Footer, Services, Transactions, Education, ProgressComponent } from './components';

const App = () => {

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <ProgressComponent />
      <Transactions />
      <Education />
      <Footer />
    </div>
  )
}

export default App;