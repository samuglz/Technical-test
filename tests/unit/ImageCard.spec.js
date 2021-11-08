import { mount } from '@vue/test-utils';
import ImageCard from '../../src/components/ImageCard.vue';

const propsData = {
    src: 'https://via.placeholder.com/600/92c952',
    alt: 'accusamus beatae ad facilis cum similique qui sunt'
};

describe('ImageCard', () => {
    it('when the component is rendered the image should not be visible', () => {
        const wrapper = mount(ImageCard, {
            propsData
        });
        expect(wrapper.get('.imgCard').isVisible()).toBe(false);
    });

    it('when image is loaded, the image should be visible', async () => {
        const wrapper = mount(ImageCard, {
            propsData
        });
        await wrapper.get('.imgCard').trigger('load');
        expect(wrapper.get('.imgCard').isVisible()).toBe(true);
    });

    it('when the component is rendered the spinner should be visible', () => {
        const wrapper = mount(ImageCard, {
            propsData
        });
        expect(wrapper.get('.spinner-container').isVisible()).toBe(true);
    });

    it('when the image is loaded spinner should not be visible', async () => {
        const wrapper = mount(ImageCard, {
            propsData
        });
        await wrapper.get('.imgCard').trigger('load');
        expect(wrapper.get('.spinner-container').isVisible()).toBe(false);
    });

    it('fadeIn class must be active when the image has been loaded', async () => {
        const wrapper = mount(ImageCard, {
            propsData
        });
        await wrapper.get('.imgCard').trigger('load');
        expect(wrapper.get('.imgCard').classes()).toContain('fadeIn');
    });
});
