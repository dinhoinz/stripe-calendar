import classes from './App.module.css';
import CalendarStripe from './Components/DateStripe/CalendarStripe';
 
function App() {
  return (
    <div className={classes.card}>
      <CalendarStripe/>
    </div>
  );
}

export default App;
