import './App.scss';
import phone from './imgs/phone.png'

function App() {
  return (
    <div className="centered">
      <img src={phone} width={1030}/>
      <div className='mobileContainer'>
        pivo pivo
      </div>
    </div>
  );
}

export default App;

// Это родительский компонент, который рендериться в index.js и с него начинается расхождение дерева, картинку дерева после заверщнеия проекта нарисую
// Стили буду писать на препроцессоре SASS (синтаксис scssm, подробнее можно увидеть тут: https://sass-lang.com/)
// Компоненты в основном будуть с material ui, ибо они там готовые 