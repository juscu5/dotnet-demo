import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ActionCreators } from "../redux/notesReducer";
import "bulma/css/bulma.css";
import { TitleBar } from "../components/TitleBar";


const ListPageComponent = () => {


    const notesList = useSelector(x => x.notesReducer);
    const dispatch = useDispatch();


    const [formState, setFormState] = useState({
        isearch : ""
    });

    useEffect(async () => { 
        await axios.get("https://localhost:5001/api/Notes").then(result => { 
            dispatch(ActionCreators.setNotes(result.data));
        }).catch( e=> {
            console.log(e)
        }); 
    }, [])

    return( 
        <div>
            <TitleBar />
            <div className="row mt-5" >
                <div className="col-12">
                    <Link className="btn btn-primary" to="/Add" style={{float: 'right', marginBottom: "12px"}}>Add Subscriber</Link> 
                    <div className="form-group">
                        <input type="text"  className="form-control" value={formState.isearch} onChange={(e) => {
                                        setFormState({...formState, isearch : e.target.value})
                                    }}/> 
                        </div>
                </div>
                <div className="col-12">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fullname</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notesList?.notes?.map((x) => 

                                    <tr>
                                        <td>{x.id}</td>
                                        <td>{x.fullname}</td>
                                        <td>{x.age}</td>
                                        <td>{x.address}</td>
                                        <td>
                                            <Link className="btn btn-info btn-sm" style={{marginRight: "6px"}} to={`/Edit/${x.id}`}>Edit</Link> 
                                            <button className="btn btn-danger btn-sm" onClick={() => delete_onclick(x.id, x.fullname)}>Delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


    function delete_onclick(id, fullname){
        console.log(fullname)
        if(!window.confirm("Do you really want to delete " + fullname + "?")){
            return;
        }

        axios.delete("https://localhost:5001/api/Notes/" + id).then(result => {
            alert("Success");
            dispatch(ActionCreators.DeleteNote(id)); 
        }).catch(e => {
            console.log(e)
        })
    }
}




export default ListPageComponent;