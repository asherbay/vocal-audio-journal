import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import useRecorder from "./useRecorder";
import {useState, useEffect} from 'react'
import axios from "axios";
import ChooseTags from './ChooseTags'
const EntryModal = ({handleClose, handleChange, handleSave, show, blobURL, duration, processTags}) => {

    const [title, setTitle] = useState("")
    const [mood, setMood] = useState("")
    const [notes, setNotes] = useState("") 
    const [chosenTags, setChosenTags] = useState([])
    const currentDate = new Date();

    const [date, setDate] = useState(currentDate.toLocaleDateString())
    const [time, setTime] = useState(currentDate.toLocaleTimeString())


  
  const handleSubmit = (e) => {
    handleSave(e, chosenTags)
  }
  
  
  return(
    <Modal
      show = {show}
      onHide = {handleClose}
      backdrop = "static"
      keyboard = {false}
      style={{width: "400px", margin: "auto"}}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{textAlign: "center"}}>Journal Entry Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div > 
          <audio src={blobURL} controls style={{height: "35px", margin: "auto"}}/>
          <div style={{margin: "auto", marginTop: "15px"}}>
              <div style={{margin: "auto"}}>
                  <h6 >{duration}</h6>
                  <h6>{date}</h6>
                  <h6>{time}</h6>
              </div>
              <h6>Title: <input style={{marginLeft: "10px", width: "250px"}} name="title" onChange={handleChange}></input></h6>
              <h6>Mood:
                <select style={{marginLeft: "5px"}} name="mood" onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </h6> 
              <div style={{display: "flex"}}>
                <h6 >Notes: <textarea style={{verticalAlign: "top", height: "100px", width: "250px"}} name="notes" onChange={handleChange}></textarea></h6> 
              </div>
              <ChooseTags selectTags={setChosenTags} />
              
          </div>
        </div>
  
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick = {handleClose}>
          Cancel
        </Button>
        <Button variant = "primary" onClick = {handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default EntryModal;