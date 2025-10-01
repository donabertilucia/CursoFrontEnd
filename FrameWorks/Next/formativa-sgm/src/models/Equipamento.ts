//classe de modelagem de dados para Usuários
//mongoose -> vai ajusar na modelagem da classe

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IEquipamento extends Document {
  _id: string;
  nome: string;
  modelo: string;
  marca: string;
  numSerie: string;
  status: string;
  localizacao: string; 
}

//construtor (Schema)
const EquipamentoSchema: Schema<IEquipamento> = new Schema({
  nome: { type: String, required: true },
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  numSerie: { type: String, required: true, unique: true},
  status: { type: String, enum: ["ativo", "inativo", "manutencao"], default: "ativo"},
  localizacao: { type: String, required: true},
});

//toMap <=> fromMap

const Equipamento: Model<IEquipamento> = mongoose.models.Equipamento
|| mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

// componente reutilizavel

export default Equipamento;