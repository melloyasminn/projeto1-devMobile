
const { createApp, ref } = Vue

createApp({
    setup() {
        const cart = ref(0)
        const addToCart = () => {
            cart.value +=1
        }

        const image1 = ref ("assets/images/image1.png");
        const image2 = ref ("assets/images/White and Pink Elegant Retro Coquette Fashion Sale Event Poster.png");
        const image3 = ref ("assets/images/Red and Pink Simple Happy Valentine's Day Greeting Poster.png");
        const image4 = ref ("assets/images/Ivory Minimal Croissant Promotion Poster.png");

        const descricao1 = ("loren");
        const descricao2 = ("Loren");
        const descricao3 = ("loren");
        const descricao4 = ("loren");
        const descricao5 = ("loren");
        const descricao6 = ("loren");
        const descricao7 = ("loren");

        return {
            product_title1: ref('tanan1'),
            product_title2: ref('tanan2'),
            product_title3: ref('tanan3'),
            product_title4: ref('tanan4'),
            image1,
            image2,
            image3,
            image4,
            descricao1,
            descricao2,
            descricao3,
            descricao4,
            descricao5,
            descricao6,
            descricao7,
            inStock: ref(10),
            cart,
            addToCart,
        }
    }
}).mount('#container')