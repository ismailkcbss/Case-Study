import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { axiosInstance } from '../axios.util'
import { Button, TextField } from '@mui/material'


export default function CreateRequest() {

    const { id } = useParams();
    const history = useHistory();

    const initialForm = {
        Title: "",
        Desc: "",
    }

    const [form, setForm] = useState({ ...initialForm })
    const [file, setFile] = useState(null)

    const handleTextChange = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const CreateReq = async (event) => { // Senaryo Gereği yazıldı sunucu tarafı cevap vermiyor
        event.preventDefault()
        try {
            const { data } = await axiosInstance.post(`/api/auth/cases`, {
                title: form.Title,
                description: form.Description,
                file: file
            })
            alert('Success')
        } catch (error) {
            alert("Could not be Created")
        }
    }

    const UpdateRequest = async () => {
        if (id) {
            try {
                const { data } = await axiosInstance.put(`/api/auth/cases/${id}`, {
                    title: form.Title,
                    description: form.Description
                })
                history.push('/Cases')
                alert("Success")
            } catch (error) {
                alert("error")
            }
        }
    }

    const handleSaveClick = () => {
        if (!id) {
            CreateReq();
        } else {
            UpdateRequest();
        }
    }

    return (
        <div className='CreateRequestDiv'>
            <form className='CreateRequestForm'>
                <TextField
                    id="Title"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    value={form.Title}
                    onChange={(e) => handleTextChange(e.target.value, "Title")}
                    className='CreateReqInput'
                />
                <TextField
                    id="Desc"
                    label="Desc"
                    fullWidth
                    variant="outlined"
                    value={form.Desc}
                    onChange={(e) => handleTextChange(e.target.value, "Desc")}
                    className='CreateReqInput'
                />
                <input
                    type='file'
                    style={{ margin: "2em 0 2em 0" }}
                    onChange={handleImageChange}
                />
                <Button variant="contained" onClick={handleSaveClick} className='CreateReqButton'>
                    Save
                </Button>
            </form>
        </div>
    )
}
