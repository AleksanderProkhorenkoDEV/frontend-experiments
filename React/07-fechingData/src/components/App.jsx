import axios from "axios";
import React, { useEffect, useState } from "react"

const App = () => {

    const [notes, setNotes] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('http://pruebapdf.dvl.to/api/note')
            setNotes(response.data)
            console.log(notes)
        } catch (err) {
            console.log('Error when feching data:', err)
        }
    }

    const downloadPdf = async () => {
        try {
            const response = await axios.get('http://pruebapdf.dvl.to/api/pdf', {
                responseType: 'blob',
                headers: {
                    'Content-Disposition': 'attachment;filename=report.xls',
                    'Content-Type': 'application/octet-stream',
                },
            });
            console.log(response)
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
        } catch (err) {
            console.log('Error when feching pdf:', err)
        }
    }

    return (
        <>
            <article>
                <button onClick={getData}>List of Note</button>
                <button onClick={downloadPdf}>Download PDF</button>
                <ul>
                    {notes && notes.map(note => (
                        <li key={note.id}>
                            <h1>{note.title}</h1>
                            <p>{note.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    )
}

export default App