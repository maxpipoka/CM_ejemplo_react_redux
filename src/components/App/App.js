import logo from './logo.svg';
import './App.css';
import ContactList from '../ContactList/ContactList';
import AddContact from '../AddContact/AddContact';

function App() {
  return (
    <div>
      <ContactList />
      <AddContact />
    </div>
  );
}

export default App;
