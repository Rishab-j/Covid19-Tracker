import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;



/** ---------------------- BEFORE CLEANING THE CODE ------------ */

// import React from 'react';

// import {Cards,Chart,CountryPicker} from './components' 
// import styles from './App.module.css';
// import { fetchData } from './api';

// // Note:-  THERE ARE SO MANY ADVANTAGES OF USING FUNCTIONAL COMPONENTS WITH HOOKS
// //         BUT WHENEVER WE ARE USING SOME ASYNCHRONIUS DATA AND MULTIPLE USE EFFECTS THEN WE MUST SWITCH BACK TO USE CLASS COMPONENTS
// //         BECAUSE IT IS MUCH EASIER

// class App extends React.Component{
    
//     // we have to make a state so as to pass our fetched data into our different components
//     state = { // in latest react verison it is not necessary to write the constructor it is automattically written in the backend
//         data : {},
//         country: '',
//     }

//     async componentDidMount(){
//         const fetchedData = await fetchData(); // we need to await because we sre dealing with asynchronous function
//                                         // but for await to work the function must be wrapped in a function that is asynchronus
        
//         this.setState({data : fetchedData}); // after retrieving data we are just setting the state
//     }

//     handleCountryChange = async (country) =>{
//         // fetch the data
//         const fetchedData = await fetchData(country);
//         // set the data
//         this.setState({data:fetchedData, country:country});
//     }

//     render(){

//         const { data ,country} = this.state;

//         return(
//             <div className={styles.container}>
//                 <Cards data={data}/>  
//                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
//                 <Chart data={data} country={country}/>
//             </div>
//         );
//     }
// }

// export default App;