export const loadData = () => {
    try {
        const serializedData = localStorage.getItem('data');
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    }
    catch (err) {
        return undefined;
    }
}

export const saveData = data => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem('data', serializedData);
    }
    catch (err) {
        // nothing to do
    }
}
