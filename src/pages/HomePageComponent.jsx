import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { ActionCreators } from "../redux/notesReducer";
import "bulma/css/bulma.css";
import { TitleBar } from "../components/TitleBar"


const ListPageComponent = () => {


    const notesList = useSelector(x => x.notesReducer)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(async () => { 
        await axios.get("https://localhost:5001/api/Notes").then(result => { 
            dispatch(ActionCreators.setNotes(result.data));
        }).catch( e=> {
            console.log(e)
        }); 
    }, [])

    
    return( 
        
        
        <div >
            

            <div>
                <TitleBar />
            </div>

            <form action="/list">
            
                <div className="row mt-5" >
                    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
                        <div className="card"><br />
                            <div className="card-body">
                                <h1 style={{marginBottom:"16px"}} class="title is-1">Subscribers Information</h1>
                                <br />
                            </div>
                            <div class="buttons is-right">
                                <button class="button is-link" type="submit" style={{margin:"16px"}}>Click To View Subrcibers List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>

        
    )
}




export default ListPageComponent;