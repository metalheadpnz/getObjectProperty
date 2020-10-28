const getObjectProperty = (obj, path, defaultValue) => {
    let paths = path.split('.');
    for (let i = 0; i < paths.length; i++) {
        if (obj[paths[i]] === undefined) {
            return defaultValue
        }
        else {
            obj = obj[paths[i]]
        }
    }
    return obj
}

const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
};

getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'

