import { useState } from 'react';
import { Bars3Icon} from '@heroicons/react/24/outline'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Formulario enviado:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md ">
            <form onSubmit={handleSubmit} className='w-full'>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-1">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-medium mb-1">Mensaje</label>
                    <textarea
                        id="message"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Enviar
                </button>
            </form>

        </div>
    );
}

export default ContactForm;
