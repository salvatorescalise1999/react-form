import { useState } from "react";
import ArticleList from "./ArticleList"

function Articles() {

    const [articles, setArticles] = useState([
        "Introduzione a React",
        "State e Props",
        "Componenti e JSX"
    ]);


    // stato dell'input del form
    const [newArticle, setNewArticle] = useState('');


    // NUOVO: funzione per submit del form
    const addArticle = e => {
        e.preventDefault(); // blocca il refresh della pagina

        // nuovo array con articoli esistenti + quello inserito
        const updatedArticles = [...articles, newArticle];

        // aggiorna la lista degli articoli
        setArticles(updatedArticles);

        // svuota l’input
        setNewArticle('');
    };

    // Return: titolo, form e lista
    return (
        <div>
            {/* Titolo pagina */}
            <h1>Articoli del blog</h1>

            {/* Lista articoli */}
            <ArticleList articles={articles} />

            {/* Form per aggiungere articolo */}
            <form onSubmit={addArticle}>
                <input
                    type="text"
                    placeholder="Titolo articolo"
                    value={newArticle}        // valore controllato dallostato React
                    onChange={e => setNewArticle(e.target.value)}    // aggiorna stato ad ogni battuta
                />
                {/* pulsante per inviare il form */}
                <button>Aggiungi</button>      {/* quando premuto, di default chiama la funzione addArticle */}
            </form>
        </div>
    );
}

export default Articles