import React from 'react'
import { useHistory } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { axiosInstance } from '../axios.util';
import { useSelector } from 'react-redux';

export default function CaseCard(props) {

    const { item } = props;
    const history = useHistory();

    const userData = useSelector((state) => state.user)

    const handleEdit = async () => {
        history.push(`/CreateRequest/${item.id}`);
    }

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/api/auth/requests/${item.id}`)
            alert("success")
        } catch (error) {
            alert("error")
        }
    }

    return (
        <div className='CaseCardDiv'>
            <div className='CaseCardHeader'>
                <span className='CardHeader' style={{ borderBottom: "1px solid black" }}>Title: Baslik{/* <span>{item.title}</span>*/}</span>
                <span className='CardHeader'>Desc: Aciklama{/* <span>{item.description}</span>*/}</span>
            </div>
            {
                userData.user.type === 'admin' ? (
                    <div className='CaseCardFooter'>
                        <button onClick={handleEdit} style={{ border: "none", backgroundColor: "transparent" }}><EditIcon sx={{ color: "orange", cursor: "pointer" }} /></button>
                        <button onClick={handleDelete} style={{ border: "none", backgroundColor: "transparent", marginLeft: "2em" }}><DeleteIcon sx={{ color: "red", cursor: "pointer" }} /></button>
                    </div>
                ) : (
                    ""
                )
            }

        </div>
    )
}
