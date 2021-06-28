let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    // Mengubah data  tersebut menggunakan spread operator
    let data2 = {...data, hobby : ['Reading', 'singing', 'watching']};
    data2.name = 'Rizka Zahraini Nurmis';
    data2.email = 'rizkanurmis15@gmail.com';
    console.log(data2);

    //Mengambil data “street dan city”  menggunakan destructuring
    const {street, city} = data.address;
    console.log(`Street = ${street}`);
    console.log(`City = ${city}`);

    

    