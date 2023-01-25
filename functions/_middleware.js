import staticFormsPlugin from '@cloudflare/pages-plugin-static-forms'

export const onRequest = staticFormsPlugin({
    respondWith: ({ formData, name }) => {
        console.log({formName: name, formData})
        const email = formData.get('email')
        return new Response(
            `Hello, ${email}! Thank you for submitting the ${name} form.`
        )
    }
})