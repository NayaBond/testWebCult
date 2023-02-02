import paintingItems from './data/items.json';
import menuItems from './data/menu.json';
import axios from "axios";

// Paintings
export const getItems = () => {
    return paintingItems;
};
export const search = ({query = ''}) => {
    paintingItems.forEach(paint => {
        paint.show = true;
    });
    if (query.length) {
        let obj = paintingItems.find((o, i) => {
            if (!o.title.includes(query)) {
                paintingItems[i].show = false;
            }
        });
    }
    return paintingItems;
};
//Menu
export const getMenuItems = () => {
    return menuItems;
};

//Buy
export const BuyThing = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1');
};