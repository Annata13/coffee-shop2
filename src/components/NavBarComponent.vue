<template>
    <div class="col">
        <header>
            <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
                <link-component classItem="header__item" :link="links.header.link">
                    <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
                </link-component>
                <link-component v-for="link in links.other" :key=link.id :link="link.link" :text="link.text"
                    classItem="header__item" />
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
            links: {
                header: {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
                other: [

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
            }
        };
    },
};
</script>