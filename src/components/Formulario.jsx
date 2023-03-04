import {useState, useEffect} from 'react';

function Formulario() {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar

        if([mascota, propietario, email, fecha, sintomas].includes('')) {
            console.log('Todos los campos son obligatorios');
        }else {
            console.log('enviando');
        }
    }

    return (
        <div className="md:w-1/2 lg:w-3/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Paciente y {''}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>

            <form onSubmit={handleSubmit} action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input type="text" 
                        className="border-2 w-full p-2 mt-2 mb-10 placeholder-gray-400 rounded-md" 
                        placeholder="Nombre Mascota"
                        id="mascota"
                        value={mascota}
                        onChange={ e => setMascota(e.target.value) }
                    />
                </div>
                <div className="">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input type="text" 
                        className="border-2 w-full p-2 mt-2 mb-10 placeholder-gray-400 rounded-md" 
                        placeholder="Nombre Propietario"
                        id="propietario"
                        value={propietario}
                        onChange={ e => setPropietario(e.target.value) }
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input type="email" 
                        className="border-2 w-full p-2 mt-2 mb-10 placeholder-gray-400 rounded-md" 
                        placeholder="email"
                        id="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                </div>
                <div className="">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha de alta
                    </label>
                    <input type="date" 
                        className="border-2 w-full p-2 mt-2 mb-10 placeholder-gray-400 rounded-md" 
                        placeholder="alta"
                        id="alta"
                        value={fecha}
                        onChange={ e => setFecha(e.target.value) }
                        />
                </div>
                <div className="">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Descripcion de los sintomas
                    </label>
                    <textarea id="sintomas" 
                        className="border-2 w-full p-2 mt-2 mb-10 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Sintomas"
                        value={sintomas}
                        onChange={ e => setSintomas(e.target.value) }
                    />
                </div>
                <input type="submit" value="Agregar Paciente"  
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                />
            </form>
        </div>
    )
}

export default Formulario