import Vue from 'vue';
Vue.directive('scroll-show', function (el, binding) {

    // v-bind:class="{ show: scrollPosition > 50, hide : scrollPosition < 50 }" 
    const isScrollShow = !!binding.value;

    if (!isScrollShow) {

        el.style.transition = 'all 500ms ease-in-out';

        el.style.position = 'relative';
        el.style.left = '-100px';
        el.style.opacity = '0';

    } else {

        el.style.transition = 'all 500ms ease-in-out';
        el.style.opacity = '1';
        el.style.position = 'relative';
        el.style.left = '0px';

    }

});