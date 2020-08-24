import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponentI, { FunctionComponentII } from './function_compoment';
import ClassComponent from './class_component';
import StateComponent from './class_component/state_component';
import FStateComponent from './function_compoment/f_state_component';
import SimpleButtonComponent from './SimpleButtonComponent';
import ConditionalRendering from './conditional_rendering';
import MapListComponent from './list_and_keys_component/map_list_component';
import ForEachListComponent from './list_and_keys_component/for_each_list_component';
import ForListComponent from './list_and_keys_component/for_list_component';

function App() {
  return (
    <div className='App'>
      {
        // Function component 1 ending
        // Multiline with children
      }
      <FunctionComponentI name='Ujan'>
        <div></div>
      </FunctionComponentI>
      {
        // Single Line
      }
      <FunctionComponentI />
      {
        // Function component 1 ending
        // Multiline with children
      }
      <FunctionComponentII name='Melvin'>
        <div></div>
      </FunctionComponentII>
      {
        // Single Line
      }
      <FunctionComponentII />
      {
        // Class component
      }
      <ClassComponent name='Ankit Nakarmi' />
      Class State
      {
        //React State
      }
      <StateComponent />
      Function State
      {
        //Function State
      }
      <FStateComponent />
      {
        // Simple Button Component
      }
      <SimpleButtonComponent>Download</SimpleButtonComponent>
      {
        // Conditional rendering
      }
      <ConditionalRendering />
      {
        // Map List Component
      }
      <MapListComponent />
      {
        // For Each List Component
      }
      <ForEachListComponent />
      {
        // For List Component
      }
      <ForListComponent />
    </div>
  );
}

export default App;
