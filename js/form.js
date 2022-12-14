const $form = document.querySelector('#formulario')

$form.addEventListener('submit',handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'applicattion:/json'
            }
        })
        if (response.ok) {
            this.reset()
            alert("Gracias por contactarse")
        }
    }