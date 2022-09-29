## Resume Materi React Routes

Nama : Rizky Nurfauzi  
Kelas : React A

### React Routes

Route adalah modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application).

### Pengertian SPA dan MPA

- SPA (Single Page Application)
  SPA adalah salah satu jenis aplikasi website dimana hanya ada **1 halaman yang menangani semua aktifitas** yang terjadi dalam aplikasi tersebut
- MPA (Multi Page Application)
  MPA juga disebut sebagai traditional web app, atau jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru

### SPA vs MPA

| SPA                                                | MPA                                                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Waktu loading jauh lebih cepat                     | SEO website akan lebih mudah dioptimasi                                                             |
| Tidak ada query tambahan ke server                 | Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda                      |
| Front-end yang cepat dan responsif                 | Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (User Experience) |                                                                                                     |

### Instalasi React Router

`npm install react-router-dom --save`

### Komponen Penting React Router

- BrowserRouter
  ```js
  <BrowserRouter>
    // Isi <Route> Pada bagian ini
  </BrowserRouter>
  ```
  BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url
- Switch
  ```js
  <Switch>
    <Route path="/" exact component={home} />
  </Switch>
  ```
  1. Switch digunakan untuk membungkus kumpulan beberapa component Route
  2. Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, lika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component Notfound
- Route
  ```js
  <Route path="/profile/:name" component="{ProfileDetail}">
  ```
  1. Route digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web.
  2. Attribute path merupakan url pada browser pada proses routing
  3. Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan
- Link
  ```js
  <Link to="/profile">Menuju Profil</Profile>
  ```
  1. Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.
  2. Element kosong <></> tersebut adalah shorthand dari <React.Fragment></React.Fragment> yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM

### Parameter URL

Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman, Contoh:

```js
<Route path="/profile/:id" component="{ProfileDetail}" />
```

### Redirect vs Link

| Link                                    | Redirect                                |
| --------------------------------------- | --------------------------------------- |
| Dapat digunakan pada kondisi apapun     | Lebih sering digunakan pada halaman 404 |
| Memberikan history baru pada browser    | Menimpa history pada browser            |
| Bereaksi dengan click seperti pada href | Bereaksi dengan suatu kondisi           |

### Hook Routing React

- useHistory
  > use History memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi.
- useLocation
  > useLocation mengembalikan objek lokasi yang mewakili URL saat ini. Anda dapat memikirkannya seperti useState yang mengembalikan lokasi baru, setiap kali URL berubah.
- useParams
  > useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.
- useRouteMatch
  > useRoute Match mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.

### Sreenshots Task React Route

![AboutApp](/15_React-Routing/Screenshots/AboutApp.png)

![AboutAuthor](/15_React-Routing/Screenshots/AboutAuthor.png)

![About](/15_React-Routing/Screenshots/AboutPage.png)

![ErrorPage](/15_React-Routing/Screenshots/ErrorPage.png)

![TodoList](/15_React-Routing/Screenshots/Todolist.png)
