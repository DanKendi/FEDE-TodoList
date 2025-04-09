"use client"
import { useState } from "react"
import axios from "axios"

const FormNovaTarefa = () => {
    const [titulo, setTitulo] = useState("")

    const enviarTarefa = () => {
        if(titulo.trim() !== ""){
            axios.post("https://jsonplaceholder.typicode.com/todos", {
                title: titulo,
                completed: false,
                userId: 1
            })
            .then((resposta) => {
                alert("Tarefa enviada (simulada): "+ JSON.stringify(resposta.data))
                setTitulo("")
            })
            .catch((erro) => alert("Erro ao enviar tarefa."))
        }
    }

    const atualizarTitulo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(evento.target.value)
    }

    return(
        <div style={{marginBottom: "24px"}}>
            <input type="text" value={titulo}  onChange={atualizarTitulo} placeholder="Digite uma tarefa..."/>
            <button onClick={enviarTarefa}>Adicionar</button>
        </div>
    )
}

export default FormNovaTarefa;