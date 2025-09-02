
interface ICompetidor {
  id: string;
  nombre: string;
  edad: number;
  listarIntegrantes(): string[]; //metodo para listar integrantes
}
export default ICompetidor;