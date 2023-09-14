import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { axiosInstance } from '../axios.util';
import CaseCard from './CaseCard'

export default function Cases() {

    const initialForm = {
        SearchBar: ""
    }

    const [form, setForm] = useState({ ...initialForm })
    const [caseData, setCaseData] = useState([])
    const history = useHistory();

    const handlePostRequest = () => {
        history.push('/CreateRequest')
    }

    const handleTextChange = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    const getCases = async() => {
        try {
            const {data} = await axiosInstance.get(`/api/auth/cases`)
            setCaseData(data)
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{ width: "100%", height: "5em", lineHeight: "5em", textAlign: "center" }}>
                <input
                    type='text'
                    placeholder="Search..."
                    value={form.SearchBar}
                    onChange={(e) => handleTextChange(e.target.value, "SearchBar")}
                    className='CasesSearchBar'
                />
            </div>
            <div style={{width:"100%",height:"5em",lineHeight:"5em",display:"flex",justifyContent:"flex-end"}}>
                <button className='AddCasesButton' onClick={handlePostRequest}>Create Request</button>
            </div>

            <div className='RequestList'>
                <CaseCard/>
                {/* {
                    caseData?.map((item)=>(
                        <CaseCard key={item.id} item={item}/>
                    ))
                } */}
            </div>
        </div>
    )
}
