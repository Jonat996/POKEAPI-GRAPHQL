import styles from "./card.module.css";
interface CardProps {
  nombre: string;
  imagen: string;
}

export const PokeCard = ({ nombre, imagen }: CardProps) => {
  return (
    <div className="w-3xs bg-sky-800 shadow-lg shadow-black/50 rounded-t-sm rounded-b-4xl text-center m-2 p-4">
      <img
        className={`w-80 ${styles.poke_card_image}`}
        src={imagen}
        alt={nombre}
      />
      <h3 className="text-white font-poke-light text-2xl text">{nombre}</h3>
    </div>
  );
};
