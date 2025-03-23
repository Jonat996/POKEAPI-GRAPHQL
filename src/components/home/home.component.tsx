
interface HomeComponentProps {
    nombre: string;
}

export const HomeComponent = ({nombre}:HomeComponentProps ) => {

    return (
        <div>
            <h1>Home</h1>
            <p>Bienvenido {nombre}</p>
        </div>
)
}