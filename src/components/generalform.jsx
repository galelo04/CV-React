import { useState } from "react";

function GeneralForm({ sendData }) {
    const initialData = {
        name: "",
        email: "",
        phone: ""
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState(initialData);



    const handlechange = (e, type) => {
        let newData;
        if (type == "name") {
            newData = { ...data, name: e.target.value };
        }
        else if (type == "email") {
            newData = { ...data, email: e.target.value };
        }
        else {
            newData = { ...data, phone: e.target.value };
        }
        setData(newData);
    }

    return (
        <form className="generalInfo" onSubmit={e => {
            e.preventDefault();
            sendData(data, "general");
        }}>
            <label>Name:</label>
            <input type="text" id="nameInput" value={data.name} onChange={e => handlechange(e, "name")}></input>
            <label>Email:</label>
            <input type="email" id="emailInput" value={data.email} onChange={e => handlechange(e, "email")}></input>
            <label>Phone:</label>
            <input type="tel" id="phoneInput" value={data.phone} onChange={e => handlechange(e, "phone")}></input>
            <button type="submit">submit</button>
        </form>
    )
}

export default GeneralForm