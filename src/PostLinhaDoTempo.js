const PostLinhaDoTempo = ({usuario, descricaoDaFoto, enderecoDaImagem}) => {
  return (
    <>
      <div>
        <img
          src={enderecoDaImagem}
          alt=""
          width="300px"
        />
      </div>
      <div>
        <button>curtir</button>
        <button>compartilhar</button>
        <button>comentar</button>
      </div>
      <strong>{usuario} </strong><span>{descricaoDaFoto}</span>
    </>
  );
};

export default PostLinhaDoTempo;
