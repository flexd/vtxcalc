export function filterBy(list, value) {
    return list.filter(function(item) {
        return item.indexOf(value) > -1;
    });
}

export function findBy(list, value) {
    return list.filter(function(item) {
        return item == value
    });
}

