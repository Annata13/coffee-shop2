<template>
    <main>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <nav-bar-component />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <titel-component name="Everything You Love About Coffee" />
                        <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <router-link to="/our-coffee" class="preview__btn">More</router-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <product-card v-for="bestseller in bestsellers" :key="bestseller.id" classItem="best__item"
                                :name="bestseller.text" :price="bestseller.price" :image="bestseller.img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import TitelComponent from '@/components/TitelComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    components: { ProductCard, NavBarComponent, TitelComponent },
    data() {
        return {
            bestsellers: [
                {
                    id: uuidv4(),
                    text: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-1.jpg'
                },
                {
                    id: uuidv4(),
                    text: 'Presto Coffee Beans 1kg',
                    price: 15.99,
                    img: 'coffee-2.jpg'
                },
                {
                    id: uuidv4(),
                    text: 'AROMISTICO Coffee 1kg',
                    price: 6.99,
                    img: 'coffee-3.jpg'
                }
            ],
        }
    }
}
</script>
