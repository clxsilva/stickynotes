/**
 *  Processo de renderização do documento nota.html
 */
 
// Para "debugar" e testar a aplicação é necessário ativar as ferramentas do desenvolvedor <ctrl><shift><i>
 
// Capturar o foco da caixa de texto
const foco = document.getElementById('inputNote')
 
// Alterar as propriedades do documento html ao iniciar a aplicação
document.addEventListener('DOMContentLoaded', () => {
   foco.focus() // iniciar o documento com foco na caixa de texto
})

// Capturar os dados do formulário (Passo 1: - fluxo)
let frmNote = document.getElementById('frmNote')
let note = document.getElementById('inputNote')
let color = document.getElementById('selectColor')

// ===================================================
// == CRUD Create ====================================

// Evento relacionado ao botão submit
frmNote.addEventListener('submit', (event) => {
    // evitar o comportamento padrão (recarregar a página)
    event.preventDefault()
    // IMPORTANTE! (teste de recebimento dos dados do form - Passo 1)
    console.log(note.value, color.value)
    // Criar um objeto para enviar ao main os dados da nota
    const stickyNote = {
        textNote: note.value,
        colorNote: color.value
    }
    // Enviar o objeto para o main (Passo 2: fluxo)
    api.createNote(stickyNote)
})

// == Fim - CRUD Create ==============================
// ===================================================


// ===================================================
// == Resetar o Formulário ===========================

api.resetForm((args) => {
    // Recarregar a página
    location.reload()
})

// Uso da api resetForm quando salvar, editar ou excluir um cliente
api.resetForm((args) => {
    resetForm()
})

// == Fim - Resetar o Formulário =====================
// ===================================================