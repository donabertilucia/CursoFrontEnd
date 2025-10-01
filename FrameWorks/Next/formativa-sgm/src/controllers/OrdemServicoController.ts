
import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";

// getAll
export const getAllOrdemServico = async () => {
  await connectMongo(); //estabelece conexão
  const ordemServicos = await OrdemServico.find([]); //listar todos os usuários da coleção
  return ordemServicos;
};
// getOne
export const getOneOrdemServico = async (id: string) => {
  await connectMongo(); //estabelece conexão
  const ordemServico = await OrdemServico.findById(id); //listar todos os usuários da coleção
  return ordemServico;
};

// create
export const createOrdemServico = async (data: Partial<IOrdemServico>) => {
  await connectMongo();
  const novoOrdemServico = new OrdemServico(data);
  const novoOrdemServicoId = novoOrdemServico.save();
  return novoOrdemServicoId;
};
// update
export const updateOrdemServico = async (
  id: string,
  data: Partial<IOrdemServico>
) => {
  await connectMongo();
  const OrdemServicoAtualizado = await OrdemServico.findByIdAndUpdate(id, data, {
    new: true,
  });
  return OrdemServicoAtualizado;
};
// delete
export const deleteOrdemServico = async (id: string) => {
  await connectMongo();
  await OrdemServico.findByIdAndDelete(id);
};
