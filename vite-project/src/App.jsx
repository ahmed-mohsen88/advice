import ima from './assets/images/pattern-divider-mobile.svg';
import buttoon from './assets/images/icon-dice.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [adivices, setAdvice] = useState({});
  const handelClick = () => {
    getAdvice();
  };
  const getAdvice = async () => {
    try {
      await axios.get('https://api.adviceslip.com/advice').then((data) => {
        setAdvice(data.data.slip);
        return data.data.slip;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <section className="h-[100vh]">
      <main className="h-3/4">
        <div className="w-full h-full flex justify-center items-center">
          <div className="innerContainer flex flex-col justify-between items-center py-14 gap-5 px-2  min-w-[200px] w-1/3  rounded-xl relative min-h-[350px] sm:gap-16 sm:px-5">
            <p className="text-[.9rem] sm:text-l">
              {'ADVICE #'}
              {adivices?.id}
            </p>
            <h1 className="sm:text-2xl">
              {'❝ '}
              {adivices.advice}
              {' ❞'}
            </h1>
            <img src={ima} alt="nobiledevider" className="w-full" />
            <div
              className="dice rounded-full p-4 absolute bottom-[-7%] z-20"
              onClick={handelClick}
            >
              <img src={buttoon} alt="dice" className="w-[20px] min-w-[20px]" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="attribution text-white">
          Challenge by{' Ahmed Mohsen'}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>
            Frontend Mentor
          </a>
          . Coded by <a href="#">Ahmed Mohsen</a>.
        </div>
      </footer>
    </section>
  );
}

export default App;
