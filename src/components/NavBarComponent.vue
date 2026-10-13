<template>
    <div class="col">
        <header>
            <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
                <li class="header__item">
                    <router-link :to="links[0].link"> <img :src="require(`@/assets/logo/${links[0].icon}`)"
                            :alt="links[0].icon"></router-link>
                </li>

                <link-component :link="links[1].link" :text="links[1].text" classItem="header__item" />
                <link-component :link="links[2].link" :text="links[2].text" classItem="header__item" />
                <link-component :link="links[3].link" :text="links[3].text" classItem="header__item" />

            </ul>
        </header>
    </div>
</template>

<script>
import LinkComponent from './LinkComponent.vue';

export default {
    components: { LinkComponent },
    data() {
        return {
            links: [
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee'
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/good-spage'
                },
                {
                    id: 3,
                    text: 'Contact us',
                    link: '/contact-us'
                },
            ],
        };
    },
};
</script>