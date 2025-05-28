export const inputFile = (newChild, refChild) => {
    const inputFile = document.querySelector('.js-file-input')
    const inputFileWrap = inputFile.parentElement
    const inputFileItems = document.querySelector('.js-file-items')
    const btnDelete = document.querySelectorAll('.js-file-delete')
    let inputFileItem

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

    inputFile.addEventListener('change', (e) => {
        const eTarget = e.target

        for (const file of inputFile.files) {
            if (allowedTypes.includes(file.type)) {
                if (eTarget.files[0]) {
                    const tmppath = URL.createObjectURL(eTarget.files[0]);
                    inputFileItem = '' +
                        '<div class="file-item bg-cover">' +
                        '<span class="file__delete js-file-delete">' +
                        '<svg>' +
                        '<use xlink:href="img/sprites/sprite.svg#delete"></use>' +
                        '</svg>' +
                        '</span>' +
                        '<img src="'+ tmppath +'" alt="">' +
                        '</div>'

                    inputFileItems.insertAdjacentHTML('afterBegin', inputFileItem)
                    inputFileWrap.classList.add('is-active')
                }
            }
        }
    })

    btnDelete.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            item.closest(".file-item").remove()

            if (inputFile.files.length < 1) {
                inputFile.value = ''
                Object.keys(inputFile.files).forEach((key) => delete inputFile.files[key])
                inputFileWrap.classList.remove('is-active')
            }
        })
    })
}