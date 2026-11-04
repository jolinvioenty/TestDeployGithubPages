import React, { useState } from 'react';

function Tambah() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Penambahan dan Pengurangan</h2>

            <h3>Hasil Hitungan: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Tambah
            </button>

            <button onClick={() => setCount(count - 1)}>
                Kurang
            </button>
        </div>
    );
}

export default Tambah;