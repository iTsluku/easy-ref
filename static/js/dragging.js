const draggableContainers = document.querySelectorAll('.draggable-container')
const draggableItems = document.querySelectorAll('.draggable-item')

draggableContainers.forEach(container => {
    container.addEventListener('dragstart', () => {
        container.classList.add('dragging-container')
    })
    container.addEventListener('dragend', () => {
        container.classList.remove('dragging-container')
    })
})

draggableItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging-item')
    })
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging-item')
    })
})


const s = document.querySelector('.draggable-container-space')
if (s){
    s.addEventListener('dragover', e => {
        e.preventDefault()
        const c = document.querySelector('.dragging-container')
        if (c){
            const afterElement = getDragAfterElementByY(s,e.clientY)
            if (afterElement==null){
                s.appendChild(c)
            }else{
                s.insertBefore(c,afterElement)
            }
        }
    })
}

function getDragAfterElementByY(container,y){
    const draggableContainerElements = [...container.querySelectorAll('.draggable-container:not(.dragging-container)')]
    return draggableContainerElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - (box.height / 2)
        if (offset<0 && offset>closest.offset){
            return {offset: offset, element: child}
        }
        return closest
    }, {offset: Number.NEGATIVE_INFINITY}).element
}

if (draggableContainers){
    draggableContainers.forEach(container => {
        container.addEventListener("dragover", e => {
            e.preventDefault()
            const c = document.querySelector('.dragging-item')
            if (c){
                const afterElement = getDragAfterElementByYX(container,e.clientX,e.clientY)
                if (afterElement==null){
                    container.appendChild(c)
                }else{
                    container.insertBefore(c,afterElement)
                }
            }
        })
    })
}

function getDragAfterElementByYX(container,x,y){
    const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging-item)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offsetY = y - box.top
        const offsetX = x - box.left - (box.width / 4)
        if (offsetY<0 && offsetY>closest.offsetY){
            return {offsetX: offsetX,offsetY: offsetY, element: child}
        }
        if (offsetY<box.height && offsetX<0 && offsetX>closest.offsetX){
            return {offsetX: offsetX,offsetY: offsetY, element: child}
        }
        return closest
    }, {offsetX: Number.NEGATIVE_INFINITY,offsetY: Number.NEGATIVE_INFINITY}).element
}
