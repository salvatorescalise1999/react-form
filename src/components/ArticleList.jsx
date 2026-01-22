function ArticleList({ articles }) {

    return (

        <ul>
            {/* Cicliamo sull'array articles */}
            {articles.map((article, index) => (
                // Ogni elemento deve avere una key unica, qui usiamo l'indice
                <li key={index}>
                    {/* Mostriamo direttamente la stringa dell'articolo */}
                    {article}
                </li>
            ))}
        </ul>
    );
}

export default ArticleList;