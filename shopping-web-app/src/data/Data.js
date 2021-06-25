const productsData = [
    {
        productName: 'Aashirvaad Atta',
        brandName : 'Aashirvaad',
        weight: '5 Kg Pouch',
        imageUrl: 'images/ashirvad_atta.jpg',
        price: '288',
        id: '1',
        quantity: 1,
        stock: 10,
        total: '288',
        inCart: false,
        description: 'Aashirvaad is known for its high-quality grains and other products. Aashirvaad, as a brand, believes in bringing the best grains from the country and placing them on your table in a clean, hygienic and high-quality package. Aashirvaad Select Atta is also produced in a similar way so that you can enjoy rotis, wraps and paranthas.',
        "x": 0, "y": 0, "w": 2, "h": 8, "i": "1", "static": false
    },
    {
        productName: 'Madhur Sugar',
        brandName : 'Madhur',
        weight: '5 kg Pouch',
        imageUrl: 'images/madhur_sugar.jpg',
        price: '215',
        id: '2',
        quantity: 1,
        stock: 5,
        total: '215',
        inCart: false,
        description: 'Madhur sugar is pure, hygienic and meets international standards. It is available in small and medium crystal sizes packed in 1kg and 5kg quantity.Madhur has brought together knowledge of sweetening passion to develop a product that is untouched by hand for the consumers.From the morning cuppa, the favourite cake and the special recipe, we make it better. No matter what the occasion is we are there with a brand you know and trust. '
 ,"x": 2, "y": 0, "w": 2, "h": 8, "i": "2", "static": false
    },
    {
        productName: 'Tata Salt Lite',
        brandName : 'Tata',
        weight: '1 kg Pouch ',
        imageUrl: 'images/tata-salt-lite.jpg',
        price: '36',
        id: '3',
        quantity: 1,
        stock: 10,
        total: '36',
        inCart: false,
        description: 'Tata Salt Lite is low-sodium salt from the house of Tata. The formulation of the salt is such that it provides 15% lower sodium than normal salt. Salt with lower sodium in diet helps to lower blood pressure levels. Salt is an essential ingredient in any food item as it works as an enhancer. '
        ,"x": 4, "y": 0, "w": 2, "h": 8, "i": "3", "static": false
    },
    {
        productName: 'Fortune Rice',
        brandName : 'Fortune',
        weight: '1 kg Pouch',
        imageUrl: 'images/fortune-basmati-rice-rozana.jpg',
        price: '82',
        id: '4',
        quantity: 1,
        stock: 15,
        total: '82',
        inCart: false,
        description: 'An ideal choice to relish everyday rice dishes, Fortune Rozana basmati rice comes with a smooth, slender grain texture. This delicious variety imparts a flavourful aroma to your dishes, which results in an irresistible serving that delights everyone’s heart.Fortune Rozana basmati rice is that delicious variety of rice that you can relish every day.'
    ,"x": 6, "y": 0, "w": 2, "h": 8, "i": "4", "static": false
    },
    {
        productName: 'Fortune Oil',
        brandName : 'Fortune',
        weight: '5 L Can ',
        imageUrl: 'images/fortune-rice-bran-refined-oil-.jpg',
        price: '626',
        quantity: 1,
        stock: 18,
        total: '626',
        id: '5',
        description: 'Fortune Rice Bran Health Oil is physically refined oil, it contains Gamma Oryzanol, that reduces cholesterol, keeps heart healthy. Vitamin E helps in maintaining the balance of the nervous system, natural antioxidants. It is best suitable for health conscious people.'
    ,"x": 8, "y": 0, "w": 2, "h": 8, "i": "5", "static": false
    },
    {
        productName: 'Dinshaws Cow Ghee',
        brandName : 'Dinshaws',
        weight: '500 ml Jar',
        imageUrl: 'images/dinshaws-cow-ghee.jpg',
        price: '277',
        id: '6',
        quantity: 1,
        stock: 20,
        total: '277',
        inCart: false,
        description: ' Home-made ghee is fresh, wholesome full cream churned into creamy butter, allowed to stay for days till its ripe to be turned into ghee. It does take longer but the result is perfect yellow granulated ghee full of natural aroma just like homemade ghee. Try and experience the difference.The product is made using artisan skills and modern technology that contribute to your health and happiness. Bring home nature’s purest form of goodness with dairy products that are rich, natural and wholesome. From being your nutritious breakfast partner to your desi meal master, dairy offerings from Dinshaw are all you need to up your goodness quotient. At Dinshaws, there is something for everyone. Right from the essentials to premium products.'
    ,"x": 0, "y": 8, "w": 2, "h": 8, "i": "6", "static": false
    },
    {
        productName: 'Surf Excel Matic',
        brandName : 'Surf Excel',
        weight: '2 kg ',
        imageUrl: 'images/surf-excel-matic-top-load-detergent-powder.jpg',
        price: '279',
        id: '7',
        quantity: 1,
        stock: 4,
        total: '279',
        inCart: false,
        description: 'Presenting, Surf excel matic top load the machine specialist laundry detergent from the Surf excel matic family that gives you 100% Tough Stain Removal in Machines. Surf excel matic top load is specially designed to work in high water level environment (40 liters) of top load washing machines. Its hand rub action power penetrates clothes and removes tough stains in the washing machine itself .This means no more soaking or scrubbing and saves up the time and effort you put behind everyday laundry. Being a washing machine specialist detergent, it dissolves completely in machine and ensure its leaves no residue on your clothes or your machine. Surf excel is Indias no.1 matic detergent brand and is recommended by leading washing machine manufacturers such as Samsung, Videocon, Godrej, Panasonic, Electrolux, Siemens, Bosch, IFB & Kelvinator. Moreover, Surf excel matic is value for money as all you need is 1 scoop (60 gms) of the detergent powder for regular load of clothes, however for heavily soiled clothes we recommend 1 n half Scoop (90gms) of the detergent powder. Now, just dump your clothes in your top load washing machine without soaking or scrubbing them and get 100% Tough Stain Removal in your machine.'
    ,"x": 2, "y": 8, "w": 2, "h": 8, "i": "7", "static": false
    },
    {
        productName: 'Ariel Detergent',
        brandName : 'Ariel',
        weight: '2 kg ',
        imageUrl: 'images/ariel-detergent-washing-powder-matic-top-load.jpg',
        price: '320',
        id: '8',
        quantity: 1,
        stock: 7,
        total: '320',
        inCart: false,
        description: 'New & Improved Ariel Matic gives you tough stain removal in just 1 wash. Especially designed to be used in top loading machines, Ariel Matic Top Load offers brilliant stain removal for full loads. It also provides deep down cleaning and long-lasting freshness. Formulated specifically for fully automatic washing machines, it generates the right amount of foam in the machine to deliver superior cleaning inside the machine itself, without damaging the machine due to excess foam. It requires just 1.5 scoops for normal loads, and 2 scoops for heavy loads, providing performance along with value. Ariel Matics cutting edge technology provides impeccable cleaning for all your clothes, and removes tough stains like juice, chocolate, tomato and butter/ghee. '
   ,"x": 4, "y": 8, "w": 2, "h": 8, "i": "8", "static": false
    }, {
        productName: 'Tata Premium Leaf Tea Box',
        brandName : 'Tata',
        weight: '500 g',
        imageUrl: 'images/tata-tea.jpeg',
        price: '254',
        id: '9',
        quantity: 1,
        stock: 4,
        total: '254',
        inCart: false,
        description: 'An essential aspect of the life and culture of almost every Indian household, a cup of "chai" is one of the staple beverages of the country. Sourced solely from India"s tea plantations, Tata Premium Tea Pouch offers a unique blend that is specially curated for all the "chai" lovers across the country.'
    ,"x": 6, "y": 8, "w": 2, "h": 8, "i": "9", "static": false 
    },
    {
        productName: 'Tata Teaveda Ayurvedic',
        brandName : 'Tata',
        weight: '250 g ',
        imageUrl: 'images/tata-tea-ayurveda.jpeg',
        price: '105',
        id: '10',
        quantity: 1,
        stock: 7,
        total: '105',
        inCart: false,
        description: 'An essential aspect of the life and culture of almost every Indian household, a cup of "chai" is one of the staple beverages of the country. Sourced solely from India"s tea plantations, Tata Premium Tea Pouch offers a unique blend that is specially curated for all the "chai" lovers across the country.'
    ,"x": 8, "y": 8, "w": 2, "h": 8, "i": "10", "static": false
    },
]

export default productsData;