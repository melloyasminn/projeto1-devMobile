
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

        return {
            product_title1: ref('tanan1'),
            product_title2: ref('tanan2'),
            product_title3: ref('tanan3'),
            product_title4: ref('tanan4'),
            image1,
            image2,
            image3,
            image4,
        }
    }
}).mount('#container')