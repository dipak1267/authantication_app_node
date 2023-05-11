const ViewMap = (data) => {
    if (data) {
        const { _id, title, createdAt, updatedAt } = data;
        return {
            id: _id ? _id : undefined,
            title,
            createdAt,
            updatedAt
        };
    }
    return null;
};

const ViewListMap = (data) => {
    if (Array.isArray(data)) {
        let viewData = data.map((item) => {
            ViewMap(item);
        });
        return viewData;
    }
    return null
}

module.exports = {
    ViewMap,
    ViewListMap,
}