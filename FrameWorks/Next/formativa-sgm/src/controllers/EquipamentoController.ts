
import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb";

// getAll
export const getAllEquipamento = async () => {
  await connectMongo(); //estabelece conexão
  const equipamentos = await Equipamento.find([]); //listar todos os usuários da coleção
  return equipamentos;
};
// getOne
export const getOneEquipamento = async (id: string) => {
  await connectMongo(); //estabelece conexão
  const equipamento = await Equipamento.findById(id); //listar todos os usuários da coleção
  return equipamento;
};

// create
export const createEquipamento = async (data: Partial<IEquipamento>) => {
  await connectMongo();
  const novoEquipamento = new Equipamento(data);
  const novoEquipamentoId = novoEquipamento.save();
  return novoEquipamentoId;
};
// update
export const updateEquipamento = async (id: string, data: Partial<IEquipamento>) => {
  await connectMongo();
  const EquipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, {
    new: true,
  });
  return EquipamentoAtualizado;
};
// delete
export const deleteEquipamento = async (id: string) => {
  await connectMongo();
  await Equipamento.findByIdAndDelete(id);
};
