## Problem 1 - Analysis

> Soal [Praktikum Clean Code](https://docs.google.com/document/d/1KLAKKe6OZuQrRjJPlPgT7fj9U44-NWdBPnbBmRP_nbY/edit#)

```js
class user{
       var id;
       var username;
       var password;
   }
   class userservice{
       user[] users = [];
       user[] getallusers(){
           return users;
       }
       user getuserbyid(userid) {
           return users.filter(userid);
       }
   }
```

Kekurangan dari code tersebut adalah :

1. Untuk membedakan antara variable, function dan class. sebaiknya penggunaan class diawali dengan huruf Kapital atau PascalCase, dan untuk variabel atau function sebaiknya menggunakan camelCase.
2. Standar dari penggunaan variabel harusnya menggunakan `let`, bukan `var` untuk meminimalisir terjadinya error atau bug karena adanya scooping.
3. Pada class method tidak ada keyword `this`, standar dari airbnb biasanya menggunakan `this` untuk memudahkan chaining data.
4. Pada child class sebaiknya gunakan inheritance, Contoh :
   ```js
   //Sebaiknya
   class UserService extends User {
     constructor(id, username, password) {
       super(id, username, password);
       this.users = [id, username, password];
     }
     getAllUser() {
       return this.users;
     }
   }
   ```
