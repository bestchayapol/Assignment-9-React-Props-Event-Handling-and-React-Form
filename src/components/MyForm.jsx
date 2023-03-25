import React, {useState} from "react";

function MyForm() {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.prevDefault();
        alert(
            `Submitted data:\nEmail: ${formData.email}\nFirst name: 
            ${formData.firstName}\nLast name: ${formData.lastName}\n
            Phone number: ${formData.phoneNumber}\nPassword: ${formData.password}`
          );
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email address: <input type="email" name="email" value={formData.email} 
                onChange={handleChange}  required />
            </label>
            <br />

            <label>
                Name: <input type="text" name="firstName" value={formData.firstName}
                onChange={handleChange} pattern="[A-Za-z]+" required />
            </label>
            <br />

            <label>
                Lastname: <input type="text" name="lastName" value={formData.lastName}
                onChange={handleChange} pattern="[A-Za-z]+" required />
            </label>
            <br />

            <label>
                Phone Number: <input type="tel" name="phoneNumber" value={formData.phoneNumber}
                onChange={handleChange} pattern="[0-9]{10}" required />
            </label>
            <br />

            <label>
                Password: <input type="password" name="password" value={formData.password} 
                onChange={handleChange} required />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm