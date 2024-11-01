const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storeList = getStoredReadList();

    if (storeList.includes(id)) {
        console.log('Already Exists in the Read List');
        
    } else {
        storeList.push(id);
    }
}

export {addToStoredReadList}