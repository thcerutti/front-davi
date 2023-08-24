import Bio from "./Bio";
import PostagensDoPerfil from "./PostagensDoPerfil";

const Perfil = () => {
  return (
    <>
      <div>
        <img
          src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100"
          alt=""
        />
      </div>
      <strong>Davi</strong>
      <Bio />
      <PostagensDoPerfil />
    </>
  );
};

export default Perfil;
