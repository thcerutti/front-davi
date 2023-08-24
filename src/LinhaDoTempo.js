import PostLinhaDoTempo from "./PostLinhaDoTempo";

const LinhaDoTempo = () => {
  const posts = [
    {
      usuario: "davi",
      descricao: "meu gato",
      enderecoDaImagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0DjfMscZUqiwUgk3Biv1HI0G5X3dJj4g8gwCspcwXg&s",
    },
    {
      usuario: "davi",
      descricao: "meu gato novamente",
      enderecoDaImagem:
        "https://www.petz.com.br/blog/wp-content/uploads/2019/06/tamanho-de-gato.jpg",
    },
    {
      usuario: "davi",
      descricao: "meu gato mais uma vez",
      enderecoDaImagem:
        "https://media.istockphoto.com/id/1326411219/pt/foto/calico-cat-with-green-eyes-lying-on-cardboard-scratch-board.jpg?s=612x612&w=0&k=20&c=X54JSJnTWTt3pc2udoEgysbS_prAetPrX7axC9I-Pa0=",
    },
  ];
  return (
    <>
      {posts.map((post) => (
        <PostLinhaDoTempo
          usuario={post.usuario}
          descricaoDaFoto={post.descricao}
          enderecoDaImagem={post.enderecoDaImagem}
        />
      ))}
    </>
  );
};

export default LinhaDoTempo;
