class LocalStorage {
    storeItem(key, item){
        let items;
        // Check if any items in local sotrage
        if(localStorage.getItem(key) === null){
            items = [];
            // Push item in the array
            items.push(item);
            // Set local storage
            localStorage.setItem(key, JSON.stringify(items));
        } else {
            // Get what is already in local storage
            items = JSON.parse(localStorage.getItem(key));
            // Replace old item by new item
            items.splice(0, 1, item);
            // Reset local storage
            localStorage.setItem(key, JSON.stringify(items));
        }
    }

    getItemFromStorage(key){
        let items;
        if(localStorage.getItem(key) === null){
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem(key));
        }
        return items;
    }
}

export const clientStorage = new LocalStorage;