export default function FormWithJS() {

    const submitContactForm = async (event) => {
        event.preventDefault();

        const data = {
            nome: event.target.name.value,
            email: event.target.email.value,
            qtdeKW: event.target.qtdeKW.value,
            valorKW: event.target.valorKW.value,
        };

        const JSONdata = JSON.stringify(data);

        const endpoint = '/api/submit';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);

        const result = await response.json();

        alert(`Please recheck Your E-Mail ID ${result.data}`);
    };

    return (
        <form onSubmit={submitContactForm}>
            <label For="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label For="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}