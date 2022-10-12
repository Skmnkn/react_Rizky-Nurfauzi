### Resume React Testing

Nama : Rizky Nurfauzi  
Kelas : React A

### React Testing

Testing adalah proses verifikasi bahwa _test assertions_ (ekspresi boolean) kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi.

Test Assertion adalah eskpresi boolean yang mengembalikan nilai true kecuali ada bgu di kode kita.

#### Manfaat Testing

Testing memiliki manfaat sebagai berikut :

- Jika aplikasi kita memilki _coverage_ yang baik (mayoritas codebase tercover oleh test). Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita.
- Mengurangi bug pada aplikasi

#### Kategori Testing

1. Rendering component trees
2. Menjalankan aplikasi lengkap (test E2E)

#### Tools Testing

1. Jest
   // math.js

   ```js
   function sum(x, y) {
     return x + y;
   }
   ```

   // testing

   ```js
   import sum from "./math.js";

   describe("sum", () => {
     test("sums up two values", () => {
       expect(sum(2, 4)).toBe(6);
     });
   });
   ```

2. React Testing Library
