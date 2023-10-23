import { Navbar, Welcome, Footer, Services, Transactions, Education, ProgressComponent, News, Market } from './components';

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
      <Market />
      <News />
      <Footer />
    </div>
  )
}

export default App;