"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';

interface Tarefa {
    id: number;
    title: string;
    completed: boolean;
}

const ListaTarefas = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((resposta) => {
                setTarefas(resposta.data)
                setCarregando(false)
            })
            .catch(() => setCarregando(false));
    }, [])

    const deletarTarefa = (id: number) =>{
        axios.delete("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(() => {
            alert("Tarefa deletada com sucesso!(simulada)")
            //Código específico para simular, uma vez que a API é gratuita
            const novasTarefas = tarefas.filter((dados) => dados.id !== id)
            setTarefas(novasTarefas)
        })
        .catch(() => alert("Erro ao deletar!"))
    }

    if (carregando) {
        return <h1>CARREGANDO TAREFAS...</h1>
    }

    return (
        <>
            <ul>
                {tarefas.map((tarefas) => {
                    return (
                        <li key={tarefas.id}>{tarefas.title}
                        <button onClick={() => deletarTarefa(tarefas.id)}>Deletar</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ListaTarefas;