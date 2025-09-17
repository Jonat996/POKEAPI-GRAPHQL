import style from "./header.module.css";

/**
 * This component represents the header of the application, displaying the Pokémon logo and returning to the home page.
 * @returns 
 */
export const Header = () => {
  return (
    <div 
    className="bg-sky-900 p-4 font-poke-light 
     flex justify-center 
     rounded-b-lg shadow-lg shadow-black/50">
      <img
        className={`h-16 ${style.poke_logo}`}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemon-logo"
      />
    </div>
  );
};
