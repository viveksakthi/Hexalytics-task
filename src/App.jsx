import Header from './layout/header/Header';
import Sidebar from './layout/Sidebar';
import Container from './layout/container/Container';

function App() {

  return (
    <div 
      className='bg-slate-50 min-h-screen ps-5 md:ps-40 pe-5'
    >
      
      <Header /> {/* Header */}
      <div className='flex'>
        <div>
          <Sidebar /> {/* Sidebar */}
        </div>
        <div className='w-full'>
          <Container /> {/* Container */}
        </div>
      </div>
    </div>
  )
}

export default App;
