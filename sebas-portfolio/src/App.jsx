import './App.css';
import Start from './components/Start';
import ImgQuote from './components/ImgQuote';
import MainSkills from './components/MainSkills';
import SecondarySkills from './components/SecondarySkills';
import WorkExperiences from './components/WorkExperiences';

function App() {

  return (
    <>
      <div className='content'>
        <Start />
        <hr />
        <ImgQuote />
        <hr />
        <MainSkills />
        <hr />
        <SecondarySkills />
        <hr />
        <WorkExperiences />
        <hr />


      </div>
    </>
  )
}

export default App
