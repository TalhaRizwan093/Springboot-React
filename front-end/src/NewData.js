import { useState } from "react";

const NewData = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {firstName, lastName, email};
        console.log(data);
    }

    return ( 
        <div>
            <h2>Add Neww data</h2>
            <form onSubmit = {handleSubmit}>
                <label >First Name</label>
                <input 
                type="text" 
                required
                value = {firstName}
                onChange = {(e) => setFirstName(e.target.value)}
                />
                <label >Last Name</label>
                <input 
                type="text" 
                value = {lastName}
                onChange = {(e) => setLastName(e.target.value)}
                />
                <label >Email</label>
                <input 
                type="text"
                required
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                 />
                 <button>Submit</button>
            </form>

        </div>
     );
}
 
export default NewData;