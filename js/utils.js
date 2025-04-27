function reload(arr, container, component) {
    container.innerHTML = ""

    for (const item of arr) {
        const elem = component(item)

        container.append(elem)
    }
}

export {reload}