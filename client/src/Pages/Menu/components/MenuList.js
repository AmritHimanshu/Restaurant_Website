const infoCardDetails = [
    // Soup
    {
        type: "Soup",
        image: "https://masalachilli.com/wp-content/uploads/2021/07/Hot-and-Sour-Soup-3.jpg",
        title: "Hot & Sour (Veg./Chicken)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 69.00,
    },
    {
        type: "Soup",
        image: "https://www.cookingcarnival.com/wp-content/uploads/2021/09/Vegetable-manchow-soup.jpg",
        title: "Manchow (Veg./Chicken)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 69.00,
    },
    {
        type: "Soup",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2019/11/sweet-corn-soup-featured.jpg",
        title: "Sweet Corn (Veg./Chicken)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 69.00,
    },

    // Mutton
    {
        type: "Mutton",
        image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/jyothir/Kerala_Mutton_Pepper_Fry.jpg",
        title: "Mutton Pepper Fry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Mutton",
        image: "https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg",
        title: "Mutton Curry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Mutton",
        image: "https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800",
        title: "Mutton Rogan Josh",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Mutton",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/11/WS/VQ/OV/49172636/rogan-josh-500x500.jpg",
        title: "Mutton Mohalai",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },

    // Sea Food
    {
        type: "Sea Food",
        image: "https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/09/5-20.jpg?resize=500%2C500&ssl=1",
        title: "Fish Fry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://i.ytimg.com/vi/UwSzlA_kiqQ/maxresdefault.jpg",
        title: "Chilly Fish",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://www.kannammacooks.com/wp-content/uploads/finger-fish-fry-recipe-24.jpg",
        title: "Finger Fish",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2015/09/1-17.jpg",
        title: "Prawn Pepper Fry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chilli-Prawns.jpg",
        title: "Chilly Prawn",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://static.toiimg.com/thumb/75454037.cms?imgsize=1271304&width=800&height=800",
        title: "Golden Fried Prawn",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://c.ndtvimg.com/2021-02/qbkp4mcg_fish-curry_625x300_10_February_21.jpg",
        title: "Fish Malabar Curry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Sea Food",
        image: "https://www.awesomecuisine.com/wp-content/uploads/2013/07/Malabar-Prawn-Curry.jpg",
        title: "Prawn Curry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },

    // Noodles
    {
        type: "Noodles",
        image: "https://static.toiimg.com/thumb/54458787.cms?width=1200&height=900",
        title: "Chicken Noodles",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 70.00,
    },
    {
        type: "Noodles",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/egg-fried-noodles-recipe-500x500.jpg",
        title: "Egg Noodles",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Noodles",
        image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/vegetable-noodles.jpg",
        title: "Veg Noodles",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 55.00,
    },
    {
        type: "Noodles",
        image: "https://static.toiimg.com/thumb/75455420.cms?imgsize=2101247&width=800&height=800",
        title: "Mix Noodles",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Noodles",
        image: "https://www.sharmispassions.com/wp-content/uploads/2014/11/SchezwanNoodles6.jpg",
        title: "Schezwan Noodles",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 70.00,
    },

    // Egg
    {
        type: "Egg",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-500x375.jpg",
        title: "Scrambled Egg",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 20.00,
    },
    {
        type: "Egg",
        image: "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg",
        title: "Omelet",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 20.00,
    },
    {
        type: "Egg",
        image: "https://maunikagowardhan.co.uk/wp-content/uploads/2012/09/Masala-Omelette-32.jpg",
        title: "Masala Omelet",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 25.00,
    },
    {
        type: "Egg",
        image: "https://static01.nyt.com/images/2021/12/07/dining/AS-olive-oil-fried-egg/merlin_195254193_650a29e7-3d2c-4b62-9735-a9a1999d8fff-threeByTwoMediumAt2X.jpg",
        title: "Fried Egg (2 Nos.)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 20.00,
    },
    {
        type: "Egg",
        image: "https://www.seriouseats.com/thmb/T5v_t4ZE06pasVLee8VYwkoG9Ec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-soft-boiled-eggs-hero-05_1-7680c13e853046fd90db9e277911e4e8.JPG",
        title: "Boiled Egg (2 Nos.)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 20.00,
    },
    {
        type: "Egg",
        image: "https://1.bp.blogspot.com/-1_aXS6lejl4/XdTPKx9utgI/AAAAAAAAFcI/74Qpyuo6uG0FwDZFeltL3NGBVPt-I79PgCLcBGAsYHQ/s1600/DSC07972.JPG",
        title: "Egg Podimas",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 20.00,
    },
    {
        type: "Egg",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/egg-curry-recipe.jpg",
        title: "Egg Curry / Masala",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },

    // Veg. Dishes
    {
        type: "Veg. Dishes",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/gobi-manchurian.jpg",
        title: "Gobi Manchoorian Dry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://sixhungryfeet.com/wp-content/uploads/2022/08/Paneer-Manchurian-7-1.jpg",
        title: "Panner Manchoorian Dry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/dal-fry-stovetop-featured.jpg",
        title: "Dhal Fry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg",
        title: "Mix Veg Curry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe-500x375.jpg",
        title: "Aloo Gobi Masala",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.sharmispassions.com/wp-content/uploads/2012/08/GreenPeasMasala1.jpg",
        title: "Green Peas Masala",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2019/05/chana-masala-recipe-featured.jpg",
        title: "Chenna Masala",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://vegecravings.com/wp-content/uploads/2020/02/Veg-Kadai-Recipe-Step-By-Step-Instructions.jpg",
        title: "Kadai Vegetable",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.cookingcarnival.com/wp-content/uploads/2015/05/Veg-Kolhapuri-4.jpg",
        title: "Veg Kolapuri",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price:60.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/malai-kofta-recipe.jpg",
        title: "Malai Kufta Curry",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg",
        title: "Paneer Butter Masala",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 60.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/mushroom-manchurian.jpg",
        title: "Mushroom Dry / Gravy",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 70.00,
    },
    {
        type: "Veg. Dishes",
        image: "https://static.toiimg.com/thumb/58624208.cms?width=1200&height=900",
        title: "Boiled Vegetables",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },

    // Tandoor
    {
        type: "Tandoor",
        image: "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
        title: "Naan",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 15.00,
    },
    {
        type: "Tandoor",
        image: "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-3.jpg",
        title: "Butter Naan",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 20.00,
    },
    {
        type: "Tandoor",
        image: "https://myfoodstory.com/wp-content/uploads/2021/10/Garlic-Cheese-Kulcha-5.jpg",
        title: "Kulcha",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 15.00,
    },
    {
        type: "Tandoor",
        image: "https://app.ohieo.com/Images/item_images/Pulka-min-400x280.jpg",
        title: "Pulka",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 10.00,
    },
    {
        type: "Tandoor",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
        title: "Tandoor Chicken (Half)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 130.00,
    },
    {
        type: "Tandoor",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
        title: "Tandoor Chicken (Full)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 250.00,
    },
    {
        type: "Tandoor",
        image: "https://foodiesterminal.com/wp-content/uploads/2020/03/instant-pot-tandoori-chicken-2.jpg",
        title: "Tandoor Leg",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 80.00,
    },
    {
        type: "Tandoor",
        image: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Tikka-2-3.jpg",
        title: "Chicken Tikka",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Tandoor",
        image: "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230-600x600.jpg",
        title: "Chicken Lollypop (4pcs)",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 129.00,
    },
    {
        type: "Tandoor",
        image: "https://hips.hearstapps.com/hmg-prod/images/delish-230502-06-fried-chicken-0887-eb-index-645ec6fb0ca64.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
        title: "Cripsy Chicken",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 139.00,
    },
    {
        type: "Tandoor",
        image: "https://myfoodstory.com/wp-content/uploads/2021/10/Dragon-Chicken-1.jpg",
        title: "Dragon Chicken",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 139.00,
    },
    {
        type: "Tandoor",
        image: "https://i.ytimg.com/vi/WSRhV-V2wuk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBAcJTfObRyEh38u18q_dmEdf77WA",
        title: "Thengadi Kabab",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Tandoor",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
        title: "Paneer Tikka",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 70.00,
    },
    {
        type: "Tandoor",
        image: "https://foodiesterminal.com/wp-content/uploads/2019/04/chicken-reshmi-kabab-recipe-22.jpg",
        title: "Reshmi Kabab",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 100.00,
    },
    {
        type: "Tandoor",
        image: "https://qph.cf2.quoracdn.net/main-qimg-dc67d52de2e69f4ac4e47d19001b009b-lq",
        title: "Parotta / Chappaty / Rotti",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 12.00,
    },
    {
        type: "Tandoor",
        image: "https://rakskitchen.net/wp-content/uploads/2010/03/chilli-parotta-feat.jpg",
        title: "Chilli Parotta",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 50.00,
    },
    {
        type: "Tandoor",
        image: "https://static.toiimg.com/thumb/53109843.cms?width=1200&height=900",
        title: "Alu Parotta",
        desc: "Making a resvation at delicious restaurant is easy and Order now",
        price: 30.00,
    },
];

export default infoCardDetails;