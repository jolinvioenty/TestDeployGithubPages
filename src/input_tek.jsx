import React, { useState } from 'react';

function InputTek() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    return (
        <div>
            <h2>Input Data</h2>

            <div>
                <label>
                    Nama: 
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Masukkan nama ..."
                    />
                </label>
            </div>

            <div>
                <label>
                    Email: 
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email ..."
                    />
                </label>
            </div>

            <div>
                <label>
                    Alamat: 
                    <input
                        type="text"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        placeholder="Masukkan alamat ..."
                    />
                </label>
            </div>

            <h3>Hasil Inputan:</h3>

            <h4>Nama:</h4>
            <p>{nama}</p>

            <h4>Email:</h4>
            <p>{email}</p>

            <h4>Alamat:</h4>
            <p>{alamat}</p>
        </div>
    );
}

export default InputTek;