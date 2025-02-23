import { shallowMount } from "@vue/test-utils"
import MenuItemCard from "../../src/components/MenuItemCard.vue"

describe('CartItemCard.vue', () => {
    it('renders the menuItem prop data', () => {
        const menuItem = {
            id: 1,
            name: "French Fries",
            description: "Fried potato rectangles",
            price: "4.99",
            imageId: '1'
        }
        const wrapper = shallowMount(MenuItemCard, {
            props: {menuItem}
        })
        expect(wrapper.text()).toContain('French Fries')
    })

    it('renders the menuItem description', () => {
        const menuItem = {
            id: 1,
            name: "French Fries",
            description: "Fried potato rectangles",
            price: "4.99",
            imageId: '1'
        }
        const wrapper = shallowMount(MenuItemCard, {
            props: {menuItem}
        })
        expect(wrapper.text()).toContain('Fried potato rectangles')
    })

})