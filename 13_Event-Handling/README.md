## Resume Materi Event Handling

Nama : Rizky Nurfauzi  
Kelas : React A

### State

State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

1. Data yang bisa dimodifikasi menggunakan `setState`.
2. Setiap terjadi modifikasi akan terjadi render ulang.
3. Bersifat Asynchronus.
4. Dipakai dalam class

### Props vs State

| Props                     | State                                      |
| ------------------------- | ------------------------------------------ |
| `props` are read-only     | `state` bisa diubah dengan asynchronous    |
| `props` can't be modified | `state` bisa diubah dengan `this.setState` |

### Stateful vs Stateless Component

_Stateful Component_ adalah memiliki state, Component dibuat menggunakan class. Kelebihan Class component adalah memiliki Lifecycle.

_Stateless Component_ adalah tidak memiliki `state` hanya `props`. Umumnya component ini biasanya dibuat menggunakan function component.

Mereka juga disebut sebagai :

1. Smart Component & **Dump** Component
2. Container Component & **Presentational** Component

### Table Stateful vs Stateless Component

| Stateless                                       | Stateful                                          |
| ----------------------------------------------- | ------------------------------------------------- |
| Tidak tahu tentang aplikasi                     | Mengerti dengan aplikasi                          |
| Tidak melakukan data fetching(pengambilan data) | Melakukan data fetching(pengambilan data)         |
| Tujuan utamanya adalah visualisasi              | Berinteraksi dengan aplikasi                      |
| Dapat digunakan kembali                         | Tidak dapat digunakan kembali                     |
| Hanya berkomunikasi dengan induk langsungnya    | Meneruskan status dan data ke anak anaknya(child) |

### Handling Event

_Handling Event_ adalah suatu metode untuk menangani sebuah event/ aksi yang diberikan pengguna kepada suatu komponen.

**Event** adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya jika tombol ditekan, form diSubmit, dsb.

### Penulisan Event React VS HTML

- **Html**

```js
<button onclick="activeLasers()">Activate lasers</button>
```

- **React**

```js
<button onClick={this.activeLasers}>Activate lasers></button>
```

### Contoh List Event

1. Clipboard Events (Promise terpenuhi).
2. Form Events (`onChange`, `onSubmit`).
3. Mouse Events (`onClick`, `onDoubleClick`, `onMouseHover`).
4. Generic Events (`onError`, `onLoad`).
