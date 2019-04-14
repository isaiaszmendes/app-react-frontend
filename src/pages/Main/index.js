import React, { Component } from 'react'
import api from "../../services/api"

import logo from '../../assets/logo.svg'
import './styles.css'

class Main extends Component {

   state = {
      newBox: ''
   }

   handleSubmit = async (e) => {
      e.preventDefault()
      const { newBox } = this.state
      const response = await api.post('boxes', {
         title: newBox
      })
      
      this.props.history.push(`/box/${response.data._id}`)
   }

   handleInputChange = e => {
      const val = e.target.value
      this.setState({
         newBox: val
      })
   }

   render() {
      return (
         <div id='main-container'>
            <form onSubmit={this.handleSubmit}>
               <img src={logo} alt="" />
               <input 
                  placeholder="Criar um box"
                  value={this.state.newBox}
                  onChange={this.handleInputChange}
               />
               <button type='submit'>Criar</button>
            </form>  
         </div>
      )
   }
}

export default Main