import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const userData = {
  firstName: 'Gino', 
  lastName: 'Cuevas', 
  title: 'Instructor', 
};

export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

function Header() {
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept(props){
  return <li>
    <img src={props.img} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <User />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((concept, index) => {
                return <CoreConcept 
                  key={index}
                  title={concept.title}
                  description={concept.description}
                  img={concept.image}
                />    
              })
            }
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
