describe('Teste initial', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173', {preserveOnce: true})
    })

    it('Teste', () => {
        cy.viewport(1920, 1080)
        cy.get('.cart').click()

        const cep = "36090698"
        const rua = "Rua 4 A nº 10"
        const complemento = "Apartamento"
        const bairro = "Barbosa Lage"
        const cidade = "Juiz de fora"
        const referencia = "MG"

        cy.get('#cep').type(`${cep}`)
        cy.get('#rua').type(`${rua}`)
        cy.get('#complemento').type(`${complemento}`)
        cy.get('#bairro').type(`${bairro}`)
        cy.get('#cidade').type(`${cidade}`)
        cy.wait(1000)
        cy.get('#referencia').type(`${referencia}`)
    })
})