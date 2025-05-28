import JustValidate from 'just-validate';

export const formValidate = () => {
    const phoneInput = document?.querySelector('.js-mask-phone')
    const validate = new JustValidate('[name="reviewsForm"]', {
        validateBeforeSubmitting: true,
    });

    validate
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Обязательное поле',
            },
        ])
        .addField('#message', [
            {
                rule: 'required',
                errorMessage: 'Обязательное поле',
            },
        ])
        .addField('#email', [
            {
                rule: 'email',
                errorMessage: 'Email не корректный!',
            },
        ])
        .addField('#file', [
            {
                rule: 'minFilesCount',
                value: 1,
                errorMessage: 'Минимум один файл',
            },
            {
                rule: 'maxFilesCount',
                value: 2,
                errorMessage: 'Максимум два файла',
            },
            {
                rule: 'files',
                value: {
                    files: {
                        extensions: ['jpeg', 'jpg', 'png'],
                        maxSize: 1000000,
                        minSize: 0,
                        types: ['image/jpeg', 'image/jpg', 'image/png'],
                    },
                },
                errorMessage: 'Формат файла не подходит',
            },
        ])

    setTimeout(()=> {
        validate
            .addField('#phone', [
                    {
                        rule: 'function',
                        validator: function(name, value) {
                            const phone = phoneInput.inputmask.unmaskedvalue()
                            return phone.length === 10
                        },
                        errorMessage: 'Телефон не корректный!',
                    },
                ])
    }, 1)

    validate.onSuccess((e) => {
        const form = e.target
        form.classList.add("is-success")
    })
}