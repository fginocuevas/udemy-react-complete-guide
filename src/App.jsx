
import { CORE_CONCEPTS } from './data';
import Header from './components/Headers';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/buttons/TabButton';

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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton label="Components"/>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
