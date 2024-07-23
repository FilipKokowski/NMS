import { useEffect, useState } from 'react';
import './Home.css'

const InputField = ({type, id, style, placeholder,}) => {

  const date = new Date().toJSON().slice(0,10).replace(/-/g,'-');

  useEffect(() => {
    console.log(date);
    
  }, [date])

  return <input defaultValue={(type === 'date' ? date : "")} type={type} id={id} style={style} placeholder={placeholder}></input>
}

const Dropdown = ({options, style, id}) => {

  return (
    <select style={style} id={id}>
      { options.map((elem) => { return <option key={elem}>{elem}</option> }) }
    </select>
  );
}

const Form = ({title, setState, style}) => {

  const add = () => {

    setState((prevState) => ({
      ...prevState,
      ['favourites']: [...prevState.favourites, {
        'date': document.getElementById('date').value,
        'type': document.getElementById('type').value,
        'contractor': document.getElementById('contractor').value,
        'description': (document.getElementById('description').value == '' ? "-" : document.getElementById('description').value)
      }]
    }))
  }

  return (
    <div style={style}>
      <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Date</label>
          <InputField id={'date'} type='date' style={{width: '20vh', height: '5vh', borderRadius: '1.5vh', border: 'none', backgroundColor: '#444444'}}/>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Type</label>
          <Dropdown id={'type'} options={['Projekt', 'Realizacja']} style={{width: '20vh', height: '5vh', borderRadius: '1.5vh', border: 'none', backgroundColor: '#444444'}}/>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Contractor</label>
          <Dropdown id={'contractor'} options={['Kokoprojekt', 'wykonawca 2' , 'wykonawca 3']} style={{width: '20vh', height: '5vh', borderRadius: '1.5vh', border: 'none', backgroundColor: '#444444'}}/>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Description</label>
          <InputField id={'description'} type='text' style={{width: '20vh', height: '5vh', borderRadius: '1.5vh', border: 'none', backgroundColor: '#444444'}}/>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <button style={{marginTop: '5vh', width: '20vh', height: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2vh'}} onClick={add}>Add</button>
        </div>
      </div>
    </div>
  );
}

const Home = () => {

  const [state, setState] = useState({favourites: []});

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div>
      <div style={{width: '100vw', height: '75vh', backgroundColor: '#121212'}}>
        <Form title={'Adding form'} setState={setState} style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center'}}></Form>
      </div>
      <div style={{width: '100vw', height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
        <table style={{fontSize: '1.5vh'}}>
          <tbody>
            <tr><th style={{width: '15vw'}}>Date</th><th style={{width: '15vw'}}>Type</th><th style={{width: '30vw'}}>Contractor</th><th style={{width: '40vw'}}>Description</th></tr>
            {state.favourites.map((elem) => { return <tr style={{backgroundColor: (new Date().toJSON().slice(0,10).replace(/-/g,'-') == elem.date ? 'red' : '')}} key={elem}><th>{elem.date}</th><th>{elem.type}</th><th>{elem.contractor}</th><th>{elem.description}</th></tr>})}
          </tbody>
        </table>
      </div>
    </div>
  ) 
}

export default Home
